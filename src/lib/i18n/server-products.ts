import { readFile } from 'fs/promises';
import path from 'path';
import type { Locale } from '@/lib/i18n/config';
import type { ProductsTranslationsBySlug } from '@/lib/i18n/product-translations';

export async function loadProductsTranslationsServer(locale: Locale): Promise<ProductsTranslationsBySlug> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'products.json');
    const raw = await readFile(filePath, 'utf8');
    return (JSON.parse(raw) as ProductsTranslationsBySlug) ?? {};
  } catch {
    return {};
  }
}

