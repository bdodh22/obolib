'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Volume2,
  Clock,
  Radio,
  Activity,
  Flame,
  Wind,
  Award,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';
import { oboeSynth } from '@/lib/audio/oboeSynth';

interface OboeStudioWorkbenchProps {
  locale: string;
}

export default function OboeStudioWorkbench({ locale }: OboeStudioWorkbenchProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [activeTab, setActiveTab] = useState<number>(0);

  // 1. 调音台状态
  const [pitchStandard, setPitchStandard] = useState<number>(442);
  const [detectedCents, setDetectedCents] = useState<number>(0);
  const [isTunerActive, setIsTunerActive] = useState<boolean>(false);

  // 2. 节拍器状态
  const [bpm, setBpm] = useState<number>(100);
  const [timeSignature, setTimeSignature] = useState<number>(4);
  const [isMetronomePlaying, setIsMetronomePlaying] = useState<boolean>(false);
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [tapTimes, setTapTimes] = useState<number[]>([]);
  const metronomeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 3. Drone 对音机状态
  const [activeDroneNote, setActiveDroneNote] = useState<string | null>(null);

  // 4. 15分钟热身台状态
  const [warmupSeconds, setWarmupSeconds] = useState<number>(0);
  const [isWarmupRunning, setIsWarmupRunning] = useState<boolean>(false);

  // 5. F 键决策器状态
  const [precedingNote, setPrecedingNote] = useState<string>('D5');
  const [followingNote, setFollowingNote] = useState<string>('C5');

  // 6. 二氧化碳排浊呼吸状态
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'sustain' | 'dump'>('inhale');
  const [breathCountdown, setBreathCountdown] = useState<number>(4);
  const [isBreathRunning, setIsBreathRunning] = useState<boolean>(false);

  // 7. 首席 15 秒仪式状态
  const [ritualSeconds, setRitualSeconds] = useState<number>(15);
  const [isRitualActive, setIsRitualActive] = useState<boolean>(false);

  // ── 节拍器音频发生器 ──
  const playClick = (isAccent: boolean) => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isAccent ? 1200 : 800, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.07);
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    if (isMetronomePlaying) {
      const intervalMs = (60 / bpm) * 1000;
      metronomeTimerRef.current = setInterval(() => {
        setCurrentBeat((prev) => {
          const next = prev >= timeSignature ? 1 : prev + 1;
          playClick(next === 1);
          return next;
        });
      }, intervalMs);
    } else {
      if (metronomeTimerRef.current) clearInterval(metronomeTimerRef.current);
      setCurrentBeat(1);
    }
    return () => {
      if (metronomeTimerRef.current) clearInterval(metronomeTimerRef.current);
    };
  }, [isMetronomePlaying, bpm, timeSignature]);

  // Tap Tempo 测速
  const handleTapTempo = () => {
    const now = performance.now();
    const newTaps = [...tapTimes.slice(-3), now];
    setTapTimes(newTaps);
    if (newTaps.length >= 2) {
      const diffs = [];
      for (let i = 1; i < newTaps.length; i++) {
        diffs.push(newTaps[i] - newTaps[i - 1]);
      }
      const avgMs = diffs.reduce((a, b) => a + b, 0) / diffs.length;
      const calculatedBpm = Math.round(60000 / avgMs);
      if (calculatedBpm >= 40 && calculatedBpm <= 240) {
        setBpm(calculatedBpm);
      }
    }
  };

  // ── Drone 持续对音控制 ──
  const dronePitches: Record<string, number> = {
    'A4': pitchStandard,
    'Bb3': 233.08,
    'D4': 293.66,
    'F4': 349.23,
    'C5': 523.25,
    'G5': 783.99,
  };

  const handleDroneClick = (noteKey: string) => {
    if (activeDroneNote === noteKey) {
      oboeSynth.stopContinuousDrone();
      setActiveDroneNote(null);
    } else {
      oboeSynth.startContinuousDrone(dronePitches[noteKey], 0.35);
      setActiveDroneNote(noteKey);
    }
  };

  useEffect(() => {
    return () => {
      oboeSynth.stopContinuousDrone();
    };
  }, []);

  // ── 15分钟热身计时器 ──
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isWarmupRunning) {
      timer = setInterval(() => {
        setWarmupSeconds((sec) => (sec < 900 ? sec + 1 : 900));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isWarmupRunning]);

  // ── 二氧化碳排浊呼吸循环 ──
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isBreathRunning) {
      timer = setInterval(() => {
        setBreathCountdown((prev) => {
          if (prev <= 1) {
            if (breathPhase === 'inhale') {
              setBreathPhase('sustain');
              return 12;
            } else if (breathPhase === 'sustain') {
              setBreathPhase('dump');
              return 2;
            } else {
              setBreathPhase('inhale');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isBreathRunning, breathPhase]);

  // ── 首席 15 秒仪式计时 ──
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRitualActive) {
      oboeSynth.startContinuousDrone(pitchStandard, 0.45);
      timer = setInterval(() => {
        setRitualSeconds((sec) => {
          if (sec <= 1) {
            oboeSynth.stopContinuousDrone();
            setIsRitualActive(false);
            return 15;
          }
          return sec - 1;
        });
      }, 1000);
    } else {
      oboeSynth.stopContinuousDrone();
    }
    return () => {
      if (timer) clearInterval(timer);
      oboeSynth.stopContinuousDrone();
    };
  }, [isRitualActive, pitchStandard]);

  // 决策树计算
  const recommendedF = useMemo(() => {
    if (precedingNote === 'Eb' || followingNote === 'Eb') {
      return {
        type: 'Forked F (分叉 F)',
        reasonZh: '前后紧邻 Eb 时左手小指被锁定，必须果断使用分叉 F（配合右小指 Eb 辅助键补偿）',
        reasonEn: 'Left pinky is locked on Eb. Use Forked F assisted with right pinky Eb key for resonance.',
      };
    }
    if (['D5', 'Db5', 'C5'].includes(precedingNote) || ['D5', 'Db5', 'C5'].includes(followingNote)) {
      return {
        type: 'Left F (左手长 F)',
        reasonZh: '与 D、Db、C 快速连续衔接且无左手 Eb 时，无条件优先使用左手 F 键，音质圆润稳定',
        reasonEn: 'Unconditionally use Left F when connecting with D, Db, or C without adjacent left-Eb.',
      };
    }
    return {
      type: 'Standard F (常规 F / 左手 F 均可)',
      reasonZh: '慢速抒情旋律优先使用常规 F 或左手 F 以确保纯正饱满的声学共振峰',
      reasonEn: 'Standard F or Left F provides superior acoustic core for cantabile passages.',
    };
  }, [precedingNote, followingNote]);

  const tabs = [
    { id: 0, titleZh: '声学调音台', titleEn: 'Tuner', icon: Volume2 },
    { id: 1, titleZh: '交响节拍器', titleEn: 'Metronome', icon: Clock },
    { id: 2, titleZh: '长音 Drone', titleEn: 'Drone Engine', icon: Radio },
    { id: 3, titleZh: '15分大师热身台', titleEn: '15-Min Warmup', icon: Flame },
    { id: 4, titleZh: 'F键决策选型器', titleEn: 'F-Key Solver', icon: Sliders },
    { id: 5, titleZh: '排浊呼吸训练器', titleEn: 'CO2 Pacer', icon: Wind },
    { id: 6, titleZh: '首席15秒仪式', titleEn: 'Concert A Ritual', icon: Award },
  ];

  return (
    <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xl">
      {/* 顶部 7 大工具快速切换 Tab */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 custom-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
              <span>{isZh ? tab.titleZh : tab.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* ── 模块 1: 声学调音台 ── */}
      {activeTab === 0 && (
        <div className="space-y-6 max-w-xl mx-auto text-center py-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{isZh ? '音高基准' : 'Concert Pitch'}:</span>
            <button
              onClick={() => setPitchStandard(440)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                pitchStandard === 440 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              A = 440 Hz
            </button>
            <button
              onClick={() => setPitchStandard(442)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                pitchStandard === 442 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              A = 442 Hz (Standard)
            </button>
          </div>

          {/* 虚拟表盘与音分指针 */}
          <div className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4 relative overflow-hidden">
            <div className="text-6xl font-black text-slate-100 font-mono">
              A4
            </div>
            <div className="text-xs font-mono text-teal-400">
              {pitchStandard}.00 Hz
            </div>

            {/* 音分仪表条 */}
            <div className="w-full max-w-xs mx-auto space-y-1.5 pt-4">
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>-50</span>
                <span>-20</span>
                <span className="text-amber-400 font-bold">0</span>
                <span>+20</span>
                <span>+50</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full relative overflow-hidden">
                <div
                  className="h-full bg-teal-400 rounded-full transition-all duration-150"
                  style={{ width: `${Math.max(5, Math.min(95, 50 + detectedCents))}%` }}
                />
              </div>
              <div className="text-xs font-mono text-slate-400">
                {detectedCents > 0 ? `+${detectedCents}` : detectedCents} cents
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => setDetectedCents((c) => (c > -30 ? c - 5 : -30))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700"
              >
                -5 cents
              </button>
              <button
                onClick={() => setDetectedCents(0)}
                className="px-3 py-1.5 rounded-lg bg-amber-400/20 text-xs text-amber-300 font-bold hover:bg-amber-400/30"
              >
                Reset In-Tune
              </button>
              <button
                onClick={() => setDetectedCents((c) => (c < 30 ? c + 5 : 30))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-slate-700"
              >
                +5 cents
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 模块 2: 交响高精度节拍器 ── */}
      {activeTab === 1 && (
        <div className="space-y-6 max-w-lg mx-auto text-center py-4">
          <div className="space-y-1">
            <div className="text-7xl font-black text-amber-400 font-mono tracking-tight">
              {bpm}
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase">
              Beats Per Minute (BPM)
            </div>
          </div>

          {/* BPM 进度条滑块 */}
          <input
            type="range"
            min={40}
            max={220}
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
          />

          {/* 节拍指示灯视觉反馈 */}
          <div className="flex justify-center items-center gap-3 py-2">
            {Array.from({ length: timeSignature }).map((_, idx) => {
              const isCurrent = isMetronomePlaying && currentBeat === idx + 1;
              return (
                <div
                  key={idx}
                  className={`w-6 h-6 rounded-full transition-all duration-75 flex items-center justify-center font-mono text-xs font-bold ${
                    isCurrent
                      ? idx === 0
                        ? 'bg-amber-400 text-slate-950 scale-125 shadow-lg shadow-amber-400/50'
                        : 'bg-teal-400 text-slate-950 scale-110'
                      : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>

          {/* 控制按钮组 */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsMetronomePlaying(!isMetronomePlaying)}
              className={`px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 transition-all active:scale-95 shadow-lg ${
                isMetronomePlaying
                  ? 'bg-rose-500 text-white shadow-rose-500/20'
                  : 'bg-amber-400 text-slate-950 shadow-amber-400/20'
              }`}
            >
              {isMetronomePlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isMetronomePlaying ? (isZh ? '停止节拍' : 'Stop') : (isZh ? '启动节拍' : 'Start Metronome')}</span>
            </button>

            <button
              onClick={handleTapTempo}
              className="px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all active:scale-95"
            >
              TAP TEMPO
            </button>
          </div>

          {/* 拍号选择 */}
          <div className="flex justify-center gap-2 pt-2">
            {[2, 3, 4, 6].map((ts) => (
              <button
                key={ts}
                onClick={() => setTimeSignature(ts)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold ${
                  timeSignature === ts ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40' : 'bg-slate-950 text-slate-400'
                }`}
              >
                {ts}/4
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── 模块 3: 纯律长音对音机 (Drone Engine) ── */}
      {activeTab === 2 && (
        <div className="space-y-6 max-w-2xl mx-auto text-center py-4">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-100">
              {isZh ? '双簧管共振峰纯净长音持续对音机' : 'Pure Harmonic Oboe Tuning Drones'}
            </h3>
            <p className="text-xs text-slate-400">
              {isZh
                ? '点击任意音符即可开启持续无休止对音长音，在纯律和声伴奏下校准泛音与音程感觉。'
                : 'Click any note to start an unbroken reference drone. Practice interval and overtone alignment.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.keys(dronePitches).map((noteKey) => {
              const isCurrent = activeDroneNote === noteKey;
              return (
                <button
                  key={noteKey}
                  onClick={() => handleDroneClick(noteKey)}
                  className={`p-5 rounded-2xl border text-left transition-all active:scale-95 ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 font-black border-amber-300 shadow-xl shadow-amber-400/20'
                      : 'bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black">{noteKey}</span>
                    <Radio className={`w-4 h-4 ${isCurrent ? 'animate-pulse text-slate-950' : 'text-slate-600'}`} />
                  </div>
                  <div className={`text-xs font-mono mt-1 ${isCurrent ? 'text-slate-800' : 'text-slate-500'}`}>
                    {dronePitches[noteKey].toFixed(1)} Hz
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 模块 4: 15分钟大师每日抗疲劳热身台 ── */}
      {activeTab === 3 && (
        <div className="space-y-6 max-w-2xl mx-auto py-2">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-black text-slate-100">
              {isZh ? '15分钟大师抗疲劳科学热身与降温工作台' : '15-Minute Scientific Warm-up & Cool-down'}
            </h3>
            <div className="text-4xl font-mono font-black text-amber-400">
              {Math.floor(warmupSeconds / 60).toString().padStart(2, '0')}:{(warmupSeconds % 60).toString().padStart(2, '0')} / 15:00
            </div>
          </div>

          {/* 四大阶段进度条 */}
          <div className="space-y-3">
            {[
              { start: 0, end: 180, nameZh: '阶段 1 (0-3m): 极轻气流微音唤醒', nameEn: 'Stage 1: Pianissimo Airflow Awakening', desc: '含浅哨片，发pp长音，唤醒唇肌微循环' },
              { start: 180, end: 420, nameZh: '阶段 2 (3-7m): 八度长音与气压稳定', nameEn: 'Stage 2: Octave Long Tones & Support', desc: '从G4到G5平稳跨八度，保持下颌绝对零位放松' },
              { start: 420, end: 720, nameZh: '阶段 3 (7-12m): 连音三度转换灵活度', nameEn: 'Stage 3: Slurred Thirds Agility', desc: '全调性三度和弦慢速连音，锻炼手指与半孔顺畅度' },
              { start: 720, end: 900, nameZh: '阶段 4 (12-15m): 低音降温活血排酸', nameEn: 'Stage 4: Low Register Lactic Acid Dump', desc: '低音Bb3至D4松驰吹奏，利用低频震颤缓解唇肌酸胀' },
            ].map((stg, i) => {
              const isCurrent = warmupSeconds >= stg.start && warmupSeconds < stg.end;
              const isFinished = warmupSeconds >= stg.end;

              return (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCurrent
                      ? 'bg-amber-400/10 border-amber-400/50 text-slate-100 ring-1 ring-amber-400/40'
                      : isFinished
                      ? 'bg-slate-950/30 border-slate-800/40 text-slate-500'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className={isCurrent ? 'text-amber-400 font-black' : ''}>{isZh ? stg.nameZh : stg.nameEn}</span>
                    {isFinished && <CheckCircle2 className="w-4 h-4 text-teal-400" />}
                  </div>
                  <p className="text-xs text-slate-400">{stg.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setIsWarmupRunning(!isWarmupRunning)}
              className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-md active:scale-95"
            >
              {isWarmupRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isWarmupRunning ? (isZh ? '暂停热身' : 'Pause') : (isZh ? '开始15分热身' : 'Start Warm-up')}</span>
            </button>
            <button
              onClick={() => {
                setIsWarmupRunning(false);
                setWarmupSeconds(0);
              }}
              className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── 模块 5: 食指半孔与 F 键选型决策器 ── */}
      {activeTab === 4 && (
        <div className="space-y-6 max-w-2xl mx-auto py-2">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-black text-slate-100">
              {isZh ? '食指半孔与 F 键智能选型决策树' : 'Half-Hole & F-Key Fingering Decision Engine'}
            </h3>
            <p className="text-xs text-slate-400">
              {isZh
                ? '输入前一个音与后一个音，系统毫秒级推导最优 F 键路线与半孔滑移比例。'
                : 'Select surrounding notes to get instant Left F vs Forked F recommendations.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400">{isZh ? '前一个音符' : 'Preceding Note'}:</label>
              <select
                value={precedingNote}
                onChange={(e) => setPrecedingNote(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm font-mono focus:border-amber-400 focus:outline-none"
              >
                <option value="D5">D5 (带有半孔)</option>
                <option value="Db5">Db5 (带有半孔)</option>
                <option value="Eb">Eb4 / Eb5 (需左小指)</option>
                <option value="C5">C5</option>
                <option value="G4">G4</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400">{isZh ? '后一个音符' : 'Following Note'}:</label>
              <select
                value={followingNote}
                onChange={(e) => setFollowingNote(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm font-mono focus:border-amber-400 focus:outline-none"
              >
                <option value="C5">C5</option>
                <option value="Eb">Eb4 / Eb5 (需左小指)</option>
                <option value="D5">D5 (带有半孔)</option>
                <option value="Db5">Db5 (带有半孔)</option>
                <option value="A4">A4</option>
              </select>
            </div>
          </div>

          {/* 决策结论 */}
          <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isZh ? '推荐指法路线' : 'Recommended Fingering'}:</span>
            </div>
            <div className="text-xl font-black text-slate-100">
              {recommendedF.type}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isZh ? recommendedF.reasonZh : recommendedF.reasonEn}
            </p>
          </div>
        </div>
      )}

      {/* ── 模块 6: 二氧化碳排浊气流练习器 ── */}
      {activeTab === 5 && (
        <div className="space-y-6 max-w-lg mx-auto text-center py-4">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-100">
              {isZh ? '二氧化碳排浊呼气起伏节拍器' : 'Oboe CO2 Expulsion Pacer'}
            </h3>
            <p className="text-xs text-slate-400">
              {isZh
                ? '双簧管换气铁律：4秒吸气 ➔ 12秒稳压吹奏 ➔ 2秒闪电排浊吐气！'
                : 'Overcome back-pressure suffocation with rhythmic exhale-first dumping.'}
            </p>
          </div>

          {/* 动态呼吸环 */}
          <div className="py-6">
            <div
              className={`w-44 h-44 mx-auto rounded-full flex flex-col items-center justify-center border-4 transition-all duration-1000 ${
                breathPhase === 'inhale'
                  ? 'border-teal-400 bg-teal-400/10 scale-110'
                  : breathPhase === 'sustain'
                  ? 'border-amber-400 bg-amber-400/10 scale-100'
                  : 'border-rose-500 bg-rose-500/20 scale-90'
              }`}
            >
              <div className="text-2xl font-black text-slate-100 uppercase">
                {breathPhase === 'inhale'
                  ? (isZh ? '吸气 Inhale' : 'Inhale')
                  : breathPhase === 'sustain'
                  ? (isZh ? '吹奏 Sustain' : 'Play')
                  : (isZh ? '排气 Dump CO2!' : 'Dump CO2!')}
              </div>
              <div className="text-4xl font-mono font-black text-amber-400 mt-2">
                {breathCountdown}s
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsBreathRunning(!isBreathRunning)}
            className="px-8 py-3.5 rounded-2xl bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 mx-auto shadow-md active:scale-95"
          >
            {isBreathRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isBreathRunning ? (isZh ? '暂停节律' : 'Pause') : (isZh ? '开启排浊呼吸引导' : 'Start Pacer')}</span>
          </button>
        </div>
      )}

      {/* ── 模块 7: 乐团首席 A 音 15 秒舞台仪式模拟器 ── */}
      {activeTab === 6 && (
        <div className="space-y-6 max-w-lg mx-auto text-center py-4">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-100">
              {isZh ? '交响乐团首席 A 音 15 秒实战仪式' : 'Concertmaster 15-Second Tuning Ritual'}
            </h3>
            <p className="text-xs text-slate-400">
              {isZh
                ? '体验独奏双簧管起立给出 A 音的神圣时刻：前 7 秒木管/圆号对音，后 8 秒弦乐/铜管对音。'
                : 'Experience the 15-second orchestra tuning countdown: winds first, then strings.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-950/80 border border-amber-500/30 space-y-4">
            <div className="text-6xl font-mono font-black text-amber-400">
              {ritualSeconds}s
            </div>

            <div className="text-sm font-bold text-slate-200">
              {ritualSeconds > 8
                ? (isZh ? '🎺 木管与圆号组对音 (Winds & Horns)' : 'Winds & French Horns Tuning')
                : (isZh ? '🎻 弦乐与铜管全声部对音 (Strings & Brass)' : 'Full Strings & Brass Tuning')}
            </div>

            <p className="text-xs text-slate-400">
              {isZh
                ? '保持气柱腹肌高压支撑，双簧管纯律 A4 音准必须维持在 ±3 cents 零偏差。'
                : 'Hold unwavering breath support within ±3 cents over the 15 seconds.'}
            </p>

            <button
              onClick={() => setIsRitualActive(!isRitualActive)}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 mx-auto shadow-lg active:scale-95 mt-4"
            >
              {isRitualActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRitualActive ? (isZh ? '终止仪式' : 'Stop') : (isZh ? '起立！开启 15 秒首席仪式' : 'Start 15s Ritual')}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
