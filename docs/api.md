# HTTP API

Atlas exposes server-rendered endpoints rather than a versioned JSON API.

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/` | Render the login page |
| POST | `/` | Look up a username and compare its password |
| GET | `/sign` | Render the sign-up page |
| POST | `/sign` | Insert submitted account data and render the home page |
| GET | `/home` | Render the demonstration home page |

The current implementation sends plain text for some login errors and does not provide a durable session. Treat all form input as untrusted and do not use these endpoints for production identity management.
