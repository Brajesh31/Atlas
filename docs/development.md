# 🧑‍💻 Development guide

## Project conventions
Atlas uses CommonJS modules, Express 4, EJS templates, Mongoose, and the Express generator-style directory layout. Keep source changes consistent with this architecture unless a deliberate migration is approved.

## Development loop
1. Inspect the route and view involved.
2. Reproduce using a disposable local database and synthetic account.
3. Inspect request body keys and the schema contract.
4. Implement focused changes.
5. Test success and failure behavior.
6. Check rendered EJS output and static assets.
7. Update docs and route diagrams.
8. Run all available automated tests once configured.

## Existing commands

| Command | Meaning |
|---|---|
| npm start | Run node ./bin/www |
| npm ci | Install exact dependency tree |

No lint, test, watch, or build command is currently defined in package.json.

## Code areas
- app.js: middleware, views, static assets, routers, error handling.
- bin/www: HTTP listener and port handling.
- routes/index.js: form and page handlers.
- routes/users.js: Mongoose schema/model and connection.
- views/: EJS templates.
- public/: browser CSS/JavaScript.

## Security requirements
- Never use real credentials during local testing.
- Never place database URI or passwords in source control.
- Do not log password fields or account documents.
- Validate every input on the server.
- Use password hashes, sessions, CSRF protection, and authorization before considering deployment.
- Use a disposable database for tests.

## EJS practices
Use one explicit form per submission purpose. Ensure every field has a name matching the route contract. Add labels, associate errors with controls, escape user-controlled output, and avoid mixing decorative form elements with live submission handlers.

## Route practices
Use consistent HTTP methods and explicit status codes. Do not render protected views from an unauthenticated route. Use generic authentication failures to reduce account enumeration.
