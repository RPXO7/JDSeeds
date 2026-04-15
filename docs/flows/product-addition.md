# Flow — adding a product safely

## Goals

- Slugs remain stable forever once a QR is printed.
- Product title/description/features can change without breaking the QR.

## Steps

1. Add a product entry in `src/data/products.ts`.
2. Choose a slug:
   - Prefer manually chosen stable slug.
   - If you ask the assistant to generate it, it should be derived from product name (lowercase + hyphens) and checked for uniqueness.
3. Run validation:

```bash
npm run catalog:check
```

4. Open in browser and verify:
   - `/products/{slug}`
5. Add translations as needed:
   - `public/locales/gu/products.json`
   - `public/locales/hi/products.json`
   - `public/locales/en/products.json`
6. Only after you approve the slug, generate QR (see `docs/flows/qr-generation.md`).

## Non-negotiables

- Never change slug after printing.
- QR generation is never automatic.

