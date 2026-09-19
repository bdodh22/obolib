import enDict from '@/messages/en.json';
import zhDict from '@/messages/zh.json';
import deDict from '@/messages/de.json';
import jaDict from '@/messages/ja.json';
import { Locale } from './config';

export type Dictionary = typeof enDict;

const staticDictionaries: Record<Locale, Dictionary> = {
  en: enDict,
  zh: zhDict,
  de: deDict,
  ja: jaDict,
};

const dictionaryCache = new Map<Locale, Dictionary>();

/**
 * 同步获取指定语言字典（服务端 RSC 与客户端均支持）
 */
export function getDictionary(locale: Locale): Dictionary {
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }
  const dict = staticDictionaries[locale] || staticDictionaries.en;
  dictionaryCache.set(locale, dict);
  return dict;
}
