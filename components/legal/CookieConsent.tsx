'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';
import { Locale, getLocalizedPath } from '@/lib/i18n/config';

interface CookieConsentProps {
  locale: Locale;
}

export default function CookieConsent({ locale }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('obolib_cookie_consent');
      if (!consent) {
        // Delay slightly for smooth page entry
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore SSR or private mode errors
    }
  }, []);

  const updateGtagConsent = (granted: boolean) => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      });
    }
  };

  const handleAccept = () => {
    try {
      localStorage.setItem('obolib_cookie_consent', 'accepted');
    } catch {}
    updateGtagConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('obolib_cookie_consent', 'essential_only');
    } catch {}
    updateGtagConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-3xl border border-slate-700/80 p-5 shadow-2xl space-y-3.5 text-xs">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-bold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>{isZh ? '隐私偏好与 Cookie 说明' : 'Privacy & Cookie Preferences'}</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Dismiss cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-slate-300 leading-relaxed text-[11px]">
          {isZh
            ? '本站仅使用本地存储与必要 Cookie 保存音高基准（440/442Hz）与多语言偏好。遵循 GDPR 与 Google Consent Mode v2 规范，绝不收集个人隐私。'
            : isDe
            ? 'Wir verwenden essenzielle Cookies und lokalen Speicher für Stimmungspräferenzen (440/442Hz). Vollständig DSGVO- & Google Consent Mode v2-konform.'
            : isJa
            ? '当サイトはチューニング設定（440/442Hz）や言語選択の保存にのみCookieを使用します。GDPRおよび国際基準に準拠しています。'
            : 'We use essential cookies and local storage to preserve your concert pitch (440/442Hz) and language preferences in compliance with GDPR and Google Consent Mode v2.'}
        </p>

        <div className="flex items-center justify-between gap-2 pt-1">
          <Link
            href={getLocalizedPath('/privacy-policy', locale)}
            className="text-[11px] text-teal-400 hover:underline shrink-0 whitespace-nowrap"
          >
            {isZh ? '查看隐私政策' : 'Privacy Policy'}
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition-all shrink-0 whitespace-nowrap"
            >
              {isZh ? '仅必要' : 'Essential Only'}
            </button>
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-[11px] font-bold transition-all active:scale-95 shadow-sm shrink-0 whitespace-nowrap"
            >
              {isZh ? '接受并继续' : 'Accept All'}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
