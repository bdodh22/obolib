'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Square, Activity, Sparkles, Hand, Zap } from 'lucide-react';
import { OBOE_TRILLS, OboeTrillEntry } from '@/data/oboeTrills';
import OboeSvgVisualizer from '../fingering/OboeSvgVisualizer';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeTrillStudioProps {
  locale: string;
}

export default function OboeTrillStudio({ locale }: OboeTrillStudioProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [selectedTrillId, setSelectedTrillId] = useState<string>('c5-d5');
  const [filterInterval, setFilterInterval] = useState<'all' | 'semitone' | 'wholetone'>('all');
  const [isTrillingAudio, setIsTrillingAudio] = useState<boolean>(false);
  const trillIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentTrill: OboeTrillEntry =
    OBOE_TRILLS.find((t) => t.id === selectedTrillId) || OBOE_TRILLS[0];

  const filteredTrills = OBOE_TRILLS.filter((t) => {
    if (filterInterval === 'all') return true;
    return t.interval === filterInterval;
  });

  // Stop sound when switching or unmounting
  const stopTrillAudio = () => {
    if (trillIntervalRef.current) {
      clearInterval(trillIntervalRef.current);
      trillIntervalRef.current = null;
    }
    setIsTrillingAudio(false);
  };

  useEffect(() => {
    return () => {
      stopTrillAudio();
    };
  }, []);

  const handleSelectTrill = (id: string) => {
    stopTrillAudio();
    setSelectedTrillId(id);
  };

  // Play rapid alternating audio preview (6Hz trill speed)
  const toggleTrillAudio = () => {
    if (isTrillingAudio) {
      stopTrillAudio();
    } else {
      setIsTrillingAudio(true);
      let toggle = false;
      // Play immediately
      oboeSynth.playOboeNote(currentTrill.fromNote, 0.18, 0.5);

      trillIntervalRef.current = setInterval(() => {
        toggle = !toggle;
        const noteToPlay = toggle ? currentTrill.toNote : currentTrill.fromNote;
        oboeSynth.playOboeNote(noteToPlay, 0.18, 0.5);
      }, 160);

      // Auto stop after 4 seconds to protect ears
      setTimeout(() => {
        stopTrillAudio();
      }, 4000);
    }
  };

  const getTrillKeyName = (t: OboeTrillEntry) => {
    if (isZh) return t.trillKeyName.zh;
    if (isDe) return t.trillKeyName.de;
    if (isJa) return t.trillKeyName.ja;
    return t.trillKeyName.en;
  };

  const getShakingFinger = (t: OboeTrillEntry) => {
    if (isZh) return t.shakingFinger.zh;
    if (isDe) return t.shakingFinger.de;
    if (isJa) return t.shakingFinger.ja;
    return t.shakingFinger.en;
  };

  const getTechniqueTip = (t: OboeTrillEntry) => {
    if (isZh) return t.techniqueTip.zh;
    if (isDe) return t.techniqueTip.de;
    if (isJa) return t.techniqueTip.ja;
    return t.techniqueTip.en;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* 1. Filter bar */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-amber-600" />
          <span className="text-sm font-bold text-slate-800">
            {isZh ? '音程类型' : isDe ? 'Intervalltyp' : isJa ? '音程の種類' : 'Interval Filter'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { id: 'all', label: isZh ? '全部颤音' : 'All Trills' },
            { id: 'semitone', label: isZh ? '半音颤音 (m2)' : 'Semitone (m2)' },
            { id: 'wholetone', label: isZh ? '全音颤音 (M2)' : 'Whole Tone (M2)' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterInterval(item.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 whitespace-nowrap ${
                filterInterval === item.id
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
        {/* Left: Trill Selector & Mechanics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Trill Quick Selection Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              {isZh ? '选择目标颤音对' : 'Select Target Trill Pair'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredTrills.map((t) => {
                const isSelected = t.id === currentTrill.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTrill(t.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-300 shadow-xs'
                        : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-black text-base tracking-tight">
                        {t.fromNote} ➔ {t.toNote}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase ${
                          t.interval === 'semitone'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {t.interval === 'semitone' ? 'm2' : 'M2'}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 line-clamp-1">{getTrillKeyName(t)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Trill Detail Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-transparent border border-amber-200/70 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {currentTrill.interval === 'semitone' ? (isZh ? '半音颤音' : 'Semitone Trill') : (isZh ? '全音颤音' : 'Whole-Tone Trill')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-3">
                  <span>{currentTrill.fromNote}</span>
                  <span className="text-amber-500">↔</span>
                  <span>{currentTrill.toNote}</span>
                </h2>
              </div>

              {/* Audio Playback Button */}
              <button
                onClick={toggleTrillAudio}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-95 ${
                  isTrillingAudio
                    ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}
              >
                {isTrillingAudio ? <Square className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                <span>{isTrillingAudio ? (isZh ? '停止试听' : 'Stop Trill') : (isZh ? '交替颤音试听' : 'Simulate Trill')}</span>
              </button>
            </div>

            {/* Key Mechanics Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-amber-200/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isZh ? '专用颤音按键' : 'Trill Key / Lever'}</span>
                </div>
                <span className="text-sm font-bold text-slate-900 block">{getTrillKeyName(currentTrill)}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-amber-200/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
                  <Hand className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isZh ? '执颤手指与手法' : 'Shaking Finger'}</span>
                </div>
                <span className="text-sm font-bold text-slate-900 block">{getShakingFinger(currentTrill)}</span>
              </div>
            </div>

            {/* Execution Technique Advice */}
            <div className="p-4 rounded-2xl bg-white/90 border border-amber-200/60 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                💡 {isZh ? '专业演奏实战秘籍' : 'Performance Tip'}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{getTechniqueTip(currentTrill)}</p>
            </div>
          </div>
        </div>

        {/* Right: SVG Oboe Visualizer with Trill Vibration Pulse */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50/50 rounded-3xl border border-slate-100 relative">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full whitespace-nowrap shrink-0 bg-amber-100 text-amber-900 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            <span>{isZh ? '黄色脉冲为抖动键' : 'Pulsing key = Shake'}</span>
          </div>
          <OboeSvgVisualizer
            keys={currentTrill.baseKeys}
            highlightTrillKey={currentTrill.activeTrillKeyId}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
