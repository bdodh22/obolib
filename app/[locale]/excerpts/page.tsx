import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, Music, Sparkles, ChevronRight, BookOpen } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_EXCERPTS } from '@/data/oboeExcerptsData';
import OboeExcerptsStudio from '@/components/excerpts/OboeExcerptsStudio';

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
  const alternates = getHreflangAlternates('/excerpts', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe Audition Excerpts: Top 5 Orchestral Solos | OboLib',
    zh: '双簧管乐团考试独奏名段数据库: 5大交响试金石指南 | OboLib',
    de: 'Oboen-Probespielstellen: Die 5 wichtigsten Soli | OboLib',
    ja: 'オーボエ・オーディション試金石ソロ名曲集5選 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Master the top 5 oboe orchestral audition excerpts. Explore Ravel Tombeau, Beethoven 3, Brahms, Tchaikovsky Swan Lake, and Strauss with fingerings.',
    zh: '攻克全球交响乐团双簧管招聘考试5大巅峰独奏名段。精解拉威尔库普兰之墓、贝多芬英雄交响曲、勃拉姆斯、天鹅湖与理查施特劳斯协奏曲，配备考官避坑清单与交互指法。',
    de: 'Die 5 wichtigsten Orchester-Probespielstellen für Oboe: Ravel Tombeau, Beethoven Eroica, Brahms, Tschaikowsky und Strauss mit Griffführung und Audio.',
    ja: '世界中のオーケストラ入団試験で課されるオーボエ最重要ソロ5選を徹底解説。クープランの墓、英雄、ブラームス、白鳥の湖、R.シュトラウスの運指と音源を収録。',
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

export default function ExcerptsHubPage({ params }: PageProps) {
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
    '@type': 'CollectionPage',
    name: isZh ? '双簧管乐团考试独奏名段数据库' : 'Top Oboe Orchestral Audition Excerpts',
    description: isZh
      ? '全球交响乐团双簧管首席与声部演奏员招募考试 5 大必考独奏名段'
      : 'The top 5 orchestral audition excerpts for professional oboe auditions.',
    url: `${config.baseUrl}${getLocalizedPath('/excerpts', locale)}`,
    hasPart: OBOE_EXCERPTS.map((ex) => ({
      '@type': 'MusicComposition',
      name: isZh ? ex.title.zh : ex.title.en,
      composer: {
        '@type': 'Person',
        name: ex.composer.split('(')[0].trim(),
      },
      musicalKey: ex.keySignature,
      url: `${config.baseUrl}${getLocalizedPath(`/excerpts/${ex.slug}`, locale)}`,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header & Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>Orchestral Audition Standard Literature</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '双簧管乐团考试独奏名段数据库'
            : isDe
            ? 'Oboen-Probespielstellen Datenbank'
            : isJa
            ? 'オーボエ・オーディション試金石ソロ名曲集'
            : 'Top 5 Oboe Orchestral Audition Excerpts'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '全球顶级交响乐团招聘首席与演奏员的必考试金石。涵盖拉威尔《库普兰之墓》、贝多芬《英雄》、勃拉姆斯《小提琴协奏曲》、柴可夫斯基《天鹅湖》与理查·施特劳斯协奏曲，配备逐音指法联动与考官扣分避坑红线。'
            : isDe
            ? 'Die 5 entscheidenden Probespielstellen für Oboe: Ravel Tombeau, Beethoven 3, Brahms, Tschaikowsky und Strauss mit Griffführung und Fehlerschwerpunkten.'
            : isJa
            ? 'プロオーケストラ入団審査で必ず課される5大重要ソロを網羅。クープランの墓、英雄、ブラームス、白鳥の湖、R.シュトラウスの運指連動と審査員減点ポイントを解説。'
            : 'The definitive audition benchmark repertoire for professional oboists worldwide. Featuring note-by-note fingering linkage, dynamic acoustic audio playback, and jury pitfall checklists.'}
        </p>
      </div>

      {/* Main Interactive Studio */}
      <OboeExcerptsStudio locale={locale} />

      {/* SSR Comprehensive List & Deep Linking for Search Engines (SSR First) */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              <span>{isZh ? '5 大独奏名段深度专题解析' : 'Deep-Dive Excerpt Monographs'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {isZh
                ? '点击进入每一部作品的独立学术研究页面，获取完整曲式背景、乐句呼吸换气策略与乐谱高清细节。'
                : 'Explore dedicated monographs for each solo with score structure, breathing strategies, and historical performance guides.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OBOE_EXCERPTS.map((excerpt) => {
            const excerptUrl = getLocalizedPath(`/excerpts/${excerpt.slug}`, locale);
            return (
              <article
                key={excerpt.id}
                className="group bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                      {excerpt.keySignature}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{excerpt.tempo.split('(')[0]}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                    <Link href={excerptUrl}>
                      {isZh ? excerpt.title.zh : isDe ? excerpt.title.de : isJa ? excerpt.title.ja : excerpt.title.en}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    {excerpt.composer} · {excerpt.movement}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {isZh
                      ? excerpt.historicalSignificance.zh
                      : isDe
                      ? excerpt.historicalSignificance.de
                      : isJa
                      ? excerpt.historicalSignificance.ja
                      : excerpt.historicalSignificance.en}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-teal-700">
                    {isZh ? '考官红线分析 →' : 'Study Excerpt →'}
                  </span>
                  <Link
                    href={excerptUrl}
                    className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-all"
                    aria-label={`View ${excerpt.slug}`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
