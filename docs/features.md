# ✅ Feature inventory

## Current implementation matrix

| Area | Status | Source | Notes |
|---|---|---|---|
| Express bootstrap | Present | app.js, bin/www | HTTP app and listener |
| EJS rendering | Present | views/*.ejs | Server-side templates |
| Login form | Present | views/index.ejs | Posts username/password |
| Registration form | Partial | views/signUp.ejs | Multiple unfinished form blocks |
| Registration insert | Partial | routes/index.js | Inserts submitted values without secure password handling |
| Login lookup | Partial | routes/index.js | Direct plaintext comparison |
| MongoDB model | Present but unsafe | routes/users.js | Credential embedded in source |
| Session auth | Not implemented | None | No durable login identity |
| Protected pages | Not implemented | None | /home is directly reachable |
| Password hashing | Not implemented | None | Raw passwords stored |
| Server validation | Incomplete | routes/index.js | Browser required attributes are insufficient |
| Error view | Not implemented | views/error.ejs absent | Error handler references missing template |
| User router | Incorrect mount | app.js/routes/users.js | Mongoose model mounted as Express middleware |
| Tests | Not implemented | package.json | No test script |
| CI validation | Not implemented | workflows | Existing automation only updates README timestamp |

## Login flow
The login form requests GET / and submits POST /. The route finds a record by name and compares the submitted password with the stored property. It does not produce a secure session. Login success also attempts to render Home, while the present template is named home.ejs.

## Registration flow
GET /sign renders signUp.ejs. POST /sign reads username, email, and password, creates an object, inserts it, and renders home.ejs. The database schema only declares name and password. There is no duplicate check, robust validation, or hash.

## Home page
GET /home renders the Broadway-inspired page without checking identity. This is not a protected page.

## Frontend script
public/javascripts/script.js expects a newsletter form, email field, Toastify, and an adjacent error element. Those expected DOM dependencies are not present in views/index.ejs, so the script/page contract is inconsistent.

## Non-goals/current absences
No user profile, password reset, email verification, roles, admin, session lifecycle, API versioning, production observability, or automated coverage exists in the current source.

Do not advertise security functionality that the source does not implement.
