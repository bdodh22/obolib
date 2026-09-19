import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, Music, ArrowLeft, AlertTriangle, CheckCircle2, Wind, Sparkles, BookOpen } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { OBOE_EXCERPTS, OboeExcerpt } from '@/data/oboeExcerptsData';
import OboeExcerptsStudio from '@/components/excerpts/OboeExcerptsStudio';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ALL_LOCALES) {
    for (const excerpt of OBOE_EXCERPTS) {
      params.push({
        locale,
        slug: excerpt.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const excerpt = OBOE_EXCERPTS.find((e) => e.slug === params.slug);
  if (!excerpt) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates(`/excerpts/${excerpt.slug}`, locale);

  const titleMap: Record<Locale, string> = {
    en: `${excerpt.title.en}: Oboe Solo Audition Guide | OboLib`,
    zh: `${excerpt.title.zh}: 乐团考试独奏指南与指法 | OboLib`,
    de: `${excerpt.title.de}: Probespiel-Analyse & Griffe | OboLib`,
    ja: `${excerpt.title.ja}: オーディション対策と運指解説 | OboLib`,
  };

  const descMap: Record<Locale, string> = {
    en: `Master the oboe solo in ${excerpt.work.en}. Includes note-by-note fingering cues, audition jury warning points, and acoustic audio demonstration.`,
    zh: `深度解析《${excerpt.work.zh}》双簧管核心独奏乐段。提供逐音交互指法、考官扣分红线避坑清单、呼吸气压调控与真实发音试听。`,
    de: `Detaillierte Analyse des Oboensolos in ${excerpt.work.de}. Mit interaktiven Griffen, Probespiel-Schwerpunkten und akustischen Hörbeispielen.`,
    ja: `『${excerpt.work.ja}』のオーボエ名ソロを徹底攻略。音符ごとの連動運指、審査員の減点防止ポイント、アコースティック音源試聴を完備。`,
  };

  const rawTitle = titleMap[locale] || titleMap.en;
  // 确保字符在 35-60 字符范围内
  const title = rawTitle.length < 35 ? `${rawTitle} - Orchestral Benchmarks` : rawTitle.slice(0, 60);
  const description = descMap[locale] || descMap.en;

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

export default function ExcerptDetailPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const excerpt = OBOE_EXCERPTS.find((e) => e.slug === params.slug);
  if (!excerpt) {
    notFound();
  }

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const config = getInstrumentConfig();

  const titleText = isZh ? excerpt.title.zh : isDe ? excerpt.title.de : isJa ? excerpt.title.ja : excerpt.title.en;
  const workText = isZh ? excerpt.work.zh : isDe ? excerpt.work.de : isJa ? excerpt.work.ja : excerpt.work.en;

  // Schema.org JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: titleText,
    composer: {
      '@type': 'Person',
      name: excerpt.composer.split('(')[0].trim(),
    },
    musicalKey: excerpt.keySignature,
    timeRequired: 'PT3M',
    description: isZh ? excerpt.historicalSignificance.zh : excerpt.historicalSignificance.en,
    url: `${config.baseUrl}${getLocalizedPath(`/excerpts/${excerpt.slug}`, locale)}`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={getLocalizedPath('/excerpts', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回独奏名段数据库' : 'All Audition Excerpts'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
          {excerpt.difficultyRating}
        </span>
      </div>

      {/* Hero Header: Single H1 */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-teal-800">
          <span className="bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80 font-bold shrink-0 whitespace-nowrap">
            {excerpt.movement}
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-semibold shrink-0 whitespace-nowrap">
            {excerpt.tempo}
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-semibold shrink-0 whitespace-nowrap">
            {excerpt.keySignature}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {titleText}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-medium">
          {excerpt.composer} · {workText}
        </p>
      </div>

      {/* Interactive Studio for this excerpt */}
      <OboeExcerptsStudio locale={locale} initialSlug={excerpt.slug} />

      {/* SSR In-Depth Academic Breakdown & Repertoire Pedagogy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-200">
        {/* Left column: Historical significance & Fingering Strategy */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              <span>{isZh ? '作品历史背景与独奏试金石地位' : 'Historical Benchmark Significance'}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isZh
                ? excerpt.historicalSignificance.zh
                : isDe
                ? excerpt.historicalSignificance.de
                : isJa
                ? excerpt.historicalSignificance.ja
                : excerpt.historicalSignificance.en}
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span>{isZh ? '高级机械键位操作策略 (Fingering Solutions)' : 'Fingering Solutions & Lever Mechanics'}</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isZh
                ? excerpt.fingeringKeysFocus.zh
                : isDe
                ? excerpt.fingeringKeysFocus.de
                : isJa
                ? excerpt.fingeringKeysFocus.ja
                : excerpt.fingeringKeysFocus.en}
            </p>

            <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-teal-50/70 border border-teal-200 text-xs sm:text-sm text-teal-950 space-y-2">
              <span className="font-bold block">
                {isZh ? '💡 首席演奏家经验法则：' : '💡 Principal Oboist Pro Tip:'}
              </span>
              <p className="leading-relaxed">
                {isZh
                  ? '双簧管是极度敏感的圆锥体乐器，快速通道换指必须保持右手和左手手指贴近音孔不超过 5mm。不要大幅度抬指，这能大幅提升颗粒度与连奏圆滑感。'
                  : 'Maintain fingers within 5mm of tone hole covers. Never fly fingers high away from key plates; tight proximity guarantees pearly articulation and seamless legatos.'}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Wind className="w-5 h-5 text-teal-600" />
              <span>{isZh ? '呼吸管理与哨片刮修匹配建议' : 'Breathing Management & Reed Scraping Profile'}</span>
            </h2>
            <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                {isZh
                  ? '与长笛或大号的大肺活量消耗不同，双簧管演奏核心挑战在于哨片缝隙极细（约 0.6mm），导致大量残余废气滞留在肺部。演奏此乐段前必须练习“先吐再吸”的快速呼气法，严禁在肺部充满二氧化碳的情况下憋气硬吹。'
                  : 'Unlike flute or tuba, the tiny double reed aperture (approx 0.6mm) traps stale air in the lungs. Practice deliberate rapid exhalation before taking fresh breaths, preventing carbon dioxide congestion.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-xs text-slate-900 block mb-1">
                    {isZh ? '推荐哨片配置' : 'Recommended Reed Setup'}
                  </span>
                  <span className="text-xs text-slate-600">
                    {isZh ? '中硬度 0.56mm 苇片，Tip 尖端极度通透（0.08mm），Staple 47mm 欧式铜管' : 'Medium strength 0.56mm cane, 0.08mm tip, 47mm European brass staple'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-xs text-slate-900 block mb-1">
                    {isZh ? '透光板检查' : 'Plaque Light Profile'}
                  </span>
                  <span className="text-xs text-slate-600">
                    {isZh ? 'Heart 中心区保持丰满 W 倒影，Spine 脊线保持厚度以支撑音高不下坠' : 'Keep substantial W-shadow at Heart, solid Spine thickness to prevent pitch sag'}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column: Audition Pitfalls & Quick Links */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-rose-50/70 rounded-3xl border border-rose-200/80 p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{isZh ? '考官扣分避坑清单' : 'Audition Panel Pitfalls'}</span>
            </div>
            <p className="text-xs text-rose-900/80">
              {isZh
                ? '以下为职业交响乐团考官在幕后拉幕考试中最为挑剔的致命扣分点：'
                : 'Key criteria screened by audition committee behind the blind curtain:'}
            </p>
            <ul className="space-y-3 text-xs text-rose-950 font-medium">
              {(isZh ? excerpt.auditionPitfalls.zh : excerpt.auditionPitfalls.en).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Excerpts */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {isZh ? '其他必考独奏名段' : 'Other Essential Excerpts'}
            </h3>
            <div className="space-y-2">
              {OBOE_EXCERPTS.filter((e) => e.id !== excerpt.id).map((other) => (
                <Link
                  key={other.id}
                  href={getLocalizedPath(`/excerpts/${other.slug}`, locale)}
                  className="block p-3 rounded-2xl whitespace-nowrap shrink-0 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <span className="font-mono text-[10px] text-teal-700 block uppercase font-bold">
                    {other.composer.split('(')[0]}
                  </span>
                  <span className="font-bold text-slate-900 block truncate">
                    {isZh ? other.title.zh : other.title.en}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
