import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Wrench, ShieldCheck, ArrowLeft, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_SUPPLIES } from '@/data/oboeSuppliesData';
import OboeSuppliesCatalog from '@/components/supplies/OboeSuppliesCatalog';

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
  const alternates = getHreflangAlternates('/reed-doctor/supplies', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Reed Making Supplies: Profilers, Knives & Cane | OboLib',
    zh: '双簧管专业制簧工具箱与耗材指南: 刮刀与刨削机 | OboLib',
    de: 'Oboen-Rohrbauzubehör: Hobelmaschinen & Schabemesser | OboLib',
    ja: 'オーボエ製管工具・材料ガイド: ガウジング機とナイフ | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Buyer guide for professional oboe reed making equipment. Compare Reeds n Stuff profilers, Michel gougers, Landwell knives, and Chiarugi staples.',
    zh: '双簧管专业自制哨片核心工具与高客单耗材选购指南。涵盖德国Reeds n Stuff削尖机、法国Michel刨床、Landwell双面刮刀与Chiarugi铜管。',
    de: 'Einkaufsführer für professionelles Oboen-Rohrbauwerkzeug: Reeds n Stuff Schabemaschinen, Michel Innenhobel, Landwell Messer und Chiarugi Hülsen.',
    ja: 'オーボエ自作リードのための最高峰工具・材料ガイド。Reeds n Stuffプロファイラー、ミシェルガウジングマシン、ランドウェルナイフを比較。',
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

export default function ReedDoctorSuppliesPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const config = getInstrumentConfig();

  // Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: isZh ? '双簧管专业制簧工具与耗材指南' : 'Oboe Reed Making Supplies & Hardware Guide',
    description: isZh
      ? '全球顶级双簧管制作工具：包括刨削机、仿型板、刮刀、测厚表及软木铜管'
      : 'Comprehensive directory of professional oboe reed making machinery and consumables.',
    url: `${config.baseUrl}${getLocalizedPath('/reed-doctor/supplies', locale)}`,
    hasPart: OBOE_SUPPLIES.map((item) => ({
      '@type': 'Product',
      name: isZh ? item.name.zh : item.name.en,
      brand: {
        '@type': 'Brand',
        name: item.brand,
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        price: item.priceRange,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top backlink */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/reed-doctor', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回哨片诊断室' : 'Back to Reed Doctor'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          Hardware & Equipment Hub
        </span>
      </div>

      {/* Header with Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5 text-teal-600" />
          <span>Professional Master Reedmaker Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '双簧管专业制簧工具箱与耗材指南'
            : isDe
            ? 'Oboen-Rohrbauzubehör & Werkzeuge'
            : isJa
            ? 'オーボエ製管工具・材料ガイド'
            : 'Professional Oboe Reed Making Supplies'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '工欲善其事，必先利其器。双簧管演奏者的哨片自制水平决定了音色与起音的生命线。本指南汇聚全球顶级仿形机、微米内圆刨床、特种钢刮刀、千分刻度表与经典软木铜管，助您构筑高精度的专属制簧流水线。'
            : isDe
            ? 'Hochpräzise Werkzeuge für professionelle Rohrblattbauer: Schabemaschinen, Messing-Hülsen, Doppelhohlschliff-Messer und Messuhren im direkten Vergleich.'
            : isJa
            ? 'プロ奏者の生命線であるリード自作環境をサポート。最高峰のティッププロファイラー、ガウジングマシン、ランドウェルナイフ、キアルギチューブを厳選網羅。'
            : 'Uncompromising precision tools for the modern oboist: profiling machinery, French gougers, hollow-ground double-bevel knives, and standard 47mm brass staples.'}
        </p>
      </div>

      {/* Interactive Catalog */}
      <OboeSuppliesCatalog locale={locale} />

      {/* SSR In-Depth Purchasing Pedagogy */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-teal-600" />
          <span>{isZh ? '双簧管自制哨片投资阶段规划 (Step-by-Step Investment)' : 'Step-by-Step Equipment Roadmap'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-teal-700 block">
              PHASE 1 · 入门修哨组 (Budget: $200-$350)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '一把顶级双面刮刀 + 插板 + 砧板' : 'Knife, Plaque & Cutting Block'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '直接购买已刨好定型的苇片（Gouged & Shaped Cane）与 47mm 铜管。重点练习绑线拉力与手工刮出对称 Tip。'
                : 'Purchase pre-gouged shaped cane. Focus entirely on tying tension and scraping the delicate tip evenly.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-teal-700 block">
              PHASE 2 · 进阶定型组 (Budget: $500-$800)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '微米测厚仪 + 仿型模具手柄' : 'Dial Indicator & Shaper Handle'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '脱离“感觉”，用 0.01mm 测厚表量化 Heart 与 Spine 的厚度梯度。自己用模具定型（Shaping），掌控喉部宽度。'
                : 'Replace guesswork with 0.01mm dial micrometer measurements. Shape your own cane to dictate throat acoustics.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-teal-700 block">
              PHASE 3 · 首席大师流水线 (Budget: $3,000+)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '高精度内圆刨床 + 自动削尖机' : 'Gouging Machine & Tip Profiler'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '从 10-10.5mm 原筒芦苇管自己劈裂、预刨、精刨。彻底掌控芦苇硬度与弹性，实现哨片 90% 以上超高成活率。'
                : 'Process raw tubular cane from scratch. Full command over cane flex and density for consistent 90%+ concert yield.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
