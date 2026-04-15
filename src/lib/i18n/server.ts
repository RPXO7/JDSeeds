import { cookies } from 'next/headers';
import { getDefaultLocale, parseLocaleValue, type Locale } from '@/lib/locale';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  return parseLocaleValue(localeCookie) ?? getDefaultLocale();
}

export async function setLocaleCookie(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 31536000, // 1 year
    sameSite: 'lax',
  });
}

