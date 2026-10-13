# Database

Atlas uses MongoDB through Mongoose. The account schema currently declares `name` and `password` as required strings; registration also submits an email field, which should be explicitly added to a reviewed schema before relying on it.

## Local development

Use a dedicated local database such as `atlas`. Keep the connection URI outside source control and use a least-privilege database user for shared environments.

## Production concerns

Passwords must be hashed with a modern password-hashing algorithm. Add unique indexes, validation, migration/backup procedures, connection timeouts, and retention rules before storing real accounts.
