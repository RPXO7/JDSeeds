import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import * as productsModule from '../src/data/products';

type Locale = 'en' | 'hi' | 'gu';

function getProducts(): Array<{ slug?: string }> {
  return (productsModule as any).products ?? (productsModule as any).default?.products ?? [];
}

function getCatalogSlugs(): string[] {
  return getProducts()
    .map((p) => p.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
    .sort();
}

async function readJsonFile<T>(filePath: string): Promise<T> {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function getArgFlag(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

async function main(): Promise<void> {
  const locales: Locale[] = ['en', 'hi', 'gu'];
  const strict = getArgFlag('strict');

  const catalogSlugs = getCatalogSlugs();
  const catalogSet = new Set(catalogSlugs);

  const errors: string[] = [];
  const warnings: string[] = [];

  for (const locale of locales) {
    const productsPath = path.join(process.cwd(), 'public', 'locales', locale, 'products.json');
    const commonPath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');

    if (!(await fileExists(productsPath))) {
      errors.push(`Missing file: public/locales/${locale}/products.json`);
      continue;
    }

    if (!(await fileExists(commonPath))) {
      warnings.push(`Missing file: public/locales/${locale}/common.json`);
    } else {
      try {
        await readJsonFile<Record<string, unknown>>(commonPath);
      } catch (e: any) {
        errors.push(
          `Invalid JSON in public/locales/${locale}/common.json (${String(e?.message ?? e)})`,
        );
      }
    }

    let bySlug: Record<string, unknown> = {};
    try {
      bySlug = await readJsonFile<Record<string, unknown>>(productsPath);
    } catch (e: any) {
      errors.push(
        `Invalid JSON in public/locales/${locale}/products.json (${String(e?.message ?? e)})`,
      );
      continue;
    }

    const overrideSlugs = Object.keys(bySlug).sort();

    // Unknown slugs in translations
    for (const slug of overrideSlugs) {
      if (!catalogSet.has(slug)) {
        errors.push(`Locale ${locale}: unknown slug in products.json: "${slug}"`);
      }
    }

    // Missing slugs (strict mode)
    if (strict) {
      for (const slug of catalogSlugs) {
        if (!Object.prototype.hasOwnProperty.call(bySlug, slug)) {
          errors.push(`Locale ${locale}: missing override entry for slug "${slug}"`);
        }
      }
    } else {
      // Non-strict: just warn if a locale has zero overrides (usually misconfigured)
      if (overrideSlugs.length === 0) {
        warnings.push(`Locale ${locale}: products.json has 0 entries`);
      }
    }
  }

  for (const w of warnings) console.warn(`⚠ ${w}`);
  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    process.exitCode = 1;
    return;
  }

  console.log('✓ i18n OK');
  if (strict) {
    console.log('  (strict mode: every catalog slug exists in every locale products.json)');
  } else {
    console.log('  (non-strict: validates JSON + forbids unknown slugs)');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

