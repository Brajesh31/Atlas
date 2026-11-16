# 🗂️ Project structure and source inventory

## Root-level configuration and governance

| Path | Purpose | Notes |
|---|---|---|
| package.json | Project metadata, start script and dependencies | No test/lint script currently |
| package-lock.json | Resolved npm dependency graph | Use npm ci for repeatable installs |
| .env.example | Example PORT and Mongo URI variables | Current Mongo source does not load these |
| .gitignore | Ignored local files | Review before adding local config |
| .editorconfig | Editor defaults | Helps reduce formatting drift |
| .gitattributes | Git text handling | Repository metadata |
| LICENSE | MIT license | Applies to project code, not external assets |
| CITATION.cff | Citation metadata | Software citation |
| CODEOWNERS | Ownership rules | Current default owner file |
| SECURITY.md | Vulnerability reporting | Private reporting guidance |
| SUPPORT.md | Support scope | Best-effort prototype support |

## Server and routing

| Path | Responsibility | Current notes |
|---|---|---|
| app.js | Configure Express app and middleware | Renders missing error view on error path |
| bin/www | Create HTTP server and listen | Reads PORT, defaults to 3000 |
| routes/index.js | Login, registration, and home route handlers | Plaintext password flow |
| routes/users.js | Mongoose connection and account model | Contains committed URI credential; exports model |

## Views

| Path | Responsibility | Current notes |
|---|---|---|
| views/index.ejs | Login page | Form posts to / |
| views/signUp.ejs | Sign-up/authentication presentation | Contains unfinished form/action markup |
| views/home.ejs | Broadway-inspired destination page | Inline CSS and external artwork references |
| views/error.ejs | Expected by error handler | Missing from repository |

## Static assets

| Path | Responsibility | Current notes |
|---|---|---|
| public/stylesheets/style.css | Login page styles | Uses Comic Sans and centered card |
| public/javascripts/script.js | Newsletter-form validation/toast logic | Expects DOM elements not present in index.ejs |

## Documentation and automation

The docs folder explains architecture, installation, deployment, database, troubleshooting, security, and testing. .github currently contains a PR template and a README timestamp workflow. Additional issue forms, CI validation, diagrams, and visual assets are part of this documentation expansion.

## IDE metadata
The .idea folder contains JetBrains project settings. These files are not required to run the application. Do not commit developer-specific workspace state, credentials, or local absolute paths.

## Recommended future organization
A future source refactor could separate config, models, routes, middleware, services, validation, and tests. Keep the current application source unchanged during a documentation-only update. Any security remediation should be a separately reviewed and tested source change.
