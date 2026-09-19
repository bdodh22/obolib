import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, ArrowLeft, Lock, Eye, Database, Globe } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return ALL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates('/privacy-policy', locale);

  const titles: Record<Locale, string> = {
    en: 'Privacy Policy: Data Protection & Cookies | OboLib',
    zh: '隐私政策: 数据保护与Cookie透明准则 | OboLib',
    de: 'Datenschutzerklärung: Cookies & DSGVO | OboLib',
    ja: 'プライバシーポリシー: 個人情報保護方針 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Official privacy policy for OboLib.com. Learn how we safeguard user privacy, local storage usage, Web Audio processing, and cookie preferences.',
    zh: 'OboLib 双簧管工坊官方隐私保护政策。严格遵守 GDPR 与 CCPA 国际规范，声明纯本地 Web Audio 声学计算，绝不收集或出售个人数据。',
    de: 'Datenschutzerklärung von OboLib.com. Vollständig DSGVO-konform mit transparenter Darstellung von Cookies, Web Audio und lokaler Speicherung.',
    ja: 'OboLib 公式プライバシーポリシー。GDPRおよび国際基準に準拠し、Web Audioローカル処理とCookie利用について透明に説明します。',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: config.brandName,
      type: 'article',
    },
  };
}

export default function PrivacyPolicyPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const config = getInstrumentConfig();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isZh ? 'OboLib 隐私政策' : 'OboLib Privacy Policy',
    description: 'Privacy policy and data protection standards governing OboLib.com.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/privacy-policy', locale)}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top backlink */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回首页' : 'Back to Home'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
          GDPR &amp; CCPA Compliant
        </span>
      </div>

      {/* Header with Single H1 */}
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Trust &amp; Transparency Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '隐私政策与数据保护声明'
            : isDe
            ? 'Datenschutzerklärung'
            : isJa
            ? 'プライバシーポリシー'
            : 'Privacy Policy & Data Standards'}
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last Updated: September 19, 2026 · Official Legal Document
        </p>
      </div>

      {/* Policy Content Sections */}
      <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '1. 我们的核心隐私原则' : '1. Core Privacy Commitment'}</span>
          </h2>
          <p>
            {isZh
              ? 'OboLib（以下简称“我们”或“本站”）深知双簧管乐手与专业音乐家对数字隐私的重视。我们承诺：绝不出售、出租或泄露任何访客的个人信息，全站交互工具（包括调音器、指法图、刮削模拟器）默认在您的设备端完全本地执行。'
              : 'OboLib ("we", "us") is dedicated to protecting the privacy of musicians worldwide. We never sell or lease user data. All our core tools—including fingering charts, tuners, and reed simulators—run entirely client-side in your browser.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <Eye className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '2. Web Audio 与麦克风权限说明' : '2. Web Audio & Microphone Processing'}</span>
          </h2>
          <p>
            {isZh
              ? '当您使用“首席调音台”或“首席音准挑战仪”时，浏览器会向您请求麦克风临时录音权限。请放心：麦克风采集的音频波形仅通过浏览器自相关算法在本地内存中进行微秒级基频检测（Hz 计算），绝不上传、不录音、不存储在任何云端服务器上。'
              : 'When launching our pitch detection tools, browser microphone access is requested strictly for real-time local frequency analysis. Audio frames are processed instantaneously in your browser memory and never recorded, transmitted, or stored on remote servers.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <Database className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '3. Cookie 与本地存储用途' : '3. Cookies & Local Storage'}</span>
          </h2>
          <p>
            {isZh
              ? '本站仅使用必要的本地存储（LocalStorage）来保存您的语言偏好（如 en, zh, de, ja）以及调音器基准频率（440Hz 或 442Hz）记忆。面向国际访客，我们遵循 Google Consent Mode v2 规范，尊重您的 Cookie 授权选择。'
              : 'We utilize essential local storage solely to remember your preferred language and concert tuning pitch (440Hz vs 442Hz). In compliance with Google Consent Mode v2, non-essential analytical cookies are only initialized upon explicit user consent.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{isZh ? '4. 隐私咨询与数据删除权利' : '4. Inquiries & Data Rights'}</span>
          </h2>
          <p>
            {isZh
              ? '依据 GDPR 与 CCPA，您拥有查阅、更正或要求删除个人信息的完整权利。若您对本隐私政策有任何疑问，请随时致信站长官方信箱：admin@obolib.com，我们承诺在 24 小时内正式回复。'
              : 'Under GDPR and CCPA, you retain full rights to request data access or deletion. For any privacy inquiries, reach our editorial desk at admin@obolib.com; we guarantee a formal response within 24 hours.'}
          </p>
        </section>
      </div>
    </div>
  );
}
