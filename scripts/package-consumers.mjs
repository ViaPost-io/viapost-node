import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = new URL("..", import.meta.url);
const tempRoot = await mkdtemp(join(tmpdir(), "viapost-sdk-package-"));

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env, npm_config_dry_run: "false" },
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed\n${result.stdout}\n${result.stderr}`);
  }
  return result;
}

async function writeConsumer(name, packageJson, tsconfig) {
  const directory = join(tempRoot, name);
  await mkdir(directory);
  await writeFile(join(directory, "package.json"), JSON.stringify(packageJson, null, 2));
  await writeFile(join(directory, "tsconfig.json"), JSON.stringify(tsconfig, null, 2));
  await writeFile(
    join(directory, "index.ts"),
    `import { VERSION, ViaPost } from "@viapost-io/sdk";\nimport type { MessageDetail, SendRequest } from "@viapost-io/sdk";\nimport type { paths } from "@viapost-io/sdk/openapi";\nconst input: SendRequest = { from: "a@example.com", to: ["b@example.com"], subject: "test", text: "test" };\nconst path: keyof paths = "/v1/send";\nconst detailField = (message: MessageDetail) => message.raw_message_api_path;\nconst client = new ViaPost({ apiKey: "not-a-real-key", fetch: async () => new Response() });\nconst detailPromise: Promise<MessageDetail> = client.messages.retrieve("00000000-0000-0000-0000-000000000000");\nconsole.log(VERSION, path, input.subject, detailField, detailPromise, typeof client.send.create);\n`,
  );
  return directory;
}

try {
  const packed = run("npm", ["pack", "--ignore-scripts", "--json", "--pack-destination", tempRoot], projectRoot);
  const [{ filename }] = JSON.parse(packed.stdout);
  const tarball = join(tempRoot, filename);
  const sharedCompilerOptions = {
    target: "ES2022",
    strict: true,
    skipLibCheck: false,
    outDir: "dist",
  };
  const esm = await writeConsumer(
    "esm",
    { private: true, type: "module" },
    { compilerOptions: { ...sharedCompilerOptions, module: "NodeNext", moduleResolution: "NodeNext" } },
  );
  const cjs = await writeConsumer(
    "cjs",
    { private: true },
    { compilerOptions: { ...sharedCompilerOptions, module: "Node16", moduleResolution: "Node16" } },
  );

  for (const consumer of [esm, cjs]) {
    run("npm", ["install", "--ignore-scripts", "--no-package-lock", "--no-audit", "--no-fund", tarball], consumer);
    run(join(projectRoot.pathname, "node_modules", ".bin", "tsc"), ["--project", "tsconfig.json"], consumer);
    run(process.execPath, [join(consumer, "dist", "index.js")], consumer);
  }

  const browser = spawnSync(
    process.execPath,
    ["--conditions=browser", "--input-type=module", "--eval", 'import("@viapost-io/sdk").catch(error => { console.error(error.message); process.exit(23); })'],
    { cwd: esm, encoding: "utf8" },
  );
  if (browser.status !== 23 || !/server-side only/i.test(browser.stderr)) {
    throw new Error(`Browser condition did not block the SDK\n${browser.stdout}\n${browser.stderr}`);
  }
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}

// The browser subprocess is intentionally expected to fail. Verify it separately so a
// successful import can never be mistaken for a passing package test.
const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
if (!packageJson.exports?.["."]?.browser) throw new Error("Missing browser export condition");
console.log("Installed tarball passed TypeScript ESM/NodeNext and CJS/Node16 consumer checks.");
