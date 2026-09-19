/**
 * InstruLib Base — 通用 i18n Context & 工具函数
 * ===============================================
 * 从 BSNLib src/i18n/index.tsx 提炼，去巴松化：
 * - 移除 BASSOON_KEY_NOMENCLATURE 硬引用
 * - 改为通用 instrumentTerminology 工具（每站实现）
 * - Locale 扩展为 zh/en/de/ja
 */

import React, { createContext, useContext, useState, useMemo } from 'react';
import { Locale, TranslationSchema } from './types';
import { getInstrumentConfig } from '../config/instrument.config';

export * from './types';

// ── 语言文件懒加载表 ──────────────────────────────────────
// 每站只加载自己需要的语言，不打包无关语言
const loaders: Record<Locale, () => Promise<{ default: TranslationSchema }>> = {
  zh: () => import('./locales/zh'),
  en: () => import('./locales/en'),
  de: () => import('./locales/de'),
  ja: () => import('./locales/ja'),
};

// ── 同步翻译缓存（SSR 预渲染用） ─────────────────────────
const syncCache: Partial<Record<Locale, TranslationSchema>> = {};

/**
 * 同步预加载指定语言（用于 SSR prerender 阶段）
 * 在 entry-server.tsx 的 renderPage() 调用前执行。
 */
export async function preloadTranslation(locale: Locale): Promise<TranslationSchema> {
  if (syncCache[locale]) return syncCache[locale]!;
  const mod = await loaders[locale]();
  syncCache[locale] = mod.default;
  return mod.default;
}

/**
 * 同步获取已缓存的翻译（组件内使用，需在 preload 后调用）
 */
export function getTranslation(locale: Locale): TranslationSchema {
  return syncCache[locale] ?? syncCache['en']!;
}

// ── React Context ──────────────────────────────────────────

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSchema;
  /** 支持的语言列表（来自 InstrumentConfig） */
  supportedLocales: Locale[];
}

const I18nContext = createContext<I18nContextType | null>(null);

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale?: Locale;
  /** SSR 注水时直接传入预加载的 translation */
  initialTranslation?: TranslationSchema;
}

export function I18nProvider({ children, initialLocale, initialTranslation }: I18nProviderProps) {
  const config = getInstrumentConfig();
  const defaultLocale = initialLocale ?? config.defaultLocale;

  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [translation, setTranslation] = useState<TranslationSchema>(
    initialTranslation ?? (syncCache[defaultLocale] ?? syncCache['en']!)
  );

  const setLocale = async (newLocale: Locale) => {
    if (!config.supportedLocales.includes(newLocale)) return;
    setLocaleState(newLocale);
    const t = await preloadTranslation(newLocale);
    setTranslation(t);
    // 持久化用户语言偏好
    try { localStorage.setItem('instrulib-locale', newLocale); } catch {}
    // 更新 html lang 属性
    document.documentElement.lang = newLocale;
  };

  const value = useMemo<I18nContextType>(
    () => ({ locale, setLocale, t: translation, supportedLocales: config.supportedLocales }),
    [locale, translation]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * React Hook: 在组件中使用 i18n
 *
 * @example
 * function MyComponent() {
 *   const { t, locale, setLocale } = useI18n();
 *   return <h1>{t.home.heroTitle}</h1>;
 * }
 */
export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n() must be used inside <I18nProvider>');
  }
  return ctx;
}

/**
 * 从浏览器/环境检测推荐语言（用于首次访问的语言选择）
 */
export function detectPreferredLocale(): Locale {
  const config = getInstrumentConfig();

  // 1. 本地存储的用户选择
  try {
    const stored = localStorage.getItem('instrulib-locale') as Locale;
    if (stored && config.supportedLocales.includes(stored)) return stored;
  } catch {}

  // 2. 浏览器语言
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (config.supportedLocales.includes(browserLang)) return browserLang;
  }

  // 3. 默认语言
  return config.defaultLocale;
}
