export interface ViaPostAPIErrorOptions {
  readonly status: number;
  readonly method: string;
  readonly url: string;
  readonly body: unknown;
  readonly requestId?: string | undefined;
  readonly headers: Headers;
}

export class ViaPostError extends Error {
  override readonly name: string = "ViaPostError";
}

export class ViaPostAPIError extends ViaPostError {
  override readonly name = "ViaPostAPIError";
  readonly status: number;
  readonly method: string;
  readonly url: string;
  readonly body: unknown;
  readonly requestId: string | undefined;
  readonly headers: Headers;

  constructor(message: string, options: ViaPostAPIErrorOptions) {
    super(message);
    this.status = options.status;
    this.method = options.method;
    this.url = options.url;
    this.body = options.body;
    this.requestId = options.requestId;
    this.headers = options.headers;
  }
}

export class ViaPostTimeoutError extends ViaPostError {
  override readonly name = "ViaPostTimeoutError";
  readonly timeoutMs: number;

  constructor(timeoutMs: number) {
    super(`ViaPost request timed out after ${timeoutMs}ms`);
    this.timeoutMs = timeoutMs;
  }
}

export class ViaPostConnectionError extends ViaPostError {
  override readonly name = "ViaPostConnectionError";
  override readonly cause: unknown;

  constructor(cause: unknown) {
    super("Unable to connect to the ViaPost API");
    this.cause = cause;
  }
}

export class ViaPostResponseTooLargeError extends ViaPostError {
  override readonly name = "ViaPostResponseTooLargeError";
  readonly maxResponseBytes: number;

  constructor(maxResponseBytes: number) {
    super(`ViaPost response exceeded the ${maxResponseBytes}-byte limit`);
    this.maxResponseBytes = maxResponseBytes;
  }
}
