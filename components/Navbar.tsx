'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, LOCALE_METADATA, getLocalizedPath } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const config = getInstrumentConfig();
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { label: dict.nav.home, path: '/' },
    { label: dict.nav.fingering, path: '/fingering' },
    { label: dict.nav.trills, path: '/trill-chart' },
    { label: dict.nav.reedDoctor, path: '/reed-doctor' },
    { label: dict.nav.syntheticReeds, path: '/synthetic-reeds' },
    { label: dict.nav.excerpts, path: '/excerpts' },
    { label: dict.nav.tuner, path: '/tuner' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
          : 'bg-white/70 backdrop-blur-md border-b border-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 品牌 Brand */}
          <Link
            href={getLocalizedPath('/', locale)}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm"
              style={{ backgroundColor: config.theme.primary }}
            >
              <Music className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-black text-slate-900 tracking-tight text-base block">
                {config.brandName}
              </span>
              <span className="text-[10px] text-slate-400 font-medium block">
                {config.name[locale]} · {config.brandTagline[locale]}
              </span>
            </div>
          </Link>

          {/* 桌面导航链接 */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const href = getLocalizedPath(item.path, locale);
              const isActive = pathname === href || (item.path !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={item.path}
                  href={href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                  style={isActive ? { backgroundColor: config.theme.primary } : {}}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 右侧：多语言切换与行动点 */}
          <div className="flex items-center gap-2">
            {/* 多语言下拉选择器 */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors shrink-0 whitespace-nowrap"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{LOCALE_METADATA[locale]?.nativeName || locale}</span>
                <ChevronDown className="w-3 h-3 text-slate-400 opacity-80" />
              </button>

              <div className="absolute right-0 top-full mt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 bg-white border border-slate-200/80 rounded-xl shadow-lg py-1 min-w-[120px] z-50">
                {ALL_LOCALES.map((loc) => {
                  const targetHref = getLocalizedPath(pathname, loc);
                  const isCurrent = locale === loc;
                  return (
                    <Link
                      key={loc}
                      href={targetHref}
                      className={`flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                        isCurrent
                          ? 'bg-slate-50 text-purple-700 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{LOCALE_METADATA[loc].nativeName}</span>
                      <span className="text-xs">{LOCALE_METADATA[loc].flag}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 移动端汉堡菜单按钮 */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const href = getLocalizedPath(item.path, locale);
            const isActive = pathname === href;
            return (
              <Link
                key={item.path}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive ? 'text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
                style={isActive ? { backgroundColor: config.theme.primary } : {}}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
