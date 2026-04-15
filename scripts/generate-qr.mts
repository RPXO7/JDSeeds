import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import QRCode from 'qrcode';
import * as productsModule from '../src/data/products';

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

function getArgValue(name: string): string | undefined {
  const idx = process.argv.findIndex((arg) => arg === `--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function getBaseUrl(): string {
  const argBaseUrl = getArgValue('baseUrl');
  const envBaseUrl = process.env.QR_BASE_URL;
  const raw = argBaseUrl ?? envBaseUrl ?? 'https://jdseeds.in';
  return raw.replace(/\/+$/, '');
}

function getTargetSlug(): string | undefined {
  const slug = getArgValue('slug');
  return slug?.trim() || undefined;
}

function getAllSlugs(): string[] {
  const products =
    (productsModule as any).products ?? (productsModule as any).default?.products ?? [];
  const slugs = (products as Array<{ slug?: string }>)
    .map((p) => p.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0);
  // stable output order
  return Array.from(new Set(slugs)).sort();
}

async function ensureDir(dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true });
}

async function writeQrSvg(options: {
  outDir: string;
  slug: string;
  url: string;
  errorCorrectionLevel: ErrorCorrectionLevel;
  margin: number;
  scale: number;
}): Promise<void> {
  const svg = await QRCode.toString(options.url, {
    type: 'svg',
    errorCorrectionLevel: options.errorCorrectionLevel,
    margin: options.margin,
    scale: options.scale,
  });

  const outPath = path.join(options.outDir, `${options.slug}.svg`);
  await fs.writeFile(outPath, svg, 'utf8');
}

async function main(): Promise<void> {
  const baseUrl = getBaseUrl();
  const outDir = path.join(process.cwd(), 'public', 'assets', 'qr');
  const targetSlug = getTargetSlug();

  const slugs = targetSlug ? [targetSlug] : getAllSlugs();
  const knownSlugs = new Set(getAllSlugs());

  if (targetSlug && !knownSlugs.has(targetSlug)) {
    console.error(
      `Unknown slug "${targetSlug}". Add it to the catalog first (src/data/products.ts).`,
    );
    process.exitCode = 1;
    return;
  }

  await ensureDir(outDir);

  const errorCorrectionLevel: ErrorCorrectionLevel = 'H';
  const margin = 2;
  const scale = 8;

  for (const slug of slugs) {
    const url = `${baseUrl}/p/${slug}`;
    await writeQrSvg({ outDir, slug, url, errorCorrectionLevel, margin, scale });
    console.log(`✓ ${slug} -> ${url} -> public/assets/qr/${slug}.svg`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

