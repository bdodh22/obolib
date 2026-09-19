import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Lightbulb, Clock, BookOpen, ArrowRight, ShieldCheck, Wrench, HeartPulse, Sparkles, Activity } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_KNOWLEDGE_ARTICLES } from '@/data/knowledgeArticles';

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
  const alternates = getHreflangAlternates('/knowledge', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Knowledge Base: Top 6 Pain Points & Guides | OboLib',
    zh: '双簧管实战知识库: 6大核心痛点避坑与生理声学指南 | OboLib',
    de: 'Oboe Wissensdatenbank: Die 6 Kernprobleme & Guides | OboLib',
    ja: 'オーボエ実戦知識ベース: 6大演奏トラブル＆調律ガイド | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Comprehensive pedagogical guides for oboe: Grenadilla crack prevention, vacuum suction leak tests, embouchure jaw biting relief, altissimo E6-A6, and breathing paradox.',
    zh: '基于 Reddit 与 IDRS 真实声音驱动的双簧管 6 大实战痛点百科。涵盖黑檀木温差防裂、二手真空吸气验货、告别咬唇下颌减压、高音E6~A6与排浊呼气技巧。',
    de: 'Umfassendes Oboenwissen: Rissprävention bei Grenadill, Vakuumtest beim Gebrauchtkauf, Kieferentlastung gegen Beißen, Altissimo E6-A6 und Atemparadoxon.',
    ja: 'Redditや国際ダブルリード協会で話題の6大悩みを解決。グラナディラの割れ防止、中古バキュームテスト、噛み癖解消法、超高音E6-A6と呼吸法を徹底解説。',
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

export default function KnowledgePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const articles = OBOE_KNOWLEDGE_ARTICLES;
  const locHref = (path: string) => getLocalizedPath(path, locale);
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* 头部标题区：交响殿堂黑金美学 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Real-World Voice of Community (VoC)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
          {isZh ? '双簧管核心痛点实战百科' : isDe ? 'Oboe Praxisenzyklopädie & Problemlöser' : isJa ? 'オーボエ演奏・機材の6大実戦トラブル百科' : 'Definitive Oboe Clinical Knowledge Base'}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {isZh
            ? '拒绝假大空的通识理论。深入挖掘海外 Reddit r/oboe 与国际双簧学会（IDRS）万名乐手的真实求助痛点：从黑檀木防裂温差控制、二手验货真空吸气，到咬唇咬穿下颌自救与高阻力排浊呼吸法。'
            : isDe
            ? 'Direkt aus der Praxis von r/oboe und der IDRS. Wissenschaftlich fundierte Lösungen für Grenadill-Holzrisse, Vakuum-Prüfung bei Gebrauchtkauf, Lippenbeißen und das Atemparadoxon.'
            : isJa
            ? '机上の空論を排し、Redditや国際ダブルリード協会で最も質問の多い6大リアル痛点を網羅。木管割れ対策、中古バキュームテスト、アンブシュア噛み癖脱出まで完全収録。'
            : 'Grounded in thousands of real inquiries from Reddit r/oboe and the IDRS. Comprehensive operational guides for Grenadilla crack defense, DIY vacuum testing, jaw cramping relief, and breathing acoustics.'}
        </p>
      </div>

      {/* 核心指标与痛点类型 HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-amber-400 font-mono font-black text-xl sm:text-2xl">6 Topics</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '高发急救与避坑' : 'Critical Core Topics'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-teal-400 font-mono font-black text-xl sm:text-2xl">0 Cost</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '物理吸气真空验货' : 'DIY Vacuum Protocol'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-amber-400 font-mono font-black text-xl sm:text-2xl">5:5 Cushion</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '环形软垫下颌减压' : 'Radial Embouchure'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-teal-400 font-mono font-black text-xl sm:text-2xl">E6 ~ A6</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '高位喉腔Voicing突破' : 'Altissimo Mastery'}</div>
        </div>
      </div>

      {/* 专题长文网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((art) => {
          const title = art.title[locale] || art.title.en;
          const cat = art.category[locale] || art.category.en;
          const readTime = art.readTime[locale] || art.readTime.en;
          const tag = art.heroTag[locale] || art.heroTag.en;
          const summary = art.summary[locale] || art.summary.en;

          return (
            <div
              key={art.id}
              className="bg-slate-900/70 rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-amber-500/60 transition-all hover:-translate-y-1 group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {cat}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1 shrink-0">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-2">
                  {title}
                </h3>

                <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 leading-relaxed line-clamp-3">
                  {summary}
                </div>

                <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold pt-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{tag}</span>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {art.sections.length} {isZh ? '大核心步骤' : 'Key Protocols'}
                </span>
                <Link
                  href={locHref(`/knowledge/${art.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  <span>{isZh ? '阅读实战指南' : 'Read Full Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
