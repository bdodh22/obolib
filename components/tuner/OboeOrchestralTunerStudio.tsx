'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, Mic, MicOff, Play, Square, Sliders, Radio, Sparkles, AlertCircle } from 'lucide-react';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeOrchestralTunerStudioProps {
  locale: string;
}

export default function OboeOrchestralTunerStudio({ locale }: OboeOrchestralTunerStudioProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  // Drone State
  const [standardPitch, setStandardPitch] = useState<number>(440); // 440 or 442
  const [customHz, setCustomHz] = useState<number>(440);
  const [isDroneActive, setIsDroneActive] = useState<boolean>(false);
  const [selectedDroneNote, setSelectedDroneNote] = useState<string>('A4');
  const [droneVolume, setDroneVolume] = useState<number>(0.5);

  // Mic Pitch Detection State
  const [isMicActive, setIsMicActive] = useState<boolean>(false);
  const [detectedNote, setDetectedNote] = useState<string>('--');
  const [detectedHz, setDetectedHz] = useState<number>(0);
  const [centsOffset, setCentsOffset] = useState<number>(0);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Toggle Drone
  const handleToggleDrone = () => {
    if (isDroneActive) {
      oboeSynth.stopDrone();
      setIsDroneActive(false);
    } else {
      setIsDroneActive(true);
      const freq = selectedDroneNote === 'A4' ? customHz : oboeSynth.noteToFreq(selectedDroneNote);
      oboeSynth.startDrone(freq, droneVolume);
    }
  };

  // Change pitch standard (440 vs 442)
  const handleSelectStandard = (hz: number) => {
    setStandardPitch(hz);
    setCustomHz(hz);
    if (isDroneActive && selectedDroneNote === 'A4') {
      oboeSynth.updateDroneFrequency(hz);
    }
  };

  // Update Hz slider
  const handleSliderChange = (hz: number) => {
    setCustomHz(hz);
    if (isDroneActive && selectedDroneNote === 'A4') {
      oboeSynth.updateDroneFrequency(hz);
    }
  };

  // Select Drone note
  const handleSelectDroneNote = (note: string) => {
    setSelectedDroneNote(note);
    if (isDroneActive) {
      const freq = note === 'A4' ? customHz : oboeSynth.noteToFreq(note);
      oboeSynth.updateDroneFrequency(freq);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      oboeSynth.stopDrone();
      stopMic();
    };
  }, []);

  // --- Autocorrelation Pitch Detection for Microphone ---
  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      setAudioStream(stream);

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsMicActive(true);
      detectPitchLoop();
    } catch (e) {
      console.warn('Microphone permission denied or error:', e);
      alert(
        isZh
          ? '无法访问麦克风。请检查浏览器麦克风权限设置。'
          : 'Could not access microphone. Please enable audio permissions.'
      );
    }
  };

  const stopMic = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (audioStream) {
      audioStream.getTracks().forEach((t) => t.stop());
      setAudioStream(null);
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsMicActive(false);
    setDetectedNote('--');
    setDetectedHz(0);
    setCentsOffset(0);
  };

  // Autocorrelation algorithm to calculate dominant frequency
  const autoCorrelate = (buf: Float32Array, sampleRate: number): number => {
    let SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) {
      const val = buf[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.015) return -1; // Not enough signal volume

    let r1 = 0,
      r2 = SIZE - 1,
      thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buf[i]) < thres) {
        r1 = i;
        break;
      }
    }
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buf[SIZE - i]) < thres) {
        r2 = SIZE - i;
        break;
      }
    }

    buf = buf.slice(r1, r2);
    SIZE = buf.length;

    const c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE - i; j++) {
        c[i] = c[i] + buf[j] * buf[j + i];
      }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1,
      maxpos = -1;
    for (let i = d; i < SIZE; i++) {
      if (c[i] > maxval) {
        maxval = c[i];
        maxpos = i;
      }
    }
    let T0 = maxpos;

    // Parabolic interpolation
    const x1 = c[T0 - 1],
      x2 = c[T0],
      x3 = c[T0 + 1];
    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);

    return sampleRate / T0;
  };

  const noteStrings = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const noteFromPitch = (frequency: number) => {
    const noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    return Math.round(noteNum) + 69;
  };

  const frequencyFromNoteNumber = (note: number) => {
    return 440 * Math.pow(2, (note - 69) / 12);
  };

  const centsOffFromPitch = (frequency: number, note: number) => {
    return Math.floor((1200 * Math.log(frequency / frequencyFromNoteNumber(note))) / Math.log(2));
  };

  const detectPitchLoop = () => {
    if (!analyserRef.current || !audioContextRef.current) return;
    const buffer = new Float32Array(analyserRef.current.fftSize);
    analyserRef.current.getFloatTimeDomainData(buffer);

    const freq = autoCorrelate(buffer, audioContextRef.current.sampleRate);
    if (freq !== -1 && freq >= 150 && freq <= 2500) {
      const midiNum = noteFromPitch(freq);
      const noteName = noteStrings[midiNum % 12];
      const octave = Math.floor(midiNum / 12) - 1;
      const cents = centsOffFromPitch(freq, midiNum);

      setDetectedHz(Math.round(freq * 10) / 10);
      setDetectedNote(`${noteName}${octave}`);
      setCentsOffset(Math.max(-50, Math.min(50, cents)));
    }

    animFrameRef.current = requestAnimationFrame(detectPitchLoop);
  };

  return (
    <div className="w-full space-y-10">
      {/* 1. Main Orchestral Drone Platform */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
              <Music className="w-4 h-4" />
              <span>{isZh ? '交响乐首席神圣基准' : 'Concert Pitch Master'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isZh ? '440Hz / 442Hz 纯净双簧管长音 Drone' : '440Hz / 442Hz Orchestral Drone Generator'}
            </h2>
          </div>

          {/* 440 vs 442 Quick Buttons */}
          <div className="flex items-center gap-2">
            {[
              { hz: 440, label: isZh ? '国际标准 (440 Hz)' : 'Standard (440 Hz)' },
              { hz: 442, label: isZh ? '欧洲乐团 (442 Hz)' : 'European (442 Hz)' },
            ].map((st) => (
              <button
                key={st.hz}
                onClick={() => handleSelectStandard(st.hz)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  standardPitch === st.hz
                    ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Center Big Drone Display */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl">
          {/* Animated Glow when active */}
          {isDroneActive && (
            <div className="absolute inset-0 bg-purple-500/10 animate-pulse pointer-events-none" />
          )}

          <span className="text-xs font-mono uppercase tracking-widest text-purple-300 mb-2">
            {isZh ? '当前持续 Drone 音高' : 'Active Drone Tone'}
          </span>
          <div className="text-6xl sm:text-8xl font-black tracking-tighter text-white font-mono flex items-baseline justify-center gap-3">
            <span>{selectedDroneNote}</span>
            <span className="text-xl sm:text-3xl font-light text-purple-300">
              {selectedDroneNote === 'A4' ? `${customHz.toFixed(1)} Hz` : `${oboeSynth.noteToFreq(selectedDroneNote).toFixed(1)} Hz`}
            </span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={handleToggleDrone}
            className={`mt-8 flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base transition-all duration-200 active:scale-95 shadow-lg ${
              isDroneActive
                ? 'bg-rose-600 hover:bg-rose-700 text-white ring-4 ring-rose-400/30'
                : 'bg-purple-600 hover:bg-purple-500 text-white ring-4 ring-purple-400/30'
            }`}
          >
            {isDroneActive ? <Square className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
            <span>{isDroneActive ? (isZh ? '停止持续伴奏' : 'Stop Drone') : (isZh ? '开启持续长音伴奏' : 'Start Continuous Drone')}</span>
          </button>

          {/* Micro-Hz fine slider */}
          {selectedDroneNote === 'A4' && (
            <div className="w-full max-w-sm mt-8 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>438 Hz</span>
                <span className="text-purple-300 font-bold">{customHz} Hz</span>
                <span>446 Hz</span>
              </div>
              <input
                type="range"
                min="438"
                max="446"
                step="1"
                value={customHz}
                onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Note selector for practice accompaniment */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            {isZh ? '更多常规长音基准选择（适合音阶与泛音练习）' : 'Select Root Note for Long-Tone Practice'}
          </span>
          <div className="flex flex-wrap gap-2">
            {['Bb3', 'C4', 'D4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'F5'].map((n) => (
              <button
                key={n}
                onClick={() => handleSelectDroneNote(n)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedDroneNote === n
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Realtime Pitch Detector Meter (Microphone) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              <Radio className="w-4 h-4" />
              <span>{isZh ? '麦克风实时音准检测仪' : 'Live Pitch Meter'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? '自相关双簧管高频实时测音' : 'Real-Time Chromatic Pitch Detector'}
            </h2>
          </div>

          <button
            onClick={isMicActive ? stopMic : startMic}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all active:scale-95 ${
              isMicActive
                ? 'bg-rose-100 text-rose-700 hover:bg-rose-200 border border-rose-300'
                : 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs'
            }`}
          >
            {isMicActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            <span>{isMicActive ? (isZh ? '关闭麦克风' : 'Stop Listening') : (isZh ? '开启麦克风测音' : 'Enable Microphone')}</span>
          </button>
        </div>

        {/* Pitch Meter Dial Display */}
        <div className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-200/70 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-7xl font-black text-slate-900 font-mono tracking-tight">{detectedNote}</span>
            <span className="text-sm font-mono text-slate-500 block">
              {detectedHz > 0 ? `${detectedHz} Hz` : isZh ? '等待吹奏音频输入...' : 'Awaiting audio input...'}
            </span>
          </div>

          {/* Cents Gauge Bar */}
          <div className="w-full max-w-md space-y-2">
            <div className="relative h-6 bg-slate-200 rounded-full overflow-hidden flex items-center">
              {/* Center in-tune line */}
              <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-full bg-slate-900 z-10" />

              {/* Dynamic Indicator */}
              {isMicActive && detectedHz > 0 && (
                <div
                  className={`absolute top-0 bottom-0 w-3 rounded-full transition-all duration-100 ${
                    Math.abs(centsOffset) <= 5
                      ? 'bg-emerald-500 shadow-md shadow-emerald-400'
                      : Math.abs(centsOffset) <= 15
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                  style={{
                    left: `${Math.min(95, Math.max(5, 50 + centsOffset))}%`,
                    transform: 'translateX(-50%)',
                  }}
                />
              )}
            </div>

            <div className="flex justify-between text-[11px] font-mono font-bold text-slate-400">
              <span>-50 Cents (Flat)</span>
              <span className={Math.abs(centsOffset) <= 5 && detectedHz > 0 ? 'text-emerald-600 font-bold' : ''}>
                {centsOffset > 0 ? `+${centsOffset} Cents` : `${centsOffset} Cents`}
              </span>
              <span>+50 Cents (Sharp)</span>
            </div>
          </div>

          {/* In-Tune Status Badge */}
          {isMicActive && detectedHz > 0 && (
            <div
              className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                Math.abs(centsOffset) <= 5
                  ? 'bg-emerald-100 text-emerald-800'
                  : centsOffset > 5
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              {Math.abs(centsOffset) <= 5
                ? (isZh ? '✓ 音准完美 (In Tune)' : '✓ In Tune')
                : centsOffset > 0
                ? (isZh ? '▲ 偏高 (Sharp) - 稍松嘴唇或拔开软木管' : '▲ Pitch Sharp')
                : (isZh ? '▼ 偏低 (Flat) - 增强腹部气压支撑' : '▼ Pitch Flat')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
