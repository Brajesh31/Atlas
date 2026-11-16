# 🛠️ Operations and incident response

## Runtime model
Atlas runs as a Node.js process and connects to MongoDB. It has no background worker, queue, cache, or dedicated observability service. The HTTP server is launched by bin/www.

## Operational dependencies
- Node.js runtime and package dependencies.
- Network port configured by PORT.
- MongoDB availability and network allowlist.
- Secret/configuration provisioning.
- Static host or reverse proxy if deployed publicly.

## Startup checks
1. Confirm runtime version.
2. Confirm PORT is valid and available.
3. Confirm MongoDB is reachable.
4. Confirm replacement credentials are provisioned outside Git.
5. Confirm the process is not exposing development error details.
6. Confirm logs do not contain credentials.

## Incident scenarios

| Scenario | Immediate action | Follow-up |
|---|---|---|
| Database credential exposed | Rotate credential/revoke old user immediately | Audit access and remove secret from Git history |
| Database unavailable | Do not repeatedly restart aggressively | Verify network, cluster and safe retry policy |
| Unexpected account access | Disable public access and preserve sanitized evidence | Audit routes, sessions, DB activity and logs |
| App returns 500 | Inspect sanitized logs and template/route paths | Add regression test |
| Port collision | Change PORT or stop conflicting process | Document process supervision |

## Incident response sequence
1. Identify affected route and environment.
2. Determine whether impact is application-wide or database-specific.
3. Preserve minimal sanitized logs.
4. Disable a compromised integration or deployment when necessary.
5. Rotate exposed credentials immediately.
6. Restore from a known-good deployment/configuration.
7. Verify route behavior using synthetic accounts.
8. Record root cause, impact, mitigation, and prevention.

## Recovery
Database backups and restore tests are not configured in this repository. A deployment must define encrypted backup storage, retention, access controls, and restore drills before storing real account data.
