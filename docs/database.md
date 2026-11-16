# 🗄️ Database model and persistence

## Current database integration
Atlas uses Mongoose to connect to MongoDB. The model is declared in routes/users.js and exported for use by routes/index.js.

## Current schema

| Field | Type | Required | Notes |
|---|---|---|---|
| name | String | Yes | Used by login lookup |
| password | String | Yes | Currently plaintext, critical security defect |

The registration handler also submits email, but email is not declared in the current schema. Depending on schema strictness and model behavior, this field is not part of the defined model document. There is no unique index, explicit normalization, timestamps, or password hash field.

## Current operations
- Module loading calls mongoose.connect with a literal URI.
- Registration calls insertMany with one submitted object.
- Login calls findOne using name.
- Login compares the submitted password against the stored password property.

## Current connection risks
- Connection URI is hard-coded and contains a credential.
- Connection failures are logged with a generic message.
- Application startup does not wait for database readiness.
- URI is not sourced from the documented environment variable.
- No graceful shutdown handling is configured.

## Recommended model direction
A future reviewed account model should include normalized unique email/username, passwordHash, timestamps, and explicit validation. It should not store the original password. Add database indexes through a controlled migration/initialization process.

## Data lifecycle requirements
Before real user data is accepted:
1. Document the data fields and purpose.
2. Validate and normalize input on the server.
3. Hash password before persistence.
4. Enforce unique identifiers at database level.
5. Restrict database user permissions.
6. Set retention and deletion rules.
7. Back up and test restore procedures.
8. Prevent sensitive values from entering logs.
9. Test authorization and data-isolation boundaries.

## Important
The current project is a prototype. Do not connect it to a production user database.
