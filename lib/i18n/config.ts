import { getInstrumentConfig, type Locale } from '@/src/config/instrument.config';

export type { Locale };

export const SUBPATH_LOCALES: Locale[] = ['zh', 'de', 'ja'];
export const ALL_LOCALES: Locale[] = ['en', 'zh', 'de', 'ja'];

export interface LocaleMeta {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

export const LOCALE_METADATA: Record<Locale, LocaleMeta> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
};

/**
 * 获取本地化 URL 路径。
 * 默认语言 (en) 使用根路径 /，其他语言使用子路径 (如 /de/scores)
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  let cleanPath = pathname;
  for (const loc of SUBPATH_LOCALES) {
    if (cleanPath === `/${loc}` || cleanPath === `/${loc}/`) {
      cleanPath = '/';
      break;
    } else if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    }
  }

  if (targetLocale === 'en') {
    return cleanPath === '' ? '/' : cleanPath;
  }

  if (cleanPath === '/' || cleanPath === '') {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
}

/**
 * 生成符合 Google 标准的 hreflang alternate 标签与 canonical
 */
export function getHreflangAlternates(subpath: string, currentLocale: Locale = 'en') {
  const config = getInstrumentConfig();
  const baseUrl = config.baseUrl;

  let cleanPath = subpath;
  for (const loc of SUBPATH_LOCALES) {
    if (cleanPath === `/${loc}` || cleanPath === `/${loc}/`) {
      cleanPath = '/';
      break;
    } else if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    }
  }
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  const enUrl = cleanPath === '/' ? baseUrl : `${baseUrl}${cleanPath}`;
  const canonicalUrl =
    currentLocale === 'en'
      ? enUrl
      : cleanPath === '/'
      ? `${baseUrl}/${currentLocale}`
      : `${baseUrl}/${currentLocale}${cleanPath}`;

  const languages: Record<string, string> = {
    en: enUrl,
    zh: cleanPath === '/' ? `${baseUrl}/zh` : `${baseUrl}/zh${cleanPath}`,
    de: cleanPath === '/' ? `${baseUrl}/de` : `${baseUrl}/de${cleanPath}`,
    ja: cleanPath === '/' ? `${baseUrl}/ja` : `${baseUrl}/ja${cleanPath}`,
    'x-default': enUrl,
  };

  return {
    canonical: canonicalUrl,
    languages,
  };
}
