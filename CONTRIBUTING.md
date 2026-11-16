# 🤝 Contributing to Atlas

Thank you for contributing. Atlas is an educational Express/EJS/Mongoose prototype. Contributions should improve correctness, security, accessibility, maintainability, or learning value.

## Before starting
1. Read README.md, SECURITY.md, and the relevant architecture/API documents.
2. Check open issues and existing behavior.
3. Identify the exact route, handler, model, or template affected.
4. Use only synthetic users and a disposable local database.
5. For security issues, use private reporting rather than a public issue.

## Local workflow

```bash
npm ci
npm start
```

The project currently has no automated test script. Manually verify the affected route and record exact steps. For auth/database work, test valid input, invalid input, duplicate identity, DB failure, session behavior, and unauthorized access.

## Code expectations
- Preserve existing behavior unless the change explicitly modifies it.
- Do not commit .env, database URIs, passwords, cookies, tokens, or account records.
- Do not log raw passwords or complete user documents.
- Validate all request fields server-side.
- Keep password hashing and verification in a small testable service.
- Protect private routes with authorization middleware.
- Use CSRF protection for state-changing forms.
- Make EJS forms match handler field names exactly.
- Escape user-controlled output.
- Avoid unrelated rewrites.

## Documentation expectations
Update README, route reference, API contract, architecture, data-flow diagrams, security/risk docs, and changelog when behavior changes.

## Pull requests
Include purpose, affected paths/routes, security implications, tests/commands run, manual verification, screenshots for UI work, and known limitations. Do not claim production security without evidence.
