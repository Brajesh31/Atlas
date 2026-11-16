# 🖼️ Asset inventory

## Existing application assets

| Path | Type | Purpose | Notes |
|---|---|---|---|
| public/stylesheets/style.css | CSS | Login page styling | Uses centered card layout |
| public/javascripts/script.js | JavaScript | Newsletter validation/toast behavior | Expects DOM elements not in login view |
| views/index.ejs | EJS/HTML | Login page | External script reference |
| views/signUp.ejs | EJS/HTML/CSS | Sign-up presentation | Inline styles and external font/icon resources |
| views/home.ejs | EJS/HTML/CSS | Broadway-inspired page | External background and SVG images |

## New technical illustrations

| Path | Type | Purpose |
|---|---|---|
| docs/assets/atlas-mark.svg | SVG | Repository identity illustration |
| docs/assets/atlas-architecture.svg | SVG | Express/EJS/Mongoose architecture |
| docs/assets/auth-user-journey.svg | SVG | Login and registration journey |
| docs/assets/request-lifecycle.svg | SVG | HTTP request pipeline |

## Planned browser captures

| File | Route | State |
|---|---|---|
| docs/demo/login.png | / | Pending |
| docs/demo/signup.png | /sign | Pending |
| docs/demo/home.png | /home | Pending |
| docs/demo/error.png | Invalid route | Pending |

No browser screenshots are claimed in this change. Real screenshots require a running local app and disposable database, and should not expose real credentials or account information.

## Asset contribution rules
- Identify asset purpose and source/rights.
- Use meaningful alt text.
- Optimize file dimensions and size.
- Keep SVG text editable when practical.
- Do not present diagrams as screenshots.
- Do not commit account records, credentials, or copyrighted images without permission.
