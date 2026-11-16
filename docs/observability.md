# 🔎 Observability and diagnostics

## Current state
The application uses Morgan's development logger and a debug namespace in bin/www. It does not include centralized error reporting, metrics, tracing, health endpoints, or audit logging.

## Safe diagnostic evidence
Collect route, method, status code, timestamp, deployment version, and sanitized error category. Never log request passwords, cookies, database URIs, authorization headers, or entire user documents.

## Useful future events
- HTTP request error rate.
- Database connection readiness/failure.
- Registration validation failures by category, not raw values.
- Login failure counts without logging credentials.
- Session creation, expiration, and revocation.
- Protected-route authorization failures.
- Process restart and deployment status.

## Privacy controls
Set retention periods and restrict access to logs. Avoid recording email addresses or usernames unless operationally necessary. Aggregate security events where possible.

## Health checks
A future health endpoint may report application liveness and database readiness separately. Do not reveal connection strings or internal infrastructure details in public health responses.

## Incident evidence
Capture time, affected route, request ID if available, sanitized status/error, commit SHA, and deployment environment. Do not include real account payloads.
