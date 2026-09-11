import assert from "node:assert/strict";
import test from "node:test";

import {
  ViaPost,
  ViaPostAPIError,
  ViaPostConnectionError,
  ViaPostResponseTooLargeError,
  ViaPostTimeoutError,
  VERSION,
} from "../dist/index.js";

const json = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    status: init.status ?? 200,
    headers: { "content-type": "application/json", ...init.headers },
  });

const sendInput = {
  from: "hello@example.com",
  to: ["person@example.net"],
  subject: "Hello",
  text: "Hello from ViaPost",
};

test("rejects an empty API key", () => {
  assert.throws(() => new ViaPost({ apiKey: "" }), /apiKey/);
});

test("rejects unsafe or invalid client configuration", () => {
  assert.throws(() => new ViaPost({ apiKey: "test", baseUrl: "relative" }), /absolute/);
  assert.throws(() => new ViaPost({ apiKey: "test", baseUrl: "ftp://example.test" }), /HTTP/);
  assert.throws(() => new ViaPost({ apiKey: "test", baseUrl: "http://api.example.test" }), /HTTPS/);
  assert.throws(() => new ViaPost({ apiKey: "test", baseUrl: "https://user:pass@example.test" }), /credentials/);
  assert.throws(() => new ViaPost({ apiKey: "test", timeoutMs: 0 }), /timeoutMs/);
  assert.throws(() => new ViaPost({ apiKey: "test", maxResponseBytes: 0 }), /maxResponseBytes/);
  assert.throws(() => new ViaPost({ apiKey: "test", retry: { maxRetries: -1 } }), /maxRetries/);
  assert.doesNotThrow(() => new ViaPost({ apiKey: "test", baseUrl: "http://127.0.0.1:8080" }));
  assert.doesNotThrow(() => new ViaPost({ apiKey: "test", baseUrl: "http://localhost:8080" }));
});

test("sends Bearer authentication, user agent, and a normalized URL", async () => {
  let captured;
  const client = new ViaPost({
    apiKey: "example-api-key",
    baseUrl: "https://example.test/api/",
    fetch: async (input, init) => {
      captured = { input: String(input), init };
      return json({ data: [], next_cursor: "next" });
    },
  });

  await client.messages.list({ cursor: "2026-01-02T03:04:05Z", limit: 25, status: "delivered" });

  assert.equal(captured.input, "https://example.test/api/v1/messages?cursor=2026-01-02T03%3A04%3A05Z&limit=25&status=delivered");
  const headers = new Headers(captured.init.headers);
  assert.equal(headers.get("authorization"), "Bearer example-api-key");
  assert.equal(headers.get("user-agent"), `@viapost/sdk/${VERSION}`);
  assert.equal(headers.get("accept"), "application/json");
});

test("omits undefined query parameters", async () => {
  let capturedUrl;
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input) => {
      capturedUrl = String(input);
      return json({ data: [] });
    },
  });

  await client.messages.list({ search: undefined, period: "7d" });
  assert.equal(capturedUrl, "https://api.viapost.io/v1/messages?period=7d");
});

test("times out a request with a typed error", async () => {
  const client = new ViaPost({
    apiKey: "test",
    timeoutMs: 5,
    fetch: async (_input, init) =>
      await new Promise((_resolve, reject) => {
        init.signal.addEventListener("abort", () => reject(init.signal.reason), { once: true });
      }),
  });

  await assert.rejects(client.usage.retrieve(), (error) => {
    assert.ok(error instanceof ViaPostTimeoutError);
    assert.equal(error.timeoutMs, 5);
    return true;
  });
});

test("timeout remains active while consuming a response stream", async () => {
  const client = new ViaPost({
    apiKey: "test",
    timeoutMs: 5,
    fetch: async () =>
      new Response(
        new ReadableStream({
          start(controller) {
            this.timer = setTimeout(() => {
              controller.enqueue(new TextEncoder().encode('{"data":[]}'));
              controller.close();
            }, 30);
          },
          cancel() {
            clearTimeout(this.timer);
            return new Promise(() => undefined);
          },
        }),
        { headers: { "content-type": "application/json" } },
      ),
  });

  await assert.rejects(client.messages.list(), ViaPostTimeoutError);
});

test("preserves a caller abort reason", async () => {
  const controller = new AbortController();
  const reason = new Error("caller stopped");
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (_input, init) =>
      await new Promise((_resolve, reject) => {
        init.signal.addEventListener("abort", () => reject(init.signal.reason), { once: true });
      }),
  });

  const request = client.usage.retrieve({ signal: controller.signal });
  controller.abort(reason);
  await assert.rejects(request, (error) => error === reason);
});

test("caller abort remains active while consuming a response stream", async () => {
  const controller = new AbortController();
  const reason = new Error("stop reading");
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () =>
      new Response(
        new ReadableStream({
          start(streamController) {
            this.timer = setTimeout(() => {
              streamController.enqueue(new TextEncoder().encode('{"data":[]}'));
              streamController.close();
            }, 30);
          },
          cancel() {
            clearTimeout(this.timer);
            return new Promise(() => undefined);
          },
        }),
        { headers: { "content-type": "application/json" } },
      ),
  });

  const request = client.messages.list({}, { signal: controller.signal });
  setTimeout(() => controller.abort(reason), 5);
  await assert.rejects(request, (error) => error === reason);
});

