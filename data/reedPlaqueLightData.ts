// Oboe Reed Plaque Backlight & Micrometer Scraping Physics Model
// Real optical translucency mapping against cane fiber micrometer thickness

export interface PlaqueZone {
  id: 'tip' | 'heart' | 'spine' | 'windows' | 'rails';
  name: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  idealThicknessMm: number;    // Standard target thickness in mm
  minSafeThicknessMm: number;  // Threshold below which reed collapses
  opticalHue: string;          // Color under direct backlighting
  opticalOpacity: number;      // 0 (transparent) to 1.0 (opaque)
  description: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  dangerWarning: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  acousticEffectPerScrape: {
    resistanceDeltaPercent: number;  // Negative means freer blowing
    pitchShiftCentsF5: number;       // Risk of pitch dropping flat
    toneBrightnessDelta: number;     // 1 to 5 scale
  };
}

export const PLAQUE_ZONES: PlaqueZone[] = [
  {
    id: 'tip',
    name: {
      en: 'Tip (Front 2mm)',
      zh: '尖端刀口区 (前端 2mm)',
      de: 'Spitze (Vordere 2mm)',
      ja: '先端チップ (最先端 2mm)',
    },
    idealThicknessMm: 0.08,
    minSafeThicknessMm: 0.04,
    opticalHue: '#FEF08A', // Pale translucent yellow
    opticalOpacity: 0.25,
    description: {
      en: 'The thinnest vibrating edge. Under the plaque light, it should glow with bright translucent radiance without black fibers.',
      zh: '最薄的微震动边缘。在插板逆光下应呈现均匀剔透的淡黄色微光，无粗黑纤维堵塞。',
      de: 'Dünnste Schwingungskante. Leuchtet im Gegenlicht hellgelb und transparent.',
      ja: '最も薄い振動部。プラークの逆光で黒い筋がなく明るく透き通る淡黄色になります。',
    },
    dangerWarning: {
      en: 'Warning: If scraped below 0.04mm, the tip will flutter, buzz, and lose all dynamic focus.',
      zh: '危险警告：若薄于 0.04mm，尖端将过度扁平发散，高音完全失去控制。',
      de: 'Gefahr: Unter 0.04mm flattert die Spitze und der Klang wird schneidend schrill.',
      ja: '危険: 0.04mm以下に削ると先端がへたり、音色が雑音混じりになります。',
    },
    acousticEffectPerScrape: {
      resistanceDeltaPercent: -15,
      pitchShiftCentsF5: -4,
      toneBrightnessDelta: 2,
    },
  },
  {
    id: 'heart',
    name: {
      en: 'Heart (Inverted Triangle)',
      zh: '心脏倒三角区 (Heart Center)',
      de: 'Herz (Umgekehrtes Dreieck)',
      ja: 'ハート中央部 (逆三角形)',
    },
    idealThicknessMm: 0.42,
    minSafeThicknessMm: 0.32,
    opticalHue: '#B45309', // Deep warm amber
    opticalOpacity: 0.65,
    description: {
      en: 'The sacred tone core. Must appear as a distinct darker amber silhouette just behind the tip.',
      zh: '双簧管音色的神圣之核。在插板背光下必须保持鲜明深沉的琥珀色倒三角暗影。',
      de: 'Der Klangkern. Erscheint im Gegenlicht als dunklere bernsteinfarbene Silhouette.',
      ja: '音色のコア。逆光下で先端後方に明瞭な琥珀色の逆三角形として浮かび上がります。',
    },
    dangerWarning: {
      en: 'CRITICAL: Scraping through the heart instantly ruins the reed. Intonation will drop by 15+ cents and cannot be salvaged.',
      zh: '致命警告：刮穿心脏区将直接报废哨片！高音音准将坍塌下坠 15 音分以上，无法挽救。',
      de: 'KRITISCH: Ein durchgeschabtes Herz ruiniert das Rohr sofort. Die Intonation sackt drastisch ab.',
      ja: '致命的: ハートを削りすぎると即座に破棄。ピッチが15セント以上ぶら下がり修復不能です。',
    },
    acousticEffectPerScrape: {
      resistanceDeltaPercent: -25,
      pitchShiftCentsF5: -12,
      toneBrightnessDelta: -3,
    },
  },
  {
    id: 'spine',
    name: {
      en: 'Central Spine (Backbone)',
      zh: '中央脊柱梁 (Spine Ridge)',
      de: 'Mittelgrat (Rückgrat)',
      ja: 'センター・スパイン (背骨)',
    },
    idealThicknessMm: 0.52,
    minSafeThicknessMm: 0.44,
    opticalHue: '#78350F', // Dark solid wood
    opticalOpacity: 0.85,
    description: {
      en: 'Longitudinal structural ridge running from the binding thread to the heart. Appears as the darkest central stripe.',
      zh: '从线圈贯穿至心脏的拱梁。逆光下呈现最深暗的竖向中心条带，支撑哨片拱桥张力。',
      de: 'Längsgrat von der Wicklung zum Herz. Dunkelster zentraler Streifen.',
      ja: '糸巻きからハートまで続く縦のアーチ。逆光で最も濃い暗色ストライプになります。',
    },
    dangerWarning: {
      en: 'Preserve this ridge. Weakening the spine causes the reed tip opening to clamp shut during fortissimo.',
      zh: '绝不可削平脊柱！脊柱变薄会导致演奏强音（ff）时哨口瞬间吸瘪闭合闭气。',
      de: 'Grat nicht schwächen! Führt bei fortissimo zum plötzlichen Zuklappen der Blattöffnung.',
      ja: 'スパインを削らないこと！強奏時にリードの開きが潰れて息が詰まります。',
    },
    acousticEffectPerScrape: {
      resistanceDeltaPercent: -10,
      pitchShiftCentsF5: -6,
      toneBrightnessDelta: -1,
    },
  },
  {
    id: 'windows',
    name: {
      en: 'Lateral Windows & Shoulders',
      zh: '侧肩与侧窗区 (Windows)',
      de: 'Seitliche Fenster & Schultern',
      ja: 'サイド・ウィンドウ (側窓)',
    },
    idealThicknessMm: 0.30,
    minSafeThicknessMm: 0.20,
    opticalHue: '#D97706', // Translucent golden amber
    opticalOpacity: 0.45,
    description: {
      en: 'Flanking channels on both sides of the spine. Controls airflow channels and low register fluency.',
      zh: '位于中央脊柱两侧的侧翼过渡带。逆光呈半透金黄色，控制通气流道与低音灵活性。',
      de: 'Flankierende Kanäle beiderseits des Grates für leichte Tiefenansprache.',
      ja: 'スパインの両脇に広がるスロープ。逆光で半透明の黄金色に見え、低音の鳴りを支配します。',
    },
    dangerWarning: {
      en: 'Scrape symmetrically on both windows to avoid lopsided airflow and cracked reed corners.',
      zh: '两侧窗口必须严格对称刮削，否则会导致气流偏侧并造成哨角劈裂。',
      de: 'Unbedingt symmetrisch arbeiten, um asymmetrisches Schwingen zu verhindern.',
      ja: '左右対称に削ること。偏りがあると息漏れやリード先端の割れの原因になります。',
    },
    acousticEffectPerScrape: {
      resistanceDeltaPercent: -18,
      pitchShiftCentsF5: -3,
      toneBrightnessDelta: 1,
    },
  },
];
