# 🔧 Maintenance guide

## Application maintenance
- Keep Node.js runtime on a supported release.
- Use npm ci for deterministic install.
- Review dependency advisories before updates.
- Keep package.json and package-lock.json synchronized.
- Avoid committing developer-specific .idea state.
- Preserve existing views and assets unless a separate refactor is requested.

## Database maintenance
- Rotate database credentials when exposed or shared.
- Use least-privilege database users.
- Restrict network access.
- Test backups and restores before accepting real data.
- Do not store raw passwords.
- Document schema changes and unique-index rollout.

## Route/view maintenance
When routes or templates change:
1. Update docs/routes.md.
2. Update docs/api.md.
3. Update diagrams.
4. Add or update tests.
5. Verify view names match file names exactly.
6. Check missing error and not-found templates.

## Documentation maintenance
- Keep README factual and source-backed.
- Do not call proposed security architecture implemented.
- Verify links and SVG paths.
- Capture real browser screenshots only.
- Update changelog for meaningful changes.

## Recovery
The project is source-controlled in Git. Database backup and restore are not configured. A production operator must define encrypted backups, retention, restricted access, and restore tests before storing user accounts.
