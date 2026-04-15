'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale } from './config';
import {
  LOCALE_CHANGE_EVENT,
  isAllowedLocale,
  parseLocaleCookie,
  setLocaleCookie as writeLocaleCookie,
  type LocaleChangeDetail,
} from '@/lib/locale';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const initialLocale = parseLocaleCookie(document.cookie) ?? defaultLocale;
    setLocaleState(initialLocale);
    loadTranslations(initialLocale);
  }, []);

  const loadTranslations = async (loc: Locale) => {
    try {
      const response = await fetch(`/locales/${loc}/common.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error(`Failed to load translations for ${loc}:`, error);
    }
  };

  const setLocale = (loc: Locale) => {
    if (!isAllowedLocale(loc)) return;
    setLocaleState(loc);
    writeLocaleCookie(loc);
    loadTranslations(loc);

    window.dispatchEvent(
      new CustomEvent<LocaleChangeDetail>(LOCALE_CHANGE_EVENT, { detail: { locale: loc } }),
    );
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    return value ?? fallback ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

