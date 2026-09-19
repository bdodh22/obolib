'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Play, Square, Volume2, BookOpen, Sparkles, Award, AlertTriangle, ChevronRight, Gauge, Music } from 'lucide-react';
import { OBOE_EXCERPTS, OboeExcerpt, ExcerptNote } from '@/data/oboeExcerptsData';
import { OBOE_FINGERINGS } from '@/data/oboeFingerings';
import OboeSvgVisualizer from '../fingering/OboeSvgVisualizer';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeExcerptsStudioProps {
  locale: string;
  initialSlug?: string;
}

export default function OboeExcerptsStudio({ locale, initialSlug }: OboeExcerptsStudioProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [activeExcerptSlug, setActiveExcerptSlug] = useState<string>(
    initialSlug || OBOE_EXCERPTS[0].slug
  );
  const [isPlayingSeq, setIsPlayingSeq] = useState<boolean>(false);
  const [activeNoteIndex, setActiveNoteIndex] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.75 | 1.0>(1.0); // 0.75x Practice vs 1.0x Real
  const playTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentExcerpt: OboeExcerpt =
    OBOE_EXCERPTS.find((e) => e.slug === activeExcerptSlug) || OBOE_EXCERPTS[0];

  const currentNoteItem: ExcerptNote =
    currentExcerpt.notesSequence[activeNoteIndex] || currentExcerpt.notesSequence[0];

  // Find matching fingering for current note
  const matchedFingering =
    OBOE_FINGERINGS.find((f) => f.scientificNote === currentNoteItem.scientificNote) ||
    OBOE_FINGERINGS[11]; // default A4

  const stopPlayback = () => {
    if (playTimerRef.current) {
      clearTimeout(playTimerRef.current);
      playTimerRef.current = null;
    }
    setIsPlayingSeq(false);
  };

  useEffect(() => {
    return () => stopPlayback();
  }, []);

  const handleSelectExcerpt = (slug: string) => {
    stopPlayback();
    setActiveExcerptSlug(slug);
    setActiveNoteIndex(0);
  };

  // Play continuous melody sequence
  const startPlayback = () => {
    stopPlayback();
    setIsPlayingSeq(true);

    let idx = 0;
    const playNext = () => {
      if (idx >= currentExcerpt.notesSequence.length) {
        setIsPlayingSeq(false);
        setActiveNoteIndex(0);
        return;
      }
      setActiveNoteIndex(idx);
      const noteItem = currentExcerpt.notesSequence[idx];
      const duration = (noteItem.durationSec / playbackSpeed);

      oboeSynth.playOboeNote(noteItem.scientificNote, duration * 0.9, 0.6);

      idx++;
      playTimerRef.current = setTimeout(playNext, duration * 1000);
    };

    playNext();
  };

  const handleManualNoteClick = (idx: number) => {
    stopPlayback();
    setActiveNoteIndex(idx);
    const note = currentExcerpt.notesSequence[idx];
    oboeSynth.playOboeNote(note.scientificNote, 0.9, 0.6);
  };

  return (
    <div className="w-full space-y-8">
      {/* 1. Horizontal Masterpiece Excerpt Tabs */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-3 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {OBOE_EXCERPTS.map((ex) => {
            const isSelected = ex.slug === currentExcerpt.slug;
            return (
              <button
                key={ex.id}
                onClick={() => handleSelectExcerpt(ex.slug)}
                className={`px-4 py-3 rounded-2xl text-left transition-all ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-md ring-2 ring-teal-300'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                <span className="text-[10px] block font-mono uppercase opacity-75">{ex.composer.split('(')[0]}</span>
                <span className="text-sm font-black tracking-tight block whitespace-nowrap">
                  {isZh ? ex.title.zh.split('独奏')[0] : ex.title.en.split(':')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Studio Workstation: Note Tracker & Analysis (Left) + Fingerings (Right) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
        {/* Left: Score Sequence, Playback controls & Audition Pitfalls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Work Header */}
          <div className="border-b border-slate-100 pb-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              <Award className="w-4 h-4 text-teal-600" />
              <span>{currentExcerpt.difficultyRating}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-mono">{currentExcerpt.movement}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              {isZh ? currentExcerpt.title.zh : currentExcerpt.title.en}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              {currentExcerpt.composer} · {currentExcerpt.tempo} · {currentExcerpt.keySignature}
            </p>
          </div>

          {/* Interactive Note Sequence Player Bar */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={isPlayingSeq ? stopPlayback : startPlayback}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-sm ${
                    isPlayingSeq
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-teal-500 hover:bg-teal-400 text-slate-950'
                  }`}
                >
                  {isPlayingSeq ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlayingSeq ? (isZh ? '停止播放' : 'Stop') : (isZh ? '演奏示范片段' : 'Play Excerpt')}</span>
                </button>

                <button
                  onClick={() => setPlaybackSpeed(playbackSpeed === 1.0 ? 0.75 : 1.0)}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono font-bold hover:bg-slate-700"
                >
                  {playbackSpeed}x {playbackSpeed === 0.75 ? (isZh ? '慢速精练' : 'Slow') : (isZh ? '原速' : 'Tempo')}
                </button>
              </div>

              <span className="text-[11px] font-mono text-teal-300">
                {isZh ? '点击单个音符定位指法' : 'Click note to inspect fingering'}
              </span>
            </div>

            {/* Note Sequence Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentExcerpt.notesSequence.map((item, idx) => {
                const isActive = idx === activeNoteIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => handleManualNoteClick(idx)}
                    className={`flex flex-col items-center px-3.5 py-2 rounded-xl transition-all font-mono ${
                      isActive
                        ? 'bg-teal-500 text-slate-950 font-black scale-110 ring-2 ring-teal-300 shadow-md'
                        : item.isDifficult
                        ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-base font-bold">{item.note}</span>
                    <span className="text-[9px] opacity-75">{item.durationSec}s</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Note Specific Pedagogy Note */}
          {currentNoteItem.techniqueTipZh && (
            <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center gap-2">
              <span className="font-bold">⚡ {isZh ? '难点音符要诀' : 'Critical Note'}:</span>
              <span>{isZh ? currentNoteItem.techniqueTipZh : currentNoteItem.techniqueTipEn}</span>
            </div>
          )}

          {/* Audition Pitfalls (Examiner Checklist) */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{isZh ? '考官扣分避坑红线 (Audition Pitfalls)' : 'Audition Panel Warning Points'}</span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {(isZh ? currentExcerpt.auditionPitfalls.zh : currentExcerpt.auditionPitfalls.en).map((pitfall, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fingering Key Focus Ribbon */}
          <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200/70 text-xs text-teal-900 space-y-1">
            <span className="font-bold uppercase tracking-wider block">
              🔑 {isZh ? '运指核心建议' : 'Fingering Advice'}
            </span>
            <p className="leading-relaxed">
              {isZh ? currentExcerpt.fingeringKeysFocus.zh : currentExcerpt.fingeringKeysFocus.en}
            </p>
          </div>
        </div>

        {/* Right: SVG Fingerings Linked with Active Note */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-slate-50/60 rounded-3xl border border-slate-100">
          <div className="w-full text-center border-b border-slate-200 pb-3 mb-4">
            <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
              LINKED FINGERING POSITION
            </span>
            <div className="flex items-baseline justify-center gap-2 mt-1">
              <span className="text-3xl font-black text-slate-900">{currentNoteItem.note}</span>
              <span className="text-sm font-mono text-slate-500">{currentNoteItem.scientificNote}</span>
            </div>
          </div>

          <OboeSvgVisualizer keys={matchedFingering.fingerings[0].keys} size="md" />

          <div className="w-full mt-4 pt-3 border-t border-slate-200 text-center">
            <button
              onClick={() => oboeSynth.playOboeNote(currentNoteItem.scientificNote, 1.0, 0.6)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-all active:scale-95"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isZh ? `试听 ${currentNoteItem.note} 发音` : `Play ${currentNoteItem.note}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
