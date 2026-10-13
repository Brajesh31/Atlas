# Contributing to Atlas

Thank you for helping improve Atlas. Contributions should preserve the project’s educational purpose and should not introduce real credentials or personal data.

## Before you start

1. Read the [README](README.md), [SECURITY](SECURITY.md), and [Code of Conduct](CODE_OF_CONDUCT.md).
2. Create a focused branch from `main`.
3. Confirm that your change is compatible with the supported Node.js version.

## Development workflow

```bash
npm install
npm start
```

Manually verify the affected route and view. For authentication changes, test successful and unsuccessful login, duplicate or incomplete registration, malformed input, and database-connection failure. Add automated tests when adding behavior that can be isolated from the database.

## Pull requests

- Explain the behavior changed and how it was verified.
- Keep commits focused and avoid unrelated formatting changes.
- Never commit `.env`, database URIs, passwords, tokens, service-account files, or user data.
- Update relevant documentation when routes, configuration, or data behavior changes.
- Do not claim production security unless the implementation has been reviewed and tested.

By contributing, you agree to follow the project’s Code of Conduct.
