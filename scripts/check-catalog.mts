import process from 'node:process';
import * as productsModule from '../src/data/products';

function slugify(input: string): string {
  const raw = (input ?? '').trim().toLowerCase();
  return raw
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
}

function getProducts(): Array<{ id?: string; slug?: string; name?: string }> {
  return (productsModule as any).products ?? (productsModule as any).default?.products ?? [];
}

function main(): void {
  const products = getProducts();

  const seen = new Set<string>();
  const errors: string[] = [];

  for (const product of products) {
    const slug = product.slug?.trim();
    const id = product.id?.trim() ?? '(missing id)';
    const name = product.name?.trim() ?? '(missing name)';

    if (!slug) {
      errors.push(`Missing slug for product id=${id} name="${name}"`);
      continue;
    }

    const normalized = slugify(slug);
    if (normalized !== slug) {
      errors.push(
        `Non-canonical slug "${slug}" (suggested "${normalized}") for product id=${id} name="${name}"`,
      );
    }

    if (seen.has(slug)) {
      errors.push(`Duplicate slug "${slug}" (product id=${id} name="${name}")`);
    }
    seen.add(slug);
  }

  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    process.exitCode = 1;
    return;
  }

  console.log(`✓ Catalog OK (${products.length} products)`);
}

main();

