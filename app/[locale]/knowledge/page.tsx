import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Lightbulb, Clock, BookOpen, AlertCircle, ArrowRight, Tag } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { KNOWLEDGE_ARTICLES } from '@/data/knowledgeArticles';

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
  const alternates = getHreflangAlternates('/knowledge', locale);

  const title = `${config.name[locale]} Knowledge Base & Pedagogical Guides | ${config.brandName}`;
  const description = `In-depth pedagogical guides for ${config.name[locale]}: reed calibration, acoustic airflow physics, embouchure health, instrument maintenance, and audition FAQs.`;

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

  const config = getInstrumentConfig();
  const dict = getDictionary(locale);
  const articles = KNOWLEDGE_ARTICLES;
  const locHref = (path: string) => getLocalizedPath(path, locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* 头部标题区 */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Pedagogy &amp; Acoustic Science</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          {config.name[locale]} {dict.nav.knowledge}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {dict.home.cardKnowledgeDesc}
        </p>
      </div>

      {/* 知识文章流 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => {
          const title = locale === 'zh' ? article.titleZh : article.titleEn;
          const summary = locale === 'zh' ? article.summaryZh : article.summaryEn;
          const goldenRule = locale === 'zh' ? article.goldenRuleZh : article.goldenRuleEn;
          const subCategory = locale === 'zh' ? article.subCategoryZh : article.subCategoryEn;

          return (
            <article
              key={article.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-amber-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0 bg-amber-50 text-amber-800 border border-amber-200/60">
                    {subCategory}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {summary}
                </p>

                {goldenRule && (
                  <div className="p-3.5 rounded-2xl whitespace-nowrap shrink-0 bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Golden Principle: </span>
                      {goldenRule}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-1 transition-colors shrink-0">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
