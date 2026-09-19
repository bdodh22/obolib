import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Music,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Award,
  Wrench,
  BookOpen,
  Sparkles,
  Activity,
  Layers,
  Compass,
  Radio,
  Clock,
  Wind,
} from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
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
    zh: '双簧管交互指法图与声学琴房工作台 | OboLib',
    en: 'Oboe Fingering Chart & Acoustic Studio | OboLib',
    de: 'Oboen-Grifftabelle & Akustik-Studio | OboLib',
    ja: 'オーボエ運指表＆音響練習室ワークベンチ | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    zh: '覆盖Bb3至A6全音域双簧管交互指法表与7合1琴房工作台。支持半孔裂隙、3个八度键、左手F决策与乐团A440/A442Hz声学调音。',
    en: 'Complete Bb3 to A6 interactive oboe fingering chart and 7-in-1 acoustic studio. Master half-hole, 3 octave keys, left-F, and A440/A442 tuning.',
    de: 'Vollständige Oboen-Grifftabelle von B3 bis A6 und 7-in-1 Akustik-Studio. Halbloch, 3 Oktavklappen, linkes F und A440/A442 Orchester-Stimmer.',
    ja: 'Bb3からA6までのオーボエ運指表と7in1音響練習室。ハーフホール、3オクターブキー、左手F判定、A440/A442Hzチューナーを完全網羅。',
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

