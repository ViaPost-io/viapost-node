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
  assert.equal(headers.get("user-agent"), `@viapost-io/sdk/${VERSION}`);
  assert.equal(headers.get("accept"), "application/json");
  assert.equal(captured.init.redirect, "error");
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
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "emoji-🔑" }), /visible ASCII/);
  await assert.rejects(client.send.create(sendInput, { idempotencyKey: "accent-é" }), /visible ASCII/);
});

test("rejects empty and URL-normalizing path parameters", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({}) });
  assert.throws(() => client.messages.retrieve(""), /messageId/);
  assert.throws(() => client.messages.retrieve("."), /messageId/);
  assert.throws(() => client.messages.retrieve(".."), /messageId/);
});

test("retrieves the RFC 822 source for outbound and inbound messages", async () => {
  const calls = [];
  const encodedSource = Uint8Array.from([0x46, 0x72, 0x6f, 0x6d, 0x3a, 0x20, 0xff, 0x0d, 0x0a]);
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, new URL(input).pathname, new Headers(init.headers).get("accept")]);
      return new Response(encodedSource, { headers: { "content-type": "message/rfc822" } });
    },
  });

  assert.deepEqual(await client.messages.raw("m/id"), encodedSource);
  assert.deepEqual(await client.inboundMessages.raw("i/id"), encodedSource);
  assert.deepEqual(calls, [
    ["GET", "/v1/messages/m%2Fid/raw", "message/rfc822"],
    ["GET", "/v1/inbound-messages/i%2Fid/raw", "message/rfc822"],
  ]);
});

test("returns typed empty payloads for explicit byte and text responses", async () => {
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () => new Response(null, { status: 200 }),
  });

  assert.deepEqual(await client.messages.raw("message-id"), new Uint8Array());
  assert.equal(await client.suppressions.exportCsv(), "");
});

test("accepts an inbound RFC 822 response above the previous 10 MiB limit", async () => {
  const source = new Uint8Array(11 * 1024 * 1024);
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () => new Response(source, { headers: { "content-type": "message/rfc822" } }),
  });

  assert.equal((await client.inboundMessages.raw("message-id")).byteLength, source.byteLength);
});

test("maps inbound message list and detail operations", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, `${new URL(input).pathname}${new URL(input).search}`]);
      return json({ data: [] });
    },
  });

  await client.inboundMessages.list({ period: "7d", has_attachments: true });
  await client.inboundMessages.retrieve("i/id");
  assert.deepEqual(calls, [
    ["GET", "/v1/inbound-messages?period=7d&has_attachments=true"],
    ["GET", "/v1/inbound-messages/i%2Fid"],
  ]);
});

test("maps the contacts resource CRUD operations", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, `${new URL(input).pathname}${new URL(input).search}`]);
      return json({ data: [] });
    },
  });

  await client.contacts.list({ search: "person", limit: 10 });
  await client.contacts.create({ email: "person@example.com" });
  await client.contacts.retrieve("c/id");
  await client.contacts.update("c/id", { first_name: "Person" });
  await client.contacts.delete("c/id");
  assert.deepEqual(calls, [
    ["GET", "/v1/contacts?search=person&limit=10"],
    ["POST", "/v1/contacts"],
    ["GET", "/v1/contacts/c%2Fid"],
    ["PATCH", "/v1/contacts/c%2Fid"],
    ["DELETE", "/v1/contacts/c%2Fid"],
  ]);
});

test("maps custom event definitions and event delivery", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, new URL(input).pathname]);
      return json({ data: [] });
    },
  });

  await client.events.list();
  await client.events.create({ name: "contact.created" });
  await client.events.send({ name: "contact.created", contact_id: "contact-id" });
  await client.events.update("e/id", { description: "Updated" });
  await client.events.delete("e/id");
  assert.deepEqual(calls, [
    ["GET", "/v1/events"],
    ["POST", "/v1/events"],
    ["POST", "/v1/events/send"],
    ["PATCH", "/v1/events/e%2Fid"],
    ["DELETE", "/v1/events/e%2Fid"],
  ]);
});

test("sets and validates Idempotency-Key for custom event delivery", async () => {
  let capturedHeaders;
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (_input, init) => {
      capturedHeaders = new Headers(init.headers);
      return json({});
    },
  });

  await client.events.send(
    { name: "contact.created", contact_id: "contact-id" },
    { idempotencyKey: "event-contact-created-1" },
  );
  assert.equal(capturedHeaders.get("idempotency-key"), "event-contact-created-1");
  assert.throws(
    () => client.events.send({ name: "contact.created", contact_id: "contact-id" }, { idempotencyKey: "" }),
    /between 1 and 255 bytes/,
  );
  assert.throws(
    () =>
      client.events.send(
        { name: "contact.created", contact_id: "contact-id" },
        { idempotencyKey: "invalid\u200Ekey" },
      ),
    /control or format/,
  );
});

