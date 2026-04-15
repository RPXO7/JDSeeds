# QR system (stable forever)

## Canonical QR URL format (DO NOT CHANGE)

Every printed QR code must encode exactly:

- `https://YOUR_PRODUCTION_DOMAIN/p/{slug}`

Examples:

- `https://jdseeds.in/p/bhinda`
- `https://jdseeds.in/p/lagan-51-bg-ii`

Why `/p/{slug}`:

- **Short + stable** for printing
- Lets us resolve locale from cookie/browser and then redirect to the canonical product page

## Output location

Generated QR SVGs are stored at:

- `public/assets/qr/{slug}.svg`

## How it works

- `src/app/p/[slug]/page.tsx` resolves locale:
  - valid `locale` cookie → else browser language match (`gu`/`hi`/`en`) → else default
  - writes cookie + dispatches locale change event
  - redirects to `/products/{slug}`

- Product details route:
  - `/products/[slug]` uses **catalog slug** as the stable identifier
  - product title/description can change any time, **slug must never change** once printed

## Generating QR codes

### All products

```bash
npm run qr:gen
```

### Single product

```bash
npm run qr:gen:one -- --slug bhinda
```

### Local dev QR codes

```bash
npm run qr:gen:local
```

## Configuration

- `QR_BASE_URL` (optional): base domain used for encoding.
  - If not set, defaults to `https://jdseeds.in`.

Set in `.env.local` for local testing, or in CI when generating production assets.

## Operational rule (critical)

Once a QR is printed, **do not rename the product slug**. If a product needs a better display name or description, update copy in the catalog/translations — keep the same slug.

## Product add workflow (recommended)

1. Add the product to the catalog (`src/data/products.ts`).
2. If you didn't choose a slug yet, generate one from the product name using `slugify` rules (lowercase, hyphens). Keep it stable forever once QR is printed.
3. Run:

```bash
npm run catalog:check
```

4. Verify the product page in browser at `/products/{slug}`.
5. Only when you approve the slug and content, generate QR SVG(s) with `npm run qr:gen` or `npm run qr:gen:one`.

