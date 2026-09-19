'use client';

import React, { useState } from 'react';
import { Sliders, Sparkles, ExternalLink, CheckCircle2, ShieldCheck, DollarSign, Info } from 'lucide-react';

interface ReedMatrixRow {
  naturalGrade: string;
  legereEuropean: string;
  legereAmerican: string;
  ambipolyGrade: string;
  tipOpening: string;
  recommendedFor: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  tonalCharacter: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
}

const HARDNESS_MATRIX: ReedMatrixRow[] = [
  {
    naturalGrade: 'Soft (S)',
    legereEuropean: '68 - 69',
    legereAmerican: 'Medium-Soft (MS)',
    ambipolyGrade: '2.5',
    tipOpening: '0.62 mm',
    recommendedFor: {
      en: 'Beginners (Year 1), young students with developing lip embouchure stamina.',
      zh: '初学者（第1年）、青少年学生、唇部肌肉耐力正在建立的练习者。',
      de: 'Anfänger (1. Jahr), junge Schüler mit sich entwickelndem Ansatz.',
      ja: '初心者（1年目）、アンブシュア持久力を養成中のジュニア奏者。',
    },
    tonalCharacter: {
      en: 'Extremely effortless attack, free-blowing, slightly bright and open tone.',
      zh: '起音极度省力，通畅无阻力，音色稍亮且张口偏开。',
      de: 'Sehr leichte Ansprache, offener und hellerer Klang.',
      ja: '極めて容易な発音、息が通りやすく明るく開放的な音色。',
    },
  },
  {
    naturalGrade: 'Medium Soft (MS)',
    legereEuropean: '70 - 71',
    legereAmerican: 'Medium (M)',
    ambipolyGrade: '3.0',
    tipOpening: '0.65 mm',
    recommendedFor: {
      en: 'Intermediate school bands, marching band outdoor performances (weather immune).',
      zh: '中级管乐团乐手、户外行进乐团演出（完全免疫寒冷干燥变异）。',
      de: 'Mittelstufe, Blasorchester, Auftritte bei schwankendem Wetter.',
      ja: '中級バンド奏者、温度・湿度の影響を避けたい屋外演奏。',
    },
    tonalCharacter: {
      en: 'Balanced blowing resistance, warm tone center, very stable middle register.',
      zh: '阻抗适中温和，音色具有良好焦点，中音区表现极度稳固。',
      de: 'Ausgewogener Blaswiderstand, warmes Klangzentrum.',
      ja: 'バランスの取れた抵抗感、温かみのある芯、安定した中音域。',
    },
  },
  {
    naturalGrade: 'Medium (M) ★ Most Popular',
    legereEuropean: '72 (Sweet Spot)',
    legereAmerican: 'Medium (M)',
    ambipolyGrade: '3.5',
    tipOpening: '0.68 mm',
    recommendedFor: {
      en: 'Conservatory students, advanced amateurs, orchestral second oboe.',
      zh: '音乐学院专业生、资深双簧管乐手、交响乐团副首席/二双簧管。',
      de: 'Musikstudenten, fortgeschrittene Orchesterspieler (2. Oboe).',
      ja: '音楽大学専攻生、上級アマチュア、オーケストラ奏者。',
    },
    tonalCharacter: {
      en: 'Dark, round, singing core with exceptional pitch stability up to High C6.',
      zh: '深沉暗醇、圆润且富有歌唱性，在超高音区（至高音C6）保持黄金音准。',
      de: 'Dunkler, runder Orchesterklang mit perfekter Höhenintonation.',
      ja: '深みのあるダークで歌うような音色。高音C6までの卓越したピッチ安定度。',
    },
  },
  {
    naturalGrade: 'Medium Hard (MH)',
    legereEuropean: '73 - 74',
    legereAmerican: 'Medium-Hard (MH)',
    ambipolyGrade: '4.0',
    tipOpening: '0.70 mm',
    recommendedFor: {
      en: 'Orchestral principals, high-air-pressure players, concerto soloists.',
      zh: '交响乐团首席双簧管、习惯大肺活量高气压奏法的演奏家、协奏曲独奏。',
      de: 'Solobläser, Spieler mit kräftiger Stütze und hohem Blasdruck.',
      ja: 'オーケストラ首席奏者、高圧呼気を好むプレイヤー、コンチェルトソリスト。',
    },
    tonalCharacter: {
      en: 'Powerful acoustic projection, immense core resistance, razor-sharp high altissimo.',
      zh: '极具穿透力的剧院投影感，核心抗阻极强，极高音区如激光般锋利集中。',
      de: 'Mächtige Projektion im Saal, hoher Kernwiderstand für die Spitzenhöhe.',
      ja: 'ホールを満たす圧倒的な遠達性、強靭なコア抵抗感、鋭い超高音。',
    },
  },
  {
    naturalGrade: 'Hard (H)',
    legereEuropean: '75 - 76',
    legereAmerican: 'Hard (H)',
    ambipolyGrade: '4.5',
    tipOpening: '0.72 mm',
    recommendedFor: {
      en: 'Professional customizers who scrape and micro-adjust synthetic cane.',
      zh: '专业定制者、需要自主微削打磨合成高聚物材料的资深玩家。',
      de: 'Profis, die synthetisches Material selbst manuell nachschaben.',
      ja: 'ポリマー素材を自分で微細調整・スクレープするプロ奏者。',
    },
    tonalCharacter: {
      en: 'Extremely firm support for maximum symphonic volume.',
      zh: '极度紧致的骨架支撑，承受交响乐狂暴 Fortissimo 爆发。',
      de: 'Extrem fester Halt für maximale symphonische Dynamik.',
      ja: '極めて強靭な支え、オーケストラのフォルティッシモに耐えうる耐久性。',
    },
  },
];

