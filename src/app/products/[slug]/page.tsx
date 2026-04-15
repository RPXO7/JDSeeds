import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/data/products';
import { Metadata } from 'next';
import { ProductDetailContent } from './product-detail-content';
import { getLocale } from '@/lib/i18n/server';
import { loadProductsTranslationsServer } from '@/lib/i18n/server-products';
import { getTranslatedProduct } from '@/lib/i18n/product-translations';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const locale = await getLocale();
  const bySlug = await loadProductsTranslationsServer(locale);
  const localizedProduct = product
    ? getTranslatedProduct(product, bySlug[product.slug], { locale })
    : undefined;

  if (!localizedProduct) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${localizedProduct.name} - Product Details | JD SEEDS`,
    description: localizedProduct.description,
    openGraph: {
      title: `${localizedProduct.name} | JD SEEDS`,
      description: localizedProduct.description,
      images: [
        {
          url: localizedProduct.image,
          alt: localizedProduct.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const locale = await getLocale();
  const bySlug = await loadProductsTranslationsServer(locale);

  if (!product) {
    notFound();
  }

  const initialMergedProduct = getTranslatedProduct(product, bySlug[product.slug], { locale });
  return (
    <ProductDetailContent
      catalogProduct={product}
      initialMergedProduct={initialMergedProduct}
      showBackLink={true}
    />
  );
}

