import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Clock, CheckCircle2 } from 'lucide-react';
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
  const alternates = getHreflangAlternates('/contact', locale);

  const titles: Record<Locale, string> = {
    en: 'Contact OboLib: Inquiries & Support | OboLib',
    zh: '联系我们与站长支持: 24小时内答复 | OboLib',
    de: 'Kontakt & Support: Antwort in 24 Stunden | OboLib',
    ja: 'お問い合わせ・サポート: 24時間以内返信 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Get in touch with the OboLib editorial and acoustic team. Email admin@obolib.com with guaranteed response within 24 hours.',
    zh: '联系 OboLib 双簧管工坊与声学技术团队。站长邮箱 admin@obolib.com，承诺在 24 小时内给您详细专业答复。',
    de: 'Kontaktieren Sie das OboLib Redaktions- und Akustikteam per E-Mail an admin@obolib.com. Garantierte Antwort innerhalb von 24 Stunden.',
    ja: 'OboLib 編集部・音響工学チームへの連絡窓口。admin@obolib.com までメールでお問い合わせください。24時間以内に必ず返信します。',
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
      type: 'website',
    },
  };
}

export default function ContactPage({ params }: PageProps) {
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
    '@type': 'ContactPage',
    name: isZh ? '联系我们' : 'Contact Us',
    description: 'Official contact portal for OboLib.com. Guaranteed replies within 24 hours.',
    url: `${config.baseUrl}${getLocalizedPath('/contact', locale)}`,
    mainEntity: {
      '@type': 'Organization',
      name: config.brandName,
      email: 'admin@obolib.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'admin@obolib.com',
        contactType: 'customer support',
        availableLanguage: ['English', 'Chinese', 'German', 'Japanese'],
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header with Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>24-Hour Response Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '联系我们与站长支持'
            : isDe
            ? 'Kontaktieren Sie uns'
            : isJa
            ? 'お問い合わせ・サポート'
            : 'Contact OboLib Editorial & Support'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '无论是双簧管指法求证、哨片诊断疑难、乐团考试曲目建议，还是技术漏洞反馈与商业合作，我们始终倾听。站长与声学团队承诺在 24 小时内给予详尽答复。'
            : isDe
            ? 'Ob Grifffragen, Rohrbau-Probleme, Repertoire-Vorschläge oder geschäftliche Anfragen: Wir antworten garantiert innerhalb von 24 Stunden.'
            : isJa
            ? '運指の確認、リード調整の疑問、オーケストラ曲の相談、不具合報告や提携のご提案まで。編集部が24時間以内に丁寧にご返答いたします。'
            : 'Whether you need fingering verifications, reed diagnosis advice, audition repertoire questions, or business partnerships: we guarantee a detailed reply within 24 hours.'}
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Official Email & Trust Cards */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-teal-700 tracking-wider block">
                DIRECT EMAIL INBOX
              </span>
              <h3 className="text-xl font-black text-slate-900">
                {isZh ? '站长官方直联邮箱' : 'Direct Editorial Mail'}
              </h3>
              <p className="text-xs text-slate-500">
                {isZh
                  ? '点击可直接调起您的邮件客户端，或复制此邮箱：'
                  : 'Click to open your email client or copy the address below:'}
              </p>
            </div>

            <a
              href="mailto:admin@obolib.com"
              className="group flex items-center justify-between p-4 rounded-2xl bg-teal-50/80 border border-teal-200/80 hover:bg-teal-100/80 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-mono font-black text-teal-950 block">
                    admin@obolib.com
                  </span>
                  <span className="text-[11px] text-teal-700 block">
                    {isZh ? '点击发信 · 24小时内答复' : 'Click to send · 24h response'}
                  </span>
                </div>
              </div>
            </a>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{isZh ? '承诺工作日与周末 24 小时内答复' : 'Guaranteed 24-hour reply on all days'}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{isZh ? '支持中文、英文、德文、日文多语种来信' : 'English, Chinese, German & Japanese supported'}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{isZh ? '学术探讨、商业采购与勘误反馈均有专人跟进' : 'Academic inquiries, gear reviews & bug reports'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Direct Contact Form */}
        <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900">
              {isZh ? '在线快速留言' : 'Send an Instant Note'}
            </h3>
            <p className="text-xs text-slate-500">
              {isZh ? '留言将直接同步至站长信箱 admin@obolib.com' : 'Your message will be sent directly to admin@obolib.com'}
            </p>
          </div>

          <ContactForm locale={locale} />
        </div>
      </div>
    </div>
  );
}
