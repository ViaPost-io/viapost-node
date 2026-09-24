import type { HTTPClient } from "./http.js";
import type {
  Automation,
  AutomationList,
  AutomationRunDetail,
  AutomationRunList,
  BodyOf,
  Contact,
  ContactList,
  CreateDomainResponse,
  CreateTemplateResponse,
  CreateWebhookResponse,
  CustomEvent,
  CustomEventDelivery,
  CustomEventList,
  DNSRecordList,
  Domain,
  DomainList,
  EmailTemplate,
  EmailTemplateVersion,
  EngagementResponse,
  EventSendOptions,
  InboundMessageDetail,
  InboundMessageList,
  MessageDetail,
  MessageEventList,
  MessageList,
  MetricsResponse,
  MonthlyUsage,
  PreviewTemplateResponse,
  QueryOf,
  RequestOptions,
  RequiredIdempotencyOptions,
  RotateDKIMResponse,
  RotateWebhookSecretResponse,
  Segment,
  SegmentList,
  SendOptions,
  SendRequest,
  SendResult,
  SendResultRaw,
  Suppression,
  SuppressionDetail,
  SuppressionImportResult,
  SuppressionList,
  TemplateAssetPolicy,
  TemplateList,
  TemplateVersionList,
  Theme,
  ThemeList,
  TimeseriesResponse,
  UpdateTemplateDraftResponse,
  WebhookList,
  WebhookDeliveryDetail,
  WebhookDeliveryPage,
  WebhookEndpoint,
  WebhookReplayAccepted,
  WebhookTestAccepted,
} from "./types.js";

const forbiddenIdempotencyCodePoint = /[\p{Cc}\p{Cf}]/u;
const MAX_SUPPRESSION_CSV_BYTES = 2 * 1024 * 1024;

function pathParam(name: string, value: string): string {
  if (value.length === 0 || value === "." || value === "..") {
    throw new TypeError(`${name} must be a non-empty path value other than '.' or '..'`);
  }
  return encodeURIComponent(value);
}

function validateIdempotencyKey(value: string): void {
  const byteLength = new TextEncoder().encode(value).byteLength;
  if (byteLength === 0 || byteLength > 255) {
    throw new TypeError("idempotencyKey must contain between 1 and 255 bytes when UTF-8 encoded");
  }
  if (forbiddenIdempotencyCodePoint.test(value)) {
    throw new TypeError("idempotencyKey must not contain Unicode control or format characters");
  }
  if (!/^[\x21-\x7e]+$/.test(value)) {
    throw new TypeError("idempotencyKey must contain visible ASCII characters only");
  }
}

function idempotencyHeaders(value: string): Readonly<Record<string, string>> {
  validateIdempotencyKey(value);
  return { "Idempotency-Key": value };
}

export class SendResource {
  constructor(private readonly http: HTTPClient) {}

  async create(input: SendRequest, options: SendOptions = {}): Promise<SendResult> {
    const headers = options.idempotencyKey === undefined ? undefined : idempotencyHeaders(options.idempotencyKey);
    const raw = await this.http.request<SendResultRaw>("POST", "/v1/send", {
      body: input,
      ...(headers ? { headers } : {}),
      ...(options.signal ? { signal: options.signal } : {}),
      ...(options.timeoutMs === undefined ? {} : { timeoutMs: options.timeoutMs }),
    });
    return { ...raw, accepted: raw.accepted ?? [], rejected: raw.rejected ?? [] };
  }
}

