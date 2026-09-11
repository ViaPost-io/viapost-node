# Contributing

1. Open an issue for material API or public-surface changes.
2. Create a focused branch and add tests before implementation.
3. Run `npm ci`, `npm run check:contract`, `npm run check:generated`, `npm run lint`,
   `npm run typecheck`, `npm test`, `npm run test:coverage`, `npm run test:package`, and
   `npm pack --dry-run`.
4. Do not edit `src/generated/openapi.ts` directly. Update `openapi.yaml` with
   `npm run sync:contract`, review the contract diff, then regenerate.
5. Never add credentials, customer data, or real message content to fixtures.

Pull requests require independent review. Backwards-incompatible public changes require a major
version or an explicit deprecation path.
