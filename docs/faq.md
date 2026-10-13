# FAQ

## Is Atlas production-ready?

No. It is an educational prototype with plaintext password handling, no durable authentication session, and source-level database configuration.

## Which database does it use?

MongoDB accessed through Mongoose.

## What port does it use?

`3000` by default. Set `PORT` to override it.

## Is there a REST API?

No. The current endpoints render EJS pages and process HTML form submissions.

## Where should I report a vulnerability?

Use the private process in [SECURITY.md](../SECURITY.md), not a public issue.
