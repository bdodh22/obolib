export interface LocalizedText {
  zh: string;
  en: string;
  de: string;
  ja: string;
}

export interface PracticeStep {
  step: number;
  title: LocalizedText;
  desc: LocalizedText;
  focusNote?: string;
}

export interface ScoreFAQ {
  q: LocalizedText;
  a: LocalizedText;
}

export interface OboeScoreData {
  id: string;
  slug: string;
  title: LocalizedText;
  seoTitle: LocalizedText;
  metaDesc: LocalizedText;
  keywords: LocalizedText;
  composer: string;
  composerEra: LocalizedText;
  difficulty: LocalizedText;
  keySignature: string;
  tempo: string;
  timeSignature: string;
  rangeNote: string;
  historicalContext: LocalizedText;
  auditionSignificance: LocalizedText;
  pedagogicalFocus: {
    zh: string[];
    en: string[];
    de: string[];
    ja: string[];
  };
  practiceSteps: PracticeStep[];
  faqs: ScoreFAQ[];
  relatedSlugs: string[];
  pdfDownloadName: string;
}

export const OBOE_SCORES_CATALOG: OboeScoreData[] = [
  // 1. 莫扎特 C大调双簧管协奏曲 K.314
  {
    id: "oboe-score-1",
    slug: "mozart-oboe-concerto-k314",
    title: {
      zh: "莫扎特 C大调双簧管协奏曲 K.314 第一乐章 (开朗的快板)",
      en: "Mozart Oboe Concerto in C Major K.314 - Allegro aperto",
      de: "Mozart Oboenkonzert C-Dur KV 314 - Allegro aperto",
      ja: "モーツァルト オーボエ協奏曲 ハ長調 K.314 第1楽章",
    },
    seoTitle: {
      zh: "莫扎特C大调双簧管协奏曲K.314总谱分谱·慢练指法与考团指南 | OboLib",
      en: "Mozart Oboe Concerto K.314 Sheet Music: Solo & Audition Guide | OboLib",
      de: "Mozart Oboenkonzert C-Dur KV 314 Noten & Probespiel-Guide | OboLib",
      ja: "モーツァルト オーボエ協奏曲 K.314 楽譜・運指＆オーディション解説 | OboLib",
    },
    metaDesc: {
      zh: "免费下载莫扎特C大调双簧管协奏曲K.314第一乐章独奏分谱。包含高位C6运指、十六分音符跳音吐音颗粒感拆解与交响乐团Audition试奏测评重点。",
      en: "Download Mozart Oboe Concerto in C Major K.314 1st movement solo sheet music. Master high C6 fingerings, staccato articulation, and audition standards.",
      de: "Kostenlose Noten für Mozart Oboenkonzert C-Dur KV 314 (1. Satz). Mit Fingersätzen für das hohe C6, Artikulation und Probespiel-Tipps.",
      ja: "モーツァルトのオーボエ協奏曲ハ長調 K.314 第1楽章の独奏譜。高音C6の運指、スタッカート発音、オーケストラ入団試演の重要ポイントを徹底解説。",
    },
    keywords: {
      zh: "莫扎特双簧管协奏曲,K314双簧管乐谱,双簧管考级曲目,双簧管试音必考,Mozart Oboe Concerto K314",
      en: "Mozart Oboe Concerto, Mozart K314 oboe sheet music, oboe audition excerpt, K314 PDF, oboe concerto C major",
      de: "Mozart Oboenkonzert KV 314, Oboe Noten PDF, Probespiel Oboe, Mozart C-Dur Oboe",
      ja: "モーツァルト オーボエ協奏曲, K314 楽譜, オーボエ 試演 課題曲, モーツァルト K314 PDF",
    },
    composer: "Wolfgang Amadeus Mozart (1756-1791)",
    composerEra: {
      zh: "古典主义时期 (1777年创作于萨尔茨堡)",
      en: "Classical Era (Salzburg, 1777)",
      de: "Klassik (Salzburg, 1777)",
      ja: "古典派（1777年ザルツブルクにて作曲）",
    },
    difficulty: {
      zh: "职业乐团试奏 / 高级考级必考 (Difficulty: 5/5)",
      en: "Professional Audition Benchmark (Difficulty: 5/5)",
      de: "Probespiel-Standard (Schwierigkeit: 5/5)",
      ja: "プロオーケストラ試演・難関グレード（難易度: 5/5）",
    },
    keySignature: "C Major",
    tempo: "Allegro aperto (Quarter Note = 120-126)",
    timeSignature: "4/4",
    rangeNote: "C4 - F6",
    historicalContext: {
      zh: "1777年莫扎特为萨尔茨堡宫廷双簧管首席朱塞佩·费伦迪斯（Giuseppe Ferlendis）创作。此曲旋律如阳光般清澈明朗，后莫扎特本人将其移调为D大调改编为长笛第二协奏曲（K.314）。它是全世界所有交响乐团考核双簧管声部的绝对必考曲目第一名。",
      en: "Composed in 1777 for Giuseppe Ferlendis, principal oboist of the Salzburg court orchestra. Radiant and crystalline, Mozart later transposed this piece to D major for flute (K.314). It stands universally as the mandatory #1 round-one audition piece for orchestras worldwide.",
      de: "1777 für Giuseppe Ferlendis, Solo-Oboist der Salzburger Hofkapelle, komponiert. Voller Eleganz und Frische, transponierte Mozart das Werk später nach D-Dur für Flöte. Weltweit ist dieses Konzert das Pflichtstück Nr. 1 bei jedem Oboen-Probespiel.",
      ja: "1777年、ザルツブルク宮廷楽団の首席オーボエ奏者ジュゼッペ・フェルレンディスのために作曲。後にフルート協奏曲第2番（ニ長調）へと改編された名作であり、世界中のオーケストラ入団試演で必ず第1次審査に課される金字塔です。",
    },
    auditionSignificance: {
      zh: "首轮拉幕考核核心。乐团评审在首个两小节长音与随后跳音中即可判断演奏者的哨片品质、音色纯净度、音准稳定度（尤其是G5与C6的衔接）以及对古典乐派轻盈呼吸的掌控。",
      en: "Primary blind-screen round filter. Juries judge embouchure flexibility, reed stability, pitch purity (especially the high G5 to C6 transition), and natural Classical buoyancy within the first two measures.",
      de: "Häufigstes Stück hinter dem Vorhang. Die Jury beurteilt in den ersten Takten die Tonkultur, Rohrstabilität, Intonation (besonders G5 zu C6) und das stilistische Gefühl für klassische Leichtigkeit.",
      ja: "カーテン審査（1次試演）の最重要課題。最初の持続音から軽快な跳躍に入る冒頭2小節だけで、リードの仕立て、音程の安定度（特にG5から高音C6の接続）、古典派特有の軽やかな呼吸感が判定されます。",
    },
    pedagogicalFocus: {
      zh: ["高音E6/F6指法与气柱高位支撑", "十六分音符跳音的双吐/轻单吐颗粒感", "分解和弦大跳时的下颌零位放松", "古典华彩乐段（Cadenza）的典雅句法"],
      en: ["High E6/F6 voicing and high diaphragm focus", "Crisp 16th-note light articulation without embouchure biting", "Jaw relaxation during octave and chord leaps", "Stylistic elegance in the Classical cadenza"],
      de: ["Stütze und Voicing für hohe Töne E6/F6", "Leichte, perlende Sechzehntel-Artikulation", "Lockerer Kiefer bei weiten Intervallsprüngen", "Stilbewusste Gestaltung der klassischen Kadenz"],
      ja: ["高音E6/F6の息の支えと喉のヴォイシング", "16分音符スタッカートの粒立ちと軽快なタンギング", "広い跳躍進行における顎の脱力とリラックス", "古典派カデンツァの気品ある歌い回し"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "纯音气流起音与八度长音", en: "Airflow Whispering & Octave Drone", de: "Luftansatz & Oktav-Dauerton", ja: "息の導入とオクターブ持続音" },
        desc: {
          zh: "以 80 BPM 慢速练习呈示部开篇第 1 小节持续 C5。不带重音，凭借纯净气流平稳推入，使用 442Hz 调音台校验音分稳定度在 ±3 cents 以内。",
          en: "Practice the opening sustained C5 at 80 BPM. Enter with pure, seamless air without tongue accent; ensure pitch stability within ±3 cents at 442Hz.",
          de: "Üben Sie das einleitende C5 bei 80 BPM ohne Zungenakzent. Setzen Sie den Ton rein mit der Luft an und halten Sie die Intonation innerhalb von ±3 Cents.",
          ja: "冒頭の持続音C5をメトロノーム80で練習。舌のアタックを極力抑え、純粋な呼気で滑らかに発音し、±3セント以内の音程を維持します。",
        },
        focusNote: "C5",
      },
      {
        step: 2,
        title: { zh: "十六分音符跳跃慢练与分叉F防爆", en: "16th-Note Staccato & Forked-F Accuracy", de: "Sechzehntel-Staccato & Gabel-F", ja: "16分音符の跳躍とフォークFの安定" },
        desc: {
          zh: "将快速音阶与琶音拆解为附点节奏（长-短、短-长）。遇到 D5-F5 快速交替时，严格选用左手 F 键（Left F）以保障右手稳定性与音质厚度。",
          en: "Dotted-rhythm practice (long-short, short-long) on sixteenth runs. Always favor the Left F key over Forked F during D5-F5 transitions to preserve resonance.",
          de: "Punktierte Rhythmen auf den Sechzehntelläufen. Verwenden Sie bei D5-F5-Wechseln konsequent das linke F, um Klangvolumen und Intonation zu sichern.",
          ja: "16分音符パッセージを付点リズム（長-短、短-長）で反復練習。D5-F5の素早い移行では左手Fキーを優先し、右手と音色の安定を図ります。",
        },
        focusNote: "F5",
      },
      {
        step: 3,
        title: { zh: "极高音区 C6-F6 喉腔声学调整", en: "Altissimo C6-F6 Throat Voicing", de: "Hohe Lage C6-F6 Kehlkopf-Voicing", ja: "最高音域C6-F6の喉のヴォイシング" },
        desc: {
          zh: "高音上行时切忌用嘴唇狠咬哨片，而应像发德语'ch'音般略微抬高舌根，将气流速度加倍送入管体，配合第3八度键瞬间点亮。",
          en: "Never bite the reed to ascend to C6/F6. Raise the back of the tongue as if voicing German 'ch', doubling air velocity into the tube with 3rd octave key assist.",
          de: "Keinesfalls das Rohr für C6/F6 beißen. Die Zunge leicht heben (wie deutsches 'ch'), um die Luftgeschwindigkeit mit der 3. Oktavklappe zu verdoppeln.",
          ja: "C6やF6へ跳躍する際、リードを噛み込まず、舌の奥を軽く持ち上げて息の流速を高め、第3オクターブキーを活用して発音させます。",
        },
        focusNote: "C6",
      },
      {
        step: 4,
        title: { zh: "完整乐段原速背谱与考官视线模拟", en: "Full Exposition & Audition Simulation", de: "Gesamtexposition & Probespiel-Test", ja: "原速暗譜と本番シミュレーション" },
        desc: {
          zh: "将节拍器提至 124 BPM，站立吹奏完整呈示部。录下音频回放自查：换气口是否破坏了十六分音符时值？跳音是否始终保持珍珠般温润？",
          en: "Advance metronome to 124 BPM standing up. Record and critically evaluate: does breathing truncate sixteenth-note values? Is staccato consistently pearlescent?",
          de: "Metronom auf 124 BPM steigern. Aufnahme machen: Zerstören Atemzüge das Notenmaß? Bleibt das Staccato stets perlend und kultiviert?",
          ja: "メトロノームを124 BPMに上げて全呈示部を暗譜演奏。録音を聴き返し、ブレスで拍が縮んでいないか、スタッカートが真珠のように均一か検証します。",
        },
        focusNote: "A5",
      },
    ],
    faqs: [
      {
        q: {
          zh: "吹奏莫扎特 K.314 应该选择什么硬度的双簧管哨片？",
          en: "What reed strength and profile is best for Mozart K.314?",
          de: "Welche Rohrstärke eignet sich am besten für Mozart KV 314?",
          ja: "モーツァルトK.314の演奏にはどのようなリードが適していますか？",
        },
        a: {
          zh: "建议使用前端极薄（Tip 约 0.09mm）、脊椎（Spine）支撑扎实的中等软度哨片（Medium-Soft / MS）。太硬的哨片无法保证开篇弱音起音与轻盈跳音；太软则会导致高音 C6 音准塌陷下沉。",
          en: "A medium-soft reed with a delicate tip (approx. 0.09mm) and resilient spine. A reed that is too stiff hampers pianissimo response, while one that is too soft causes high C6 to sag.",
          de: "Ein mittelweiches Rohr mit feiner Spitze (ca. 0.09 mm) und stabiler Wirbelsäule. Zu harte Rohre erschweren die Pianissimo-Ansprache; zu weiche Rohre lassen C6 absacken.",
          ja: "先端部が極めて薄く（約0.09mm）、背骨（スパイン）の支えがしっかりしたミディアム・ソフト（MS）が最適です。硬すぎると弱音のアタックが粗くなり、柔らかすぎると高音C6のピッチがぶら下がります。",
        },
      },
      {
        q: {
          zh: "乐团考试时，第一乐章华彩乐段（Cadenza）需要吹多长？",
          en: "How long should the first-movement Cadenza be in auditions?",
          de: "Wie lang sollte die Kadenz im Probespiel sein?",
          ja: "試演において第1楽章のカデンツァはどのくらいの長さが好まれますか？",
        },
        a: {
          zh: "乐团考官关注的是风格纯正。建议时长控制在 45-60 秒以内，选用经典古典风格（如 Heinz Holliger 或 Maurice Bourgue 整理的经典华彩），切忌过于冗长炫技破坏古典对称美。",
          en: "Keep it under 45-60 seconds. Choose refined Classical cadenzas (such as Heinz Holliger or Maurice Bourgue). Avoid overlong, romanticized virtuosity.",
          de: "Maximal 45–60 Sekunden. Klassisch-stilvolle Kadenzen (wie von Heinz Holliger oder Maurice Bourgue) werden bevorzugt; übermäßige romantisierende Virtuosität vermeiden.",
          ja: "45〜60秒程度に収めるのが鉄則です。ハインツ・ホリガーやモーリス・ブルグ編纂の古典様式に忠実なカデンツァを選び、過度なロマン派的技巧のひけらかしは避けます。",
        },
      },
    ],
    relatedSlugs: ["richard-strauss-oboe-concerto", "cimarosa-oboe-concerto-c-minor", "ferling-48-studies-op31-no1"],
    pdfDownloadName: "Mozart-Oboe-Concerto-K314-Solo-Part.pdf",
  },

  // 2. 理查·施特劳斯 D大调双簧管协奏曲
  {
    id: "oboe-score-2",
    slug: "richard-strauss-oboe-concerto",
    title: {
      zh: "理查·施特劳斯 D大调双簧管协奏曲 第一乐章 (中庸的快板)",
      en: "Richard Strauss Oboe Concerto in D Major - Allegro moderato",
      de: "Richard Strauss Oboenkonzert D-Dur - Allegro moderato",
      ja: "R.シュトラウス オーボエ協奏曲 ニ長調 第1楽章",
    },
    seoTitle: {
      zh: "理查施特劳斯双簧管协奏曲分谱·56小节长句呼吸与乐团高难独奏 | OboLib",
      en: "Strauss Oboe Concerto Sheet Music: 56-Measure Breathing Guide | OboLib",
      de: "R. Strauss Oboenkonzert D-Dur Noten & Ausdauer-Leitfaden | OboLib",
      ja: "R.シュトラウス オーボエ協奏曲 楽譜・56小節の息使いと独奏解説 | OboLib",
    },
    metaDesc: {
      zh: "免费下载理查·施特劳斯D大调双簧管协奏曲高清独奏分谱。详析开篇56小节无休止长句微型循环呼吸、高音区歌唱性与晚期浪漫派音准维稳秘籍。",
      en: "Download Richard Strauss Oboe Concerto in D Major solo sheet music. Master the opening 56-measure phrase, micro-circular breathing, and late-Romantic cantabile.",
      de: "Noten für das Richard Strauss Oboenkonzert D-Dur. Anleitung für die legendäre 56-taktige Eröffnungsphrase, Zirkularatmung und spätromantische Klanggestaltung.",
      ja: "R.シュトラウスのオーボエ協奏曲ニ長調独奏譜。冒頭56小節に及ぶ息の長い旋律、循環呼吸の要点、後期ロマン派特有の歌心と音程維持を詳細解説。",
    },
    keywords: {
      zh: "施特劳斯双簧管协奏曲,理查施特劳斯双簧管乐谱,双簧管循环呼吸,双簧管交响考曲,Strauss Oboe Concerto",
      en: "Strauss Oboe Concerto, Richard Strauss oboe score, circular breathing oboe, oboe audition solo, Strauss D major",
      de: "Strauss Oboenkonzert, R. Strauss Oboe Noten, Zirkularatmung Oboe, Probespiel Solo Oboe",
      ja: "シュトラウス オーボエ協奏曲, リヒャルト・シュトラウス 楽譜, 循環呼吸 オーボエ, 難関ソロ",
    },
    composer: "Richard Strauss (1864-1949)",
    composerEra: {
      zh: "晚期浪漫主义 / 晚期室内化时期 (1945年创作于加尔米施)",
      en: "Late Romantic / Late Pastoral Era (Garmisch, 1945)",
      de: "Spätromantik (Garmisch, 1945)",
      ja: "後期ロマン派（1945年ガルミッシュにて作曲）",
    },
    difficulty: {
      zh: "世界大师级挑战 / 顶级交响独奏 (Difficulty: 5/5)",
      en: "Masterwork Virtuosity Benchmark (Difficulty: 5/5)",
      de: "Höchste Virtuosität (Schwierigkeit: 5/5)",
      ja: "世界屈指の超難曲・最高峰ソロ（難易度: 5/5）",
    },
    keySignature: "D Major",
    tempo: "Allegro moderato (Quarter Note = 88-96)",
    timeSignature: "2/4",
    rangeNote: "D4 - G6",
    historicalContext: {
      zh: "二战结束前夕，美军占领德国加尔米施。驻扎美军中恰好有一位匹兹堡交响乐团的双簧管手约翰·德·兰西（John de Lancie）。他慕名前往拜访81岁高龄的施特劳斯，当面恳请大师创作一首双簧管协奏曲。施特劳斯由此提笔写就了这部管乐文学中无与伦比的绝美天鹅之歌。",
      en: "In 1945, American soldier and Pittsburgh Symphony oboist John de Lancie visited the 81-year-old Strauss at his home in Garmisch. De Lancie asked if he had ever thought of writing an oboe concerto. Though Strauss initially said no, he began composing this radiant swan song shortly thereafter.",
      de: "1945 besuchte der amerikanische Soldat und Oboist John de Lancie den 81-jährigen Strauss in Garmisch und regte ein Oboenkonzert an. Obwohl Strauss zunächst verneinte, schuf er kurz darauf dieses unvergleichliche Meisterwerk voll altersweiser Heiterkeit.",
      ja: "第二次世界大戦直後、米軍兵士として進駐していたピッツバーグ交響楽団のオーボエ奏者ジョン・デ・ランシーが、ガルミッシュのシュトラウス邸を訪問。「オーボエ協奏曲を書く気はありませんか」と尋ねたことを機に、81歳の巨匠が書き上げた不滅の白鳥の歌です。",
    },
    auditionSignificance: {
      zh: "考量双簧管演奏家极限肺活量、体能耐力与高音柔韧度的最高殿堂试金石。开篇连续 56 小节十六分音符几乎没有休止符，是检验排浊呼吸与循环呼吸实战能力的终极考题。",
      en: "The supreme test of stamina, breath economy, and altissimo sweetness. The opening 56 continuous measures without rests separate true masters from merely competent orchestral players.",
      de: "Der ultimative Belastungstest für Ausdauer, Ökonomie und Lyrik. 56 fortlaufende Takte ohne Pause trennen im Probespiel die Spitzenkönner vom restlichen Feld.",
      ja: "持久力、呼吸の配分、高音域の甘美さを試す最高難度の試金石。冒頭56小節間休符がほぼ存在せず、呼気の排気技術や循環呼吸の有無が問われる究極の難関です。",
    },
    pedagogicalFocus: {
      zh: ["开篇 56 小节微型排气与偷气口布局", "长线条连音中持续恒定的气压供给", "高音 F#6/G6 在弱奏中的纯正音色", "晚期德奥室内化音乐的歌唱性与对话感"],
      en: ["Strategic air expulsion points across the opening 56 bars", "Unwavering air pressure throughout long lyrical arches", "Sweet pianissimo intonation on high F#6 and G6", "Chamber music conversational intimacy"],
      de: ["Gezieltes Ausatmen verbrauchter Luft in der Eröffnung", "Gleichbleibender Blasdruck über weit gespannte Bögen", "Süße und weiche Intonation im Pianissimo auf F#6/G6", "Kammermusikalische Transparenz im Spätstil"],
      ja: ["冒頭56小節における残気排出と盗みブレスの配置", "長大なレガートにわたる一定の呼気圧維持", "弱音における高音F#6およびG6の澄んだ音色", "晩期シュトラウスの室内楽的な親密さと対話"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "废气排空（Exhale-First）训练", en: "Exhale-First Breath Cycle Training", de: "Ausatmen-Zuerst Atemschulung", ja: "残気排出先行型ブレス訓練" },
        desc: {
          zh: "双簧管最大的问题是'吸不进新气，是因为肺里旧气没吐出'。在第 8、16、24 小节的十六分音符间隙，先迅疾吐出旧气，再借由腹肌回弹吸入微量空气。",
          en: "The oboist's dilemma is stale air retention. At bars 8, 16, and 24, practice rapid air dumping followed by a minimal reflexive top-up sip.",
          de: "Das Oboen-Dilemma ist die gestaute Altwasserluft. In Takt 8, 16 und 24 gezielt alte Luft ausblasen und nur einen kleinen Reflex-Atemzug nehmen.",
          ja: "オーボエ奏者の最大の課題は、肺に残った古い空気の鬱滞です。第8、16、24小節の隙間で、まず素早く呼気を吐き出し、腹筋の戻りで最小限の空気を吸い込みます。",
        },
        focusNote: "D5",
      },
      {
        step: 2,
        title: { zh: "微型循环呼吸无痕过渡", en: "Micro-Circular Breathing Integration", de: "Nahtlose Mikro-Zirkularatmung", ja: "微小循環呼吸のスムーズな導入" },
        desc: {
          zh: "在持续的十六分音符回音走句中（如由高至低的下行音阶），利用口腔颊肌存气推压哨片，鼻腔吸入空气，保持音准与音量完全不出现突变颠簸。",
          en: "During descending scalar runs, use cheek air to keep the reed vibrating while sniffing in air through the nose, ensuring zero fluctuation in dynamics or pitch.",
          de: "Nutzen Sie Wangenluft bei abwärts gerichteten Läufen für die Nasenatmung, ohne dynamische Brüche oder Tonhöhenwackler zu erzeugen.",
          ja: "下行音階の走句を利用し、口腔内の空気でリードを鳴らしながら鼻から吸気。音量や音程の揺れをゼロに抑えて循環呼吸を繋ぎます。",
        },
        focusNote: "A5",
      },
      {
        step: 3,
        title: { zh: "高音 F#6/G6 声带与下颌放松", en: "High F#6/G6 Jaw & Glottis Relaxation", de: "Kiefer- & Kehlkopfentspannung auf F#6/G6", ja: "最高音F#6/G6での下顎と声帯の脱力" },
        desc: {
          zh: "吹到乐段最高音时，唇肌向中间聚拢（像发'O'型音），喉头彻底打开。切勿过度下压下颌，避免哨片被压扁导致高音尖锐刺耳。",
          en: "At the phrase climax, cushion the reed with an 'O'-shaped embouchure while opening the glottis wide. Never clamp the jaw shut, which chokes the pitch.",
          de: "Beim Höchstton das Rohr mit einer runden 'O'-Lippenstellung umschließen und die Kehle weit öffnen. Keinesfalls den Kiefer zusammenbeißen.",
          ja: "旋律の頂点に達する際、「O」の字を作るように唇を丸く寄せ、喉を広く開放。下顎を締め付けるとリードが潰れて音が詰まるため厳禁です。",
        },
        focusNote: "G6",
      },
      {
        step: 4,
        title: { zh: "慢速 72 BPM 渐进至 92 BPM 默念歌词", en: "Slow Metronome 72 to 92 BPM Cantabile", de: "Metronom-Steigerung 72 bis 92 BPM", ja: "メトロノーム72から92への段階的練習" },
        desc: {
          zh: "先以 72 BPM 吹奏，确保每一个音符的音色都如丝绒般圆润连贯。在心中哼唱晚期德奥浪漫交响的重奏织体，逐步过渡到原速 92 BPM。",
          en: "Begin at 72 BPM to ensure every note has velvety connectedness. Hear the inner orchestral chamber counterpoint, progressing smoothly to target 92 BPM.",
          de: "Beginnen Sie bei 72 BPM, um samtige Klangkontinuität zu sichern. Das innere Orchester mitsingen, bevor Sie auf Zieltempo 92 BPM beschleunigen.",
          ja: "最初は72 BPMのゆったりしたテンポで、全音がビロードのようになめらかに繋がることを確認。頭の中でオーケストラ伴奏を鳴らしながら、本番テンポ92 BPMへ仕上げます。",
        },
        focusNote: "E5",
      },
    ],
    faqs: [
      {
        q: {
          zh: "如果我还没学会循环呼吸，可以吹施特劳斯协奏曲吗？",
          en: "Can I perform the Strauss Concerto without circular breathing?",
          de: "Kann man das Strauss-Konzert ohne Zirkularatmung spielen?",
          ja: "循環呼吸をマスターしていなくてもシュトラウスを演奏できますか？",
        },
        a: {
          zh: "完全可以。世界著名双簧管大师如阿布莱希特·迈耶（Albrecht Mayer）与弗朗索瓦·勒勒（François Leleux）在部分演出中也采用极其隐蔽的'闪电偷气法'。关键在于在第8、16小节提前将废气彻底吐尽，利用半拍休止瞬间吸气。",
          en: "Yes, absolutely. Legendary oboists like Albrecht Mayer and François Leleux frequently use stealthy 'catch-breaths'. The key is complete, deliberate air exhalation prior to snatching breath.",
          de: "Ja, absolut. Spitzenoboisten wie Albrecht Mayer oder François Leleux nutzen oft geschickt getarnte Schnappatmung. Entscheidend ist das vorherige völlige Ausatmen.",
          ja: "十分に可能です。アルブレヒト・マイヤーやフランソワ・ルルーといった世界的名手も、卓越した「盗みブレス（スナッチブレス）」で演奏しています。要は吸う前に肺の残気を完全に吐き切ることです。",
        },
      },
      {
        q: {
          zh: "演奏施特劳斯协奏曲，对双簧管哨片开度（Tip Opening）有什么要求？",
          en: "What reed opening is required for the Strauss Concerto?",
          de: "Welche Rohröffnung benötigt man für das Strauss-Konzert?",
          ja: "シュトラウスの協奏曲を吹く際、リードの開き（オープニング）はどうあるべきですか？",
        },
        a: {
          zh: "需要开度适中偏小（约 0.65mm - 0.70mm）、阻力适中的哨片。过大的开度会消耗大量肺气，在长达十多分钟的演奏中迅速导致下颌脱力麻木；过小的开度则会在强奏时音色发瘪。",
          en: "A moderate-to-close tip opening (approx. 0.65mm - 0.70mm). A wide opening drains excessive breath, leading to early embouchure collapse; too closed causes weak tone.",
          de: "Eine mittel-enge Öffnung (ca. 0.65–0.70 mm). Zu weite Rohre rauben zu viel Luft und ermüden die Lippen; zu enge Rohre klingen dünn im Forte.",
          ja: "やや狭め〜標準（約0.65mm〜0.70mm）の開きで、適度な抵抗感を持つリードが理想です。開きが広すぎると息の消費が激しく唇がすぐに疲弊し、狭すぎるとフォルテで音が潰れます。",
        },
      },
    ],
    relatedSlugs: ["mozart-oboe-concerto-k314", "marcello-oboe-concerto-d-minor", "ferling-48-studies-op31-no1"],
    pdfDownloadName: "Strauss-Oboe-Concerto-Solo-Part.pdf",
  },

  // 3. 奇马罗萨 c小调双簧管协奏曲
  {
    id: "oboe-score-3",
    slug: "cimarosa-oboe-concerto-c-minor",
    title: {
      zh: "奇马罗萨 c小调双簧管协奏曲 (引子与快板)",
      en: "Cimarosa Oboe Concerto in C Minor - Introduzione & Allegro",
      de: "Cimarosa Oboenkonzert c-Moll - Introduzione & Allegro",
      ja: "チマローザ オーボエ協奏曲 ハ短調（導入部とアレグロ）",
    },
    seoTitle: {
      zh: "奇马罗萨c小调双簧管协奏曲乐谱·巴洛克优美引子与考级必弹 | OboLib",
      en: "Cimarosa Oboe Concerto in C Minor Sheet Music & Guide | OboLib",
      de: "Cimarosa Oboenkonzert c-Moll Noten & Übeanleitung | OboLib",
      ja: "チマローザ オーボエ協奏曲 ハ短調 楽譜＆グレード試験解説 | OboLib",
    },
    metaDesc: {
      zh: "免费下载奇马罗萨c小调双簧管协奏曲第一、二乐章独奏分谱。解析阿瑟·本杰明改编版巴洛克优美旋律、低音C4醇厚起音与快速轻巧跳音技巧。",
      en: "Download Cimarosa Oboe Concerto in C Minor solo sheet music PDF. Explore Arthur Benjamin's transcription, low C4 control, and expressive Baroque ornamentation.",
      de: "Kostenlose Noten für Cimarosa Oboenkonzert c-Moll (Bearbeitung: Arthur Benjamin). Mit Anleitung für weichen Tiefen-Ansatz und barocke Verzierungen.",
      ja: "アーサー・ベンジャミン編によるチマローザのオーボエ協奏曲ハ短調独奏譜。哀愁漂う導入部、低音C4の発音制御、軽快なアレグロの装飾音を徹底解説。",
    },
    keywords: {
      zh: "奇马罗萨双簧管协奏曲,c小调双簧管乐谱,双簧管中级高级考级,奇马罗萨五线谱,Cimarosa Oboe Concerto",
      en: "Cimarosa Oboe Concerto, Cimarosa oboe sheet music, Arthur Benjamin oboe, C minor oboe concerto, ABRSM oboe grade 8",
      de: "Cimarosa Oboenkonzert c-Moll, Cimarosa Noten Oboe, Arthur Benjamin Oboe",
      ja: "チマローザ オーボエ協奏曲, ハ短調 楽譜, アーサー・ベンジャミン, オーボエ グレード試験",
    },
    composer: "Domenico Cimarosa / Arr. Arthur Benjamin (1749-1801)",
    composerEra: {
      zh: "那不勒斯乐派 / 20世纪经典管乐改编",
      en: "Neapolitan Classical / 20th Century Woodwind Transcription",
      de: "Neapolitanische Schule / Klassische Bearbeitung 20. Jh.",
      ja: "ナポリ楽派（20世紀アーサー・ベンジャミン編曲）",
    },
    difficulty: {
      zh: "中高级考级必备 / 音乐学院附中考题 (Difficulty: 4/5)",
      en: "Advanced Conservatory Audition Level (Difficulty: 4/5)",
      de: "Mittelstufe bis Oberstufe (Schwierigkeit: 4/5)",
      ja: "中上級グレード・音楽院付属校受験必須（難易度: 4/5）",
    },
    keySignature: "C Minor",
    tempo: "Larghetto (3/4) & Allegro (2/4)",
    timeSignature: "3/4 & 2/4",
    rangeNote: "C4 - Eb6",
    historicalContext: {
      zh: "原为意大利古典主义作曲家多梅尼科·奇马罗萨的键盘奏鸣曲片段。20世纪初，澳大利亚作曲家阿瑟·本杰明（Arthur Benjamin）发掘了这些散落的绝美旋律，将其巧妙编配为一部四乐章双簧管协奏曲，迅速风靡全球，成为全球各大考级系统（如 ABRSM 8 级与演奏级）的核心保留曲目。",
      en: "Arranged in 1942 by Australian composer Arthur Benjamin from Domenico Cimarosa's keyboard sonatas. Benjamin's orchestration turned forgotten charming Italian melodies into an indispensable cornerstone of the international oboe repertoire and conservatory syllabi (e.g., ABRSM Grade 8 & DipABRSM).",
      de: "1942 von Arthur Benjamin aus Klaviersonaten Domenico Cimarosas zusammengestellt. Das Werk wurde rasch zu einem der populärsten Werke des Oboenrepertoires und ist fester Bestandteil internationaler Prüfungslehrpläne.",
      ja: "イタリアの作曲家チマローザの鍵盤ソナタを、1942年にアーサー・ベンジャミンがオーボエと弦楽のために編纂・協奏曲化した名作。優美なイタリア情緒に溢れ、英ABRSMグレード8や音大受験の定番課題曲として親しまれています。",
    },
    auditionSignificance: {
      zh: "考察演奏者音色调色盘与音乐修养的试金石。慢板（Introduzione）要求双簧管展现出威尼斯式如歌的忧伤与揉弦变化；快板（Allegro）则考察舌尖触碰哨片的微动能，不能因速度加快而出现生硬的敲击杂音。",
      en: "Demonstrates lyrical color palette and emotional maturity. The Introduzione demands Venetian cantilena and nuanced vibrato, while the Allegro tests clean, delicate tonguing without mechanical clicks.",
      de: "Prüft Klangfarbenreichtum und Eleganz. Das einleitende Larghetto erfordert italienische Gesangskunst und feines Vibrato; das Allegro verlangt präzise, elastische Zungenarbeit ohne Druck.",
      ja: "音色のパレットと歌の表現力を測る好例。導入部では哀愁ある旋律とヴィブラートのニュアンス、アレグロでは舌の余分な力を抜いた軽快で粒の揃ったタンギングが審査されます。",
    },
    pedagogicalFocus: {
      zh: ["低音 C4 在弱拍上的柔和起音", "小调巴洛克倚音与回旋音的时值精准度", "快板十六分音符跳音中右手的平稳", "乐句高潮点的渐强不改变音高"],
      en: ["Gentle low C4 entry on off-beats", "Precision of Classical appoggiaturas and turns in C minor", "Right-hand stability during fast sixteenth staccato", "Dynamic crescendos without pitch sharping"],
      de: ["Sanfter Tiefen-Ansatz auf C4 auf unbetonten Zählzeiten", "Präzision klassischer Vorschläge in c-Moll", "Ruhige rechte Hand bei schnellen Sechzehnteln", "Crescendo ohne unerwünschtes Höherwerden"],
      ja: ["弱拍における低音C4の柔らかい発音", "ハ短調の倚音や前打音の正確なリズム処理", "速いスタッカート走句における右手の安定", "クレッシェンド時におけるピッチの上ずり防止"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "低音 C4 与 Eb4 柔和长音练习", en: "Low C4 & Eb4 Warm Cantabile", de: "Tiefes C4 & Eb4 Klangschulung", ja: "低音C4とEb4の柔らかい発音練習" },
        desc: {
          zh: "双手小指完全放松，下颌微降。以呼出暖气的状态练习低音 C4，确保在钢琴弱音（p）下哨片立即振动起音，绝不能出现'爆破音'。",
          en: "Drop jaw slightly, relax both pinkies. Blow warm breath into low C4, ensuring immediate vibration at pianissimo without popping bursts.",
          de: "Beide kleinen Finger entspannen. Warmen Atem in das tiefe C4 hauchen; die Ansprache im Pianissimo muss sofort und ohne Knall erfolgen.",
          ja: "両手の小指を脱力させ、下顎を少し下げます。暖かい息を送り込み、低音C4が弱音で破裂音にならず即座に鳴るよう整えます。",
        },
        focusNote: "C4",
      },
      {
        step: 2,
        title: { zh: "巴洛克倚音与回音严谨节奏化", en: "Rhythmic Precision of Appoggiaturas", de: "Rhythmische Schärfe der Verzierungen", ja: "前打音と装飾音のリズムの厳密化" },
        desc: {
          zh: "不要把装饰音吹成随意的急促抢音。在 3/4 拍中，将短倚音赋予精准的十六分音符骨架，让每一个倚音都充满歌唱的情感张力。",
          en: "Do not rush ornaments. Anchor short appoggiaturas within a precise sixteenth-note subdivision, giving each lean musical expressive weight.",
          de: "Verzierungen nicht überhasten. Binden Sie Vorschläge exakt in das Sechzehntel-Raster ein, um gesangliche Spannung zu erzeugen.",
          ja: "装飾音を単に急いで吹くのではなく、16分音符の確固たる枠組みの中に収め、旋律の歌心と緊張感を高めます。",
        },
        focusNote: "Eb5",
      },
      {
        step: 3,
        title: { zh: "快板乐章轻盈弹跳单吐", en: "Allegro Buoyant Single-Tonguing", de: "Allegro Elastischer Zungenstoß", ja: "アレグロの軽やかなシングル・タンギング" },
        desc: {
          zh: "快板乐章中，舌尖仅轻触哨片尖端下唇内侧 1 毫米处，以'提'（Tee）的发音音节保持气柱在背后源源不断，让跳音如乒乓球般弹性起落。",
          en: "Touch the reed tip with only 1mm of the tongue, vocalizing 'Tee'. Keep continuous air pressure underneath to allow notes to bounce like table tennis balls.",
          de: "Mit der Zungenspitze nur 1 mm der Rohröffnung berühren ('Tee'-Silbe). Der Luftstrom darunter bleibt kontinuierlich aktiv für perlende Leichtigkeit.",
          ja: "舌先がリード先端の1mmに軽く触れる程度に保ち、「ティ」の発音で弾ませます。息の支えを背後に保ち、ピンポン球のような弾力感を出します。",
        },
        focusNote: "G5",
      },
      {
        step: 4,
        title: { zh: "乐章间情绪无缝转换", en: "Seamless Movement Transition", de: "Nahtloser Stimmungswechsel", ja: "楽章間のムードの鮮やかな切り替え" },
        desc: {
          zh: "由第一乐章悲剧性的 Larghetto 瞬间切换为狂欢式的 Allegro。注意在调音台伴奏下保持降号音程（如 Ab4, Eb5）的和声纯正度。",
          en: "Transition instantly from the tragic Larghetto to the festive Allegro. Maintain pitch integrity on minor intervals (Ab4, Eb5) using reference drone.",
          de: "Wechseln Sie schlagartig von der Melancholie des Larghetto zum festlichen Allegro. Kontrollieren Sie As4 und Es5 am Stimmgerät.",
          ja: "哀愁を帯びた第1楽章から祝祭的なアレグロへ一瞬で空気を切り替えます。持続音ドローンを用いてAb4やEb5の音程を正確に保ちます。",
        },
        focusNote: "C5",
      },
    ],
    faqs: [
      {
        q: {
          zh: "为什么奇马罗萨协奏曲的第一乐章低音很容易发硬爆音？",
          en: "Why is the low register in Cimarosa's first movement prone to popping?",
          de: "Warum neigt die Tiefe im ersten Satz von Cimarosa zum Überblasen?",
          ja: "なぜチマローザの第1楽章の低音は音が固く割れやすいのですか？",
        },
        a: {
          zh: "双簧管在 C4 至 Eb4 音区管体气柱最长，吹奏者往往下意识咬紧下唇导致哨片闭合。应微微放松嘴唇压力，略微前移下颌，将气流速度放慢但保持口咽腔宽阔，音色即会立刻转为温暖醇厚。",
          en: "The air column is longest at C4-Eb4. Players instinctively bite, choking the reed. Relax the lip, drop the jaw slightly, and supply slow, warm air from a deep oral cavity.",
          de: "Die Luftsäule ist bei C4–Eb4 am längsten. Instinktives Beißen würgt das Rohr ab. Lippen lockern, Unterkiefer entspannen und warmen, vollen Atem fließen lassen.",
          ja: "C4〜Eb4は管体が最も長くなるため、無意識に唇を締め付けてリードを塞いでしまいがちです。下顎を脱力させ、口腔内を広げて暖かい息を穏やかに注ぎ込むことで、まろやかな低音が得られます。",
        },
      },
      {
        q: {
          zh: "这首曲子适合考级时作为选考曲目吗？",
          en: "Is this piece suitable for graded examinations and competitions?",
          de: "Eignet sich dieses Konzert für Musikstufenprüfungen?",
          ja: "この曲はコンクールやグレード試験の自由曲として適していますか？",
        },
        a: {
          zh: "非常适合。它不仅被英国皇家音乐学院联合委员会（ABRSM）列为高级必考曲目，更是各大音乐学院附中入学面试的最受考官青睐曲目，能全面展现古典优美线条与灵巧技巧。",
          en: "Extremely suitable. Frequently featured on ABRSM Grade 8 and conservatory entrance lists, showcasing both melodic vocal beauty and technical lightness.",
          de: "Hervorragend. Ein ständiger Gast in den Lehrplänen von ABRSM Grad 8 und Aufnahmeprüfungen, da es Gesanglichkeit und Virtuosität perfekt vereint.",
          ja: "極めて適しています。英ABRSMグレード8や音大附属高校の入試課題曲として広く採用されており、豊かな歌心と軽快な運動性の両方をアピールできます。",
        },
      },
    ],
    relatedSlugs: ["marcello-oboe-concerto-d-minor", "handel-oboe-concerto-hwv287", "mozart-oboe-concerto-k314"],
    pdfDownloadName: "Cimarosa-Oboe-Concerto-C-Minor-Solo.pdf",
  },

  // 4. 马尔切洛 d小调双簧管协奏曲
  {
    id: "oboe-score-4",
    slug: "marcello-oboe-concerto-d-minor",
    title: {
      zh: "马尔切洛 d小调双簧管协奏曲 第二乐章 (柔板)",
      en: "Marcello Oboe Concerto in D Minor - Adagio",
      de: "Marcello Oboenkonzert d-Moll - Adagio",
      ja: "マルチェッロ オーボエ協奏曲 ニ短調 第2楽章（アダージョ）",
    },
    seoTitle: {
      zh: "马尔切洛双簧管协奏曲柔板乐谱·巴赫改编版华丽装饰音解析 | OboLib",
      en: "Marcello Oboe Concerto Adagio Sheet Music: Bach Ornaments | OboLib",
      de: "Marcello Oboenkonzert d-Moll Adagio Noten & Bach-Verzierungen | OboLib",
      ja: "マルチェッロ オーボエ協奏曲 アダージョ 楽譜・バッハ装飾音完全攻略 | OboLib",
    },
    metaDesc: {
      zh: "免费下载马尔切洛d小调双簧管协奏曲柔板（Adagio）高清分谱。含J.S.巴赫BWV 974原版装饰音对照、极弱音歌唱性揉弦与呼吸控制指南。",
      en: "Download Marcello Oboe Concerto in D Minor Adagio solo score. Features J.S. Bach's BWV 974 ornamentation, subtle vibrato, and cantabile phrasing.",
      de: "Kostenlose Noten für das berühmte Adagio aus Marcellos Oboenkonzert d-Moll. Mit J.S. Bachs Verzierungen (BWV 974), Vibrato-Schulung und Legato-Führung.",
      ja: "名曲マルチェッロのオーボエ協奏曲ニ短調第2楽章（アダージョ）独奏譜。J.S.バッハによる装飾音（BWV 974）の対比、弱音でのヴィブラートと呼吸法を解説。",
    },
    keywords: {
      zh: "马尔切洛双簧管协奏曲,d小调双簧管柔板,巴赫BWV974双簧管,双簧管经典慢板,Marcello Oboe Concerto Adagio",
      en: "Marcello Oboe Concerto, Marcello Adagio oboe, Bach BWV 974 oboe, Baroque oboe ornaments, Marcello D minor",
      de: "Marcello Oboenkonzert Adagio, Marcello d-Moll Oboe, Bach BWV 974 Oboe Noten",
      ja: "マルチェッロ オーボエ協奏曲, アダージョ 楽譜, バッハ BWV 974, バロック オーボエ 装飾音",
    },
    composer: "Alessandro Marcello (1673-1747)",
    composerEra: {
      zh: "威尼斯巴洛克盛期 (约1717年创作于威尼斯)",
      en: "High Venetian Baroque (Venice, c.1717)",
      de: "Venezianischer Hochbarock (Venedig, ca. 1717)",
      ja: "盛期ヴェネツィア・バロック（1717年頃ヴェネツィアにて作曲）",
    },
    difficulty: {
      zh: "音乐表现力天花板 / 中高级必修 (Difficulty: 4/5)",
      en: "Expressive Masterwork / Intermediate-Advanced (Difficulty: 4/5)",
      de: "Ausdrucks-Gipfelwerk (Schwierigkeit: 4/5)",
      ja: "表現力の極致・中上級必修曲（難易度: 4/5）",
    },
    keySignature: "D Minor",
    tempo: "Adagio (Eighth Note = 56-64)",
    timeSignature: "3/4",
    rangeNote: "D4 - D6",
    historicalContext: {
      zh: "威尼斯贵族作曲家亚历山德罗·马尔切洛的传世杰作。约翰·塞巴斯蒂安·巴赫对这个如泣如诉的柔板乐章深深着迷，亲手将其改编为大键琴独奏独奏曲（BWV 974），并写下了登峰造极的巴洛克即兴花腔装饰音，成为双簧管演奏家代代相传的宝贵文献。",
      en: "Composed by Venetian nobleman Alessandro Marcello. J.S. Bach was so deeply captivated by this poignant Adagio that he transcribed it for solo harpsichord (BWV 974), adding sublime, florid ornamentation that remains the benchmark for modern concert oboists.",
      de: "Vom venezianischen Adligen Alessandro Marcello komponiert. Johann Sebastian Bach war von diesem ergreifenden Adagio so verzaubert, dass er es für Cembalo bearbeitete (BWV 974) und mit genialen Verzierungen bereicherte.",
      ja: "ヴェネツィアの貴族作曲家A.マルチェッロの最高傑作。J.S.バッハがこの哀愁に満ちたアダージョに深く魅了され、チェンバロ独奏用（BWV 974）に自ら編曲。その際に書き残した華麗な装飾音が、現代のオーボエ奏者の規範となっています。",
    },
    auditionSignificance: {
      zh: "检验双簧管音色纯净度与'器乐人声化'（Cantabile）的至高标准。评审倾听的是在严整规矩的弦乐拨奏背景下，独奏音符是否能像意大利歌剧女高音般自由歌唱而绝不拖沓变调。",
      en: "The ultimate test of cantabile line and singing tone. Audition panels listen for Italian operatic bel canto freedom over strict string accompaniment without sagging pitch.",
      de: "Der Maßstab für Belcanto-Tonkultur auf der Oboe. Gefragt ist die Kunst, über pulsierendem Streichersatz frei wie eine italienische Opernstimme zu phrasieren.",
      ja: "器楽による「ベルカント唱法（歌うこと）」の最高峰。厳格な弦のピチカートの上で、イタリア・オペラのプリマドンナのように自由かつ品格高く歌い上げられるかが評価されます。",
    },
    pedagogicalFocus: {
      zh: ["巴赫手稿装饰音（Trill、Mordent）在 3/4 拍中的从容舒展", "微弱长音（p 到 pp）中音高的纯正维稳（不掉音分）", "喉腔共鸣与下腹部微型揉弦（Vibrato）的有机融合", "跨八度大跳时的连贯无痕连音"],
      en: ["Bach's BWV 974 ornamentation execution within slow 3/4 pulse", "Maintaining exact pitch during subtle decrescendos (p to pp)", "Integrating gentle diaphragmatic vibrato into tone core", "Seamless legato across wide interval jumps"],
      de: ["Ausführung der Bach'schen Verzierungen im ruhigen 3/4-Puls", "Konstante Tonhöhe im feinsten Decrescendo (p bis pp)", "Harmonisches Vibrato aus der Tiefe der Stütze", "Fließendes Legato über weite Intervallsprünge"],
      ja: ["バッハのBWV 974に基づく装飾音のゆったりとした展開", "弱音（p〜pp）へのディミヌエンドにおける音程維持", "喉の開放とお腹の支えによる自然で温かなヴィブラート", "跳躍音程における滑らかなレガートの保持"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "原谱骨架音直吹（无装饰音）", en: "Naked Melody Skeleton (No Ornaments)", de: "Skelett-Melodie ohne Verzierungen", ja: "装飾音なしの骨格旋律練習" },
        desc: {
          zh: "暂时去除所有颤音与回音，只吹奏纯净的长音骨架。开启 442Hz 调音机伴奏，体验小调和弦每一拍的声学张力与呼吸自然起伏。",
          en: "Strip away all trills and turns. Play only the fundamental skeletal notes over a 442Hz drone to cement harmonic intonation and natural breathing contours.",
          de: "Lassen Sie zunächst alle Verzierungen weg. Spielen Sie nur die Kerntöne mit einer 442Hz-Drone, um die harmonische Spannung zu erfassen.",
          ja: "すべての装飾音を一度外し、純粋な長音の骨格だけで演奏。442Hzのドローンに合わせて短調和音の緊張感を身体に染み込ませます。",
        },
        focusNote: "D5",
      },
      {
        step: 2,
        title: { zh: "巴赫花腔装饰音的慢速节拍化", en: "Bach Ornamentation Slow Metric Placement", de: "Bachs Fiorituren metrisch präzisieren", ja: "バッハの装飾音の正確なリズム配置" },
        desc: {
          zh: "将三连音、五连音、快速三十二分音符倚音慢速拆解。让每个微型音符都落在清晰的八分音符微细分拍上，防止手指凌乱导致节拍塌陷。",
          en: "Subdivide triplets, quintuplets, and 32nd-note figures slowly. Anchor every ornament to clear eighth-note pulses so fingers never panic.",
          de: "Triolen und Zweiunddreißigstel langsam zerlegen. Verankern Sie jede Note an einem klaren Achtel-Puls, um Hektik zu vermeiden.",
          ja: "3連符や5連符、32分音符の装飾句を8分音符のサブディビジョンに合わせてゆっくり練習。指がもつれて拍が崩れるのを防ぎます。",
        },
        focusNote: "A5",
      },
      {
        step: 3,
        title: { zh: "5.2Hz 柔和自然揉弦的融入", en: "Natural 5.2Hz Diaphragmatic Vibrato", de: "Einfügen des natürlichen 5,2-Hz-Vibratos", ja: "自然な5.2Hzヴィブラートの付加" },
        desc: {
          zh: "避免机械抖动嘴唇造成的'羊叫式'颤音。用腹部气柱以每秒 5 次左右的舒缓波纹推动气流，先直音后渐入揉弦，使音色如天鹅绒般高贵。",
          en: "Avoid jaw-driven goat trills. Modulate the air column from the abdomen at approx. 5.2 waves per second. Begin straight, blooming into subtle vibrato.",
          de: "Vermeiden Sie Lippen-Zittern. Modulieren Sie den Luftstrom aus dem Zwerchfell mit ca. 5 Wellen pro Sekunde; Töne gerade anblasen und sanft aufblühen lassen.",
          ja: "下唇を動かす浅いヴィブラートを避け、腹筋の支えから約5.2Hzの穏やかな波を作り出します。ストレートトーンから自然に揺らします。",
        },
        focusNote: "F5",
      },
      {
        step: 4,
        title: { zh: "意境留白与长音弱化减弱", en: "Artistic Stillness & Whisper Decrescendo", de: "Künstlerische Stille & Pianissimo-Abgang", ja: "余白の美学と静寂へのディミヌエンド" },
        desc: {
          zh: "吹到小节末尾的长音时，将气流极度收束但绝不降低气压，音色渐渐融入空气中的静寂。体验巴洛克威尼斯水城的空灵意境。",
          en: "At bar-end sustained notes, taper volume down to a whisper without dropping air speed. Let the sound melt effortlessly into silence.",
          de: "Halten Sie die Luftspannung am Taktende aufrecht, während Sie das Volumen bis zum Hauch zurücknehmen, sodass der Ton lautlos im Raum verweht.",
          ja: "小節末尾のロングトーンでは、呼気圧を保ったまま音量だけを静寂の彼方へと消衰させます。ヴェネツィアの運河に消えゆく余韻を表現します。",
        },
        focusNote: "D4",
      },
    ],
    faqs: [
      {
        q: {
          zh: "演奏马尔切洛柔板，到底该吹原版谱还是巴赫改编版的装饰音？",
          en: "Should I play Marcello's original line or Bach's BWV 974 ornaments?",
          de: "Sollte man Marcellos Original oder Bachs Verzierungen spielen?",
          ja: "マルチェッロの原典版とバッハの装飾音版、どちらを吹くべきですか？",
        },
        a: {
          zh: "在绝大多数职业音乐会和考级中，推荐吹奏巴赫（BWV 974）整理的华丽装饰音版本，因为巴赫赋予了此曲最崇高的复调色彩与艺术深度。如果对即兴装饰有深厚研究，也可以在第二遍反复时加入个人个性化装饰。",
          en: "Bach's BWV 974 version is the universal standard in modern concert and audition practice due to its supreme artistic depth and balance.",
          de: "Bachs Version (BWV 974) ist der anerkannte Konzertstandard. Seine Verzierungen verleihen dem Werk zeitlose Tiefe und Eleganz.",
          ja: "現代の演奏会や試演では、バッハ（BWV 974）による装飾音版を演奏するのが世界標準です。バッハの対位法的な美意識が加わることで楽曲の芸術的深みが格段に高まるためです。",
        },
      },
      {
        q: {
          zh: "为什么吹这首慢板时，嘴唇极容易酸痛麻木？",
          en: "Why does the embouchure fatigue so quickly in this Adagio?",
          de: "Warum ermüden die Lippen in diesem Adagio so schnell?",
          ja: "なぜこのアダージョを吹いているとすぐに唇が疲れて痛くなるのですか？",
        },
        a: {
          zh: "慢板乐章出气极慢，乐手容易下意识憋气并死死咬住哨片来控制弱音。请务必每吹完一个长乐句立即通过鼻子排出多余积压气体，并依靠腹肌而不是嘴唇力量来托住气柱。",
          en: "Slow tempos require low airflow, causing players to choke the reed with bite pressure. Constantly exhale excess air between phrases and rely on abdominal support rather than lip pinch.",
          de: "Langsames Spiel verführt zum Kieferspannen. Blasen Sie Altwasserluft zwischen den Phrasen ab und stützen Sie aus dem Bauch, anstatt die Lippen zu quetschen.",
          ja: "テンポが遅く息の消費が極めて少ないため、無意識に息を止め、唇を強く噛み込んで弱音をコントロールしようとするからです。フレーズの合間に残気を逃がし、唇ではなく腹筋で息を支えてください。",
        },
      },
    ],
    relatedSlugs: ["cimarosa-oboe-concerto-c-minor", "handel-oboe-concerto-hwv287", "richard-strauss-oboe-concerto"],
    pdfDownloadName: "Marcello-Oboe-Concerto-Adagio-Solo.pdf",
  },

  // 5. 亨德尔 g小调第三双簧管协奏曲 HWV 287
  {
    id: "oboe-score-5",
    slug: "handel-oboe-concerto-hwv287",
    title: {
      zh: "亨德尔 g小调第三双簧管协奏曲 HWV 287 (庄严的慢板与快板)",
      en: "Handel Oboe Concerto No.3 in G Minor HWV 287 - Grave & Allegro",
      de: "Händel Oboenkonzert Nr. 3 g-Moll HWV 287 - Grave & Allegro",
      ja: "ヘンデル オーボエ協奏曲 第3番 ト短調 HWV 287（グラーヴェとアレグロ）",
    },
    seoTitle: {
      zh: "亨德尔g小调双簧管协奏曲HWV287乐谱·附点节奏与庄严古典 | OboLib",
      en: "Handel Oboe Concerto in G Minor HWV 287 Sheet Music | OboLib",
      de: "Händel Oboenkonzert g-Moll HWV 287 Noten & Grave-Guide | OboLib",
      ja: "ヘンデル オーボエ協奏曲 第3番 ト短調 楽譜・付点リズムと荘厳な歌 | OboLib",
    },
    metaDesc: {
      zh: "免费下载亨德尔g小调第三双簧管协奏曲HWV 287高清独奏分谱。掌握巴洛克附点大跳、庄严法式序曲风格起音与弦乐对话复调解析。",
      en: "Download Handel Oboe Concerto No.3 in G Minor HWV 287 solo sheet music. Master Baroque dotted rhythms, Grave cantabile, and Allegro articulation.",
      de: "Kostenlose Noten für Händels Oboenkonzert Nr. 3 g-Moll HWV 287. Anleitung für barocke Punktierung, Grave-Erhabenheit und polyphone Allegro-Führung.",
      ja: "ヘンデルのオーボエ協奏曲第3番ト短調（HWV 287）独奏譜。バロック特有の付点リズムの跳躍、グラーヴェの荘厳な発音、アレグロの対位法的展開を解説。",
    },
    keywords: {
      zh: "亨德尔双簧管协奏曲,HWV287乐谱,g小调双簧管,双簧管附点节奏,Handel Oboe Concerto G Minor",
      en: "Handel Oboe Concerto, Handel HWV 287 oboe, G minor oboe concerto, Baroque oboe dotted rhythm, Handel oboe score PDF",
      de: "Händel Oboenkonzert g-Moll, HWV 287 Noten Oboe, Barock Oboe Händel",
      ja: "ヘンデル オーボエ協奏曲, HWV 287 楽譜, ト短調 オーボエ, バロック 付点リズム",
    },
    composer: "George Frideric Handel (1685-1759)",
    composerEra: {
      zh: "盛期巴洛克时期 (约1704-1710年创作于汉堡/伦敦)",
      en: "High Baroque Era (Hamburg / London, c.1704-1710)",
      de: "Hochbarock (Hamburg / London, ca. 1704–1710)",
      ja: "盛期バロック（1704〜1710年頃ハンブルク／ロンドンにて作曲）",
    },
    difficulty: {
      zh: "经典巴洛克考级核心 / 室内乐必备 (Difficulty: 4/5)",
      en: "Baroque Classical Repertoire (Difficulty: 4/5)",
      de: "Klassisches Barock-Repertoire (Schwierigkeit: 4/5)",
      ja: "バロック・オーボエ必修課題曲・室内楽の定番（難易度: 4/5）",
    },
    keySignature: "G Minor",
    tempo: "Grave (4/4) & Allegro (4/4)",
    timeSignature: "4/4",
    rangeNote: "D4 - D6",
    historicalContext: {
      zh: "亨德尔青年时期的璀璨杰作。曲中洋溢着汉堡歌剧院与早期意大利时期的戏剧张力。第一乐章 Grave 充满皇家法式序曲的庄严凝重与威仪，第二乐章 Allegro 则以充满生机活力的复调赋格交替问答，是全世界双簧管学子步入巴洛克圣殿的必由之路。",
      en: "Composed during Handel's youthful period, pulsing with Hamburg theatrical vitality. The opening Grave captures regal French overture grandeur, leading into an exuberant contrapuntal Allegro dialogue.",
      de: "Ein Glanzstück aus Händels Jugendzeit voller dramatischer Vitalität. Das einleitende Grave verströmt majestätische Würde, gefolgt von einem vorwärtsdrängenden, fugierten Allegro.",
      ja: "若きヘンデルがハンブルク歌劇場時代に作曲したとされる名作。荘重なフランス風序曲の気品を湛えたグラーヴェと、快活な対位法で駆け抜けるアレグロは、バロックの様式美を学ぶ最高のテキストです。",
    },
    auditionSignificance: {
      zh: "考官检验演奏者'骨架音准'与'双簧管巴洛克音响厚度'的标杆。g小调特有的深沉音色要求双簧管吹奏出宽厚而不沉闷、庄严而不僵硬的贵族气息。",
      en: "Evaluates pitch architecture and deep resonance. The somber key of G minor requires majestic nobility without harshness, and clean, double-dotted buoyancy.",
      de: "Ein Maßstab für barocke Würde und harmonische Festigkeit. Das g-Moll erfordert einen dunklen, edlen Klang ohne dumpfe Schwere.",
      ja: "バロック様式における骨太な音程感と音色の深みを測る好例。ト短調特有の憂愁と重厚さを、硬くならずノーブルに響かせることが求められます。",
    },
    pedagogicalFocus: {
      zh: ["巴洛克双附点节奏的时值锐利度（Over-dotting）", "低音 D4 到高音 D6 的八度均衡", "赋格快板中十六分音符跳音的句首重音层次", "持续通奏低音背景下的纯律三度微调"],
      en: ["Baroque over-dotting rhythmic sharpness", "Octave timbre balance between low D4 and high D6", "Metric dynamic hierarchy in the contrapuntal Allegro", "Tuning pure minor thirds against basso continuo"],
      de: ["Schärfe der barocken Doppelpunktierung (Over-dotting)", "Klangausgleich zwischen tiefem D4 und hohem D6", "Metrische Hierarchie im fugierten Allegro", "Reine Terz-Intonation über dem Generalbass"],
      ja: ["バロック特有の複付点リズムの切れ味（オーバー・ドッティング）", "低音D4から高音D6までの音色の均質性", "フーガ風アレグロにおける拍節の明瞭な階層付け", "通奏低音に対する純正な3度のピッチ調整"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "双附点节奏与十六分音符精确卡点", en: "Double-Dotting Sharp Precision", de: "Präzise Doppelpunktierung", ja: "複付点リズムと16分音符の鋭い配置" },
        desc: {
          zh: "巴洛克庄严 Grave 绝不能吹成拖沓的单附点。严格将短音符向后压缩（像三十二分音符般精准切入下一个强拍），体现皇家威严气派。",
          en: "Never play Grave with lazy single-dotting. Sharpen the short pick-up note like a 32nd note, snapping crisply into the following downbeat.",
          de: "Spielen Sie das Grave nicht träge. Schärfen Sie die kurzen Noten rhythmisch zu (wie Zweiunddreißigstel), um königliche Erhabenheit zu erzielen.",
          ja: "グラーヴェの付点を緩慢に演奏してはいけません。短い音符を後ろへ引き締め、次の強拍へ鋭く切り込むことで王侯貴族の威厳を表現します。",
        },
        focusNote: "D5",
      },
      {
        step: 2,
        title: { zh: "g小调低音 D4-G4 宽厚声学起音", en: "Low G-Minor D4-G4 Resonance", de: "Sonorer Ansatz im Tiefenregister", ja: "ト短調低音D4-G4の豊かな共鳴発音" },
        desc: {
          zh: "低音下行时，气流保持下沉扩张，下唇向外舒展 0.5 毫米，使双簧片充分享受管身共鸣，绝不挤压咽喉造成尖叫音。",
          en: "During low scalar descents, project warm air down into the belly while easing lip pressure slightly outward, letting the bore ring fully.",
          de: "Bei Abwärtsläufen tief stützen und den Lippendruck um 0,5 mm lockern, damit das Rohr im Instrument voll resonant mitschwingt.",
          ja: "低音へ下行する際、息の支えを低く保ち、唇の圧力をほんのわずか緩めて、管体全体の太い共鳴を引き出します。",
        },
        focusNote: "G4",
      },
      {
        step: 3,
        title: { zh: "快板复调对位中的句法层次", en: "Contrapuntal Allegro Dynamic Layers", de: "Polyphone Schichtung im Allegro", ja: "アレグロ対位法における強弱の立体感" },
        desc: {
          zh: "在第二乐章 Allegro 中，区分'问句'（强 f）与'答句'（弱 p）。遇到高音进点时，舌尖干脆弹拨，保持音程线条极度明快。",
          en: "Differentiate call (forte) and response (piano) phrases. Keep articulation light and crisp on subject entries to preserve polyphonic clarity.",
          de: "Unterscheiden Sie Frage (forte) und Antwort (piano). Setzen Sie Themeneinsätze mit elastischer Zunge klar ab.",
          ja: "第2楽章アレグロでは「問い（フォルテ）」と「答え（ピアノ）」を明確に弾き分け、主題の登場を粒立ちの良いタンギングで際立たせます。",
        },
        focusNote: "Bb5",
      },
      {
        step: 4,
        title: { zh: "巴洛克末尾长延音 Trill 纯净收尾", en: "Baroque Trill & Final Cadence Finish", de: "Barock-Triller & Sauberer Kadenzschluss", ja: "バロック・トリルと終止カデンツの結び" },
        desc: {
          zh: "乐章收尾的长颤音必须由上方音（Upper Auxiliary Note）起颤，均匀由慢渐快，并在终点带有标准的二音下行收束（Turn finish）。",
          en: "Start all cadence trills on the upper neighbor note. Accelerate smoothly from slow to fast, terminating with an immaculate two-note turn.",
          de: "Kadenztriller stets von der oberen Hilfsnote beginnen. Gleichmäßig beschleunigen und mit einem sauberen zweitönigen Nachschlag beenden.",
          ja: "終止部のトリルは必ず上の補助音から始め、徐々に速度を上げ、整然とした2音の後打音（ターン）を伴って格調高く締めくくります。",
        },
        focusNote: "F#5",
      },
    ],
    faqs: [
      {
        q: {
          zh: "吹奏亨德尔这首作品时，用现代管还是巴洛克双簧管指法？",
          en: "Should I use modern or historical Baroque oboe fingerings for HWV 287?",
          de: "Spielt man dieses Werk mit moderner Oboe oder Barockoboe?",
          ja: "ヘンデルHWV 287では現代の運指とバロック・オーボエの運指のどちらを用いますか？",
        },
        a: {
          zh: "本站提供的分谱适用于现代法式保守院系统（French Conservatoire System）双簧管。演奏时只需借鉴巴洛克时期的附点处理原则与轻巧发音风格，即可在现代乐器上完美呈现地道的巴洛克韵味。",
          en: "Our edition is fully tailored for the modern French Conservatoire oboe. Simply apply Baroque stylistic articulation and double-dotting principles to achieve authentic period brilliance.",
          de: "Unsere Notenausgabe ist für die moderne französische Oboe eingerichtet. Übertragen Sie barocke Artikulation und Punktierung, um historisch informierten Glanz zu erzielen.",
          ja: "当サイトの楽譜は現代のフランス式コンセルヴァトワール・オーボエ用に最適化されています。バロック期の様式美（付点の鋭さ、軽やかな発音）を取り入れることで、現代楽器でも生き生きとした演奏が可能です。",
        },
      },
      {
        q: {
          zh: "这首协奏曲的调音标准应该设定在多少赫兹？",
          en: "What concert pitch should I tune to for this concerto?",
          de: "Welche Stimmtonhöhe empfiehlt sich für dieses Konzert?",
          ja: "この協奏曲の基準ピッチは何Hzに設定すべきですか？",
        },
        a: {
          zh: "使用现代双簧管与钢琴伴奏或弦乐团合作时，设定为标准的 A=440Hz 或 A=442Hz 即可；若参与古乐团（Period Instrument）演出，则可能需要换用古乐哨片降至 A=415Hz。",
          en: "With modern piano or orchestra, standard A=440Hz or A=442Hz is appropriate. For historical period performance, A=415Hz Baroque pitch applies.",
          de: "Mit modernem Klavier oder Orchester gilt A=440 Hz oder 442 Hz. Für historische Aufführungspraxis gilt Barockstimmung A=415 Hz.",
          ja: "現代のピアノやオーケストラと共演する場合はA=440Hzまたは442Hzが標準です。古楽器オーケストラとの共演時のみ、A=415Hzのバロックピッチが用いられます。",
        },
      },
    ],
    relatedSlugs: ["marcello-oboe-concerto-d-minor", "cimarosa-oboe-concerto-c-minor", "ferling-48-studies-op31-no1"],
    pdfDownloadName: "Handel-Oboe-Concerto-HWV287-Solo.pdf",
  },

  // 6. 费林 48 首双簧管练习曲 Op.31 第 1 首
  {
    id: "oboe-score-6",
    slug: "ferling-48-studies-op31-no1",
    title: {
      zh: "费林 48 首双簧管练习曲 Op.31 第 1 首 (抒情慢板)",
      en: "Ferling 48 Famous Studies for Oboe Op.31 No.1 - Andante con gusto",
      de: "Ferling 48 Etüden für Oboe Op. 31 Nr. 1 - Andante con gusto",
      ja: "フェルリング オーボエのための48の練習曲 Op.31 第1番",
    },
    seoTitle: {
      zh: "费林双簧管练习曲Op.31第1首乐谱·慢练呼吸与考级圣经 | OboLib",
      en: "Ferling 48 Studies Op.31 No.1 Oboe Sheet Music & Guide | OboLib",
      de: "Ferling 48 Etüden Op. 31 Nr. 1 Noten & Oboen-Leitfaden | OboLib",
      ja: "フェルリング オーボエ練習曲 Op.31 第1番 楽譜＆息使い完全攻略 | OboLib",
    },
    metaDesc: {
      zh: "免费下载费林48首双簧管练习曲Op.31第1首高清五线谱。全解C大调连音三连音歌唱性、下行琶音平稳气息支撑与全球音乐学院考级核心评分标准。",
      en: "Download Franz Wilhelm Ferling 48 Studies Op.31 No.1 oboe sheet music. Master C major cantabile triplets, descending arpeggios, and audition criteria.",
      de: "Kostenlose Noten für Ferlings 48 Etüden Op. 31 Nr. 1 (Andante con gusto). Anleitung für lyrisches Triolenspiel, Legato-Bögen und Probespiel-Bewertungskriterien.",
      ja: "フェルリングのオーボエのための48の練習曲 Op.31 第1番独奏譜。ハ長調の三連符レガート、息の長いフレーズ感、世界中の音楽大学入試で問われる基準を詳細解説。",
    },
    keywords: {
      zh: "费林双簧管练习曲,费林48首乐谱,双簧管考级练习曲,费林第一首,Ferling 48 Studies Oboe",
      en: "Ferling 48 Studies, Ferling oboe sheet music, Ferling Op.31 No.1, oboe etude C major, conservatory audition etude",
      de: "Ferling 48 Etüden, Ferling Oboe Noten, Ferling Op 31 Nr 1, Oboenetüde C-Dur",
      ja: "フェルリング 48の練習曲, フェルリング 楽譜, オーボエ エチュード, 音大受験 課題曲",
    },
    composer: "Franz Wilhelm Ferling (1796-1874)",
    composerEra: {
      zh: "早期浪漫主义 / 19世纪德奥管乐教育学黄金期",
      en: "Early Romantic / 19th Century German Oboe Pedagogy",
      de: "Frühromantik / Deutsches Oboen-Lehrwerk 19. Jh.",
      ja: "初期ロマン派（19世紀ドイツ・オーボエ教育の金字塔）",
    },
    difficulty: {
      zh: "全球考级与音乐学院入门终极必修 (Difficulty: 3/5)",
      en: "Essential Conservatory & Collegiate Study (Difficulty: 3/5)",
      de: "Grundpfeiler des Oboenstudiums (Schwierigkeit: 3/5)",
      ja: "世界基準の教育聖典・音大受験必修（難易度: 3/5）",
    },
    keySignature: "C Major",
    tempo: "Andante con gusto (Eighth Note = 80-88)",
    timeSignature: "3/4",
    rangeNote: "C4 - D6",
    historicalContext: {
      zh: "德国布伦瑞克宫廷双簧管首席弗朗茨·威廉·费林于 1837 年出版的旷世教材。48 首练习曲按照 24 个大小调排列，每调一首慢板抒情曲（训练歌唱性与呼吸控制）配一首快板技巧曲（训练手指与双吐）。第 1 首 C 大调 Andante 是全世界所有专业双簧管学生开启职业之路的第一课。",
      en: "Published in 1837 by Franz Wilhelm Ferling, principal oboist of the Court Orchestra in Braunschweig. Arranged in pairs (one lyrical slow study and one virtuosic fast study in each of the 24 major and minor keys). Study No.1 in C Major remains the single most iconic oboe pedagogical masterwork.",
      de: "1837 von Franz Wilhelm Ferling, Solo-Oboist am Hofe zu Braunschweig, veröffentlicht. Jeweils paarweise angeordnet (eine langsame Gesangsetüde und eine schnelle Virtuosenetüde durch alle 24 Tonarten). Die Etüde Nr. 1 ist das Tor zur professionellen Oboenkunst.",
      ja: "ブラウンシュヴァイク宮廷楽団の首席オーボエ奏者F.W.フェルリングが1837年に出版した名教本。全24の調性ごとに「旋律的な緩徐練習曲」と「技巧的な急速練習曲」が対をなし、この第1番ハ長調は世界中のすべてのオーボエ奏者が必ず通る登竜門です。",
    },
    auditionSignificance: {
      zh: "各大院校招生与乐团初试的显微镜。曲目看似调性简单，但正是没有多余修饰的 C 大调，将演奏者的哨片发声平滑度、连音均匀度、八度转换时的下颌稳定性暴露无遗。",
      en: "The acoustic microscope in conservatory auditions. In transparent C major, any pitch wobble, uneven legato, or embouchure biting is immediately magnified under the jury's ears.",
      de: "Das akustische Mikroskop jeder Aufnahmeprüfung. Im transparenten C-Dur wird jede Unregelmäßigkeit im Legato oder Beißen des Rohrs schonungslos offengelegt.",
      ja: "音大入試やオーディションにおける「拡大鏡」。調性が平易なハ長調だからこそ、息のムラやレガートの滑らかさ、オクターブ跳躍時の顎の力みが如実に浮き彫りになります。",
    },
    pedagogicalFocus: {
      zh: ["三连音在 3/4 拍慢板中的平滑歌唱连音", "上行至 D6 极高音时的喉腔圆润松弛", "下行十六分音符琶音的气流支撑不塌陷", "弱起拍（Upbeat）的柔和推入与乐句归宿"],
      en: ["Seamless cantabile legato across lyrical triplets in 3/4", "Open throat resonance ascending to high D6", "Air support resilience during descending sixteenth arpeggios", "Gentle upbeat entries resolving into phrase cadences"],
      de: ["Fließendes Legato über den getragenen Triolen im 3/4-Takt", "Entspannte Kehlkopfresonanz bis zum hohen D6", "Stütze bei abwärts gerichteten Sechzehntel-Arpeggien", "Zarter Auftakt-Einstieg mit zielgerichteter Phrasierung"],
      ja: ["3/4拍子の緩やかな三連符における滑らかなレガート", "高音D6へ上行する際の喉の開放とリラックス", "下行アルペジオにおける息の支えの維持", "弱起（アウフタクト）の柔らかい導入とフレーズの終止感"],
    },
    practiceSteps: [
      {
        step: 1,
        title: { zh: "纯音连音三连音的气流恒定化", en: "Steady Airflow across Legato Triplets", de: "Stetiger Atem über Legato-Triolen", ja: "三連符レガートにわたる一定の送気" },
        desc: {
          zh: "以八分音符为一拍（80 BPM）。手指像在水下移动般缓慢而轻柔地按键，确保相邻音符之间没有声学缝隙，气流保持像激光笔般笔直前推。",
          en: "Subdivide in eighth notes at 80 BPM. Move fingers like moving through water—smooth, deliberate, leaving zero acoustic gaps between adjacent pitches.",
          de: "Zählen Sie in Achteln bei 80 BPM. Bewegen Sie die Finger wie unter Wasser: weich, fließend, ohne Luftlöcher zwischen den Tönen.",
          ja: "8分音符＝80 BPMでカウント。指先を水中で動かすように滑らかにキーを押さえ、音と音の間に隙間を作らず、息のビームを一定に注ぎます。",
        },
        focusNote: "C5",
      },
      {
        step: 2,
        title: { zh: "高音 D6 抬升舌根与下颌零咬合", en: "High D6 Tongue Arch & Zero Jaw Pinch", de: "Hohes D6 Zungenwölbung ohne Kieferschluss", ja: "高音D6における舌根の持ち上げと脱力" },
        desc: {
          zh: "吹到高音 D6 乐句顶峰时，千万不要用牙齿下咬哨片。保持下颌不动，仅仅将舌根略微抬高以加速气流，让 D6 像阳光破云般透亮舒展。",
          en: "Never clamp teeth onto the reed for high D6. Keep jaw fixed and drop-relaxed, arching the back of the tongue to accelerate air naturally.",
          de: "Beißen Sie das Rohr für das hohe D6 keinesfalls zu. Halten Sie den Kiefer locker und heben Sie nur den Zungenrücken für schnellere Luftströmung.",
          ja: "最高音D6に到達する際、歯でリードを噛み込んではいけません。下顎の位置を保ったまま舌の奥を少し持ち上げて気流を加速させ、明るく伸びやかな響きを作ります。",
        },
        focusNote: "D6",
      },
      {
        step: 3,
        title: { zh: "下行琶音腹肌反向顶托", en: "Counter-Support on Descending Arpeggios", de: "Gegenstütze bei absteigenden Arpeggien", ja: "下行アルペジオでの腹筋による逆支え" },
        desc: {
          zh: "双簧管下行时音容易突然沉闷失控。下行音阶越向下走，腹肌越要像踩刹车般给予反向支撑，把每一个低音都吹得如大提琴般温润。",
          en: "Descending notes easily sound tubby or uncontrolled. Engage the abdomen like stepping on gentle brakes, giving low notes cello-like warmth.",
          de: "Abwärtsläufe klingen schnell dumpf. Die Zwerchfellstütze bewusst aktiv halten wie eine feine Bremse, um jedem Ton Cello-Wärme zu verleihen.",
          ja: "旋律が下行する際、音が急に重く鈍くなりがちです。下行するほど腹筋でブレーキをかけるように下から支え、チェロのような温かい低音を保ちます。",
        },
        focusNote: "G4",
      },
      {
        step: 4,
        title: { zh: "3/4 拍大律动与歌唱性连贯", en: "3/4 Metric Swing & Unified Cantilena", de: "3/4-Großpuls & Durchgängige Kantilene", ja: "3/4拍子の大らかな脈動と一体感" },
        desc: {
          zh: "将节拍感由细碎的八分音符提升到大一拍（三小节一大循环）。让旋律像轻盈的小步舞曲般优美呼吸，体会德奥浪漫主义的宁静诗意。",
          en: "Broaden feel from mechanical eighths to one large pulse per bar. Let the cantilena float like a noble minuet full of romantic poetic stillness.",
          de: "Vom kleinteiligen Achtelzählen zum großen Dreiertakt übergehen. Lassen Sie die Melodie wie ein edles Menuett voll Poesie atmen.",
          ja: "細かな8分音符のカウントから、1小節を大きな1拍として捉える感覚へと昇華。メヌエットのように優雅に呼吸し、ロマン派の詩情を歌い上げます。",
        },
        focusNote: "C4",
      },
    ],
    faqs: [
      {
        q: {
          zh: "吹奏费林练习曲时，如何做到换气不破坏三连音的连贯？",
          en: "How do I breathe in Ferling without disturbing triplet flow?",
          de: "Wie atmet man bei Ferling, ohne den Triolenfluss zu stören?",
          ja: "フェルリングの練習曲で三連符の流れを崩さずに息継ぎをするコツは？",
        },
        a: {
          zh: "费林练习曲的换气点绝不能随意停顿。在乐句小节线前的最后一个三连音处，略微缩短最后半个音符，以极为轻敏的'闪电式偷气'吸入新气，强拍上的下一个三连音必须精准落地在原拍上。",
          en: "Never pause on triplet runs. Steal a fraction of the final sixteenth before the bar line for a silent sip of air, landing precisely on the next downbeat.",
          de: "Keinesfalls den Fluss anhalten. Verkürzen Sie die letzte Note vor dem Taktstrich unmerklich für einen schnellen Luftschnapper, um exakt auf der Eins zu landen.",
          ja: "小節線の手前の最後の3連符の音価をわずかに短縮し、一瞬で息を補給。次の強拍の頭を正確に鳴らすことで、拍の滞りを防ぎます。",
        },
      },
      {
        q: {
          zh: "为什么专业老师总说'学好费林第一首，双簧管就成功了一半'？",
          en: "Why do master teachers revere Ferling No.1 as foundational?",
          de: "Warum gilt Ferling Nr. 1 als das Fundament des Oboenspiels?",
          ja: "なぜ指導者は「フェルリング第1番を極めれば半分成功したようなもの」と言うのですか？",
        },
        a: {
          zh: "因为这首练习曲包含了双簧管最核心的所有基本功：纯正的 C 大调音准、从极弱到次强的气息支撑、跨八度的口型稳定性以及将乐器吹成'人声歌唱'的纯正艺术趣味，没有任何花哨杂质，是终身受益的练琴照妖镜。",
          en: "Because it distills all vital fundamentals: transparent C-major intonation, dynamic breath support, octave embouchure stability, and pure vocal cantabile.",
          de: "Weil sie alle Essenzen vereint: makellose C-Dur-Intonation, Atemführung von pp bis f, Lippenstabilität und reine Gesangskunst ohne Effekthascherei.",
          ja: "透明度の高いハ長調の音程、ppからfまでの呼気の支え、オクターブ跳躍での口型の安定性、そして「歌う心」という、オーボエのすべての基礎が凝縮されているからです。",
        },
      },
    ],
    relatedSlugs: ["mozart-oboe-concerto-k314", "marcello-oboe-concerto-d-minor", "cimarosa-oboe-concerto-c-minor"],
    pdfDownloadName: "Ferling-48-Studies-Op31-No1-Solo.pdf",
  },
];
