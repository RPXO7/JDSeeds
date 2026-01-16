export const locales = ['en', 'hi', 'gu'] as const;
export const defaultLocale = 'gu'; // Gujarati as default
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  gu: 'ગુજરાતી',
};

