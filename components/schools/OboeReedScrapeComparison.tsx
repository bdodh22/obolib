'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, Check, ArrowRight, ShieldCheck, Award, Sliders, Layers } from 'lucide-react';
import { REED_SCHOOLS_DATA, ReedScrapeProfile } from '@/data/oboeSchoolsData';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeReedScrapeComparisonProps {
  locale: string;
}

export default function OboeReedScrapeComparison({ locale }: OboeReedScrapeComparisonProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [activeSchool, setActiveSchool] = useState<'american' | 'european'>('american');

  const american = REED_SCHOOLS_DATA.american;
  const european = REED_SCHOOLS_DATA.european;
  const current = REED_SCHOOLS_DATA[activeSchool];

  const handlePlaySample = (type: 'american' | 'european') => {
    if (type === 'american') {
      // Darker, covered tone
      oboeSynth.playOboeNote('A4', 1.6, 0.55);
    } else {
      // Brighter, projecting harmonic tone
      oboeSynth.playOboeNote('A4', 1.6, 0.65);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* 1. School Selector Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
          <button
            onClick={() => setActiveSchool('american')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeSchool === 'american'
                ? 'bg-teal-700 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🇺🇸 {isZh ? '美式长刮 (Tabuteau)' : isDe ? 'Amerikanischer Schnitt' : isJa ? 'アメリカン・ロング' : 'American Long Scrape'}
          </button>
          <button
            onClick={() => setActiveSchool('european')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeSchool === 'european'
                ? 'bg-teal-700 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🇪🇺 {isZh ? '欧式短刮 (德法传统)' : isDe ? 'Europäischer Schnitt' : isJa ? 'ヨーロピアン・ショート' : 'European Short Scrape'}
          </button>
        </div>
      </div>

      {/* 2. Main Comparative Interactive Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: SVG Scrape Anatomy Visualization */}
        <div className="lg:col-span-6 flex flex-col items-center justify-between p-6 bg-slate-950 rounded-3xl text-white space-y-6">
          <div className="w-full flex items-center justify-between text-xs border-b border-slate-800 pb-3">
            <span className="font-mono text-teal-400 font-bold uppercase tracking-wider">
              {activeSchool === 'american' ? 'LONG SCRAPE ARCHITECTURE' : 'SHORT SCRAPE ARCHITECTURE'}
            </span>
            <span className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded font-mono text-[11px]">
              Total: {current.totalScrapeLengthMm}mm
            </span>
          </div>

          {/* SVG Reed Backlit Silhouette */}
          <div className="w-full flex justify-center py-4">
            <svg viewBox="0 0 200 320" className="w-44 h-72 drop-shadow-[0_0_15px_rgba(45,212,191,0.2)]">
              <defs>
                {/* American Graduated Scrape Gradient */}
                <linearGradient id="americanScrapeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" /> {/* Tip: 0.06mm transparent */}
                  <stop offset="25%" stopColor="#fde047" stopOpacity="0.75" /> {/* Heart */}
                  <stop offset="55%" stopColor="#ca8a04" stopOpacity="0.55" /> {/* Windows */}
                  <stop offset="75%" stopColor="#854d0e" stopOpacity="0.4" /> {/* Spine */}
                  <stop offset="100%" stopColor="#451a03" stopOpacity="0.8" /> {/* Tie point */}
                </linearGradient>

                {/* European Short Step Gradient */}
                <linearGradient id="europeanScrapeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" /> {/* Tip */}
                  <stop offset="35%" stopColor="#eab308" stopOpacity="0.8" /> {/* Heart */}
                  <stop offset="50%" stopColor="#a16207" stopOpacity="0.85" /> {/* End of scrape */}
                  <stop offset="52%" stopColor="#1e293b" stopOpacity="0.95" /> {/* Distinct step shoulder */}
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="1.0" /> {/* Heavy thick natural bark */}
                </linearGradient>
              </defs>

              {/* Brass Staple (47mm) */}
              <rect x="80" y="210" width="40" height="100" rx="3" fill="#d97706" stroke="#b45309" strokeWidth="2" />
              {/* Natural Cork */}
              <rect x="76" y="240" width="48" height="65" rx="4" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
              {/* Thread Binding */}
              <rect x="74" y="195" width="52" height="35" rx="2" fill="#0284c7" />

              {/* Reed Cane Blades */}
              <path
                d="M74,195 Q70,90 65,30 Q100,25 135,30 Q130,90 126,195 Z"
                fill={activeSchool === 'american' ? 'url(#americanScrapeGrad)' : 'url(#europeanScrapeGrad)'}
                stroke="#f59e0b"
                strokeWidth="1.5"
              />

              {/* European 90-degree Shoulder Line Marker */}
              {activeSchool === 'european' && (
                <line x1="68" y1="115" x2="132" y2="115" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="3 2" />
              )}

              {/* Measurement Annotations */}
              <text x="145" y="35" fill="#fde047" fontSize="9" fontFamily="monospace">Tip 0.0{activeSchool === 'american' ? '6' : '8'}mm</text>
              <text x="145" y="75" fill="#facc15" fontSize="9" fontFamily="monospace">Heart</text>
              {activeSchool === 'european' ? (
                <text x="140" y="120" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold">← Shoulder</text>
              ) : (
                <text x="145" y="140" fill="#fbbf24" fontSize="9" fontFamily="monospace">Windows</text>
              )}
            </svg>
          </div>

          <div className="w-full flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
            <span className="text-slate-400">
              {isZh ? '声学音色特征：' : 'Acoustic Tone Character:'}
            </span>
            <button
              onClick={() => handlePlaySample(activeSchool)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all active:scale-95"
            >
              <Volume2 className="w-4 h-4" />
              <span>{isZh ? '试听发音音色' : 'Audition Tone'}</span>
            </button>
          </div>
        </div>

        {/* Right: Detailed Comparative Specs & Pedagogy */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-700 font-bold">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>{current.founderAndTradition[locale as 'en' | 'zh' | 'de' | 'ja'] || current.founderAndTradition.en}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? current.name.zh : isDe ? current.name.de : isJa ? current.name.ja : current.name.en}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isZh ? current.toneColorDescription.zh : isDe ? current.toneColorDescription.de : isJa ? current.toneColorDescription.ja : current.toneColorDescription.en}
            </p>
          </div>

          {/* Key Differences Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="font-bold text-slate-900 block">
                {isZh ? '刮削总长度' : 'Scrape Length'}:
              </span>
              <span className="font-mono text-teal-700 font-black text-sm">
                {current.totalScrapeLengthMm} mm
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="font-bold text-slate-900 block">
                {isZh ? '台阶 (Shoulder)' : 'Shoulder Step'}:
              </span>
              <span className={`font-bold ${current.hasShoulderStep ? 'text-rose-600' : 'text-slate-600'}`}>
                {current.hasShoulderStep ? (isZh ? '90° 陡峭台阶' : 'Distinct 90° Step') : (isZh ? '平滑无台阶' : 'Smooth Seamless')}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="font-bold text-slate-900 block">
                {isZh ? '尖端厚度 (Tip)' : 'Tip Thickness'}:
              </span>
              <span className="font-mono text-slate-700 font-bold">
                {current.tipThicknessMm} mm
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
              <span className="font-bold text-slate-900 block">
                {isZh ? '中心脊柱 (Spine)' : 'Spine Thickness'}:
              </span>
              <span className="font-mono text-slate-700 font-bold">
                {current.spineThicknessMm} mm
              </span>
            </div>
          </div>

          {/* Embouchure Cushion Advice */}
          <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
            <span className="font-bold block">
              👄 {isZh ? '嘴型配合要求 (Embouchure)' : 'Embouchure Technique'}:
            </span>
            <p className="leading-relaxed">
              {isZh ? current.embouchureCushion.zh : isDe ? current.embouchureCushion.de : isJa ? current.embouchureCushion.ja : current.embouchureCushion.en}
            </p>
          </div>

          {/* Prominent Masters */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
              {isZh ? '代表大师与交响乐团' : 'Prominent Artists & Orchestras'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {current.prominentPlayers.map((player, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                >
                  {player}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