test("rejects response bodies above the configured limit", async () => {
  const client = new ViaPost({
    apiKey: "test",
    maxResponseBytes: 8,
    fetch: async () => json({ data: ["too large"] }),
  });

  await assert.rejects(client.messages.list(), (error) => {
    assert.ok(error instanceof ViaPostResponseTooLargeError);
    assert.equal(error.maxResponseBytes, 8);
    return true;
  });
});

test("retries GET responses on 429 and 5xx only", async () => {
  const responses = [
    json({ error: { message: "busy" } }, { status: 503, headers: { "retry-after": "0" } }),
    json({ error: { message: "rate limited" } }, { status: 429, headers: { "retry-after": "0" } }),
    json({ data: [{ id: "message-1" }] }),
  ];
  let calls = 0;
  const client = new ViaPost({
    apiKey: "test",
    retry: { maxRetries: 2, baseDelayMs: 0, maxDelayMs: 0 },
    fetch: async () => responses[calls++],
  });

  const result = await client.messages.list();
  assert.equal(calls, 3);
  assert.equal(result.data[0].id, "message-1");
});

test("does not retry a mutating request", async () => {
  let calls = 0;
  const client = new ViaPost({
    apiKey: "test",
    retry: { maxRetries: 5, baseDelayMs: 0, maxDelayMs: 0 },
    fetch: async () => {
      calls += 1;
      return json({ error: { code: "internal", message: "failed" } }, { status: 500 });
    },
  });

  await assert.rejects(client.send.create(sendInput), ViaPostAPIError);
  assert.equal(calls, 1);
});

test("preserves API error details and request ID", async () => {
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () =>
      json(
        { error: { code: "not_found", message: "Message not found", details: { id: "missing" } } },
        { status: 404, headers: { "x-request-id": "req_123" } },
      ),
  });

  await assert.rejects(client.messages.retrieve("missing"), (error) => {
    assert.ok(error instanceof ViaPostAPIError);
    assert.equal(error.message, "Message not found");
    assert.equal(error.status, 404);
    assert.equal(error.requestId, "req_123");
    assert.equal(error.method, "GET");
    assert.equal(error.url, "https://api.viapost.io/v1/messages/missing");
    assert.deepEqual(error.body, {
      error: { code: "not_found", message: "Message not found", details: { id: "missing" } },
    });
    return true;
  });
});

test("uses the API error body request ID when response headers omit it", async () => {
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () =>
      json({ error: { code: "not_found", message: "missing", request_id: "req_from_body" } }, { status: 404 }),
  });

  await assert.rejects(client.messages.retrieve("missing"), (error) => {
    assert.ok(error instanceof ViaPostAPIError);
    assert.equal(error.requestId, "req_from_body");
    return true;
  });
});

test("wraps network failures without leaking credentials", async () => {
  const client = new ViaPost({
    apiKey: "secret-key-never-in-errors",
    fetch: async () => {
      throw new Error("socket closed");
    },
  });

  await assert.rejects(client.usage.retrieve(), (error) => {
    assert.ok(error instanceof ViaPostConnectionError);
    assert.doesNotMatch(error.message, /secret-key/);
    return true;
  });
});

test("sets Idempotency-Key for send and normalizes nullable result lists", async () => {
  let capturedHeaders;
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (_input, init) => {
      capturedHeaders = new Headers(init.headers);
      return json({ accepted: null, rejected: null });
    },
  });

  const result = await client.send.create(sendInput, { idempotencyKey: "order-123" });
  assert.equal(capturedHeaders.get("idempotency-key"), "order-123");
  assert.deepEqual(result.accepted, []);
  assert.deepEqual(result.rejected, []);
});

test("rejects an empty idempotency key", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({ accepted: [], rejected: [] }) });
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "" }), /between 1 and 255 bytes/);
});

test("rejects an idempotency key above the API byte limit", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({}) });
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "x".repeat(256) }), /255 bytes/);
});

test("validates idempotency keys using the API UTF-8 and Unicode rules", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({ accepted: [], rejected: [] }) });
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "é".repeat(128) }), /255 bytes/);
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "prefix\u0000suffix" }), /control or format/);
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "prefix\u200Esuffix" }), /control or format/);
});

test("rejects empty and URL-normalizing path parameters", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({}) });
  assert.throws(() => client.messages.retrieve(""), /messageId/);
  assert.throws(() => client.messages.retrieve("."), /messageId/);
  assert.throws(() => client.messages.retrieve(".."), /messageId/);
});

test("does not arm a request timeout when JSON serialization fails", async () => {
  const circular = {};
  circular.self = circular;
  let fetchCalls = 0;
  const client = new ViaPost({
    apiKey: "test",
    timeoutMs: 60_000,
    fetch: async () => {
      fetchCalls += 1;
      return json({ accepted: [], rejected: [] });
    },
  });

  await assert.rejects(client.send.create(circular), TypeError);
  assert.equal(fetchCalls, 0);
});