export class ContactsResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getContacts"> = {}, options: RequestOptions = {}) {
    return this.http.request<ContactList>("GET", "/v1/contacts", { query, ...options });
  }
  create(input: BodyOf<"postContacts">, options: RequestOptions = {}) {
    return this.http.request<Contact>("POST", "/v1/contacts", { body: input, ...options });
  }
  retrieve(contactId: string, options: RequestOptions = {}) {
    return this.http.request<Contact>("GET", `/v1/contacts/${pathParam("contactId", contactId)}`, options);
  }
  update(contactId: string, input: BodyOf<"patchContactsId">, options: RequestOptions = {}) {
    return this.http.request<Contact>("PATCH", `/v1/contacts/${pathParam("contactId", contactId)}`, {
      body: input,
      ...options,
    });
  }
  delete(contactId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/contacts/${pathParam("contactId", contactId)}`, options);
  }
}

export class EventsResource {
  constructor(private readonly http: HTTPClient) {}
  list(options: RequestOptions = {}) {
    return this.http.request<CustomEventList>("GET", "/v1/events", options);
  }
  create(input: BodyOf<"postEvents">, options: RequestOptions = {}) {
    return this.http.request<CustomEvent>("POST", "/v1/events", { body: input, ...options });
  }
  send(input: BodyOf<"postEventsSend">, options: EventSendOptions = {}) {
    const headers = options.idempotencyKey === undefined ? undefined : idempotencyHeaders(options.idempotencyKey);
    return this.http.request<CustomEventDelivery>("POST", "/v1/events/send", {
      body: input,
      ...(headers ? { headers } : {}),
      ...(options.signal ? { signal: options.signal } : {}),
      ...(options.timeoutMs === undefined ? {} : { timeoutMs: options.timeoutMs }),
    });
  }
  update(eventId: string, input: BodyOf<"patchEventsId">, options: RequestOptions = {}) {
    return this.http.request<CustomEvent>("PATCH", `/v1/events/${pathParam("eventId", eventId)}`, {
      body: input,
      ...options,
    });
  }
  delete(eventId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/events/${pathParam("eventId", eventId)}`, options);
  }
}

export class SegmentsResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getSegments"> = {}, options: RequestOptions = {}) {
    return this.http.request<SegmentList>("GET", "/v1/segments", { query, ...options });
  }
  create(input: BodyOf<"postSegments">, options: RequestOptions = {}) {
    return this.http.request<Segment>("POST", "/v1/segments", { body: input, ...options });
  }
  retrieve(segmentId: string, options: RequestOptions = {}) {
    return this.http.request<Segment>("GET", `/v1/segments/${pathParam("segmentId", segmentId)}`, options);
  }
  update(segmentId: string, input: BodyOf<"patchSegmentsId">, options: RequestOptions = {}) {
    return this.http.request<Segment>("PATCH", `/v1/segments/${pathParam("segmentId", segmentId)}`, {
      body: input,
      ...options,
    });
  }
  delete(segmentId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/segments/${pathParam("segmentId", segmentId)}`, options);
  }
  listContacts(segmentId: string, query: QueryOf<"getSegmentsIdContacts"> = {}, options: RequestOptions = {}) {
    return this.http.request<ContactList>("GET", `/v1/segments/${pathParam("segmentId", segmentId)}/contacts`, {
      query,
      ...options,
    });
  }
  addContact(segmentId: string, input: BodyOf<"postSegmentsIdContacts">, options: RequestOptions = {}) {
    return this.http.request<void>("POST", `/v1/segments/${pathParam("segmentId", segmentId)}/contacts`, {
      body: input,
      ...options,
    });
  }
  removeContact(segmentId: string, contactId: string, options: RequestOptions = {}) {
    return this.http.request<void>(
      "DELETE",
      `/v1/segments/${pathParam("segmentId", segmentId)}/contacts/${pathParam("contactId", contactId)}`,
      options,
    );
  }
}

export class SuppressionsResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getSuppressions"> = {}, options: RequestOptions = {}) {
    return this.http.request<SuppressionList>("GET", "/v1/suppressions", { query, ...options });
  }
  create(input: BodyOf<"postSuppressions">, options: RequestOptions = {}) {
    return this.http.request<Suppression>("POST", "/v1/suppressions", { body: input, ...options });
  }
  retrieve(suppressionId: string, query: QueryOf<"getSuppressionsId"> = {}, options: RequestOptions = {}) {
    return this.http.request<SuppressionDetail>(
      "GET",
      `/v1/suppressions/${pathParam("suppressionId", suppressionId)}`,
      { query, ...options },
    );
  }
  release(suppressionId: string, input: BodyOf<"postSuppressionsIdRelease">, options: RequestOptions = {}) {
    return this.http.request<Suppression>(
      "POST",
      `/v1/suppressions/${pathParam("suppressionId", suppressionId)}/release`,
      { body: input, ...options },
    );
  }
  importCsv(csv: string, options: RequestOptions = {}) {
    if (new TextEncoder().encode(csv).byteLength > MAX_SUPPRESSION_CSV_BYTES) {
      throw new TypeError("suppression CSV must not exceed 2 MiB when UTF-8 encoded");
    }
    return this.http.request<SuppressionImportResult>("POST", "/v1/suppressions/import", {
      rawBody: { contentType: "text/csv; charset=utf-8", value: csv },
      ...options,
    });
  }
  exportCsv(query: QueryOf<"getSuppressionsExport"> = {}, options: RequestOptions = {}) {
    return this.http.request<string>("GET", "/v1/suppressions/export", {
      query,
      headers: { Accept: "text/csv" },
      responseType: "text",
      ...options,
    });
  }
}

export class ThemesResource {
  constructor(private readonly http: HTTPClient) {}
  list(options: RequestOptions = {}) {
    return this.http.request<ThemeList>("GET", "/v1/themes", options);
  }
  create(input: BodyOf<"postThemes">, options: RequestOptions = {}) {
    return this.http.request<Theme>("POST", "/v1/themes", { body: input, ...options });
  }
  delete(themeId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/themes/${pathParam("themeId", themeId)}`, options);
  }
}

