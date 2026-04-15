import type { ProductVariables } from '@/lib/catalog/merge';

/**
 * Optional token variables per product slug used by replaceTokensDeep.
 *
 * Example:
 * productVariables['bhinda'] = { SEED_RATE: '4–6 kg/ha' }
 * and copy can contain: "Seed rate: {{SEED_RATE}}"
 */
export const productVariables: Record<string, ProductVariables> = {};

