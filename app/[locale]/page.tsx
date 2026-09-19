import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Music, Activity, Sparkles, Sliders, ShieldCheck, CheckCircle2, ChevronRight, Award, Wrench, Printer, BookOpen, Layers } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import OboeFingeringStudio from '@/components/fingering/OboeFingeringStudio';
import LeadMagnetCard from '@/components/lead/LeadMagnetCard';

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
  const alternates = getHreflangAlternates('/', locale);

  const titles: Record<Locale, string> = {
    en: 'OboLib: Interactive Oboe Fingering Chart & Reed Doctor',
    zh: 'OboLib: 专业双簧管全音域交互指法图与哨片诊断室',
    de: 'OboLib: Interaktive Oboen-Grifftabelle & Rohrbau-Doktor',
    ja: 'OboLib: インタラクティブ・オーボエ運指表＆リード診断室',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Complete interactive oboe fingering chart from Bb3 to A6 with half-hole, octave keys, left-F, web audio tone synthesis, and reed tuning guide.',
    zh: '覆盖低音Bb3至超高音A6的双簧管全音域交互指法表，支持食指半孔、八度键、左手F切换与Web Audio声学发声，提供专业哨片诊断。',
    de: 'Interaktive Oboen-Grifftabelle von B3 bis A6 mit Halbloch, Oktavklappen, linkem F, Web Audio Klangerzeugung und virtuellem Rohrbau-Doktor.',
    ja: 'Bb3からA6まで網羅するオーボエ完全運指表。ハーフホール、オクターブキー、左手F、リアルタイム音響合成とリード調整ガイドを搭載。',
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
      siteName: 'OboLib',
      type: 'website',
    },
  };
}

