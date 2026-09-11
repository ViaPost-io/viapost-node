# Security policy

## Reporting a vulnerability

Please do not disclose vulnerabilities in a public issue. Use GitHub's private
[security advisory form](https://github.com/ViaPost-io/viapost-node/security/advisories/new).
Include affected versions, reproduction steps, impact, and any proposed mitigation.

## API keys

This SDK is server-side only. Never commit an API key, include it in a browser bundle, log request
headers, or paste a live credential into an issue. Use environment variables or a secret manager,
scope keys to the minimum permissions, and rotate any credential that may have been exposed.

Security fixes are supported for the latest released minor version until a formal support policy is
published.
