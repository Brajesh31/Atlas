# 🗺️ Atlas roadmap

This roadmap prioritizes correctness and security over feature count. Every item is planned work until source and tests prove it is complete.

## 🔴 P0: Security blockers
- [ ] Rotate/revoke the MongoDB credential committed in source.
- [ ] Remove the literal connection URI from routes/users.js.
- [ ] Wire process.env.MONGODB_URI and fail fast if missing.
- [ ] Stop storing raw passwords.
- [ ] Add password hashing and safe verification.
- [ ] Implement session lifecycle and logout.
- [ ] Protect /home and all private routes.
- [ ] Add CSRF protection and login rate limiting.

## 🟠 P1: Application correctness
- [ ] Add server-side validation and input normalization.
- [ ] Define account email/username schema and unique constraints.
- [ ] Correct login render target case mismatch.
- [ ] Add views/error.ejs and safe not-found handling.
- [ ] Correct /users router mount or remove if not required.
- [ ] Resolve sign-up form's multiple/incomplete form contracts.
- [ ] Align public/javascripts/script.js with actual DOM or remove unused behavior.

## 🟡 P2: Quality and maintainability
- [ ] Add unit tests for validation and password service.
- [ ] Add HTTP integration tests for routes.
- [ ] Add database model tests.
- [ ] Add browser accessibility and responsive tests.
- [ ] Add CI workflow with blocking test gates.
- [ ] Add security headers and request limits.
- [ ] Add structured, sanitized logs.

## 🟢 P3: Operational readiness
- [ ] Define database backup and restore process.
- [ ] Add readiness/liveness checks.
- [ ] Add deployment and rollback runbook.
- [ ] Review dependency advisories.
- [ ] Measure runtime and database performance.
- [ ] Capture genuine UI screenshots.

## Scope rule
Do not add dashboards, queues, microservices, or marketing integrations until a real user requirement justifies them. Do not label roadmap items as completed functionality.
