// Master Academic Data: American Long Scrape vs European Short Scrape Schools
// Plus French Conservatory (CNSMDP) Historical Mechanics & Repertoire Pedagogy

export interface ReedScrapeProfile {
  id: string;
  name: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  founderAndTradition: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  totalScrapeLengthMm: number;    // e.g. 10.5mm (American) vs 6.5mm (European)
  hasShoulderStep: boolean;        // American = smooth blend; European = distinct 90-degree step
  barkRemaining: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  tipThicknessMm: number;          // 0.05-0.07mm
  heartThicknessMm: number;        // 0.38-0.44mm
  spineThicknessMm: number;        // 0.48-0.54mm
  backThicknessMm: number;         // 0.28-0.34mm (windows)
  stapleLengthMm: number;          // 47mm standard
  embouchureCushion: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  toneColorDescription: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  dynamicResistance: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  prominentPlayers: string[];
}

export const REED_SCHOOLS_DATA: {
  american: ReedScrapeProfile;
  european: ReedScrapeProfile;
} = {
  american: {
    id: 'american-long-scrape',
    name: {
      en: 'American Long Scrape (Tabuteau Style)',
      zh: '美式长刮学派 (塔布托体系)',
      de: 'Amerikanischer langer Schnitt (Tabuteau-Schule)',
      ja: 'アメリカン・ロングスクレープ (タビュトー派)',
    },
    founderAndTradition: {
      en: 'Pioneered by Marcel Tabuteau at the Curtis Institute and Philadelphia Orchestra. Dominates North American orchestras.',
      zh: '由传奇双簧管大师马塞尔·塔布托（Marcel Tabuteau）在柯蒂斯音乐学院与费城交响乐团奠定，统治北美所有主流交响乐团。',
      de: 'Begründet von Marcel Tabuteau am Curtis Institute und Philadelphia Orchestra. Standard in Nordamerika.',
      ja: 'マルセル・タビュトーがカーティス音楽院とフィラデルフィア管弦楽団で確立した北米の主流派。',
    },
    totalScrapeLengthMm: 10.5,
    hasShoulderStep: false,
    barkRemaining: {
      en: 'Bark scraped away almost entirely from the tie thread forward; seamless continuous taper from back to tip.',
      zh: '从线结往前的树皮几乎全部刮净，形成从背部到尖端无台阶的平滑过渡斜坡。',
      de: 'Rinde fast vollständig abgebunden; nahtloser, fließender Übergang von der Bahn zur Spitze.',
      ja: '糸の巻き終わりから先端にかけて樹皮をほぼ完全に削り落とし、段差のない滑らかなスロープを形成。',
    },
    tipThicknessMm: 0.06,
    heartThicknessMm: 0.40,
    spineThicknessMm: 0.49,
    backThicknessMm: 0.30,
    stapleLengthMm: 47,
    embouchureCushion: {
      en: 'Full lip roll cushion (both lips wrapped over teeth). Reed taken deeply into the mouth with light jaw pressure.',
      zh: '上下唇深卷包齿，含入哨片较深，依靠微弱下颌压力配合深厚腹部气压吹奏。',
      de: 'Voll über die Zähne gerollte Lippen. Das Rohr wird tiefer in den Mund genommen.',
      ja: '上下の唇をしっかりと歯の上に巻き込み、リードを深めにくわえて息の圧力で鳴らす。',
    },
    toneColorDescription: {
      en: 'Dark, velvety, focused, covered core. High flexibility across dynamic extremes, capable of whisper pianissimos.',
      zh: '深沉、浓厚、内敛的暗色核心音色。具有极高的动态弹性，极弱音（pp）极其容易起音且不发炸。',
      de: 'Dunkler, samtiger, gedeckter Klang. Herausragende Pianissimo-Flexibilität.',
      ja: 'ダークでビロードのように温かく包容力のある音色。極弱音でのコントロール性に優れる。',
    },
    dynamicResistance: {
      en: 'Moderate to high breath resistance; demands high intra-oral air pressure and robust abdominal support.',
      zh: '阻抗中等偏高；需要很高的口腔内气压与横膈膜深层支撑。',
      de: 'Mittlerer bis hoher Blaswiderstand; erfordert hohe Zwerchfellstütze.',
      ja: '息の抵抗感は中〜強。高い口腔内気圧と強固な腹部サポートを要求。',
    },
    prominentPlayers: [
      'Marcel Tabuteau (Philadelphia Orchestra)',
      'John de Lancie (Philadelphia Orchestra)',
      'Harold Gomberg (New York Philharmonic)',
      'Richard Woodhams (Philadelphia Orchestra)',
      'Elaine Douvas (Metropolitan Opera)',
    ],
  },
  european: {
    id: 'european-short-scrape',
    name: {
      en: 'European Short Scrape (French / German Traditional)',
      zh: '欧式短刮学派 (德法传统体系)',
      de: 'Europäischer kurzer Schnitt (Deutsch/Französisch)',
      ja: 'ヨーロピアン・ショートスクレープ (独仏伝統派)',
    },
    founderAndTradition: {
      en: 'The direct lineage of French & German Conservatories (Paris CNSMDP, Berlin, Vienna). Standard in European and Asian symphony orchestras.',
      zh: '巴黎国立高等音乐学院（CNSMDP）与德奥音乐学派的纯正血统。欧洲、日本乃至全球多数管弦乐团的标准。',
      de: 'Direkte Linie der französischen und deutschen Hochschulen. Standard in europäischen und asiatischen Orchestern.',
      ja: 'パリ国立高等音楽院やベルリン、ウィーンに代表される正統派。ヨーロッパおよびアジアの標準。',
    },
    totalScrapeLengthMm: 6.8,
    hasShoulderStep: true,
    barkRemaining: {
      en: 'Distinct 90-degree step (Shoulder) retaining substantial natural bark behind the 6.8mm scrape.',
      zh: '在 6.8mm 刮削区后方保留清晰的台阶（Shoulder），下方保留大量天然坚硬树皮，为哨片提供极强物理骨架。',
      de: 'Deutliche Stufe (Shoulder) mit viel erhaltener Naturrinde hinter der kurzen Bahn.',
      ja: '6.8mmのスクレープ境界に明確な段差（ショルダー）を設け、後方に天然樹皮をしっかりと残す。',
    },
    tipThicknessMm: 0.08,
    heartThicknessMm: 0.45,
    spineThicknessMm: 0.54,
    backThicknessMm: 0.36,
    stapleLengthMm: 47,
    embouchureCushion: {
      en: 'French relaxed smile embouchure with outward lip cushion. Reed taken shallowly on the red lip border.',
      zh: '法式“微笑”微展口型，嘴唇向外翻出形成丰厚肉垫，仅含入哨片尖端约 2-3mm。',
      de: 'Entspannterer französischer Ansatz mit vorgestülpten Lippen. Sehr flach an der Spitze geblasen.',
      ja: 'フレンチスタイルのリラックスしたアンブシュア。唇の赤い部分に浅く乗せるようにくわえる。',
    },
    toneColorDescription: {
      en: 'Brilliant, projecting, singing, liquid cantabile. Pierces effortlessly through dense orchestral brass and string textures.',
      zh: '明亮、华丽、歌唱性极强的高通透音色。在中高频穿透力极强，能轻松穿透交响乐团厚重的铜管与弦乐织体。',
      de: 'Brillanter, tragfähiger, singender Gesangston mit großer Projektion im Saal.',
      ja: '輝かしく抜けの良い、遠達性に優れた歌うような音色。大編成オケでも埋もれないプロジェクション。',
    },
    dynamicResistance: {
      en: 'Free-blowing, immediate reed response with lower initial blowing effort, but requires embouchure lip micro-flexing.',
      zh: '通气顺畅，起音即时轻灵；吹奏省力，但对嘴唇微肌肉的张弛调控要求极高。',
      de: 'Freiere Ansprache und unmittelbarer Tonansatz; erfordert präzise Lippenfeinmotorik.',
      ja: '息抜けが良く素直なレスポンス。吹き込みは軽快だが繊細な唇のコントロールが必須。',
    },
    prominentPlayers: [
      'Albrecht Mayer (Berlin Philharmonic)',
      'François Leleux (International Soloist)',
      'Heinz Holliger (Virtuoso & Composer)',
      'Maurice Bourgue (Paris CNSMDP Master)',
      'Fumiaki Miyamoto (NHK Symphony / Tokyo)',
    ],
  },
};

