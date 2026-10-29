# Atlas

Atlas is a small Express.js and EJS web application demonstrating a browser-based sign-up and login flow with MongoDB persistence. The authenticated destination is a simple Broadway-inspired demonstration page.

> **Prototype status:** This repository is educational and is not ready for production authentication. Passwords are currently stored and compared in plaintext, sessions are not implemented, and the database connection is configured in source code. Review [SECURITY.md](SECURITY.md) before exposing the app to a network.

## Features

- EJS-rendered login, sign-up, and home pages.
- Express routes for `/`, `/sign`, `/home`, and `/users`.
- MongoDB access through Mongoose.
- Static CSS and browser JavaScript under `public/`.
- Development request logging with Morgan.
- Configurable HTTP port through `PORT` (defaults to `3000`).

## Requirements

- Node.js 18 or newer.
- npm.
- A MongoDB deployment reachable by the application.

## Installation

```bash
git clone https://github.com/Brajesh31/Atlas.git
cd Atlas
npm install
```

Configure a MongoDB URI using a local, untracked environment file before starting the application. The current source contains a placeholder URI in `routes/index.js`; do not replace it with a committed credential.

```bash
set PORT=3000
npm start
```

On PowerShell, use `$env:PORT = "3000"` instead. Open <http://localhost:3000>.

## Application flow

1. `GET /` renders the login form.
2. `GET /sign` renders the registration form.
3. `POST /sign` inserts the submitted account into MongoDB and renders the home page.
4. `POST /` looks up the submitted username and compares the submitted password.
5. `GET /home` renders the demonstration page.

This flow currently has no durable authentication session or authorization middleware. See [docs/api.md](docs/api.md) and [docs/architecture.md](docs/architecture.md) for the implementation details.

## Development

The project uses the standard Express generator-style layout:

```text
app.js                 Express application configuration
bin/www                HTTP server entry point
routes/index.js        Login, registration, and page routes
routes/users.js        MongoDB connection and account model
views/                 EJS templates
public/                CSS and browser JavaScript
```

Start the development server with:

```bash
npm start
```

There is currently no automated test suite or lint script. Contributions should include manual verification of login, registration, error handling, and page rendering until automated coverage is introduced.

## Security and privacy

Do not use real passwords, personal information, or production database credentials with this prototype. Before deployment, replace plaintext password handling with a vetted password-hashing library, validate input, add sessions or tokens, enforce authorization, restrict database access, and move secrets to a managed secret store. Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SUPPORT.md](SUPPORT.md) before opening a change.

## License

Atlas is released under the MIT License. See [LICENSE](LICENSE).

Last updated: 2026-10-29 22:27 UTC
