'use client';

import React, { useState } from 'react';
import { Sun, Scissors, RotateCcw, AlertTriangle, Sparkles, Volume2, ShieldCheck, ExternalLink, Sliders } from 'lucide-react';
import { PLAQUE_ZONES, PlaqueZone } from '@/data/reedPlaqueLightData';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboePlaqueLightSimulatorProps {
  locale: string;
}

export default function OboePlaqueLightSimulator({ locale }: OboePlaqueLightSimulatorProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  // Current zone thicknesses (in mm)
  const [thicknesses, setThicknesses] = useState<Record<string, number>>({
    tip: 0.12,     // Starts slightly too thick
    heart: 0.46,
    spine: 0.54,
    windows: 0.36,
  });

  const [selectedZoneId, setSelectedZoneId] = useState<'tip' | 'heart' | 'spine' | 'windows'>('tip');
  const [knifePressure, setKnifePressure] = useState<number>(1); // 1 = light, 2 = medium, 3 = deep
  const [scrapeCount, setScrapeCount] = useState<number>(0);
  const [lastActionReport, setLastActionReport] = useState<string | null>(null);

  const activeZone: PlaqueZone =
    PLAQUE_ZONES.find((z) => z.id === selectedZoneId) || PLAQUE_ZONES[0];

  // Perform virtual micro-scrape on active zone
  const handleScrape = () => {
    const currentThick = thicknesses[selectedZoneId];
    // Remove 0.01mm to 0.025mm per stroke depending on pressure
    const deltaMm = knifePressure * 0.01;
    const newThick = Math.max(0.02, Math.round((currentThick - deltaMm) * 1000) / 1000);

    setThicknesses((prev) => ({
      ...prev,
      [selectedZoneId]: newThick,
    }));
    setScrapeCount((prev) => prev + 1);

    // Calculate acoustic feedback
    const effect = activeZone.acousticEffectPerScrape;
    const isDanger = newThick < activeZone.minSafeThicknessMm;

    if (isDanger) {
      setLastActionReport(
        isZh
          ? `⚠️ 警告！「${activeZone.name.zh}」厚度已降至 ${newThick}mm（低于安全线 ${activeZone.minSafeThicknessMm}mm）！${activeZone.dangerWarning.zh}`
          : `⚠️ DANGER! Thickness dropped to ${newThick}mm (below safe threshold ${activeZone.minSafeThicknessMm}mm). ${activeZone.dangerWarning.en}`
      );
    } else {
      setLastActionReport(
        isZh
          ? `✓ 削去 ${Math.round(deltaMm * 1000)} 微米纤维。当前厚度: ${newThick}mm (标准: ${activeZone.idealThicknessMm}mm)。阻力变通畅 ${Math.abs(effect.resistanceDeltaPercent)}%，高音 F5 音分变化: ${effect.pitchShiftCentsF5} Cents。`
          : `✓ Removed ${Math.round(deltaMm * 1000)}μm cane. Current: ${newThick}mm (Target: ${activeZone.idealThicknessMm}mm). Resistance eased by ${Math.abs(effect.resistanceDeltaPercent)}%, F5 intonation shift: ${effect.pitchShiftCentsF5} cents.`
      );
    }

    // Play preview tone with slight frequency sag if over-thinned
    const baseFreq = 698.46; // F5
    const pitchOffsetRatio = Math.max(0.96, 1 + (effect.pitchShiftCentsF5 / 1200));
    oboeSynth.playOboeNote('F5', 0.8, 0.45);
  };

  const handleReset = () => {
    setThicknesses({
      tip: 0.12,
      heart: 0.46,
      spine: 0.54,
      windows: 0.36,
    });
    setScrapeCount(0);
    setLastActionReport(null);
  };

  // Convert thickness to opacity (Thinner = More transparent)
  const getZoneOpacity = (zoneId: string, baseOpacity: number, idealMm: number) => {
    const current = thicknesses[zoneId] || idealMm;
    const ratio = current / idealMm;
    return Math.min(0.95, Math.max(0.12, baseOpacity * ratio));
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden space-y-8">
      {/* 1. Header Toolbar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Sun className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
              <span>{isZh ? '插板逆光透光微米刮修工作台' : 'Backlight Plaque Scraping Workbench'}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-300 font-mono">
                MICROMETER PRECISION
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {isZh
                ? '还原台灯迎光照看双簧管插板（Plaque）的真实光影阴影'
                : 'Simulating the real-world backlit shadow inspection through black obsidian plaque.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isZh ? '重置芦苇厚度' : 'Reset Cane'}</span>
          </button>
        </div>
      </div>

      {/* 2. Core Interactive Area: Plaque Shadow Visualizer (Left) + Scrape Controls (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
        {/* Left: Realistic Plaque Backlight SVG Display */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-3xl border border-slate-800 relative shadow-2xl">
          {/* Top Light Bulb simulation */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500 mb-3">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Sun className="w-3.5 h-3.5" /> 5000K ILLUMINATION
            </span>
            <span>BLADE SHADOW RENDERER</span>
          </div>

          {/* SVG Backlit Oboe Reed & Plaque */}
          <svg viewBox="0 0 200 360" width="240" height="420" className="drop-shadow-2xl select-none">
            <defs>
              {/* Backlight Bulb Glow Filter */}
              <radialGradient id="lampGlow" cx="50%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
                <stop offset="80%" stopColor="#78350F" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Steel Plaque Material */}
              <linearGradient id="steelPlaque" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              {/* Selected Zone Outline Glow */}
              <filter id="zoneSelectGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#38BDF8" floodOpacity="1" />
              </filter>
            </defs>

            {/* Plaque (Insert Plate inserted behind the top blade) */}
            <path
              d="M 60,30 L 140,30 Q 150,220 120,290 L 80,290 Q 50,220 60,30 Z"
              fill="url(#steelPlaque)"
              stroke="#64748B"
              strokeWidth="2"
            />
            <text x="100" y="270" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold" letterSpacing="1">
              STEEL PLAQUE
            </text>

            {/* Backlight Projection behind cane */}
            <circle cx="100" cy="90" r="85" fill="url(#lampGlow)" />

            {/* ==================================================== */}
            {/* CANE FIBER SHADOW LAYERS                             */}
            {/* ==================================================== */}

            {/* 1. Lateral Windows & Shoulders */}
            <polygon
              points="66,70 134,70 124,190 76,190"
              fill="#D97706"
              fillOpacity={getZoneOpacity('windows', 0.5, 0.30)}
              stroke={selectedZoneId === 'windows' ? '#38BDF8' : '#78350F'}
              strokeWidth={selectedZoneId === 'windows' ? 2 : 1}
              filter={selectedZoneId === 'windows' ? 'url(#zoneSelectGlow)' : undefined}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setSelectedZoneId('windows')}
            />

            {/* 2. Central Spine Ridge (Dark longitudinal pillar) */}
            <path
              d="M 94,40 L 106,40 L 104,185 L 96,185 Z"
              fill="#451A03"
              fillOpacity={getZoneOpacity('spine', 0.88, 0.52)}
              stroke={selectedZoneId === 'spine' ? '#38BDF8' : '#292524'}
              strokeWidth={selectedZoneId === 'spine' ? 2 : 1}
              filter={selectedZoneId === 'spine' ? 'url(#zoneSelectGlow)' : undefined}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setSelectedZoneId('spine')}
            />

            {/* 3. Heart Inverted Triangle */}
            <polygon
              points="70,40 130,40 100,120"
              fill="#92400E"
              fillOpacity={getZoneOpacity('heart', 0.75, 0.42)}
              stroke={selectedZoneId === 'heart' ? '#38BDF8' : '#78350F'}
              strokeWidth={selectedZoneId === 'heart' ? 2 : 1}
              filter={selectedZoneId === 'heart' ? 'url(#zoneSelectGlow)' : undefined}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setSelectedZoneId('heart')}
            />

            {/* 4. Tip (Front 2mm - Ultra-thin, Glowing Translucent) */}
            <polygon
              points="64,15 136,15 130,40 70,40"
              fill="#FEF08A"
              fillOpacity={getZoneOpacity('tip', 0.28, 0.08)}
              stroke={selectedZoneId === 'tip' ? '#38BDF8' : '#CA8A04'}
              strokeWidth={selectedZoneId === 'tip' ? 2 : 1}
              filter={selectedZoneId === 'tip' ? 'url(#zoneSelectGlow)' : undefined}
              className="cursor-pointer transition-all duration-300"
              onClick={() => setSelectedZoneId('tip')}
            />

            {/* Thin Tip Arc (Opening aperture) */}
            <path d="M 64,15 Q 100,8 136,15" stroke="#FACC15" strokeWidth="1.5" fill="none" />

            {/* Zone Labels on SVG */}
            <text x="100" y="28" textAnchor="middle" fill="#451A03" fontSize="8" fontWeight="bold">
              TIP (0.{Math.round(thicknesses.tip * 100)}mm)
            </text>
            <text x="100" y="65" textAnchor="middle" fill="#FEF08A" fontSize="8" fontWeight="bold">
              HEART
            </text>
            <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">
              SPINE
            </text>
            <text x="76" y="110" textAnchor="middle" fill="#FDE047" fontSize="7">
              WINDOW
            </text>
            <text x="124" y="110" textAnchor="middle" fill="#FDE047" fontSize="7">
              WINDOW
            </text>
          </svg>

          {/* Bottom Live Thickness HUD */}
          <div className="w-full grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-slate-800 text-center">
            {['tip', 'heart', 'spine', 'windows'].map((zId) => {
              const z = PLAQUE_ZONES.find((item) => item.id === zId)!;
              const val = thicknesses[zId];
              const isLow = val < z.minSafeThicknessMm;
              return (
                <button
                  key={zId}
                  onClick={() => setSelectedZoneId(zId as any)}
                  className={`p-2 rounded-xl border text-xs transition-all ${
                    selectedZoneId === zId
                      ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] block uppercase font-bold">{zId}</span>
                  <span className={`font-mono font-black ${isLow ? 'text-rose-400' : 'text-amber-400'}`}>
                    {val.toFixed(2)}mm
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Scraping Controls, Zone Specs & Acoustic Diagnostics */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Zone Identity Banner */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{isZh ? '当前操作靶向区' : 'Active Zone Focus'}</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-baseline gap-3">
                <span>{isZh ? activeZone.name.zh : isDe ? activeZone.name.de : isJa ? activeZone.name.ja : activeZone.name.en}</span>
                <span className="text-xs font-mono text-slate-500">
                  Ideal: {activeZone.idealThicknessMm}mm
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {isZh ? activeZone.description.zh : isDe ? activeZone.description.de : isJa ? activeZone.description.ja : activeZone.description.en}
              </p>
            </div>

            {/* Knife Stroke Pressure Slider */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isZh ? '刮刀下刀力度 (Knife Depth)' : 'Scraping Stroke Depth'}</span>
                </span>
                <span className="text-teal-700 font-mono">
                  {knifePressure === 1
                    ? (isZh ? '微米抛光 (10μm)' : 'Fine Polish (10μm)')
                    : knifePressure === 2
                    ? (isZh ? '标准推削 (20μm)' : 'Standard Shave (20μm)')
                    : (isZh ? '重力修削 (30μm)' : 'Heavy Cut (30μm)')}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={knifePressure}
                onChange={(e) => setKnifePressure(parseInt(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            {/* Scrape Action Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleScrape}
                className="flex-1 flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md transition-all active:scale-95"
              >
                <Scissors className="w-4 h-4" />
                <span>
                  {isZh
                    ? `执行轻刮 (${activeZone.name.zh.split(' ')[0]})`
                    : `Execute Knife Stroke on ${activeZone.name.en.split(' ')[0]}`}
                </span>
              </button>

              <button
                onClick={() => oboeSynth.playOboeNote('F5', 1.0, 0.5)}
                title="Audition Tone"
                className="p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all active:scale-95"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Diagnostic Alert Box */}
            {lastActionReport && (
              <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-slate-900 text-emerald-300 font-mono text-xs leading-relaxed border border-emerald-500/30 shadow-inner">
                {lastActionReport}
              </div>
            )}

            {/* Zone Warning Advice */}
            <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-amber-50 border border-amber-200/80 text-xs text-amber-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-800">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>{isZh ? '力学禁忌' : 'Anatomical Rule'}</span>
              </div>
              <p className="leading-relaxed">
                {isZh ? activeZone.dangerWarning.zh : isDe ? activeZone.dangerWarning.de : isJa ? activeZone.dangerWarning.ja : activeZone.dangerWarning.en}
              </p>
            </div>
          </div>

          {/* CPS Tool Referral Integration */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>{isZh ? '推荐搭配专业精钢插板 (Rigotti Plaque)' : 'Paired with Rigotti Blue Steel Plaque'}</span>
            <a
              href="https://www.amazon.com/dp/B01MTXYZ89?tag=obolib-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-teal-600 hover:underline"
            >
              <span>{isZh ? '选购原装插板' : 'View Plaque'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
