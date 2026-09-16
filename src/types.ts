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
export type Contact = components["schemas"]["Contact"];
export type ContactList = components["schemas"]["ContactList"];
export type CustomEvent = components["schemas"]["CustomEvent"];
export type CustomEventList = components["schemas"]["CustomEventList"];
export type CustomEventDelivery = components["schemas"]["CustomEventDelivery"];
export type Segment = components["schemas"]["Segment"];
export type SegmentList = components["schemas"]["SegmentList"];
export type Suppression = components["schemas"]["Suppression"];
export type SuppressionList = components["schemas"]["SuppressionList"];
export type SuppressionDetail = components["schemas"]["SuppressionDetail"];
export type SuppressionImportResult = components["schemas"]["SuppressionImportResult"];
export type Theme = components["schemas"]["Theme"];
export type ThemeList = components["schemas"]["ThemeList"];
export type Domain = components["schemas"]["Domain"];
export type DomainList = components["schemas"]["DomainList"];
export type DNSRecordList = components["schemas"]["DNSRecordList"];
export type CreateDomainResponse = components["schemas"]["CreateDomainResponse"];
export type RotateDKIMResponse = components["schemas"]["RotateDKIMResponse"];
export type Message = components["schemas"]["Message"];
export type MessageDetail = components["schemas"]["MessageDetail"];
export type MessageList = components["schemas"]["MessageList"];
export type MessageEventList = components["schemas"]["MessageEventList"];
export type InboundMessageList = components["schemas"]["InboundMessageList"];
export type InboundMessageDetail = components["schemas"]["InboundMessageDetail"];
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
export type WebhookEndpoint = components["schemas"]["WebhookEndpoint"];
export type WebhookDeliveryPage = components["schemas"]["WebhookDeliveryPage"];
export type WebhookDeliveryDetail = components["schemas"]["WebhookDeliveryDetail"];
export type WebhookReplayAccepted = components["schemas"]["WebhookReplayAccepted"];
export type WebhookTestAccepted = components["schemas"]["WebhookTestAccepted"];
export type RotateWebhookSecretResponse = components["schemas"]["RotateWebhookSecretResponse"];
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

export interface RequiredIdempotencyOptions extends RequestOptions {
  readonly idempotencyKey: string;
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
  /** Maximum decoded response body size. Defaults to 32 MiB. */
  readonly maxResponseBytes?: number;
  readonly retry?: RetryOptions;
  /** Trusted server-side fetch implementation, primarily for tests and custom runtimes. */
  readonly fetch?: Fetch;
}
