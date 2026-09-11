import {
  ViaPostAPIError,
  ViaPostConnectionError,
  ViaPostResponseTooLargeError,
  ViaPostTimeoutError,
} from "./errors.js";
import type { Fetch, Query, RequestOptions, RetryOptions } from "./types.js";
import { USER_AGENT } from "./version.js";

const DEFAULT_BASE_URL = "https://api.viapost.io";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_RESPONSE_BYTES = 10 * 1024 * 1024;
const DEFAULT_MAX_RETRIES = 2;
const DEFAULT_BASE_DELAY_MS = 250;
const DEFAULT_MAX_DELAY_MS = 30_000;

type Method = "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

export interface HTTPClientOptions {
  readonly apiKey: string;
  readonly baseUrl?: string;
  readonly timeoutMs?: number;
  readonly maxResponseBytes?: number;
  readonly retry?: RetryOptions;
  readonly fetch?: Fetch;
}

export interface HTTPRequestOptions extends RequestOptions {
  readonly query?: Query | object;
  readonly body?: unknown;
  readonly headers?: Readonly<Record<string, string>>;
}

export class HTTPClient {
  readonly #apiKey: string;
  readonly #baseUrl: string;
  readonly #timeoutMs: number;
  readonly #maxResponseBytes: number;
  readonly #maxRetries: number;
  readonly #baseDelayMs: number;
  readonly #maxDelayMs: number;
  readonly #fetch: Fetch;

  constructor(options: HTTPClientOptions) {
    if (!options.apiKey.trim()) {
      throw new TypeError("apiKey must be a non-empty string");
    }

    this.#apiKey = options.apiKey.trim();
    this.#baseUrl = normalizeBaseUrl(options.baseUrl ?? DEFAULT_BASE_URL);
    this.#timeoutMs = positiveInteger(options.timeoutMs ?? DEFAULT_TIMEOUT_MS, "timeoutMs");
    this.#maxResponseBytes = positiveInteger(
      options.maxResponseBytes ?? DEFAULT_MAX_RESPONSE_BYTES,
      "maxResponseBytes",
    );
    this.#maxRetries = nonNegativeInteger(options.retry?.maxRetries ?? DEFAULT_MAX_RETRIES, "retry.maxRetries");
    this.#baseDelayMs = nonNegativeInteger(options.retry?.baseDelayMs ?? DEFAULT_BASE_DELAY_MS, "retry.baseDelayMs");
    this.#maxDelayMs = nonNegativeInteger(options.retry?.maxDelayMs ?? DEFAULT_MAX_DELAY_MS, "retry.maxDelayMs");
    this.#fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  async request<T>(method: Method, path: string, options: HTTPRequestOptions = {}): Promise<T> {
    const url = createUrl(this.#baseUrl, path, options.query);
    const safeToRetry = method === "GET" || method === "HEAD";
    let attempt = 0;

    while (true) {
      const { body, response } = await this.#requestWithTimeout(method, url, options);
      if (safeToRetry && isRetryable(response.status) && attempt < this.#maxRetries) {
        await delay(retryDelay(response.headers.get("retry-after"), attempt, this.#baseDelayMs, this.#maxDelayMs), options.signal);
        attempt += 1;
        continue;
      }

      if (!response.ok) {
        const requestId =
          nonEmpty(response.headers.get("x-request-id")) ??
          nonEmpty(response.headers.get("x-correlation-id")) ??
          requestIdFromBody(body);
        throw new ViaPostAPIError(errorMessage(body, response.status), {
          status: response.status,
          method,
          url: url.toString(),
          body,
          requestId,
          headers: response.headers,
        });
      }

      return body as T;
    }
  }

  async #requestWithTimeout(
    method: Method,
    url: URL,
    options: HTTPRequestOptions,
  ): Promise<{ readonly response: Response; readonly body: unknown }> {
    const timeoutMs = positiveInteger(options.timeoutMs ?? this.#timeoutMs, "timeoutMs");
    const headers = new Headers(options.headers);
    headers.set("Authorization", `Bearer ${this.#apiKey}`);
    headers.set("Accept", "application/json");
    headers.set("User-Agent", USER_AGENT);
    let requestBody: string | undefined;
    if (options.body !== undefined) {
      headers.set("Content-Type", "application/json");
      requestBody = JSON.stringify(options.body);
    }

    const controller = new AbortController();
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, timeoutMs);
    const abortFromCaller = () => controller.abort(options.signal?.reason);
    options.signal?.addEventListener("abort", abortFromCaller, { once: true });
    if (options.signal?.aborted) abortFromCaller();

    try {
      controller.signal.throwIfAborted();
      const response = await this.#fetch(url, {
        method,
        headers,
        ...(requestBody === undefined ? {} : { body: requestBody }),
        signal: controller.signal,
      });
      const responseBody = await readBody(response, controller.signal, this.#maxResponseBytes);
      return { response, body: responseBody };
    } catch (error) {
      if (timedOut) throw new ViaPostTimeoutError(timeoutMs);
      if (options.signal?.aborted) throw options.signal.reason ?? error;
      if (error instanceof ViaPostResponseTooLargeError) throw error;
      throw new ViaPostConnectionError(error);
    } finally {
      clearTimeout(timeout);
      options.signal?.removeEventListener("abort", abortFromCaller);
    }
  }
}

