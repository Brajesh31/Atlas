# 🧰 Troubleshooting

## Server startup
- Check node --version and npm --version.
- Run npm ci.
- Check PORT and whether it is already occupied.
- Inspect the first startup error instead of suppressing it.

## MongoDB connection
- Confirm a local database is running.
- Confirm the configured URI points to the disposable development database.
- Do not use the committed credential.
- Current source has a hard-coded URI; .env.example is not automatically loaded.
- Never paste the full URI into an issue or chat.

## Registration
- Confirm POST /sign sends username, email, and password.
- Confirm MongoDB is reachable.
- Current model schema explicitly defines name and password only.
- Review validation and duplicate behavior. The application currently lacks a complete server-side validation workflow.

## Login
- Current source compares plaintext password values.
- Confirm the test record's name matches submitted username.
- Login success currently attempts to render Home while file name is home.ejs.
- The route does not create a session and is not secure authentication.

## Home route access
GET /home is publicly reachable in current code. This is not a browser cache issue. It requires an authorization middleware fix.

## Missing error page
app.js renders an error view, but views/error.ejs is not in the repository. Unknown routes or exceptions may trigger a second rendering failure.

## /users mount
routes/users.js exports a Mongoose model, but app.js mounts it as middleware at /users. This is not a normal Express Router and should be corrected in source.

## Static assets
Check /stylesheets/style.css and /javascripts/script.js in the Network tab. The browser script expects newsletter DOM elements that are not present in the login template.

## Reporting
Include route, Node version, sanitized error, and reproduction steps. Never share database URI, passwords, cookies, or real account data. For security reports follow SECURITY.md privately.
