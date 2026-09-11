export function assertReleaseTag(tag, version) {
  const expected = `v${version}`;
  if (tag !== expected) {
    throw new Error(`Release tag must be exactly ${expected}; received ${tag || "<empty>"}`);
  }
}
