# Architecture

Atlas is a single-process Node.js web application using Express for HTTP routing, EJS for server-rendered HTML, and Mongoose for MongoDB access.

## Runtime flow

`bin/www` creates the HTTP server and reads `PORT`. `app.js` configures views, Morgan logging, JSON and URL-encoded parsing, cookies, static assets, the root router, and error handling. `routes/index.js` renders pages and performs account operations. `routes/users.js` creates the Mongoose connection and account model.

## Request boundaries

- `/` serves login and processes login submissions.
- `/sign` serves registration and processes registration submissions.
- `/home` serves the demonstration page.
- `/users` is mounted for the generated user router, although the current router primarily exports the database model.

There is currently no session store or authorization middleware, so page rendering must not be treated as proof of authentication.
