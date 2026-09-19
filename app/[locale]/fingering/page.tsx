import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fingerprint, Music, Sparkles } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OboeFingeringStudio from '@/components/fingering/OboeFingeringStudio';

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
  const alternates = getHreflangAlternates('/fingering', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Fingering Chart: Full Range Bb3 to A6 | OboLib',
    zh: '双簧管指法大全: 低音Bb3至超高音A6全音域速查 | OboLib',
    de: 'Oboen-Grifftabelle: Kompletter Tonumfang B3 bis A6 | OboLib',
    ja: 'オーボエ運指表: Bb3〜A6完全対応・ハーフホール解説 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Interactive oboe fingering chart from Bb3 to A6. Detailed guide for half-hole roll, octave keys, left-hand F, and acoustic sound preview.',
    zh: '双簧管全音域交互指法查询表（Bb3到A6）。详解食指半孔滚指、三大八度键、左手F及分叉F共鸣键，附带网页实时发声试听。',
    de: 'Interaktive Oboen-Grifftabelle von B3 bis A6. Ausführliche Anleitung für Halbloch, Oktavklappen, linkes F und akustische Klangbeispiele.',
    ja: 'Bb3からA6までのオーボエ完全運指ガイド。ハーフホールの転がし方、オクターブキー、左手F、リアルタイム音響再生に対応。',
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

export default function FingeringPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Fingerprint className="w-3.5 h-3.5 shrink-0" />
          <span>Full Conservatory System · Bb3 to A6</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {locale === 'zh'
            ? '双簧管全音域交互指法表'
            : locale === 'de'
            ? 'Vollständige Oboen-Grifftabelle'
            : locale === 'ja'
            ? 'オーボエ完全運指チャート'
            : 'Complete Oboe Fingering Chart'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {locale === 'zh'
            ? '精准覆盖双簧管全部常规及超高音区。点击音符实时查看按键高亮、食指半孔状态并播放真实双簧管谐波声音。'
            : locale === 'de'
            ? 'Präzise Darstellung des gesamten Oboen-Tonumfangs. Mit Halbloch-Anzeige, Oktavklappen und Klangerzeugung.'
            : locale === 'ja'
            ? '低音Bb3から超高音A6まで完全収録。ハーフホールの開閉状態やオクターブキーの連動をリアルタイムで確認できます。'
            : 'Chromatically mapped from Low Bb3 to Altissimo A6. Click any note to inspect key positions, half-hole vent roll, and listen to authentic acoustic tone.'}
        </p>
      </div>

      <OboeFingeringStudio locale={locale} />
    </div>
  );
}
