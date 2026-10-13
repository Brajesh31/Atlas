# Development

## Layout

The application follows an Express generator-style layout. Routes live under `routes/`, EJS templates under `views/`, and browser assets under `public/`.

## Running locally

```bash
npm install
npm start
```

The server defaults to port 3000 and accepts `PORT`. There is no watch, lint, or test script in `package.json`.

## Verification expectations

Exercise `GET /`, `GET /sign`, `POST /sign`, `POST /`, and `GET /home`. Verify malformed submissions and unavailable MongoDB behavior. Keep secrets and test accounts local and disposable.
