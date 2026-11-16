# ❓ Frequently asked questions

## Is Atlas production-ready?
No. It has plaintext password handling, a committed MongoDB credential, no authenticated session, and an unprotected home route.

## Which technologies does it use?
Node.js, Express, EJS, Mongoose, MongoDB, Morgan, cookie-parser, and standard browser CSS/JavaScript.

## Is it a REST API?
No. The current routes render server-side EJS pages and accept HTML form submissions.

## What is the default port?
3000. The server reads PORT from the process environment.

## Does .env.example configure MongoDB?
No. The file documents a MONGODB_URI variable, but current routes/users.js uses a literal URI. The app does not load dotenv.

## Are passwords hashed?
No. Current code stores and compares plaintext values. Do not use real passwords.

## Is /home protected?
No. It can be requested directly without login.

## Why might successful login fail to render?
The handler renders Home while the file present in views is home.ejs. View resolution is case-sensitive on many platforms.

## Are automated tests configured?
No test script or test suite is currently declared.

## Where do I report a vulnerability?
Use private reporting described in SECURITY.md. Do not post credentials or exploit details publicly.
