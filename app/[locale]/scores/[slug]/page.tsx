import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Music2,
  Clock,
  Download,
  User,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  Share2,
  Sliders,
} from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_SCORES_CATALOG, OboeScoreData } from '@/data/scoresCatalog';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ALL_LOCALES) {
    for (const score of OBOE_SCORES_CATALOG) {
      params.push({
        locale,
        slug: score.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const score = OBOE_SCORES_CATALOG.find((s) => s.slug === params.slug);
  if (!score) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates(`/scores/${score.slug}`, locale);

  const title = score.seoTitle[locale] || score.seoTitle.en;
  const description = score.metaDesc[locale] || score.metaDesc.en;

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: config.brandName,
      type: 'music.song',
    },
  };
}

export default function OboeScoreDetailPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const score = OBOE_SCORES_CATALOG.find((s) => s.slug === params.slug);
  if (!score) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';
  const config = getInstrumentConfig();

  const title = score.title[locale] || score.title.en;
  const era = score.composerEra[locale] || score.composerEra.en;
  const history = score.historicalContext[locale] || score.historicalContext.en;
  const audition = score.auditionSignificance[locale] || score.auditionSignificance.en;
  const difficulty = score.difficulty[locale] || score.difficulty.en;
  const focuses = score.pedagogicalFocus[locale] || score.pedagogicalFocus.en;

  // Schema.org MusicComposition JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: title,
    composer: {
      '@type': 'Person',
      name: score.composer.split('(')[0].trim(),
    },
    musicalKey: score.keySignature,
    description: score.metaDesc[locale] || score.metaDesc.en,
    url: `${config.baseUrl}${getLocalizedPath(`/scores/${score.slug}`, locale)}`,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 面包屑导航 */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/scores', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回分谱中心' : isDe ? 'Zurück zur Notenübersicht' : isJa ? '楽譜一覧へ戻る' : 'Back to Scores Hub'}</span>
        </Link>

        <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          {score.keySignature} · {score.timeSignature}
        </span>
      </div>

      {/* Hero 标题区：单一 H1 */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="bg-slate-900 px-3 py-1 rounded-md border border-slate-800 font-bold text-amber-400 shrink-0 whitespace-nowrap">
            {difficulty}
          </span>
          <span className="text-slate-500">•</span>
          <span>{era}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold text-slate-300">{score.composer}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{score.tempo}</span>
          </div>
          <div className="flex items-center gap-2">
            <Music2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{isZh ? '全曲音域' : 'Range'}: {score.rangeNote}</span>
          </div>
        </div>
      </div>

      {/* 乐团 Audition 考核指标卡片 */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-500/30 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>{isZh ? '交响乐团 Audition 试奏考查核心' : 'Orchestral Audition Jury Benchmark'}</span>
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
          {audition}
        </p>
      </div>

      {/* 创作历史背景 */}
      <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
        <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <span>{isZh ? '作品历史背景与版本考证' : isDe ? 'Werkgeschichte & Historischer Kontext' : isJa ? '作品の歴史的背景と版の解説' : 'Historical Context & Masterclass Notes'}</span>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          {history}
        </p>
      </div>

      {/* 四步慢练实战拆解 (Step-by-Step Practice Method) */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>Practice Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-100">
            {isZh ? '四步慢练实战攻坚法' : isDe ? 'Die 4-Schritte-Übemethode' : isJa ? '4段階のマスター練習法' : '4-Step Master Practice Progression'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {score.practiceSteps.map((s) => {
            const stepTitle = s.title[locale] || s.title.en;
            const stepDesc = s.desc[locale] || s.desc.en;

            return (
              <div
                key={s.step}
                className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/90 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-md">
                    STAGE {s.step}
                  </span>
                  {s.focusNote && (
                    <span className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">
                      Focus: {s.focusNote}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-black text-slate-100">
                  {stepTitle}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stepDesc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 教学要点列表 */}
      <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
        <h3 className="text-lg font-black text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>{isZh ? '考级与演奏技术攻关要点' : 'Pedagogical Focus & Technique Checklist'}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {focuses.map((f, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 免费高清分谱 PDF 下载区域 */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
            <Download className="w-3.5 h-3.5" />
            <span>{isZh ? '独奏分谱免登录直接获取' : 'Free Open Sheet Music Download'}</span>
          </div>
          <h3 className="text-xl font-black text-slate-100">
            {score.pdfDownloadName}
          </h3>
          <p className="text-xs text-slate-400 max-w-lg">
            {isZh
              ? '经国际管乐协会（IDRS）教学标准校订的独奏五线谱分谱，A4 尺寸免登录高清打印或保存。'
              : 'Standard Urtext solo part calibrated to international conservatory audition standards. Print-ready A4 PDF.'}
          </p>
        </div>

        <a
          href={`/scores/pdfs/${score.pdfDownloadName}`}
          download={score.pdfDownloadName}
          className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all hover:shadow-lg hover:shadow-amber-400/20 active:scale-95 shrink-0 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>{isZh ? '免费下载独奏分谱 PDF' : 'Download Solo Sheet PDF'}</span>
        </a>
      </div>

      {/* 常见问题解答 FAQ */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-400" />
          <span>{isZh ? '高频疑问与大师解答' : 'Frequently Asked Masterclass Questions'}</span>
        </h2>

        <div className="space-y-4">
          {score.faqs.map((faq, i) => {
            const q = faq.q[locale] || faq.q.en;
            const a = faq.a[locale] || faq.a.en;

            return (
              <div
                key={i}
                className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800/80 space-y-2"
              >
                <h3 className="text-sm font-black text-slate-200 flex items-start gap-2">
                  <span className="text-amber-400 font-mono">Q:</span>
                  <span>{q}</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  {a}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 相关作品推荐 */}
      <div className="pt-8 border-t border-slate-800 space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {isZh ? '探索更多双簧管经典' : 'More Oboe Masterworks'}
        </div>
        <div className="flex flex-wrap gap-3">
          {score.relatedSlugs.map((relSlug) => {
            const rel = OBOE_SCORES_CATALOG.find((s) => s.slug === relSlug);
            if (!rel) return null;
            const relTitle = rel.title[locale] || rel.title.en;

            return (
              <Link
                key={relSlug}
                href={getLocalizedPath(`/scores/${relSlug}`, locale)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors"
              >
                {relTitle} →
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
