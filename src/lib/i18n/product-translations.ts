import type { Product } from '@/lib/schemas/product';
import { mergeProductWithLocale, type ProductOverride } from '@/lib/catalog/merge';
import { productVariables } from '@/lib/catalog/product-variables';

export type ProductsTranslationsBySlug = Record<string, ProductOverride>;

export async function loadProductsTranslations(locale: string): Promise<ProductsTranslationsBySlug> {
  try {
    const response = await fetch(`/locales/${locale}/products.json`);
    if (!response.ok) return {};
    const data = (await response.json()) as ProductsTranslationsBySlug;
    return data ?? {};
  } catch {
    return {};
  }
}

export function getTranslatedProduct(
  product: Product,
  translations?: ProductOverride,
  options?: { locale?: string },
): Product {
  return mergeProductWithLocale({
    baseProduct: product,
    override: translations,
    variables: productVariables[product.slug],
    locale: options?.locale,
  });
}

