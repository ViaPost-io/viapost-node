import type { components, operations } from "./generated/openapi.js";

export type APIComponents = components;
export type APIOperations = operations;

export type QueryOf<K extends keyof operations> = operations[K] extends {
  parameters: { query?: infer Query };
}
  ? Exclude<Query, undefined>
  : never;

export type BodyOf<K extends keyof operations> = operations[K] extends {
  requestBody: { content: { "application/json": infer Body } };
}
  ? Body
  : operations[K] extends {
        requestBody?: { content: { "application/json": infer Body } };
      }
    ? Body
    : never;

export type Automation = components["schemas"]["Automation"];
export type AutomationList = components["schemas"]["AutomationList"];
export type AutomationRunList = components["schemas"]["AutomationRunList"];
export type AutomationRunDetail = components["schemas"]["AutomationRunDetail"];
export type Domain = components["schemas"]["Domain"];
export type DomainList = components["schemas"]["DomainList"];
export type DNSRecordList = components["schemas"]["DNSRecordList"];
export type CreateDomainResponse = components["schemas"]["CreateDomainResponse"];
export type RotateDKIMResponse = components["schemas"]["RotateDKIMResponse"];
export type Message = components["schemas"]["Message"];
export type MessageList = components["schemas"]["MessageList"];
export type MessageEventList = components["schemas"]["MessageEventList"];
export type EngagementResponse = components["schemas"]["EngagementResponse"];
export type MetricsResponse = components["schemas"]["MetricsResponse"];
export type TimeseriesResponse = components["schemas"]["TimeseriesResponse"];
export type SendRequest = components["schemas"]["SendRequest"];
export type SendResultRaw = components["schemas"]["SendResult"];
export type AcceptedMessage = components["schemas"]["AcceptedMessage"];
export type RejectedMessage = components["schemas"]["RejectedMessage"];
export type SendResult = Omit<SendResultRaw, "accepted" | "rejected"> & {
  readonly accepted: readonly AcceptedMessage[];
  readonly rejected: readonly RejectedMessage[];
};
export type EmailTemplate = components["schemas"]["EmailTemplate"];
export type EmailTemplateVersion = components["schemas"]["EmailTemplateVersion"];
export type TemplateList = components["schemas"]["TemplateList"];
export type TemplateVersionList = components["schemas"]["TemplateVersionList"];
export type CreateTemplateResponse = components["schemas"]["CreateTemplateResponse"];
export type UpdateTemplateDraftResponse = components["schemas"]["UpdateTemplateDraftResponse"];
export type PreviewTemplateResponse = components["schemas"]["PreviewTemplateResponse"];
export type TemplateAssetPolicy = components["schemas"]["TemplateAssetPolicy"];
export type WebhookList = components["schemas"]["WebhookList"];
export type CreateWebhookResponse = components["schemas"]["CreateWebhookResponse"];
export type MonthlyUsage = components["schemas"]["MonthlyUsage"];

export type QueryValue = string | number | boolean | null | undefined | readonly (string | number | boolean)[];
export type Query = Readonly<Record<string, QueryValue>>;

export interface RequestOptions {
  readonly signal?: AbortSignal;
  readonly timeoutMs?: number;
}

export interface SendOptions extends RequestOptions {
  readonly idempotencyKey?: string;
}

export interface RetryOptions {
  /** Number of retries after the initial GET/HEAD request. */
  readonly maxRetries?: number;
  readonly baseDelayMs?: number;
  readonly maxDelayMs?: number;
}

export type Fetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

export interface ViaPostOptions {
  readonly apiKey: string;
  readonly baseUrl?: string;
  /** Per-request timeout. Defaults to 60 seconds. */
  readonly timeoutMs?: number;
  /** Maximum decoded response body size. Defaults to 10 MiB. */
  readonly maxResponseBytes?: number;
  readonly retry?: RetryOptions;
  /** Trusted server-side fetch implementation, primarily for tests and custom runtimes. */
  readonly fetch?: Fetch;
}
