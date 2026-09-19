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

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Fingerprint className="w-3.5 h-3.5 shrink-0" />
          <span>Full Conservatory System · Bb3 to A6</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
          {isZh
            ? '双簧管全音域三栏一体化指法工作台'
            : isDe
            ? 'Vollständige Oboen-Grifftabelle & Studio'
            : isJa
            ? 'オーボエ完全三欄一体型運指ワークベンチ'
            : 'Definitive 3-Column Oboe Fingering Workbench'}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {isZh
            ? '精准覆盖从低音 Bb3 到超高音 A6 全音域 36 个半音。集成 SVG 矢量管体机械高亮、自适应高音五线谱、纯音 Drone 持续对音与 1200px 极清指法海报一键导出。'
            : isDe
            ? 'Präzise Abdeckung von B3 bis A6 mit SVG-Mechanik, G-Schlüssel Notenanzeige, Dauerton-Drone und 1200px Poster-Export.'
            : isJa
            ? '低音Bb3から超高音A6まで36半音を完全網羅。SVG管体キー連動、ト音記号五線譜、持続音ドローン、1200pxポスター出力に対応。'
            : 'Chromatically mapped from Low Bb3 to Altissimo A6. Featuring synchronized SVG keywork, adaptive treble staff, continuous tuning drone, and 1200px poster export.'}
        </p>
      </div>

      <OboeFingeringStudio locale={locale} />
    </div>
  );
}
