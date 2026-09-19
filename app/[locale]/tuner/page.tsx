import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Music } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OboeOrchestralTunerStudio from '@/components/tuner/OboeOrchestralTunerStudio';

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
  const alternates = getHreflangAlternates('/tuner', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Tuner: 440Hz & 442Hz Concert Pitch Drone | OboLib',
    zh: '交响乐双簧管调音台: 440Hz/442Hz首席长音伴奏与音准仪 | OboLib',
    de: 'Oboen-Stimmgerät: 440Hz & 442Hz Orchester-Stimmton | OboLib',
    ja: 'オーボエ・チューナー: 440Hz & 442Hz ドローン＆ピッチ測定 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Concert pitch A4 tuner at 440Hz and 442Hz with continuous pure oboe drone generator and live microphone chromatic pitch detection.',
    zh: '交响乐首席 A4 调音标准器。支持 440Hz 与 442Hz 纯净双簧管长音持续发生器，配备高灵敏度麦克风自相关音准检测表盘。',
    de: 'Kammerton A4 Stimmgerät mit 440Hz und 442Hz. Reiner Oboen-Dauerton (Drone) und mikrofonbasierte chromatische Tonhöhenerkennung.',
    ja: '440Hzおよび442Hzのオーケストラ基準音チューナー。純粋なオーボエ・ドローン持続音生成とマイクによるリアルタイム音程測定を搭載。',
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

export default function TunerPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
          <Music className="w-3.5 h-3.5" />
          <span>Symphonic Standard A=440 / 442Hz</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {locale === 'zh'
            ? '交响乐标准双簧管调音台'
            : locale === 'de'
            ? 'Orchester-Stimmgerät & Drone'
            : locale === 'ja'
            ? 'オーケストラ標準チューナー＆ドローン'
            : 'Concert Oboe Tuner & Drone'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {locale === 'zh'
            ? '还原交响乐开场首席双簧管给全乐团校音的神圣仪式。一键开启 440Hz 或 442Hz 纯净长音伴奏，开启麦克风精准微调音分偏差（Cents）。'
            : locale === 'de'
            ? 'Der legendäre Orchester-Stimmton der Solo-Oboe. Präziser 440Hz/442Hz Dauerton und Live-Mikrofonanzeige in Cents.'
            : locale === 'ja'
            ? 'オーケストラ開演前の首席奏者によるチューニング基準音を再現。440Hz/442Hzの持続音とマイクによるセント単位の音程測定。'
            : 'Recreate the sacred orchestral tradition where the principal oboe tunes the entire symphony. Toggle pure 440Hz or 442Hz continuous drones and track your cents intonation.'}
        </p>
      </div>

      <OboeOrchestralTunerStudio locale={locale} />
    </div>
  );
}
