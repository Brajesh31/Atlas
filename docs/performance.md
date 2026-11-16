# ⚡ Performance review

## Current baseline
The repository does not publish measured request latency, throughput, memory usage, Core Web Vitals, or load-test results. Do not invent performance claims.

## Areas to measure
- Process startup and memory.
- MongoDB connection readiness and query latency.
- Registration insert latency.
- Login lookup latency.
- EJS render time.
- Static asset response size.
- Error rate under expected request volume.

## Measurement approach
1. Use a disposable environment.
2. Seed synthetic records.
3. Measure with a documented Node/browser/runtime version.
4. Capture p50, p95, and p99 where appropriate.
5. Separate database latency from template/render latency.
6. Repeat after changes with the same workload.
7. Record commit SHA and test conditions.

## Candidate improvements
- Add appropriate indexes for normalized lookup fields.
- Reuse Mongoose connections rather than reconnecting per request.
- Use a production HTTP server/process manager.
- Configure compression and static asset caching at a trusted proxy.
- Set request body limits and timeouts.
- Avoid expensive synchronous work in route handlers.
- Review EJS template payload size.

## Guardrails
Security takes priority over marginal speed. Do not cache sensitive account data improperly. Do not add password hashing shortcuts to improve benchmark results. Publish only measured before/after comparisons.
