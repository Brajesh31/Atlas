# ✅ First-run installation checklist

## Local environment
- [ ] Node.js and npm are installed.
- [ ] Git is installed.
- [ ] MongoDB is running locally or a disposable test database is available.
- [ ] No production database is connected.
- [ ] The committed database credential has been rotated before using any shared cluster.

## Install and start
- [ ] Clone repository.
- [ ] Run npm ci.
- [ ] Confirm PORT is free or set an alternate value.
- [ ] Start with npm start.
- [ ] Open the local URL.

## Verify routes
- [ ] GET / renders login.
- [ ] GET /sign renders registration.
- [ ] POST /sign tested with synthetic values.
- [ ] POST / tested with synthetic credentials.
- [ ] GET /home direct access understood as currently unprotected.
- [ ] Static CSS and JS requests work.
- [ ] Error behavior reviewed.

## Security guardrails
- [ ] Do not enter real passwords.
- [ ] Do not commit .env.
- [ ] Do not paste MongoDB URI into logs/issues.
- [ ] Do not expose the prototype publicly.
- [ ] Follow SECURITY.md for vulnerability reports.

See installation.md and configuration.md for the complete setup.
