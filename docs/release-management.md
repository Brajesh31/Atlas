# 🚢 Release and change management

## Current state
The package manifest remains version 0.0.0. No formal tagged release or deployment gate is configured in the repository.

## Pre-release checklist
- [ ] Confirm intended commit and branch.
- [ ] Rotate any exposed credential.
- [ ] Verify configuration uses managed secrets.
- [ ] Confirm passwords are hashed.
- [ ] Confirm sessions and authorization are tested.
- [ ] Confirm CSRF and rate limiting are configured.
- [ ] Verify schema and unique indexes.
- [ ] Run unit, HTTP, database, and browser tests.
- [ ] Review dependency advisories.
- [ ] Verify EJS views and error paths.
- [ ] Review accessibility and responsive layout.
- [ ] Update README, docs, roadmap, and changelog.
- [ ] Verify backups and restore procedure.

## Versioning
Select a version policy before publishing releases. Keep release notes focused on behavior and security. Do not label documentation-only work as a feature release.

## Deployment
Deploy only a reviewed commit with a known configuration. Confirm the runtime has required environment variables and database access. Avoid exposing the app publicly until critical authentication and secret-handling risks are resolved.

## Rollback
Keep a known-good application artifact and configuration. If a database credential is exposed, rotate it immediately even if application rollback is performed. Reverting Git does not revoke secrets.
