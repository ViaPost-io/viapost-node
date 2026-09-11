import { readFile } from "node:fs/promises";

import { assertReleaseTag } from "./release-utils.mjs";

const { version } = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
assertReleaseTag(process.argv[2] ?? "", version);
console.log(`Release tag v${version} matches package.json.`);
