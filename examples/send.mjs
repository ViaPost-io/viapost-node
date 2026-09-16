import { ViaPost } from "@viapost-io/sdk";

if (!process.env.VIAPOST_API_KEY) {
  throw new Error("Set VIAPOST_API_KEY before running this example");
}

const viapost = new ViaPost({ apiKey: process.env.VIAPOST_API_KEY });
const result = await viapost.send.create({
  from: process.env.VIAPOST_FROM ?? "hello@your-domain.example",
  to: [process.env.VIAPOST_TO ?? "person@example.com"],
  subject: "ViaPost SDK quickstart",
  text: "Your ViaPost SDK is configured correctly.",
});

console.log(JSON.stringify(result, null, 2));
