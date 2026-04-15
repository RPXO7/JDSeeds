# Flow — image storage (current)

## Where images live

- Product images referenced in the catalog (`src/data/products.ts`) currently point to paths under `public/`, e.g.:
  - `/assets/products/...`
  - `/assets/brands/...`

## How it works

- Any file in `public/` is served at the same path from the site root.
  - `public/assets/products/foo.png` → `/assets/products/foo.png`

## Rules

- Keep image paths stable once published (especially if they appear in metadata/OG tags).
- Prefer naming images using the product slug to avoid confusion.

