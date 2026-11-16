# 🔐 Security policy

## Critical existing warning
Atlas currently has a database URI containing credentials in tracked source, stores raw passwords, does not create a durable authenticated session, and leaves /home publicly accessible. Do not deploy this version publicly or use real account credentials.

The committed MongoDB credential must be rotated/revoked immediately. Removing the string from the current file does not invalidate it. Consider Git history cleanup after rotation and coordinate with collaborators.

## Reporting
Use GitHub private vulnerability reporting for this repository when enabled. Otherwise contact the maintainer privately through <https://github.com/Brajesh31>. Do not disclose details in a public issue.

Include:
- Affected file/route and commit SHA.
- Reproduction steps using synthetic data.
- Realistic impact and prerequisites.
- Safe evidence with all secrets removed.
- Suggested mitigation, if known.

Do not access other users' data or perform destructive tests against third-party services.

## Response
Maintainers should acknowledge reports, assess impact, coordinate a remediation, and communicate resolution when appropriate. No response-time SLA is currently defined.

## Required controls before public deployment
- Rotate the exposed MongoDB credential.
- Move secret configuration outside source control.
- Hash passwords and verify hashes safely.
- Implement session creation, expiry, rotation, and logout.
- Protect private routes with authorization middleware.
- Add server-side input validation and unique indexes.
- Add CSRF protection and authentication rate limits.
- Configure secure cookies and TLS.
- Add security headers and request body limits.
- Add safe error handling and tests.
- Restrict MongoDB network and user permissions.

## Supported versions
The repository does not maintain a formal support matrix. Report against the latest default-branch commit and include runtime details.
