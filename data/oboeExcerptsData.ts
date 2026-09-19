// Oboe Audition Masterpiece Excerpts Data
// The Top 5 Orchestral Test Excerpts for Oboe Principals

export interface ExcerptNote {
  note: string;               // e.g. "D5", "G4", "C#5"
  scientificNote: string;
  durationSec: number;
  isDifficult?: boolean;      // Highlight tricky notes
  techniqueTipZh?: string;
  techniqueTipEn?: string;
}

export interface OboeExcerpt {
  id: string;
  slug: string;
  composer: string;
  title: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  work: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  movement: string;
  tempo: string;
  keySignature: string;
  timeSignature: string;
  difficultyRating: string;   // e.g. "★★★★★ (Everest)"
  historicalSignificance: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  auditionPitfalls: {
    en: string[];
    zh: string[];
    de: string[];
    ja: string[];
  };
  fingeringKeysFocus: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  notesSequence: ExcerptNote[];
}

export const OBOE_EXCERPTS: OboeExcerpt[] = [
  {
    id: 'ravel-tombeau',
    slug: 'ravel-le-tombeau-de-couperin-prelude',
    composer: 'Maurice Ravel (1875-1937)',
    title: {
      en: 'Le Tombeau de Couperin: Prélude Solo',
      zh: '《库普兰之墓》前奏曲双簧管独奏',
      de: 'Le Tombeau de Couperin: Prélude Solo',
      ja: '『クープランの墓』前奏曲ソロ',
    },
    work: {
      en: 'Le Tombeau de Couperin (Orchestral Suite)',
      zh: '《库普兰之墓》管弦乐组曲',
      de: 'Le Tombeau de Couperin',
      ja: '組曲『クープランの墓』',
    },
    movement: '1st Movement: Prélude (Vif, 16th notes)',
    tempo: 'Vif (♩ = 138-144, or dotted quarter = 92)',
    keySignature: 'E minor (1 sharp)',
    timeSignature: '12/8',
    difficultyRating: '★★★★★ (The Everest of Oboe)',
    historicalSignificance: {
      en: 'Universally recognized as the supreme technical benchmark in professional auditions worldwide. Requires flawless double-tonguing or razor-sharp single tonguing at breakneck speeds.',
      zh: '全球所有交响乐团招聘考试公认的最高技术试金石（双簧管界的珠穆朗玛峰）。要求在极速下呈现颗粒分明、珍珠般的16分音符连吐交替。',
      de: 'Der absolute technische Prüfstein in jedem Probespiel weltweit. Erfordert makellose Staccato-Klarheit bei halsbrecherischem Tempo.',
      ja: '世界中のオーケストラ・オーディションで最重要視される最高難度の試金石。超高速での粒立ちの揃ったスタッカートとレガートの交替が必須。',
    },
    auditionPitfalls: {
      zh: [
        '致命陷阱 1：右手换指打结。从 D5 跳至 F#5 必须使用左手小指 F 键（Left-F）或专用连动键，切忌使用叉状分叉 F。',
        '致命陷阱 2：起音抢拍或渐慢。12/8 拍极易在快速跑动中越吹越慢或重音失衡，考官极其看重节拍器的绝对平稳。',
        '致命陷阱 3：吐音沉重发钝。尖端苇片必须极其灵敏，用舌尖轻触哨片尖下 1mm 处，以轻盈如同羽毛弹跳的方式起音。',
      ],
      en: [
        'Pitfall 1: Finger knots on D5-F#5. Strictly use the Left-hand F auxiliary lever, avoid clumsy forked-F cross fingering.',
        'Pitfall 2: Rushing or dragging tempo. Maintain unflinching metronomic precision in 12/8 time across all 16th-note groupings.',
        'Pitfall 3: Heavy tongue weight. Touch only the top 1mm tip of the reed with the tip of the tongue for effortless feather-light articulation.',
      ],
      de: [
        'Falle 1: Griffverhedderung. Verwende zwingend das linke F (Left-F).',
        'Falle 2: Ungleichmäßiges Tempo im 12/8-Takt.',
        'Falle 3: Zu schwerer Zungenstoß auf dem Rohr.',
      ],
      ja: [
        '注意点 1: 左手Fキーの徹底使用（フォークFは運指が破綻します）。',
        '注意点 2: 12/8拍子のインテンポ維持。',
        '注意点 3: 舌先をリード先端1mmに極めて軽く当てる軽快なタンギング。',
      ],
    },
    fingeringKeysFocus: {
      zh: '核心键位：左手 F 键（Left-F Lever）、食指半孔精密微滚、第1与第2八度键平滑交替。',
      en: 'Key focus: Left-hand F auxiliary lever, precise half-hole roll, smooth 1st to 2nd octave shift.',
      de: 'Schlüsselfokus: Linkes F, Halbloch-Präzision, Oktavklappen-Wechsel.',
      ja: '重要キー: 左手Fキー、精密なハーフホール、第1・第2オクターブの交替。',
    },
    notesSequence: [
      { note: 'E4', scientificNote: 'E4', durationSec: 0.25 },
      { note: 'G4', scientificNote: 'G4', durationSec: 0.25 },
      { note: 'B4', scientificNote: 'B4', durationSec: 0.25 },
      { note: 'E5', scientificNote: 'E5', durationSec: 0.25, isDifficult: true, techniqueTipZh: '第1八度键与左手1-2-3' },
      { note: 'D5', scientificNote: 'D5', durationSec: 0.25, isDifficult: true, techniqueTipZh: '食指微滚半孔' },
      { note: 'B4', scientificNote: 'B4', durationSec: 0.25 },
      { note: 'A4', scientificNote: 'A4', durationSec: 0.25 },
      { note: 'G4', scientificNote: 'G4', durationSec: 0.25 },
      { note: 'F#4', scientificNote: 'F#4', durationSec: 0.25 },
      { note: 'G4', scientificNote: 'G4', durationSec: 0.25 },
      { note: 'E4', scientificNote: 'E4', durationSec: 0.5 },
    ],
  },
  {
    id: 'beethoven-eroica',
    slug: 'beethoven-symphony-3-eroica-funeral-march',
    composer: 'Ludwig van Beethoven (1770-1827)',
    title: {
      en: 'Symphony No. 3 "Eroica": Funeral March Solo',
      zh: '《第三交响曲“英雄”》第二乐章葬礼进行曲独奏',
      de: 'Sinfonie Nr. 3 "Eroica": Trauermarsch',
      ja: '交響曲第3番『英雄』葬送行進曲ソロ',
    },
    work: {
      en: 'Symphony No. 3 in E-flat Major, Op. 55',
      zh: '降E大调第三交响曲 Op. 55《英雄》',
      de: 'Sinfonie Nr. 3 Es-Dur op. 55',
      ja: '交響曲第3番 変ホ長調 作品55',
    },
    movement: '2nd Movement: Marcia funebre (Adagio assai, C minor)',
    tempo: 'Adagio assai (♪ = 80)',
    keySignature: 'C minor (3 flats)',
    timeSignature: '2/4',
    difficultyRating: '★★★★★ (Tone Gravity & Pathos)',
    historicalSignificance: {
      en: 'The legendary solemn oboe monologue in music history. Demands heartbreaking emotional depth, dark orchestral core projection, and flawless intonation on C5 and C#5.',
      zh: '音乐史上最悲壮凝重的双簧管独白。极度考验双簧管的暗色歌唱核心共鸣、崇高悲怆的情感张力以及 C5 与 C#5 的色彩微调。',
      de: 'Der berühmteste Trauergesang der Oboenliteratur. Verlangt tiefe emotionale Schwere und vollkommene Intonationsbeherrschung.',
      ja: '音楽史上最も崇高な葬送のモノローグ。深くダークな音色の芯と、C5・C#5における精密なピッチコントロールが審査されます。',
    },
    auditionPitfalls: {
      zh: [
        '致命陷阱 1：C5 音色单薄发白。在弱奏（p）进场时，下巴切勿紧咬，用深厚横膈膜气压送入圆锥管体。',
        '致命陷阱 2：装饰音音准偏高。三连音向高音跳跃时，喉部切莫紧张上缩造成音准冲高 10 音分。',
        '致命陷阱 3：气口喘息声过大。换气必须像叹息般沉稳深远，不能打断葬礼队伍缓慢前行的沉重步伐。',
      ],
      en: [
        'Pitfall 1: Thin, pale C5 entry. Never bite the reed; support with low diaphragm breath pressure for dark resonance.',
        'Pitfall 2: Sharp ornamentation. Relax the throat during the ornamental triplets to prevent the pitch leaping 10 cents sharp.',
        'Pitfall 3: Audible gasp on breath. Breath intake must remain inaudible, preserving the solemn funeral cadence.',
      ],
      de: [
        'Falle 1: Dünnes, weißes C5. Unbedingt mit tiefer Zwerchfellstütze stützen.',
        'Falle 2: Zu hohe Triolen-Intonation.',
        'Falle 3: Hörbares Atemholen stört die Feierlichkeit.',
      ],
      ja: [
        '注意点 1: C5の音が白く浅くならないよう、深い横隔膜の支えで吹くこと。',
        '注意点 2: 装飾音の三連符で上ずらないよう喉をリラックス。',
        '注意点 3: ブレスの吸気音を立てないこと。',
      ],
    },
    fingeringKeysFocus: {
      zh: '核心键位：半孔 C5 微调、右手低音 C 键共鸣共振。',
      en: 'Key focus: Half-hole C5 micro-tuning, resonant key voicing.',
      de: 'Schlüsselfokus: C5 Halbloch-Kompensation, Resonanzklappen.',
      ja: '重要キー: C5ハーフホール調整、豊かなレゾナンスの確保。',
    },
    notesSequence: [
      { note: 'C5', scientificNote: 'C5', durationSec: 1.0, isDifficult: true, techniqueTipZh: '深沉暗色核心' },
      { note: 'Eb5', scientificNote: 'Eb5', durationSec: 0.5 },
      { note: 'D5', scientificNote: 'D5', durationSec: 0.5 },
      { note: 'C5', scientificNote: 'C5', durationSec: 0.5 },
      { note: 'B4', scientificNote: 'B4', durationSec: 1.5 },
      { note: 'C5', scientificNote: 'C5', durationSec: 0.5 },
      { note: 'G4', scientificNote: 'G4', durationSec: 2.0 },
    ],
  },
  {
    id: 'brahms-violin-concerto',
    slug: 'brahms-violin-concerto-adagio-oboe-solo',
    composer: 'Johannes Brahms (1833-1897)',
    title: {
      en: 'Violin Concerto: Adagio 32-Bar Oboe Solo',
      zh: '《小提琴协奏曲》第二乐章 32小节大独奏',
      de: 'Violinkonzert: Adagio Oboensolo (32 Takte)',
      ja: 'ヴァイオリン協奏曲 第2楽章 32小節オーボエ・ソロ',
    },
    work: {
      en: 'Violin Concerto in D Major, Op. 77',
      zh: 'D大调小提琴协奏曲 Op. 77',
      de: 'Violinkonzert D-Dur op. 77',
      ja: 'ヴァイオリン協奏曲 ニ長調 作品77',
    },
    movement: '2nd Movement: Adagio (F major)',
    tempo: 'Adagio (♪ = 60-66)',
    keySignature: 'F major (1 flat)',
    timeSignature: '2/4',
    difficultyRating: '★★★★★ (Breath Stamina & Cantabile)',
    historicalSignificance: {
      en: 'The most sublime slow-movement cantabile in oboe orchestral literature. The oboe introduces the entire 32-bar melody before the solo violin ever plays a single note.',
      zh: '双簧管文献中最具诗意的慢板长歌。在独奏小提琴演奏哪怕一个音符之前，双簧管独自吟唱长达 32 小节的唯美主题，考验极限制息与气流分配。',
      de: 'Das schönste lyrische Solo der Orchesterliteratur. Die Oboe singt 32 Takte lang das Hauptthema, bevor die Solovioline einsetzt.',
      ja: 'オーケストラ史上最も美しいオーボエのカンタービレ。ソロ・ヴァイオリンが登場する前に、オーボエが32小節にわたり天国的な主題を歌い上げます。',
    },
    auditionPitfalls: {
      zh: [
        '致命陷阱 1：换气窒息憋闷。双簧管进气阻抗极大，32小节不是气不够，而是“废气排不出”！必须学会吹奏间隙快速呼出浊气。',
        '致命陷阱 2：长音尾端音色干瘪。每个音符的释放（Release）必须像大提琴揉弦一样圆润消退，绝不可用喉咙卡断。',
        '致命陷阱 3：高音 A5 尖锐刺耳。使用第2八度侧键（Octave 2）时，嘴唇保持温和包覆，切忌过度挤压。',
      ],
      en: [
        'Pitfall 1: Carbon dioxide build-up. The challenge is exhalation, not inhalation! Master expelling stale air during micro-rests.',
        'Pitfall 2: Abrupt note endings. Every release must taper naturally like a cello bow, never clipped with the glottis.',
        'Pitfall 3: Harsh A5. Engage the 2nd octave key with relaxed lip cushion to avoid pinched upper harmonics.',
      ],
      de: [
        'Falle 1: Altes Kohlendioxid ausatmen! Die Lunge staut sich bei der Oboe.',
        'Falle 2: Abrupte Tonabschlüsse. Sanftes Ausschwingen lassen.',
        'Falle 3: Schrilles A5 mit der 2. Oktavklappe vermeiden.',
      ],
      ja: [
        '注意点 1: 息が足りないのではなく「吐き出せない」現象への対処。微小な休符で素早く古息を捨てること。',
        '注意点 2: 音の終わりのテーパー（消え際）をチェロの弓のように優美に。',
        '注意点 3: 第2オクターブのA5が硬く尖らないようアンブシュアを柔軟に。',
      ],
    },
    fingeringKeysFocus: {
      zh: '核心键位：第2八度键（Octave 2 侧键）与左手 F 键平稳连接。',
      en: 'Key focus: 2nd Octave side key smoothness, left-F cantabile connection.',
      de: 'Schlüsselfokus: 2. Oktavklappe seitlich, Legato-Verbindung.',
      ja: '重要キー: 第2オクターブ側面レバー、レガート連結。',
    },
    notesSequence: [
      { note: 'A4', scientificNote: 'A4', durationSec: 1.2 },
      { note: 'F4', scientificNote: 'F4', durationSec: 0.8 },
      { note: 'C5', scientificNote: 'C5', durationSec: 1.0 },
      { note: 'A4', scientificNote: 'A4', durationSec: 1.0 },
      { note: 'Bb4', scientificNote: 'Bb4', durationSec: 0.6 },
      { note: 'C5', scientificNote: 'C5', durationSec: 0.6 },
      { note: 'D5', scientificNote: 'D5', durationSec: 1.4, isDifficult: true, techniqueTipZh: '饱满长音气息支撑' },
    ],
  },
  {
    id: 'tchaikovsky-swan-lake',
    slug: 'tchaikovsky-swan-lake-act-2-scene-solo',
    composer: 'Pyotr Ilyich Tchaikovsky (1840-1893)',
    title: {
      en: 'Swan Lake: Act II Scene Oboe Theme',
      zh: '《天鹅湖》第二幕场景双簧管天鹅主题',
      de: 'Schwanensee: Akt II Szene (Oboen-Thema)',
      ja: '『白鳥の湖』第2幕 情景オーボエ・テーマ',
    },
    work: {
      en: 'Swan Lake, Op. 20',
      zh: '芭蕾舞剧《天鹅湖》Op. 20',
      de: 'Schwanensee op. 20',
      ja: 'バレエ音楽『白鳥の湖』作品20',
    },
    movement: 'Act II: No. 10 Scène (Moderato)',
    tempo: 'Moderato (♩ = 104)',
    keySignature: 'B minor (2 sharps)',
    timeSignature: '4/4',
    difficultyRating: '★★★★☆ (Russian Melodic Pathos)',
    historicalSignificance: {
      en: 'The most iconic oboe melody known to the global public. Demands exquisite vibrato modulation, full-throated middle register warmth (B4-G4), and heartrending rubato.',
      zh: '全球公众知名度最高的双簧管旋律。极度考验中音区（B4至G4）圆锥管身的高纯度饱满发音、柔韧自然的揉弦（Rubato）与忧郁天鹅的戏剧感染力。',
      de: 'Die berühmteste Oboenmelodie der Welt. Verlangt warmen, weiten Mittelregisterklang und geschmeidiges Vibrato.',
      ja: '世界で最も有名なオーボエのメロディ。中音域（B4〜G4）の艶やかな鳴りと、哀愁を帯びたヴィブラートが必須。',
    },
    auditionPitfalls: {
      zh: [
        '致命陷阱 1：揉弦僵硬机械。切忌做喉部羊叫式的快速颤音，必须使用腹肌自然带动的 5.2Hz 柔和波浪。',
        '致命陷阱 2：升 F 音色开裂。从 B4 连音下滑到 F#4 时，下唇不可突然放松导致音准塌陷。',
        '致命陷阱 3：速度拖沓变沉。虽然情感忧郁，但这是芭蕾舞步背景，必须保持内在动能（Forward Momentum）。',
      ],
      en: [
        'Pitfall 1: Mechanical bleating vibrato. Use diaphragmatic abdominal resonance (5.2Hz) instead of a nervous throat wobble.',
        'Pitfall 2: Sagging F#4 intonation. Maintain firm lower lip support during the downward slur from B4.',
        'Pitfall 3: Dragging tempo. It is a dance scene; preserve inner buoyant forward momentum.',
      ],
      de: [
        'Falle 1: Mechanisches Mecker-Vibrato vermeiden.',
        'Falle 2: Absackende F#4-Intonation im Legato-Abstrich.',
        'Falle 3: Nicht verschleppen, tänzerischen Fluss beibehalten.',
      ],
      ja: [
        '注意点 1: 喉で揺らす不自然なヴィブラートではなく、腹式呼吸による自然なウェーブ（5.2Hz）。',
        '注意点 2: B4からF#4へのスラーでピッチが下がらないよう下唇を安定。',
        '注意点 3: バレエの歩みを失わないようテンポを重く引きずらないこと。',
      ],
    },
    fingeringKeysFocus: {
      zh: '核心键位：右手 1 孔升 F（F#4）与左手 1-2-3 圆润连奏。',
      en: 'Key focus: Smooth legato between RH1 (F#4) and LH 1-2-3.',
      de: 'Schlüsselfokus: Nahtloser Übergang zu Fis4.',
      ja: '重要キー: F#4と左手1-2-3の滑らかなレガート。',
    },
    notesSequence: [
      { note: 'F#4', scientificNote: 'F#4', durationSec: 1.0 },
      { note: 'B4', scientificNote: 'B4', durationSec: 1.5, isDifficult: true, techniqueTipZh: '柔和天鹅音色' },
      { note: 'C#5', scientificNote: 'C#5', durationSec: 0.5 },
      { note: 'D5', scientificNote: 'D5', durationSec: 0.8 },
      { note: 'C#5', scientificNote: 'C#5', durationSec: 0.4 },
      { note: 'B4', scientificNote: 'B4', durationSec: 1.2 },
      { note: 'F#4', scientificNote: 'F#4', durationSec: 1.5 },
    ],
  },
  {
    id: 'strauss-oboe-concerto',
    slug: 'richard-strauss-oboe-concerto-opening-solo',
    composer: 'Richard Strauss (1864-1949)',
    title: {
      en: 'Oboe Concerto: Opening 56-Measure Soliloquy',
      zh: '《双簧管协奏曲》开篇 56 小节无休止长独奏',
      de: 'Oboenkonzert: Eröffnungssolo (56 Takte)',
      ja: 'オーボエ協奏曲 冒頭56小節の長大ソロ',
    },
    work: {
      en: 'Oboe Concerto in D Major, TrV 292',
      zh: 'D大调双簧管协奏曲 TrV 292',
      de: 'Konzert für Oboe und kleines Orchester D-Dur',
      ja: 'オーボエ協奏曲 ニ長调 TrV 292',
    },
    movement: '1st Movement: Allegro moderato',
    tempo: 'Allegro moderato (♩ = 84-88)',
    keySignature: 'D major (2 sharps)',
    timeSignature: '4/4',
    difficultyRating: '★★★★★ (Endurance & Circular Breathing)',
    historicalSignificance: {
      en: 'The pinnacle of 20th-century oboe concertos, composed in 1945. Demands continuous 16th-note arabesques for nearly 2 minutes without rest; testing circular breathing mastery or surgical phrase splitting.',
      zh: '20世纪双簧管协奏曲的最高巅峰（1945年作于战后）。长达近 2 分钟无任何休止符的16分音符阿拉伯蔓藤华彩，是对循环呼吸（Circular Breathing）与乐句解剖能力的终极考验。',
      de: 'Der Gipfelpunkt der modernen Oboenliteratur. Fast 2 Minuten ununterbrochene Sechzehntel-Arabesken ohne Pause.',
      ja: '20世紀オーボエ協奏曲の最高峰。約2分間にわたり休符なしで続く16分音符の無窮動。循環呼吸（循環奏法）の技術が試されます。',
    },
    auditionPitfalls: {
      zh: [
        '致命陷阱 1：无休止憋气导致面部充血。必须掌握口颊储气 + 鼻腔吸气的微型循环呼吸，或在长音颤音微小间隙做闪电呼气。',
        '致命陷阱 2：高音区旋律断气。超长线条极易在第 30 小节后手软唇酸，导致高音 F#5 破音发不出。',
        '致命陷阱 3：晚期浪漫主义色彩流失。不能吹成枯燥的练习曲，每一个下行琶音都必须充满维也纳式的晚霞与怀旧感。',
      ],
      en: [
        'Pitfall 1: Asphyxiation and facial congestion. Deploy cheek-reservoir circular breathing or micro-exhalations on tied notes.',
        'Pitfall 2: High note crack on fatigue. Guard against embouchure exhaustion causing high F#5 to split or fail to speak.',
        'Pitfall 3: Mechanical exercise tone. Infuse every descending arabesque with Straussian late-Romantic sunset nostalgia.',
      ],
      de: [
        'Falle 1: Kreislaufstau vermeiden durch Zirkularatmung.',
        'Falle 2: Einbruch des Ansatzes ab Takt 30.',
        'Falle 3: Nicht als Etüde spielen, sondern mit spätem Strauss-Schmelz.',
      ],
      ja: [
        '注意点 1: 頬に空気をためて鼻から吸う循環呼吸、またはタイの音での瞬間呼気。',
        '注意点 2: 疲労による高音F#5の音割れ。',
        '注意点 3: 単なる指の練習曲にならぬよう、リヒャルト・シュトラウス晩年の黄昏の抒情を込めること。',
      ],
    },
    fingeringKeysFocus: {
      zh: '核心键位：半孔高音 D5、第1与第2八度键微米交替、分叉 F 与左手 F 自由应变。',
      en: 'Key focus: Half-hole D5, seamless 1st/2nd octave action, agile left-F transitions.',
      de: 'Schlüsselfokus: Halbloch D5, Oktavklappen-Agilität, linkes F.',
      ja: '重要キー: ハーフホールD5、オクターブキーの敏捷な連動、左手Fの自在な切り替え。',
    },
    notesSequence: [
      { note: 'B4', scientificNote: 'B4', durationSec: 0.3 },
      { note: 'D5', scientificNote: 'D5', durationSec: 0.3, isDifficult: true, techniqueTipZh: '循环呼吸点' },
      { note: 'F#5', scientificNote: 'F#5', durationSec: 0.3, isDifficult: true, techniqueTipZh: '第2八度键' },
      { note: 'A5', scientificNote: 'A5', durationSec: 0.6, isDifficult: true, techniqueTipZh: '天鹅绒般圆润高音' },
      { note: 'G5', scientificNote: 'G5', durationSec: 0.3 },
      { note: 'E5', scientificNote: 'E5', durationSec: 0.3 },
      { note: 'C#5', scientificNote: 'C#5', durationSec: 0.3 },
      { note: 'D5', scientificNote: 'D5', durationSec: 1.0 },
    ],
  },
];
