'use client';

import React from 'react';
import { OboeKeyLayout } from '@/data/oboeFingerings';

interface OboeSvgVisualizerProps {
  keys: OboeKeyLayout;
  highlightTrillKey?: string | null;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onKeyToggle?: (keyName: keyof OboeKeyLayout) => void;
}

export default function OboeSvgVisualizer({
  keys,
  highlightTrillKey = null,
  className = '',
  size = 'md',
  interactive = false,
  onKeyToggle,
}: OboeSvgVisualizerProps) {
  const width = size === 'sm' ? 180 : size === 'lg' ? 320 : 240;
  const height = size === 'sm' ? 480 : size === 'lg' ? 820 : 640;

  // Active styles
  const activeKeyFill = '#0D9488'; // Brand Teal
  const activeKeyStroke = '#0F766E';
  const inactiveKeyFill = '#F1F5F9';
  const inactiveKeyStroke = '#94A3B8';
  const woodBodyFill = '#1E293B'; // Dark African Blackwood (Grenadilla)
  const woodBodyStroke = '#0F172A';
  const silverKeyTone = '#E2E8F0';

  const handleKeyClick = (keyName: keyof OboeKeyLayout) => {
    if (interactive && onKeyToggle) {
      onKeyToggle(keyName);
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 680"
        width={width}
        height={height}
        className="drop-shadow-xl transition-all duration-300"
      >
        <defs>
          {/* Grenadilla wood gradient */}
          <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="35%" stopColor="#1E293B" />
            <stop offset="70%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Brass Staple Gradient */}
          <linearGradient id="stapleBrass" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CA8A04" />
            <stop offset="50%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>

          {/* Natural Reed Cane Gradient */}
          <linearGradient id="reedCane" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>

          {/* Active Key Glow */}
          <filter id="keyGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0D9488" floodOpacity="0.6" />
          </filter>

          {/* Trill Vibration Pulse Filter */}
          <filter id="trillPulse" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* 1. Oboe Reed & Staple (47mm Cork Tube + Natural Cane Blades) */}
        <g id="oboe-reed">
          {/* Cane Tip */}
          <polygon
            points="95,15 105,15 103,42 97,42"
            fill="url(#reedCane)"
            stroke="#CA8A04"
            strokeWidth="1"
          />
          {/* Thread Wrap */}
          <rect x="96" y="42" width="8" height="12" fill="#DC2626" rx="1" />
          {/* Brass Staple / Cork Joint */}
          <rect x="97" y="54" width="6" height="16" fill="url(#stapleBrass)" />
          <rect x="95" y="70" width="10" height="14" fill="#D97706" rx="1" />
        </g>

        {/* 2. Upper Joint (Grenadilla Conical Body) */}
        <path
          d="M 88,84 L 112,84 L 116,330 L 84,330 Z"
          fill="url(#woodGradient)"
          stroke={woodBodyStroke}
          strokeWidth="2"
        />

        {/* Joint Silver Ring 1 */}
        <rect x="83" y="328" width="34" height="6" fill={silverKeyTone} stroke="#64748B" strokeWidth="1" rx="1" />

        {/* 3. Lower Joint */}
        <path
          d="M 84,334 L 116,334 L 122,540 L 78,540 Z"
          fill="url(#woodGradient)"
          stroke={woodBodyStroke}
          strokeWidth="2"
        />

        {/* Joint Silver Ring 2 */}
        <rect x="76" y="538" width="48" height="6" fill={silverKeyTone} stroke="#64748B" strokeWidth="1" rx="1" />

        {/* 4. Bell Flare (Oboe Bell) */}
        <path
          d="M 78,544 L 122,544 Q 138,620 144,640 L 56,640 Q 62,620 78,544 Z"
          fill="url(#woodGradient)"
          stroke={woodBodyStroke}
          strokeWidth="2"
        />
        <ellipse cx="100" cy="640" rx="44" ry="10" fill="#020617" stroke="#334155" strokeWidth="2" />

        {/* ========================================================= */}
        {/* LEFT HAND KEYS (Upper Joint)                              */}
        {/* ========================================================= */}

        {/* 1st Octave Key (Thumb Lever, Back) */}
        <g
          transform="translate(68, 125)"
          className="cursor-pointer"
          onClick={() => handleKeyClick('octave1')}
        >
          <rect
            x="0"
            y="0"
            width="10"
            height="22"
            rx="3"
            fill={keys.octave1 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.octave1 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.octave1 ? 'url(#keyGlow)' : undefined}
          />
          <text x="5" y="15" textAnchor="middle" fontSize="8" fill={keys.octave1 ? '#fff' : '#64748B'} fontWeight="bold">
            Oct1
          </text>
        </g>

        {/* 2nd Octave Key (Side Forefinger Lever) */}
        <g
          transform="translate(122, 130)"
          className="cursor-pointer"
          onClick={() => handleKeyClick('octave2')}
        >
          <rect
            x="0"
            y="0"
            width="10"
            height="22"
            rx="3"
            fill={keys.octave2 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.octave2 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.octave2 ? 'url(#keyGlow)' : undefined}
          />
          <text x="5" y="15" textAnchor="middle" fontSize="8" fill={keys.octave2 ? '#fff' : '#64748B'} fontWeight="bold">
            Oct2
          </text>
        </g>

        {/* 3rd Octave Key (Top Modern Key) */}
        <g
          transform="translate(68, 98)"
          className="cursor-pointer"
          onClick={() => handleKeyClick('octave3')}
        >
          <rect
            x="0"
            y="0"
            width="9"
            height="18"
            rx="3"
            fill={keys.octave3 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.octave3 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.octave3 ? 'url(#keyGlow)' : undefined}
          />
          <text x="4.5" y="12" textAnchor="middle" fontSize="7" fill={keys.octave3 ? '#fff' : '#64748B'} fontWeight="bold">
            Oct3
          </text>
        </g>

        {/* LEFT HAND 1 (INDEX FINGER - HALF HOLE KEY) */}
        <g transform="translate(100, 160)" className="cursor-pointer" onClick={() => handleKeyClick('halfHole')}>
          {/* Outer Key Ring */}
          <circle
            cx="0"
            cy="0"
            r="12"
            fill={silverKeyTone}
            stroke="#64748B"
            strokeWidth="1.5"
          />
          {keys.halfHole === 'closed' ? (
            // Full Closed
            <circle
              cx="0"
              cy="0"
              r="9"
              fill={activeKeyFill}
              stroke={activeKeyStroke}
              strokeWidth="2"
              filter="url(#keyGlow)"
            />
          ) : keys.halfHole === 'half' ? (
            // Split Half-Hole crescent
            <g>
              {/* Bottom closed half */}
              <path
                d="M -9,0 A 9,9 0 0,0 9,0 Z"
                fill={activeKeyFill}
                stroke={activeKeyStroke}
                strokeWidth="1.5"
                filter="url(#keyGlow)"
              />
              {/* Top open vent */}
              <path
                d="M -9,0 A 9,9 0 0,1 9,0 Z"
                fill="#FEF08A"
                stroke="#CA8A04"
                strokeWidth="1.5"
              />
              <circle cx="0" cy="-4" r="2.5" fill="#020617" />
            </g>
          ) : (
            // Full Open
            <circle
              cx="0"
              cy="0"
              r="9"
              fill={inactiveKeyFill}
              stroke={inactiveKeyStroke}
              strokeWidth="1.5"
            />
          )}
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            {keys.halfHole === 'half' ? '½ Hole' : 'LH 1'}
          </text>
        </g>

        {/* LEFT HAND 2 (MIDDLE FINGER) */}
        <g transform="translate(100, 215)" className="cursor-pointer" onClick={() => handleKeyClick('lh2')}>
          <circle cx="0" cy="0" r="12" fill={silverKeyTone} stroke="#64748B" strokeWidth="1.5" />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill={keys.lh2 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.lh2 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.lh2 ? 'url(#keyGlow)' : undefined}
          />
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            LH 2
          </text>
        </g>

        {/* LEFT HAND 3 (RING FINGER) */}
        <g transform="translate(100, 270)" className="cursor-pointer" onClick={() => handleKeyClick('lh3')}>
          <circle cx="0" cy="0" r="12" fill={silverKeyTone} stroke="#64748B" strokeWidth="1.5" />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill={keys.lh3 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.lh3 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.lh3 ? 'url(#keyGlow)' : undefined}
          />
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            LH 3
          </text>
        </g>

        {/* Left-Hand G# Key (Pinky) */}
        <g transform="translate(68, 258)" className="cursor-pointer" onClick={() => handleKeyClick('lhGSharp')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="22"
            rx="4"
            fill={keys.lhGSharp ? activeKeyFill : inactiveKeyFill}
            stroke={keys.lhGSharp ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.lhGSharp ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="15" textAnchor="middle" fontSize="8" fill={keys.lhGSharp ? '#fff' : '#64748B'} fontWeight="bold">
            G#
          </text>
        </g>

        {/* Left-Hand F Auxiliary Key (Pinky) */}
        <g transform="translate(68, 288)" className="cursor-pointer" onClick={() => handleKeyClick('leftF')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="24"
            rx="4"
            fill={keys.leftF ? '#0284C7' : inactiveKeyFill}
            stroke={keys.leftF ? '#0369A1' : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.leftF ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="16" textAnchor="middle" fontSize="8" fill={keys.leftF ? '#fff' : '#64748B'} fontWeight="bold">
            L-F
          </text>
        </g>

        {/* Left-Hand Eb Key */}
        <g transform="translate(68, 318)" className="cursor-pointer" onClick={() => handleKeyClick('lhEb')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="20"
            rx="4"
            fill={keys.lhEb ? activeKeyFill : inactiveKeyFill}
            stroke={keys.lhEb ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.lhEb ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="14" textAnchor="middle" fontSize="8" fill={keys.lhEb ? '#fff' : '#64748B'} fontWeight="bold">
            Eb
          </text>
        </g>

        {/* Trill Keys between Upper & Lower Joint */}
        <g
          transform="translate(122, 230)"
          className={`cursor-pointer ${highlightTrillKey === 'trill1' ? 'animate-pulse' : ''}`}
          onClick={() => handleKeyClick('trillKey1')}
        >
          <rect
            x="0"
            y="0"
            width="9"
            height="32"
            rx="3"
            fill={keys.trillKey1 || highlightTrillKey === 'trill1' ? '#F59E0B' : inactiveKeyFill}
            stroke={keys.trillKey1 || highlightTrillKey === 'trill1' ? '#D97706' : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={highlightTrillKey === 'trill1' ? 'url(#trillPulse)' : undefined}
          />
          <text x="4.5" y="20" textAnchor="middle" fontSize="7" fill="#1E293B" fontWeight="bold">
            Tr1
          </text>
        </g>

        <g
          transform="translate(122, 270)"
          className={`cursor-pointer ${highlightTrillKey === 'trill2' ? 'animate-pulse' : ''}`}
          onClick={() => handleKeyClick('trillKey2')}
        >
          <rect
            x="0"
            y="0"
            width="9"
            height="32"
            rx="3"
            fill={keys.trillKey2 || highlightTrillKey === 'trill2' ? '#F59E0B' : inactiveKeyFill}
            stroke={keys.trillKey2 || highlightTrillKey === 'trill2' ? '#D97706' : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={highlightTrillKey === 'trill2' ? 'url(#trillPulse)' : undefined}
          />
          <text x="4.5" y="20" textAnchor="middle" fontSize="7" fill="#1E293B" fontWeight="bold">
            Tr2
          </text>
        </g>

        {/* ========================================================= */}
        {/* RIGHT HAND KEYS (Lower Joint)                             */}
        {/* ========================================================= */}

        {/* RIGHT HAND 1 (INDEX FINGER) */}
        <g transform="translate(100, 365)" className="cursor-pointer" onClick={() => handleKeyClick('rh1')}>
          <circle cx="0" cy="0" r="12" fill={silverKeyTone} stroke="#64748B" strokeWidth="1.5" />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill={keys.rh1 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rh1 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rh1 ? 'url(#keyGlow)' : undefined}
          />
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            RH 1
          </text>
        </g>

        {/* Forked-F Resonance Key (Between RH 1 and 2) */}
        <g transform="translate(122, 395)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill={keys.forkedFResonance ? '#0284C7' : inactiveKeyFill}
            stroke={keys.forkedFResonance ? '#0369A1' : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.forkedFResonance ? 'url(#keyGlow)' : undefined}
          />
          <text x="12" y="3" fontSize="8" fill="#64748B" fontWeight="bold">
            F-Res
          </text>
        </g>

        {/* RIGHT HAND 2 (MIDDLE FINGER) */}
        <g transform="translate(100, 420)" className="cursor-pointer" onClick={() => handleKeyClick('rh2')}>
          <circle cx="0" cy="0" r="12" fill={silverKeyTone} stroke="#64748B" strokeWidth="1.5" />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill={keys.rh2 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rh2 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rh2 ? 'url(#keyGlow)' : undefined}
          />
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            RH 2
          </text>
        </g>

        {/* RIGHT HAND 3 (RING FINGER) */}
        <g transform="translate(100, 475)" className="cursor-pointer" onClick={() => handleKeyClick('rh3')}>
          <circle cx="0" cy="0" r="12" fill={silverKeyTone} stroke="#64748B" strokeWidth="1.5" />
          <circle
            cx="0"
            cy="0"
            r="9"
            fill={keys.rh3 ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rh3 ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rh3 ? 'url(#keyGlow)' : undefined}
          />
          <text x="0" y="24" textAnchor="middle" fontSize="9" fill="#94A3B8" fontWeight="600">
            RH 3
          </text>
        </g>

        {/* Right-Hand Eb Key */}
        <g transform="translate(126, 470)" className="cursor-pointer" onClick={() => handleKeyClick('rhEb')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="22"
            rx="4"
            fill={keys.rhEb ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rhEb ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rhEb ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="15" textAnchor="middle" fontSize="8" fill={keys.rhEb ? '#fff' : '#64748B'} fontWeight="bold">
            Eb
          </text>
        </g>

        {/* Low C Key */}
        <g transform="translate(126, 500)" className="cursor-pointer" onClick={() => handleKeyClick('rhLowC')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="24"
            rx="4"
            fill={keys.rhLowC ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rhLowC ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rhLowC ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="16" textAnchor="middle" fontSize="8" fill={keys.rhLowC ? '#fff' : '#64748B'} fontWeight="bold">
            C
          </text>
        </g>

        {/* Low C# Key */}
        <g transform="translate(126, 532)" className="cursor-pointer" onClick={() => handleKeyClick('rhLowCSharp')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="22"
            rx="4"
            fill={keys.rhLowCSharp ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rhLowCSharp ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rhLowCSharp ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="15" textAnchor="middle" fontSize="8" fill={keys.rhLowCSharp ? '#fff' : '#64748B'} fontWeight="bold">
            C#
          </text>
        </g>

        {/* Low B Key */}
        <g transform="translate(64, 500)" className="cursor-pointer" onClick={() => handleKeyClick('rhLowB')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="24"
            rx="4"
            fill={keys.rhLowB ? activeKeyFill : inactiveKeyFill}
            stroke={keys.rhLowB ? activeKeyStroke : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.rhLowB ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="16" textAnchor="middle" fontSize="8" fill={keys.rhLowB ? '#fff' : '#64748B'} fontWeight="bold">
            B
          </text>
        </g>

        {/* Low Bb Extension Key (Bell Lever) */}
        <g transform="translate(64, 532)" className="cursor-pointer" onClick={() => handleKeyClick('lowBb')}>
          <rect
            x="0"
            y="0"
            width="12"
            height="26"
            rx="4"
            fill={keys.lowBb ? '#B91C1C' : inactiveKeyFill}
            stroke={keys.lowBb ? '#991B1B' : inactiveKeyStroke}
            strokeWidth="1.5"
            filter={keys.lowBb ? 'url(#keyGlow)' : undefined}
          />
          <text x="6" y="17" textAnchor="middle" fontSize="8" fill={keys.lowBb ? '#fff' : '#64748B'} fontWeight="bold">
            Bb
          </text>
        </g>
      </svg>

      {/* Quick Legend Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
          Pressed
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          Half-Hole (½)
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
          Left F / Res
        </span>
      </div>
    </div>
  );
}
