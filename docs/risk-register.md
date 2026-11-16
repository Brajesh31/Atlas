# ⚠️ Atlas risk register

| ID | Risk | Severity | Evidence | Mitigation |
|---|---|---|---|---|
| AT-01 | MongoDB credential committed in source | Critical | routes/users.js contains URI with embedded secret | Rotate/revoke now; secret manager; history cleanup |
| AT-02 | Passwords stored plaintext | Critical | POST /sign inserts raw password | Hash and verify with suitable algorithm |
| AT-03 | No session after login | Critical | Login only renders view | Secure session lifecycle |
| AT-04 | /home route unprotected | High | GET /home renders directly | Auth middleware |
| AT-05 | No robust server-side validation | High | Handler reads body fields directly | Validation and normalization |
| AT-06 | Email missing from schema | Medium | Route sends email; schema omits it | Define account contract and unique index |
| AT-07 | Login view case mismatch | High | Renders Home; actual view home.ejs | Fix and test |
| AT-08 | Missing error template | High | Handler renders error; file absent | Add safe error view |
| AT-09 | Invalid /users mount | High | Model exported instead of Router | Remove mount or provide router |
| AT-10 | No automated tests/CI | High | No test script or project CI | Add HTTP/model tests and workflow |
| AT-11 | Missing CSRF/rate limiting | High | Not configured | Add before public access |
| AT-12 | Newsletter script mismatch | Medium | Script expects missing DOM IDs | Align script and markup |
| AT-13 | Incomplete signup form behavior | Medium | Multiple/unfinished form markup | Define single form contract |
| AT-14 | No backup/restore policy | Medium | Not configured | Document encrypted backups and restore drills |

## Release blockers
AT-01, AT-02, AT-03, and AT-04 block public deployment. These risks cannot be accepted as a documentation-only decision.

## Review
Update after verified code changes and tests. Do not mark a risk resolved because a document describes the mitigation.
