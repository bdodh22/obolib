import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OrchestraConcertATuner from '@/components/tuner/OrchestraConcertATuner';

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
  const alternates = getHreflangAlternates('/tools/orchestra-tuner', locale);

  const titles: Record<Locale, string> = {
    en: 'Orchestral Tuner: Concert A 440Hz / 442Hz | OboLib',
    zh: '交响乐首席A音校音实战仪: 440/442Hz仪式与稳定性测验 | OboLib',
    de: 'Orchester-Kammerton A4: 440Hz / 442Hz Stimmzeremonie | OboLib',
    ja: 'オーケストラ首席A音チューナー: 440/442Hz基準音実戦儀 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Orchestral principal oboe concert pitch A tuner. Experience the 15-second winds-to-strings ceremony and take the 10-second ±3 cents stability challenge.',
    zh: '交响乐团首席双簧管 A 音实战给音仪式。内置15秒管乐/弦乐交替倒计时与麦克风 ±3 音分持续稳定度挑战测验。',
    de: 'Orchester-Stimmzeremonie der Solo-Oboe. Mit 15-Sekunden-Countdown für Bläser und Streicher sowie Stabilitäts-Challenge über das Mikrofon.',
    ja: 'オーケストラ首席オーボエのA音チューニング実戦儀。15秒カウントダウンのセクション調律とマイクによる±3セント耐久測定を搭載。',
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

export default function OrchestraTunerPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Orchestral Principal Oboe Tuner',
    url: 'https://obolib.com/tools/orchestra-tuner',
    description:
      'Symphonic concert pitch A tuning ritual simulator with 15-second sectional countdowns and real-time cents stability challenges for oboists.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Symphonic Tradition & Pitch Stability</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'zh'
              ? '交响乐团首席 A 音校音实战仪'
              : locale === 'de'
              ? 'Orchester-Kammerton A4 Stimmzeremonie'
              : locale === 'ja'
              ? 'オーケストラ首席A音校音実戦儀'
              : 'Orchestral Principal A Tuning Ritual'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'zh'
              ? '全团静默，首席给音。模拟真实的管乐（15秒）➔ 弦乐 ➔ 大提琴 D 弦校准全流程，并挑战能否吹出 ±3 音分内持续 10 秒的首席级稳定 A 音。'
              : locale === 'de'
              ? 'Simuliere die traditionelle Stimmfolge der Solo-Oboe für Bläser und Streicher und teste deine Intonationsstabilität.'
              : locale === 'ja'
              ? '管楽器（15秒）から弦楽器、チェロD線への調律プロセスを再現。±3セント以内で10秒間キープする首席チャレンジに挑戦。'
              : 'Experience the authentic oboe concert tuning ritual (winds, strings, cellos) and test if your embouchure can hold within ±3 cents for 10 seconds.'}
          </p>
        </div>

        <OrchestraConcertATuner locale={locale} />
      </div>
    </>
  );
}
