import React from 'react';
import Link from 'next/link';
import { Music, ShieldCheck, Heart } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { Locale, getLocalizedPath } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const config = getInstrumentConfig();
  const dict = getDictionary(locale);

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌列 */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: config.theme.primary }}
              >
                <Music className="w-4 h-4" />
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                {config.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {config.seo.defaultDescription}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Acoustic Physical Modeling & Verified Fingerings</span>
            </div>
          </div>

          {/* 快捷导航 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {dict.nav.scores} &amp; {dict.nav.fingering}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={getLocalizedPath('/fingering', locale)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.fingering}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/scores', locale)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.scores}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/tools', locale)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.tools}
                </Link>
              </li>
            </ul>
          </div>

          {/* 知识与专栏 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {dict.nav.knowledge}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={getLocalizedPath('/knowledge', locale)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.knowledge}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/membership', locale)}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.member}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/guide/upgrade-oboe', locale)}
                  className="hover:text-white transition-colors"
                >
                  {locale === 'zh' ? '选购升级指南' : 'Buyer Guide'}
                </Link>
              </li>
            </ul>
          </div>

          {/* 法律合规与站长联络 */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              {locale === 'zh' ? '法律与支持' : 'Trust & Legal'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={getLocalizedPath('/contact', locale)}
                  className="text-teal-400 hover:text-teal-300 transition-colors font-medium flex items-center gap-1"
                >
                  <span>{locale === 'zh' ? '联系站长 (24h答复)' : 'Contact Us (24h Reply)'}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/privacy-policy', locale)}
                  className="hover:text-white transition-colors"
                >
                  {locale === 'zh' ? '隐私保护政策' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath('/terms-of-service', locale)}
                  className="hover:text-white transition-colors"
                >
                  {locale === 'zh' ? '服务条款与免责' : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <p>© {new Date().getFullYear()} {config.brandName}. All rights reserved.</p>
            <span className="text-slate-700">·</span>
            <a href="mailto:admin@obolib.com" className="hover:text-teal-400 transition-colors font-mono">
              admin@obolib.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for {config.name[locale]} musicians worldwide</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
