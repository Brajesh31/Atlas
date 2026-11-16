# 🚀 Installation and first run

## Prerequisites
- Node.js 18 or newer.
- npm.
- Git.
- A local MongoDB service or disposable development database.
- A modern browser.

## Clone

```bash
git clone https://github.com/Brajesh31/Atlas.git
cd Atlas
```

## Install dependencies

```bash
npm ci
```

If the lockfile needs regeneration after a reviewed dependency change, use npm install and commit the consistent package files. Do not delete the lockfile as a routine fix.

## Database warning
The current source includes a hard-coded MongoDB URI with embedded credentials. Do not use the committed credential or a production database. Rotate the exposed credential first. The application also does not currently load .env or read MONGODB_URI in routes/users.js. See configuration.md before assuming environment settings are effective.

## Start server

```bash
npm start
```

The default port is 3000. Open http://localhost:3000.

## First-run validation
- [ ] Node and npm versions checked.
- [ ] npm ci completes.
- [ ] MongoDB is local and disposable.
- [ ] Exposed credential has been rotated before connecting to any shared cluster.
- [ ] Server starts and reports listening port.
- [ ] GET / renders.
- [ ] GET /sign renders.
- [ ] Static CSS loads.
- [ ] No real account or password is used.
- [ ] Known login, schema, and view mismatches are understood.

## Common installation issues

| Issue | Investigation |
|---|---|
| npm ci failure | Node version, registry connectivity, lockfile |
| Port already in use | Set PORT to an available port |
| MongoDB connection failure | Verify local service and URI |
| .env values ignored | Current code does not load dotenv |
| Page errors after POST | Inspect route render target and database errors |

See [troubleshooting](troubleshooting.md) and [configuration](configuration.md).