export default function LocalizedHomePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const locHref = (path: string) => getLocalizedPath(path, locale);
  const config = getInstrumentConfig();

  const homeContent = {
    zh: {
      badge: '巴黎音乐学院制式 · Bb3 至 A6 全音域覆盖',
      h1: '双簧管全音域交互指法图与声学工作台',
      subtitle:
        '结合真实管弦乐双簧管谐波物理建模，一站式解决食指半孔裂隙、3个八度键联动、左手F瞬间决策与A440/442Hz声学校准。',
      ctaPrimary: '开启指法工作台',
      ctaSecondary: '进入琴房工作台',
      hudItems: [
        { value: '36', label: '全音域半音', desc: 'Bb3 至 A6 完整指法' },
        { value: '23', label: '机械联动键', desc: '半孔 / 3八度键 / 左手F' },
        { value: '7 合 1', label: '声学琴房工具', desc: '调音 / Drone / 呼吸训练' },
        { value: '150+', label: '静态合规矩阵', desc: '名作分谱 / 实战百科 / 问答' },
      ],
      pathwaysTitle: '3 大场景快速分流通关通道',
      pathwaysSubtitle: '无论处于哪个演奏阶段，快速定位您的专属提分与排练工具',
      pathways: [
        {
          tag: '新手启蒙',
          title: '基础指法与防爆音通关',
          desc: '从第一把位中音域起步，掌握食指半孔滚动技巧，攻克初学者常见的破音与堵气。',
          href: '/fingering',
          action: '查阅基础指法 →',
        },
        {
          tag: '考级与独奏',
          title: '传世协奏曲与独奏名段分谱',
          desc: '精选莫扎特 K.314、理查·施特劳斯、费林练习曲，提供针对性慢练指引与考点解析。',
          href: '/scores',
          action: '浏览分谱中心 →',
        },
        {
          tag: '乐团首席',
          title: '首席 A 音仪式与声学校准',
          desc: 'A=440Hz / A=442Hz 乐团给音 15 秒仪式、高音区 Voicing 与微米级哨片诊断。',
          href: '/tools',
          action: '进入首席工具箱 →',
        },
      ],
      matrixTitle: '6 大核心专业矩阵',
      matrixSubtitle: '涵盖指法、声学、曲目、乐理、哨片与日常保养的完整技术闭环',
      matrices: [
        {
          title: '数字化按键运指中心',
          desc: '三栏一体化按键工作台，支持五线谱联动与 1200px 高清指法海报卡导出。',
          icon: Activity,
          href: '/fingering',
          tag: '核心工作台',
        },
        {
          title: '7 合 1 声学琴房工作台',
          desc: 'A440/442 调音、节拍器、持续 Drone、左手 F 决策树与 CO2 排浊呼吸器。',
          icon: Wrench,
          href: '/tools',
          tag: '练习套件',
        },
        {
          title: '传世名作分谱与慢练中心',
          desc: '莫扎特、施特劳斯、奇马罗萨等 6 大双簧管传世作品分谱与逐段攻克。',
          icon: BookOpen,
          href: '/scores',
          tag: '考级曲谱',
        },
        {
          title: '乐手实战百科与避坑指南',
          desc: '防裂急救、二手验货真空测试、咬唇下颌减压与高音区咽腔 Voicing 指南。',
          icon: Compass,
          href: '/knowledge',
          tag: '避坑指南',
        },
        {
          title: '双簧管哨片诊断室',
          desc: 'Tip / Heart / Spine / Back 5大分区交互诊断，逆光微米刮修处方建议。',
          icon: ShieldCheck,
          href: '/reed-doctor',
          tag: '哨片修削',
        },
        {
          title: '合成哨片选型与硬度换算',
          desc: 'Légère 欧式与美式切口硬度精准换算，温度耐受与现场稳定性评测。',
          icon: Sliders,
          href: '/synthetic-reeds',
          tag: '硬度换算',
        },
      ],
    },
    en: {
      badge: 'Conservatoire System · Bb3 to A6 Full Range',
      h1: 'Interactive Oboe Fingering Chart & Studio',
      subtitle:
        'Engineered with physical acoustic overtone modeling to conquer half-hole venting, 3 octave keys, left-F mechanisms, and orchestral A440/442Hz calibration.',
      ctaPrimary: 'Open Fingering Studio',
      ctaSecondary: 'Enter Practice Suite',
      hudItems: [
        { value: '36', label: 'Full Semitones', desc: 'Bb3 to A6 Complete Chart' },
        { value: '23', label: 'Mechanical Keys', desc: 'Half-Hole / 3 Octaves / Left F' },
        { value: '7-in-1', label: 'Acoustic Suite', desc: 'Tuner / Drone / Purge Pacer' },
        { value: '150+', label: 'Static Matrix', desc: 'Scores / Knowledge / FAQs' },
      ],
      pathwaysTitle: '3 Fast-Track Learning Pathways',
      pathwaysSubtitle: 'Navigate directly to tailored practice solutions whatever your performance level',
      pathways: [
        {
          tag: 'Beginners',
          title: 'Foundation & Half-Hole Mechanics',
          desc: 'Master first-octave stability and smooth half-hole rolling to prevent pitch cracks and air blockage.',
          href: '/fingering',
          action: 'Explore Basic Chart →',
        },
        {
          tag: 'Auditions & Solos',
          title: 'Masterpiece Scores & Slow Practice',
          desc: 'Detailed practice frameworks for Mozart K.314, Strauss, and Ferling 48 Studies with audition insights.',
          href: '/scores',
          action: 'View Score Library →',
        },
        {
          tag: 'Orchestral Principal',
          title: 'Concert A Tuning & Advanced Voicing',
          desc: 'Orchestral A=440/442Hz 15-second ceremony, high-register throat voicing, and micron reed adjustment.',
          href: '/tools',
          action: 'Open Principal Suite →',
        },
      ],
      matrixTitle: '6 Core Architectural Pillars',
      matrixSubtitle: 'A complete technical ecosystem covering fingerings, acoustics, literature, and reed care',
      matrices: [
        {
          title: 'Digital Fingering Studio',
          desc: 'Three-column integrated workstation with dynamic staves and 1200px exportable poster card.',
          icon: Activity,
          href: '/fingering',
          tag: 'Flagship App',
        },
        {
          title: '7-in-1 Acoustic Workbench',
          desc: 'A440/442 tuner, metronome, sustained drone, left-F solver, and CO2 stale-air purge pacer.',
          icon: Wrench,
          href: '/tools',
          tag: 'Practice Suite',
        },
        {
          title: 'Masterpiece Scores & Studies',
          desc: 'Interactive performance guides for Mozart, Strauss, Cimarosa, and Ferling 48 studies.',
          icon: BookOpen,
          href: '/scores',
          tag: 'Sheet Music',
        },
        {
          title: 'Knowledge Base & Field Guides',
          desc: 'Crack prevention, used oboe vacuum test, embouchure pressure relief, and vocal tract voicing.',
          icon: Compass,
          href: '/knowledge',
          tag: 'Field Guides',
        },
        {
          title: 'Virtual Reed Doctor',
          desc: 'Interactive 5-zone diagnostic tool (Tip, Heart, Spine, Back) with backlit scraping prescriptions.',
          icon: ShieldCheck,
          href: '/reed-doctor',
          tag: 'Reed Care',
        },
        {
          title: 'Synthetic Reed Conversion',
          desc: 'Légère European & American cut hardness converter with climate stability analysis.',
          icon: Sliders,
          href: '/synthetic-reeds',
          tag: 'Hardness Matrix',
        },
      ],
    },
    de: {
      badge: 'Konservatorium-System · B3 bis A6 Vollständiger Tonumfang',
      h1: 'Interaktive Oboen-Grifftabelle & Studio',
      subtitle:
        'Entwickelt mit physikalischem Doppelrohrblatt-Obertonmodell für Halbloch, 3 Oktavklappen, linkes F und A440/442Hz Orchester-Intonation.',
      ctaPrimary: 'Grifftabelle öffnen',
      ctaSecondary: 'Studio betreten',
      hudItems: [
        { value: '36', label: 'Halbtöne', desc: 'B3 bis A6 komplett' },
        { value: '23', label: 'Mechanikklappen', desc: 'Halbloch / 3 Oktav / Linkes F' },
        { value: '7-in-1', label: 'Akustik-Tools', desc: 'Stimmer / Bordun / Atmung' },
        { value: '150+', label: 'Statische Seiten', desc: 'Noten / Ratgeber / FAQ' },
      ],
      pathwaysTitle: '3 Schnelleinstiege für Oboisten',
      pathwaysSubtitle: 'Direkter Zugriff auf spezialisierte Werkzeuge passend zu Ihrem Niveau',
      pathways: [
        {
          tag: 'Anfänger',
          title: 'Grundgriffe & Halbloch-Technik',
          desc: 'Stabilität in der ersten Oktave und geschmeidiges Rollen des Zeigefingers gegen Tonkiekser.',
          href: '/fingering',
          action: 'Griffe lernen →',
        },
        {
          tag: 'Probespiel',
          title: 'Meisterkonzerte & Etüden',
          desc: 'Schritt-für-Schritt-Anleitungen für Mozart K.314, Strauss und Ferling Etüden.',
          href: '/scores',
          action: 'Noten öffnen →',
        },
        {
          tag: 'Solo-Oboist',
          title: 'Kammerton A & Intonation',
          desc: 'Orchester-Einstimmzeremonie (440/442Hz), Vokaltrakt-Voicing und Rohrbau-Justierung.',
          href: '/tools',
          action: 'Studio nutzen →',
        },
      ],
      matrixTitle: '6 Säulen des Oboen-Studios',
      matrixSubtitle: 'Ein ganzheitliches System aus Griffen, Akustik, Literatur und Rohrbau',
      matrices: [
        {
          title: 'Digitale Grifftabelle',
          desc: 'Dreispaltiger Arbeitsbereich mit Notenanzeige und 1200px Poster-Export.',
          icon: Activity,
          href: '/fingering',
          tag: 'Kernanwendung',
        },
        {
          title: '7-in-1 Akustik-Werkbank',
          desc: 'A440/442 Stimmgerät, Metronom, Bordun, linke F-Hilfe und CO2-Ausatmungstrainer.',
          icon: Wrench,
          href: '/tools',
          tag: 'Übeplattform',
        },
        {
          title: 'Meisterwerke & Etüden',
          desc: 'Noten und 4-Stufen-Übeanleitungen für Mozart, Strauss, Cimarosa und Ferling.',
          icon: BookOpen,
          href: '/scores',
          tag: 'Notenbibliothek',
        },
        {
          title: 'Oboen-Praxiswissen',
          desc: 'Rissschnellhilfe, Vakuum-Gebrauchtkauf-Test, Ansatzentlastung und Hohe-Lagen-Voicing.',
          icon: Compass,
          href: '/knowledge',
          tag: 'Praxis-Ratgeber',
        },
        {
          title: 'Virtueller Rohrbau-Doktor',
          desc: '5-Zonen-Diagnose (Spitze, Herz, Rücken, Schaft) mit Schabeanweisungen.',
          icon: ShieldCheck,
          href: '/reed-doctor',
          tag: 'Rohrbau',
        },
        {
          title: 'Synthetische Rohr-Tabelle',
          desc: 'Légère Härtegrad-Umrechnung für European und American Cut.',
          icon: Sliders,
          href: '/synthetic-reeds',
          tag: 'Härtevergleich',
        },
      ],
    },
    ja: {
      badge: 'コンセルヴァトワール式 · Bb3〜A6 完全網羅',
      h1: 'オーボエ運指表＆音響スタジオワークベンチ',
      subtitle:
        'オーボエ特有の倍音音響モデルに基づき、ハーフホール開口、3つのオクターブキー、左手F判定、A440/442Hz調律を完全サポート。',
      ctaPrimary: '運指スタジオを開く',
      ctaSecondary: '練習室に入る',
      hudItems: [
        { value: '36', label: '完全半音域', desc: 'Bb3からA6まで全網羅' },
        { value: '23', label: '連動メカニズム', desc: 'ハーフホール / 3オクターブ / 左手F' },
        { value: '7 in 1', label: '音響練習ツール', desc: 'チューナー / ドローン / 呼吸法' },
        { value: '150+', label: '静的準拠ページ', desc: '楽譜 / 実戦百科 / FAQ' },
      ],
      pathwaysTitle: '3つの高速ステップ別ガイド',
      pathwaysSubtitle: '現在の演奏レベルに合わせて最適な練習ツールへ直行できます',
      pathways: [
        {
          tag: '初心者・入門',
          title: '基本運指とハーフホール克服',
          desc: '中音域の安定発音から、人差し指の滑らかなローリングで音割れと息詰まりを解消。',
          href: '/fingering',
          action: '基本運指を見る →',
        },
        {
          tag: '試験・ソロ',
          title: '名作協奏曲とエチュード楽譜',
          desc: 'モーツァルト K.314、R.シュトラウス、フェルリング48の練習ステップと解説。',
          href: '/scores',
          action: '楽譜ライブラリへ →',
        },
        {
          tag: '首席・実戦',
          title: 'A音ピッチ儀式と音響調律',
          desc: 'A=440/442Hzオーケストラ基準音合わせ、超高音域ヴォイシング、リード診断。',
          href: '/tools',
          action: '首席ツールを開く →',
        },
      ],
      matrixTitle: '6大コア・プロフェッショナル機能',
      matrixSubtitle: '運指、音響、楽譜、理論、リード、メンテナンスを網羅した完全な技術体系',
      matrices: [
        {
          title: 'デジタル運指スタジオ',
          desc: '3カラム一体型ワークベンチ。五線譜リアルタイム連動＆1200pxポスター出力対応。',
          icon: Activity,
          href: '/fingering',
          tag: '基幹アプリ',
        },
        {
          title: '7in1 音響練習室',
          desc: 'A440/442チューナー、メトロノーム、持続ドローン、左手F判定、CO2排出ペーサー。',
          icon: Wrench,
          href: '/tools',
          tag: '練習ツール',
        },
        {
          title: '名作協奏曲＆楽譜センター',
          desc: 'モーツァルト、シュトラウス、チマローザなど6大名曲の楽譜と4段階練習法。',
          icon: BookOpen,
          href: '/scores',
          tag: '名曲楽譜',
        },
        {
          title: '実戦百科＆トラブル回避',
          desc: '管体割れ予防、中古真空密閉テスト、アンブシュア減圧、喉のヴォイシング。',
          icon: Compass,
          href: '/knowledge',
          tag: 'お役立ちガイド',
        },
        {
          title: 'バーチャル・リード診断室',
          desc: '先端・ハート・背骨・背部の5大部位診断と、透光削りシミュレーション。',
          icon: ShieldCheck,
          href: '/reed-doctor',
          tag: 'リード調整',
        },
        {
          title: '樹脂リード硬度換算表',
          desc: 'レジェール（ヨーロピアン＆アメリカン）の硬度換算と気候安定性比較。',
          icon: Sliders,
          href: '/synthetic-reeds',
          tag: '硬度換算',
        },
      ],
    },
  };

  const current = homeContent[locale] || homeContent.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'OboLib - Interactive Oboe Studio',
    url: 'https://obolib.com',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    description: current.subtitle,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
        {/* 顶部 Hero 区域：交响殿堂黑金美学 + 双主次 CTA */}
        <section className="relative text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{current.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {current.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {current.subtitle}
          </p>

          {/* 双主次 CTA 按钮 */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={locHref('/fingering')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm font-black shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <Activity className="w-4 h-4" />
              <span>{current.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={locHref('/tools')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-amber-500/40 text-sm font-bold hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>{current.ctaSecondary}</span>
            </Link>
          </div>
        </section>

        {/* 声学 HUD 仪表盘 */}
        <section aria-label="Acoustic HUD Dashboard">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {current.hudItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between space-y-2 hover:border-amber-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                  {item.value}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 核心运指工作台直出预览（无需跳转即可立即试听、体验） */}
        <section aria-label="Interactive Oboe Fingering Chart Preview" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Interactive Workstation</span>
            </div>
            <Link
              href={locHref('/fingering')}
              className="text-xs text-slate-400 hover:text-amber-400 font-medium flex items-center gap-1 transition-colors"
            >
              <span>View Full Screen Mode</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <OboeFingeringStudio locale={locale} />
        </section>

        {/* 3 大场景快速分流通关通道 */}
        <section className="space-y-8 pt-6 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {current.pathwaysTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {current.pathwaysSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.pathways.map((pathway, idx) => (
              <Link
                key={idx}
                href={locHref(pathway.href)}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {pathway.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pathway.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pathway.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/60 text-xs font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>{pathway.action}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6 大核心矩阵全景观展现 */}
        <section className="space-y-8 pt-6 border-t border-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Ecosystem Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {current.matrixTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {current.matrixSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.matrices.map((matrix, idx) => {
              const Icon = matrix.icon;
              return (
                <Link
                  key={idx}
                  href={locHref(matrix.href)}
                  className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {matrix.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {matrix.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {matrix.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>Enter Hub</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 邮件转化礼包 Lead Magnet */}
        <section className="pt-4">
          <LeadMagnetCard locale={locale as Locale} />
        </section>
      </div>
    </div>
  );
}
