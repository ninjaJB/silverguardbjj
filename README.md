# Silver Guard — silverguardbjj.com

Static site for Silver Guard, an East Coast Brazilian Jiu-Jitsu community for grapplers 40+.
Plain HTML/CSS + a tiny `config.js`. No build step.

## Structure
- `public/` — the deployable site (`index.html`, `styles.css`, `config.js`, `img/`, icons, manifest)
- `screenshots/` — verification screenshots (desktop 1440px, mobile 390px)

## Local preview
    cd public && python3 -m http.server 8000   # http://localhost:8000

## Deploy (Render static site)
- Build command: none (or `echo no build`)
- Publish directory: `public`

## TODO placeholders (all in `public/config.js`)
- `FACEBOOK_URL` — currently `#`; set to the Facebook group URL.
- `SIGNUP_EMAIL` — currently `hello@example.com`; the signup form opens a `mailto:` to this address (no backend).
