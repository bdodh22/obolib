/**
 * InstruLib Base — 通用导航栏组件
 * =================================
 * 从 BSNLib Navigation.tsx 提炼，完全配置驱动：
 * - 品牌名/标语从 InstrumentConfig 读取
 * - 导航标签按 config.navTabs 动态渲染
 * - 主题色从 config.theme 注入（CSS 变量）
 * - 语言切换器读 config.supportedLocales
 *
 * 每个乐器站无需修改此文件。
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Music, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';
import { useFeatures } from '../config/feature-flags';
import { getInstrumentConfig, type Locale } from '../config/instrument.config';

// 导航标签图标映射（从 lucide-react 按需引入）
import {
  Home,
  Fingerprint,
  BookOpen,
  Wrench,
  Lightbulb,
  Bot,
  Tent,
  Star,
  Users,
  Settings,
} from 'lucide-react';

const TAB_ICONS: Record<string, React.ElementType> = {
  home: Home,
  fingering: Fingerprint,
  scores: BookOpen,
  tools: Wrench,
  knowledge: Lightbulb,
  ai: Bot,
  camp: Tent,
  kid: Star,
  membership: Users,
  admin: Settings,
};

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
  const config = getInstrumentConfig();
  const { t, locale, setLocale, supportedLocales } = useI18n();
  const { check } = useFeatures();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 滚动检测：导航栏毛玻璃加深
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // 语言显示名
  const LOCALE_LABELS: Record<Locale, string> = {
    zh: '中文',
    en: 'EN',
    de: 'DE',
    ja: '日本語',
  };

  // 过滤：只显示 config.navTabs 中且 feature 允许的标签
  const visibleTabs = config.navTabs.filter((tab) => {
    // 某些 tab 需要对应 feature 开启
    const requiresFeature: Partial<Record<string, keyof typeof config.features>> = {
      kid: 'hasKidMode',
      ai: 'hasAI',
      membership: 'hasMembership',
      admin: 'hasAdminConsole',
    };
    const req = requiresFeature[tab];
    if (req && !config.features[req]) return false;
    return true;
  });

  const getTabLabel = (tab: string): string => {
    const labels: Record<string, string> = {
      home: t.nav.home,
      fingering: t.nav.fingering,
      scores: t.nav.scores,
      tools: t.nav.tools,
      knowledge: t.nav.knowledge,
      ai: t.nav.ai,
      camp: t.nav.camp,
      kid: t.nav.kid,
      membership: t.nav.member,
      admin: t.nav.admin,
    };
    return labels[tab] ?? tab;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
          : 'bg-white/70 backdrop-blur-md border-b border-white/60'
      }`}
      style={{
        // 品牌色注入 CSS 变量，供子组件 active 状态使用
        ['--brand-primary' as string]: config.theme.primary,
        ['--brand-primary-light' as string]: config.theme.primaryLight,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── 品牌区 ── */}
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
              style={{ backgroundColor: config.theme.primary }}
            >
              <Music className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-black text-slate-900 tracking-tight text-base">
                {config.brandName}
              </span>
              <span className="hidden sm:block text-[10px] text-slate-400 font-medium -mt-0.5">
                {config.brandTagline[locale]}
              </span>
            </div>
          </button>

          {/* ── 桌面导航标签 ── */}
          <div className="hidden md:flex items-center gap-1">
            {visibleTabs.map((tab) => {
              const Icon = TAB_ICONS[tab];
              const isActive = currentTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: config.theme.primary }
                      : {}
                  }
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{getTabLabel(tab)}</span>
                </button>
              );
            })}
          </div>

          {/* ── 操作区：语言切换 + 移动菜单 ── */}
          <div className="flex items-center gap-2">
            {/* 语言切换器 */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span>{LOCALE_LABELS[locale]}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
              {/* 下拉菜单 */}
              <div className="absolute right-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-slate-200 rounded-xl shadow-lg py-1 min-w-[100px] z-10">
                {supportedLocales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                      locale === loc
                        ? 'text-white'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    style={locale === loc ? { backgroundColor: config.theme.primary } : {}}
                  >
                    {LOCALE_LABELS[loc]}
                  </button>
                ))}
              </div>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── 移动端展开菜单 ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {visibleTabs.map((tab) => {
              const Icon = TAB_ICONS[tab];
              const isActive = currentTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => { onTabChange(tab); setMobileOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive ? 'text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  style={isActive ? { backgroundColor: config.theme.primary } : {}}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{getTabLabel(tab)}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
