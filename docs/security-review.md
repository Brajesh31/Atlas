# 🔐 Security review and threat model

## Scope
This is a source-level review of the current Express application. It is not a penetration test or formal security certification.

## Critical findings

### S-01: Database credential committed in source
The Mongoose URI in routes/users.js contains embedded credentials. This has been committed to the repository. Treat it as compromised: rotate/revoke the database password, create a least-privilege replacement user, remove the literal from source, and supply a secret through runtime configuration. Rewriting Git history does not replace credential rotation.

### S-02: Plaintext password storage
The registration handler inserts the raw submitted password into MongoDB. A database leak would expose user passwords directly. Use a vetted password-hashing algorithm and safe verification. Never migrate plaintext passwords into documentation or fixtures.

### S-03: No authenticated session
The login handler compares credentials and renders a page, but does not create a session or signed token. Subsequent requests cannot prove the visitor authenticated.

### S-04: Unprotected home route
GET /home directly renders the destination page. No authentication middleware is applied.

### S-05: Insufficient server-side validation
HTML required attributes are not security validation. The server does not demonstrate normalization, length limits, type checks, duplicate prevention, or safe user-facing validation errors.

### S-06: Error and account enumeration behavior
The login route returns different text for wrong password versus other lookup failures. Use generic authentication failures and avoid exposing whether an account exists.

### S-07: Missing error view
app.js renders an error view for errors, but views/error.ejs is absent in the checked-in tree. This can cause secondary rendering failures when handling errors.

## Additional review areas
- CSRF protection for state-changing form submissions.
- Login and registration rate limits.
- Secure, HttpOnly, SameSite cookies and TLS.
- Session rotation, expiry, and revocation.
- Unique indexes and race-safe account creation.
- Database network access restrictions and backup security.
- Request body size limits.
- Dependency advisory review.
- Sanitized logging that never includes credentials.
- Security headers and content policy.
- Privacy purpose, retention, export, and deletion rules.

## Threat-to-control mapping

| Threat | Current exposure | Recommended control |
|---|---|---|
| Credential theft | URI committed to Git | Rotate, secret store, history cleanup |
| Database compromise | Plaintext passwords | Hash passwords, least privilege, backups |
| Unauthorized page access | /home is public | Session/auth middleware |
| Brute force | No login rate limiting | IP/account-aware rate limits and monitoring |
| Forged form request | No CSRF defense | CSRF tokens and cookie policy |
| Account enumeration | Different error text | Generic responses |
| Malformed input | Minimal server validation | Schema validation and request limits |
| Error disclosure | Development error locals | Production-safe error handler |

## Reporting
Follow SECURITY.md and use private vulnerability reporting. Never include credentials, database exports, or real user data in an issue.
