# 🛡️ Data privacy and handling

## Current data collected by the route code
The registration handler reads username, email, and password from the submitted request body. The model schema explicitly stores name and password. Email is submitted but not explicitly declared in the current schema. Login looks up a record by name and compares a password value.

## Sensitive data
Passwords are highly sensitive authentication data. The current raw-password persistence is unsafe. Do not use real passwords, reuse credentials, personal email addresses, or production customer data with the prototype.

## Data minimization
A future implementation should collect only fields needed for a documented purpose. Do not add profile data, analytics identifiers, or marketing collection by default.

## Retention and deletion
The current repository does not define account retention, export, or deletion workflows. These should be designed before the app accepts real users.

## Logs and diagnostics
Do not log passwords, session cookies, authorization headers, full MongoDB URIs, or user documents. Issue reports and screenshots must use synthetic accounts and sanitized identifiers.

## Privacy requirements before launch
- Document data categories and purpose.
- Hash passwords before storage.
- Define retention/deletion behavior.
- Restrict database access.
- Protect transport and session cookies.
- Limit log access and retention.
- Review applicable privacy obligations for the deployment jurisdiction.
- Provide a contact for privacy requests.

This is project guidance, not legal advice.
