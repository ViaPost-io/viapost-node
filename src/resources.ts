import type { HTTPClient } from "./http.js";
import type {
  Automation,
  AutomationList,
  AutomationRunDetail,
  AutomationRunList,
  BodyOf,
  CreateDomainResponse,
  CreateTemplateResponse,
  CreateWebhookResponse,
  DNSRecordList,
  Domain,
  DomainList,
  EmailTemplate,
  EmailTemplateVersion,
  EngagementResponse,
  Message,
  MessageEventList,
  MessageList,
  MetricsResponse,
  MonthlyUsage,
  PreviewTemplateResponse,
  QueryOf,
  RequestOptions,
  RotateDKIMResponse,
  SendOptions,
  SendRequest,
  SendResult,
  SendResultRaw,
  TemplateAssetPolicy,
  TemplateList,
  TemplateVersionList,
  TimeseriesResponse,
  UpdateTemplateDraftResponse,
  WebhookList,
} from "./types.js";

const forbiddenIdempotencyCodePoint = /[\p{Cc}\p{Cf}]/u;

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
}

export class SendResource {
  constructor(private readonly http: HTTPClient) {}

  async create(input: SendRequest, options: SendOptions = {}): Promise<SendResult> {
    if (options.idempotencyKey !== undefined) validateIdempotencyKey(options.idempotencyKey);
    const headers = options.idempotencyKey === undefined ? undefined : { "Idempotency-Key": options.idempotencyKey };
    const raw = await this.http.request<SendResultRaw>("POST", "/v1/send", {
      body: input,
      ...(headers ? { headers } : {}),
      ...(options.signal ? { signal: options.signal } : {}),
      ...(options.timeoutMs === undefined ? {} : { timeoutMs: options.timeoutMs }),
    });
    return { ...raw, accepted: raw.accepted ?? [], rejected: raw.rejected ?? [] };
  }
}

export class MessagesResource {
  constructor(private readonly http: HTTPClient) {}
  list(query: QueryOf<"getMessages"> = {}, options: RequestOptions = {}) {
    return this.http.request<MessageList>("GET", "/v1/messages", { query, ...options });
  }
  retrieve(messageId: string, options: RequestOptions = {}) {
    return this.http.request<Message>("GET", `/v1/messages/${pathParam("messageId", messageId)}`, options);
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
  delete(webhookId: string, options: RequestOptions = {}) {
    return this.http.request<void>("DELETE", `/v1/webhooks/${pathParam("webhookId", webhookId)}`, options);
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