// French Conservatory Historical Mechanics & Repertoire Pedagogy
export interface FrenchConservatoireMonograph {
  title: string;
  era: string;
  significance: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  pedagogicalWork: string;
  keyTechnicalInvention: string;
}

export const FRENCH_CONSERVATOIRE_MONOGRAPHS: FrenchConservatoireMonograph[] = [
  {
    title: 'Guillaume Triébert & The Système 6 (1870-1881)',
    era: '19th-Century Paris Master Workshops',
    significance: {
      en: 'Invented the baseline keywork of the modern oboe, introducing the thumb-plate and the earliest automatic octave linkages.',
      zh: '发明了现代双簧管的机械基准。引入拇指板（Thumb-plate）与早期八度键联动机构，彻底摆脱了古典木孔按孔限制。',
      de: 'Erfand die grundlegende Mechanik der modernen Oboe und frühe Oktavkopplungen.',
      ja: '現代オーボエのメカニズムの基礎を確立。サムプレートや初期オクターブ連動を開発。',
    },
    pedagogicalWork: 'Apollon Barret: Complete Oboe Method (40 Progressive Melodies)',
    keyTechnicalInvention: 'Articulated C# and Bb keys with low B resonance linkage',
  },
  {
    title: 'François Lorée & Georges Gillet (1881-1906)',
    era: 'Paris Conservatoire (CNSMDP) Golden Era',
    significance: {
      en: 'Created the "Système 6 bis" (Conservatoire Model), establishing the plateaux (covered holes), half-hole vent, and split-D mechanism standard used worldwide today.',
      zh: '在巴黎音乐学院传奇教授吉莱（Georges Gillet）指导下，创立“6号修正版”（Conservatoire 体系），确定了全密闭盖孔、食指半孔与低音 Bb 共振孔，成为今日世界标准。',
      de: 'Schuf das Modell Conservatoire (Système 6 bis) mit gedeckelten Klappen und Halbloch.',
      ja: '名教授ジョルジュ・ジレと共同で「コンセルヴァトワール式（Système 6 bis）」を完成。',
    },
    pedagogicalWork: 'W. Ferling: 48 Famous Studies (Op. 31) & Gillet 25 Studies',
    keyTechnicalInvention: 'Plateaux covered key system & Left-hand F lever (Clé de Fa à gauche)',
  },
  {
    title: 'The 3rd Octave Key & Modern Parisian Innovations (1960-Present)',
    era: 'Contemporary Orchestral Demands',
    significance: {
      en: 'Integration of the 3rd octave key on the upper joint for stable high E6 to A6 notes, required for 20th-century repertoire (Berio, Carter, Dutilleux).',
      zh: '在上管加装第 3 八度键，为 20 世纪现代作品（如贝里奥独白、卡特、杜蒂耶协奏曲）中的超高音 E6 到 A6 赋予了极高的音准稳定性。',
      de: 'Einführung der 3. Oktavklappe für extrem hohe Lagen (E6-A6) in zeitgenössischer Musik.',
      ja: '第3オクターブキーの標準搭載。現代曲におけるE6〜A6の超高音域を安定化。',
    },
    pedagogicalWork: 'Henri Dutilleux: Sonata for Oboe and Piano (1947)',
    keyTechnicalInvention: 'Harmonic venting micro-keys & Composite crack-proof joint technology',
  },
];