export class MessagesResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getMessages"> = {}, options: RequestOptions = {}) {
    return this.http.request<MessageList>("GET", "/v1/messages", { query, ...options });
  }
  retrieve(messageId: string, options: RequestOptions = {}) {
    return this.http.request<MessageDetail>("GET", `/v1/messages/${pathParam("messageId", messageId)}`, options);
  }
  raw(messageId: string, options: RequestOptions = {}) {
    return this.http.request<Uint8Array>("GET", `/v1/messages/${pathParam("messageId", messageId)}/raw`, {
      headers: { Accept: "message/rfc822" },
      responseType: "bytes",
      ...options,
    });
  }
  events(messageId: string, options: RequestOptions = {}) {
    return this.http.request<MessageEventList>("GET", `/v1/messages/${pathParam("messageId", messageId)}/events`, options);
  }
  engagement(query: QueryOf<"getMessagesEngagement"> = {}, options: RequestOptions = {}) {
    return this.http.request<EngagementResponse>("GET", "/v1/messages/engagement", { query, ...options });
  }
  metrics(query: QueryOf<"getMessagesMetrics"> = {}, options: RequestOptions = {}) {
    return this.http.request<MetricsResponse>("GET", "/v1/messages/metrics", { query, ...options });
  }
  timeseries(query: QueryOf<"getMessagesTimeseries"> = {}, options: RequestOptions = {}) {
    return this.http.request<TimeseriesResponse>("GET", "/v1/messages/timeseries", { query, ...options });
  }
}

export class InboundMessagesResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getInboundMessages"> = {}, options: RequestOptions = {}) {
    return this.http.request<InboundMessageList>("GET", "/v1/inbound-messages", { query, ...options });
  }
  retrieve(messageId: string, options: RequestOptions = {}) {
    return this.http.request<InboundMessageDetail>(
      "GET",
      `/v1/inbound-messages/${pathParam("messageId", messageId)}`,
      options,
    );
  }
  raw(messageId: string, options: RequestOptions = {}) {
    return this.http.request<Uint8Array>("GET", `/v1/inbound-messages/${pathParam("messageId", messageId)}/raw`, {
      headers: { Accept: "message/rfc822" },
      responseType: "bytes",
      ...options,
    });
  }
}

