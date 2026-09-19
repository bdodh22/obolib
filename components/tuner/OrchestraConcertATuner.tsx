'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Music, Play, Square, Mic, MicOff, Award, Clock, Sparkles, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OrchestraConcertATunerProps {
  locale: string;
}

export default function OrchestraConcertATuner({ locale }: OrchestraConcertATunerProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  // 1. Stage Tuning State
  const [pitchStandard, setPitchStandard] = useState<440 | 442>(440);
  const [isTuningPhaseActive, setIsTuningPhaseActive] = useState<boolean>(false);
  const [phaseStep, setPhaseStep] = useState<'idle' | 'winds' | 'strings' | 'cellos'>('idle');
  const [countdownSeconds, setCountdownSeconds] = useState<number>(15);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 2. Principal Pitch Stability Challenge State
  const [isChallengeActive, setIsChallengeActive] = useState<boolean>(false);
  const [inTuneConsecutiveSeconds, setInTuneConsecutiveSeconds] = useState<number>(0);
  const [bestStreakSeconds, setBestStreakSeconds] = useState<number>(0);
  const [challengeComplete, setChallengeComplete] = useState<boolean>(false);
  const [currentCents, setCurrentCents] = useState<number>(0);
  const [currentHz, setCurrentHz] = useState<number>(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const consecutiveSecTimerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Stage Tuning Orchestral Ceremony ---
  const startTuningCeremony = () => {
    setIsTuningPhaseActive(true);
    setPhaseStep('winds');
    setCountdownSeconds(15);
    oboeSynth.startDrone(pitchStandard, 0.55);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          // Next phase
          setPhaseStep((curr) => {
            if (curr === 'winds') {
              // Switch to strings A
              return 'strings';
            } else if (curr === 'strings') {
              // Switch to cello D
              oboeSynth.updateDroneFrequency(oboeSynth.noteToFreq('D4'));
              return 'cellos';
            } else {
              stopTuningCeremony();
              return 'idle';
            }
          });
          return 12; // 12 seconds for strings/cellos
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTuningCeremony = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    oboeSynth.stopDrone();
    setIsTuningPhaseActive(false);
    setPhaseStep('idle');
    setCountdownSeconds(15);
  };

  useEffect(() => {
    return () => {
      stopTuningCeremony();
      stopPitchChallenge();
    };
  }, []);

  // --- Principal Stability Challenge (Mic Detection) ---
  const startPitchChallenge = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsChallengeActive(true);
      setInTuneConsecutiveSeconds(0);
      setChallengeComplete(false);

      detectPitchLoop();
    } catch (e) {
      alert(isZh ? '无法开启麦克风，请检查浏览器权限。' : 'Microphone access denied.');
    }
  };

  const stopPitchChallenge = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (consecutiveSecTimerRef.current) {
      clearInterval(consecutiveSecTimerRef.current);
      consecutiveSecTimerRef.current = null;
    }
    setIsChallengeActive(false);
    setCurrentCents(0);
    setCurrentHz(0);
  };

  // Autocorrelation Pitch algorithm
  const autoCorrelate = (buf: Float32Array, sampleRate: number): number => {
    let SIZE = buf.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.02) return -1;

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buf[i]) < thres) { r1 = i; break; }
    }
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
    }
    buf = buf.slice(r1, r2);
    SIZE = buf.length;

    const c = new Array(SIZE).fill(0);
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE - i; j++) c[i] = c[i] + buf[j] * buf[j + i];
    }
    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < SIZE; i++) {
      if (c[i] > maxval) { maxval = c[i]; maxpos = i; }
    }
    let T0 = maxpos;
    const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
    const a = (x1 + x3 - 2 * x2) / 2;
    const b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);
    return sampleRate / T0;
  };

  const detectPitchLoop = () => {
    if (!analyserRef.current || !audioContextRef.current) return;
    const buffer = new Float32Array(analyserRef.current.fftSize);
    analyserRef.current.getFloatTimeDomainData(buffer);

    const freq = autoCorrelate(buffer, audioContextRef.current.sampleRate);
    if (freq > 400 && freq < 480) {
      setCurrentHz(Math.round(freq * 10) / 10);
      // Calculate cents deviation from target (440 or 442)
      const cents = Math.round(1200 * Math.log2(freq / pitchStandard));
      setCurrentCents(cents);

      // Check if within ±3 cents
      if (Math.abs(cents) <= 3) {
        setInTuneConsecutiveSeconds((prev) => {
          const next = prev + 0.05;
          if (next >= 10 && !challengeComplete) {
            setChallengeComplete(true);
          }
          return next;
        });
        setBestStreakSeconds((prev) => Math.max(prev, inTuneConsecutiveSeconds));
      } else {
        setInTuneConsecutiveSeconds(0);
      }
    } else {
      setInTuneConsecutiveSeconds(0);
    }

    animFrameRef.current = requestAnimationFrame(detectPitchLoop);
  };

  return (
    <div className="w-full space-y-12">
      {/* 1. Stage Tuning Ceremony Mode */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{isZh ? '全团静默 · 首席校音仪式' : 'Concert Master Ceremony'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? '交响乐团首席 A 音给音流程仪' : 'Orchestral Principal A Tuning Ritual'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[
              { hz: 440, label: 'A=440 Hz (Intl)' },
              { hz: 442, label: 'A=442 Hz (Berlin / Vienna)' },
            ].map((item) => (
              <button
                key={item.hz}
                onClick={() => {
                  setPitchStandard(item.hz as any);
                  if (isTuningPhaseActive) {
                    oboeSynth.updateDroneFrequency(item.hz);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  pitchStandard === item.hz
                    ? 'bg-purple-700 text-white shadow-sm ring-2 ring-purple-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Big Stage Display */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
          {isTuningPhaseActive && (
            <div className="absolute inset-0 bg-purple-600/15 animate-pulse pointer-events-none" />
          )}

          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              {phaseStep === 'winds'
                ? (isZh ? '管乐组校音中 (Winds Tuning)' : 'Woodwinds & Brass Tuning')
                : phaseStep === 'strings'
                ? (isZh ? '弦乐组校音中 (Strings Tuning)' : 'Strings Section Tuning')
                : phaseStep === 'cellos'
                ? (isZh ? '大提琴/低音提琴 D弦校音 (Low Strings)' : 'Cello & Bass D-String Tuning')
                : (isZh ? '舞台准备就绪' : 'Stage Ready')}
            </span>
          </div>

          <div className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-white">
            {isTuningPhaseActive ? `${countdownSeconds}s` : `${pitchStandard}Hz`}
          </div>

          <p className="text-sm text-slate-300 mt-4 max-w-md">
            {phaseStep === 'winds'
              ? (isZh ? '持续吹奏 15 秒饱满纯净长音，注意呼吸微颤音（5.5Hz）平稳起伏。' : 'Hold a steady, rich concert A with subtle 5.5Hz vibrato.')
              : phaseStep === 'strings'
              ? (isZh ? '弦乐组正在对准 A 弦，保持气压支撑不晃动。' : 'Strings aligning A-string pitch, maintain abdominal breath support.')
              : phaseStep === 'cellos'
              ? (isZh ? '切换至 D4，为大提琴与低音提琴组校准低音基准。' : 'Modulated to D4 for low cello and double bass resonance.')
              : (isZh ? '点击下方按钮开启完整的首席给音仪式流程。' : 'Click below to initiate the ceremonial orchestral concert tuning.')}
          </p>

          <button
            onClick={isTuningPhaseActive ? stopTuningCeremony : startTuningCeremony}
            className={`mt-8 flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base transition-all active:scale-95 shadow-xl ${
              isTuningPhaseActive
                ? 'bg-rose-600 hover:bg-rose-700 text-white ring-4 ring-rose-400/30'
                : 'bg-purple-600 hover:bg-purple-500 text-white ring-4 ring-purple-400/30'
            }`}
          >
            {isTuningPhaseActive ? <Square className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
            <span>{isTuningPhaseActive ? (isZh ? '停止校音流程' : 'End Ceremony') : (isZh ? '开启首席给音仪式' : 'Start Tuning Ceremony')}</span>
          </button>
        </div>
      </div>

      {/* 2. Principal Pitch Stability Challenge */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Award className="w-4 h-4" />
              <span>{isZh ? '首席资格耐力测验' : 'Principal Endurance Challenge'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? 'A 音稳定度挑战：维持 ±3 音分持续 10 秒' : 'Concert A Stability Challenge: Hold ±3 Cents for 10s'}
            </h2>
          </div>

          <button
            onClick={isChallengeActive ? stopPitchChallenge : startPitchChallenge}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all active:scale-95 ${
              isChallengeActive
                ? 'bg-rose-100 text-rose-700 hover:bg-rose-200 border border-rose-300'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
            }`}
          >
            {isChallengeActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            <span>{isChallengeActive ? (isZh ? '停止测验' : 'Stop Challenge') : (isZh ? '开启麦克风测验' : 'Start Challenge')}</span>
          </button>
        </div>

        {/* Live Challenge Gauge */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center space-y-6">
          {/* Progress Circle & Streak */}
          <div className="flex flex-col items-center">
            <span className="text-6xl sm:text-7xl font-black font-mono text-slate-900">
              {inTuneConsecutiveSeconds.toFixed(1)}s <span className="text-2xl text-slate-400">/ 10s</span>
            </span>
            <span className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">
              {isZh ? '在 ±3 音分内连续保持时长' : 'Continuous time within ±3 cents'}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-100 ${
                challengeComplete ? 'bg-emerald-500' : 'bg-purple-600'
              }`}
              style={{ width: `${Math.min(100, (inTuneConsecutiveSeconds / 10) * 100)}%` }}
            />
          </div>

          {/* Realtime Cents Indicator */}
          {isChallengeActive && (
            <div className="flex items-center gap-4 text-sm font-mono">
              <span className="text-slate-500">Live Freq: {currentHz} Hz</span>
              <span
                className={`font-black px-3 py-1 rounded-full ${
                  Math.abs(currentCents) <= 3
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {currentCents > 0 ? `+${currentCents}` : currentCents} Cents
              </span>
            </div>
          )}

          {/* Badge Unlocked Card */}
          {challengeComplete && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 border border-amber-300 text-amber-950 text-center space-y-2 max-w-md animate-bounce-short">
              <div className="flex items-center justify-center gap-2 font-black text-base text-amber-900">
                <Award className="w-5 h-5 text-amber-600" />
                <span>{isZh ? '🎉 恭喜！获得「首席双簧管音准金奖勋章」' : '🎉 Principal Oboe Pitch Master Award!'}</span>
              </div>
              <p className="text-xs leading-relaxed">
                {isZh
                  ? '您吹奏的 A 音成功在 ±3 音分严苛公差内持续稳定超过 10 秒，具备交响乐团首席的顶级音色控制力！'
                  : 'You maintained Concert A within ±3 cents for 10+ consecutive seconds. True principal-grade breath stability!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
