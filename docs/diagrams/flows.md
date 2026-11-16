# 🔀 Atlas flowcharts and sequence diagrams

These diagrams document the existing Express application. Diagrams explicitly marked **target** or **recommended** are not implemented behavior.

## 1. Server startup and middleware

```mermaid
flowchart TD
 A[Start npm start] --> B[Execute bin/www]
 B --> C[Read PORT or default 3000]
 C --> D[Create Node HTTP server]
 D --> E[Import app.js]
 E --> F[Configure EJS views]
 F --> G[Register Morgan logger]
 G --> H[Register JSON and URL-encoded parsers]
 H --> I[Register cookie parser]
 I --> J[Serve public static assets]
 J --> K[Mount root and users routers]
 K --> L[Register 404 and error handlers]
 L --> M[Listen on configured port]
 M --> N[Accept browser requests]
```

## 2. Registration, current implementation

```mermaid
flowchart TD
 A[Visitor] --> B[GET /sign]
 B --> C[Render signUp.ejs]
 C --> D[Submit form]
 D --> E[POST /sign]
 E --> F[Read username, email, password]
 F --> G[Build account object]
 G --> H[Mongoose insertMany]
 H --> I{Database insert succeeds?}
 I -->|Yes| J[Render home.ejs]
 I -->|No| K[Async error path, no tailored validation response]
```

## 3. Login, current implementation

```mermaid
flowchart TD
 A[Visitor] --> B[GET /]
 B --> C[Render index.ejs]
 C --> D[Submit username/password]
 D --> E[POST /]
 E --> F[Find account by name]
 F --> G{Account found?}
 G -->|No| H[Catch path sends Wrong details]
 G -->|Yes| I[Compare stored plaintext password]
 I --> J{Equal?}
 J -->|No| K[Send Wrong Password]
 J -->|Yes| L[Render Home view]
 L --> M[No session is created]
```

## 4. Recommended secure registration and login

```mermaid
flowchart TD
 A[Registration input] --> B[Normalize and validate fields]
 B --> C{Valid?}
 C -->|No| D[Return field-level error]
 C -->|Yes| E[Hash password]
 E --> F[Insert account with unique constraints]
 F --> G[Return safe confirmation]
 H[Login input] --> I[Rate limit and validate]
 I --> J[Load account by normalized identifier]
 J --> K[Verify password hash]
 K --> L{Verified?}
 L -->|No| N[Generic authentication failure]
 L -->|Yes| O[Create secure session]
 O --> P[Protect private routes with authorization]
```

This is a target architecture only. The current app does not implement this flow.

## 5. Request lifecycle and Express routing

```mermaid
sequenceDiagram
 actor Browser
 participant Server as bin/www
 participant App as Express app
 participant Router as routes/index.js
 participant DB as Mongoose/MongoDB
 participant View as EJS
 Browser->>Server: HTTP request
 Server->>App: Pass request to app
 App->>App: Run middleware
 App->>Router: Match route
 alt GET page
  Router->>View: Render EJS template
  View-->>Browser: HTML response
 else Form submission
  Router->>DB: Query or insert
  DB-->>Router: Document/result or error
  Router->>View: Render page or send message
  View-->>Browser: HTTP response
 end
```

## 6. Current database connection path

```mermaid
flowchart LR
 A[routes/users.js module loads] --> B[Mongoose connect]
 B --> C{Connection succeeds?}
 C -->|Yes| D[Log connected]
 C -->|No| E[Log not connected]
 A --> F[Define account schema]
 F --> G[Create model]
 G --> H[Export model to routes/index.js]
 H --> I[Handlers call findOne/insertMany]
```

The current source includes a database credential in the connection URI. It must be rotated and removed from source control.

## 7. Error path

```mermaid
flowchart TD
 A[Request reaches Express] --> B{Route matches?}
 B -->|No| C[Create HTTP 404]
 B -->|Yes| D[Run route handler]
 D --> E{Handler error?}
 E -->|No| F[Send/render response]
 E -->|Yes| G[Forward or propagate error]
 C --> H[Error middleware]
 G --> H
 H --> I[Set status and locals]
 I --> J[Render error view]
 J --> K[Current repository lacks views/error.ejs]
```

## 8. Deployment request path

```mermaid
flowchart TD
 A[Developer] --> B[Install lockfile dependencies]
 B --> C[Set runtime environment]
 C --> D[Start Node process]
 D --> E[HTTP server listens]
 E --> F[Reverse proxy or platform ingress]
 F --> G[Express middleware and routes]
 G --> H[MongoDB network]
 G --> I[EJS response]
 I --> J[Browser]
 J --> K[Request static /stylesheets and /javascripts assets]
 K --> L[Express public middleware]
```

## 9. Proposed account data lifecycle

```mermaid
stateDiagram-v2
 [*] --> RegistrationSubmitted
 RegistrationSubmitted --> Validated: Server validates fields
 RegistrationSubmitted --> Rejected: Invalid input
 Validated --> PasswordHashed: Hash with approved algorithm
 PasswordHashed --> AccountStored: Unique constraint passes
 AccountStored --> LoginAttempt
 LoginAttempt --> Authenticated: Hash verification succeeds
 LoginAttempt --> Rejected: Unknown user or invalid password
 Authenticated --> SessionActive: Secure session issued
 SessionActive --> SessionExpired: Expiration/revocation
 SessionExpired --> [*]
```

This is a future design model, not a current persistence or session implementation.
