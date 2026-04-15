'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getDefaultLocale,
  isAllowedLocale,
  LOCALE_CHANGE_EVENT,
  parseLocaleCookie,
  setLocaleCookie,
  type Locale,
  type LocaleChangeDetail,
} from '@/lib/locale';

function resolveLocaleFromNavigator(): Locale | null {
  if (typeof navigator === 'undefined') return null;
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of langs) {
    const prefix = lang.split('-')[0]?.toLowerCase();
    if (isAllowedLocale(prefix)) return prefix;
  }
  return null;
}

export default function QrEntryPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = parseLocaleCookie(document.cookie);
    const navigatorLocale = resolveLocaleFromNavigator();
    const resolvedLocale = cookieLocale ?? navigatorLocale ?? getDefaultLocale();

    // Persist and notify (in case some UI is already mounted).
    setLocaleCookie(resolvedLocale);
    window.dispatchEvent(
      new CustomEvent<LocaleChangeDetail>(LOCALE_CHANGE_EVENT, {
        detail: { locale: resolvedLocale },
      }),
    );

    const slug = params.slug?.trim();
    if (!slug) {
      router.replace('/products');
      return;
    }
    router.replace(`/products/${slug}`);
  }, [params.slug, router]);

  // Minimal, no layout shift.
  return null;
}

