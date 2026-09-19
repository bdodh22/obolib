import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Award, Music, Layers, ArrowLeft, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates, getLocalizedPath } from '@/lib/i18n/config';
import WindEnsembleAcousticsStudio from '@/components/schools/WindEnsembleAcousticsStudio';

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
  const alternates = getHreflangAlternates('/guide/wind-ensemble-oboe', locale);

  const titles: Record<Locale, string> = {
    en: 'Oboe in Wind Ensemble: Brass Penetration & Tuning | OboLib',
    zh: '吹奏乐部双簧管实战指南: 铜管穿透力与442Hz音准 | OboLib',
    de: 'Oboe im Blasorchester: Klangprojektion & Stimmung | OboLib',
    ja: '吹奏楽部オーボエ攻略: 音抜け・金管突破・ピッチ | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Essential guide for oboists in symphonic wind bands. Master acoustic projection through 50 brasses, A=442Hz tuning with flutes, and contest prep.',
    zh: '专为交响管乐队与日本高中吹奏乐部（吹コン）打造的双簧管实战手册。详解 2.8kHz 共鸣峰穿透 50 人铜管墙、A=442Hz 八度和声协同与比赛哨片管理。',
    de: 'Überlebensleitfaden für Oboisten im sinfonischen Blasorchester: Klangprojektion gegen Blechbläser, 442Hz Intonationsabgleich und Rohrkonditionierung.',
    ja: '吹奏楽部オーボエ奏者のための実践ガイド。金管に埋もれないフォルマント音抜け、フルートとの442Hzピッチ調和、コンクール本番のリード管理法。',
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

export default function WindEnsembleOboeGuidePage({ params }: PageProps) {
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
    headline: isZh ? '吹奏乐部双簧管实战指南' : 'Oboe in Symphonic Wind Ensemble Guide',
    description: isZh
      ? '针对吹奏乐部与大编制管乐队双簧管声部穿透力、音准协同与比赛实战全景指南'
      : 'Comprehensive acoustic projection and rehearsal guide for wind band oboists.',
    author: {
      '@type': 'Organization',
      name: config.brandName,
    },
    url: `${config.baseUrl}${getLocalizedPath('/guide/wind-ensemble-oboe', locale)}`,
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
          href={getLocalizedPath('/tools', locale)}
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isZh ? '返回工具箱' : 'Back to Toolkit'}</span>
        </Link>

        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
          Wind Band & Contest Hub
        </span>
      </div>

      {/* Header with Single H1 */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-teal-600" />
          <span>Symphonic Wind Band Master Series</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {isZh
            ? '吹奏乐部双簧管实战生存指南'
            : isDe
            ? 'Oboe im sinfonischen Blasorchester'
            : isJa
            ? '吹奏楽部オーボエ攻略ガイド'
            : 'Oboe in Symphonic Wind Ensemble'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isZh
            ? '专为交响管乐队与吹奏乐大赛（吹コン）乐手打造。在 50 人铜管包围的巨大声浪中，如何不咬哨片、凭借 2.8kHz 独唱家共振峰穿透全场？A=442Hz 与长笛、单簧管八度和声如何精确协同？'
            : isDe
            ? 'Überleben im 50-köpfigen Blasorchester: Klangprojektion durch den Sängerformanten (2,8-3,5 kHz), präzise 442Hz-Intonation und professionelle Wettbewerbs-Rohrpflege.'
            : isJa
            ? '全日本吹奏楽コンクールを目指すオーボエ奏者の必読書。50人の金管群に埋もれない倍音の飛ばし方、フルート・クラリネットとの442Hz和音構築、本番の乾燥対策を徹底解説。'
            : 'The definitive survival guide for wind band oboists. Learn to cut through 50-player brass textures using the 2.8kHz-3.5kHz singer’s formant, lock into rock-solid 442Hz band tuning, and maintain contest-ready reeds.'}
        </p>
      </div>

      {/* Interactive Studio Component */}
      <WindEnsembleAcousticsStudio locale={locale} />

      {/* Recommended Gear for Band Oboists */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {isZh ? '吹奏乐部首席双簧管必备“三大件”' : 'Wind Band Oboist Essential Rehearsal Kit'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isZh ? '乐团排练室与大厅舞台实战必备' : 'Tested in grueling 3-hour band rehearsals and contest stages.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 block">01 · 水分补给瓶</span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '谱架水密封小罐 (Airtight Water Vial)' : 'Music Stand Water Vial'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '双簧管在 12 分钟自选曲中有大量几十小节的长休止符。舞台聚光灯与空调会在 90 秒内烤干哨片尖端，长休止符时静音蘸水 2 秒可保持开合度与起音灵敏度。'
                : 'Airtight vial attached to the stand keeps tips hydrated during prolonged 30-measure tacet periods on stage.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 block">02 · 左手 F 辅助键</span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '左手 F 键 (Left-Hand F Lever)' : 'Left-Hand F Lever'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '管乐队快速木管齐奏极多（如保罗·欣德米特、大卫·马斯兰卡作品）。必须坚决养成使用左手小指 F 键的习惯，彻底告别右手分叉 F（Forked F）的笨拙与跑调。'
                : 'Mandatory for modern band literature (Maslanka, Husa, Barnes). Eliminates clumsy forked-F cross fingerings.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="font-mono text-xs font-bold text-teal-700 block">03 · 防裂材质管身</span>
            <h3 className="font-bold text-slate-900 text-sm">
              {isZh ? '防裂上管 (Yamaha Duet+ / Buffet Greenline)' : 'Crack-Proof Upper Joint'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isZh
                ? '学校吹奏乐部排练厅冬天与比赛会场温差常超 15℃，初中与高中管乐团开裂率极高。推荐 Yamaha YOB-441M 或 841L Duet+，上管内衬树脂，100% 免疫管体炸裂。'
                : 'Protects against sudden 15°C temperature swings between rehearsal rooms and air-conditioned stages.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
