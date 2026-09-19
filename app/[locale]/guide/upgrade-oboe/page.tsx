import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, Music, Check, ShieldCheck, ArrowRight, Sparkles, HelpCircle, Layers } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_INSTRUMENT_MODELS } from '@/data/oboeBuyerGuideData';

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
  const alternates = getHreflangAlternates('/guide/upgrade-oboe', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Buyer & Upgrade Guide: Lorée & Marigaux | OboLib',
    zh: '双簧管选购与升级指南: 罗黑Lorée/玛戈Marigaux/雅马哈 | OboLib',
    de: 'Oboen-Kaufratgeber: Lorée, Marigaux & Yamaha | OboLib',
    ja: 'オーボエ購入・アップグレード比較ガイド: ロレー＆マリゴ | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Complete oboe buyer and upgrade guide. In-depth review of F.Lorée Royale, Marigaux 901, Yamaha Custom YOB-841, Greenline materials, and key systems.',
    zh: '从初学进阶到专业交响乐团的终极双簧管选购指南。深度评测法式名管F.Lorée Royale、Marigaux 901、雅马哈Custom 841/441与防裂Greenline复合材质。',
    de: 'Umfassender Kaufratgeber für Oboen: F.Lorée Royale, Marigaux 901, Yamaha Custom YOB-841, Greenline-Materialien und Mechanik-Ausstattung im Vergleich.',
    ja: '初心者から音大・プロ奏者までを対象としたオーボエ購入ガイド。ロレーRoyale、マリゴ901、ヤマハCustom 841/441の音響特性とキイ機構を比較。',
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
      type: 'article',
    },
  };
}

