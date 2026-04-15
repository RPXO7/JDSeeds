export interface SlugifyOptions {
  /** Fallback used when the input becomes empty after normalization. */
  fallback?: string;
}

export function slugify(input: string, options?: SlugifyOptions): string {
  const fallback = options?.fallback ?? 'product';
  const raw = (input ?? '').trim().toLowerCase();

  // Normalize diacritics, drop non-ascii characters after normalization.
  const ascii = raw
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return ascii.length ? ascii : fallback;
}

export function ensureUniqueSlug(baseSlug: string, usedSlugs: Set<string>): string {
  const normalizedBase = slugify(baseSlug);
  if (!usedSlugs.has(normalizedBase)) return normalizedBase;

  let i = 2;
  while (usedSlugs.has(`${normalizedBase}-${i}`)) i += 1;
  return `${normalizedBase}-${i}`;
}

/**
 * Use this when adding a new product without a slug:
 * - derives slug from product name
 * - ensures uniqueness against existing slugs
 */
export function generateProductSlugFromName(args: {
  name: string;
  existingSlugs: string[];
}): string {
  const used = new Set(args.existingSlugs.map((s) => slugify(s)));
  const base = slugify(args.name);
  return ensureUniqueSlug(base, used);
}