function normalizeBaseUrl(value: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new TypeError("baseUrl must be an absolute HTTP(S) URL");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new TypeError("baseUrl must use HTTP or HTTPS");
  }
  if (url.protocol === "http:" && !isLoopbackHostname(url.hostname)) {
    throw new TypeError("baseUrl must use HTTPS except for loopback development hosts");
  }
  if (url.username || url.password) {
    throw new TypeError("baseUrl must not contain credentials");
  }
  url.pathname = url.pathname.replace(/\/+$/, "");
  url.search = "";
  url.hash = "";
  return url.toString().replace(/\/$/, "");
}

function createUrl(baseUrl: string, path: string, query: Query | object | undefined): URL {
  const url = new URL(`${baseUrl}/${path.replace(/^\/+/, "")}`);
  if (!query) return url;
  for (const [key, rawValue] of Object.entries(query)) {
    if (rawValue === undefined || rawValue === null) continue;
    const values = Array.isArray(rawValue) ? rawValue : [rawValue];
    for (const value of values) url.searchParams.append(key, String(value));
  }
  return url;
}

function isRetryable(status: number): boolean {
  return status === 429 || (status >= 500 && status <= 599);
}

function retryDelay(retryAfter: string | null, attempt: number, baseDelayMs: number, maxDelayMs: number): number {
  if (retryAfter) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0) return Math.min(seconds * 1_000, maxDelayMs);
    const dateDelay = Date.parse(retryAfter) - Date.now();
    if (Number.isFinite(dateDelay) && dateDelay > 0) return Math.min(dateDelay, maxDelayMs);
  }
  return Math.min(baseDelayMs * 2 ** attempt, maxDelayMs);
}

async function delay(ms: number, signal?: AbortSignal): Promise<void> {
  if (signal?.aborted) throw signal.reason;
  await new Promise<void>((resolve, reject) => {
    const finish = () => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    };
    const timer = setTimeout(finish, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

function isLoopbackHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase();
  return (
    normalized === "localhost" ||
    normalized.endsWith(".localhost") ||
    /^127(?:\.\d{1,3}){3}$/.test(normalized) ||
    normalized === "[::1]" ||
    normalized === "::1"
  );
}

async function readBody(response: Response, signal: AbortSignal, maxResponseBytes: number): Promise<unknown> {
  if (response.status === 204 || response.status === 205 || response.status === 304) return undefined;
  if (!response.body) return undefined;

  const contentLength = Number(response.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxResponseBytes) {
    void response.body.cancel().catch(() => undefined);
    throw new ViaPostResponseTooLargeError(maxResponseBytes);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  let bytesRead = 0;
  try {
    while (true) {
      const { done, value } = await readWithAbort(reader, signal);
      if (done) break;
      bytesRead += value.byteLength;
      if (bytesRead > maxResponseBytes) throw new ViaPostResponseTooLargeError(maxResponseBytes);
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } catch (error) {
    try {
      void reader.cancel(signal.reason ?? error).catch(() => undefined);
    } catch {
      // Cancellation is best-effort; abort and size-limit errors must never wait on a custom stream.
    }
    throw error;
  } finally {
    try {
      reader.releaseLock();
    } catch {
      // A custom stream may still have a pending read while its cancellation settles.
    }
  }
  if (!text) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

async function readWithAbort(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  signal: AbortSignal,
): Promise<ReadableStreamReadResult<Uint8Array>> {
  signal.throwIfAborted();
  let onAbort: (() => void) | undefined;
  const aborted = new Promise<never>((_resolve, reject) => {
    onAbort = () => {
      reject(signal.reason);
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
  try {
    return await Promise.race([reader.read(), aborted]);
  } finally {
    if (onAbort) signal.removeEventListener("abort", onAbort);
  }
}

function requestIdFromBody(body: unknown): string | undefined {
  if (!body || typeof body !== "object" || !("error" in body)) return undefined;
  const error = (body as { error?: unknown }).error;
  if (!error || typeof error !== "object" || !("request_id" in error)) return undefined;
  return nonEmpty((error as { request_id?: unknown }).request_id);
}

function nonEmpty(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function errorMessage(body: unknown, status: number): string {
  if (body && typeof body === "object" && "error" in body) {
    const error = (body as { error?: unknown }).error;
    if (typeof error === "string") return error;
    if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
      return error.message;
    }
  }
  return `ViaPost API request failed with status ${status}`;
}

function positiveInteger(value: number, name: string): number {
  if (!Number.isSafeInteger(value) || value <= 0) throw new TypeError(`${name} must be a positive integer`);
  return value;
}

function nonNegativeInteger(value: number, name: string): number {
  if (!Number.isSafeInteger(value) || value < 0) throw new TypeError(`${name} must be a non-negative integer`);
  return value;
}

export const internal = { createUrl, normalizeBaseUrl, retryDelay };
