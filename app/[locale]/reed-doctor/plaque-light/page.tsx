import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sun } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OboePlaqueLightSimulator from '@/components/reed/OboePlaqueLightSimulator';

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
  const alternates = getHreflangAlternates('/reed-doctor/plaque-light', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Reed Plaque Light: Scraping Simulator | OboLib',
    zh: '双簧管插板透光微米刮修模拟器: 逆光阴影与刀功处方 | OboLib',
    de: 'Oboenrohr-Gegenlicht-Simulator: Schaben mit Zunge | OboLib',
    ja: 'オーボエ・プラーク透光シミュレーター: 逆光影＆微細調整 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Virtual backlit oboe reed plaque scraper. Inspect optical shadows of Tip, Heart, and Spine with micrometer knife pressure and acoustic resistance feedback.',
    zh: '双簧管插板迎光阴影虚拟工坊。实时监测尖端Tip、心脏Heart与脊柱Spine透光度演变，模拟刮刀削片与高音音分偏移防损预警。',
    de: 'Virtueller Oboenrohr-Schabesimulator im Gegenlicht. Kontrolliere optische Schatten von Spitze, Herz und Grat mit akustischer Rückmeldung.',
    ja: 'プラークを挟んだ逆光シミュレーション。チップ、ハート、スパインの影を観察しながらミクロン単位で削りと音程変化を体感。',
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

export default function PlaqueLightPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Inspect and Scrape an Oboe Reed with a Plaque under Light',
    description:
      'Detailed visual guide on evaluating oboe reed cane translucency using a steel plaque and backlighting to adjust tip, heart, and spine.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Insert Plaque between Blades',
        text: 'Gently slide a flat steel or obsidian plaque between reed tips without splitting edges.',
      },
      {
        '@type': 'HowToStep',
        name: 'Check Tip Translucency',
        text: 'Hold against 5000K desk lamp. Tip should show pale even glow around 0.08mm.',
      },
      {
        '@type': 'HowToStep',
        name: 'Preserve Heart Shadow',
        text: 'Ensure darker amber inverted triangle remains behind tip to maintain intonation center.',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5" />
            <span>Optics & Micrometer Acoustics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'zh'
              ? '双簧管插板透光微米刮修模拟器'
              : locale === 'de'
              ? 'Oboen-Gegenlicht-Schabesimulator'
              : locale === 'ja'
              ? 'オーボエ・プラーク透光シミュレーター'
              : 'Oboe Reed Backlight Plaque Simulator'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'zh'
              ? '双簧管削片的核心秘诀在于看懂插板逆光下的芦苇纤维阴影。点击分区下刀微削，实时观察透光度变化与高音 F5 音分偏移预警。'
              : locale === 'de'
              ? 'Das Geheimnis des Rohbaus liegt im Gegenlicht-Schattenbild der Zunge. Schabe mikrometergenau und beobachte die akustische Ansprache.'
              : locale === 'ja'
              ? 'リード調整の真髄はプラークを通した逆光の影にあります。各エリアをナイフで削り、透光度とピッチの微細な変化をリアルタイム確認。'
              : 'Master the optical shadow through the plaque. Execute micron-level knife strokes, inspect real-time translucency gradients, and guard against high F5 intonation sag.'}
          </p>
        </div>

        <OboePlaqueLightSimulator locale={locale} />
      </div>
    </>
  );
}
