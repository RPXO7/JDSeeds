'use client';

import { useI18n } from '@/lib/i18n/client';
import { locales, localeNames } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-[#1B5E20] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
