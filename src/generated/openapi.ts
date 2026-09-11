/**
 * This file was auto-generated from openapi.yaml.
 * Do not make direct changes to the file.
 */

export interface paths {
    readonly "/v1/automations": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/automations */
        readonly get: operations["getAutomations"];
        readonly put?: never;
        /** POST /v1/automations */
        readonly post: operations["postAutomations"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/automations/{id} */
        readonly get: operations["getAutomationsId"];
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/automations/{id} */
        readonly delete: operations["deleteAutomationsId"];
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/automations/{id} */
        readonly patch: operations["patchAutomationsId"];
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/activate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/automations/{id}/activate */
        readonly post: operations["postAutomationsIdActivate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/disable": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/automations/{id}/disable */
        readonly post: operations["postAutomationsIdDisable"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/draft": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/automations/{id}/draft */
        readonly patch: operations["patchAutomationsIdDraft"];
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/duplicate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/automations/{id}/duplicate */
        readonly post: operations["postAutomationsIdDuplicate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/runs": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/automations/{id}/runs */
        readonly get: operations["getAutomationsIdRuns"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/runs/{run_id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/automations/{id}/runs/{run_id} */
        readonly get: operations["getAutomationsIdRunsRunId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/automations/{id}/runs/{run_id}/cancel": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/automations/{id}/runs/{run_id}/cancel */
        readonly post: operations["postAutomationsIdRunsRunIdCancel"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/contacts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/contacts */
        readonly get: operations["getContacts"];
        readonly put?: never;
        /** POST /v1/contacts */
        readonly post: operations["postContacts"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/contacts/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/contacts/{id} */
        readonly get: operations["getContactsId"];
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/contacts/{id} */
        readonly delete: operations["deleteContactsId"];
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/contacts/{id} */
        readonly patch: operations["patchContactsId"];
        readonly trace?: never;
    };
    readonly "/v1/domains": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/domains */
        readonly get: operations["getDomains"];
        readonly put?: never;
        /** POST /v1/domains */
        readonly post: operations["postDomains"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/domains/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/domains/{id} */
        readonly get: operations["getDomainsId"];
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/domains/{id} */
        readonly delete: operations["deleteDomainsId"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/domains/{id}/dkim/rotate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/domains/{id}/dkim/rotate */
        readonly post: operations["postDomainsIdDkimRotate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/domains/{id}/dns": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/domains/{id}/dns */
        readonly get: operations["getDomainsIdDns"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/domains/{id}/verify": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/domains/{id}/verify */
        readonly post: operations["postDomainsIdVerify"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/events": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/events */
        readonly get: operations["getEvents"];
        readonly put?: never;
        /** POST /v1/events */
        readonly post: operations["postEvents"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/events/send": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/events/send */
        readonly post: operations["postEventsSend"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/events/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/events/{id} */
        readonly delete: operations["deleteEventsId"];
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/events/{id} */
        readonly patch: operations["patchEventsId"];
        readonly trace?: never;
    };
    readonly "/v1/health": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/health */
        readonly get: operations["getHealth"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/health/ready": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/health/ready */
        readonly get: operations["getHealthReady"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/status": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Estado público curado do ViaPost
         * @description Endpoint público e curado da página de status. A URL canônica é
         *     `https://status.viapost.io/v1/status`; ele expõe somente componentes de produto
         *     e mensagens curadas, sem métricas, dependências, topologia, detalhes de readiness,
         *     incidentes internos ou dados de tenants. Comunicações públicas de incidente e manutenção
         *     são incluídas somente no campo `notices`.
         */
        readonly get: operations["getPublicStatus"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        /** Cabeçalhos do estado público curado */
        readonly head: operations["headPublicStatus"];
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/inbound-messages": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/inbound-messages */
        readonly get: operations["getInboundMessages"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/inbound-messages/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/inbound-messages/{id} */
        readonly get: operations["getInboundMessagesId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages */
        readonly get: operations["getMessages"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/engagement": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages/engagement */
        readonly get: operations["getMessagesEngagement"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/metrics": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages/metrics */
        readonly get: operations["getMessagesMetrics"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/timeseries": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages/timeseries */
        readonly get: operations["getMessagesTimeseries"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages/{id} */
        readonly get: operations["getMessagesId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/{id}/events": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/messages/{id}/events */
        readonly get: operations["getMessagesIdEvents"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/segments": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/segments */
        readonly get: operations["getSegments"];
        readonly put?: never;
        /** POST /v1/segments */
        readonly post: operations["postSegments"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/segments/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/segments/{id} */
        readonly get: operations["getSegmentsId"];
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/segments/{id} */
        readonly delete: operations["deleteSegmentsId"];
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/segments/{id} */
        readonly patch: operations["patchSegmentsId"];
        readonly trace?: never;
    };
    readonly "/v1/segments/{id}/contacts": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/segments/{id}/contacts */
        readonly get: operations["getSegmentsIdContacts"];
        readonly put?: never;
        /** POST /v1/segments/{id}/contacts */
        readonly post: operations["postSegmentsIdContacts"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/segments/{id}/contacts/{contact_id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/segments/{id}/contacts/{contact_id} */
        readonly delete: operations["deleteSegmentsIdContactsContactId"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/send": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/send */
        readonly post: operations["postSend"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/templates */
        readonly get: operations["getTemplates"];
        readonly put?: never;
        /** POST /v1/templates */
        readonly post: operations["postTemplates"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/templates/{id} */
        readonly get: operations["getTemplatesId"];
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/templates/{id} */
        readonly delete: operations["deleteTemplatesId"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/archive": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/archive */
        readonly post: operations["postTemplatesIdArchive"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/assets": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/assets */
        readonly post: operations["postTemplatesIdAssets"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/draft": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        /** PATCH /v1/templates/{id}/draft */
        readonly patch: operations["patchTemplatesIdDraft"];
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/duplicate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/duplicate */
        readonly post: operations["postTemplatesIdDuplicate"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/preview": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/preview */
        readonly post: operations["postTemplatesIdPreview"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/publish": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/publish */
        readonly post: operations["postTemplatesIdPublish"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/versions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/templates/{id}/versions */
        readonly get: operations["getTemplatesIdVersions"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/versions/{versionId}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/templates/{id}/versions/{versionId} */
        readonly get: operations["getTemplatesIdVersionsVersionId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/templates/{id}/versions/{versionId}/revert": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /** POST /v1/templates/{id}/versions/{versionId}/revert */
        readonly post: operations["postTemplatesIdVersionsVersionIdRevert"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/themes": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/themes */
        readonly get: operations["getThemes"];
        readonly put?: never;
        /** POST /v1/themes */
        readonly post: operations["postThemes"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/themes/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/themes/{id} */
        readonly delete: operations["deleteThemesId"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/usage": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/usage */
        readonly get: operations["getUsage"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** GET /v1/webhooks */
        readonly get: operations["getWebhooks"];
        readonly put?: never;
        /** POST /v1/webhooks */
        readonly post: operations["postWebhooks"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        readonly post?: never;
        /** DELETE /v1/webhooks/{id} */
        readonly delete: operations["deleteWebhooksId"];
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        readonly ErrorDetail: {
            readonly code: string;
            readonly message: string;
            readonly request_id?: string;
        };
        readonly Error: {
            readonly error: components["schemas"]["ErrorDetail"];
        };
        /** Format: uuid */
        readonly UUID: string;
        /** Format: date-time */
        readonly Timestamp: string;
        readonly Automation: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            /** @enum {string} */
            readonly status: "disabled" | "enabled" | "archived";
            readonly graph: {
                readonly [key: string]: unknown;
            };
            readonly current_version_id?: components["schemas"]["UUID"] | null;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly AutomationList: {
            readonly data: readonly components["schemas"]["Automation"][];
        };
        readonly Domain: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            /** @enum {string} */
            readonly status: "pending" | "verified" | "failed" | "disabled";
            readonly spf_verified: boolean;
            readonly dkim_verified: boolean;
            readonly dmarc_verified: boolean;
            readonly return_path_subdomain: string;
            readonly created_at: components["schemas"]["Timestamp"];
        };
        readonly DomainList: {
            readonly domains: readonly components["schemas"]["Domain"][];
        };
        readonly MonthlyUsage: {
            readonly period: components["schemas"]["UsagePeriod"];
            /** Format: int64 */
            readonly used: number;
            readonly limit: number | null;
            readonly remaining: number | null;
            readonly unlimited: boolean;
        };
        readonly UsagePeriod: {
            readonly start: components["schemas"]["Timestamp"];
            readonly end: components["schemas"]["Timestamp"];
            /** @constant */
            readonly timezone: "UTC";
        };
        readonly SendRequest: {
            readonly from: string;
            readonly from_name?: string;
            readonly reply_to?: string;
            readonly to: readonly string[];
            readonly cc?: readonly string[];
            readonly bcc?: readonly string[];
            readonly subject?: string;
            readonly html?: string;
            readonly text?: string;
            /**
             * @default transactional
             * @enum {string}
             */
            readonly stream?: "transactional" | "marketing";
            readonly tags?: readonly string[];
            readonly metadata?: {
                readonly [key: string]: unknown;
            };
            readonly template_id?: components["schemas"]["UUID"] | null;
            readonly variables?: {
                readonly [key: string]: unknown;
            };
            readonly attachments?: readonly components["schemas"]["Attachment"][];
        };
        readonly Attachment: {
            readonly filename: string;
            /** Format: byte */
            readonly content: string;
            readonly content_type?: string;
        };
        readonly AcceptedMessage: {
            readonly message_id: components["schemas"]["UUID"];
            readonly to: string;
        };
        readonly RejectedMessage: {
            readonly to: string;
            /** @enum {string} */
            readonly reason: "invalid_address" | "suppressed";
        };
        readonly SendResult: {
            readonly accepted: readonly components["schemas"]["AcceptedMessage"][] | null;
            readonly rejected: readonly components["schemas"]["RejectedMessage"][] | null;
        };
        readonly CreateAutomationRequest: {
            readonly name: string;
        };
        readonly RenameAutomationRequest: {
            readonly name: string;
        };
        readonly UpdateAutomationDraftRequest: {
            /** @deprecated */
            readonly name?: string;
            readonly graph: {
                readonly [key: string]: unknown;
            };
        };
        readonly AutomationRun: {
            readonly id: components["schemas"]["UUID"];
            readonly automation_id: components["schemas"]["UUID"];
            readonly automation_version_id: components["schemas"]["UUID"];
            /** @enum {string} */
            readonly status: "running" | "completed" | "failed" | "cancelled";
            readonly contact_id: components["schemas"]["UUID"];
            readonly trigger_event_id: components["schemas"]["UUID"];
            readonly graph_snapshot: {
                readonly [key: string]: unknown;
            };
            readonly started_at: components["schemas"]["Timestamp"];
            readonly completed_at?: components["schemas"]["Timestamp"] | null;
            readonly error?: string | null;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly AutomationRunStep: {
            readonly id: components["schemas"]["UUID"];
            readonly step_key: string;
            readonly step_type: string;
            readonly status: string;
            readonly attempts: number;
            readonly branch?: string;
            readonly error?: string | null;
            readonly scheduled_at?: components["schemas"]["Timestamp"] | null;
            readonly started_at?: components["schemas"]["Timestamp"] | null;
            readonly completed_at?: components["schemas"]["Timestamp"] | null;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly AutomationRunList: {
            readonly data: readonly components["schemas"]["AutomationRun"][];
            readonly next_cursor?: string;
        };
        readonly AutomationRunDetail: {
            readonly run: components["schemas"]["AutomationRun"];
            readonly steps: readonly components["schemas"]["AutomationRunStep"][];
        };
        readonly Contact: {
            readonly id: components["schemas"]["UUID"];
            /** Format: email */
            readonly email: string;
            readonly first_name?: string | null;
            readonly last_name?: string | null;
            readonly subscribed: boolean;
            readonly properties: {
                readonly [key: string]: unknown;
            };
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly CreateContactRequest: {
            /** Format: email */
            readonly email: string;
            readonly first_name?: string;
            readonly last_name?: string;
            readonly subscribed?: boolean;
            readonly properties?: {
                readonly [key: string]: unknown;
            };
        };
        readonly UpdateContactRequest: {
            /** Format: email */
            readonly email?: string;
            readonly first_name?: string | null;
            readonly last_name?: string | null;
            readonly subscribed?: boolean;
            readonly properties?: {
                readonly [key: string]: unknown;
            };
        };
        readonly ContactList: {
            readonly data: readonly components["schemas"]["Contact"][];
            readonly next_cursor?: string;
        };
        readonly CreateDomainRequest: {
            readonly name: string;
        };
        readonly DNSRecord: {
            readonly type: string;
            readonly name: string;
            readonly value: string;
            /** @enum {string} */
            readonly purpose: "dkim" | "spf" | "dmarc";
        };
        readonly DNSRecordList: {
            readonly dns_records: readonly components["schemas"]["DNSRecord"][];
        };
        readonly CreateDomainResponse: {
            readonly domain: components["schemas"]["Domain"];
            readonly dns_records: readonly components["schemas"]["DNSRecord"][];
        };
        readonly RotateDKIMResponse: {
            readonly selector: string;
            readonly public_key: string;
            readonly status: string;
        };
        readonly CustomEvent: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            readonly schema?: {
                readonly [key: string]: unknown;
            } | null;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly CustomEventList: {
            readonly data: readonly components["schemas"]["CustomEvent"][];
        };
        readonly CreateCustomEventRequest: {
            readonly name: string;
            readonly schema?: {
                readonly [key: string]: unknown;
            };
        };
        readonly UpdateCustomEventRequest: {
            readonly schema: {
                readonly [key: string]: unknown;
            };
        };
        readonly SendCustomEventRequest: {
            readonly event: string;
            readonly contact_id: components["schemas"]["UUID"];
            readonly properties?: {
                readonly [key: string]: unknown;
            };
        };
        readonly CustomEventDelivery: {
            readonly id: components["schemas"]["UUID"];
            readonly contact_id: components["schemas"]["UUID"];
            readonly event: string;
            readonly occurred_at: components["schemas"]["Timestamp"];
        };
        readonly HealthResponse: {
            readonly status: string;
        };
        readonly ReadinessResponse: {
            readonly status: string;
            readonly details: {
                readonly [key: string]: string;
            };
        };
        readonly PublicStatus: {
            /** @enum {string} */
            readonly status: "operational" | "degraded" | "unknown";
            /** Format: date-time */
            readonly updated_at: string;
            readonly components: readonly [
                components["schemas"]["PublicStatusAPIComponent"],
                components["schemas"]["PublicStatusPanelComponent"],
                components["schemas"]["PublicStatusInboundComponent"],
                components["schemas"]["PublicStatusAutomationsComponent"],
                components["schemas"]["PublicStatusWebhooksComponent"],
                components["schemas"]["PublicStatusTrackingComponent"]
            ];
            /** @description Comunicações públicas curadas; não inclui diagnóstico, autoria ou dados operacionais. */
            readonly notices?: readonly components["schemas"]["PublicStatusNotice"][];
        };
        readonly PublicStatusComponent: {
            /** @enum {string} */
            readonly id: "api" | "app" | "inbound" | "automations" | "webhooks" | "tracking";
            readonly name: string;
            /** @enum {string} */
            readonly status: "operational" | "degraded" | "unknown";
            /** @description Mensagem pública pré-curada; não contém erro técnico, métricas nem topologia. */
            readonly message: string;
        };
        readonly PublicStatusNotice: {
            readonly id: components["schemas"]["UUID"];
            /** @enum {string} */
            readonly kind: "incident" | "maintenance";
            /** @enum {string} */
            readonly status: "investigating" | "identified" | "monitoring" | "resolved" | "scheduled" | "in_progress" | "completed" | "cancelled";
            /** @enum {string} */
            readonly impact: "none" | "minor" | "major" | "critical";
            readonly title: string;
            readonly message: string;
            readonly components: readonly ("api" | "app" | "inbound" | "automations" | "webhooks" | "tracking")[];
            readonly started_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
            readonly resolved_at?: components["schemas"]["Timestamp"] | null;
        };
        readonly PublicStatusAPIComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "api";
            /** @constant */
            readonly name?: "API e envio de e-mails";
        };
        readonly PublicStatusPanelComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "app";
            /** @constant */
            readonly name?: "Painel ViaPost";
        };
        readonly PublicStatusInboundComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "inbound";
            /** @constant */
            readonly name?: "Recebimento de e-mails";
        };
        readonly PublicStatusAutomationsComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "automations";
            /** @constant */
            readonly name?: "Automações";
        };
        readonly PublicStatusWebhooksComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "webhooks";
            /** @constant */
            readonly name?: "Webhooks";
        };
        readonly PublicStatusTrackingComponent: components["schemas"]["PublicStatusComponent"] & {
            /** @constant */
            readonly id?: "tracking";
            /** @constant */
            readonly name?: "Rastreamento de links e aberturas";
        };
        readonly PublicStatusError: {
            /** @enum {string} */
            readonly error: "internal_error";
        };
        readonly InboundMessage: {
            readonly id: components["schemas"]["UUID"];
            readonly domain_id: components["schemas"]["UUID"];
            readonly from_address: string;
            readonly to_address: string;
            readonly subject?: string;
            readonly attachment_count: number;
            readonly is_feedback_report: boolean;
            readonly received_at: components["schemas"]["Timestamp"];
        };
        readonly InboundMessageList: {
            readonly messages: readonly components["schemas"]["InboundMessage"][];
        };
        readonly InboundAttachment: {
            readonly filename: string;
            readonly content_type: string;
            /** Format: int64 */
            readonly size_bytes: number;
            /** Format: uri */
            readonly download_url?: string;
        };
        readonly InboundMessageDetail: components["schemas"]["InboundMessage"] & {
            readonly attachments: readonly components["schemas"]["InboundAttachment"][];
            /** Format: uri */
            readonly raw_message_url?: string;
        };
        readonly Message: {
            readonly id: components["schemas"]["UUID"];
            readonly status: string;
            /** @enum {string} */
            readonly stream: "transactional" | "marketing";
            readonly from_address: string;
            readonly to_address: string;
            readonly subject?: string | null;
            readonly recipient_domain: string;
            /** Format: uuid */
            readonly api_key_id?: string;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly queued_at?: components["schemas"]["Timestamp"];
            readonly sent_at?: components["schemas"]["Timestamp"];
            readonly delivered_at?: components["schemas"]["Timestamp"];
            readonly failed_at?: components["schemas"]["Timestamp"];
            readonly first_opened_at?: components["schemas"]["Timestamp"];
            readonly first_clicked_at?: components["schemas"]["Timestamp"];
            readonly last_error?: string | null;
        };
        readonly MessageList: {
            readonly messages: readonly components["schemas"]["Message"][];
        };
        readonly MessageEvent: {
            readonly type: string;
            readonly occurred_at: components["schemas"]["Timestamp"];
            readonly recipient?: string;
            readonly smtp_code?: number;
            readonly enhanced_code?: string;
            readonly diagnostic?: string;
            readonly mx_host?: string;
            /** Format: uri */
            readonly click_url?: string;
        };
        readonly MessageEventList: {
            readonly events: readonly components["schemas"]["MessageEvent"][];
        };
        readonly EngagementResponse: {
            readonly since: components["schemas"]["Timestamp"];
            readonly delivered: number;
            readonly opened: number;
            readonly clicked: number;
        };
        readonly TimeseriesResponse: {
            readonly since: components["schemas"]["Timestamp"];
            readonly days: readonly components["schemas"]["MessageTimeseriesDay"][];
        };
        readonly MessageTimeseriesDay: {
            /** Format: date */
            readonly date: string;
            readonly queued: number;
            readonly processing: number;
            readonly sent: number;
            readonly delivered: number;
            readonly deferred: number;
            readonly bounced: number;
            readonly failed: number;
            readonly rejected: number;
            readonly complained: number;
        };
        readonly MetricsSummary: {
            readonly total: number;
            readonly delivered: number;
            readonly opened: number;
            readonly clicked: number;
            readonly bounced: number;
            readonly complained: number;
        };
        readonly MetricsTimeseriesDay: {
            /** Format: date */
            readonly date: string;
            readonly delivered: number;
            readonly open: number;
            readonly click: number;
            readonly soft_bounce: number;
            readonly hard_bounce: number;
            readonly complaint: number;
        };
        readonly DomainMetrics: {
            readonly domain_id: components["schemas"]["UUID"];
            readonly domain_name: string;
            readonly sent: number;
            readonly delivered: number;
            readonly opened: number;
            readonly clicked: number;
        };
        readonly MetricsResponse: {
            readonly since: components["schemas"]["Timestamp"];
            readonly until: components["schemas"]["Timestamp"];
            readonly current: components["schemas"]["MetricsSummary"];
            readonly previous: components["schemas"]["MetricsSummary"];
            readonly timeseries: readonly components["schemas"]["MetricsTimeseriesDay"][];
            readonly by_domain: readonly components["schemas"]["DomainMetrics"][];
        };
        readonly Segment: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            readonly description?: string | null;
            readonly contact_count?: number;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly SegmentList: {
            readonly data: readonly components["schemas"]["Segment"][];
            readonly next_cursor?: string;
        };
        readonly CreateSegmentRequest: {
            readonly name: string;
            readonly description?: string;
        };
        readonly UpdateSegmentRequest: {
            readonly name?: string;
            readonly description?: string | null;
        };
        readonly SegmentContactRequest: {
            readonly contact_id: components["schemas"]["UUID"];
        };
        readonly EmailTemplate: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            /** Format: uuid */
            readonly current_draft_version_id?: string;
            /** Format: uuid */
            readonly published_version_id?: string;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly TemplateVariable: {
            readonly name: string;
            /** @enum {string} */
            readonly var_type: "string" | "number";
            readonly fallback_value?: string | null;
        };
        readonly EmailTemplateVersion: {
            readonly id: components["schemas"]["UUID"];
            readonly version_number: number;
            /** @enum {string} */
            readonly status: "draft" | "published" | "superseded";
            readonly subject?: string;
            readonly content_json: {
                readonly [key: string]: unknown;
            };
            readonly compiled_html?: string;
            readonly compiled_text?: string;
            readonly published_at?: components["schemas"]["Timestamp"];
            readonly variables: readonly components["schemas"]["TemplateVariable"][];
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly TemplateList: {
            readonly templates: readonly components["schemas"]["EmailTemplate"][];
        };
        readonly CreateTemplateRequest: {
            readonly name: string;
        };
        readonly CreateTemplateResponse: {
            readonly template: components["schemas"]["EmailTemplate"];
            readonly draft: components["schemas"]["EmailTemplateVersion"];
        };
        readonly TemplatePreconditionRequest: {
            readonly expected_version_id?: components["schemas"]["UUID"];
            readonly expected_updated_at?: components["schemas"]["Timestamp"];
        };
        readonly UpdateTemplateDraftRequest: {
            readonly subject?: string | null;
            readonly content_json: {
                readonly [key: string]: unknown;
            };
            readonly variables: readonly components["schemas"]["TemplateVariable"][];
            readonly expected_version_id?: components["schemas"]["UUID"];
            readonly expected_updated_at?: components["schemas"]["Timestamp"];
        };
        readonly UpdateTemplateDraftResponse: {
            readonly draft: components["schemas"]["EmailTemplateVersion"];
            readonly preview_html: string;
            readonly preview_text: string;
        };
        readonly PreviewTemplateRequest: {
            readonly variables?: {
                readonly [key: string]: unknown;
            };
        };
        readonly PreviewTemplateResponse: {
            readonly subject: string;
            readonly html: string;
            readonly text: string;
        };
        readonly TemplateVersionList: {
            readonly versions: readonly components["schemas"]["EmailTemplateVersion"][];
        };
        readonly CreateTemplateAssetRequest: {
            readonly filename: string;
            readonly content_type: string;
        };
        readonly TemplateAssetPolicy: {
            /** Format: uri */
            readonly upload_url: string;
            readonly upload_fields: {
                readonly [key: string]: string;
            };
            /** Format: uri */
            readonly asset_url: string;
        };
        readonly Theme: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            readonly style: {
                readonly [key: string]: unknown;
            };
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly ThemeList: {
            readonly themes: readonly components["schemas"]["Theme"][];
        };
        readonly CreateThemeRequest: {
            readonly name: string;
            readonly style: {
                readonly [key: string]: unknown;
            };
        };
        readonly WebhookEndpoint: {
            readonly id: components["schemas"]["UUID"];
            /** Format: uri */
            readonly url: string;
            readonly event_types: readonly string[];
            readonly enabled: boolean;
            readonly max_attempts: number;
            readonly created_at: components["schemas"]["Timestamp"];
        };
        readonly WebhookList: {
            readonly webhooks: readonly components["schemas"]["WebhookEndpoint"][];
        };
        readonly CreateWebhookRequest: {
            /** Format: uri */
            readonly url: string;
            readonly event_types: readonly string[];
        };
        readonly CreateWebhookResponse: {
            readonly endpoint: components["schemas"]["WebhookEndpoint"];
            readonly secret: string;
        };
    };
    responses: {
        /** @description validation_error */
        readonly ValidationError: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description unauthorized */
        readonly Unauthorized: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description forbidden ou tenant_inactive */
        readonly Forbidden: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description not_found */
        readonly NotFound: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description conflict, no_active_tenant ou webhook_replay_conflict */
        readonly Conflict: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description rate_limited ou quota_exceeded */
        readonly TooManyRequests: {
            headers: {
                /** @description Segundos até nova tentativa. */
                readonly "Retry-After"?: number;
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description internal_error */
        readonly InternalError: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
    };
    parameters: {
        /** @description Cursor RFC 3339 exclusivo; ausente ou inválido usa um instante futuro. */
        readonly TimestampCursor: string;
        /** @description Quantidade solicitada; ausente, não numérica ou não positiva usa 50. */
        readonly LegacyLimit: number;
        /** @description Cursor opaco base64url retornado pela API; timestamps RFC 3339 legados também são aceitos. */
        readonly AutomationCursor: string;
        readonly AutomationLimit: number;
        /** @description Valores não positivos ou inválidos usam 14; valores acima de 90 são limitados a 90. */
        readonly Days: number;
        readonly IdempotencyKey: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    readonly getAutomations: {
        readonly parameters: {
            readonly query?: {
                readonly status?: "disabled" | "enabled" | "archived";
                readonly search?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["AutomationList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postAutomations: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateAutomationRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getAutomationsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteAutomationsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchAutomationsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["RenameAutomationRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postAutomationsIdActivate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postAutomationsIdDisable: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchAutomationsIdDraft: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["UpdateAutomationDraftRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postAutomationsIdDuplicate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Automation"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getAutomationsIdRuns: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco base64url retornado pela API; timestamps RFC 3339 legados também são aceitos. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                readonly limit?: components["parameters"]["AutomationLimit"];
                readonly status?: "running" | "completed" | "failed" | "cancelled";
            };
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["AutomationRunList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getAutomationsIdRunsRunId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly run_id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["AutomationRunDetail"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postAutomationsIdRunsRunIdCancel: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly run_id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getContacts: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco base64url retornado pela API; timestamps RFC 3339 legados também são aceitos. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                readonly limit?: components["parameters"]["AutomationLimit"];
                readonly search?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContactList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postContacts: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateContactRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Contact"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getContactsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Contact"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteContactsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchContactsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["UpdateContactRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Contact"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getDomains: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["DomainList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postDomains: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateDomainRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CreateDomainResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getDomainsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Domain"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteDomainsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postDomainsIdDkimRotate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["RotateDKIMResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getDomainsIdDns: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["DNSRecordList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postDomainsIdVerify: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Domain"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getEvents: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CustomEventList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postEvents: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateCustomEventRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CustomEvent"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postEventsSend: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["SendCustomEventRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CustomEventDelivery"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteEventsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchEventsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["UpdateCustomEventRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CustomEvent"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getHealth: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["HealthResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getHealthReady: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ReadinessResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getPublicStatus: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Snapshot curado. `unknown` significa que a fonte não possui evidência atual; não significa disponibilidade. */
            readonly 200: {
                headers: {
                    /** @example public, max-age=60, stale-while-revalidate=60 */
                    readonly "Cache-Control"?: string;
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["PublicStatus"];
                };
            };
            /** @description A rota só é publicada no host status.viapost.io. */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Falha inesperada, sem metadados operacionais. */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["PublicStatusError"];
                };
            };
        };
    };
    readonly headPublicStatus: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Mesmo estado de cache do GET, sem corpo. */
            readonly 200: {
                headers: {
                    /** @example public, max-age=60, stale-while-revalidate=60 */
                    readonly "Cache-Control"?: string;
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description A rota só é publicada no host status.viapost.io. */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Falha inesperada, sem metadados operacionais. */
            readonly 500: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["PublicStatusError"];
                };
            };
        };
    };
    readonly getInboundMessages: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor RFC 3339 exclusivo; ausente ou inválido usa um instante futuro. */
                readonly cursor?: components["parameters"]["TimestampCursor"];
                /** @description Quantidade solicitada; ausente, não numérica ou não positiva usa 50. */
                readonly limit?: components["parameters"]["LegacyLimit"];
                readonly domain_id?: string;
                readonly search?: string;
                readonly period?: "7d" | "30d";
                readonly has_attachments?: boolean;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["InboundMessageList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getInboundMessagesId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["InboundMessageDetail"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessages: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor RFC 3339 exclusivo; ausente ou inválido usa um instante futuro. */
                readonly cursor?: components["parameters"]["TimestampCursor"];
                /** @description Quantidade solicitada; ausente, não numérica ou não positiva usa 50. */
                readonly limit?: components["parameters"]["LegacyLimit"];
                readonly status?: string;
                readonly search?: string;
                readonly period?: "24h" | "7d" | "14d" | "30d";
                readonly api_key_id?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessagesEngagement: {
        readonly parameters: {
            readonly query?: {
                /** @description Valores não positivos ou inválidos usam 14; valores acima de 90 são limitados a 90. */
                readonly days?: components["parameters"]["Days"];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EngagementResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessagesMetrics: {
        readonly parameters: {
            readonly query?: {
                /** @description Valores não positivos ou inválidos usam 14; valores acima de 90 são limitados a 90. */
                readonly days?: components["parameters"]["Days"];
                readonly domain_id?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MetricsResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessagesTimeseries: {
        readonly parameters: {
            readonly query?: {
                /** @description Valores não positivos ou inválidos usam 14; valores acima de 90 são limitados a 90. */
                readonly days?: components["parameters"]["Days"];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["TimeseriesResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessagesId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Message"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getMessagesIdEvents: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageEventList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSegments: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco base64url retornado pela API; timestamps RFC 3339 legados também são aceitos. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                readonly limit?: components["parameters"]["AutomationLimit"];
                readonly search?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SegmentList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSegments: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateSegmentRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Segment"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSegmentsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Segment"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteSegmentsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchSegmentsId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["UpdateSegmentRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Segment"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSegmentsIdContacts: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco base64url retornado pela API; timestamps RFC 3339 legados também são aceitos. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                readonly limit?: components["parameters"]["AutomationLimit"];
                readonly search?: string;
            };
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSegmentsIdContacts: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["SegmentContactRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteSegmentsIdContactsContactId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly contact_id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSend: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: {
                readonly "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["SendRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 202: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SendResult"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getTemplates: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor RFC 3339 exclusivo; ausente ou inválido usa um instante futuro. */
                readonly cursor?: components["parameters"]["TimestampCursor"];
                /** @description Quantidade solicitada; ausente, não numérica ou não positiva usa 50. */
                readonly limit?: components["parameters"]["LegacyLimit"];
                readonly search?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["TemplateList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplates: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateTemplateRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CreateTemplateResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getTemplatesId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EmailTemplate"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteTemplatesId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdArchive: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdAssets: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateTemplateAssetRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["TemplateAssetPolicy"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly patchTemplatesIdDraft: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["UpdateTemplateDraftRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["UpdateTemplateDraftResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdDuplicate: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CreateTemplateResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdPreview: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["PreviewTemplateRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["PreviewTemplateResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdPublish: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["TemplatePreconditionRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EmailTemplateVersion"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getTemplatesIdVersions: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["TemplateVersionList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getTemplatesIdVersionsVersionId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly versionId: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EmailTemplateVersion"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postTemplatesIdVersionsVersionIdRevert: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly versionId: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: {
            readonly content: {
                readonly "application/json": components["schemas"]["TemplatePreconditionRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["EmailTemplateVersion"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getThemes: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ThemeList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postThemes: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateThemeRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Theme"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteThemesId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getUsage: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MonthlyUsage"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getWebhooks: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postWebhooks: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateWebhookRequest"];
            };
        };
        readonly responses: {
            /** @description Sucesso */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["CreateWebhookResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly deleteWebhooksId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Sucesso */
            readonly 204: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
}
