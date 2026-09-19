// Oboe Trill Data & Key Mechanics
// Standard Conservatory Trills (Semitone & Whole-Tone)

import { OboeKeyLayout } from './oboeFingerings';

export interface OboeTrillEntry {
  id: string;
  fromNote: string;
  toNote: string;
  interval: 'semitone' | 'wholetone';
  register: 'low' | 'mid' | 'high';
  trillKeyName: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  shakingFinger: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  techniqueTip: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  baseKeys: OboeKeyLayout;
  activeTrillKeyId: 'trill1' | 'trill2' | 'rh1' | 'rh2' | 'lh2' | 'lh3' | 'lhGSharp';
}

const defaultKeys: OboeKeyLayout = {
  halfHole: 'closed',
  lh1: true,
  lh2: true,
  lh3: true,
  octave1: false,
  octave2: false,
  octave3: false,
  lhGSharp: false,
  lhEb: false,
  leftF: false,
  lowBb: false,
  rh1: true,
  rh2: true,
  rh3: true,
  forkedFResonance: false,
  rhLowC: false,
  rhLowCSharp: false,
  rhEb: false,
  rhLowB: false,
  rhSideBb: false,
  trillKey1: false,
  trillKey2: false,
};

export const OBOE_TRILLS: OboeTrillEntry[] = [
  {
    id: 'c5-d5',
    fromNote: 'C5',
    toNote: 'D5',
    interval: 'wholetone',
    register: 'mid',
    trillKeyName: {
      en: 'C-D Trill Lever (Tr1)',
      zh: 'C-D 专用颤音杠杆键 (Tr1)',
      de: 'C-D Trillerklappe (Tr1)',
      ja: 'C-D トリルキー (Tr1)',
    },
    shakingFinger: {
      en: 'Right Index Finger (RH 1)',
      zh: '右手食指快速击打 Tr1 侧键',
      de: 'Rechter Zeigefinger',
      ja: '右手人差し指',
    },
    techniqueTip: {
      en: 'Finger standard C5 (LH 2). Shake the C-D trill key (Tr1) between Upper and Lower joint with RH index.',
      zh: '基础指法按 C5（左手2孔），右手食指快速高频弹跳打击管身右侧的 Tr1 颤音键。',
      de: 'Greife C5 und trillere mit der oberen C-D Trillerklappe.',
      ja: 'C5を押さえたまま、右手人差し指でTr1トリルキーを高速でタップします。',
    },
    baseKeys: {
      ...defaultKeys,
      halfHole: 'open',
      lh1: false,
      lh2: true,
      lh3: false,
      rh1: false,
      rh2: false,
      rh3: false,
    },
    activeTrillKeyId: 'trill1',
  },
  {
    id: 'cs5-d5',
    fromNote: 'C#5',
    toNote: 'D5',
    interval: 'semitone',
    register: 'high',
    trillKeyName: {
      en: 'C-C# / C-D Split Lever (Tr2)',
      zh: 'C#-D 颤音侧杠杆 (Tr2)',
      de: 'Cis-D Trillerklappe (Tr2)',
      ja: 'C#-D トリルキー (Tr2)',
    },
    shakingFinger: {
      en: 'Right Middle Finger (RH 2)',
      zh: '右手中指快速击打 Tr2 侧键',
      de: 'Rechter Mittelfinger',
      ja: '右手中指',
    },
    techniqueTip: {
      en: 'Keep half-hole open or closed on C#5. Rapidly pulse Trill key 2 to produce clean semitone modulation.',
      zh: '左手保持 C#5 半孔姿态，右手中指高频触发 Tr2 键，半音音准纯正清晰。',
      de: 'Halte Cis5 und trillere mit der unteren Trillerklappe.',
      ja: 'C#5の構えを保ち、右手中指でTr2キーを細かく刻みます。',
    },
    baseKeys: {
      ...defaultKeys,
      halfHole: 'half',
      lh1: false,
      lh2: false,
      lh3: false,
      rh1: false,
      rh2: false,
      rh3: false,
    },
    activeTrillKeyId: 'trill2',
  },
  {
    id: 'd5-eb5',
    fromNote: 'D5',
    toNote: 'E♭5',
    interval: 'semitone',
    register: 'high',
    trillKeyName: {
      en: 'Eb Pinky Key Trill',
      zh: '右小指 Eb 快速颤键',
      de: 'Rechte Es-Klappe',
      ja: '右手小指Ebキー',
    },
    shakingFinger: {
      en: 'Right Little Finger',
      zh: '右手小指独立颤动',
      de: 'Rechter kleiner Finger',
      ja: '右手小指',
    },
    techniqueTip: {
      en: 'Hold full D5 fingering (Half-hole + LH 2-3 + RH 1-2-3), rapidly tap the right Eb key.',
      zh: '保持标准 D5 指法（半孔+左2-3+右1-2-3），右手小指高频敲击右下 Eb 键。',
      de: 'Vollständigen D5-Griff halten und mit rechter Es-Klappe trillern.',
      ja: 'D5の運指を完全に維持したまま、右手小指で素早くEbキーをタップ。',
    },
    baseKeys: {
      ...defaultKeys,
      halfHole: 'half',
      lh1: false,
      lh2: true,
      lh3: true,
      rh1: true,
      rh2: true,
      rh3: true,
    },
    activeTrillKeyId: 'rh2',
  },
  {
    id: 'f4-g4',
    fromNote: 'F4',
    toNote: 'G4',
    interval: 'wholetone',
    register: 'low',
    trillKeyName: {
      en: 'Forked-F to G Trill',
      zh: 'F-G 右手全开颤动',
      de: 'F-G Ganzton-Triller',
      ja: 'F-G 全音トリル',
    },
    shakingFinger: {
      en: 'Right Hand Fingers (RH 1 & 2)',
      zh: '右手食指与中指协同快速抬落',
      de: 'Rechte Hand 1-2 zusammen',
      ja: '右手1と2を連動',
    },
    techniqueTip: {
      en: 'Hold G4 (LH 1-2-3). Rapidly slap RH 1 and 2 together while keeping reed embouchure firm.',
      zh: '左手保持 1-2-3，右手食指与中指整体快速抬起落下，注意保持哨片含口松紧平稳。',
      de: 'G4 halten und mit beiden Fingern der rechten Hand trillern.',
      ja: 'G4をホールドし、右手1・2を同時にリズミカルにタップ。',
    },
    baseKeys: {
      ...defaultKeys,
      lh1: true,
      lh2: true,
      lh3: true,
      rh1: true,
      rh2: true,
      rh3: false,
    },
    activeTrillKeyId: 'rh1',
  },
  {
    id: 'ab4-bb4',
    fromNote: 'A♭4',
    toNote: 'B♭4',
    interval: 'wholetone',
    register: 'mid',
    trillKeyName: {
      en: 'Side Bb Lever Shake',
      zh: '侧键 Bb 高速推颤',
      de: 'Seiten-B Hebel',
      ja: 'サイドBbレバートリル',
    },
    shakingFinger: {
      en: 'Right Index Side Knuckle',
      zh: '右手食指第三关节侧向快速拍压',
      de: 'Rechter Zeigefingerknöchel',
      ja: '右手人差し指側面',
    },
    techniqueTip: {
      en: 'Hold Ab4 (LH 1-2-3 + G# key). Pulse the side Bb key on the upper body using the side of RH index finger.',
      zh: '左手按住 Ab4（1-2-3加G#键），右手食指侧面快速推击侧面Bb键，解决快速管乐跑动难关。',
      de: 'Ab4 halten und Seiten-B mit Zeigefingerknöchel trillern.',
      ja: 'Ab4を保持し、右手人差し指の側面でサイドBbレバーを弾きます。',
    },
    baseKeys: {
      ...defaultKeys,
      lh1: true,
      lh2: true,
      lh3: true,
      lhGSharp: true,
      rh1: false,
      rh2: false,
      rh3: false,
    },
    activeTrillKeyId: 'trill1',
  },
];