test("accepts successful responses without a body", async () => {
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () => new Response(null, { status: 204 }),
  });
  assert.equal(await client.domains.delete("domain/id"), undefined);
});

test("maps the complete ergonomic surface to public endpoints", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, new URL(input).pathname]);
      return json(new URL(input).pathname === "/v1/send" ? { accepted: [], rejected: [] } : { data: [] });
    },
  });

  await client.send.create(sendInput);
  await client.messages.list();
  await client.messages.retrieve("m/id");
  await client.messages.events("m/id");
  await client.messages.engagement();
  await client.messages.metrics();
  await client.messages.timeseries();
  await client.domains.list();
  await client.domains.create({ name: "example.com" });
  await client.domains.retrieve("d/id");
  await client.domains.delete("d/id");
  await client.domains.dns("d/id");
  await client.domains.verify("d/id");
  await client.domains.rotateDkim("d/id");
  await client.templates.list();
  await client.templates.create({ name: "Welcome" });
  await client.templates.retrieve("t/id");
  await client.templates.delete("t/id");
  await client.templates.archive("t/id");
  await client.templates.createAsset("t/id", {});
  await client.templates.updateDraft("t/id", {});
  await client.templates.duplicate("t/id");
  await client.templates.preview("t/id", {});
  await client.templates.publish("t/id");
  await client.templates.publish("t/id", {});
  await client.templates.versions("t/id");
  await client.templates.version("t/id", "v/id");
  await client.templates.revert("t/id", "v/id");
  await client.templates.revert("t/id", "v/id", {});
  await client.webhooks.list();
  await client.webhooks.create({ url: "https://example.com/hook", event_types: ["email.sent"] });
  await client.webhooks.delete("w/id");
  await client.automations.list();
  await client.automations.create({ name: "Welcome", trigger: {}, steps: [] });
  await client.automations.retrieve("a/id");
  await client.automations.update("a/id", { name: "Updated" });
  await client.automations.delete("a/id");
  await client.automations.activate("a/id");
  await client.automations.disable("a/id");
  await client.automations.updateDraft("a/id", {});
  await client.automations.duplicate("a/id");
  await client.automations.runs("a/id");
  await client.automations.run("a/id", "r/id");
  await client.automations.cancelRun("a/id", "r/id");
  await client.usage.retrieve();

  assert.deepEqual(calls, [
    ["POST", "/v1/send"],
    ["GET", "/v1/messages"],
    ["GET", "/v1/messages/m%2Fid"],
    ["GET", "/v1/messages/m%2Fid/events"],
    ["GET", "/v1/messages/engagement"],
    ["GET", "/v1/messages/metrics"],
    ["GET", "/v1/messages/timeseries"],
    ["GET", "/v1/domains"],
    ["POST", "/v1/domains"],
    ["GET", "/v1/domains/d%2Fid"],
    ["DELETE", "/v1/domains/d%2Fid"],
    ["GET", "/v1/domains/d%2Fid/dns"],
    ["POST", "/v1/domains/d%2Fid/verify"],
    ["POST", "/v1/domains/d%2Fid/dkim/rotate"],
    ["GET", "/v1/templates"],
    ["POST", "/v1/templates"],
    ["GET", "/v1/templates/t%2Fid"],
    ["DELETE", "/v1/templates/t%2Fid"],
    ["POST", "/v1/templates/t%2Fid/archive"],
    ["POST", "/v1/templates/t%2Fid/assets"],
    ["PATCH", "/v1/templates/t%2Fid/draft"],
    ["POST", "/v1/templates/t%2Fid/duplicate"],
    ["POST", "/v1/templates/t%2Fid/preview"],
    ["POST", "/v1/templates/t%2Fid/publish"],
    ["POST", "/v1/templates/t%2Fid/publish"],
    ["GET", "/v1/templates/t%2Fid/versions"],
    ["GET", "/v1/templates/t%2Fid/versions/v%2Fid"],
    ["POST", "/v1/templates/t%2Fid/versions/v%2Fid/revert"],
    ["POST", "/v1/templates/t%2Fid/versions/v%2Fid/revert"],
    ["GET", "/v1/webhooks"],
    ["POST", "/v1/webhooks"],
    ["DELETE", "/v1/webhooks/w%2Fid"],
    ["GET", "/v1/automations"],
    ["POST", "/v1/automations"],
    ["GET", "/v1/automations/a%2Fid"],
    ["PATCH", "/v1/automations/a%2Fid"],
    ["DELETE", "/v1/automations/a%2Fid"],
    ["POST", "/v1/automations/a%2Fid/activate"],
    ["POST", "/v1/automations/a%2Fid/disable"],
    ["PATCH", "/v1/automations/a%2Fid/draft"],
    ["POST", "/v1/automations/a%2Fid/duplicate"],
    ["GET", "/v1/automations/a%2Fid/runs"],
    ["GET", "/v1/automations/a%2Fid/runs/r%2Fid"],
    ["POST", "/v1/automations/a%2Fid/runs/r%2Fid/cancel"],
    ["GET", "/v1/usage"],
  ]);
});