const CPS_REED_PRODUCTS = [
  {
    id: 'legere-european-72',
    name: 'Légère Oboe Reed - European Cut (Strength 72)',
    badge: 'Best Seller · Gold Standard',
    price: '$189.95',
    rating: '4.8 ★★★★★',
    cut: 'European Scrape',
    features: [
      'Pre-mounted on custom O-ring synthetic staple',
      'No soaking required — speaks instantly in seconds',
      'Lifespan: 6-12 months (replaces 20+ cane reeds)',
      '100% weather and humidity immune',
    ],
    featuresZh: [
      '预装高精度 O 型圈气密合成软木管',
      '无需浸泡润湿，拿起乐器瞬间即响',
      '超长寿命 6-12 个月（可替代 20+ 支传统芦苇）',
      '100% 免疫干燥、暴晒与空调房环境突变',
    ],
    url: 'https://www.amazon.com/dp/B07L5P4Q1K?tag=obolib-20',
  },
  {
    id: 'legere-european-70',
    name: 'Légère Oboe Reed - European Cut (Strength 70)',
    badge: 'Best for Transition',
    price: '$189.95',
    rating: '4.7 ★★★★★',
    cut: 'European Scrape (Medium-Soft)',
    features: [
      'Gentle blowing resistance for effortless articulation',
      'Ideal for players switching from cane to synthetic',
      'Clean crow harmonics on A4',
    ],
    featuresZh: [
      '温和抗阻，轻松起音',
      '芦苇转合成材料的首选过渡硬度',
      '标准 A4 清脆双音乌鸦音 (Crow)',
    ],
    url: 'https://www.amazon.com/dp/B07L5PV7B6?tag=obolib-20',
  },
  {
    id: 'silverstein-ambipoly',
    name: 'Silverstein Ambipoly Oboe Reed (Concert Strength 3.5)',
    badge: 'Shapeable Polymer',
    price: '$149.00',
    rating: '4.6 ★★★★☆',
    cut: 'French Scrape',
    features: [
      'Moisturizable poly-delrin cane imitation',
      'Can be scraped and trimmed with standard knife',
      'Warm woody resonance',
    ],
    featuresZh: [
      '新型亲水仿芦苇聚合物',
      '支持使用普通刮刀进行微修削薄',
      '富有类似天然木质的温暖共振',
    ],
    url: 'https://www.amazon.com/dp/B08M9Y8LPL?tag=obolib-20',
  },
];

