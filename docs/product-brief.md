# 🧾 Atlas product brief

## Product summary
Atlas is an educational web application demonstrating a server-rendered login and registration experience using Express, EJS, Mongoose, and MongoDB. A successful registration currently renders a Broadway-inspired demonstration page. Login attempts query a stored account and compare a submitted password value.

## Product purpose
The codebase is useful for understanding:
- Express application and middleware setup.
- HTTP routes and HTML form submissions.
- EJS template rendering.
- Mongoose schema/model definitions.
- Static asset serving.
- Basic database interaction from an Express route.

## Audience
| Audience | Use |
|---|---|
| Beginner Node.js learner | Understand Express generator-style organization |
| EJS learner | Study server-rendered HTML templates |
| MongoDB learner | See a small Mongoose schema and query |
| Contributor | Identify missing validation, auth, and operational controls |

## Current journeys
### Visit login
A browser GET / request renders the login page template.

### Register
A GET /sign request renders the sign-up page. A POST /sign reads username, email, and password from the body, passes an object to Mongoose insertMany, and renders the home template if the promise resolves.

### Login
A POST / request queries by name and compares the submitted password directly with the stored value. A matching value attempts to render a view called Home. The repository file is named home.ejs, so this is a case mismatch that needs a separate source fix.

### Destination page
GET /home renders home.ejs directly. It is not protected by authentication middleware.

## Product boundaries
The project does not currently provide secure authentication, sessions, authorization, email verification, password reset, user profile management, admin access, account recovery, audit events, or a formal JSON API.

## Critical quality constraints
- Do not use real passwords.
- Rotate the database credential already committed in source.
- Move database configuration out of source code.
- Implement password hashing and session management before public deployment.
- Add server-side validation, unique constraints, and safe error handling.
- Test actual route behavior, not just template existence.

## Product success criteria for a future hardened version
A future release should demonstrate successful/failed registration, safe credential storage, rate-limited login, protected routes, session expiry/logout, safe validation feedback, accessibility, and automated route/model tests. No current measurement baseline exists.
