import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Sliders } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import SyntheticReedsMatrix from '@/components/reeds/SyntheticReedsMatrix';

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
  const alternates = getHreflangAlternates('/synthetic-reeds', locale);

  const titles: Record<Locale, string> = {
    en: 'Légère Oboe Reeds: Strength Chart & Synthetic Guide | OboLib',
    zh: 'Légère 双簧管合成哨片硬度对照表与选型评测 | OboLib',
    de: 'Légère Oboenrohre: Stärketabelle & Vergleichsmatrix | OboLib',
    ja: 'レジェール・オーボエリード硬度換算表＆比較ガイド | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Comprehensive Légère European and American cut oboe reed hardness conversion chart. Compare natural cane strengths, tip opening, and sound reviews.',
    zh: '权威 Légère 欧洲短刮与美式长刮合成双簧管哨片硬度换算矩阵。对比天然芦苇硬度与张口度，获取专业音色评测与选型指南。',
    de: 'Umfassende Härtetabelle für Légère European Cut und American Cut Oboenrohre. Vergleich mit natürlichem Schilf, Bahnöffnung und Klangbewertungen.',
    ja: 'レジェール（ヨーロピアン＆アメリカン）オーボエリードの完全硬度換算表。天然ケーンとの硬さ比較、開き、音色レビューを掲載。',
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

export default function SyntheticReedsPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Légère European Cut Oboe Reed',
    image: 'https://obolib.com/images/legere-oboe-reed.jpg',
    description:
      'Synthetic polymer oboe reed offering weather-proof reliability, instant speaking attack, and concert pitch 440/442Hz resonance.',
    brand: {
      '@type': 'Brand',
      name: 'Légère Reeds',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '149.00',
      highPrice: '199.00',
      offerCount: '5',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>Hardness Chart & Buyer's Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'zh'
              ? '合成双簧管哨片选型与硬度换算矩阵'
              : locale === 'de'
              ? 'Synthetische Oboenrohre & Härtetabelle'
              : locale === 'ja'
              ? '樹脂製オーボエリード換算＆選定ガイド'
              : 'Synthetic Oboe Reeds Hardness Matrix'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'zh'
              ? '直击双簧管乐手核心选型痛点：将天然芦苇（Soft 至 Hard）精确换算至 Légère European Cut（68-76号）与 Ambipoly。无需泡水润湿，全天候恒定音准。'
              : locale === 'de'
              ? 'Die präzise Umrechnung von natürlichem Holz (Soft bis Hard) zu Légère European Cut (68-76). Kein Wässern nötig, sofort spielbereit.'
              : locale === 'ja'
              ? '天然ケーン（Soft〜Hard）からレジェール・ヨーロピアンカット（68〜76）への精密換算表。水分補給不要でいつでも即座に発音可能。'
              : 'Translate your natural cane preferences (Soft to Hard) directly into Légère European Cut (strength 68-76) and Ambipoly grades. Instant response, zero climate anxiety.'}
          </p>
        </div>

        <SyntheticReedsMatrix locale={locale} />
      </div>
    </>
  );
}