interface SyntheticReedsMatrixProps {
  locale: string;
}

export default function SyntheticReedsMatrix({ locale }: SyntheticReedsMatrixProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [activeHighlightRow, setActiveHighlightRow] = useState<number>(2); // Default Strength 72 (Medium)

  return (
    <div className="w-full space-y-12">
      {/* 1. Comparison & Conversion Matrix Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
              <Sliders className="w-4 h-4" />
              <span>{isZh ? '全球硬度对照基准' : 'Global Hardness Calibration'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? '天然芦苇 vs Légère 合成哨片硬度换算矩阵' : 'Natural Cane vs. Légère Synthetic Hardness Matrix'}
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-sky-50 text-sky-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Updated for Légère European Cut 2026</span>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/80 border-b border-slate-200/70 text-slate-700 font-bold text-xs uppercase tracking-wider">
              <tr>
                <th className="py-4 px-5">{isZh ? '天然芦苇硬度' : 'Natural Cane'}</th>
                <th className="py-4 px-5 text-sky-700 font-black">Légère European Cut</th>
                <th className="py-4 px-5">Légère American</th>
                <th className="py-4 px-5">Silverstein Ambipoly</th>
                <th className="py-4 px-5">{isZh ? '推荐人群' : 'Recommended For'}</th>
                <th className="py-4 px-5">{isZh ? '音色特征' : 'Tonal Character'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {HARDNESS_MATRIX.map((row, idx) => {
                const isSelected = activeHighlightRow === idx;
                return (
                  <tr
                    key={row.naturalGrade}
                    onClick={() => setActiveHighlightRow(idx)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-sky-50/80 ring-1 ring-inset ring-sky-300' : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-slate-900 whitespace-nowrap">
                      {row.naturalGrade}
                    </td>
                    <td className="py-4 px-5 font-black text-sky-700 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200">
                        {row.legereEuropean}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-slate-600 font-medium whitespace-nowrap">{row.legereAmerican}</td>
                    <td className="py-4 px-5 text-slate-600 font-medium whitespace-nowrap">{row.ambipolyGrade}</td>
                    <td className="py-4 px-5 text-slate-700 text-xs min-w-[200px]">
                      {isZh ? row.recommendedFor.zh : isDe ? row.recommendedFor.de : isJa ? row.recommendedFor.ja : row.recommendedFor.en}
                    </td>
                    <td className="py-4 px-5 text-slate-600 text-xs min-w-[220px]">
                      {isZh ? row.tonalCharacter.zh : isDe ? row.tonalCharacter.de : isJa ? row.tonalCharacter.ja : row.tonalCharacter.en}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Row Detail Banner */}
        <div className="p-5 bg-gradient-to-r from-sky-50 to-transparent border-t border-sky-100 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-sky-900">
            <Info className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              {isZh
                ? '提示：如果你的日常芦苇哨片在 Medium 与 Medium-Soft 之间游移，强烈推荐入手 Légère European Cut 72 号（黄金平衡点）。'
                : 'Pro Advice: If your cane reed hovers between Medium and Medium-Soft, choose Légère European Cut 72.'}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Commercial CPS High-Conversion Product Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {isZh ? '顶级合成双簧管哨片精选推荐' : 'Top Synthetic Oboe Reeds Selection'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {isZh
              ? '终结哨片受天气影响的焦虑：一支顶20支，登台独奏与长途巡演的声学校准保障'
              : 'Zero soaking, zero climate fatigue: Professional synthetic reeds tested for concert stage stability.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CPS_REED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-500/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-bold uppercase tracking-wider">
                  {prod.badge}
                </span>

                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-snug">{prod.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-semibold text-slate-400 font-mono">{prod.cut}</span>
                    <span className="text-xs font-bold text-amber-600">{prod.rating}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {(isZh ? prod.featuresZh : prod.features).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">{isZh ? '零售指导价' : 'Price'}</span>
                  <span className="text-2xl font-black text-slate-900">{prod.price}</span>
                </div>
                <a
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl whitespace-nowrap shrink-0 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>{isZh ? '在 Amazon 购买' : 'Buy on Amazon'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
