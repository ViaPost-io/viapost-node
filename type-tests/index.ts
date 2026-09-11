import { ViaPost } from "../src/index.js";
import type { SendRequest, SendResult } from "../src/index.js";
import type { components, paths } from "../src/generated/openapi.js";

const request = {
  from: "hello@example.com",
  to: ["person@example.net"],
  subject: "Hello",
  text: "Hello",
} satisfies SendRequest;

declare const result: SendResult;
declare const schemaMessage: components["schemas"]["Message"];
declare const sendPath: paths["/v1/send"];

const client = new ViaPost({ apiKey: "compile-time-example" });
void client.send.create(request, { idempotencyKey: "business-operation-1" });
void result.accepted;
void schemaMessage.id;
void sendPath.post;
