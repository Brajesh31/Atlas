# Troubleshooting

## Server does not start

- Confirm Node.js and npm are installed.
- Run `npm install` and retry `npm start`.
- Check whether port 3000 is already in use; set `PORT` to another port.

## Registration or login fails

- Confirm MongoDB is reachable.
- Check the sanitized server output for the connection message.
- Use a disposable local account and confirm the submitted username matches the stored `name` field.

## Styles do not load

Confirm the browser can reach `/stylesheets/style.css` and that the application was started from the repository root. Static files are served from `public/`.

## Security concern

Do not publish credentials or database output in an issue. Follow the private reporting process in [SECURITY.md](../SECURITY.md).
