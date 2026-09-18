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
        /**
         * GET /v1/contacts
         * @description Lista somente os contatos ativos do tenant autenticado. `Audience` e `audience` são nomes internos; não existe rota pública `/v1/audiences`.
         */
        readonly get: operations["getContacts"];
        readonly put?: never;
        /**
         * POST /v1/contacts
         * @description Cria um contato. O e-mail é normalizado para minúsculas e deve ser único dentro do tenant; a mesma caixa postal pode existir em outro tenant.
         */
        readonly post: operations["postContacts"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/contacts/import": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * POST /v1/contacts/import
         * @description Importação síncrona, atômica e somente de criação para no máximo 1.000 contatos do tenant.
         *     Aceita CSV UTF-8 (BOM opcional) com cabeçalho exato `email,first_name,last_name,subscribed,properties`.
         *     Contatos existentes não são alterados; duplicatas do arquivo preservam a primeira linha válida.
         *     `subscribed` vazio cria contato não inscrito por padrão seguro de consentimento.
         */
        readonly post: operations["postContactsImport"];
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
        /**
         * PATCH /v1/contacts/{id}
         * @description Substitui apenas os campos presentes. `first_name` e `last_name` aceitam `null` para limpar o valor; os demais campos não aceitam `null`.
         */
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
    readonly "/v1/domains/{id}/health": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Consultar o health score do domínio
         * @description Retorna um snapshot tenant-scoped da configuração DNS e dos resultados terminais de
         *     entrega. Bearer API Keys precisam ter os scopes `domains:read` e `messages:read`; sessões
         *     usam o tenant ativo. Domínio ausente e domínio de outro tenant retornam o mesmo `404`.
         *
         *     A fórmula `domain_health_v1` usa a janela móvel e semiaberta de 30 dias `[start, end)` e
         *     exige uma amostra mínima de 100 mensagens. Taxas são inteiros em basis points
         *     (`10000` = 100%). Snapshots da mesma versão com menos de 15 minutos podem ser reutilizados;
         *     `evaluated_at` torna essa idade observável.
         *
         *     Complaint é deliberadamente omitido porque o pipeline atual não o persiste com completude
         *     suficiente para uma taxa confiável. O estado legado `complained` conta somente no numerador
         *     de entrega, pois pressupõe aceite anterior. O score é uma heurística operacional: não mede
         *     inbox placement, não é SLA e não garante entregabilidade.
         *
         *     A resposta nunca expõe destinatários, local-parts, códigos ou diagnósticos SMTP, respostas
         *     DNS, selectors ou chaves DKIM, hosts MX, IPs, nomes de serviços nem identificadores de
         *     storage, broker ou banco.
         */
        readonly get: operations["getDomainsIdHealth"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
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
    readonly "/v1/domains/{id}/inbound": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Consultar a configuração de recebimento do domínio
         * @description Retorna o domínio destinatário, a prontidão do receptor ViaPost e a observação atual do
         *     registro MX público. `ready` significa que o receptor está apto a aceitar o domínio
         *     verificado; `mx.status` informa independentemente se os remetentes externos apontam para
         *     a ViaPost. Uma falha transitória de resolução retorna `unavailable`, nunca
         *     `not_configured`.
         */
        readonly get: operations["getDomainsIdInbound"];
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
        /**
         * POST /v1/domains/{id}/verify
         * @description Verifica SPF, DKIM e um único registro DMARC sintaticamente válido. DMARC exige `v=DMARC1`, política `p` em `none`, `quarantine` ou `reject`, e URI(s) `mailto:` válida(s) em `rua`; o sufixo de tamanho legado, como `!10m`, é aceito.
         */
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
    readonly "/v1/status/subscriptions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Solicita inscrição nas comunicações da página de status
         * @description Disponível somente em `status.viapost.io`. Para todo e-mail sintaticamente válido,
         *     retorna a mesma resposta `202`, independentemente de já existir uma inscrição.
         */
        readonly post: operations["postStatusSubscriptions"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/status/subscriptions/confirm": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Confirma uma inscrição na página de status
         * @description Disponível somente em `status.viapost.io`. A confirmação é idempotente e retorna a
         *     mesma resposta genérica quando o token válido já foi consumido.
         */
        readonly post: operations["postStatusSubscriptionsConfirm"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/status/subscriptions/unsubscribe": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Cancela uma inscrição na página de status
         * @description Disponível somente em `status.viapost.io`. O cancelamento é idempotente e retorna a
         *     mesma resposta genérica quando o token válido já foi consumido.
         */
        readonly post: operations["postStatusSubscriptionsUnsubscribe"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
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
    readonly "/v1/inbound-messages/{id}/raw": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Baixa o arquivo RFC 5322 recebido
         * @description Retorna o `.eml` bruto exatamente como recebido. A autorização e o isolamento por tenant
         *     são reavaliados em cada download; a URL relativa não é um bearer token e não pode ser
         *     compartilhada como uma URL pré-assinada. O conteúdo pode deixar de estar disponível por
         *     expurgo ou falha transitória do armazenamento, sem remover os metadados da mensagem.
         */
        readonly get: operations["getInboundMessagesIdRaw"];
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
    readonly "/v1/messages/events": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Lista a timeline tenant-wide de eventos de mensagens
         * @description Primeira fatia da timeline unificada: agrega, do mais recente para o mais antigo, somente
         *     eventos outbound de entrega e tracking persistidos para o tenant autenticado. Não inclui
         *     mensagens inbound, eventos customizados de automações, execuções de automação, operações
         *     de webhook nem eventos de auditoria. O endpoint legado `/v1/messages/{id}/events` mantém
         *     sua resposta cronológica e sem paginação.
         */
        readonly get: operations["getMessagesEvents"];
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
        /**
         * GET /v1/messages/{id}
         * @description Retorna metadados com `messages:read`. Para Bearer API Keys, os campos de conteúdo e
         *     `raw_message_api_path` só são incluídos quando a chave também possui
         *     `messages:content:read`. Sessões autenticadas do painel recebem o conteúdo.
         */
        readonly get: operations["getMessagesId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/{id}/raw": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Baixa o arquivo RFC 5322 submetido
         * @description Retorna o `.eml` armazenado no momento da submissão, antes da reescrita de links e pixel de
         *     tracking e antes da assinatura DKIM aplicada pelo MTA. Portanto, este arquivo é evidência do
         *     conteúdo submetido, não uma cópia byte a byte da mensagem entregue ao destinatário. A
         *     autorização e o isolamento por tenant são reavaliados em cada download.
         */
        readonly get: operations["getMessagesIdRaw"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/messages/{id}/cancel": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Cancela uma mensagem agendada antes do despacho
         * @description Faz a transição atômica de `scheduled` para `cancelled` somente para o tenant autenticado. Se o reconciliador já enfileirou a mensagem, retorna `409` e nenhuma entrega é removida. A reserva de quota criada no aceite permanece no ledger.
         */
        readonly post: operations["postMessagesIdCancel"];
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
        /**
         * GET /v1/segments
         * @description Lista somente os segmentos ativos do tenant autenticado. O recurso público chama-se `segments`; `audiences` é terminologia interna e não é uma rota.
         */
        readonly get: operations["getSegments"];
        readonly put?: never;
        /**
         * POST /v1/segments
         * @description Cria um segmento cujo nome deve ser único dentro do tenant.
         */
        readonly post: operations["postSegments"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/segments/preview": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Avalia uma definição dinâmica ainda não salva
         * @description Retorna a cardinalidade exata e uma amostra de contatos no mesmo snapshot PostgreSQL. A resposta contém PII de contatos e não é uma rota de exportação ou listagem completa.
         */
        readonly post: operations["postSegmentsPreview"];
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
        /**
         * PATCH /v1/segments/{id}
         * @description Substitui apenas os campos presentes; `description: null` remove a descrição. `name` não pode ser nulo ou vazio.
         */
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
        /**
         * GET /v1/segments/{id}/contacts
         * @description Lista os contatos ativos que pertencem ao segmento. Em segmentos estáticos, aceita cursor opaco ou RFC3339 legado; em dinâmicos, o cursor opaco é vinculado à definição, `search` e `limit`, e cursores legados ou alterados retornam `400 validation_error`. Retorna `404` quando o segmento não existe, está arquivado ou pertence a outro tenant.
         */
        readonly get: operations["getSegmentsIdContacts"];
        readonly put?: never;
        /**
         * POST /v1/segments/{id}/contacts
         * @description Adiciona um contato existente do mesmo tenant ao segmento estático. A associação já existente é idempotente e também retorna `204`; segmento ou contato ausente/fora do tenant retorna `404`. Um segmento dinâmico retorna `409 dynamic_segment_membership` sem alteração.
         */
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
        /**
         * DELETE /v1/segments/{id}/contacts/{contact_id}
         * @description Remove uma associação existente de um segmento estático. Retorna `404` se o segmento, o contato ou a associação não existir no tenant. Um segmento dinâmico retorna `409 dynamic_segment_membership` sem alteração.
         */
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
    readonly "/v1/send/batch": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Enfileira mensagens distintas em lote
         * @description Cada item usa o schema de envio individual e tem uma chave de idempotência própria. O header Idempotency-Key não é aceito; erros de cada item são retornados no respectivo resultado, mantendo a ordem enviada.
         */
        readonly post: operations["postSendBatch"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/suppressions": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Lista supressões do tenant
         * @description Retorna somente supressões pertencentes ao tenant autenticado. A paginação usa cursor
         *     opaco e exclusivo. O estado é derivado de `released_at` e `expires_at`; por padrão,
         *     somente entradas ativas são retornadas. Diagnósticos SMTP brutos não fazem parte deste
         *     contrato e nunca são expostos.
         */
        readonly get: operations["getSuppressions"];
        readonly put?: never;
        /**
         * Adiciona uma supressão manual
         * @description Normaliza o endereço antes de persistir. `manual` e `invalid_address` são os únicos
         *     motivos aceitos neste endpoint; motivos derivados de entrega ou consentimento são
         *     administrados automaticamente. Uma entrada encerrada pode ser reativada. Uma entrada
         *     ativa idêntica é idempotente, enquanto uma entrada ativa incompatível retorna `409`.
         */
        readonly post: operations["postSuppressions"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/suppressions/import": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Importa supressões manuais de um CSV
         * @description Recebe UTF-8 com o cabeçalho exato `email,reason,expires_at,note`, no máximo 2 MiB e
         *     1.000 registros. `expires_at` e `note` podem ficar vazios. O arquivo inteiro é validado
         *     antes da escrita e a importação é atômica: qualquer linha inválida rejeita tudo.
         *     Endereços repetidos no mesmo arquivo são contabilizados em `duplicates`.
         */
        readonly post: operations["postSuppressionsImport"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/suppressions/export": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Exporta supressões do tenant em CSV
         * @description Exporta o conjunto filtrado com cabeçalho `email,reason,state,origin,expires_at,note,updated_at`.
         *     Valores iniciados por caracteres de fórmula são neutralizados para impedir formula
         *     injection ao abrir o arquivo em uma planilha. O CSV nunca contém diagnóstico SMTP bruto.
         */
        readonly get: operations["getSuppressionsExport"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/suppressions/{id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /** Consulta uma supressão e seu histórico */
        readonly get: operations["getSuppressionsId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/suppressions/{id}/release": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Libera um endereço suprimido
         * @description Operação otimista e auditada. Exige confirmação explícita, a versão atual e justificativa
         *     entre 10 e 500 caracteres. Supressões por `complaint`, `unsubscribe` ou `spam_trap` não
         *     podem ser liberadas por esta API. Versão desatualizada, entrada já encerrada ou motivo
         *     protegido retornam `409` sem alterar o registro.
         */
        readonly post: operations["postSuppressionsIdRelease"];
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
        /**
         * Atualizar ou reativar um endpoint de webhook
         * @description Aplica uma alteração com controle otimista de concorrência. Envie a
         *     `version` atual em `expected_version`; uma versão desatualizada retorna
         *     `409` sem aplicar parcialmente o formulário.
         */
        readonly patch: operations["patchWebhooksId"];
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}/deliveries": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Listar entregas de um endpoint
         * @description Retorna somente metadados operacionais. O corpo enviado, o corpo da
         *     resposta do destino, headers e secrets nunca fazem parte desta lista.
         *     A ordenação é estável por criação e UUID, do mais recente para o mais antigo.
         */
        readonly get: operations["getWebhooksIdDeliveries"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}/deliveries/{delivery_id}": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        /**
         * Consultar uma entrega e suas tentativas
         * @description Expõe um resumo seguro do payload por lista de campos permitidos e
         *     metadados das tentativas. Não expõe destinatários, conteúdo arbitrário,
         *     resposta bruta do destino, URL do endpoint nem credenciais.
         */
        readonly get: operations["getWebhooksIdDeliveriesDeliveryId"];
        readonly put?: never;
        readonly post?: never;
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}/deliveries/{delivery_id}/replay": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Reenviar uma entrega terminal
         * @description Cria uma nova entrega a partir de uma entrega `delivered` ou `failed`.
         *     A nova entrega tem UUID próprio e preserva o evento/payload original.
         *     O replay é permitido por 7 dias enquanto o payload estiver retido.
         *     Repetir a solicitação com a mesma chave retorna a mesma operação;
         *     reutilizar a chave com outra solicitação, ou uma origem expirada, retorna `409`.
         *     O endpoint precisa estar ativo para uma operação nova; replays em endpoint
         *     desativado retornam `409` antes da criação de uma nova entrega. Um retry
         *     idempotente de uma operação já aceita continua retornando o resultado original.
         *     Novas operações estão sujeitas a cooldown por endpoint, limite persistente
         *     de 100 por tenant em 24 horas e teto de 100 jobs não terminais.
         */
        readonly post: operations["postWebhooksIdDeliveriesDeliveryIdReplay"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}/test": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Enviar um evento de teste seguro
         * @description Enfileira `webhook.test` com um payload fixo gerado pela ViaPost, sem
         *     dados de mensagens nem destinatários. Repetir a chave de idempotência
         *     retorna a mesma entrega, inclusive se o endpoint tiver sido desativado depois.
         *     Uma operação nova exige endpoint ativo e retorna `409` antes de criar a entrega
         *     quando ele estiver desativado. Novas operações estão sujeitas a cooldown por
         *     endpoint, limite persistente de 100 por tenant em 24 horas e teto de
         *     100 jobs não terminais.
         */
        readonly post: operations["postWebhooksIdTest"];
        readonly delete?: never;
        readonly options?: never;
        readonly head?: never;
        readonly patch?: never;
        readonly trace?: never;
    };
    readonly "/v1/webhooks/{id}/secret/rotate": {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly get?: never;
        readonly put?: never;
        /**
         * Rotacionar o secret de assinatura
         * @description Substitui imediatamente o secret usado nas próximas entregas. O novo
         *     valor em texto puro só aparece na primeira resposta e deve ser armazenado
         *     com segurança. Um retry idempotente retorna apenas metadados, sem `secret`;
         *     o servidor não persiste uma cópia histórica recuperável. A API nunca
         *     retorna secrets em leituras.
         */
        readonly post: operations["postWebhooksIdSecretRotate"];
        readonly delete?: never;
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
            /** @description Detalhes aditivos de validação, sem valores enviados pelo cliente. */
            readonly details?: readonly components["schemas"]["ValidationDetail"][];
        };
        readonly ValidationDetail: {
            readonly line: number;
            /** @enum {string} */
            readonly field: "csv" | "header" | "email" | "subscribed" | "properties";
            /** @enum {string} */
            readonly code: "invalid_encoding" | "invalid_header" | "invalid_row" | "too_many_rows" | "invalid_row_count" | "invalid_email" | "invalid_boolean" | "invalid_object";
        };
        readonly Error: {
            readonly error: components["schemas"]["ErrorDetail"];
        };
        /** Format: uuid */
        readonly UUID: string;
        /** Format: date-time */
        readonly Timestamp: string;
        /** Format: date-time */
        readonly SegmentTimestamp: string;
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
        readonly InboundDomainConfiguration: {
            /** @description Domínio usado após o `@` em qualquer endereço recebido. */
            readonly recipient_domain: string;
            /** @enum {string} */
            readonly status: "ready" | "awaiting_domain_verification";
            readonly mx: components["schemas"]["InboundMXConfiguration"];
        };
        readonly InboundMXConfiguration: {
            /** @constant */
            readonly host: "inbound.viapost.io";
            /** @constant */
            readonly priority: 10;
            /** @enum {string} */
            readonly status: "configured" | "not_configured" | "unavailable";
        };
        /** @enum {string} */
        readonly DomainHealthStatus: "setup_required" | "insufficient_data" | "healthy" | "needs_attention" | "critical" | "disabled";
        /** @enum {string} */
        readonly DomainHealthCheckStatus: "pass" | "warning" | "fail" | "insufficient_data";
        /** @enum {string} */
        readonly DomainHealthRecommendationSeverity: "info" | "warning" | "critical";
        /** @enum {string} */
        readonly DomainHealthRecommendationCode: "verify_spf" | "verify_dkim" | "verify_dmarc" | "improve_delivery_rate" | "reduce_bounce_rate" | "insufficient_delivery_data";
        readonly DomainHealthWindow: {
            readonly start: components["schemas"]["Timestamp"];
            readonly end: components["schemas"]["Timestamp"];
            /** @constant */
            readonly days: 30;
        };
        readonly DomainHealthSPFCheck: {
            readonly verified: boolean;
            readonly status: components["schemas"]["DomainHealthCheckStatus"];
            /** @enum {integer} */
            readonly points: 0 | 10;
            /** @constant */
            readonly max_points: 10;
        };
        readonly DomainHealthDKIMCheck: {
            readonly verified: boolean;
            readonly status: components["schemas"]["DomainHealthCheckStatus"];
            /** @enum {integer} */
            readonly points: 0 | 20;
            /** @constant */
            readonly max_points: 20;
        };
        readonly DomainHealthDMARCCheck: {
            readonly verified: boolean;
            readonly status: components["schemas"]["DomainHealthCheckStatus"];
            /** @enum {integer} */
            readonly points: 0 | 15;
            /** @constant */
            readonly max_points: 15;
        };
        readonly DomainHealthDeliveryRateCheck: {
            /** Format: int64 */
            readonly numerator: number;
            /** Format: int64 */
            readonly denominator: number;
            /** @description Taxa inteira em basis points; `10000` representa 100%. `null` quando a amostra é insuficiente. */
            readonly rate_basis_points: number | null;
            readonly status: components["schemas"]["DomainHealthCheckStatus"];
            /** @description Pontos do check ou `null` quando a amostra é insuficiente. */
            readonly points: (0 | 14 | 28 | 35) | null;
            /** @constant */
            readonly max_points: 35;
        };
        readonly DomainHealthBounceRateCheck: {
            /** Format: int64 */
            readonly numerator: number;
            /** Format: int64 */
            readonly denominator: number;
            /** @description Taxa inteira em basis points; `10000` representa 100%. `null` quando a amostra é insuficiente. */
            readonly rate_basis_points: number | null;
            readonly status: components["schemas"]["DomainHealthCheckStatus"];
            /** @description Pontos do check ou `null` quando a amostra é insuficiente. */
            readonly points: (0 | 10 | 20) | null;
            /** @constant */
            readonly max_points: 20;
        };
        readonly DomainHealthChecks: {
            readonly spf: components["schemas"]["DomainHealthSPFCheck"];
            readonly dkim: components["schemas"]["DomainHealthDKIMCheck"];
            readonly dmarc: components["schemas"]["DomainHealthDMARCCheck"];
            readonly delivery_rate: components["schemas"]["DomainHealthDeliveryRateCheck"];
            readonly bounce_rate: components["schemas"]["DomainHealthBounceRateCheck"];
        };
        readonly DomainHealthRecommendation: {
            readonly code: components["schemas"]["DomainHealthRecommendationCode"];
            /** @enum {string} */
            readonly check: "spf" | "dkim" | "dmarc" | "delivery_rate" | "bounce_rate";
            readonly severity: components["schemas"]["DomainHealthRecommendationSeverity"];
            readonly message: string;
        };
        readonly DomainHealth: {
            readonly domain_id: components["schemas"]["UUID"];
            readonly domain_name: string;
            /** @enum {string} */
            readonly domain_status: "pending" | "verified" | "failed" | "disabled";
            /** @description `null` para domínio desabilitado, configuração DNS incompleta ou amostra insuficiente. */
            readonly score: number | null;
            readonly status: components["schemas"]["DomainHealthStatus"];
            /** @constant */
            readonly calculation_version: "domain_health_v1";
            readonly evaluated_at: components["schemas"]["Timestamp"];
            readonly dns_checked_at: components["schemas"]["Timestamp"] | null;
            readonly window: components["schemas"]["DomainHealthWindow"];
            /** @constant */
            readonly minimum_sample_size: 100;
            /** Format: int64 */
            readonly sample_size: number;
            readonly checks: components["schemas"]["DomainHealthChecks"];
            readonly recommendations: readonly components["schemas"]["DomainHealthRecommendation"][];
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
            /** @description Horário UTC de despacho; deve estar estritamente no futuro e em até 72 horas. */
            readonly scheduled_at?: components["schemas"]["Timestamp"] | null;
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
        readonly BatchSendMessage: {
            readonly idempotency_key: string;
            readonly request: components["schemas"]["SendRequest"];
        };
        readonly BatchSendRequest: {
            readonly messages: readonly components["schemas"]["BatchSendMessage"][];
        };
        readonly BatchSendError: {
            /** @enum {string} */
            readonly code: "not_found" | "conflict" | "tenant_inactive" | "forbidden" | "validation_error" | "rate_limited" | "quota_exceeded" | "service_unavailable" | "internal_error";
            readonly message: string;
        };
        readonly BatchSendResultItem: {
            readonly index: number;
            readonly accepted: readonly components["schemas"]["AcceptedMessage"][] | null;
            readonly rejected: readonly components["schemas"]["RejectedMessage"][] | null;
            readonly error?: components["schemas"]["BatchSendError"] | null;
        };
        readonly BatchSendResult: {
            readonly results: readonly components["schemas"]["BatchSendResultItem"][];
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
            /**
             * Format: email
             * @description Endereço de caixa postal normalizado em minúsculas; nunca contém nome de exibição.
             */
            readonly email: string;
            readonly first_name?: string | null;
            readonly last_name?: string | null;
            readonly subscribed: boolean;
            /** @description Objeto JSON livre; nunca é `null` nem array. */
            readonly properties: {
                readonly [key: string]: unknown;
            };
            readonly created_at: components["schemas"]["SegmentTimestamp"];
            readonly updated_at: components["schemas"]["SegmentTimestamp"];
        };
        readonly CreateContactRequest: {
            /**
             * Format: email
             * @description Caixa postal válida, sem nome de exibição ou espaços; é normalizada em minúsculas.
             */
            readonly email: string;
            readonly first_name?: string;
            readonly last_name?: string;
            readonly subscribed?: boolean;
            /** @description Objeto JSON livre; `null` e arrays são inválidos. */
            readonly properties?: {
                readonly [key: string]: unknown;
            };
        };
        readonly UpdateContactRequest: {
            /**
             * Format: email
             * @description Caixa postal válida, sem nome de exibição ou espaços; é normalizada em minúsculas.
             */
            readonly email?: string;
            readonly first_name?: string | null;
            readonly last_name?: string | null;
            readonly subscribed?: boolean;
            /** @description Substituição integral do objeto de propriedades; `null` e arrays são inválidos. */
            readonly properties?: {
                readonly [key: string]: unknown;
            };
        };
        readonly ContactList: {
            readonly data: readonly components["schemas"]["Contact"][];
            /** @description Cursor opaco da próxima página; string vazia quando não há próxima página. */
            readonly next_cursor: string;
        };
        readonly ContactImportResult: {
            readonly total: number;
            readonly created: number;
            /** @description Contatos já existentes ou que venceram uma corrida concorrente no banco. */
            readonly skipped: number;
            /** @description Linhas duplicadas válidas do arquivo, após a primeira ocorrência. */
            readonly duplicates: number;
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
        readonly StatusSubscriptionRequest: {
            /** Format: email */
            readonly email: string;
            readonly component_ids?: readonly ("api" | "app" | "inbound" | "automations" | "webhooks" | "tracking")[];
        };
        readonly StatusSubscriptionTokenRequest: {
            readonly token: string;
        };
        readonly MessageResponse: {
            readonly message: string;
        };
        /** @enum {string} */
        readonly SuppressionReason: "hard_bounce" | "complaint" | "unsubscribe" | "manual" | "invalid_address" | "spam_trap";
        /** @enum {string} */
        readonly SuppressionOrigin: "manual" | "import" | "automatic";
        /** @enum {string} */
        readonly SuppressionState: "active" | "expired" | "released";
        readonly Suppression: {
            readonly id: components["schemas"]["UUID"];
            /** Format: email */
            readonly email: string;
            readonly reason: components["schemas"]["SuppressionReason"];
            readonly origin: components["schemas"]["SuppressionOrigin"];
            readonly state: components["schemas"]["SuppressionState"];
            /** @constant */
            readonly scope: "tenant";
            /** @description Observação segura fornecida pelo tenant; nunca contém o diagnóstico SMTP bruto. */
            readonly note?: string | null;
            readonly domain_id?: components["schemas"]["UUID"] | null;
            readonly source_message_id?: components["schemas"]["UUID"] | null;
            readonly smtp_code?: number | null;
            readonly expires_at?: components["schemas"]["Timestamp"] | null;
            readonly released_at?: components["schemas"]["Timestamp"] | null;
            readonly release_reason?: string | null;
            readonly version: number;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        readonly SuppressionList: {
            readonly data: readonly components["schemas"]["Suppression"][];
            readonly next_cursor?: string;
        };
        readonly SuppressionDetail: {
            readonly suppression: components["schemas"]["Suppression"];
            readonly history: readonly components["schemas"]["SuppressionHistoryEvent"][];
            readonly next_history_cursor?: string;
        };
        readonly SuppressionHistoryEvent: {
            readonly id: components["schemas"]["UUID"];
            /** @enum {string} */
            readonly action: "created" | "updated" | "released" | "reactivated";
            readonly origin: components["schemas"]["SuppressionOrigin"];
            readonly reason: components["schemas"]["SuppressionReason"];
            /** @enum {string} */
            readonly actor_type: "system" | "user" | "api_key";
            readonly actor_id?: components["schemas"]["UUID"] | null;
            readonly justification?: string | null;
            readonly suppression_version: number;
            readonly occurred_at: components["schemas"]["Timestamp"];
        };
        readonly CreateSuppressionRequest: {
            /** Format: email */
            readonly email: string;
            /** @enum {string} */
            readonly reason: "manual" | "invalid_address";
            readonly expires_at?: components["schemas"]["Timestamp"] | null;
            readonly note?: string | null;
        };
        readonly ReleaseSuppressionRequest: {
            readonly expected_version: number;
            /** @constant */
            readonly acknowledge: true;
            readonly justification: string;
        };
        readonly SuppressionImportResult: {
            readonly total: number;
            readonly created: number;
            readonly reactivated: number;
            readonly skipped: number;
            readonly duplicates: number;
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
        readonly InboundMessageDetail: components["schemas"]["InboundMessage"] & components["schemas"]["MessageContent"] & {
            readonly attachments: readonly components["schemas"]["InboundAttachment"][];
            /** @constant */
            readonly content_variant: "received";
            /**
             * Format: uri
             * @deprecated
             * @description URL S3 pré-assinada mantida temporariamente para compatibilidade; use raw_message_api_path.
             */
            readonly raw_message_url?: string;
            readonly spf_result?: components["schemas"]["SPFAuthenticationResult"];
            /** @description Indica alinhamento SPF com o domínio From para DMARC; nulo quando não foi possível avaliar. */
            readonly spf_aligned?: boolean | null;
            readonly dkim_result?: components["schemas"]["DKIMAuthenticationResult"];
            /** @description Indica alinhamento de ao menos uma assinatura DKIM aprovada com o domínio From; nulo quando não foi possível avaliar. */
            readonly dkim_aligned?: boolean | null;
            readonly dmarc_result?: components["schemas"]["DMARCAuthenticationResult"];
            /** @description Disposição calculada para esta avaliação DMARC, separada do resultado pass/fail. */
            readonly dmarc_disposition?: ("none" | "quarantine" | "reject") | null;
            /** @description Instante em que a autenticação foi avaliada no recebimento; nulo em registros legados ou não avaliados. */
            readonly authentication_evaluated_at?: components["schemas"]["Timestamp"] | null;
        };
        readonly Message: {
            readonly id: components["schemas"]["UUID"];
            /** @enum {string} */
            readonly status: "scheduled" | "queued" | "processing" | "sent" | "delivered" | "deferred" | "bounced" | "failed" | "suppressed" | "rejected" | "cancelled" | "complained";
            /** @enum {string} */
            readonly stream: "transactional" | "marketing";
            readonly from_address: string;
            readonly to_address: string;
            readonly subject?: string | null;
            readonly recipient_domain: string;
            /** Format: uuid */
            readonly api_key_id?: string;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly scheduled_at?: components["schemas"]["Timestamp"] | null;
            readonly cancelled_at?: components["schemas"]["Timestamp"] | null;
            readonly queued_at?: components["schemas"]["Timestamp"];
            readonly sent_at?: components["schemas"]["Timestamp"];
            readonly delivered_at?: components["schemas"]["Timestamp"];
            readonly failed_at?: components["schemas"]["Timestamp"];
            readonly suppressed_at?: components["schemas"]["Timestamp"];
            readonly first_opened_at?: components["schemas"]["Timestamp"];
            readonly first_clicked_at?: components["schemas"]["Timestamp"];
            readonly last_error?: string | null;
        };
        readonly MessageContent: {
            /** @description HTML sanitizado no servidor e limitado a 1 MiB decodificado; consumidores ainda devem renderizá-lo como conteúdo não confiável. A prévia MIME só é processada para objetos de até 2 MiB. */
            readonly body_html?: string;
            /** @description Corpo de texto decodificado e limitado a 1 MiB para visualização. */
            readonly body_plain?: string;
            /**
             * @description `available` quando há corpo compatível; `not_present` quando o MIME válido não contém corpo de texto; `unavailable` quando o objeto não pode ser lido ou decodificado com segurança.
             * @enum {string}
             */
            readonly content_status?: "available" | "not_present" | "unavailable";
            /** @description Rota relativa autenticada; ausente quando a mensagem não possui referência de conteúdo armazenado. */
            readonly raw_message_api_path?: string;
        };
        readonly MessageDetail: components["schemas"]["Message"] & components["schemas"]["MessageContent"] & {
            /** @constant */
            readonly content_variant?: "submitted";
        };
        /** @enum {string} */
        readonly SPFAuthenticationResult: "pass" | "fail" | "softfail" | "neutral" | "none" | "temperror" | "permerror" | "not_evaluated";
        /** @enum {string} */
        readonly DKIMAuthenticationResult: "pass" | "fail" | "policy" | "neutral" | "none" | "temperror" | "permerror" | "not_evaluated";
        /**
         * @description Os valores quarantine e reject são mantidos para compatibilidade de clientes antigos; novas avaliações retornam pass/fail e informam a política em dmarc_disposition.
         * @enum {string}
         */
        readonly DMARCAuthenticationResult: "pass" | "fail" | "quarantine" | "reject" | "none" | "temperror" | "permerror" | "not_evaluated";
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
        /** @enum {string} */
        readonly OutboundMessageEventType: "queued" | "sent" | "delivered" | "deferred" | "soft_bounce" | "hard_bounce" | "complaint" | "open" | "click" | "unsubscribe" | "rejected" | "failed" | "suppressed";
        readonly MessageTimelineEvent: {
            /** @description UUID estável do evento persistido (`event_uuid`). */
            readonly id: components["schemas"]["UUID"];
            readonly message_id: components["schemas"]["UUID"];
            readonly type: components["schemas"]["OutboundMessageEventType"];
            readonly occurred_at: components["schemas"]["Timestamp"];
            readonly recipient?: string;
            readonly smtp_code?: number;
            readonly enhanced_code?: string;
            readonly diagnostic?: string;
            readonly mx_host?: string;
            /** Format: uri */
            readonly click_url?: string;
        };
        readonly MessageTimelinePage: {
            readonly data: readonly components["schemas"]["MessageTimelineEvent"][];
            /** @description Cursor opaco para a página seguinte; ausente quando não há mais eventos no período. */
            readonly next_cursor?: string;
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
            readonly scheduled: number;
            readonly queued: number;
            readonly processing: number;
            readonly sent: number;
            readonly delivered: number;
            readonly deferred: number;
            readonly bounced: number;
            readonly failed: number;
            readonly suppressed: number;
            readonly rejected: number;
            readonly complained: number;
            readonly cancelled: number;
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
        readonly DynamicSegmentMembershipError: {
            readonly error: {
                /** @constant */
                readonly code: "dynamic_segment_membership";
                readonly message: string;
                readonly request_id: string;
            };
        };
        readonly Segment: components["schemas"]["StaticSegment"] | components["schemas"]["DynamicSegment"];
        readonly StaticSegment: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            readonly description: string | null;
            /** @constant */
            readonly kind: "static";
            readonly definition: null;
            readonly contact_count: number;
            readonly created_at: components["schemas"]["SegmentTimestamp"];
            readonly updated_at: components["schemas"]["SegmentTimestamp"];
        };
        readonly DynamicSegment: {
            readonly id: components["schemas"]["UUID"];
            readonly name: string;
            readonly description: string | null;
            /** @constant */
            readonly kind: "dynamic";
            readonly definition: components["schemas"]["SegmentDefinition"];
            readonly contact_count: number;
            readonly created_at: components["schemas"]["SegmentTimestamp"];
            readonly updated_at: components["schemas"]["SegmentTimestamp"];
        };
        readonly SegmentList: {
            readonly data: readonly components["schemas"]["Segment"][];
            /** @description Cursor opaco; string vazia quando não houver próxima página. */
            readonly next_cursor: string;
        };
        readonly CreateSegmentRequest: {
            readonly name: string;
            readonly description?: string;
            /** @constant */
            readonly kind?: "static";
        } | {
            readonly name: string;
            readonly description?: string;
            /** @constant */
            readonly kind: "dynamic";
            readonly definition: components["schemas"]["SegmentDefinition"];
        };
        readonly UpdateSegmentRequest: {
            readonly name?: string;
            readonly description?: string | null;
            readonly definition?: components["schemas"]["SegmentDefinition"];
        };
        readonly SegmentContactRequest: {
            readonly contact_id: components["schemas"]["UUID"];
        };
        readonly SegmentPreviewRequest: {
            readonly definition: components["schemas"]["SegmentDefinition"];
            /** @default 20 */
            readonly limit?: number;
        };
        readonly SegmentPreview: {
            readonly contact_count: number;
            readonly data: readonly components["schemas"]["Contact"][];
        };
        /** @description A validação semântica também rejeita árvore com mais de 100 predicados. */
        readonly SegmentDefinition: components["schemas"]["AllGroupDepth1"] | components["schemas"]["AnyGroupDepth1"];
        readonly AllGroupDepth1: {
            readonly all: readonly components["schemas"]["SegmentRuleDepth1"][];
        };
        readonly AnyGroupDepth1: {
            readonly any: readonly components["schemas"]["SegmentRuleDepth1"][];
        };
        readonly AllGroupDepth2: {
            readonly all: readonly components["schemas"]["SegmentRuleDepth2"][];
        };
        readonly AnyGroupDepth2: {
            readonly any: readonly components["schemas"]["SegmentRuleDepth2"][];
        };
        readonly AllGroupDepth3: {
            readonly all: readonly components["schemas"]["SegmentRuleDepth3"][];
        };
        readonly AnyGroupDepth3: {
            readonly any: readonly components["schemas"]["SegmentRuleDepth3"][];
        };
        readonly AllGroupDepth4: {
            readonly all: readonly components["schemas"]["LeafRule"][];
        };
        readonly AnyGroupDepth4: {
            readonly any: readonly components["schemas"]["LeafRule"][];
        };
        readonly SegmentRuleDepth1: components["schemas"]["AllGroupDepth2"] | components["schemas"]["AnyGroupDepth2"] | components["schemas"]["LeafRule"];
        readonly SegmentRuleDepth2: components["schemas"]["AllGroupDepth3"] | components["schemas"]["AnyGroupDepth3"] | components["schemas"]["LeafRule"];
        readonly SegmentRuleDepth3: components["schemas"]["AllGroupDepth4"] | components["schemas"]["AnyGroupDepth4"] | components["schemas"]["LeafRule"];
        readonly LeafRule: components["schemas"]["TextAttributePredicate"] | components["schemas"]["TextPresencePredicate"] | components["schemas"]["SubscribedPredicate"] | components["schemas"]["CreatedAtPredicate"] | components["schemas"]["PropertyValuePredicate"] | components["schemas"]["PropertyPresencePredicate"] | components["schemas"]["CustomEventPredicate"];
        readonly TextAttributePredicate: {
            /** @enum {string} */
            readonly field: "email" | "first_name" | "last_name";
            /** @enum {string} */
            readonly operator: "eq" | "neq" | "contains" | "starts_with" | "ends_with";
            readonly value: string;
        };
        readonly TextPresencePredicate: {
            /** @enum {string} */
            readonly field: "email" | "first_name" | "last_name";
            /** @enum {string} */
            readonly operator: "is_set" | "is_not_set";
        };
        readonly SubscribedPredicate: {
            /** @constant */
            readonly field: "subscribed";
            /** @constant */
            readonly operator: "eq";
            readonly value: boolean;
        };
        readonly CreatedAtPredicate: {
            /** @constant */
            readonly field: "created_at";
            /** @enum {string} */
            readonly operator: "before" | "after";
            readonly value: components["schemas"]["SegmentTimestamp"];
        };
        readonly PropertyValuePredicate: {
            /** @constant */
            readonly field: "property";
            readonly key: string;
            /** @enum {string} */
            readonly operator: "eq" | "neq";
            readonly value: string | number | boolean;
        };
        readonly PropertyPresencePredicate: {
            /** @constant */
            readonly field: "property";
            readonly key: string;
            /** @enum {string} */
            readonly operator: "exists" | "not_exists";
        };
        readonly CustomEventPredicate: {
            readonly event_name: string;
            /** @constant */
            readonly operator: "occurred";
            readonly within_days: number;
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
            /**
             * Format: uri
             * @description URL HTTPS pública, sem credenciais ou fragmento; destinos privados são rejeitados.
             */
            readonly url: string;
            readonly event_types: readonly components["schemas"]["WebhookSubscribableEventType"][];
            readonly enabled: boolean;
            readonly max_attempts: number;
            readonly consecutive_failures: number;
            readonly disabled_at: components["schemas"]["Timestamp"] | null;
            readonly secret_rotated_at: components["schemas"]["Timestamp"] | null;
            /** Format: int64 */
            readonly version: number;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
        };
        /** @enum {string} */
        readonly WebhookSubscribableEventType: "queued" | "sent" | "delivered" | "deferred" | "soft_bounce" | "hard_bounce" | "complaint" | "open" | "click" | "unsubscribe" | "rejected" | "failed" | "suppressed" | "inbound.received";
        readonly WebhookDeliveryEventType: components["schemas"]["WebhookSubscribableEventType"] | "webhook.test";
        readonly WebhookList: {
            readonly webhooks: readonly components["schemas"]["WebhookEndpoint"][];
        };
        readonly CreateWebhookRequest: {
            /** Format: uri */
            readonly url: string;
            readonly event_types: readonly components["schemas"]["WebhookSubscribableEventType"][];
        };
        readonly CreateWebhookResponse: {
            readonly endpoint: components["schemas"]["WebhookEndpoint"];
            /** @description Secret retornado uma única vez; não é recuperável por operações de leitura. */
            readonly secret: string;
        };
        readonly UpdateWebhookRequest: {
            /** Format: int64 */
            readonly expected_version: number;
            readonly enabled?: boolean;
            readonly event_types?: readonly components["schemas"]["WebhookSubscribableEventType"][];
            readonly max_attempts?: number;
        };
        readonly EmptyObjectRequest: Record<string, never>;
        /**
         * @description `pending` agrega os estados internos em fila, processamento e retry.
         *     `failed` também representa entregas canceladas porque o endpoint deixou
         *     de estar disponível.
         * @enum {string}
         */
        readonly WebhookDeliveryStatus: "pending" | "delivered" | "failed";
        readonly WebhookDeliverySummary: {
            readonly delivery_id: components["schemas"]["UUID"];
            readonly event_type: components["schemas"]["WebhookDeliveryEventType"];
            readonly status: components["schemas"]["WebhookDeliveryStatus"];
            readonly attempt_count: number;
            readonly created_at: components["schemas"]["Timestamp"];
            readonly updated_at: components["schemas"]["Timestamp"];
            readonly next_retry_at: components["schemas"]["Timestamp"] | null;
            readonly delivered_at: components["schemas"]["Timestamp"] | null;
            readonly last_response_code: number | null;
            readonly last_duration_ms: number | null;
            readonly is_test: boolean;
            readonly replay_of_delivery_id: components["schemas"]["UUID"] | null;
        };
        readonly WebhookDeliveryPage: {
            readonly data: readonly components["schemas"]["WebhookDeliverySummary"][];
            /** @description Cursor opaco para a página seguinte; ausente na última página. */
            readonly next_cursor?: string;
        };
        readonly WebhookDeliveryAttempt: {
            readonly attempt: number;
            /** @description Estado persistido da tentativa; consumidores não devem inferir o estado agregado por este campo. */
            readonly status: string;
            readonly response_code: number | null;
            readonly duration_ms: number | null;
            readonly attempted_at: components["schemas"]["Timestamp"];
            readonly next_retry_at: components["schemas"]["Timestamp"] | null;
        };
        /**
         * @description Visão por lista de permissão. Campos arbitrários do payload original,
         *     destinatários, conteúdo e URLs nunca são retornados.
         */
        readonly WebhookPayloadRedacted: {
            readonly event_type?: components["schemas"]["WebhookDeliveryEventType"];
            readonly message_id?: components["schemas"]["UUID"];
            readonly inbound_message_id?: components["schemas"]["UUID"];
            readonly occurred_at?: components["schemas"]["Timestamp"];
            readonly test?: boolean;
        };
        readonly WebhookDeliveryDetail: components["schemas"]["WebhookDeliverySummary"] & {
            readonly payload_redacted: components["schemas"]["WebhookPayloadRedacted"];
            readonly attempts: readonly components["schemas"]["WebhookDeliveryAttempt"][];
        };
        readonly WebhookOperationAccepted: {
            readonly delivery_id: components["schemas"]["UUID"];
            /** @constant */
            readonly status: "queued";
            readonly created_at: components["schemas"]["Timestamp"];
        };
        readonly WebhookTestAccepted: components["schemas"]["WebhookOperationAccepted"] & {
            /** @constant */
            readonly is_test: true;
        };
        readonly WebhookReplayAccepted: components["schemas"]["WebhookOperationAccepted"] & {
            readonly source_delivery_id: components["schemas"]["UUID"];
        };
        readonly RotateWebhookSecretResponse: {
            readonly endpoint: components["schemas"]["WebhookEndpoint"];
            /** @description Novo secret; presente somente na primeira resposta da rotação. */
            readonly secret?: string;
            readonly rotated_at: components["schemas"]["Timestamp"];
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
        /** @description dynamic_segment_membership; segmentos dinâmicos não aceitam membership manual */
        readonly DynamicSegmentMembershipConflict: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["DynamicSegmentMembershipError"];
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
        /** @description payload_too_large */
        readonly PayloadTooLarge: {
            headers: {
                readonly [name: string]: unknown;
            };
            content: {
                readonly "application/json": components["schemas"]["Error"];
            };
        };
        /** @description service_unavailable */
        readonly ServiceUnavailable: {
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
        /** @description Cursor opaco base64url retornado pela API, com desempate estável por `(created_at,id)`; timestamps RFC 3339 legados também são aceitos. Não o interprete ou modifique e reutilize-o somente com os mesmos filtros. */
        readonly AutomationCursor: string;
        /** @description Máximo de itens por página; padrão 50. */
        readonly AutomationLimit: number;
        /** @description Valores não positivos ou inválidos usam 14; valores acima de 90 são limitados a 90. */
        readonly Days: number;
        readonly IdempotencyKey: string;
        /**
         * @description Identifica uma operação de escrita. Deve ser reutilizada apenas ao
         *     repetir exatamente a mesma solicitação; uso conflitante retorna `409`.
         */
        readonly IdempotencyKeyRequired: string;
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
                    /** @description Impede cache da resposta que contém o secret inicial. */
                    readonly "Cache-Control"?: "private, no-store";
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
                /** @description Cursor opaco base64url retornado pela API, com desempate estável por `(created_at,id)`; timestamps RFC 3339 legados também são aceitos. Não o interprete ou modifique e reutilize-o somente com os mesmos filtros. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                /** @description Máximo de itens por página; padrão 50. */
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
                /** @description Cursor opaco base64url retornado pela API, com desempate estável por `(created_at,id)`; timestamps RFC 3339 legados também são aceitos. Não o interprete ou modifique e reutilize-o somente com os mesmos filtros. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                /** @description Máximo de itens por página; padrão 50. */
                readonly limit?: components["parameters"]["AutomationLimit"];
                /** @description Busca por e-mail ou nome do contato; máximo de 200 caracteres. */
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
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postContactsImport: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "text/csv": string;
            };
        };
        readonly responses: {
            /** @description Importação concluída; totais são calculados a partir do resultado real do banco. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["ContactImportResult"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 413: components["responses"]["PayloadTooLarge"];
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
    readonly getDomainsIdHealth: {
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
            /** @description Snapshot de health do domínio; ausência de score usa `insufficient_data`, não `404`. */
            readonly 200: {
                headers: {
                    /** @description Impede armazenamento da avaliação tenant-scoped por caches compartilhados ou privados. */
                    readonly "Cache-Control"?: "private, no-store";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["DomainHealth"];
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
    readonly getDomainsIdInbound: {
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
            /** @description Configuração de recebimento do domínio tenant-scoped. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["InboundDomainConfiguration"];
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
    readonly postStatusSubscriptions: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["StatusSubscriptionRequest"];
            };
        };
        readonly responses: {
            /** @description Solicitação aceita; a resposta não revela se o e-mail já estava inscrito. */
            readonly 202: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            /** @description A rota só é publicada no host status.viapost.io. */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postStatusSubscriptionsConfirm: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["StatusSubscriptionTokenRequest"];
            };
        };
        readonly responses: {
            /** @description Confirmação processada de forma idempotente. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            /** @description A rota só é publicada no host status.viapost.io. */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postStatusSubscriptionsUnsubscribe: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["StatusSubscriptionTokenRequest"];
            };
        };
        readonly responses: {
            /** @description Cancelamento processado de forma idempotente. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageResponse"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            /** @description A rota só é publicada no host status.viapost.io. */
            readonly 404: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content?: never;
            };
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
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
    readonly getInboundMessagesIdRaw: {
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
            /** @description Arquivo `.eml` recebido. */
            readonly 200: {
                headers: {
                    /** @description Impede armazenamento de conteúdo sensível por caches compartilhados ou privados. */
                    readonly "Cache-Control"?: "private, no-store";
                    /** @description Força download com nome de arquivo derivado exclusivamente do ID da mensagem. */
                    readonly "Content-Disposition"?: string;
                    /** @description Impede MIME sniffing no navegador. */
                    readonly "X-Content-Type-Options"?: "nosniff";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "message/rfc822": string;
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
            readonly 503: components["responses"]["ServiceUnavailable"];
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
    readonly getMessagesEvents: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco retornado em `next_cursor`; não deve ser interpretado ou alterado pelo cliente. */
                readonly cursor?: string;
                /** @description Quantidade máxima de eventos retornados. */
                readonly limit?: number;
                /** @description Janela relativa ao instante da consulta; usa `24h` quando omitida. */
                readonly period?: "24h" | "7d" | "14d" | "30d";
                /** @description Filtra por um único tipo outbound de entrega ou tracking. */
                readonly type?: components["schemas"]["OutboundMessageEventType"];
                /** @description Filtra pelo UUID de uma mensagem pertencente ao tenant autenticado. */
                readonly message_id?: string;
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Página de eventos, ordenada por `occurred_at` decrescente com desempate estável. */
            readonly 200: {
                headers: {
                    /** @description Impede cache de metadados de destinatários e diagnósticos de entrega. */
                    readonly "Cache-Control"?: "private, no-store";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["MessageTimelinePage"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
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
                    readonly "application/json": components["schemas"]["MessageDetail"];
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
    readonly getMessagesIdRaw: {
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
            /** @description Arquivo `.eml` submetido. */
            readonly 200: {
                headers: {
                    /** @description Impede armazenamento de conteúdo sensível por caches compartilhados ou privados. */
                    readonly "Cache-Control"?: "private, no-store";
                    /** @description Força download com nome de arquivo derivado exclusivamente do ID da mensagem. */
                    readonly "Content-Disposition"?: string;
                    /** @description Impede MIME sniffing no navegador. */
                    readonly "X-Content-Type-Options"?: "nosniff";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "message/rfc822": string;
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
            readonly 503: components["responses"]["ServiceUnavailable"];
        };
    };
    readonly postMessagesIdCancel: {
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
            /** @description Mensagem cancelada antes do despacho. */
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
                /** @description Cursor opaco base64url retornado pela API, com desempate estável por `(created_at,id)`; timestamps RFC 3339 legados também são aceitos. Não o interprete ou modifique e reutilize-o somente com os mesmos filtros. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                /** @description Máximo de itens por página; padrão 50. */
                readonly limit?: components["parameters"]["AutomationLimit"];
                /** @description Busca pelo nome do segmento; máximo de 200 caracteres. */
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
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSegmentsPreview: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["SegmentPreviewRequest"];
            };
        };
        readonly responses: {
            /** @description Cardinalidade exata e amostra de até 50 contatos no mesmo snapshot */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SegmentPreview"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
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
                /** @description Cursor opaco base64url retornado pela API, com desempate estável por `(created_at,id)`; timestamps RFC 3339 legados também são aceitos. Não o interprete ou modifique e reutilize-o somente com os mesmos filtros. */
                readonly cursor?: components["parameters"]["AutomationCursor"];
                /** @description Máximo de itens por página; padrão 50. */
                readonly limit?: components["parameters"]["AutomationLimit"];
                /** @description Busca pelo e-mail do contato; máximo de 200 caracteres. */
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
            /** @description Lista paginada de contatos do segmento */
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
            readonly 409: components["responses"]["DynamicSegmentMembershipConflict"];
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
            readonly 409: components["responses"]["DynamicSegmentMembershipConflict"];
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
    readonly postSendBatch: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["BatchSendRequest"];
            };
        };
        readonly responses: {
            /** @description Resultado de cada item na ordem da requisição, incluindo erros por item. */
            readonly 202: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["BatchSendResult"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSuppressions: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco retornado em `next_cursor`. */
                readonly cursor?: string;
                readonly limit?: number;
                /** @description Busca parcial sem diferenciação de maiúsculas no endereço. */
                readonly search?: string;
                readonly reason?: components["schemas"]["SuppressionReason"];
                readonly state?: "active" | "expired" | "released" | "all";
                readonly origin?: components["schemas"]["SuppressionOrigin"];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Página de supressões em ordem decrescente de atualização. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SuppressionList"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSuppressions: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["CreateSuppressionRequest"];
            };
        };
        readonly responses: {
            /** @description Supressão criada ou reativada. */
            readonly 201: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Suppression"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 409: components["responses"]["Conflict"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSuppressionsImport: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "text/csv": string;
            };
        };
        readonly responses: {
            /** @description Importação concluída atomicamente. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SuppressionImportResult"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 409: components["responses"]["Conflict"];
            readonly 413: components["responses"]["PayloadTooLarge"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSuppressionsExport: {
        readonly parameters: {
            readonly query?: {
                readonly search?: string;
                readonly reason?: components["schemas"]["SuppressionReason"];
                readonly state?: "active" | "expired" | "released" | "all";
                readonly origin?: components["schemas"]["SuppressionOrigin"];
            };
            readonly header?: never;
            readonly path?: never;
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Arquivo CSV UTF-8. */
            readonly 200: {
                headers: {
                    readonly "Content-Disposition"?: string;
                    readonly "Cache-Control"?: "private, no-store";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "text/csv": string;
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getSuppressionsId: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco para carregar eventos de auditoria anteriores. */
                readonly history_cursor?: string;
                /** @description Quantidade de eventos de auditoria por página. */
                readonly history_limit?: number;
            };
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Supressão e eventos de auditoria em ordem cronológica. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["SuppressionDetail"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postSuppressionsIdRelease: {
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
                readonly "application/json": components["schemas"]["ReleaseSuppressionRequest"];
            };
        };
        readonly responses: {
            /** @description Supressão liberada. */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["Suppression"];
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
    readonly patchWebhooksId: {
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
                readonly "application/json": components["schemas"]["UpdateWebhookRequest"];
            };
        };
        readonly responses: {
            /** @description Endpoint atualizado */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookEndpoint"];
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
    readonly getWebhooksIdDeliveries: {
        readonly parameters: {
            readonly query?: {
                /** @description Cursor opaco retornado em `next_cursor`. */
                readonly cursor?: string;
                readonly limit?: number;
                readonly status?: components["schemas"]["WebhookDeliveryStatus"];
                readonly event_type?: components["schemas"]["WebhookDeliveryEventType"];
            };
            readonly header?: never;
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Página de entregas */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookDeliveryPage"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly getWebhooksIdDeliveriesDeliveryId: {
        readonly parameters: {
            readonly query?: never;
            readonly header?: never;
            readonly path: {
                readonly id: string;
                readonly delivery_id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody?: never;
        readonly responses: {
            /** @description Detalhe seguro da entrega */
            readonly 200: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookDeliveryDetail"];
                };
            };
            readonly 400: components["responses"]["ValidationError"];
            readonly 401: components["responses"]["Unauthorized"];
            readonly 403: components["responses"]["Forbidden"];
            readonly 404: components["responses"]["NotFound"];
            readonly 429: components["responses"]["TooManyRequests"];
            readonly 500: components["responses"]["InternalError"];
        };
    };
    readonly postWebhooksIdDeliveriesDeliveryIdReplay: {
        readonly parameters: {
            readonly query?: never;
            readonly header: {
                /**
                 * @description Identifica uma operação de escrita. Deve ser reutilizada apenas ao
                 *     repetir exatamente a mesma solicitação; uso conflitante retorna `409`.
                 */
                readonly "Idempotency-Key": components["parameters"]["IdempotencyKeyRequired"];
            };
            readonly path: {
                readonly id: string;
                readonly delivery_id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["EmptyObjectRequest"];
            };
        };
        readonly responses: {
            /** @description Reenvio persistido e aceito para processamento */
            readonly 202: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookReplayAccepted"];
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
    readonly postWebhooksIdTest: {
        readonly parameters: {
            readonly query?: never;
            readonly header: {
                /**
                 * @description Identifica uma operação de escrita. Deve ser reutilizada apenas ao
                 *     repetir exatamente a mesma solicitação; uso conflitante retorna `409`.
                 */
                readonly "Idempotency-Key": components["parameters"]["IdempotencyKeyRequired"];
            };
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["EmptyObjectRequest"];
            };
        };
        readonly responses: {
            /** @description Teste persistido e aceito para processamento */
            readonly 202: {
                headers: {
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["WebhookTestAccepted"];
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
    readonly postWebhooksIdSecretRotate: {
        readonly parameters: {
            readonly query?: never;
            readonly header: {
                /**
                 * @description Identifica uma operação de escrita. Deve ser reutilizada apenas ao
                 *     repetir exatamente a mesma solicitação; uso conflitante retorna `409`.
                 */
                readonly "Idempotency-Key": components["parameters"]["IdempotencyKeyRequired"];
            };
            readonly path: {
                readonly id: string;
            };
            readonly cookie?: never;
        };
        readonly requestBody: {
            readonly content: {
                readonly "application/json": components["schemas"]["EmptyObjectRequest"];
            };
        };
        readonly responses: {
            /** @description Secret rotacionado ou metadados da mesma rotação idempotente */
            readonly 200: {
                headers: {
                    /** @description Impede cache da resposta que pode conter o secret. */
                    readonly "Cache-Control"?: "private, no-store";
                    readonly [name: string]: unknown;
                };
                content: {
                    readonly "application/json": components["schemas"]["RotateWebhookSecretResponse"];
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
}
