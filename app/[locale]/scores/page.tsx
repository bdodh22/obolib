import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen, Music2, Star, ArrowRight, User } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { ALL_SCORE_SEO_DATA } from '@/data/scoresCatalog';

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
  const dict = getDictionary(locale);
  const alternates = getHreflangAlternates('/scores', locale);

  const title = `${config.name[locale]} ${dict.nav.scores} · Classical & Orchestral Repertoire | ${config.brandName}`;
  const description = `Explore classical and orchestral repertoire scores for ${config.name[locale]}, featuring interactive fingering sync, audio preview, and measure-by-measure practice steps.`;

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

  const config = getInstrumentConfig();
  const dict = getDictionary(locale);
  const scores = ALL_SCORE_SEO_DATA;
  const locHref = (path: string) => getLocalizedPath(path, locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* 头部标题区 */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Interactive Sheet Repertoire</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          {config.name[locale]} {dict.nav.scores}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {dict.home.cardScoresDesc}
        </p>
      </div>

      {/* 曲谱列表网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scores.map((score) => {
          const title = locale === 'zh' ? score.titleZh : score.titleEn;
          const difficulty = locale === 'zh' ? score.difficultyZh : score.difficultyEn;
          const era = locale === 'zh' ? score.composerEraZh : score.composerEraEn;
          const desc = locale === 'zh' ? score.metaDescZh : score.metaDescEn;

          return (
            <div
              key={score.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-200/80 hover:border-blue-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 bg-blue-50 text-blue-700 border border-blue-100">
                    {difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {era}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{score.composer}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Music2 className="w-3.5 h-3.5 text-blue-500" />
                  <span>{score.rangeNote}</span>
                </div>
                <Link
                  href={locHref(`/scores/${score.slug}`)}
                  className="text-xs font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>Practice Excerpt</span>
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
