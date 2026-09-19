import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import OboeReedDoctorStudio from '@/components/reed/OboeReedDoctorStudio';

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
  const alternates = getHreflangAlternates('/reed-doctor', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Reed Doctor: Scraping & Intonation Clinic | OboLib',
    zh: '双簧管哨片诊断室: 刮修微调指南与病症处方 | OboLib',
    de: 'Oboen-Rohrbau-Doktor: Schabeanleitung & Intonationsklinik | OboLib',
    ja: 'オーボエ・リード診断室: 削り方ガイド＆トラブル解決 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Interactive oboe reed clinic analyzing Tip, Heart, Spine, Back, and 47mm Staple. Virtual knife simulation, translucency test, and scraping adjustments.',
    zh: '双簧管哨片交互诊断诊所。针对尖端Tip、心脏Heart、脊梁Spine、背部Back与47mm铜管进行分区诊断、透光度测试与微米级刮刀处方。',
    de: 'Interaktive Rohrbauklinik für Spitze, Herz, Grat, Rücken und 47mm Hülse. Mit virtueller Messersimulation und gezielten Schabetipps.',
    ja: 'チップ、ハート、スパイン、バック、47mm真鍮ステープルを詳細に診断。仮想ナイフシミュレーションと最適なリード調整法を提案。',
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

export default function ReedDoctorPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Scrape and Adjust an Oboe Reed',
    description:
      'Step-by-step anatomical guide for balancing an oboe reed across tip, heart, spine, and back using a scraping knife and dial indicator.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Examine Tip Responsiveness',
        text: 'Inspect front 2-3mm for attack response at pianissimo.',
      },
      {
        '@type': 'HowToStep',
        name: 'Balance Heart & Spine',
        text: 'Preserve center thickness while smoothing lateral blend channels.',
      },
      {
        '@type': 'HowToStep',
        name: 'Open Back Windows for Low Register',
        text: 'Scrape forward above the thread binding to free low note speech.',
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acoustic Reed Clinic & Calibration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'zh'
              ? '双簧管哨片诊断室'
              : locale === 'de'
              ? 'Oboen-Rohrbau-Doktor'
              : locale === 'ja'
              ? 'オーボエ・リード診断室'
              : 'Oboe Reed Doctor & Workshop'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'zh'
              ? '哨片是双簧管的声学生命线。交互式剖析尖端（Tip）、心脏（Heart）、中脊（Spine）、背坡（Back）与 47mm 铜软木管，模拟刮刀削片并获取精准修调处方。'
              : locale === 'de'
              ? 'Das Rohr ist die klangliche Seele der Oboe. Diagnostiziere Bahn, Herz, Grat und Hülse mit interaktiver Messersimulation.'
              : locale === 'ja'
              ? 'リードはオーボエ演奏の生命線です。先端チップ、ハート、スパイン、バック、真鍮ステープルを解剖学的に診断し、最適な調整方法を導きます。'
              : 'The reed is the vocal soul of the oboe. Interactively dissect the tip, heart, spine, back, and 47mm staple with virtual scraping simulation and intonation prescriptions.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={getLocalizedPath('/reed-doctor/plaque-light', locale)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>🔬 {locale === 'zh' ? '插板透光模拟器' : 'Plaque Light Studio'}</span>
            </Link>
            <Link
              href={getLocalizedPath('/reed-doctor/supplies', locale)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>🛠️ {locale === 'zh' ? '专业制簧工具与耗材' : 'Reed Making Supplies'}</span>
            </Link>
          </div>
        </div>

        <OboeReedDoctorStudio locale={locale} />
      </div>
    </>
  );
}
