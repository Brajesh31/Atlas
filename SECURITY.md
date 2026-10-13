# Security Policy

## Important prototype warning

Atlas currently stores passwords in plaintext, compares them directly, does not establish an authenticated session, and connects to MongoDB from `routes/index.js`. Do not use this application with real credentials or production data.

Before any deployment, contributors should add password hashing, input validation, rate limiting, secure session management, authorization checks, CSRF protection, secure cookies, TLS, secret management, and least-privilege database access.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Contact Brajesh Kumar privately through the maintainer’s GitHub profile at <https://github.com/brajesh31> and include:

- A short description and affected route or file.
- Reproduction steps or a minimal proof of concept.
- Potential impact.
- Any suggested mitigation.

Please allow reasonable time for investigation and remediation. Do not include real credentials or personal data in a report.
