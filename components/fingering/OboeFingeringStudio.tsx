'use client';

import React, { useState, useMemo, useRef } from 'react';
import {
  Volume2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Download,
  Info,
  Music,
  Radio,
  Sliders,
  Check,
  Share2,
} from 'lucide-react';
import { OBOE_FINGERINGS, OboeFingeringEntry } from '@/data/oboeFingerings';
import OboeSvgVisualizer from './OboeSvgVisualizer';
import { oboeSynth } from '@/lib/audio/oboeSynth';
import { trackEvent } from '@/lib/analytics';

interface OboeFingeringStudioProps {
  locale: string;
}

// 辅助计算音符在五线谱（G-clef高音谱表）上的 Y 偏移量
// 五线谱基准：第一线 E4 = y: 70, 间 F4 = y: 65, 第二线 G4 = y: 60, ... 第三间 C5 = y: 45, 第五线 F5 = y: 30
function getStaffNoteY(scientificNote: string): { y: number; ledgerLines: number[] } {
  // 音名对应基准高度步进 (以半间/半线 5px 为一阶)
  // C4 = y: 80 (下加一线)
  // D4 = y: 75
  // E4 = y: 70 (第一线)
  // F4 = y: 65
  // G4 = y: 60 (第二线)
  // A4 = y: 55
  // B4 = y: 50
  // C5 = y: 45 (第三间)
  // D5 = y: 40 (第四线)
  // E5 = y: 35 (第四间)
  // F5 = y: 30 (第五线)
  // G5 = y: 25
  // A5 = y: 20 (上加一线)
  // B5 = y: 15
  // C6 = y: 10 (上加二线)
  // D6 = y: 5
  // E6 = y: 0  (上加三线)
  // F6 = y: -5
  // G6 = y: -10 (上加四线)
  // A6 = y: -15
  const noteStepMap: Record<string, number> = {
    'C4': 80, 'C#4': 80, 'Db4': 80,
    'D4': 75, 'D#4': 75, 'Eb4': 75,
    'E4': 70,
    'F4': 65, 'F#4': 65, 'Gb4': 65,
    'G4': 60, 'G#4': 60, 'Ab4': 60,
    'A4': 55, 'A#4': 55, 'Bb4': 55,
    'B4': 50,
    'C5': 45, 'C#5': 45, 'Db5': 45,
    'D5': 40, 'D#5': 40, 'Eb5': 40,
    'E5': 35,
    'F5': 30, 'F#5': 30, 'Gb5': 30,
    'G5': 25, 'G#5': 25, 'Ab5': 25,
    'A5': 20, 'A#5': 20, 'Bb5': 20,
    'B5': 15,
    'C6': 10, 'C#6': 10, 'Db6': 10,
    'D6': 5,  'D#6': 5,  'Eb6': 5,
    'E6': 0,
    'F6': -5, 'F#6': -5, 'Gb6': -5,
    'G6': -10,'G#6': -10,'Ab6': -10,
    'A6': -15,
  };

  const pureNote = scientificNote.replace('♯', '#').replace('♭', 'b');
  const y = noteStepMap[pureNote] ?? 45;
  const ledgerLines: number[] = [];

  // 计算加线
  if (y >= 80) ledgerLines.push(80); // 下加一线 C4
  if (y <= 20) ledgerLines.push(20); // 上加一线 A5
  if (y <= 10) ledgerLines.push(10); // 上加二线 C6
  if (y <= 0)  ledgerLines.push(0);  // 上加三线 E6
  if (y <= -10) ledgerLines.push(-10); // 上加四线 G6

  return { y, ledgerLines };
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
  const [isDroneActive, setIsDroneActive] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // 过滤当前音区
  const filteredNotes = useMemo(() => {
    if (activeRegister === 'all') return OBOE_FINGERINGS;
    return OBOE_FINGERINGS.filter((n) => n.register === activeRegister);
  }, [activeRegister]);

  // 当前音符数据
  const currentNote: OboeFingeringEntry = useMemo(() => {
    return OBOE_FINGERINGS.find((n) => n.id === selectedNoteId) || OBOE_FINGERINGS[11];
  }, [selectedNoteId]);

  // 当前变体指法
  const currentFingering = useMemo(() => {
    return currentNote.fingerings[selectedAltIndex] || currentNote.fingerings[0];
  }, [currentNote, selectedAltIndex]);

  // 播放单音
  const handlePlaySound = (noteScientific: string) => {
    setIsPlaying(true);
    oboeSynth.playOboeNote(noteScientific, 1.4, 0.6);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1200);
  };

  // 持续对音 Drone 切换
  const handleToggleDrone = () => {
    if (isDroneActive) {
      oboeSynth.stopContinuousDrone();
      setIsDroneActive(false);
    } else {
      oboeSynth.startContinuousDrone(currentNote.frequency, 0.4);
      setIsDroneActive(true);
    }
  };

  // 切换音符
  const handleSelectNote = (id: string) => {
    setSelectedNoteId(id);
    setSelectedAltIndex(0);
    const target = OBOE_FINGERINGS.find((n) => n.id === id);
    if (target) {
      trackEvent('tool_calculate', {
        tool_name: 'fingering_studio',
        note: target.scientificNote,
        frequency: target.frequency,
      });
      if (isDroneActive) {
        oboeSynth.startContinuousDrone(target.frequency, 0.4);
      } else {
        handlePlaySound(target.scientificNote);
      }
    }
  };

  // 前后导航
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

  // 1200x900 Canvas 高清海报卡一键导出
  const handleExportPosterCard = () => {
    setIsExporting(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsExporting(false);
      return;
    }

    // 1. 背景：交响黑金殿堂渐变
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 900);
    bgGrad.addColorStop(0, '#090d16');
    bgGrad.addColorStop(0.5, '#040711');
    bgGrad.addColorStop(1, '#02040a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 900);

    // 装饰暗金边框
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.3)';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 1140, 840);
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(40, 40, 1120, 820);

    // 2. 顶部 Header
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('OBOLIB.COM · DEFINITIVE OBOE WORKBENCH', 60, 80);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px sans-serif';
    ctx.fillText('FRENCH CONSERVATOIRE SYSTEM · MASTER FINGERING POSTER', 60, 110);

    // 3. 左侧大音符与五线谱信息 (X: 60 - 550)
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 110px sans-serif';
    ctx.fillText(currentNote.note, 60, 240);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'normal 48px serif';
    ctx.fillText(currentNote.scientificNote, 240, 230);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px monospace';
    ctx.fillText(`Concert Pitch: ${currentNote.frequency.toFixed(2)} Hz (A=442Hz Standard)`, 60, 290);

    // 绘制五线谱微缩图
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    const staffBaseY = 380;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(60, staffBaseY + i * 20);
      ctx.lineTo(480, staffBaseY + i * 20);
      ctx.stroke();
    }

    // 谱号示意与符头
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 48px serif';
    ctx.fillText('𝄞', 75, staffBaseY + 65);

    // 绘制当前符头
    const staffInfo = getStaffNoteY(currentNote.scientificNote);
    const noteCenterY = staffBaseY + staffInfo.y * 1.6;
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.ellipse(260, noteCenterY, 14, 10, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // 加线绘制
    staffInfo.ledgerLines.forEach((ly) => {
      const lineY = staffBaseY + ly * 1.6;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(230, lineY);
      ctx.lineTo(290, lineY);
      ctx.stroke();
    });

    // 4. 右侧详细声学口诀与实战指南 (X: 580 - 1140)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(560, 140, 580, 680);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeRect(560, 140, 580, 680);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('PEDAGOGICAL INTONATION & EMBOUCHURE', 590, 190);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '18px sans-serif';
    const tipText = (currentFingering.description as any)[locale] || currentFingering.description.en || 'Focus on embouchure relaxation, steady air velocity and harmonic stability.';
    // 换行渲染
    const words = tipText.split('');
    let line = '';
    let currY = 240;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 520 && n > 0) {
        ctx.fillText(line, 590, currY);
        line = words[n];
        currY += 32;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, 590, currY);

    // 按键指法清单
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('KEYWORK CONFIGURATION:', 590, currY + 60);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px monospace';
    const keys = currentFingering.keys;
    const activeLh = [
      keys.lh1 && '1',
      keys.lh2 && '2',
      keys.lh3 && '3',
      keys.lhGSharp && 'G#',
      keys.lhEb && 'Eb',
      keys.leftF && 'Left-F',
      keys.lowBb && 'Low-Bb',
    ].filter(Boolean).join(', ') || 'Open';

    const activeRh = [
      keys.rh1 && '1',
      keys.rh2 && '2',
      keys.rh3 && '3',
      keys.forkedFResonance && 'Fork-F Res',
      keys.rhLowC && 'Low-C',
      keys.rhLowCSharp && 'Low-C#',
      keys.rhEb && 'Eb',
      keys.rhLowB && 'Low-B',
      keys.rhSideBb && 'Side-Bb',
      keys.trillKey1 && 'Trill-1',
      keys.trillKey2 && 'Trill-2',
    ].filter(Boolean).join(', ') || 'Open';

    const halfHoleText = keys.halfHole === 'half' ? 'HALF-HOLE (Rolled)' : keys.halfHole === 'closed' ? 'CLOSED' : 'OPEN';
    const activeOctaves = [
      keys.octave1 && '1st (Thumb)',
      keys.octave2 && '2nd (Side)',
      keys.octave3 && '3rd (Top)',
    ].filter(Boolean).join(', ') || 'None';

    const keyDetail1 = `Left Hand:  ${activeLh}`;
    const keyDetail2 = `Right Hand: ${activeRh}`;
    const keyDetail3 = `Half-Hole:  ${halfHoleText}`;
    const keyDetail4 = `Octaves:    ${activeOctaves}`;

    ctx.fillText(keyDetail1, 590, currY + 100);
    ctx.fillText(keyDetail2, 590, currY + 135);
    ctx.fillText(keyDetail3, 590, currY + 170);
    ctx.fillText(keyDetail4, 590, currY + 205);

    // 5. 底部防伪标识
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '14px monospace';
    ctx.fillText('Official IDRS Acoustic Reference · Free to Share · Generated by OboLib.com', 60, 830);

    // 触发下载
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `OboLib-${currentNote.scientificNote}-Fingering-Poster.png`;
    link.href = dataUrl;
    link.click();
    setIsExporting(false);
  };

  const staff = getStaffNoteY(currentNote.scientificNote);

  return (
    <div className="space-y-8">
      {/* 顶部音区快速 Tab 筛选 */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-slate-900/80 border border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">
            {isZh ? '音区范围' : 'Register'}:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', labelZh: '全部 (Bb3 - A6)', labelEn: 'All (Bb3 - A6)' },
              { id: 'low', labelZh: '低音区 (Low)', labelEn: 'Low (Bb3 - C4)' },
              { id: 'middle', labelZh: '中音区 (Mid)', labelEn: 'Mid (C#4 - C5)' },
              { id: 'high', labelZh: '高音区 (High)', labelEn: 'High (C#5 - C6)' },
              { id: 'altissimo', labelZh: '超高音 (Altissimo)', labelEn: 'Altissimo (C#6 - A6)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRegister(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRegister === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                {isZh ? tab.labelZh : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* 1200px 高清海报导出按钮 */}
        <button
          onClick={handleExportPosterCard}
          disabled={isExporting}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs hover:from-amber-400 hover:to-amber-300 transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isExporting ? (isZh ? '正在渲染海报...' : 'Exporting...') : (isZh ? '导出1200px高清指法卡' : 'Export 1200px Poster')}</span>
        </button>
      </div>

      {/* 核心三栏一体化按键/把位工作台 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── 左栏 (3.5/12)：物理按键交互与矢量管体 ── */}
        <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 flex flex-col items-center justify-between relative shadow-xl min-h-[640px]">
          <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              <span>SVG MECHANISM</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              {currentFingering.keys.halfHole ? (isZh ? '半孔已激活' : 'Half-Hole Vent') : (isZh ? '全闭孔/全开' : 'Standard')}
            </span>
          </div>

          {/* 双簧管 SVG 矢量管体 */}
          <div className="py-4 my-auto">
            <OboeSvgVisualizer
              keys={currentFingering.keys}
              size="md"
            />
          </div>

          <div className="w-full text-center pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
            {isZh ? '点击管体键位可实时高亮与试听' : 'Click keys for tactile visual feedback'}
          </div>
        </div>

        {/* ── 中栏 (4.5/12)：自适应高音五线谱 + 记谱/实音大字号 + 持续 Drone ── */}
        <div className="lg:col-span-5 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl min-h-[640px] flex flex-col justify-between">
          <div className="space-y-5">
            {/* 顶栏音符切换导航 */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider block">
                  {currentNote.scientificNote} · {currentNote.frequency.toFixed(2)} Hz
                </span>
                <h2 className="text-5xl sm:text-6xl font-black text-slate-100 tracking-tight flex items-baseline gap-3 mt-1">
                  <span>{currentNote.note}</span>
                  <span className="text-xl font-normal text-slate-500 font-serif italic">
                    {currentNote.scientificNote}
                  </span>
                </h2>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevNote}
                  disabled={currentIndex <= 0}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextNote}
                  disabled={currentIndex >= filteredNotes.length - 1}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 自适应高音五线谱 (G-clef) */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>G-CLEF TREBLE STAFF</span>
                <span className="text-amber-400">Written = Sounding (C)</span>
              </div>

              <div className="h-28 w-full flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 320 100">
                  {/* 5 条基准五线谱 */}
                  {[30, 40, 50, 60, 70].map((y) => (
                    <line key={y} x1="20" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  ))}

                  {/* 高音谱号 */}
                  <text x="30" y="68" fill="#fbbf24" fontSize="42" fontFamily="serif">𝄞</text>

                  {/* 加线绘制 */}
                  {staff.ledgerLines.map((ly) => (
                    <line
                      key={ly}
                      x1="160"
                      y1={ly}
                      x2="200"
                      y2={ly}
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                  ))}

                  {/* 符头 */}
                  <ellipse
                    cx="180"
                    cy={staff.y}
                    rx="9"
                    ry="6.5"
                    transform={`rotate(-20 180 ${staff.y})`}
                    fill="#38bdf8"
                  />
                  {/* 符干 */}
                  <line
                    x1={staff.y > 50 ? 188 : 172}
                    y1={staff.y}
                    x2={staff.y > 50 ? 188 : 172}
                    y2={staff.y > 50 ? staff.y - 35 : staff.y + 35}
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            {/* 音频试听与持续对音 Drone 双核控制 */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handlePlaySound(currentNote.scientificNote)}
                disabled={isPlaying}
                className="py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Volume2 className={`w-4 h-4 text-amber-400 ${isPlaying ? 'animate-bounce' : ''}`} />
                <span>{isPlaying ? (isZh ? '发声中...' : 'Playing...') : (isZh ? '单音试听' : 'Play Tone')}</span>
              </button>

              <button
                onClick={handleToggleDrone}
                className={`py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  isDroneActive
                    ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 ring-2 ring-teal-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                }`}
              >
                <Radio className={`w-4 h-4 ${isDroneActive ? 'animate-pulse text-slate-950' : 'text-teal-400'}`} />
                <span>{isDroneActive ? (isZh ? '关闭长音 Drone' : 'Stop Drone') : (isZh ? '持续对音 Drone' : 'Continuous Drone')}</span>
              </button>
            </div>

            {/* 指法变体选择器 */}
            {currentNote.fingerings.length > 1 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {isZh ? '可选指法变体' : 'Alternative Fingerings'}:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentNote.fingerings.map((f, idx) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedAltIndex(idx)}
                      className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                        selectedAltIndex === idx
                          ? 'bg-amber-400/10 border-amber-400/60 text-amber-400 font-bold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{(f.name as any)[locale] || f.name.en}</span>
                        {f.isStandard && <span className="text-[10px] bg-teal-400/20 text-teal-300 px-1.5 py-0.5 rounded">Standard</span>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 声学与口型提示卡片 */}
          <div className="p-4 rounded-2xl bg-amber-400/5 border border-amber-400/20 text-xs text-slate-300 space-y-1">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>{isZh ? '大师口型与半孔要点' : 'Embouchure & Half-Hole Tip'}:</span>
            </span>
            <p className="leading-relaxed">
              {(currentFingering.description as any)[locale] || currentFingering.description.en || (isZh ? '保持平稳下颌支撑与松弛口腔，避免用力过度咬唇导致音高偏高。' : 'Maintain stable jaw support and relaxed oral cavity to prevent pitch sharpness.')}
            </p>
          </div>
        </div>

        {/* ── 右栏 (3/12)：全音域原生高密度音阶表格 ── */}
        <div className="lg:col-span-3 bg-slate-900/80 rounded-3xl p-5 border border-slate-800 flex flex-col justify-between shadow-xl min-h-[640px]">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                CHROMATIC LIST
              </span>
              <span className="text-xs font-mono text-slate-500">
                {filteredNotes.length} Notes
              </span>
            </div>

            {/* 高密度原生滚动音列表 */}
            <div className="max-h-[520px] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {filteredNotes.map((note) => {
                const isSelected = note.id === selectedNoteId;
                return (
                  <button
                    key={note.id}
                    onClick={() => handleSelectNote(note.id)}
                    className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                        : 'bg-slate-950/40 hover:bg-slate-800/80 text-slate-300 border border-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black">{note.note}</span>
                      <span className={`text-[11px] font-mono ${isSelected ? 'text-slate-800' : 'text-slate-500'}`}>
                        {note.scientificNote}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      <span>{note.frequency.toFixed(0)}Hz</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-950" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 text-center">
            {isZh ? '单击任意音符毫秒级联动' : 'Click note to sync keys & sound'}
          </div>
        </div>
      </div>
    </div>
  );
}
