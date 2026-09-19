// Oboe Fingering Data & Key Mapping
// Covers chromatic register from Low Bb3 to Altissimo A6
// Conservatory System (French/German standard model with Half-Hole, Octave 1/2/3, Left-F, and Forked F)

export type HalfHoleState = 'open' | 'half' | 'closed';

export interface OboeKeyLayout {
  // Left Hand
  halfHole: HalfHoleState;
  lh1: boolean;
  lh2: boolean;
  lh3: boolean;
  octave1: boolean;      // 1st Octave Key (Back Thumb)
  octave2: boolean;      // 2nd Octave Key (Side Forefinger)
  octave3: boolean;      // 3rd Octave Key (Top Lever)
  lhGSharp: boolean;     // Left G# Key
  lhEb: boolean;         // Left Eb Key
  leftF: boolean;        // Left-hand F Key (Crucial Conservatory feature)
  lowBb: boolean;        // Low Bb Key

  // Right Hand
  rh1: boolean;
  rh2: boolean;
  rh3: boolean;
  forkedFResonance: boolean; // Forked-F resonance mechanism
  rhLowC: boolean;       // Right Low C Key
  rhLowCSharp: boolean;  // Right Low C# Key
  rhEb: boolean;         // Right Eb Key
  rhLowB: boolean;       // Right Low B Key
  rhSideBb: boolean;     // Right Side Bb trill
  trillKey1: boolean;    // C-D Trill Key
  trillKey2: boolean;    // C-C# Trill Key
}

export interface OboeFingeringEntry {
  id: string;
  note: string;               // e.g. "B♭3", "A4", "C5"
  scientificNote: string;     // e.g. "Bb3", "A4", "C5"
  frequency: number;          // Hz
  register: 'low' | 'mid' | 'high' | 'altissimo';
  registerLabel: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  octaveNumber: number;
  pitchClass: string;         // "Bb", "B", "C", "C#", etc.
  fingerings: {
    id: string;
    name: {
      en: string;
      zh: string;
      de: string;
      ja: string;
    };
    description: {
      en: string;
      zh: string;
      de: string;
      ja: string;
    };
    isStandard: boolean;
    isLeftF?: boolean;
    isForkedF?: boolean;
    keys: OboeKeyLayout;
  }[];
}

const defaultKeys: OboeKeyLayout = {
  halfHole: 'open',
  lh1: false,
  lh2: false,
  lh3: false,
  octave1: false,
  octave2: false,
  octave3: false,
  lhGSharp: false,
  lhEb: false,
  leftF: false,
  lowBb: false,
  rh1: false,
  rh2: false,
  rh3: false,
  forkedFResonance: false,
  rhLowC: false,
  rhLowCSharp: false,
  rhEb: false,
  rhLowB: false,
  rhSideBb: false,
  trillKey1: false,
  trillKey2: false,
};

