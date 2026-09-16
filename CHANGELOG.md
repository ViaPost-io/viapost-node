# Changelog

All notable changes follow [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and semantic
versioning.

## [0.2.1] - 2026-09-16

### Fixed

- Publish the GitHub Package from an explicit local tarball path so npm cannot interpret it as a
  Git repository shorthand.

## [0.2.0] - 2026-09-16

### Added

- GitHub Packages distribution with a checksummed, anonymously downloadable GitHub Release
  tarball and GitHub artifact attestations.
- Generated types from the expanded public ViaPost API contract.
- Typed resources for contacts, custom events, segments, inbound messages, suppressions and themes.
- Paginated contact results from `segments.listContacts()`.
- Advanced webhook delivery inspection, replay, test and secret rotation operations.
- Byte-safe RFC 822 downloads plus text-safe suppression CSV import and export.
- Cross-origin redirect rejection and a 32 MiB bounded response limit suitable for inbound `.eml`
  downloads.
- Client-side enforcement of the public 2 MiB suppression CSV import limit.

### Changed

- Renamed the package from `@viapost/sdk` to `@viapost-io/sdk` so its scope matches the public
  GitHub organization.
- Hardened releases to verify the exact tag commit, its ancestry on `main`, package metadata and
  artifact integrity before publication.

## [0.1.0] - 2026-09-11

### Added

- API-key-only server-side TypeScript client with ESM, CommonJS, and declaration exports.
- Typed resources for send, messages, domains, templates, webhooks, automations, and usage.
- Safe GET/HEAD retries, timeouts, cancellation, typed errors, and send idempotency keys.
- OpenAPI-generated contract types and semantic drift checks.
- Browser-condition guard, conditional ESM/CommonJS declarations, and installed-tarball consumer tests.
- Release tag/version gate and npm provenance-ready publishing workflow.
