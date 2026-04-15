# Flow — language switching (gu/hi/en)

## Storage & persistence

- Locale is stored as a cookie: `locale=<en|hi|gu>`
- Cookie logic lives only in: `src/lib/locale/index.ts`

## UI switching flow

1. User changes language via the language switcher.
2. Locale cookie is updated.
3. A custom event is dispatched: `LOCALE_CHANGE_EVENT` (`locale-change`).
4. UI strings re-render using `public/locales/{locale}/common.json`.
5. Product copy re-renders using `public/locales/{locale}/products.json` merged onto catalog data.

## Product translation strategy

- Catalog is the base truth: `src/data/products.ts`
- Locale overrides: `public/locales/{locale}/products.json` keyed by product `slug` (overrides can be partial).
- Merge uses a deep-merge strategy so overriding one nested key doesn't delete siblings.
- Token replacement is supported via `{{TOKEN}}` and `src/lib/catalog/product-variables.ts`.
- Product detail page merges starting from catalog every time to avoid stacked merges.

## HTML lang

- `DocumentHtmlLang` updates `document.documentElement.lang` whenever locale changes.

