# ⚙️ Configuration reference

## Existing configuration sources

| Setting | Current source | Observed behavior | Required action |
|---|---|---|---|
| HTTP port | `bin/www` | Reads process.env.PORT, defaults to 3000 | Can be set by runtime environment |
| MongoDB URI | `routes/users.js` | Hard-coded URI including credential in tracked source | Rotate credential and replace with process.env.MONGODB_URI |
| EJS views path | `app.js` | Resolves views relative to application directory | No runtime setting |
| Static assets path | `app.js` | Serves public directory | No runtime setting |
| Express environment | Express default | Error locals differ by development mode | Configure NODE_ENV at runtime |

## .env.example mismatch
The repository includes an example with PORT and MONGODB_URI. The current package manifest does not include dotenv and the application does not load a .env file. Setting values in that file alone will not populate process.env.

Use platform environment configuration or explicitly add and configure a dotenv-compatible loader in a reviewed source change. Never put a real credential in the example file.

## Required secret handling
1. Revoke/rotate the MongoDB credential committed in routes/users.js.
2. Create a new database user with least-privilege access.
3. Store the replacement URI in a managed secret/environment setting.
4. Update routes/users.js to read process.env.MONGODB_URI.
5. Fail startup clearly if the variable is missing.
6. Never log the full connection URI.
7. Consider removing the exposed value from Git history after rotation, coordinated with collaborators.

## Runtime environment variables

| Variable | Example | Secret? |
|---|---|---|
| PORT | 3000 | No |
| NODE_ENV | production | No |
| MONGODB_URI | mongodb://127.0.0.1:27017/atlas | Yes in shared deployments |

The local URI above is illustrative. Never copy production credentials into docs or committed files.
