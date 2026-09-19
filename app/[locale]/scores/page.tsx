import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen, Music2, ArrowRight, User, Award, Download, Compass, Sparkles } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_SCORES_CATALOG } from '@/data/scoresCatalog';

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
  const alternates = getHreflangAlternates('/scores', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Sheet Music & Concertos: Top 6 Repertoire | OboLib',
    zh: '双簧管经典协奏曲与练习曲分谱中心: 6大传世名作 | OboLib',
    de: 'Oboenkonzerte & Etüden Noten: Die 6 Meisterwerke | OboLib',
    ja: 'オーボエ協奏曲・練習曲楽譜ライブラリ: 6大名曲独奏譜 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Download free oboe solo scores: Mozart K.314, Strauss, Cimarosa, Marcello Adagio, Handel HWV 287, and Ferling Op.31. Audition guides and slow-practice steps.',
    zh: '双簧管 6 大传世经典协奏曲与考级练习曲分谱中心。提供莫扎特K.314、理查·施特劳斯、奇马罗萨、马尔切洛柔板、亨德尔与费林练习曲免费高清分谱与慢练指引。',
    de: 'Kostenlose Noten für die 6 Meisterwerke der Oboe: Mozart KV 314, Strauss, Cimarosa, Marcello Adagio, Händel HWV 287 und Ferling. Mit Probespiel-Tipps.',
    ja: 'オーボエ6大協奏曲・練習曲の無料独奏譜ライブラリ。モーツァルトK.314、シュトラウス、マルチェッロ、フェルリング等の楽譜と試演攻略法を完全掲載。',
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

export default function ScoresPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const scores = OBOE_SCORES_CATALOG;
  const locHref = (path: string) => getLocalizedPath(path, locale);
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* 头部标题区：交响殿堂黑金美学 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Master Repertoire & Audition Library</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
          {isZh ? '双簧管经典协奏曲与分谱中心' : isDe ? 'Klassische Oboenkonzerte & Notenbibliothek' : isJa ? 'オーボエ珠玉の協奏曲・独奏譜ライブラリ' : 'Master Oboe Concertos & Repertoire Library'}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {isZh
            ? '收录全世界各大交响乐团 Audition 试奏考核与音乐学院必考的 6 大传世经典。包含高清独奏分谱、四步慢练实战拆解、重点音符微调与考官评审核心指标。'
            : isDe
            ? 'Die 6 unvergänglichen Meisterwerke des Oboenrepertoires. Mit Noten-Download, schrittweisen Übeanleitungen und Probespiel-Schwerpunkten.'
            : isJa
            ? '世界中のオーケストラ入団試演や音楽大学入試で課される6大名作を厳選。独奏譜PDF、段階的練習メソッド、審査基準の要点を完全網羅。'
            : 'Explore the 6 definitive cornerstone concertos and etudes for oboe. Complete with free sheet music PDFs, 4-step practice breakdowns, and audition jury benchmarks.'}
        </p>
      </div>

      {/* 核心特点背书 HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-amber-400 font-mono font-black text-xl sm:text-2xl">6 / 6</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '考团必考覆盖率 100%' : '100% Audition Core'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-teal-400 font-mono font-black text-xl sm:text-2xl">4 Steps</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '大师慢练实战拆解' : 'Step-by-Step Method'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-amber-400 font-mono font-black text-xl sm:text-2xl">PDF Free</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '极清独奏分谱免登录' : 'Free Solo Part PDFs'}</div>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center">
          <div className="text-teal-400 font-mono font-black text-xl sm:text-2xl">A442 / 440</div>
          <div className="text-slate-400 text-xs mt-1">{isZh ? '国际双重音高校验' : 'Dual Concert Pitch'}</div>
        </div>
      </div>

      {/* 曲谱卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scores.map((score) => {
          const title = score.title[locale] || score.title.en;
          const era = score.composerEra[locale] || score.composerEra.en;
          const desc = score.metaDesc[locale] || score.metaDesc.en;
          const difficulty = score.difficulty[locale] || score.difficulty.en;

          return (
            <div
              key={score.id}
              className="bg-slate-900/70 rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-amber-500/60 transition-all hover:-translate-y-1 group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {score.keySignature}
                  </span>
                  <span className="text-xs text-slate-500 font-medium truncate">
                    {era}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-2">
                  {title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{score.composer}</span>
                </div>

                <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60 leading-relaxed line-clamp-3">
                  {desc}
                </div>

                <div className="space-y-1.5 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="truncate">{difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{isZh ? '音域范围' : 'Range'}: {score.rangeNote}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {score.tempo.split('(')[0].trim()}
                </span>
                <Link
                  href={locHref(`/scores/${score.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  <span>{isZh ? '慢练指引与分谱' : 'Practice & Sheet PDF'}</span>
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