export default function OboeBuyerGuidePage({ params }: PageProps) {
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
    '@type': 'Article',
    headline: isZh ? '双簧管选购与升级指南' : 'The Definitive Oboe Buyer & Upgrade Guide',
    description: isZh
      ? '深度对比全球主流双簧管品牌、材质与声学特性'
      : 'Comprehensive comparison of professional oboe makers, wood materials, and acoustic mechanisms.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/guide/upgrade-oboe', locale)}`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header & Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          <span>Professional Instrument Evaluation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '双簧管选购与升级指南'
            : isDe
            ? 'Oboen-Kaufratgeber & Modellvergleich'
            : isJa
            ? 'オーボエ購入・アップグレード比較ガイド'
            : 'Definitive Oboe Buyer & Upgrade Guide'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '选对管子是双簧管演奏生涯最昂贵但也最关键的决定。本指南全方位解析木管材质声学原理（黑檀木 vs 复合防裂材质）、八度键与辅助机械系统，并深度横评法国 F.Lorée、Marigaux、Buffet 及日本 Yamaha 主流旗舰型号。'
            : isDe
            ? 'Der maßgebliche Leitfaden für die Wahl des richtigen Instruments: Grenadill vs. Greenline, Mechanik-Systeme und die Spitzenmodelle von Lorée, Marigaux und Yamaha.'
            : isJa
            ? '一生モノの楽器選びをサポート。グラナディラ木材と割れ防止複合材の音響特性、キイ機構、ロレー、マリゴ、ヤマハの銘器を徹底比較。'
            : 'Make an informed investment. Compare African Blackwood vs composite bores, key systems, and the flagship models from F.Lorée, Marigaux, Buffet Crampon, and Yamaha.'}
        </p>
      </div>

      {/* Acoustic Material Comparison Matrix */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-600" />
            <span>{isZh ? '管体材质与声学特性对比' : 'Body Wood & Acoustic Profiles'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isZh
              ? '双簧管是圆锥体木管乐器，内膛反射系数对高次泛音能量具有决定性影响。'
              : 'The cone bore density and inner surface finish dictate high-order harmonic warmth and projection.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="font-mono text-xs font-bold text-teal-700 block">
              1. 非洲黑木 / 格林纳迪亚 (Grenadilla)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '传统声学皇冠 · 最浓郁管弦乐共振' : 'The Acoustic Gold Standard'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '天然极高密度木料（密度 > 1.2 g/cm³，入水即沉）。声音深沉凝聚、富于多层倍频泛音。缺点是极度敏感于温差湿度，前 1~2 年需严格遵守开乐器（Break-in）温养期，否则容易管体纵向炸裂。'
                : 'Highest acoustic resonance and traditional orchestral warmth. Sinks in water due to intense density. Demands disciplined break-in routines to mitigate seasonal cracking.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="font-mono text-xs font-bold text-teal-700 block">
              2. 复合防裂技术 (Buffet Greenline / Yamaha Duet+)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '现代高科技 · 100% 免疫管裂' : 'Composite Crack-Proof Tech'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '采用 95% 黑檀木粉末加碳纤维树脂高压模压，或在上管内膛内衬特种硫化橡胶管。彻底免受空调干燥或冬天室外骤冷影响，音色无限逼近纯木，巡演无忧。'
                : 'Combines 95% Grenadilla powder with carbon-fiber resin, or lines the upper joint bore with vulcanite. 100% crack-free performance in volatile touring conditions.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <span className="font-mono text-xs font-bold text-teal-700 block">
              3. 紫罗兰木 (Violetwood / Kingwood)
            </span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '华贵独奏色彩 · 明亮通透如紫水晶' : 'Lyrical Soloist Wood'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '木质纹理泛深紫棕色，密度略低于黑木。声音极其通透、柔润且轻巧，特别适合莫扎特协奏曲与室内乐独奏。'
                : 'Distinctive violet-tinted grain with slightly lower mass than blackwood. Delivers liquid, crystalline, singing high harmonics tailored for chamber music.'}
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Models Showcase */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {isZh ? '主流世界级名管型号横向评测' : 'Flagship Instrument Models Comparison'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isZh ? '全球顶尖交响乐团出场率最高的 5 款经典双簧管全面档案' : 'Detailed dossier for the 5 most played professional oboes worldwide.'}
          </p>
        </div>

        <div className="space-y-6">
          {OBOE_INSTRUMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-bold mb-1">
                    <span>{model.brand}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{model.origin}</span>
                    <span className="text-slate-300">·</span>
                    <span className="bg-teal-50 text-teal-800 px-2 py-0.5 rounded text-[11px] font-sans">
                      {model.tier}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {model.model}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs text-slate-400 block font-mono">Market Reference</span>
                  <span className="text-lg font-black text-emerald-700 font-mono">
                    {model.priceRangeUSD}
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="font-bold text-slate-900 block">{isZh ? '管体材质' : 'Body Material'}:</span>
                  <p className="text-slate-600">{model.bodyMaterial}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="font-bold text-slate-900 block">{isZh ? '按键机制' : 'Keywork System'}:</span>
                  <p className="text-slate-600">{model.keySystem}</p>
                </div>
              </div>

              {/* Sound Profile */}
              <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-teal-50/60 border border-teal-200/70 text-xs sm:text-sm text-teal-950 space-y-1">
                <span className="font-bold block">
                  🎵 {isZh ? '声学音色特征' : 'Acoustic Sound Profile'}:
                </span>
                <p className="leading-relaxed">
                  {isZh ? model.soundAcousticCharacter.zh : isDe ? model.soundAcousticCharacter.de : isJa ? model.soundAcousticCharacter.ja : model.soundAcousticCharacter.en}
                </p>
              </div>

              {/* Strengths & Recommendation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    {isZh ? '核心优势' : 'Key Strengths'}
                  </span>
                  <ul className="space-y-1.5">
                    {(isZh ? model.strengths.zh : isDe ? model.strengths.de : isJa ? model.strengths.ja : model.strengths.en).map((str, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1.5 flex flex-col justify-center">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    🎯 {isZh ? '适用人群推荐' : 'Ideal Musician Fit'}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isZh ? model.recommendationTarget.zh : isDe ? model.recommendationTarget.de : isJa ? model.recommendationTarget.ja : model.recommendationTarget.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Cross-link Hub */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-black tracking-tight">
            {isZh ? '备齐神兵利器，更要调校好哨片' : 'Pair Your Horn with Perfect Reeds'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            {isZh
              ? '一把价值万元的职业双簧管，如果搭配受潮塌陷或尖端过厚的哨片，音准依然会下降 20 音分。前往哨片诊断室，让你的乐器发挥 100% 潜能。'
              : 'Even a $12,000 master horn cannot sing with an unbalanced reed. Inspect our Reed Doctor and Plaque Light simulator.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={getLocalizedPath('/reed-doctor/supplies', locale)}
            className="px-5 py-3 rounded-2xl whitespace-nowrap shrink-0 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-95"
          >
            {isZh ? '专业制簧工具箱 →' : 'Reed Tool Catalog →'}
          </Link>
          <Link
            href={getLocalizedPath('/reed-doctor/plaque-light', locale)}
            className="px-5 py-3 rounded-2xl whitespace-nowrap shrink-0 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all active:scale-95 border border-slate-700"
          >
            {isZh ? '透光板模拟器 →' : 'Plaque Light Studio →'}
          </Link>
        </div>
      </div>
    </div>
  );
}
