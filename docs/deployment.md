# 🚀 Deployment guide

## Deployment status
Atlas should not be deployed publicly in its current state. The source contains a MongoDB credential, stores passwords in plaintext, creates no authenticated session, and leaves /home unprotected. Security work is a prerequisite, not an optional enhancement.

## Runtime requirements
- Supported Node.js runtime.
- npm dependency installation.
- Managed MongoDB service with least-privilege database credentials.
- Environment/secret configuration.
- TLS termination.
- Process supervision and structured logging.

## Environment configuration
Set PORT and MONGODB_URI through platform configuration. The current application reads PORT but routes/users.js must be changed to consume MONGODB_URI. The .env.example file alone does not configure the running app.

## Reverse proxy considerations
If deployed behind a reverse proxy:
- Terminate TLS at the platform or trusted proxy.
- Configure trusted proxy behavior deliberately.
- Preserve correct client IP information for rate limiting and security logs.
- Do not trust arbitrary forwarded headers.
- Set request body limits and timeouts.
- Ensure cookies use secure settings.

## Minimum production security gate
- [ ] Exposed database credential rotated and removed from current source.
- [ ] Git history secret-removal decision completed.
- [ ] Password hashing implemented and tested.
- [ ] Secure session lifecycle implemented.
- [ ] /home and other private routes protected.
- [ ] CSRF protection configured.
- [ ] Rate limiting on login and registration.
- [ ] Server-side validation and unique indexes.
- [ ] Safe error template and generic auth messages.
- [ ] Database network access restricted.
- [ ] Backups and restore procedure tested.
- [ ] Dependency and security review completed.
- [ ] Automated tests and CI required.

## Rollback
Keep a known-good deployment configuration. Disable public access immediately if credentials leak or unauthorized account access is suspected. A frontend rollback does not rotate a credential; rotate exposed secrets separately.
