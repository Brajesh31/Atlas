# 🎬 Demo gallery and screenshot capture policy

## Current visual assets
The repository now includes technical SVG illustrations in docs/assets. These are architecture and user-flow diagrams, not browser screenshots.

## Planned browser captures

| File | Page | Status |
|---|---|---|
| login.png | / | Capture pending |
| signup.png | /sign | Capture pending |
| home.png | /home | Capture pending |
| error.png | Unknown route/error | Capture pending after error template fix |

## Capture procedure
1. Use a disposable local database and synthetic test account.
2. Rotate the committed MongoDB credential before testing any shared database.
3. Start Atlas locally.
4. Open the exact route in a browser.
5. Record viewport and capture date.
6. Remove personal data, developer overlays, credentials, cookies, and unrelated tabs.
7. Save the actual browser screenshot using the planned filename.
8. Add alt text in README and asset inventory.
9. Verify the image exists before linking it.

## Asset types
- Project mark: identity illustration.
- Architecture diagram: technical system view.
- Flowchart: request/user journey.
- Mockup: concept, must be labeled as illustrative.
- Browser screenshot: real running app capture.

Do not fabricate screenshots or use real user records. Avoid committing external copyrighted images unless reuse rights are clear.
