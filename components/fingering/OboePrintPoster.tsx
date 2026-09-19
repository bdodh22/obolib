'use client';

import React from 'react';
import { Printer, Download, Sparkles, Music, ExternalLink } from 'lucide-react';
import { OBOE_FINGERINGS } from '@/data/oboeFingerings';
import OboeSvgVisualizer from './OboeSvgVisualizer';

interface OboePrintPosterProps {
  locale: string;
}

export default function OboePrintPoster({ locale }: OboePrintPosterProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Screen-Only Action Control Bar (Hidden on Print) */}
      <div className="print:hidden p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
            <Printer className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900 tracking-tight">
              {isZh ? 'A4 纸 300DPI 极清矢量指法海报打印' : 'A4 300DPI Ultra-HD Fingering Poster'}
            </h2>
            <p className="text-xs text-slate-500">
              {isZh
                ? '免登录即刻打印或通过浏览器「另存为 PDF」，适合贴于琴房、乐团排练室与教学谱架'
                : 'Click Print to output clean vector PDF, perfectly scaled for studio music stands.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>{isZh ? '一键免登录打印 / 导出 PDF' : '1-Click Print / Save PDF'}</span>
          </button>
        </div>
      </div>

      {/* Printable Poster Sheet (300DPI Optimized Layout) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs print:border-none print:p-0 print:shadow-none print:m-0">
        {/* Poster Header */}
        <div className="border-b-2 border-slate-900 pb-3 mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-teal-800 font-mono">
              OBOLIB.COM · CONSERVATORY SYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {isZh ? '双簧管全音域指法全景速查图 (Bb3 - A6)' : 'Complete Oboe Chromatic Fingering Chart (Bb3 - A6)'}
            </h2>
          </div>

          <div className="text-right text-[10px] text-slate-500 font-mono">
            <span className="font-bold text-slate-900 block">300 DPI VECTOR SCALE</span>
            <span>A=440 / 442Hz Standard</span>
          </div>
        </div>

        {/* Legend Ribbon */}
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-600"></span>
              {isZh ? '闭合按键 (Pressed)' : 'Pressed Key'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              {isZh ? '食指半孔 (½ Hole Roll)' : 'Half-Hole (½)'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-600"></span>
              {isZh ? '左手F/共鸣键 (Left-F / Res)' : 'Left-F / Res'}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              {isZh ? '八度键 (Octave Key)' : 'Octave Key'}
            </span>
          </div>
          <span className="font-mono text-slate-400 text-[10px]">© OboLib.com Official</span>
        </div>

        {/* Multi-Column Compact Grid of All 37 Chromatic Notes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 print:grid-cols-6 print:gap-1.5 text-slate-900">
          {OBOE_FINGERINGS.map((noteEntry) => {
            const stdFingering = noteEntry.fingerings[0];
            return (
              <div
                key={noteEntry.id}
                className="p-2.5 rounded-2xl border border-slate-200 flex flex-col items-center justify-between bg-slate-50/50 print:bg-white print:border-slate-300 print:p-1.5 break-inside-avoid"
              >
                {/* Note Label Header */}
                <div className="text-center w-full border-b border-slate-200/80 pb-1 mb-1.5">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-lg font-black tracking-tight">{noteEntry.note}</span>
                    <span className="text-xs font-mono text-slate-500">{noteEntry.scientificNote}</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 block">
                    {noteEntry.frequency.toFixed(1)}Hz
                  </span>
                </div>

                {/* Compact SVG Vector Tube */}
                <OboeSvgVisualizer keys={stdFingering.keys} size="sm" />

                {/* Key feature tags */}
                <div className="mt-1 text-[9px] font-bold text-center text-slate-600 w-full">
                  {stdFingering.keys.halfHole === 'half' && (
                    <span className="text-amber-700 bg-amber-100/70 px-1 py-0.5 rounded block">
                      ½ Hole
                    </span>
                  )}
                  {stdFingering.keys.octave1 && (
                    <span className="text-teal-700 bg-teal-100/70 px-1 py-0.5 rounded block">
                      Oct 1
                    </span>
                  )}
                  {stdFingering.keys.octave2 && (
                    <span className="text-teal-700 bg-teal-100/70 px-1 py-0.5 rounded block">
                      Oct 2
                    </span>
                  )}
                  {stdFingering.keys.octave3 && (
                    <span className="text-purple-700 bg-purple-100/70 px-1 py-0.5 rounded block">
                      Oct 3
                    </span>
                  )}
                  {stdFingering.keys.leftF && (
                    <span className="text-sky-700 bg-sky-100/70 px-1 py-0.5 rounded block">
                      Left F
                    </span>
                  )}
                  {stdFingering.keys.lowBb && (
                    <span className="text-rose-700 bg-rose-100/70 px-1 py-0.5 rounded block">
                      Low Bb
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Poster Footer Watermark & QR notice */}
        <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
          <span>OboLib.com — Master the Oboe from Bb3 to A6</span>
          <span>Scan or visit obolib.com for live acoustic tone previews & reed doctor</span>
        </div>
      </div>
    </div>
  );
}
