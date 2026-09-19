import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Activity } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OboeTrillStudio from '@/components/trill/OboeTrillStudio';

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
  const alternates = getHreflangAlternates('/trill-chart', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Trill Chart: Semitone & Whole-Tone Key Guide | OboLib',
    zh: '双簧管颤音指法速查表: 半音全音颤音与杠杆键指南 | OboLib',
    de: 'Oboen-Trillertabelle: Halbton- & Ganzton-Griffe | OboLib',
    ja: 'オーボエ・トリル運指表: 半音・全音トリルとレバー解説 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Quick reference oboe trill chart for semitone and whole-tone intervals. Features animated key shaking and alternating acoustic audio simulation.',
    zh: '双簧管全音与半音颤音速查手册。涵盖专用Trill侧键与快速颤动指法，配备SVG按键脉冲高亮与真实交替颤音音频试听。',
    de: 'Schnelle Oboen-Trillertabelle für Halb- und Ganztonschritte. Mit animierter Tastenanzeige und akustischer Wechselton-Simulation.',
    ja: 'オーボエの半音および全音トリル早見表。専用トリルキーの操作とアニメーション表示、リアルな交代音再生に対応。',
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

export default function TrillChartPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
          <Activity className="w-3.5 h-3.5" />
          <span>Mechanics & Lever Guides</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {locale === 'zh'
            ? '双簧管颤音指法速查表'
            : locale === 'de'
            ? 'Oboen-Trillertabelle & Spezialhebel'
            : locale === 'ja'
            ? 'オーボエ・トリル運指一覧'
            : 'Interactive Oboe Trill Chart'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {locale === 'zh'
            ? '解决快速演奏中指法打结难题。点击任意颤音对查看专用颤音侧键（Tr1/Tr2），观察脉冲抖动按键并试听 6Hz 高频颤音声响。'
            : locale === 'de'
            ? 'Einfaches Erlernen anspruchsvoller Triller. Interaktive Erkennung der Trillerklappen mit Audio-Vorschau.'
            : locale === 'ja'
            ? '難易度の高いトリルを明快に解説。専用トリルレバーの押さえ方とリアルタイム音響シミュレーションを提供します。'
            : 'Conquer tricky orchestral trills. Inspect dedicated trill levers (Tr1/Tr2), watch animated vibrating key positions, and audition real 6Hz woodwind modulation.'}
        </p>
      </div>

      <OboeTrillStudio locale={locale} />
    </div>
  );
}
