'use client';

import React, { useState, useMemo } from 'react';
import { Volume2, ChevronRight, ChevronLeft, Sparkles, Sliders, Info, BookOpen, Music } from 'lucide-react';
import { OBOE_FINGERINGS, OboeFingeringEntry } from '@/data/oboeFingerings';
import OboeSvgVisualizer from './OboeSvgVisualizer';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeFingeringStudioProps {
  locale: string;
}

export default function OboeFingeringStudio({ locale }: OboeFingeringStudioProps) {
  const isEn = locale === 'en';
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [activeRegister, setActiveRegister] = useState<string>('all');
  const [selectedNoteId, setSelectedNoteId] = useState<string>('a4');
  const [selectedAltIndex, setSelectedAltIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Filter notes by register
  const filteredNotes = useMemo(() => {
    if (activeRegister === 'all') return OBOE_FINGERINGS;
    return OBOE_FINGERINGS.filter((n) => n.register === activeRegister);
  }, [activeRegister]);

  // Current note entry
  const currentNote: OboeFingeringEntry = useMemo(() => {
    return OBOE_FINGERINGS.find((n) => n.id === selectedNoteId) || OBOE_FINGERINGS[11]; // default A4
  }, [selectedNoteId]);

  // Current fingering variant
  const currentFingering = useMemo(() => {
    return currentNote.fingerings[selectedAltIndex] || currentNote.fingerings[0];
  }, [currentNote, selectedAltIndex]);

  // Play audio
  const handlePlaySound = (noteScientific: string) => {
    setIsPlaying(true);
    oboeSynth.playOboeNote(noteScientific, 1.4, 0.6);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1200);
  };

  // Switch note
  const handleSelectNote = (id: string) => {
    setSelectedNoteId(id);
    setSelectedAltIndex(0);
    const target = OBOE_FINGERINGS.find((n) => n.id === id);
    if (target) {
      handlePlaySound(target.scientificNote);
    }
  };

  // Prev / Next Note navigation
  const currentIndex = filteredNotes.findIndex((n) => n.id === currentNote.id);
  const handlePrevNote = () => {
    if (currentIndex > 0) {
      handleSelectNote(filteredNotes[currentIndex - 1].id);
    }
  };
  const handleNextNote = () => {
    if (currentIndex < filteredNotes.length - 1) {
      handleSelectNote(filteredNotes[currentIndex + 1].id);
    }
  };

  // Localized text helpers
  const getFingeringName = (f: typeof currentFingering) => {
    if (isZh) return f.name.zh;
    if (isDe) return f.name.de;
    if (isJa) return f.name.ja;
    return f.name.en;
  };

  const getFingeringDesc = (f: typeof currentFingering) => {
    if (isZh) return f.description.zh;
    if (isDe) return f.description.de;
    if (isJa) return f.description.ja;
    return f.description.en;
  };

  const getRegisterName = (reg: typeof currentNote.registerLabel) => {
    if (isZh) return reg.zh;
    if (isDe) return reg.de;
    if (isJa) return reg.ja;
    return reg.en;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
      {/* 1. Register Filter Bar */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-teal-600" />
          <span className="text-sm font-bold text-slate-800">
            {isZh ? '音区范围' : isDe ? 'Register-Auswahl' : isJa ? '音域選択' : 'Registers'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {[
            { id: 'all', label: isZh ? '全音域 (Bb3-A6)' : isDe ? 'Alle (B3-A6)' : isJa ? '全音域 (Bb3-A6)' : 'All (Bb3-A6)' },
            { id: 'low', label: isZh ? '低音区 (Bb3-F4)' : isDe ? 'Tief (B3-F4)' : isJa ? '低音域 (Bb3-F4)' : 'Low (Bb3-F4)' },
            { id: 'mid', label: isZh ? '中音区 (F#4-C5)' : isDe ? 'Mittel (Fis4-C5)' : isJa ? '中音域 (F#4-C5)' : 'Mid (F#4-C5)' },
            { id: 'high', label: isZh ? '高音区 (C#5-C6)' : isDe ? 'Hoch (Cis5-C6)' : isJa ? '高音域 (C#5-C6)' : 'High (C#5-C6)' },
            { id: 'altissimo', label: isZh ? '超高音 (C#6-A6)' : isDe ? 'Altissimo (Cis6-A6)' : isJa ? '超高音 (C#6-A6)' : 'Altissimo (C#6-A6)' },
          ].map((reg) => (
            <button
              key={reg.id}
              onClick={() => setActiveRegister(reg.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 shrink-0 whitespace-nowrap ${
                activeRegister === reg.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Horizontal Interactive Note Strip */}
      <div className="bg-slate-900 px-4 py-3 sm:px-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
        <div className="flex items-center gap-2 min-w-max">
          {filteredNotes.map((note) => {
            const isSelected = note.id === currentNote.id;
            return (
              <button
                key={note.id}
                onClick={() => handleSelectNote(note.id)}
                className={`flex flex-col items-center justify-center px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  isSelected
                    ? 'bg-teal-500 text-white shadow-md scale-105 ring-2 ring-teal-300'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <span className="text-sm font-bold tracking-tight">{note.note}</span>
                <span className="text-[10px] opacity-75 font-mono">{note.frequency.toFixed(1)}Hz</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Workspace: Info & Controls (Left) + SVG Visualizer (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
        {/* Left: Note details, Alternate Fingerings, Sound Button, Pedagogy Tips */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            {/* Header: Note & Frequency & Navigation */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                    {getRegisterName(currentNote.registerLabel)}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentNote.scientificNote} · {currentNote.frequency.toFixed(2)} Hz
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-3">
                  <span>{currentNote.note}</span>
                  <span className="text-lg sm:text-xl font-normal text-slate-400 font-serif italic">
                    {currentNote.scientificNote}
                  </span>
                </h2>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevNote}
                  disabled={currentIndex <= 0}
                  aria-label="Previous Note"
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextNote}
                  disabled={currentIndex >= filteredNotes.length - 1}
                  aria-label="Next Note"
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Audio Preview Action Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-transparent border border-teal-200/50 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>
                    {isZh ? '双簧管物理共鸣试听' : isDe ? 'Akkustische Synthese' : isJa ? 'オーボエ音響再生' : 'Oboe Acoustic Preview'}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {isZh
                    ? '圆锥管全谐波共振峰模拟（双簧片鼻音核心）'
                    : isDe
                    ? 'Doppelrohrblatt-Formantsynthese (1200Hz / 3000Hz)'
                    : isJa
                    ? '円錐管ダブルリード倍音シミュレーション'
                    : 'Conical bore double-reed formant modeling (1250Hz & 2900Hz)'}
                </p>
              </div>

              <button
                onClick={() => handlePlaySound(currentNote.scientificNote)}
                disabled={isPlaying}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce' : ''}`} />
                <span>{isPlaying ? (isZh ? '发声中...' : 'Playing...') : (isZh ? '播放音高' : 'Play Tone')}</span>
              </button>
            </div>

            {/* Alternate Fingering Selector (If multiple variants exist) */}
            {currentNote.fingerings.length > 1 && (
              <div className="mt-6 space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {isZh ? '指法变体与辅助键' : isDe ? 'Griffvarianten' : isJa ? '運指バリエーション' : 'Fingering Variants'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentNote.fingerings.map((f, idx) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedAltIndex(idx)}
                      className={`p-3 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between ${
                        selectedAltIndex === idx
                          ? 'bg-teal-50 border-teal-500 text-teal-900 ring-1 ring-teal-400'
                          : 'bg-white border-slate-200/80 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-sm">{getFingeringName(f)}</span>
                        {f.isStandard ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-semibold">
                            {isZh ? '推荐' : 'Standard'}
                          </span>
                        ) : f.isLeftF ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold">
                            Left-F
                          </span>
                        ) : f.isForkedF ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                            Forked
                          </span>
                        ) : null}
                      </div>
                      <span className="text-xs text-slate-500 line-clamp-1">{getFingeringDesc(f)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fingering Description & Mechanism Details */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Info className="w-4 h-4 text-teal-600" />
                <span>{getFingeringName(currentFingering)}</span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{getFingeringDesc(currentFingering)}</p>

              {/* Special Oboe Mechanics Highlight */}
              <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-2 text-xs">
                {currentFingering.keys.halfHole === 'half' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100/80 text-amber-900 font-medium">
                    ⚡ {isZh ? '食指半孔机制：指腹轻微下滚露出半月裂隙' : 'Half-Hole Vent: Roll index down to crack vent'}
                  </span>
                )}
                {currentFingering.keys.octave1 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-100 text-teal-900 font-medium">
                    🔑 {isZh ? '第1八度键（左手大拇指背部）' : '1st Octave Key (Thumb)'}
                  </span>
                )}
                {currentFingering.keys.octave2 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-100 text-teal-900 font-medium">
                    🔑 {isZh ? '第2八度键（左手食指侧面杠杆）' : '2nd Octave Key (Forefinger Side)'}
                  </span>
                )}
                {currentFingering.keys.octave3 && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900 font-medium">
                    🚀 {isZh ? '第3八度键（高音天花板共振）' : '3rd Octave Key (Altissimo)'}
                  </span>
                )}
                {currentFingering.keys.leftF && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-100 text-sky-900 font-medium">
                    ✨ {isZh ? '左手F辅助键：避免右手指法打结' : 'Left F Lever: Avoids cross-finger binding'}
                  </span>
                )}
                {currentFingering.keys.forkedFResonance && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 font-medium">
                    🎵 {isZh ? '分叉F共鸣键开启：校正音准明暗' : 'Forked F Resonance: Tone calibration'}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Pro Tip */}
          <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-3">
            <span className="text-base">💡</span>
            <p className="leading-relaxed">
              {isZh
                ? '双簧管演奏核心：气压需极高但排气量极小，下颌切忌过度用力紧咬哨片。半孔音（C#5-Eb5）与八度键交替（G#5到A5）是初学者核心门槛。'
                : isDe
                ? 'Tipp: Der Oboenansatz erfordert hohen Luftdruck bei sehr geringem Luftdurchsatz. Nicht auf das Rohr beißen.'
                : isJa
                ? 'ヒント: オーボエは高い空気圧と微小な息の量を必要とします。リードを強く噛みすぎないように注意しましょう。'
                : 'Oboe Pro Tip: Maintain high breath support with minimal airflow. Avoid biting the reed. The transition between 1st and 2nd octave keys at A5 is a key technique milestone.'}
            </p>
          </div>
        </div>

        {/* Right: Realistic SVG Oboe Body */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
          <OboeSvgVisualizer keys={currentFingering.keys} size="lg" />
        </div>
      </div>
    </div>
  );
}
