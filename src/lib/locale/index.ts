import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';

/** Single allowlist for locale validation (same as app i18n config). */
export const ALLOWED_LOCALES = locales;

export type { Locale };

export const LOCALE_CHANGE_EVENT = 'locale-change' as const;

export interface LocaleChangeDetail {
  locale: Locale;
}

export function isAllowedLocale(value: string | undefined | null): value is Locale {
  return !!value && (ALLOWED_LOCALES as readonly string[]).includes(value);
}

/** Validates a bare locale value (e.g. cookie value). */
export function parseLocaleValue(value: string | undefined | null): Locale | null {
  return isAllowedLocale(value) ? value : null;
}

/**
 * Reads `locale=` from a cookie header or `document.cookie` string.
 * Invalid values return null.
 */
export function parseLocaleCookie(cookieHeader: string | null | undefined): Locale | null {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(';');
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed.startsWith('locale=')) continue;
    const raw = trimmed.slice('locale='.length).trim();
    return parseLocaleValue(raw);
  }
  return null;
}

const DEFAULT_MAX_AGE = 31536000;

/**
 * Sets the locale cookie for the browser. Use from client only.
 * On HTTPS, appends `Secure`. Always `SameSite=Lax` and `Path=/`.
 */
export function setLocaleCookie(locale: Locale, options?: { maxAge?: number }): void {
  if (typeof document === 'undefined') return;
  if (!isAllowedLocale(locale)) return;
  const maxAge = options?.maxAge ?? DEFAULT_MAX_AGE;
  const secure =
    typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `locale=${locale}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

/** BCP 47 `lang` for <html lang="…"> */
export function localeToHtmlLang(locale: Locale): string {
  return locale;
}

export function getDefaultLocale(): Locale {
  return defaultLocale;
}
