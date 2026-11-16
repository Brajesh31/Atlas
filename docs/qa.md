# 🧪 Quality assurance plan

## Current QA baseline
There is no automated test suite or CI validation pipeline in the inspected repository. The README timestamp workflow is not an application test. A clean npm installation or a process that starts successfully is not proof that authentication behavior is correct or secure.

## Manual route matrix

| Test | Method/path | Expected observation |
|---|---|---|
| QA-01 | GET / | Login view renders |
| QA-02 | GET /sign | Sign-up view renders |
| QA-03 | POST / with unknown username | Current catch behavior observed; future generic error |
| QA-04 | POST / with wrong password | Current wrong-password text |
| QA-05 | POST / with valid test record | Current Home view-name mismatch may fail |
| QA-06 | POST /sign with disposable values | Insert and lowercase home render |
| QA-07 | POST /sign with missing values | Current error handling reviewed |
| QA-08 | GET /home directly | Confirms route is not protected |
| QA-09 | GET /users | Confirms invalid router mount behavior |
| QA-10 | GET /missing | Confirms missing error template behavior |
| QA-11 | GET /stylesheets/style.css | Static CSS is served |
| QA-12 | GET /javascripts/script.js | Static JS is served |

## Negative cases
- MongoDB is stopped.
- MongoDB URI is invalid.
- Database network access is blocked.
- Duplicate username is submitted.
- Password is empty or oversized.
- Username contains unexpected Unicode/whitespace.
- Request body is malformed or too large.
- Client requests protected page without identity.
- Session cookie is absent, invalid, or expired after future session implementation.

## Responsive checks
Test login and sign-up at 320 px, 375 px, 768 px, 1366 px, and 1920 px. The sign-up page uses a fixed 850 by 500 px container and body overflow hidden, so narrow-screen clipping is a likely issue requiring real-browser review.

## Accessibility checks
Review form labels, focus visibility, error associations, heading hierarchy, keyboard submission, color contrast, and reduced motion. Placeholder text alone is not an accessible label.

## Evidence
Record commit SHA, route, browser, viewport, steps, expected/actual result, sanitized logs, and test environment. Never include real credentials, private MongoDB URIs, or user records.
