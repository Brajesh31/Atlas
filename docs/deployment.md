# Deployment

Atlas is currently best suited to local or private educational deployment. A production deployment requires security work described in [SECURITY.md](../SECURITY.md).

## Minimum deployment checklist

1. Use a supported Node.js runtime.
2. Install dependencies with `npm ci` from the lockfile.
3. Supply `PORT` and `MONGODB_URI` through the platform secret/configuration manager.
4. Use TLS and restrict network access to MongoDB.
5. Run behind a process supervisor or managed web service.
6. Add health checks, structured logs, backups, monitoring, and rate limits.

Never expose the current plaintext password flow to the public internet.
