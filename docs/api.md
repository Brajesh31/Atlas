# 🌐 HTTP route and form contract

## Scope
Atlas currently exposes server-rendered HTML endpoints. It is not a versioned JSON REST API. The route implementation is in routes/index.js and the router is mounted at / in app.js.

## Route inventory

| Method | Path | Input | Current behavior |
|---|---|---|---|
| GET | / | None | Render index.ejs |
| POST | / | username, password | Find account by name, compare plaintext value, render Home or send text |
| GET | /sign | None | Render signUp.ejs |
| POST | /sign | username, email, password | Create object, call insertMany, render home.ejs |
| GET | /home | None | Render home.ejs |
| GET | /users | None | Mount attempts to use exported Mongoose model as middleware/router; not a valid route contract |

## Login form contract
The login page posts username and password to /. The route finds one record by name, then reads check.password. It does not hash or verify a password hash. The route returns different text for wrong password and caught lookup failure. It does not issue a session cookie or token.

## Registration form contract
The sign-up page includes several form fragments and fields. The route expects username, email, and password under request body keys. It inserts the submitted object and renders the home view on success. Server-side validation, normalization, duplicate checking, and safe error reporting are absent.

## Current known contract mismatches
- Registration submits email but the Mongoose schema defines only name and password.
- Login success renders view name Home, but the checked-in template is home.ejs.
- The successful registration response renders lowercase home.
- One sign-up form is an unfinished visual/interaction form with action # and lacks a complete server-bound field contract.
- A users router is mounted, but routes/users.js exports a Mongoose model.
- The error handler renders error, but views/error.ejs is absent.

## Error behavior
Current route code uses plain text for some failures and catches broadly. Future behavior should return consistent validation feedback and generic authentication errors. Avoid exposing whether an account exists.

## Recommended future HTTP behavior
- POST /sign-up should validate and normalize every field.
- POST /login should verify a password hash and create a session.
- POST /logout should destroy the session.
- GET /home should require an authenticated session.
- A CSRF token should protect state-changing form submissions.
- All errors should render an existing safe error template or return structured JSON where explicitly designed.

These endpoints are proposals and do not currently exist.