export const OBOE_FINGERINGS: OboeFingeringEntry[] = [
  // ==========================================
  // LOW REGISTER (Bb3 to F4)
  // ==========================================
  {
    id: "bb3",
    note: "B♭3",
    scientificNote: "Bb3",
    frequency: 233.08,
    register: "low",
    registerLabel: {
      en: "Low Register",
      zh: "低音区",
      de: "Tiefes Register",
      ja: "低音域"
    },
    octaveNumber: 3,
    pitchClass: "Bb",
    fingerings: [
      {
        id: "bb3-std",
        name: {
          en: "Standard Low Bb",
          zh: "标准低音降B",
          de: "Standard Tief-B",
          ja: "標準低音変ロ"
        },
        description: {
          en: "All 6 tone holes closed with low Bb lever, low B key, and low C key pressed. Requires relaxed embouchure and warm, steady breath.",
          zh: "闭合全6个音孔，并按下低音降B键、低音B键与C键。需要下颌放松与温热稳定的气流支撑。",
          de: "Alle 6 Tonlöcher geschlossen mit Tief-B-, Tief-H- und Tief-C-Klappe. Erfordert entspannten Ansatz.",
          ja: "全6音孔を塞ぎ、低音Bb・B・Cキーを押さえます。リラックスしたアンブシュアが必要です。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          lowBb: true,
          rh1: true, rh2: true, rh3: true,
          rhLowC: true, rhLowB: true
        }
      }
    ]
  },
  {
    id: "b3",
    note: "B3",
    scientificNote: "B3",
    frequency: 246.94,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 3,
    pitchClass: "B",
    fingerings: [
      {
        id: "b3-std",
        name: { en: "Standard Low B", zh: "标准低音B", de: "Standard Tief-H", ja: "標準低音ロ" },
        description: {
          en: "All 6 tone holes closed with low B and low C keys pressed.",
          zh: "闭合全6个主音孔，右手小指压下低音B与C键。",
          de: "Alle 6 Tonlöcher geschlossen mit Tief-H und C-Klappe.",
          ja: "全6音孔を塞ぎ、低音BとCキーを押さえます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true,
          rhLowC: true, rhLowB: true
        }
      }
    ]
  },
  {
    id: "c4",
    note: "C4",
    scientificNote: "C4",
    frequency: 261.63,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "C",
    fingerings: [
      {
        id: "c4-std",
        name: { en: "Standard Low C", zh: "标准低音C", de: "Standard Tief-C", ja: "標準中央ハ" },
        description: {
          en: "All 6 tone holes closed with right little finger pressing low C key.",
          zh: "闭合全6个主音孔，右手小指压下低音C键。",
          de: "Alle 6 Tonlöcher geschlossen mit Tief-C-Klappe.",
          ja: "全6音孔を塞ぎ、低音Cキーを押さえます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true,
          rhLowC: true
        }
      }
    ]
  },
  {
    id: "cs4",
    note: "C#4",
    scientificNote: "Db4",
    frequency: 277.18,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "C#",
    fingerings: [
      {
        id: "cs4-std",
        name: { en: "Standard Low C#", zh: "标准低音升C", de: "Standard Tief-Cis", ja: "標準低音嬰ハ" },
        description: {
          en: "All 6 tone holes closed plus low C# key pressed with right pinky.",
          zh: "闭合全6个主音孔，右手小指压下低音C#键。",
          de: "Alle 6 Tonlöcher geschlossen mit Tief-Cis-Klappe.",
          ja: "全6音孔を塞ぎ、低音C#キーを押さえます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true,
          rhLowCSharp: true
        }
      }
    ]
  },
  {
    id: "d4",
    note: "D4",
    scientificNote: "D4",
    frequency: 293.66,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "D",
    fingerings: [
      {
        id: "d4-std",
        name: { en: "Standard Low D", zh: "标准低音D", de: "Standard Tief-D", ja: "標準低音ニ" },
        description: {
          en: "All 6 tone holes closed with no little finger keys. Fundamental baseline tone.",
          zh: "全闭6个主音孔，小指完全放松不按任何键。双簧管最基本稳固的发音之一。",
          de: "Alle 6 Tonlöcher geschlossen ohne Zusatzklappen.",
          ja: "基本の6音孔すべてを塞ぎます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true
        }
      }
    ]
  },
  {
    id: "eb4",
    note: "E♭4",
    scientificNote: "Eb4",
    frequency: 311.13,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "Eb",
    fingerings: [
      {
        id: "eb4-std",
        name: { en: "Standard Eb (Right Eb)", zh: "标准降E (右手Eb)", de: "Standard Es", ja: "標準変ホ" },
        description: {
          en: "6 tone holes closed + right little finger Eb key.",
          zh: "全闭6个主音孔，右手小指按Eb键。",
          de: "6 Tonlöcher geschlossen + rechte Es-Klappe.",
          ja: "6音孔を塞ぎ、右手小指Ebキーを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true,
          rhEb: true
        }
      },
      {
        id: "eb4-left",
        name: { en: "Left-Hand Eb", zh: "左手Eb副键", de: "Linke Es-Klappe", ja: "左手Ebキー" },
        description: {
          en: "6 tone holes closed + left little finger Eb key for rapid passage work.",
          zh: "全闭6个主音孔，左手小指按左Eb键，便于快速跑动连奏。",
          de: "6 Tonlöcher geschlossen + linke Es-Klappe.",
          ja: "左手小指Ebキーを使用するオルタネート運指。"
        },
        isStandard: false,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          lhEb: true,
          rh1: true, rh2: true, rh3: true
        }
      }
    ]
  },
  {
    id: "e4",
    note: "E4",
    scientificNote: "E4",
    frequency: 329.63,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "E",
    fingerings: [
      {
        id: "e4-std",
        name: { en: "Standard E", zh: "标准E", de: "Standard E", ja: "標準ホ" },
        description: {
          en: "Left Hand 1-2-3 + Right Hand 1-2 closed.",
          zh: "左手1-2-3孔闭合，右手1-2孔闭合，右手3孔开启。",
          de: "Linke Hand 1-2-3 + Rechte Hand 1-2 geschlossen.",
          ja: "左手1-2-3と右手1-2を塞ぎます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true
        }
      }
    ]
  },
  {
    id: "f4",
    note: "F4",
    scientificNote: "F4",
    frequency: 349.23,
    register: "low",
    registerLabel: { en: "Low Register", zh: "低音区", de: "Tiefes Register", ja: "低音域" },
    octaveNumber: 4,
    pitchClass: "F",
    fingerings: [
      {
        id: "f4-regular",
        name: { en: "Regular F (Standard)", zh: "普通 F (标准指法)", de: "Reguläres F", ja: "通常ヘ音" },
        description: {
          en: "Left Hand 1-2-3 + Right Hand 1-2-3 with right little finger on F lever.",
          zh: "左手1-2-3，右手1-2，右手小指按常规 F 键或结合右手3指共鸣。",
          de: "Standard F mit F-Heber.",
          ja: "標準Fフィンガリング。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true,
          rhEb: false
        }
      },
      {
        id: "f4-left",
        name: { en: "Left-Hand F", zh: "左手 F 辅助键", de: "Linkes F", ja: "左手Fキー" },
        description: {
          en: "Left Hand 1-2-3 + Left F Key + Right Hand 1-2. Essential for passages involving D or Eb.",
          zh: "左手1-2-3并加按左手小指 F 键，右手按1-2。现代双簧管解决 D-F、Eb-F 换指的终极武器！",
          de: "Linkes F für reibungslose Übergänge von D und Es.",
          ja: "DやEbからのスムーズな移行に不可欠な左手Fキー運指。"
        },
        isStandard: false,
        isLeftF: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          leftF: true,
          rh1: true, rh2: true
        }
      },
      {
        id: "f4-forked",
        name: { en: "Forked F", zh: "分叉 F (Forked F)", de: "Gabel-F", ja: "フォークF" },
        description: {
          en: "Left Hand 1-2-3 + Right Hand 1 & 3 (2 open) + Forked F resonance key.",
          zh: "左手1-2-3，右手按1孔与3孔（跳过2孔），配合自动分叉F共鸣键。传统经典指法。",
          de: "Gabel-F mit automatischer Resonanzklappe.",
          ja: "フォークF運指（右手2を浮かせ、1と3を押さえる）。"
        },
        isStandard: false,
        isForkedF: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: false, rh3: true,
          forkedFResonance: true
        }
      }
    ]
  },

  // ==========================================
  // MID REGISTER (F#4 to C5)
  // ==========================================
  {
    id: "fs4",
    note: "F#4",
    scientificNote: "Gb4",
    frequency: 369.99,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 4,
    pitchClass: "F#",
    fingerings: [
      {
        id: "fs4-std",
        name: { en: "Standard F#", zh: "标准升F", de: "Standard Fis", ja: "標準嬰ヘ" },
        description: {
          en: "Left Hand 1-2-3 + Right Hand 1.",
          zh: "左手1-2-3，右手仅按1孔（食指）。",
          de: "Linke Hand 1-2-3 + Rechte Hand 1.",
          ja: "左手1-2-3と右手1を押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true
        }
      }
    ]
  },
  {
    id: "g4",
    note: "G4",
    scientificNote: "G4",
    frequency: 392.00,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 4,
    pitchClass: "G",
    fingerings: [
      {
        id: "g4-std",
        name: { en: "Standard G", zh: "标准G", de: "Standard G", ja: "標準ト" },
        description: {
          en: "Left Hand 1-2-3 only. Right hand completely free.",
          zh: "左手闭合1-2-3孔，右手全开不按键。",
          de: "Nur linke Hand 1-2-3.",
          ja: "左手1-2-3のみを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true
        }
      }
    ]
  },
  {
    id: "gs4",
    note: "G#4",
    scientificNote: "Ab4",
    frequency: 415.30,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 4,
    pitchClass: "G#",
    fingerings: [
      {
        id: "gs4-std",
        name: { en: "Standard G#", zh: "标准升G", de: "Standard Gis", ja: "標準嬰ト" },
        description: {
          en: "Left Hand 1-2-3 + Left pinky on G# key.",
          zh: "左手闭合1-2-3孔，左手小指按 G# 侧键。",
          de: "Linke Hand 1-2-3 + linke Gis-Klappe.",
          ja: "左手1-2-3と左手小指G#キーを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          lhGSharp: true
        }
      }
    ]
  },
  {
    id: "a4",
    note: "A4",
    scientificNote: "A4",
    frequency: 440.00,
    register: "mid",
    registerLabel: { en: "Mid Register (Concert Pitch)", zh: "中音区 (乐团基准音)", de: "Kammerton A", ja: "基準音 A=440" },
    octaveNumber: 4,
    pitchClass: "A",
    fingerings: [
      {
        id: "a4-std",
        name: { en: "Concert Standard A4", zh: "交响乐首席标准 A4", de: "Standard A4", ja: "標準イ音 (A4)" },
        description: {
          en: "Left Hand 1-2. The sacred orchestral tuning note produced by the oboe.",
          zh: "左手按1-2孔。整个交响乐团调音神圣基准音！",
          de: "Linke Hand 1-2. Der universelle Orchesterstimmton.",
          ja: "左手1-2。オーケストラ全体のチューニング基準音です。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true, lh2: true
        }
      }
    ]
  },
  {
    id: "bb4",
    note: "B♭4",
    scientificNote: "Bb4",
    frequency: 466.16,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 4,
    pitchClass: "Bb",
    fingerings: [
      {
        id: "bb4-std",
        name: { en: "Standard Bb (Side Bb)", zh: "侧键降B (标准)", de: "Standard B mit Seitenklappe", ja: "側鍵変ロ" },
        description: {
          en: "Left Hand 1 + Right Hand side Bb key or Right Hand 1.",
          zh: "左手按1孔，右手食指侧面推侧键Bb（或右手1指配合双簧管连动机构）。",
          de: "Linke Hand 1 + rechte Seiten-B-Klappe.",
          ja: "左手1と右手サイドBbキーを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true,
          rhSideBb: true
        }
      },
      {
        id: "bb4-bis",
        name: { en: "Bis / Forked Bb", zh: "1+1 双手Bb", de: "1+1 B", ja: "1+1 Bb" },
        description: {
          en: "Left Hand 1 + Right Hand 1.",
          zh: "左手1孔 + 右手1孔。",
          de: "Linke Hand 1 + Rechte Hand 1.",
          ja: "左手1と右手1を押します。"
        },
        isStandard: false,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true,
          rh1: true
        }
      }
    ]
  },
  {
    id: "b4",
    note: "B4",
    scientificNote: "B4",
    frequency: 493.88,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 4,
    pitchClass: "B",
    fingerings: [
      {
        id: "b4-std",
        name: { en: "Standard B", zh: "标准B", de: "Standard H", ja: "標準ロ音" },
        description: {
          en: "Left Hand 1 only.",
          zh: "左手仅按食指1孔，其余全开。",
          de: "Nur linke Hand 1.",
          ja: "左手1のみを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'closed',
          lh1: true
        }
      }
    ]
  },
  {
    id: "c5",
    note: "C5",
    scientificNote: "C5",
    frequency: 523.25,
    register: "mid",
    registerLabel: { en: "Mid Register", zh: "中音区", de: "Mittleres Register", ja: "中音域" },
    octaveNumber: 5,
    pitchClass: "C",
    fingerings: [
      {
        id: "c5-std",
        name: { en: "Standard C", zh: "标准C", de: "Standard C", ja: "標準ハ音" },
        description: {
          en: "Left Hand 2 only or side C key.",
          zh: "左手按中指2孔（或加开C副孔）。",
          de: "Nur linke Hand 2.",
          ja: "左手2のみを押します。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'open',
          lh2: true
        }
      }
    ]
  },

  // ==========================================
  // HIGH REGISTER (C#5 to C6)
  // Half-hole and Octave Key transitions
  // ==========================================
  {
    id: "cs5",
    note: "C#5",
    scientificNote: "Db5",
    frequency: 554.37,
    register: "high",
    registerLabel: { en: "High Register (Half-Hole)", zh: "高音区 (半孔裂隙)", de: "Hohes Register (Halbloch)", ja: "高音域 (ハーフホール)" },
    octaveNumber: 5,
    pitchClass: "C#",
    fingerings: [
      {
        id: "cs5-halfhole",
        name: { en: "Half-Hole C#5", zh: "食指半孔升C", de: "Halbloch Cis5", ja: "ハーフホール C#5" },
        description: {
          en: "Half-hole on LH 1 only. Left index finger rolls lightly to uncover half the vent.",
          zh: "左手食指采用经典的 Half-Hole（半孔裂隙）。指腹微滚露出上半微孔，形成高音微气流切口。",
          de: "Nur Halbloch auf linker Hand 1.",
          ja: "左手1のハーフホール（半孔）のみ。指をわずかに転がします。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'half'
        }
      }
    ]
  },
  {
    id: "d5",
    note: "D5",
    scientificNote: "D5",
    frequency: 587.33,
    register: "high",
    registerLabel: { en: "High Register (Half-Hole)", zh: "高音区 (半孔裂隙)", de: "Hohes Register", ja: "高音域" },
    octaveNumber: 5,
    pitchClass: "D",
    fingerings: [
      {
        id: "d5-halfhole",
        name: { en: "Half-Hole D5 (Standard)", zh: "半孔D (标准高音D)", de: "Halbloch D5", ja: "ハーフホール D5" },
        description: {
          en: "Half-hole on LH 1 + LH 2-3 + RH 1-2-3.",
          zh: "左手食指半孔（Half-hole），左手2-3闭合，右手1-2-3全闭合。",
          de: "Halbloch links 1 + links 2-3 + rechts 1-2-3.",
          ja: "左手1ハーフホール、左手2-3、右手1-2-3を塞ぎます。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'half',
          lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true
        }
      }
    ]
  },
  {
    id: "eb5",
    note: "E♭5",
    scientificNote: "Eb5",
    frequency: 622.25,
    register: "high",
    registerLabel: { en: "High Register (Half-Hole)", zh: "高音区 (半孔裂隙)", de: "Hohes Register", ja: "高音域" },
    octaveNumber: 5,
    pitchClass: "Eb",
    fingerings: [
      {
        id: "eb5-halfhole",
        name: { en: "Half-Hole Eb5", zh: "半孔降E", de: "Halbloch Es5", ja: "ハーフホール Eb5" },
        description: {
          en: "Half-hole on LH 1 + LH 2-3 + RH 1-2-3 + RH Eb key.",
          zh: "左手食指半孔，左手2-3闭合，右手1-2-3闭合，加按右手小指 Eb 键。",
          de: "Halbloch links 1 + links 2-3 + rechts 1-2-3 + Es-Klappe.",
          ja: "左手1ハーフホール、左手2-3、右手1-2-3、右手Ebキー。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'half',
          lh2: true, lh3: true,
          rh1: true, rh2: true, rh3: true,
          rhEb: true
        }
      }
    ]
  },
  {
    id: "e5",
    note: "E5",
    scientificNote: "E5",
    frequency: 659.25,
    register: "high",
    registerLabel: { en: "High Register (1st Octave)", zh: "高音区 (第1八度键)", de: "1. Oktavklappe", ja: "第1オクターブキー" },
    octaveNumber: 5,
    pitchClass: "E",
    fingerings: [
      {
        id: "e5-octave1",
        name: { en: "Standard E5 (1st Octave)", zh: "标准E5 (第1八度键)", de: "Standard E5 mit 1. Oktavklappe", ja: "標準E5 (第1オクターブ)" },
        description: {
          en: "1st Octave Key (LH thumb) + LH 1-2-3 + RH 1-2.",
          zh: "左手拇指按第1八度键（Octave 1），左手闭合1-2-3，右手闭合1-2。",
          de: "1. Oktavklappe mit Daumen + links 1-2-3 + rechts 1-2.",
          ja: "第1オクターブキー（親指）+ 左手1-2-3 + 右手1-2。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: true
        }
      }
    ]
  },
  {
    id: "f5",
    note: "F5",
    scientificNote: "F5",
    frequency: 698.46,
    register: "high",
    registerLabel: { en: "High Register (1st Octave)", zh: "高音区 (第1八度键)", de: "1. Oktavklappe", ja: "第1オクターブキー" },
    octaveNumber: 5,
    pitchClass: "F",
    fingerings: [
      {
        id: "f5-left",
        name: { en: "Left-Hand F5 (Recommended)", zh: "左手 F 辅助键 F5", de: "Linkes F5", ja: "左手Fキー F5" },
        description: {
          en: "1st Octave Key + Left Hand 1-2-3 + Left F key + Right Hand 1-2.",
          zh: "第1八度键 + 左手1-2-3 + 左手小指F键 + 右手1-2。",
          de: "1. Oktavklappe + links 1-2-3 + linkes F + rechts 1-2.",
          ja: "第1オクターブ + 左手1-2-3 + 左手Fキー + 右手1-2。"
        },
        isStandard: true,
        isLeftF: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          leftF: true,
          rh1: true, rh2: true
        }
      },
      {
        id: "f5-forked",
        name: { en: "Forked F5", zh: "分叉 F5", de: "Gabel-F5", ja: "フォーク F5" },
        description: {
          en: "1st Octave Key + Left Hand 1-2-3 + Right Hand 1 & 3 with resonance.",
          zh: "第1八度键 + 左手1-2-3 + 右手1和3孔（共鸣键生效）。",
          de: "1. Oktavklappe + Gabel-F.",
          ja: "第1オクターブ + フォークF。"
        },
        isStandard: false,
        isForkedF: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true, rh2: false, rh3: true,
          forkedFResonance: true
        }
      }
    ]
  },
  {
    id: "fs5",
    note: "F#5",
    scientificNote: "Gb5",
    frequency: 739.99,
    register: "high",
    registerLabel: { en: "High Register (1st Octave)", zh: "高音区 (第1八度键)", de: "1. Oktavklappe", ja: "第1オクターブキー" },
    octaveNumber: 5,
    pitchClass: "F#",
    fingerings: [
      {
        id: "fs5-std",
        name: { en: "Standard F#5", zh: "标准升F5", de: "Standard Fis5", ja: "標準F#5" },
        description: {
          en: "1st Octave Key + Left Hand 1-2-3 + Right Hand 1.",
          zh: "第1八度键 + 左手1-2-3 + 右手1孔。",
          de: "1. Oktavklappe + links 1-2-3 + rechts 1.",
          ja: "第1オクターブ + 左手1-2-3 + 右手1。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          rh1: true
        }
      }
    ]
  },
  {
    id: "g5",
    note: "G5",
    scientificNote: "G5",
    frequency: 783.99,
    register: "high",
    registerLabel: { en: "High Register (1st Octave)", zh: "高音区 (第1八度键)", de: "1. Oktavklappe", ja: "第1オクターブキー" },
    octaveNumber: 5,
    pitchClass: "G",
    fingerings: [
      {
        id: "g5-std",
        name: { en: "Standard G5", zh: "标准G5", de: "Standard G5", ja: "標準G5" },
        description: {
          en: "1st Octave Key + Left Hand 1-2-3.",
          zh: "第1八度键 + 左手1-2-3，右手全开。",
          de: "1. Oktavklappe + links 1-2-3.",
          ja: "第1オクターブ + 左手1-2-3。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true
        }
      }
    ]
  },
  {
    id: "gs5",
    note: "G#5",
    scientificNote: "Ab5",
    frequency: 830.61,
    register: "high",
    registerLabel: { en: "High Register (1st Octave)", zh: "高音区 (第1八度键)", de: "1. Oktavklappe", ja: "第1オクターブキー" },
    octaveNumber: 5,
    pitchClass: "G#",
    fingerings: [
      {
        id: "gs5-std",
        name: { en: "Standard G#5", zh: "标准升G5", de: "Standard Gis5", ja: "標準G#5" },
        description: {
          en: "1st Octave Key + Left Hand 1-2-3 + Left G# key.",
          zh: "第1八度键 + 左手1-2-3 + 左手小指按 G# 键。",
          de: "1. Oktavklappe + links 1-2-3 + linke Gis-Klappe.",
          ja: "第1オクターブ + 左手1-2-3 + 左手G#キー。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'closed',
          lh1: true, lh2: true, lh3: true,
          lhGSharp: true
        }
      }
    ]
  },
  {
    id: "a5",
    note: "A5",
    scientificNote: "A5",
    frequency: 880.00,
    register: "high",
    registerLabel: { en: "High Register (2nd Octave)", zh: "高音区 (第2八度侧键)", de: "2. Oktavklappe", ja: "第2オクターブキー" },
    octaveNumber: 5,
    pitchClass: "A",
    fingerings: [
      {
        id: "a5-octave2",
        name: { en: "Standard A5 (2nd Octave Key)", zh: "标准A5 (第2八度键切换)", de: "Standard A5 (2. Oktavklappe)", ja: "標準A5 (第2オクターブ)" },
        description: {
          en: "Release 1st Octave, press 2nd Octave Key (side of LH index) + LH 1-2.",
          zh: "关键转换点！释放背部第1八度键，换用左手食指侧面的第2八度键（2nd Octave）+ 左手1-2孔。",
          de: "2. Oktavklappe (seitlich) + linke Hand 1-2.",
          ja: "第2オクターブキー（人差し指側面）+ 左手1-2。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave2: true,
          halfHole: 'closed',
          lh1: true, lh2: true
        }
      }
    ]
  },
  {
    id: "bb5",
    note: "B♭5",
    scientificNote: "Bb5",
    frequency: 932.33,
    register: "high",
    registerLabel: { en: "High Register (2nd Octave)", zh: "高音区 (第2八度键)", de: "2. Oktavklappe", ja: "第2オクターブキー" },
    octaveNumber: 5,
    pitchClass: "Bb",
    fingerings: [
      {
        id: "bb5-octave2",
        name: { en: "Standard Bb5", zh: "标准降B5", de: "Standard B5", ja: "標準Bb5" },
        description: {
          en: "2nd Octave Key + Left Hand 1 + Side Bb key.",
          zh: "第2八度键 + 左手1孔 + 侧面Bb键。",
          de: "2. Oktavklappe + links 1 + Seiten-B.",
          ja: "第2オクターブ + 左手1 + サイドBb。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave2: true,
          halfHole: 'closed',
          lh1: true,
          rhSideBb: true
        }
      }
    ]
  },
  {
    id: "b5",
    note: "B5",
    scientificNote: "B5",
    frequency: 987.77,
    register: "high",
    registerLabel: { en: "High Register (2nd Octave)", zh: "高音区 (第2八度键)", de: "2. Oktavklappe", ja: "第2オクターブキー" },
    octaveNumber: 5,
    pitchClass: "B",
    fingerings: [
      {
        id: "b5-octave2",
        name: { en: "Standard B5", zh: "标准B5", de: "Standard H5", ja: "標準B5" },
        description: {
          en: "2nd Octave Key + Left Hand 1 only.",
          zh: "第2八度键 + 左手仅按1孔。",
          de: "2. Oktavklappe + links 1.",
          ja: "第2オクターブ + 左手1。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave2: true,
          halfHole: 'closed',
          lh1: true
        }
      }
    ]
  },
  {
    id: "c6",
    note: "C6",
    scientificNote: "C6",
    frequency: 1046.50,
    register: "high",
    registerLabel: { en: "High Register (2nd Octave)", zh: "高音区 (第2八度键)", de: "2. Oktavklappe", ja: "第2オクターブキー" },
    octaveNumber: 6,
    pitchClass: "C",
    fingerings: [
      {
        id: "c6-octave2",
        name: { en: "Standard C6", zh: "标准高音C6", de: "Standard C6", ja: "標準C6" },
        description: {
          en: "2nd Octave Key + Left Hand 2 only (or half-hole assist).",
          zh: "第2八度键 + 左手仅按2孔（中指）。",
          de: "2. Oktavklappe + links 2.",
          ja: "第2オクターブ + 左手2。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave2: true,
          halfHole: 'open',
          lh2: true
        }
      }
    ]
  },

  // ==========================================
  // ALTISSIMO REGISTER (C#6 to A6)
  // Highly acoustic & complex harmonic vents
  // ==========================================
  {
    id: "cs6",
    note: "C#6",
    scientificNote: "Db6",
    frequency: 1108.73,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "C#",
    fingerings: [
      {
        id: "cs6-alt",
        name: { en: "Harmonic Altissimo C#6", zh: "超高音升C6", de: "Altissimo Cis6", ja: "超高音 C#6" },
        description: {
          en: "Half-hole + LH 2-3 + Octave Key + RH 1-2-3 + low C key for acoustic node locking.",
          zh: "食指半孔 + 左手2-3 + 八度键 + 右手1-2-3与低音C共振节点锁定。",
          de: "Halbloch + Oktavklappe + komplexe Resonanz.",
          ja: "ハーフホール + オクターブキー + 低音Cキーによる音響ノード固定。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          halfHole: 'half',
          octave1: true,
          lh2: true, lh3: true,
          rh1: true, rh2: true,
          rhLowC: true
        }
      }
    ]
  },
  {
    id: "d6",
    note: "D6",
    scientificNote: "D6",
    frequency: 1174.66,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "D",
    fingerings: [
      {
        id: "d6-alt",
        name: { en: "Altissimo D6", zh: "超高音D6", de: "Altissimo D6", ja: "超高音 D6" },
        description: {
          en: "Octave 1 + Half-hole + LH 3 + RH 1 + Eb key. Fast air velocity required.",
          zh: "八度键 + 食指半孔 + 左手3 + 右手1 + Eb键。需要快速集中气束。",
          de: "Oktavklappe + Halbloch + links 3 + rechts 1 + Es.",
          ja: "オクターブ + ハーフホール + 左手3 + 右手1 + Ebキー。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          halfHole: 'half',
          lh3: true,
          rh1: true,
          rhEb: true
        }
      }
    ]
  },
  {
    id: "eb6",
    note: "E♭6",
    scientificNote: "Eb6",
    frequency: 1244.51,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "Eb",
    fingerings: [
      {
        id: "eb6-alt",
        name: { en: "Altissimo Eb6", zh: "超高音降E6", de: "Altissimo Es6", ja: "超高音 Eb6" },
        description: {
          en: "Octave 1 + LH 2-3 + RH 1-2 + Eb key.",
          zh: "八度键 + 左手2-3 + 右手1-2 + Eb键。",
          de: "Oktavklappe + links 2-3 + rechts 1-2 + Es.",
          ja: "オクターブ + 左手2-3 + 右手1-2 + Eb。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave1: true,
          lh2: true, lh3: true,
          rh1: true, rh2: true,
          rhEb: true
        }
      }
    ]
  },
  {
    id: "e6",
    note: "E6",
    scientificNote: "E6",
    frequency: 1318.51,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "E",
    fingerings: [
      {
        id: "e6-alt",
        name: { en: "Altissimo E6 (3rd Octave)", zh: "超高音E6 (第3八度键)", de: "Altissimo E6 (3. Oktavklappe)", ja: "超高音 E6 (第3オクターブ)" },
        description: {
          en: "3rd Octave Key (or Octave 1) + LH 2 + RH 1-2 + Eb key.",
          zh: "第3八度键（或第1八度）+ 左手2 + 右手1-2 + Eb键。",
          de: "3. Oktavklappe + links 2 + rechts 1-2 + Es.",
          ja: "第3オクターブ + 左手2 + 右手1-2 + Eb。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave3: true,
          lh2: true,
          rh1: true, rh2: true,
          rhEb: true
        }
      }
    ]
  },
  {
    id: "f6",
    note: "F6",
    scientificNote: "F6",
    frequency: 1396.91,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "F",
    fingerings: [
      {
        id: "f6-alt",
        name: { en: "Altissimo F6", zh: "超高音F6", de: "Altissimo F6", ja: "超高音 F6" },
        description: {
          en: "3rd Octave + LH 2 + Left F key + RH 1-3.",
          zh: "第3八度 + 左手2 + 左手F键 + 右手1与3孔。",
          de: "3. Oktavklappe + links 2 + linkes F + rechts 1-3.",
          ja: "第3オクターブ + 左手2 + 左手F + 右手1-3。"
        },
        isStandard: true,
        isLeftF: true,
        keys: {
          ...defaultKeys,
          octave3: true,
          lh2: true,
          leftF: true,
          rh1: true, rh3: true
        }
      }
    ]
  },
  {
    id: "fs6",
    note: "F#6",
    scientificNote: "Gb6",
    frequency: 1479.98,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "F#",
    fingerings: [
      {
        id: "fs6-alt",
        name: { en: "Altissimo F#6", zh: "超高音升F6", de: "Altissimo Fis6", ja: "超高音 F#6" },
        description: {
          en: "3rd Octave + LH 1-3 + RH 1 + Eb key.",
          zh: "第3八度 + 左手1与3 + 右手1 + Eb键。",
          de: "3. Oktavklappe + links 1-3 + rechts 1 + Es.",
          ja: "第3オクターブ + 左手1-3 + 右手1 + Eb。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave3: true,
          halfHole: 'closed',
          lh1: true, lh3: true,
          rh1: true,
          rhEb: true
        }
      }
    ]
  },
  {
    id: "g6",
    note: "G6",
    scientificNote: "G6",
    frequency: 1567.98,
    register: "altissimo",
    registerLabel: { en: "Altissimo Register", zh: "超高音区", de: "Altissimo-Register", ja: "超高音域" },
    octaveNumber: 6,
    pitchClass: "G",
    fingerings: [
      {
        id: "g6-alt",
        name: { en: "Altissimo G6 (Peak)", zh: "超高音G6 (极限高音)", de: "Altissimo G6", ja: "超高音 G6" },
        description: {
          en: "3rd Octave + LH 1-2 + Left G# + RH 1 + C key.",
          zh: "第3八度 + 左手1-2 + 左G# + 右手1 + C共鸣键。",
          de: "3. Oktavklappe + links 1-2 + linkes Gis + rechts 1 + C.",
          ja: "第3オクターブ + 左手1-2 + 左G# + 右手1 + C。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave3: true,
          halfHole: 'closed',
          lh1: true, lh2: true,
          lhGSharp: true,
          rh1: true,
          rhLowC: true
        }
      }
    ]
  },
  {
    id: "a6",
    note: "A6",
    scientificNote: "A6",
    frequency: 1760.00,
    register: "altissimo",
    registerLabel: { en: "Altissimo Ceiling", zh: "超高音天花板", de: "Altissimo Spitze", ja: "超高音天井" },
    octaveNumber: 6,
    pitchClass: "A",
    fingerings: [
      {
        id: "a6-alt",
        name: { en: "Altissimo A6 Ceiling Note", zh: "超高音 A6 天花板音", de: "Altissimo A6 Höchstton", ja: "超高音 A6 最高音" },
        description: {
          en: "The extreme zenith of modern orchestral oboe repertoire. High pressure embouchure and reed crown harmonics required.",
          zh: "现代双簧管管弦乐文献最高音天花板。需高张力嘴唇控制与哨片冠部多频泛音发音。",
          de: "Der absolute Höchstton der modernen Oboenliteratur.",
          ja: "現代オーボエの最高峰音。極めて高度なアンブシュア制御が必要です。"
        },
        isStandard: true,
        keys: {
          ...defaultKeys,
          octave3: true,
          octave2: true,
          lh1: true,
          lhGSharp: true,
          rh1: true, rh2: true,
          rhEb: true
        }
      }
    ]
  }
];
