# Flow — QR generation & scan

## Goals

- A printed QR must remain valid forever.
- The QR must route farmers to the correct product page.
- The first scan should pick a reasonable language automatically.

## Canonical QR URL

- `{QR_BASE_URL}/p/{slug}`
- Example: `https://jdseeds.in/p/bhinda`

## Where files are stored

- Output: `public/assets/qr/{slug}.svg`

## Generation flow (manual, safe)

1. Add/edit product in `src/data/products.ts` (slug required and must be stable once printed).
2. Validate catalog:

```bash
npm run catalog:check
```

3. Verify in browser:
   - `/products/{slug}`
4. When approved, generate QR:

```bash
# all products
npm run qr:gen

# one product
npm run qr:gen:one -- --slug bhinda
```

## Scan flow (runtime)

1. Farmer scans QR: `/p/{slug}`
2. `/p/{slug}` resolves locale:
   - valid cookie → else `navigator.languages` match (`gu`/`hi`/`en`) → else default
3. Cookie is set, then user is redirected to `/products/{slug}`.

## Notes

- `QR_BASE_URL` can be set via env when generating assets. See `.env.example`.
- `QR_BASE_URL` is only required at **QR generation time** (script execution). The live app routing works without it.

