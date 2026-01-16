import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/data/products';
import { Metadata } from 'next';
import { ProductDetailContent } from './product-detail-content';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Product Details | JD SEEDS`,
    description: product.description,
    openGraph: {
      title: `${product.name} | JD SEEDS`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} showBackLink={true} />;
}

