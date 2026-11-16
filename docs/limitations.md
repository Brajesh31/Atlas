# ⚠️ Current limitations and non-goals

## Critical security limitations
- Database connection URI contains a credential in tracked source.
- Passwords are stored and compared as plaintext.
- Login does not create a session.
- /home is not protected.
- No CSRF defense or login rate limiting exists.
- No robust server-side validation or unique account index is declared.

## Application correctness
- Registration submits email but schema defines name/password only.
- Login success renders Home while template is home.ejs.
- Error handler renders error, but no views/error.ejs exists.
- /users mounts a Mongoose model as Express middleware instead of a Router.
- Sign-up template has unfinished/multiple form markup.
- Browser script expects newsletter DOM elements absent from login page.

## Quality/operations
- No automated tests.
- No lint or test scripts.
- No application CI validation before this update.
- No structured observability, health endpoint, backup/restore, or release policy.
- No verified browser screenshots included yet.

## Non-goals
The current code is not a full identity platform, SaaS account system, production-ready login service, public JSON API, marketing newsletter service, or hardened deployment template.

## Updating limitations
Only remove an item after a source fix and verification evidence exist. Update the README, feature inventory, risk register, QA plan, and changelog together.
