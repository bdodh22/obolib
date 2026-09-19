import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, BookOpen, Layers, ArrowLeft, Sparkles, CheckCircle2, History } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { FRENCH_CONSERVATOIRE_MONOGRAPHS } from '@/data/oboeSchoolsData';

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
  const alternates = getHreflangAlternates('/schools/french-conservatoire', locale);

  const titles: Record<Locale, string> = {
    en: 'French Conservatoire Oboe: Triébert & Gillet | OboLib',
    zh: '法式双簧管体系专题: 巴黎音乐学院与Triébert机械史 | OboLib',
    de: 'Französisches Oboensystem: Paris Conservatoire | OboLib',
    ja: 'フランス式オーボエ体系: パリ音楽院と運指の歴史 | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'The history and mechanics of the French Conservatoire oboe. Explore Triébert Système 6, Georges Gillet, Barret 40 melodies, and French terms.',
    zh: '巴黎音乐学院（CNSMDP）法国双簧管保守院学派机械史与练习曲文献。溯源Triébert 6号系统、吉莱Gillet、Barret与Ferling经典教程与法文管乐术语。',
    de: 'Geschichte und Mechanik des Conservatoire-Systems: Triébert Système 6, Georges Gillet, Barret Etüden und originale französische Fachbegriffe im Überblick.',
    ja: 'パリ国立高等音楽院（CNSMDP）が育んだフランス式オーボエの歴史。トリエベール6番、ジレ、バレット40の練習曲、フェルリングを徹底解読。',
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

export default function FrenchConservatoirePage({ params }: PageProps) {
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
    headline: isZh ? '法式双簧管巴黎音乐学院体系专题' : 'French Conservatoire Oboe Heritage & Mechanics',
    description: isZh
      ? '从 Triébert 到 Lorée：现代双簧管机械系统的法国源流与经典教程指南'
      : 'Historical monograph on the French Conservatoire oboe mechanics, Barret, and Ferling.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/schools/french-conservatoire', locale)}`,
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
          href={getLocalizedPath('/knowledge', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回百科知识库' : 'Back to Knowledge'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          Paris CNSMDP Historical Archive
        </span>
      </div>

      {/* Header with Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <History className="w-3.5 h-3.5 text-teal-600" />
          <span>French Conservatoire Heritage & Historical Mechanics</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '法式双簧管巴黎音乐学院体系专题'
            : isDe
            ? 'Das französische Conservatoire-System'
            : isJa
            ? 'フランス式オーボエ体系とパリ音楽院の歴史'
            : 'French Conservatoire Oboe Tradition'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '现代双簧管的机械母体。从 19 世纪纪尧姆·特里埃伯（Guillaume Triébert）的 6 号系统，到乔治·吉莱与罗黑（F.Lorée）确立的密闭盖孔标准，深度解析双簧管机械进化史与两大圣经级教材（Barret 与 Ferling）。'
            : isDe
            ? 'Die Wiege der modernen Oboenmechanik: Von Triéberts Système 6 über Georges Gillet bis zur heutigen Standardmechanik mit Barret- und Ferling-Etüden.'
            : isJa
            ? '現代オーボエの原点。19世紀のトリエベールによる第6システムから、ジョルジュ・ジレとロレーが完成させた密閉キイ標準、そしてバレット・フェルリングの教本体系を網羅。'
            : 'The mechanical and artistic foundation of modern oboe playing. Explore the evolution from Guillaume Triébert’s Système 6 to François Lorée and Georges Gillet, alongside foundational methods by Barret and Ferling.'}
        </p>
      </div>

      {/* Historical Era Monograph Cards */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>{isZh ? '三大历史纪元与机械技术突破' : 'Historical Epochs & Mechanical Innovations'}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isZh ? '巴黎国立高等音乐学院（CNSMDP）百余年机械进化里程碑' : 'Key milestones shaped by Paris CNSMDP masters and artisanal workshops.'}
          </p>
        </div>

        <div className="space-y-6">
          {FRENCH_CONSERVATOIRE_MONOGRAPHS.map((mono, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold text-teal-700 uppercase block">
                    {mono.era}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {mono.title}
                  </h3>
                </div>

                <div className="text-xs font-mono font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                  <span>📖 {mono.pedagogicalWork.split(':')[0]}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {mono.significance[locale as 'en' | 'zh' | 'de' | 'ja'] || mono.significance.en}
              </p>

              <div className="p-3.5 rounded-2xl whitespace-nowrap shrink-0 bg-teal-50/70 border border-teal-200/80 text-xs text-teal-950 flex items-center gap-2">
                <span className="font-bold shrink-0">⚙️ 核心机械专利：</span>
                <span className="font-mono">{mono.keyTechnicalInvention}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* French Technical Terms Dictionary (Anti-Tearing / Semantic) */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 space-y-6 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
          {isZh ? '法式管乐原始术语速查表 (Glossaire Français)' : 'Original French Woodwind Terminology'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
            <span className="font-mono font-black text-teal-800 text-sm block">Demi-trou</span>
            <span className="text-slate-500 font-bold block">{isZh ? '食指半孔' : 'Half-Hole Vent'}</span>
            <p className="text-slate-600 text-[11px]">Db5至Eb5通过食指微滚开启的微米放气小孔。</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
            <span className="font-mono font-black text-teal-800 text-sm block">Clé de Fa à gauche</span>
            <span className="text-slate-500 font-bold block">{isZh ? '左手 F 键' : 'Left-Hand F Lever'}</span>
            <p className="text-slate-600 text-[11px]">左手小指操作的辅助F键，避免分叉F指法打结。</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
            <span className="font-mono font-black text-teal-800 text-sm block">Anche double</span>
            <span className="text-slate-500 font-bold block">{isZh ? '双簧管哨片' : 'Double Reed'}</span>
            <p className="text-slate-600 text-[11px]">两片对称绑扎在47mm铜管上的发音振动体。</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
            <span className="font-mono font-black text-teal-800 text-sm block">Tube / Staple</span>
            <span className="text-slate-500 font-bold block">{isZh ? '软木铜管' : 'Brass Cork Staple'}</span>
            <p className="text-slate-600 text-[11px]">连接双簧管上管内膛的圆锥体铜质基座。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
