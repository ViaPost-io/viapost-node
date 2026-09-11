# ViaPost SDK for TypeScript and Node.js

Official, typed, **server-side only** client for the [ViaPost API](https://docs.viapost.io).
Do not bundle a ViaPost API key into browser or mobile code.

> Cliente oficial e tipado, exclusivo para uso no servidor, da API ViaPost. Nunca exponha a API
> Key em código de navegador ou aplicativo móvel.

## Install / Instalação

```bash
npm install @viapost/sdk
```

Requires Node.js 20.19 or newer. Both ESM and CommonJS are supported.
The package resolves to a fail-fast guard under the `browser` export condition so a server API key
cannot silently enter a browser bundle.

## Quickstart

```ts
import { ViaPost } from "@viapost/sdk";

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
- `viapost.messages` — list, retrieve, events, engagement, metrics, timeseries
- `viapost.domains` — list, create, retrieve, delete, DNS, verify, rotate DKIM
- `viapost.templates` — lifecycle, assets, preview, versions and publishing
- `viapost.webhooks` — list, create and delete
- `viapost.automations` — lifecycle, drafts and runs
- `viapost.usage.retrieve()`

All request/response models come from the published OpenAPI 3.1 contract. Advanced consumers may
import its generated `paths`, `operations`, and `components` types from `@viapost/sdk/openapi`.
The generated SDK view is API-key-only: session-cookie and CSRF details are intentionally omitted.

The v0.1.0 snapshot was vendored from `ViaPost-io/base-code` contract merge
`feee362f60fe7a1500a0b2f8aafd0f3dcd7eddfa` with SHA-256
`de26b2673cc48957e525368e8cce279122f3fe57af541d8b5cd0ae45e73fc952`.

## Reliability / Confiabilidade

- Default timeout: 60 seconds; override globally or per request.
- Pass an `AbortSignal` with `{ signal }` to cancel a request.
- Automatic retries apply **only** to GET/HEAD responses with HTTP 429 or 5xx status. Mutating
  requests are never retried automatically.
- `send.create` accepts `idempotencyKey`; use a stable business identifier when the same logical
  send could be submitted again.
- `accepted` and `rejected` are always arrays in the convenience result, even if an older API
  response returns `null`.

```ts
import { ViaPostAPIError, ViaPostTimeoutError } from "@viapost/sdk";

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
