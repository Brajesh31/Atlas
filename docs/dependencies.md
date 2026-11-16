# 📦 Dependency and supply-chain review

## Declared runtime packages

| Package | Declared range | Role |
|---|---|---|
| express | ~4.16.1 | HTTP application and routing |
| ejs | ~2.6.1 | Server-rendered views |
| mongoose | ^8.5.1 | MongoDB ODM |
| morgan | ~1.9.1 | HTTP request logging |
| cookie-parser | ~1.4.4 | Cookie header parsing |
| http-errors | ~1.6.3 | HTTP error objects |
| debug | ~2.6.9 | Debug logging namespace |

The lockfile is the source of resolved dependency versions. This documentation does not assert a current vulnerability scan result.

## Package maintenance
1. Review advisories and package release notes.
2. Check compatibility with the existing CommonJS code.
3. Update focused dependencies.
4. Inspect package-lock.json diff.
5. Run npm ci.
6. Run route and model tests once configured.
7. Verify security behavior and deployment.
8. Record breaking changes in CHANGELOG.md.

## Important version consideration
The declared Express/EJS ecosystem contains older package ranges. Evaluate supported upgrades deliberately. Avoid a blind bulk update that changes middleware, template behavior, or Mongoose defaults without tests.

## Security
Do not commit npm tokens or registry credentials. Review transitive dependencies and the package-lock file. Use least-privilege CI permissions. Remove unused packages only after usage analysis.
