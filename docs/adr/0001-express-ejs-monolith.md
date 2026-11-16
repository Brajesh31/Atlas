# ADR-0001: Express and EJS monolithic web application

- **Status:** Accepted as a record of current implementation
- **Date:** 2026-11-16
- **Scope:** Server-side application structure

## Context
Atlas currently uses Node.js, Express, EJS, and Mongoose. The HTTP server starts from bin/www, middleware is configured in app.js, route handlers live in routes/index.js, and views are rendered server-side.

## Decision
The existing implementation is documented as a single Express application with EJS templates and direct Mongoose integration. This ADR describes what exists; it is not an endorsement of the current authentication design.

## Alternatives
- Separate frontend SPA and JSON backend.
- Backend-for-frontend with dedicated service modules.
- Third-party identity provider with server-side session integration.
- Modular Express application with separate route, model, service, and middleware files.

## Consequences
### Benefits
- Small and understandable project layout.
- Direct server-rendered form workflow.
- Minimal deployment components.

### Costs and risks
- Route handlers mix presentation and persistence.
- Authentication has no session boundary.
- Database credential is hard-coded.
- Passwords are plaintext.
- Input validation is incomplete.
- Testing and observability are absent.

## Follow-up
Before production use, prioritize secret rotation, password hashing, sessions, authorization, validation, CSRF, rate limiting, and integration tests. Architectural modularization should follow concrete testing/security needs.
