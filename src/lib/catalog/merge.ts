import type { Product } from '@/lib/schemas/product';

export type Primitive = string | number | boolean | null | undefined;

export type DeepPartial<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends object
      ? { [K in keyof T]?: DeepPartial<T[K]> }
      : T;

export type ProductOverride = DeepPartial<Product>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
}

/**
 * Deep merges two values.
 * - objects: recursively merged
 * - arrays/primitives: override replaces base when override is defined
 */
export function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) return base;

  // Array or primitive: override wins
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return override as unknown as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override)) {
    const baseValue = (base as Record<string, unknown>)[key];
    if (value === undefined) continue;

    if (isPlainObject(baseValue) && isPlainObject(value)) {
      result[key] = deepMerge(baseValue, value);
      continue;
    }

    // arrays/primitives: replace
    result[key] = value as unknown;
  }

  return result as T;
}

const TOKEN_RE = /\{\{([A-Z0-9_]+)\}\}/g;

export type ProductVariables = Record<string, string | number>;

export function replaceTokensInString(
  input: string,
  vars: ProductVariables,
  options?: { slug?: string; locale?: string; logMissing?: boolean },
): string {
  return input.replace(TOKEN_RE, (_m, tokenName: string) => {
    const value = vars[tokenName];
    if (value === undefined) {
      if (options?.logMissing) {
        const meta = [
          options.slug ? `slug=${options.slug}` : null,
          options.locale ? `locale=${options.locale}` : null,
          `token=${tokenName}`,
        ]
          .filter(Boolean)
          .join(' ');
        // Keep token visible to catch missing variables.
        // eslint-disable-next-line no-console
        console.warn(`[tokens] Missing token value {{${tokenName}}} ${meta}`);
      }
      return `{{${tokenName}}}`;
    }
    return String(value);
  });
}

export function replaceTokensDeep<T>(
  value: T,
  vars: ProductVariables,
  options?: { slug?: string; locale?: string; logMissing?: boolean },
): T {
  if (typeof value === 'string') {
    return replaceTokensInString(value, vars, options) as unknown as T;
  }

  if (Array.isArray(value)) {
    return value.map((v) => replaceTokensDeep(v, vars, options)) as unknown as T;
  }

  if (isPlainObject(value)) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = replaceTokensDeep(v, vars, options);
    }
    return out as T;
  }

  return value;
}

/**
 * Canonical product localization pipeline:
 * 1) deep merge catalog product with locale override
 * 2) replace {{TOKENS}} using productVariables[slug]
 */
export function mergeProductWithLocale(args: {
  baseProduct: Product;
  override?: ProductOverride;
  variables?: ProductVariables;
  locale?: string;
}): Product {
  const merged = deepMerge<Product>(args.baseProduct, args.override);
  if (!args.variables) return merged;

  const logMissing = process.env.NODE_ENV !== 'production';
  return replaceTokensDeep(merged, args.variables, {
    slug: args.baseProduct.slug,
    locale: args.locale,
    logMissing,
  });
}

