# ViaPost SDK for TypeScript and Node.js

Official, typed, **server-side only** client for the [ViaPost API](https://docs.viapost.io).
Do not bundle a ViaPost API key into browser or mobile code.

> Cliente oficial e tipado, exclusivo para uso no servidor, da API ViaPost. Nunca exponha a API
> Key em código de navegador ou aplicativo móvel.

## Install / Instalação

The canonical package is published to GitHub Packages. Authenticate npm once with a GitHub
personal access token (classic) that has `read:packages`, then install the exact version:

```bash
npm login --scope=@viapost-io --auth-type=legacy --registry=https://npm.pkg.github.com
npm install @viapost-io/sdk@0.2.0
```

Use your GitHub username when prompted and the token as the password. Keep the repository `.npmrc`
mapping, without credentials, in applications that consume the SDK:

```ini
@viapost-io:registry=https://npm.pkg.github.com
```

For anonymous installation, use the exact checksummed tarball attached to the public GitHub
Release:

```bash
npm install https://github.com/ViaPost-io/viapost-node/releases/download/v0.2.0/viapost-sdk-0.2.0.tgz
```

The Release also contains `package.sha256`, and both files have GitHub artifact attestations.

Requires Node.js 20.19 or newer. Both ESM and CommonJS are supported.
The package resolves to a fail-fast guard under the `browser` export condition so a server API key
cannot silently enter a browser bundle.

## Quickstart

```ts
import { ViaPost } from "@viapost-io/sdk";

const viapost = new ViaPost({ apiKey: process.env.VIAPOST_API_KEY! });

const result = await viapost.send.create(
  {
    from: "hello@your-domain.example",
    to: ["person@example.com"],
    subject: "Hello from ViaPost",
    html: "<strong>Hello!</strong>",
    text: "Hello!",
  },
  { idempotencyKey: "order-123-welcome-email" },
);

console.log(result.accepted);
```

The client sends `Authorization: Bearer …` and targets `https://api.viapost.io` by default. A
custom `baseUrl` is useful for local tests:

```ts
const viapost = new ViaPost({
  apiKey: process.env.VIAPOST_API_KEY!,
  baseUrl: "http://localhost:15080",
  timeoutMs: 60_000,
});
```

## Resources / Recursos

- `viapost.send.create()`
- `viapost.contacts` — CRUD de contatos
- `viapost.events` — definições e envio de eventos customizados
- `viapost.segments` — CRUD e associação de contatos
- `viapost.messages` — list, retrieve, raw RFC 822, events, engagement, metrics, timeseries
- `viapost.inboundMessages` — list, retrieve e raw RFC 822
- `viapost.domains` — list, create, retrieve, delete, DNS, verify, rotate DKIM
- `viapost.templates` — lifecycle, assets, preview, versions and publishing
- `viapost.themes` — list, create e delete
- `viapost.suppressions` — lifecycle, importação e exportação CSV
- `viapost.webhooks` — lifecycle, entregas, teste, replay e rotação de segredo
- `viapost.automations` — lifecycle, drafts and runs
- `viapost.usage.retrieve()`

All request/response models come from the published OpenAPI 3.1 contract. Advanced consumers may
import its generated `paths`, `operations`, and `components` types from `@viapost-io/sdk/openapi`.
The generated SDK view is API-key-only: session-cookie and CSRF details are intentionally omitted.

The v0.2.0 snapshot has SHA-256
`f1b1fc0f198a2b0b36f0e893515dad191d6bb7d139fcf1e942c036bfa2f5169b`.

## Reliability / Confiabilidade

- Default timeout: 60 seconds; override globally or per request.
- Response bodies are limited to 32 MiB by default, covering the API's maximum inbound `.eml` size;
  override with `maxResponseBytes` when a stricter application limit is appropriate.
- HTTP redirects are rejected so request bodies and API credentials cannot be forwarded to another
  origin.
- Pass an `AbortSignal` with `{ signal }` to cancel a request.
- Automatic retries apply **only** to GET/HEAD responses with HTTP 429 or 5xx status. Mutating
  requests are never retried automatically.
- `send.create` accepts `idempotencyKey`; use a stable business identifier when the same logical
  send could be submitted again.
- `webhooks.test`, `webhooks.replay` e `webhooks.rotateSecret` exigem `idempotencyKey`.
- Chaves de idempotência devem usar somente caracteres ASCII visíveis, evitando divergências de
  codificação entre runtimes e proxies HTTP.
- Downloads raw de mensagens retornam `Uint8Array`, preservando os octetos do arquivo RFC 822.
- `accepted` and `rejected` are always arrays in the convenience result, even if an older API
  response returns `null`.

```ts
import { ViaPostAPIError, ViaPostTimeoutError } from "@viapost-io/sdk";

try {
  await viapost.messages.retrieve("message-id");
} catch (error) {
  if (error instanceof ViaPostAPIError) {
    console.error(error.status, error.requestId, error.body);
  } else if (error instanceof ViaPostTimeoutError) {
    console.error(error.timeoutMs);
  }
}
```

`ViaPostAPIError.body` and `.headers` can contain request-related data. Redact them before sending
errors to shared logs or third-party observability systems.

## Contract workflow / Fluxo do contrato

```bash
npm run check:contract   # semantic comparison with docs.viapost.io
npm run sync:contract    # update the vendored contract and generated types
npm run check:generated  # fail when generated types are stale
```

`openapi.yaml` is a public API contract whose terms remain those declared in that document. The SDK
source code is MIT licensed.

The optional `fetch` hook is intended only for trusted server-side implementations. The client
requires HTTPS for remote API endpoints; plain HTTP is accepted only for loopback development hosts.

## Development / Desenvolvimento

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run test:coverage
npm run test:package
npm pack --dry-run
```

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
