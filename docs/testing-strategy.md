# 🧪 Testing strategy and quality gates

## Current test tooling
package.json defines only npm start. There is no unit test runner, HTTP integration framework, lint command, or CI test workflow in the current codebase.

## Test layers to introduce
### Unit tests
Test input normalization, validation, password hash/verify service, error mapping, session settings, and port normalization.

### HTTP integration tests
Test login/signup page responses, registration success and invalid input, duplicate account handling, login success and generic failures, session issuance/logout, protected /home, CSRF failures, 404, and error middleware.

### Database tests
Test schema validation, unique indexes, password hash persistence, database connection failures, and test database cleanup.

### Browser tests
Test form labels, registration field contract, accessible error messages, keyboard navigation, and responsive layouts.

## Test isolation
Use a disposable test database or ephemeral database. Never run tests against a production cluster. Use synthetic identities and fake passwords.

## Current manual validation
1. npm ci.
2. Start local MongoDB.
3. npm start.
4. Exercise every route in docs/routes.md.
5. Inspect sanitized server logs.
6. Verify CSS/JS requests.
7. Test missing template and database failure paths.
8. Confirm no secret appears in client response or logs.

## Future CI gate
- Dependency installation.
- Lint.
- Unit tests.
- HTTP integration tests.
- Database model tests.
- Dependency/security review.
- Documentation link and image validation.
- Application start smoke test.

Do not report coverage until automated tests exist and run.