test("maps segments and segment membership operations", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, `${new URL(input).pathname}${new URL(input).search}`]);
      return json({ data: [] });
    },
  });

  await client.segments.list({ search: "vip" });
  await client.segments.create({ name: "VIP" });
  await client.segments.retrieve("s/id");
  await client.segments.update("s/id", { name: "VIP 2" });
  await client.segments.delete("s/id");
  const segmentContacts = await client.segments.listContacts("s/id", { limit: 5 });
  assert.deepEqual(segmentContacts, { data: [] });
  await client.segments.addContact("s/id", { contact_id: "contact-id" });
  await client.segments.removeContact("s/id", "c/id");
  assert.deepEqual(calls, [
    ["GET", "/v1/segments?search=vip"],
    ["POST", "/v1/segments"],
    ["GET", "/v1/segments/s%2Fid"],
    ["PATCH", "/v1/segments/s%2Fid"],
    ["DELETE", "/v1/segments/s%2Fid"],
    ["GET", "/v1/segments/s%2Fid/contacts?limit=5"],
    ["POST", "/v1/segments/s%2Fid/contacts"],
    ["DELETE", "/v1/segments/s%2Fid/contacts/c%2Fid"],
  ]);
});

test("maps suppression lifecycle and preserves CSV transport semantics", async () => {
  const calls = [];
  const csv = "email,reason,expires_at,note\nperson@example.com,manual,,test\n";
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      const url = new URL(input);
      calls.push({
        method: init.method,
        path: `${url.pathname}${url.search}`,
        accept: new Headers(init.headers).get("accept"),
        contentType: new Headers(init.headers).get("content-type"),
        body: init.body,
      });
      if (url.pathname.endsWith("/export")) {
        return new Response(csv, { headers: { "content-type": "text/csv" } });
      }
      return json({ data: [] });
    },
  });

  await client.suppressions.list({ state: "active" });
  await client.suppressions.create({ email: "person@example.com", reason: "manual" });
  await client.suppressions.retrieve("s/id", { history_limit: 10 });
  await client.suppressions.release("s/id", { note: "Allowed" });
  await client.suppressions.importCsv(csv);
  assert.equal(await client.suppressions.exportCsv({ state: "all" }), csv);

  assert.deepEqual(calls.map(({ method, path }) => [method, path]), [
    ["GET", "/v1/suppressions?state=active"],
    ["POST", "/v1/suppressions"],
    ["GET", "/v1/suppressions/s%2Fid?history_limit=10"],
    ["POST", "/v1/suppressions/s%2Fid/release"],
    ["POST", "/v1/suppressions/import"],
    ["GET", "/v1/suppressions/export?state=all"],
  ]);
  assert.equal(calls[4].contentType, "text/csv; charset=utf-8");
  assert.equal(calls[4].body, csv);
  assert.equal(calls[5].accept, "text/csv");
});

test("rejects suppression CSV input above the public 2 MiB contract limit", async () => {
  let called = false;
  const client = new ViaPost({
    apiKey: "test",
    fetch: async () => {
      called = true;
      return json({});
    },
  });

  assert.throws(() => client.suppressions.importCsv("é".repeat(1024 * 1024 + 1)), /2 MiB/);
  assert.equal(called, false);
});

test("maps theme collection operations", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push([init.method, new URL(input).pathname]);
      return json({ data: [] });
    },
  });

  await client.themes.list();
  await client.themes.create({ name: "Brand", variables: {} });
  await client.themes.delete("t/id");
  assert.deepEqual(calls, [
    ["GET", "/v1/themes"],
    ["POST", "/v1/themes"],
    ["DELETE", "/v1/themes/t%2Fid"],
  ]);
});

test("maps advanced webhook operations and sends required idempotency keys", async () => {
  const calls = [];
  const client = new ViaPost({
    apiKey: "test",
    fetch: async (input, init) => {
      calls.push({
        method: init.method,
        path: `${new URL(input).pathname}${new URL(input).search}`,
        idempotencyKey: new Headers(init.headers).get("idempotency-key"),
        body: init.body,
      });
      return json({ data: [] });
    },
  });

  await client.webhooks.update("w/id", { active: true });
  await client.webhooks.deliveries("w/id", { status: "failed" });
  await client.webhooks.delivery("w/id", "d/id");
  await client.webhooks.replay("w/id", "d/id", { idempotencyKey: "replay-1" });
  await client.webhooks.test("w/id", { idempotencyKey: "test-1" });
  await client.webhooks.rotateSecret("w/id", { idempotencyKey: "rotate-1" });

  assert.deepEqual(calls.map(({ method, path }) => [method, path]), [
    ["PATCH", "/v1/webhooks/w%2Fid"],
    ["GET", "/v1/webhooks/w%2Fid/deliveries?status=failed"],
    ["GET", "/v1/webhooks/w%2Fid/deliveries/d%2Fid"],
    ["POST", "/v1/webhooks/w%2Fid/deliveries/d%2Fid/replay"],
    ["POST", "/v1/webhooks/w%2Fid/test"],
    ["POST", "/v1/webhooks/w%2Fid/secret/rotate"],
  ]);
  assert.deepEqual(calls.slice(3).map(({ idempotencyKey }) => idempotencyKey), ["replay-1", "test-1", "rotate-1"]);
  assert.deepEqual(calls.slice(3).map(({ body }) => body), ["{}", "{}", "{}"]);
});

test("validates the required idempotency key on every advanced webhook write", async () => {
  const client = new ViaPost({ apiKey: "test", fetch: async () => json({}) });
  assert.throws(() => client.webhooks.replay("w", "d", { idempotencyKey: "" }), /between 1 and 255 bytes/);
  assert.throws(() => client.webhooks.test("w", { idempotencyKey: "x".repeat(256) }), /255 bytes/);
  assert.throws(() => client.webhooks.rotateSecret("w", { idempotencyKey: "bad\u200Ekey" }), /control or format/);
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