export class DomainsResource {
  constructor(private readonly http: HTTPClient) {}
  list(options: RequestOptions = {}) {
    return this.http.request<DomainList>("GET", "/v1/domains", options);
  }
  create(input: BodyOf<"postDomains">, options: RequestOptions = {}) {
    return this.http.request<CreateDomainResponse>("POST", "/v1/domains", { body: input, ...options });
  }
  retrieve(domainId: string, options: RequestOptions = {}) {
    return this.http.request<Domain>("GET", `/v1/domains/${pathParam("domainId", domainId)}`, options);
  }
  delete(domainId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/domains/${pathParam("domainId", domainId)}`, options);
  }
  dns(domainId: string, options: RequestOptions = {}) {
    return this.http.request<DNSRecordList>("GET", `/v1/domains/${pathParam("domainId", domainId)}/dns`, options);
  }
  verify(domainId: string, options: RequestOptions = {}) {
    return this.http.request<Domain>("POST", `/v1/domains/${pathParam("domainId", domainId)}/verify`, options);
  }
  rotateDkim(domainId: string, options: RequestOptions = {}) {
    return this.http.request<RotateDKIMResponse>("POST", `/v1/domains/${pathParam("domainId", domainId)}/dkim/rotate`, options);
  }
}

export class TemplatesResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getTemplates"> = {}, options: RequestOptions = {}) {
    return this.http.request<TemplateList>("GET", "/v1/templates", { query, ...options });
  }
  create(input: BodyOf<"postTemplates">, options: RequestOptions = {}) {
    return this.http.request<CreateTemplateResponse>("POST", "/v1/templates", { body: input, ...options });
  }
  retrieve(templateId: string, options: RequestOptions = {}) {
    return this.http.request<EmailTemplate>("GET", `/v1/templates/${pathParam("templateId", templateId)}`, options);
  }
  delete(templateId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/templates/${pathParam("templateId", templateId)}`, options);
  }
  archive(templateId: string, options: RequestOptions = {}) {
    return this.http.request<void>("POST", `/v1/templates/${pathParam("templateId", templateId)}/archive`, options);
  }
  createAsset(templateId: string, input: BodyOf<"postTemplatesIdAssets">, options: RequestOptions = {}) {
    return this.http.request<TemplateAssetPolicy>("POST", `/v1/templates/${pathParam("templateId", templateId)}/assets`, {
      body: input,
      ...options,
    });
  }
  updateDraft(templateId: string, input: BodyOf<"patchTemplatesIdDraft">, options: RequestOptions = {}) {
    return this.http.request<UpdateTemplateDraftResponse>("PATCH", `/v1/templates/${pathParam("templateId", templateId)}/draft`, {
      body: input,
      ...options,
    });
  }
  duplicate(templateId: string, options: RequestOptions = {}) {
    return this.http.request<CreateTemplateResponse>("POST", `/v1/templates/${pathParam("templateId", templateId)}/duplicate`, options);
  }
  preview(templateId: string, input: BodyOf<"postTemplatesIdPreview">, options: RequestOptions = {}) {
    return this.http.request<PreviewTemplateResponse>("POST", `/v1/templates/${pathParam("templateId", templateId)}/preview`, {
      body: input,
      ...options,
    });
  }
  publish(templateId: string, input?: BodyOf<"postTemplatesIdPublish">, options: RequestOptions = {}) {
    return this.http.request<EmailTemplateVersion>("POST", `/v1/templates/${pathParam("templateId", templateId)}/publish`, {
      ...(input === undefined ? {} : { body: input }),
      ...options,
    });
  }
  versions(templateId: string, options: RequestOptions = {}) {
    return this.http.request<TemplateVersionList>("GET", `/v1/templates/${pathParam("templateId", templateId)}/versions`, options);
  }
  version(templateId: string, versionId: string, options: RequestOptions = {}) {
    return this.http.request<EmailTemplateVersion>(
      "GET",
      `/v1/templates/${pathParam("templateId", templateId)}/versions/${pathParam("versionId", versionId)}`,
      options,
    );
  }
  revert(
    templateId: string,
    versionId: string,
    input?: BodyOf<"postTemplatesIdVersionsVersionIdRevert">,
    options: RequestOptions = {},
  ) {
    return this.http.request<EmailTemplateVersion>(
      "POST",
      `/v1/templates/${pathParam("templateId", templateId)}/versions/${pathParam("versionId", versionId)}/revert`,
      { ...(input === undefined ? {} : { body: input }), ...options },
    );
  }
}

