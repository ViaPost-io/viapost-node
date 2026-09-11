import { readFile, writeFile } from "node:fs/promises";

const packagePath = new URL("../package.json", import.meta.url);
const outputPath = new URL("../src/version.ts", import.meta.url);
const { name, version } = JSON.parse(await readFile(packagePath, "utf8"));
const generated = `/** Generated from package.json. Do not edit directly. */\nexport const VERSION = ${JSON.stringify(version)} as const;\nexport const USER_AGENT = ${JSON.stringify(`${name}/${version}`)} as const;\n`;

if (process.argv.includes("--check")) {
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current !== generated) {
    console.error("Generated version metadata is stale. Run `npm run generate`.");
    process.exitCode = 1;
  }
} else {
  await writeFile(outputPath, generated);
  console.log("Generated src/version.ts from package.json.");
}
