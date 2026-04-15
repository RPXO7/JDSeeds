import process from 'node:process';
import * as productsModule from '../src/data/products';

function getArgValue(name: string): string | undefined {
  const idx = process.argv.findIndex((arg) => arg === `--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function slugify(input: string): string {
  const raw = (input ?? '').trim().toLowerCase();
  const ascii = raw
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return ascii.length ? ascii : 'product';
}

function getProducts(): Array<{ slug?: string }> {
  return (productsModule as any).products ?? (productsModule as any).default?.products ?? [];
}

function ensureUniqueSlug(base: string, used: Set<string>): string {
  const normalized = slugify(base);
  if (!used.has(normalized)) return normalized;
  let i = 2;
  while (used.has(`${normalized}-${i}`)) i += 1;
  return `${normalized}-${i}`;
}

function main(): void {
  const name = getArgValue('name');
  if (!name) {
    console.error('Usage: npm run slug:gen -- --name "Product Name"');
    process.exitCode = 1;
    return;
  }

  const used = new Set(
    getProducts()
      .map((p) => p.slug)
      .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0),
  );

  const slug = ensureUniqueSlug(name, used);
  console.log(slug);
}

main();