export class WebhooksResource {
  constructor(private readonly http: HTTPClient) {}
  list(options: RequestOptions = {}) {
    return this.http.request<WebhookList>("GET", "/v1/webhooks", options);
  }
  create(input: BodyOf<"postWebhooks">, options: RequestOptions = {}) {
    return this.http.request<CreateWebhookResponse>("POST", "/v1/webhooks", { body: input, ...options });
  }
  update(webhookId: string, input: BodyOf<"patchWebhooksId">, options: RequestOptions = {}) {
    return this.http.request<WebhookEndpoint>("PATCH", `/v1/webhooks/${pathParam("webhookId", webhookId)}`, {
      body: input,
      ...options,
    });
  }
  delete(webhookId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/webhooks/${pathParam("webhookId", webhookId)}`, options);
  }
  deliveries(webhookId: string, query: QueryOf<"getWebhooksIdDeliveries"> = {}, options: RequestOptions = {}) {
    return this.http.request<WebhookDeliveryPage>(
      "GET",
      `/v1/webhooks/${pathParam("webhookId", webhookId)}/deliveries`,
      { query, ...options },
    );
  }
  delivery(webhookId: string, deliveryId: string, options: RequestOptions = {}) {
    return this.http.request<WebhookDeliveryDetail>(
      "GET",
      `/v1/webhooks/${pathParam("webhookId", webhookId)}/deliveries/${pathParam("deliveryId", deliveryId)}`,
      options,
    );
  }
  replay(webhookId: string, deliveryId: string, options: RequiredIdempotencyOptions) {
    const { idempotencyKey, ...requestOptions } = options;
    return this.http.request<WebhookReplayAccepted>(
      "POST",
      `/v1/webhooks/${pathParam("webhookId", webhookId)}/deliveries/${pathParam("deliveryId", deliveryId)}/replay`,
      { body: {}, headers: idempotencyHeaders(idempotencyKey), ...requestOptions },
    );
  }
  test(webhookId: string, options: RequiredIdempotencyOptions) {
    const { idempotencyKey, ...requestOptions } = options;
    return this.http.request<WebhookTestAccepted>(
      "POST",
      `/v1/webhooks/${pathParam("webhookId", webhookId)}/test`,
      { body: {}, headers: idempotencyHeaders(idempotencyKey), ...requestOptions },
    );
  }
  rotateSecret(webhookId: string, options: RequiredIdempotencyOptions) {
    const { idempotencyKey, ...requestOptions } = options;
    return this.http.request<RotateWebhookSecretResponse>(
      "POST",
      `/v1/webhooks/${pathParam("webhookId", webhookId)}/secret/rotate`,
      { body: {}, headers: idempotencyHeaders(idempotencyKey), ...requestOptions },
    );
  }
}

export class AutomationsResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getAutomations"> = {}, options: RequestOptions = {}) {
    return this.http.request<AutomationList>("GET", "/v1/automations", { query, ...options });
  }
  create(input: BodyOf<"postAutomations">, options: RequestOptions = {}) {
    return this.http.request<Automation>("POST", "/v1/automations", { body: input, ...options });
  }
  retrieve(automationId: string, options: RequestOptions = {}) {
    return this.http.request<Automation>("GET", `/v1/automations/${pathParam("automationId", automationId)}`, options);
  }
  update(automationId: string, input: BodyOf<"patchAutomationsId">, options: RequestOptions = {}) {
    return this.http.request<Automation>("PATCH", `/v1/automations/${pathParam("automationId", automationId)}`, { body: input, ...options });
  }
  delete(automationId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/automations/${pathParam("automationId", automationId)}`, options);
  }
  activate(automationId: string, options: RequestOptions = {}) {
    return this.http.request<Automation>("POST", `/v1/automations/${pathParam("automationId", automationId)}/activate`, options);
  }
  disable(automationId: string, options: RequestOptions = {}) {
    return this.http.request<Automation>("POST", `/v1/automations/${pathParam("automationId", automationId)}/disable`, options);
  }
  updateDraft(automationId: string, input: BodyOf<"patchAutomationsIdDraft">, options: RequestOptions = {}) {
    return this.http.request<Automation>("PATCH", `/v1/automations/${pathParam("automationId", automationId)}/draft`, {
      body: input,
      ...options,
    });
  }
  duplicate(automationId: string, options: RequestOptions = {}) {
    return this.http.request<Automation>("POST", `/v1/automations/${pathParam("automationId", automationId)}/duplicate`, options);
  }
  runs(automationId: string, query: QueryOf<"getAutomationsIdRuns"> = {}, options: RequestOptions = {}) {
    return this.http.request<AutomationRunList>("GET", `/v1/automations/${pathParam("automationId", automationId)}/runs`, {
      query,
      ...options,
    });
  }
  run(automationId: string, runId: string, options: RequestOptions = {}) {
    return this.http.request<AutomationRunDetail>(
      "GET",
      `/v1/automations/${pathParam("automationId", automationId)}/runs/${pathParam("runId", runId)}`,
      options,
    );
  }
  cancelRun(automationId: string, runId: string, options: RequestOptions = {}) {
    return this.http.request<void>(
      "POST",
      `/v1/automations/${pathParam("automationId", automationId)}/runs/${pathParam("runId", runId)}/cancel`,
      options,
    );
  }
}

export class UsageResource {
  constructor(private readonly http: HTTPClient) {}
  retrieve(options: RequestOptions = {}) {
    return this.http.request<MonthlyUsage>("GET", "/v1/usage", options);
  }
}
