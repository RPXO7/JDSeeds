'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, defaultLocale, locales } from './config';

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
    // Load locale from cookie
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1] as Locale | undefined;

    const initialLocale = (cookieLocale && locales.includes(cookieLocale)) 
      ? cookieLocale 
      : defaultLocale;
    
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
    if (!locales.includes(loc)) return;
    
    setLocaleState(loc);
    document.cookie = `locale=${loc}; path=/; max-age=31536000; SameSite=Lax`;
    loadTranslations(loc);
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('locale-change', { detail: { locale: loc } }));
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

