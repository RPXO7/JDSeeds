# Development rules (strict)

These rules exist to protect **printed QR codes** and prevent regressions in language switching.

## QR & slug invariants (critical)

- **Never change a product slug after QR is printed.**
- Printed QR codes must always encode **`{QR_BASE_URL}/p/{slug}`**.
- **Never remove** the `/p/[slug]` route or change its semantics without explicit permission.
- Do not rename `/products/[slug]` without maintaining a stable redirect story from `/p/[slug]`.
- Generated QR SVGs must be stored in **`public/assets/qr/`** and named **`{slug}.svg`**.

## Workflow guardrails (critical)

- Do **not** generate QR codes automatically when adding/editing products.
- QR generation must be a deliberate action:
  - `npm run qr:gen` (all)
  - `npm run qr:gen:one -- --slug <slug>` (one)

## Validation (recommended)

- Before generating QRs for printing, run:
  - `npm run catalog:check`
  - `npm run i18n:check` (and optionally `npm run i18n:check:strict`)

## Locale + language system (important)

- All cookie / locale parsing / setting must live in **one place**:
  - `src/lib/locale/index.ts`
  - Do not duplicate cookie logic elsewhere.
- Product translation keys must use the catalog `slug` as identifier.
- All per-locale product overrides live in `public/locales/{locale}/products.json`.
  - Keep it valid JSON. Avoid manual copy/paste patterns that create multiple root objects.

## “Permission required” changes

Do not change any of the following without explicit permission:

- QR URL format (`/p/{slug}`)
- Output folder for QR assets (`public/assets/qr/`)
- Slug rules / slug canonicalization
- Locale cookie name and semantics (`locale=...`)
- Locale allowlist (`en`, `hi`, `gu`) unless accompanied by full translation/data updates

