import { HTTPClient } from "./http.js";
import {
  AutomationsResource,
  ContactsResource,
  DomainsResource,
  EventsResource,
  InboundMessagesResource,
  MessagesResource,
  SendResource,
  SegmentsResource,
  SuppressionsResource,
  TemplatesResource,
  ThemesResource,
  UsageResource,
  WebhooksResource,
} from "./resources.js";
import type { ViaPostOptions } from "./types.js";

if (typeof window !== "undefined" || typeof process === "undefined" || process.release?.name !== "node") {
  throw new Error(
    "@viapost-io/sdk is server-side only. Calling the ViaPost API from a browser would expose your secret API key.",
  );
}

/** Official server-side client for the ViaPost API. Never expose its API key in browser code. */
export class ViaPost {
  readonly send: SendResource;
  readonly contacts: ContactsResource;
  readonly events: EventsResource;
  readonly segments: SegmentsResource;
  readonly suppressions: SuppressionsResource;
  readonly themes: ThemesResource;
  readonly messages: MessagesResource;
  readonly inboundMessages: InboundMessagesResource;
  readonly domains: DomainsResource;
  readonly templates: TemplatesResource;
  readonly webhooks: WebhooksResource;
  readonly automations: AutomationsResource;
  readonly usage: UsageResource;

  constructor(options: ViaPostOptions) {
    const http = new HTTPClient(options);
    this.send = new SendResource(http);
    this.contacts = new ContactsResource(http);
    this.events = new EventsResource(http);
    this.segments = new SegmentsResource(http);
    this.suppressions = new SuppressionsResource(http);
    this.themes = new ThemesResource(http);
    this.messages = new MessagesResource(http);
    this.inboundMessages = new InboundMessagesResource(http);
    this.domains = new DomainsResource(http);
    this.templates = new TemplatesResource(http);
    this.webhooks = new WebhooksResource(http);
    this.automations = new AutomationsResource(http);
    this.usage = new UsageResource(http);
  }
}

export {
  ViaPostAPIError,
  ViaPostConnectionError,
  ViaPostError,
  ViaPostResponseTooLargeError,
  ViaPostTimeoutError,
} from "./errors.js";
export { VERSION } from "./version.js";
export type * from "./types.js";
export type { components, operations, paths } from "./generated/openapi.js";
