# 🧭 Feature-to-source-to-test traceability

| Capability | Source | Documentation | Verification |
|---|---|---|---|
| HTTP listener | bin/www | architecture.md | Startup smoke test pending |
| Middleware order | app.js | architecture.md | Integration tests pending |
| Login page | views/index.ejs | routes.md | GET / test pending |
| Login handler | routes/index.js | api.md, data-flow.md | Login integration tests pending |
| Registration page | views/signUp.ejs | routes.md | GET /sign test pending |
| Registration handler | routes/index.js | api.md, database.md | Registration tests pending |
| Account schema | routes/users.js | database.md | Model tests pending |
| MongoDB connection | routes/users.js | configuration.md | Connection test pending |
| Static CSS | public/stylesheets/style.css | project-structure.md | Browser check pending |
| Browser JS | public/javascripts/script.js | project-structure.md | DOM contract test pending |
| Error handler | app.js | routes.md, troubleshooting.md | Error-path test pending |
| Security boundary | app.js, routes/index.js, routes/users.js | security-review.md | Security tests absent |
| Documentation links | Markdown files | documentation-maintenance.md | Validator to be added |

## Change checklist
When a capability changes:
1. Update source references.
2. Update route/API/data-flow documentation.
3. Update the feature status in README.
4. Add or update automated tests.
5. Update security/risk docs if trust boundaries change.
6. Capture genuine UI evidence for visual changes.
7. Add a changelog entry for meaningful behavior changes.
