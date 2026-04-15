'use client';

import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n/client';
import { localeToHtmlLang } from '@/lib/locale';

export function DocumentHtmlLang() {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = localeToHtmlLang(locale);
  }, [locale]);

  return null;
}
