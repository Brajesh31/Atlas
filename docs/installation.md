# Installation

## Prerequisites

Install Node.js 18 or newer, npm, and access to a MongoDB instance.

## Setup

```bash
git clone https://github.com/Brajesh31/Atlas.git
cd Atlas
npm install
```

Create an untracked environment file from `.env.example`, then provide a safe MongoDB URI through the application configuration. Do not commit credentials. Start with `npm start` and browse to `http://localhost:3000`.

## Local database

For local development, MongoDB may run on `mongodb://127.0.0.1:27017/atlas`. Confirm that the database is reachable before testing sign-up or login.
