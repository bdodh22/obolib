import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_KNOWLEDGE_ARTICLES, OboeKnowledgeArticle } from '@/data/knowledgeArticles';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ALL_LOCALES) {
    for (const article of OBOE_KNOWLEDGE_ARTICLES) {
      params.push({
        locale,
        slug: article.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const article = OBOE_KNOWLEDGE_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates(`/knowledge/${article.slug}`, locale);

  const title = article.seoTitle[locale] || article.seoTitle.en;
  const description = article.metaDesc[locale] || article.metaDesc.en;

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

export default function OboeKnowledgeDetailPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const article = OBOE_KNOWLEDGE_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';
  const config = getInstrumentConfig();

  const title = article.title[locale] || article.title.en;
  const cat = article.category[locale] || article.category.en;
  const readTime = article.readTime[locale] || article.readTime.en;
  const tag = article.heroTag[locale] || article.heroTag.en;
  const summary = article.summary[locale] || article.summary.en;

  // Schema.org Article & FAQPage JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: title,
        description: article.metaDesc[locale] || article.metaDesc.en,
        author: {
          '@type': 'Organization',
          name: config.brandName,
        },
        publisher: {
          '@type': 'Organization',
          name: config.brandName,
          logo: {
            '@type': 'ImageObject',
            url: `${config.baseUrl}/og-image.svg`,
          },
        },
        url: `${config.baseUrl}${getLocalizedPath(`/knowledge/${article.slug}`, locale)}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q[locale] || f.q.en,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a[locale] || f.a.en,
          },
        })),
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 面包屑与顶部返回 */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/knowledge', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回实战百科' : isDe ? 'Zurück zur Enzyklopädie' : isJa ? '知識ベース一覧へ戻る' : 'Back to Knowledge Base'}</span>
        </Link>

        <span className="text-[11px] font-mono font-bold text-teal-400 bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          {cat}
        </span>
      </div>

      {/* Hero 标题区：单一 H1 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
            {tag}
          </span>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-1 font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight leading-tight">
          {title}
        </h1>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/30 text-sm text-slate-300 leading-relaxed font-medium">
          <span className="text-amber-400 font-bold block mb-1">
            {isZh ? '💡 临床诊断摘要' : 'Clinical Summary'}:
          </span>
          {summary}
        </div>
      </div>

      {/* 文章主体核心章节 */}
      <div className="space-y-10">
        {article.sections.map((sec, idx) => {
          const heading = sec.heading[locale] || sec.heading.en;
          const body = sec.body[locale] || sec.body.en;

          return (
            <div
              key={idx}
              className="bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-800/90 space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-100 flex items-center gap-2">
                <span className="text-amber-400 font-mono text-sm">#{idx + 1}</span>
                <span>{heading}</span>
              </h2>

              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {body}
              </div>
            </div>
          );
        })}
      </div>

      {/* 常见问题解答 FAQ */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-400" />
          <span>{isZh ? '高频实操疑难解答' : 'Frequently Asked Clinical Questions'}</span>
        </h2>

        <div className="space-y-4">
          {article.faqs.map((faq, i) => {
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

      {/* 相关专题推荐 */}
      <div className="pt-8 border-t border-slate-800 space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {isZh ? '更多双簧管痛点指南' : 'Related Clinical Guides'}
        </div>
        <div className="flex flex-wrap gap-3">
          {article.relatedSlugs.map((relSlug) => {
            const rel = OBOE_KNOWLEDGE_ARTICLES.find((a) => a.slug === relSlug);
            if (!rel) return null;
            const relTitle = rel.title[locale] || rel.title.en;

            return (
              <Link
                key={relSlug}
                href={getLocalizedPath(`/knowledge/${relSlug}`, locale)}
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
