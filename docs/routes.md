# 🗺️ Route reference

## Router composition
app.js mounts routes/index.js at /. The file routes/users.js is mounted at /users even though it exports a Mongoose model and not an Express router. That mount is a current application defect.

## Publicly registered routes

| Method | Path | Template/behavior | Auth protection |
|---|---|---|---|
| GET | / | views/index.ejs | None |
| POST | / | Lookup and direct password compare | None |
| GET | /sign | views/signUp.ejs | None |
| POST | /sign | Insert account fields and render home | None |
| GET | /home | views/home.ejs | None |

## Static assets
Express serves the public directory. Existing asset paths include /stylesheets/style.css and /javascripts/script.js.

## View inventory

| View | Purpose | Notes |
|---|---|---|
| index.ejs | Login page | Posts username/password to / |
| signUp.ejs | Sign-up/authentication form design | Contains unfinished form elements and mixed form actions |
| home.ejs | Broadway-inspired page | GET /home and successful POST /sign render lowercase view name |
| error.ejs | Intended error view | Missing from current repository tree |

## Route behavior concerns
- /home is accessible without login.
- Login success renders Home, while the file is named home.ejs.
- POST /sign has no explicit validation or tailored failure state.
- /users mount is not backed by an Express Router.
- No logout, profile, password reset, or session endpoints exist.

## Manual route checklist
- [ ] GET / renders successfully.
- [ ] POST / with unknown username gives safe feedback.
- [ ] POST / with wrong password gives safe generic feedback.
- [ ] POST / with correct disposable test account is exercised.
- [ ] GET /sign renders successfully.
- [ ] POST /sign valid form submission works.
- [ ] POST /sign invalid form input is rejected server-side.
- [ ] GET /home direct access is understood to be unprotected.
- [ ] GET /users behavior is tested after mount fix.
- [ ] Unknown route exercises the error handler safely.
- [ ] Static CSS and JavaScript assets load.

## Route design rules for a future secure version
Use POST for state-changing actions, protect private routes with session middleware, add CSRF protection, return safe generic authentication errors, and validate all input on the server.