export default function LocalizedHomePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const locHref = (path: string) => getLocalizedPath(path, locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'OboLib - Interactive Oboe Studio',
    url: 'https://obolib.com',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    description:
      'Professional oboe learning platform featuring chromatic fingering chart from Bb3 to A6, trill charts, AI reed doctor, synthetic reed selection matrix, and 440/442Hz orchestral tuner.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        {/* Hero Section with High-Converting Single Primary CTA */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Conservatory System · Bb3 to A6 Full Range</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {locale === 'zh' ? (
              <>
                双簧管全音域 <span className="text-teal-600">交互指法图</span> 与声学工坊
              </>
            ) : locale === 'de' ? (
              <>
                Interaktive <span className="text-teal-600">Oboen-Grifftabelle</span> & Sound-Studio
              </>
            ) : locale === 'ja' ? (
              <>
                オーボエ全音域 <span className="text-teal-600">インタラクティブ運指表</span> と工房
              </>
            ) : (
              <>
                Interactive <span className="text-teal-600">Oboe Fingering Chart</span> & Studio
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {locale === 'zh'
              ? '支持食指半孔（Half-Hole）裂隙切换、3个八度键联动、左手F与分叉F辅助键，集成真实双簧管谐波共振峰发声与专业哨片调校。'
              : locale === 'de'
              ? 'Präzise Konservatorium-Mechanik mit Halbloch-Umschaltung, 3 Oktavklappen, linkem F, Gabel-F und echter Doppelrohrblatt-Synthese.'
              : locale === 'ja'
              ? 'ハーフホール開口切り替え、3つのオクターブキー、左手F・フォークF対応。Web Audioによるリアルなオーボエ倍音再生を体験してください。'
              : 'Explore full conservatory mechanics with half-hole vent roll, 3 octave keys, left-hand F levers, forked F resonance, and physical acoustic tone playback.'}
          </p>
        </section>

        {/* Primary Interactive App: Full Range Fingering Studio */}
        <section aria-label="Interactive Oboe Fingering Chart">
          <OboeFingeringStudio locale={locale} />
        </section>

        {/* Bento Grid: 4 Dedicated Pillar Pages (PRD Core Features) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {locale === 'zh' ? '专业进阶工具箱' : locale === 'de' ? 'Spezialwerkzeuge' : locale === 'ja' ? '専門ツール' : 'Essential Oboe Modules'}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {locale === 'zh'
                  ? '专为交响乐团乐手、音乐学院师生打造的高频实战工具'
                  : 'Engineered specifically for orchestral oboists and conservatory students'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Trill Chart Card */}
            <Link
              href={locHref('/trill-chart')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {locale === 'zh' ? '颤音指法速查表' : locale === 'de' ? 'Trillertabelle' : locale === 'ja' ? 'トリル運指表' : 'Trill Chart'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '半音与全音颤音指法，配备 SVG 脉冲高亮动画，指明快速颤动杠杆键。'
                    : 'Semitone & whole-tone oboe trills with animated key shake indicators.'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>{locale === 'zh' ? '立即查询' : 'Open Trills'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 2. Reed Doctor Card */}
            <Link
              href={locHref('/reed-doctor')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {locale === 'zh' ? '双簧管哨片诊断室' : locale === 'de' ? 'Rohrbau-Doktor' : locale === 'ja' ? 'リード診断室' : 'Reed Doctor'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? 'Tip/Heart/Spine/Back/Staple 五大分区交互诊断，虚拟刮刀模拟与修削处方。'
                    : 'Interactive 5-zone scraping advisor (Tip, Heart, Spine, Back, Staple) with virtual knife.'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>{locale === 'zh' ? '诊断处方' : 'Diagnose Reed'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 3. Synthetic Reeds Card */}
            <Link
              href={locHref('/synthetic-reeds')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {locale === 'zh' ? '合成哨片选型矩阵' : locale === 'de' ? 'Synthetische Rohre' : locale === 'ja' ? '樹脂リード換算' : 'Synthetic Reeds'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? 'Légère European Cut / American Cut 硬度精准换算与评测对比。'
                    : 'Légère European/American cut hardness conversion matrix & comparison.'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>{locale === 'zh' ? '查看换算表' : 'View Matrix'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 4. Tuner & Drone Card */}
            <Link
              href={locHref('/tuner')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {locale === 'zh' ? '440/442Hz 首席调音台' : locale === 'de' ? '440/442Hz Stimmgerät' : locale === 'ja' ? '440/442Hz チューナー' : 'Orchestral Tuner'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '交响乐首席 A4 调音标准，纯净双簧管共鸣长音伴奏与麦克风音准仪。'
                    : 'Concert pitch A4 drone generator and real-time frequency meter for oboe.'}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-600">
                <span>{locale === 'zh' ? '启动调音台' : 'Open Tuner'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* Advanced Masterpiece & High-Ticket Gear Hub */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
              <Award className="w-4 h-4" />
              <span>{locale === 'zh' ? '全球独家黑科技与学术枢纽' : 'Principal Lab & Audition Hub'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {locale === 'zh'
                ? '双簧管首席实验室与学术专线'
                : locale === 'de'
                ? 'Solobläser-Labor & Probespiel-Repertoire'
                : locale === 'ja'
                ? 'オーボエ首席研究所＆試金石ソロ'
                : 'Principal Laboratory & Audition Repertoire'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {locale === 'zh'
                ? '突破双簧管最棘手的声学瓶颈：从微米透光刮修、交响乐团试金石独奏到顶级硬件选购'
                : 'Overcome the most demanding acoustic frontiers: micron plaque scraping, concert benchmarks, and master instruments.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Audition Excerpts */}
            <Link
              href={locHref('/excerpts')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '5 大交响乐团必考独奏名段' : 'Top 5 Orchestral Audition Excerpts'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '拉威尔《库普兰之墓》、贝多芬《英雄》、勃拉姆斯、天鹅湖与理查·施特劳斯协奏曲，配备逐音交互指法与考官避坑清单。'
                    : 'Ravel Tombeau, Beethoven Eroica, Brahms, Swan Lake & Strauss. Note-by-note fingering linkage and jury warning points.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '探索独奏数据库 →' : 'Explore Excerpts →'}
              </span>
            </Link>

            {/* 2. Plaque Light Simulator */}
            <Link
              href={locHref('/reed-doctor/plaque-light')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '插板逆光微米刮修模拟器' : 'Plaque Light Scraping Simulator'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '黑曜石插板迎光阴影物理模拟。微米削薄芦苇纤维，实时查看 Tip 响应阻力与音分偏移反馈。'
                    : 'Backlit reed shadow rendering on black plaque. Micron scraping simulator with dynamic pitch cent shift.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '启动透光模拟器 →' : 'Launch Plaque Simulator →'}
              </span>
            </Link>

            {/* 3. Orchestra Tuner Challenge */}
            <Link
              href={locHref('/tools/orchestra-tuner')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                  <Music className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '交响乐团首席 A 音校音仪' : 'Concert A Orchestra Tuner'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '440/442Hz 首席给音仪式引擎与 10 秒音准稳定性挑战，生成首席音准评级卡。'
                    : 'Concert A ceremony engine with stage reverb and 10-second principal pitch stability challenge.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '进入首席校音仪 →' : 'Take Pitch Challenge →'}
              </span>
            </Link>

            {/* 4. Reed Making Supplies */}
            <Link
              href={locHref('/reed-doctor/supplies')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '专业制簧工具箱与耗材' : 'Reed Making Supplies & Tools'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '削尖机、Michel 刨床、Landwell 刮刀与 Chiarugi 47mm 欧标软木铜管，职业制簧流水线指南。'
                    : 'Profiling machines, French gougers, Landwell double-hollow knives, and 47mm brass staples.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '查看工具箱推荐 →' : 'View Supplies Guide →'}
              </span>
            </Link>

            {/* 5. Instrument Upgrade Guide */}
            <Link
              href={locHref('/guide/upgrade-oboe')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '双簧管选购与升级指南' : 'Oboe Buyer & Upgrade Guide'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? 'F.Lorée Royale、Marigaux 901、Yamaha Custom 841/441 与 Greenline 防裂材质全面评测。'
                    : 'Compare F.Lorée Royale, Marigaux 901, Yamaha 841/441, and crack-proof Greenline composites.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '阅读选购指南 →' : 'Read Buyer Guide →'}
              </span>
            </Link>

            {/* 6. A4 Print Chart */}
            <Link
              href={locHref('/chart/print')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
                  <Printer className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? 'A4纸 300DPI 极清指法海报' : 'Printable A4 300DPI Poster'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '专为琴房与排练室谱架优化的矢量打印页，支持一键打印与另存为 PDF，放大千倍无毛刺。'
                    : 'Studio and rehearsal music stand poster. Zero pixelation vector print with one-click PDF export.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '立即打印海报 →' : 'Print Poster →'}
              </span>
            </Link>

            {/* 7. American vs European Reeds */}
            <Link
              href={locHref('/schools/american-vs-european')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '美式长刮 vs 欧式短刮学派' : 'American vs European Reeds'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '北美 Tabuteau 体系对垒德法大剧院短刮，哨片剖面、台阶倒角与嘴型全景对比。'
                    : 'Tabuteau long scrape vs European short scrape. Scrape geometry, shoulder, and embouchure.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '学派剖面研读 →' : 'Compare Schools →'}
              </span>
            </Link>

            {/* 8. Wind Ensemble Oboe */}
            <Link
              href={locHref('/guide/wind-ensemble-oboe')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
                  <Music className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '吹奏乐部双簧管实战攻略' : 'Oboe in Wind Ensemble'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? '2.8kHz 独唱家共振峰穿透 50 人铜管墙，A=442Hz 比赛与排练音准协同。'
                    : 'Singer’s formant penetration against brass, 442Hz tuning, and band contest reed care.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '吹奏乐实战指南 →' : 'Wind Band Guide →'}
              </span>
            </Link>

            {/* 9. French Conservatoire Heritage */}
            <Link
              href={locHref('/schools/french-conservatoire')}
              className="group p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                  {locale === 'zh' ? '法式巴黎音乐学院体系专题' : 'French Conservatoire Heritage'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {locale === 'zh'
                    ? 'Triébert 6号系统机械演进，Barret 与 Ferling 经典教程文献与法文管乐术语库。'
                    : 'Triébert Système 6 mechanics, Barret & Ferling methods, and French woodwind glossary.'}
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                {locale === 'zh' ? '探索法式学派 →' : 'Explore Conservatoire →'}
              </span>
            </Link>
          </div>
        </section>

        {/* Lead Magnet Free Value Capture */}
        <section>
          <LeadMagnetCard locale={locale as Locale} />
        </section>
      </div>
    </>
  );
}
