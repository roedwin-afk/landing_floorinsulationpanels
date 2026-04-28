import { en } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export function getLang(url: URL, base: string = '/'): Lang {
  const path = url.pathname.replace(base, '');
  return path.startsWith('es') ? 'es' : 'en';
}

export function useTranslations(lang: Lang) {
  return lang === 'es' ? es : en;
}

export function getAlternatePath(url: URL, base: string): string {
  const path = url.pathname.replace(base, '') || '';
  const isEs = path.startsWith('es/') || path === 'es';
  if (isEs) {
    const clean = path.replace(/^es\/?/, '') || '';
    return base + (clean ? clean : '');
  } else {
    return base + 'es/' + path;
  }
}