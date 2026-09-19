'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, AlertTriangle, ShieldCheck, Check, Layers, Sliders } from 'lucide-react';
import { WIND_ENSEMBLE_GUIDES, WindEnsembleSectionGuide } from '@/data/windEnsembleData';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface WindEnsembleAcousticsStudioProps {
  locale: string;
}

export default function WindEnsembleAcousticsStudio({ locale }: WindEnsembleAcousticsStudioProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [formantBoost, setFormantBoost] = useState<boolean>(true);

  const playDemoSound = () => {
    if (formantBoost) {
      // Focused 2.9kHz projection
      oboeSynth.playOboeNote('C5', 1.5, 0.7);
    } else {
      // Dull, swallowed tone
      oboeSynth.playOboeNote('C5', 1.5, 0.4);
    }
  };

  return (
    <div className="w-full space-y-10">
      {/* 1. Acoustic Frequency Masking Interactive Visualizer */}
      <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 font-bold uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4" />
              <span>Acoustic Frequency Spectrum & Projection</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              {isZh ? '大编制管乐声学遮蔽与“独唱家共振峰”穿透原理' : 'Acoustic Masking & Formant Projection'}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFormantBoost(!formantBoost)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                formantBoost
                  ? 'bg-teal-500 text-slate-950 font-black ring-2 ring-teal-300'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {formantBoost
                ? (isZh ? '⚡ 3.0kHz 共鸣峰增强 (穿透态)' : 'Laser 3.0kHz Formant (ON)')
                : (isZh ? '⚪ 普通基频发音 (易被遮蔽)' : 'Standard Fundamental (OFF)')}
            </button>

            <button
              onClick={playDemoSound}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 font-bold transition-all active:scale-95"
              aria-label="Play acoustic simulation"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Acoustic Spectrum Chart Mockup */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Low-Mid Masking Zone (Brass) */}
            <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-900/60 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-rose-400 uppercase tracking-wide">
                  500Hz - 1,500Hz · 铜管轰鸣危险区
                </span>
                <span className="font-mono text-rose-300 font-bold">105 dB+</span>
              </div>
              <p className="text-xs text-rose-200/80 leading-relaxed">
                {isZh
                  ? '小号、长号、圆号在中频和声区具有极强破坏力。双簧管若盲目在此频段硬吹，音色将被彻底淹没吸收。'
                  : 'Brass sections overwhelm this band. Fighting here with jaw force results in choked tone.'}
              </p>
            </div>

            {/* High Formant Sweet Spot (Oboe) */}
            <div className="p-5 rounded-2xl bg-teal-950/50 border border-teal-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-teal-400 uppercase tracking-wide">
                  2,800Hz - 3,500Hz · 独唱家共振峰
                </span>
                <span className="font-mono text-teal-300 font-bold">Projection Window</span>
              </div>
              <p className="text-xs text-teal-200/80 leading-relaxed">
                {isZh
                  ? '铜管在此频段声能骤降。通过抬高舌根（"依"音嘴型）激发高次倍频，声音如激光刀般清晰凸显。'
                  : 'Brass energy falls off sharply. High-order oboe harmonics slice clearly above the ensemble.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Section Guides (SSR Ready) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WIND_ENSEMBLE_GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Ensemble Rule</span>
              </div>

              <h4 className="text-base font-black text-slate-900 leading-snug">
                {isZh ? guide.topic.zh : isDe ? guide.topic.de : isJa ? guide.topic.ja : guide.topic.en}
              </h4>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-900 block">
                  {isZh ? '声学痛点挑战：' : 'Acoustic Challenge:'}
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {isZh ? guide.acousticChallenge.zh : isDe ? guide.acousticChallenge.de : isJa ? guide.acousticChallenge.ja : guide.acousticChallenge.en}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <span className="font-bold text-teal-800 block">
                  {isZh ? '✅ 首席化解策略：' : '✅ Solution Technique:'}
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {isZh ? guide.solutionTechnique.zh : isDe ? guide.solutionTechnique.de : isJa ? guide.solutionTechnique.ja : guide.solutionTechnique.en}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl whitespace-nowrap shrink-0 bg-rose-50 border border-rose-200/70 text-xs text-rose-950 space-y-1">
              <span className="font-bold block text-rose-800 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>{isZh ? '致命禁忌' : 'Avoid This'}</span>
              </span>
              <p className="text-[11px] leading-relaxed">
                {isZh ? guide.pitfallToAvoid.zh : isDe ? guide.pitfallToAvoid.de : isJa ? guide.pitfallToAvoid.ja : guide.pitfallToAvoid.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
