import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, Sparkles, BookOpen, ArrowLeft, Layers, ShieldCheck } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { REED_SCHOOLS_DATA } from '@/data/oboeSchoolsData';
import OboeReedScrapeComparison from '@/components/schools/OboeReedScrapeComparison';

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
  const alternates = getHreflangAlternates('/schools/american-vs-european', locale);

  const titles: Record<Locale, string> = {
    en: 'American vs European Oboe Reeds: Scrape Guide | OboLib',
    zh: '美式长刮与欧式短刮双簧管哨片学派对比指南 | OboLib',
    de: 'Amerikanischer vs. Europäischer Oboenschnitt | OboLib',
    ja: 'アメリカンvsヨーロピアン オーボエリード比較 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Comprehensive comparison between American long scrape and European short scrape oboe reeds. Explore scrape thickness, embouchure, and tone color.',
    zh: '深入对比双簧管美式长刮（Tabuteau体系）与欧式短刮（德法传统）两大学术流派。涵盖哨片厚度剖面、台阶倒角、吹口嘴型与交响乐团穿透力实测。',
    de: 'Umfassender Vergleich zwischen amerikanischem langen und europäischem kurzen Oboenrohrschnitt. Analyse von Bahnlänge, Stufe und Klangprojektion.',
    ja: 'アメリカン・ロングスクレープとヨーロピアン・ショートスクレープの比較解説。スクレープ長、ショルダー段差、アンブシュア、音色特性を網罗。',
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

export default function AmericanVsEuropeanPage({ params }: PageProps) {
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
    headline: isZh ? '美式长刮 vs 欧式短刮双簧管学派对比' : 'American Long Scrape vs European Short Scrape Oboe Reeds',
    description: isZh
      ? '深度对比双簧管美式长刮与欧式短刮的声学架构、厚度分布与嘴型技术'
      : 'Comprehensive monograph comparing American and European oboe reed making traditions.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/schools/american-vs-european', locale)}`,
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
          Academic Repertoire Monograph
        </span>
      </div>

      {/* Hero Header with Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          <span>Global Oboe Traditions & Acoustic Lineage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '美式长刮与欧式短刮学派对比'
            : isDe
            ? 'Amerikanischer vs. Europäischer Schnitt'
            : isJa
            ? 'アメリカンvsヨーロピアン リード学派比較'
            : 'American vs European Oboe Reed Schools'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '双簧管界百年来最核心的声学阵营对决。北美马塞尔·塔布托（Marcel Tabuteau）无台阶长刮体系，对垒欧洲德法大剧院保留硬质树皮的短刮辉煌传统。从微米尺寸、嘴型张弛到乐团和声穿透力全景对比。'
            : isDe
            ? 'Der Jahrhundert-Vergleich im Doppelrohrblattbau: Amerikanischer langer Schliff (Tabuteau) gegen europäischen kurzen Schliff mit Schulter. Bahnlängen, Lippenansatz und Resonanz im Detail.'
            : isJa
            ? 'オーボエ界の2大潮流を徹底比較。タビュトーが確立した北米のロングスクレープと、伝統ある独仏のショートスクレープ。削りの幾何学、アンブシュア、音色の違いを網羅解説。'
            : 'The definitive acoustic debate in modern oboe literature. Compare Marcel Tabuteau’s seamless long scrape with the traditional French/German stepped short scrape across geometry, embouchure, and projection.'}
        </p>
      </div>

      {/* Interactive Comparative Studio */}
      <OboeReedScrapeComparison locale={locale} />

      {/* SSR In-Depth Academic Breakdown (SSR First) */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 space-y-8 shadow-xs">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>{isZh ? '学派历史渊源与演奏审美分歧' : 'Historical Divergence & Acoustic Philosophy'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isZh
              ? '为什么同一支双簧管在费城交响乐团与柏林爱乐乐团听起来截然不同？'
              : 'Why does the exact same oboe sound fundamentally different in Philadelphia versus Berlin?'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* American System Column */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-bold text-slate-900 text-sm">
                {isZh ? '美式长刮学派 (The American Aesthetic)' : 'The American Aesthetic'}
              </span>
              <span className="font-mono text-xs text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded font-bold">
                10.5mm Long Scrape
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {isZh
                ? '20 世纪初，巴黎音乐学院第一名毕业生马塞尔·塔布托移居美国担任费城管弦乐团首席。为了适应大型美式剧院的暗色管弦乐融合，他将刮削区一直延伸至绑线处，去除了所有生硬的台阶，追求极致内敛、无毛刺、深沉如英国管般的饱满核心。'
                : 'Pioneered by Marcel Tabuteau after moving from Paris to Philadelphia. Designed to achieve a covered, warm, dark blend in vast American concert halls by tapering cane all the way to the thread.'}
            </p>
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950">
              <span className="font-bold block mb-1">
                {isZh ? '🎯 考学建议：' : '🎯 Audition Note:'}
              </span>
              <span>
                {isZh
                  ? '考取柯蒂斯、茱莉亚、曼哈顿音乐学院或北美乐团，必须掌握美式长刮与双唇全卷嘴型。'
                  : 'Mandatory standard for Curtis, Juilliard, MSM, and North American orchestral auditions.'}
              </span>
            </div>
          </div>

          {/* European System Column */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="font-bold text-slate-900 text-sm">
                {isZh ? '欧式短刮学派 (The European Aesthetic)' : 'The European Aesthetic'}
              </span>
              <span className="font-mono text-xs text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded font-bold">
                6.8mm Short Scrape
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {isZh
                ? '德法传统学派坚信，保留完整的天然树皮（Bark）是支撑哨片结构刚度的关键骨架。仅在尖端 6.8mm 处刮出极薄的短坡，保留显著的台阶（Shoulder）。音色具备无与伦比的辉煌穿透力、液态歌唱性与清晰的发音颗粒感。'
                : 'Rooted in the French CNSMDP and German master traditions. Preserves rigid natural bark as an acoustic chassis, scraping only the front 6.8mm with a distinctive step for maximum brilliance.'}
            </p>
            <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950">
              <span className="font-bold block mb-1">
                {isZh ? '🎯 考学建议：' : '🎯 Audition Note:'}
              </span>
              <span>
                {isZh
                  ? '考取欧洲乐团、德国音乐学院、日本吹奏乐部或亚洲各交响乐团，欧式短刮是绝对主流。'
                  : 'Standard for Berlin, Vienna, Paris, NHK, and European/Asian conservatories.'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
