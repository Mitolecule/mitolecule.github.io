# Mitolecule Group website

A responsive, multi-page static website built with plain HTML, CSS and JavaScript.

## Pages
- `/` — Home
- `/about/` — About Mitolecule
- `/ventures/` — Venture portfolio
- `/people/` — People and culture
- `/careers/` — Careers
- `/contact/` — Contact

## Preview locally
Run a local static server from this folder, for example:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Deployment
Upload the contents of this folder to a static host (GitHub Pages, Netlify, Cloudflare Pages, etc.).
The site uses clean directory routes (`/about/`, `/ventures/`, etc.). Configure your host to serve each folder's `index.html`.

## Before publishing
- Confirm the organisation's legal name and public status.
- Add verified contact details when the mailbox is active.
- Confirm StudyGroup wording and development status.
- Add social links only when official profiles exist.

The contact page intentionally does not invent an email address or pretend a non-functional form is connected.

## Official brand assets
- `assets/logo.png` — full Mitolecule wordmark (symbol plus company name), used in the header and footer.
- `assets/watermark.png` — standalone M symbol, used as the large homepage banner graphic and favicon.

## Mitolecule brand asset placement
- `assets/logo.png` is the standalone M symbol. It is used in the homepage hero banner and as the favicon.
- `assets/watermark.png` is the full horizontal Mitolecule wordmark (M + company name). It is used in the navigation and footer.
- Both assets have transparent backgrounds for clean placement.
