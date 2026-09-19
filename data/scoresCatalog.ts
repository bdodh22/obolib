import { INITIAL_SCORES } from "./initialData";
import { Score } from "../types";
import { PRACTICE_STEPS_EN_MAP } from "./scoreLocalizationData";

export interface ScoreDetailSEOData {
  id: string;
  slug: string;
  titleZh: string;
  titleEn: string;
  seoTitleZh: string;
  seoTitleEn: string;
  metaDescZh: string;
  metaDescEn: string;
  keywordsZh: string;
  keywordsEn: string;
  composer: string;
  composerEraZh: string;
  composerEraEn: string;
  difficultyZh: string;
  difficultyEn: string;
  keySignature: string;
  keySignatureEn?: string;
  tempo: string;
  tempoEn?: string;
  timeSignature: string;
  timeSignatureEn?: string;
  rangeNote: string;
  instrumentTypeZh: string;
  instrumentTypeEn: string;
  historicalContextZh: string;
  historicalContextEn: string;
  auditionSignificanceZh: string;
  auditionSignificanceEn: string;
  pedagogicalFocusZh: string[];
  pedagogicalFocusEn: string[];
  practiceStepsZh: { step: number; title: string; desc: string; focusNote?: string }[];
  practiceStepsEn?: { step: number; title: string; desc: string; focusNote?: string }[];
  faqs: { qZh: string; aZh: string; qEn: string; aEn: string }[];
  relatedSlugs: string[];
  relatedArticleIds?: string[];
  relatedFingeringNotes?: string[];
  relatedOctave?: "first" | "second" | "third";
  relatedTools?: string[];
}

export const SCORES_CATALOG: ScoreDetailSEOData[] = [
  // 1. MOZART K.191 (Priority 1)
  {
    id: "s5",
    slug: "mozart-bassoon-concerto-k191",
    titleZh: "莫扎特降B大调大管协奏曲 K.191 第一乐章 (独奏呈示部)",
    titleEn: "Mozart Bassoon Concerto in B-flat Major K.191 - Allegro (Solo Exposition)",
    seoTitleZh: "莫扎特大管协奏曲K.191乐谱·第一乐章独奏五线谱下载与练琴指引 | BSN Lib",
    seoTitleEn: "Mozart Bassoon Concerto K.191 Sheet Music (PDF) · Allegro Solo & Audition Guide | BSN Lib",
    metaDescZh: "免费下载莫扎特降B大调大管协奏曲 K.191 第一乐章独奏呈示部高清五线谱。提供经典低音大跳与珍珠般十六分音符分解和弦指法解析、伴奏音频试听与考级试奏重点。",
    metaDescEn: "Download free printable Mozart Bassoon Concerto K.191 1st mvt sheet music PDF. Interactive player, fingering breakdown for leaps and arpeggios, and orchestral audition guide.",
    keywordsZh: "莫扎特大管协奏曲,莫扎特K191乐谱,大管协奏曲五线谱,巴松考级曲目,大管试音必考,Mozart K191 Bassoon",
    keywordsEn: "Mozart Bassoon Concerto, Mozart Bassoon Concerto PDF, Mozart K191 Score, Bassoon Concerto Sheet Music, Mozart Bassoon Solo, Audition Excerpt",
    composer: "Wolfgang Amadeus Mozart (1756-1791)",
    composerEraZh: "古典主义时期 (Classical Era, 1774年创作于萨尔茨堡)",
    composerEraEn: "Classical Era (Composed in Salzburg, 1774)",
    difficultyZh: "中高级 / 考级8-9级 / 音乐学院入学试音必选",
    difficultyEn: "Advanced / Grade 8-9 / Conservatory Audition",
    keySignature: "B♭ Major (降B大调 · 2个降号)",
    tempo: "Allegro (快板 · ♩ = 104-112)",
    timeSignature: "4/4 拍",
    rangeNote: "B♭2 (大字组降B) 至 F4 (高音F)",
    instrumentTypeZh: "大管独奏 (Bassoon Solo)",
    instrumentTypeEn: "Bassoon Solo with Accompaniment",
    historicalContextZh: "莫扎特于 1774 年（年仅 18 岁）在萨尔茨堡完成了这部降B大调大管协奏曲（K.191/186e）。这是莫扎特唯一流传至今的完整大管协奏曲，也是整个木管乐器文献中最受推崇的传世经典。全曲不仅彻底改变了当时大管仅作为管弦乐通奏低音的附属地位，更将大管高贵的歌唱性、诙谐的顿音与宽广的音域发挥到了极致。",
    historicalContextEn: "Composed in 1774 when Mozart was just 18 years old in Salzburg, K.191 is Mozart's sole surviving bassoon concerto and arguably the most important cornerstone in the bassoon repertoire. It liberated the bassoon from its traditional continuo role, showcasing its lyrical eloquence, aristocratic charm, and athletic agility.",
    auditionSignificanceZh: "全球所有主流交响乐团（柏林爱乐、维也纳爱乐、波士顿交响、国家大剧院管弦乐团等）在招聘大管演奏员的第一轮初试中，99% 都要求演奏莫扎特 K.191 第一乐章（含华彩）。评委通过该曲考察演奏员的古典主义风格纯洁度、发音起音的果断性、跳音的颗粒弹性与音准稳定性。",
    auditionSignificanceEn: "Mozart K.191 Mvt 1 is mandatory for virtually every professional orchestra and conservatory audition worldwide. Audition panels use it to evaluate tonal purity, classical articulation style, rhythm integrity, and octave leap accuracy.",
    pedagogicalFocusZh: [
      "独奏进场（M.1）开篇低音 B♭2 到 B♭3 跨两个八度大跳的坚实起音与音准控制",
      "十六分音符分解和弦快速跑动时的颗粒感（Pearl-like clarity），避免手指拍打键垫",
      "第4小节 B♭3 到 C4 颤音（Trill）的起音干脆与终止式回音（Turn）的优雅衔接",
      "歌唱性第二主题中高音 F4 的气流支撑与口型松弛度"
    ],
    pedagogicalFocusEn: [
      "Solid attack and impeccable intonation on the opening two-octave leap (Bb2 to Bb3)",
      "Pearl-like articulation and smooth finger transition on 16th-note broken chords",
      "Clean trill on high Bb3 with natural, elegant turn into the half-cadence",
      "Generous air support and relaxed embouchure on the lyrical second theme reaching High F4"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "开篇八度大跳慢速攻坚",
        desc: "以 ♩ = 60 慢速练习开场第1小节低音 B♭2 到中音 B♭3 的两组跳音。注意下唇放松微卷，由腹部横膈膜平稳加压送气，切忌用牙齿死咬簧片提高音准。",
        focusNote: "B♭2 / B♭3"
      },
      {
        step: 2,
        title: "珍珠般十六分音符手指贴键训练",
        desc: "针对第2-3小节的十六分音符分解和弦，采用两连两吐与四连音交替练习，手指抬起高度严格限制在 1 厘米以内，保持音色均匀清澈。",
        focusNote: "E♭4 / D4"
      },
      {
        step: 3,
        title: "古典颤音与优雅收官",
        desc: "第4小节的高音 B♭3 颤音需从本音开始快速均匀振动，末尾自然加入 A3-B♭3 回音并连贯滑入低音区长音。",
        focusNote: "B♭3 (Trill)"
      }
    ],
    faqs: [
      {
        qZh: "演奏莫扎特 K.191 开场第一小节八度大跳时破音怎么解决？",
        aZh: "破音通常是因为从低音跳到高音时嘴唇猛然咬紧哨片。正确的做法是：保持口腔内部倒'O'型空间不变，下唇仅轻柔微贴，依靠腹部核心气流瞬间加速（Air speed kick）将气流灌入管体，左手高音泛音键要干脆到位。",
        qEn: "How do I prevent cracking notes on the opening octave leap in Mozart K.191?",
        aEn: "Note cracking usually occurs when biting down on the reed. Maintain an open oral cavity, keep the lower lip flexible, and rely on an instant increase in air speed supported by abdominal compression rather than jaw pressure."
      },
      {
        qZh: "莫扎特协奏曲应该选用哪种风格的华彩乐段（Cadenza）？",
        aZh: "建议选择符合古典主义风格的华彩（如 Milan Turković、Klaus Thunemann 或 Iwanov 编写的版本），避免加入过多浪漫派复杂半音阶或过激极高音，保持典雅明快的莫扎特气质。",
        qEn: "Which cadenza is recommended for Mozart K.191?",
        aEn: "Classical-styled cadenzas such as those by Milan Turković, Klaus Thunemann, or Iwanov are widely preferred because they preserve 18th-century stylistic elegance."
      },
      {
        qZh: "莫扎特大管协奏曲 K.191 属于几级考级曲目？初学者如何利用交互伴奏掌握第一乐章？",
        aZh: "该曲是英皇 ABRSM 8级与 DipABRSM 文凭、以及各大音乐学院附中及大学入学考试的核心保留曲目。正式速度为快板 ♩=104-112。建议初期练习使用本站 0.7x 慢速交互管弦伴奏，先确保第17-25小节快速十六分音符分解和弦音准与连断分明，再逐步提速至原速。",
        qEn: "What grade level is Mozart Bassoon Concerto K.191, and how should I practice the Allegro movement?",
        aEn: "Mozart K.191 is a benchmark for ABRSM Grade 8 / DipABRSM diplomas and conservatory entrance auditions. The concert tempo is ♩=104-112. We recommend starting with our 0.7x interactive piano/orchestral track to master sixteenth-note arpeggio intonation and crisp articulation before ramping up to tempo."
      }
    ],
    relatedSlugs: ["weber-bassoon-concerto-op75", "telemann-bassoon-sonata-f-minor", "weissenborn-op8-no10-fast-staccato", "peter-and-the-wolf-grandfather"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "practice-interval-embouchure-relaxation", "fingering-whisper-key-half-hole-fissure", "theory-bass-tenor-clef"],
    relatedFingeringNotes: ["Bb2", "Bb3", "F4", "Eb4"],
    relatedOctave: "second",
    relatedTools: ["tuner", "metronome", "drone"]
  },

  // 2. PETER AND THE WOLF (Priority 2)
  {
    id: "s2",
    slug: "peter-and-the-wolf-grandfather",
    titleZh: "普罗科菲耶夫《彼得与狼》老爷爷主题 (大管经典拟人化选段)",
    titleEn: "Prokofiev Peter and the Wolf - Grandfather Theme (Bassoon Solo)",
    seoTitleZh: "彼得与狼老爷爷大管独奏乐谱 · 免费五线谱PDF与附点断奏试音指南 | BSN Lib",
    seoTitleEn: "Peter and the Wolf Bassoon Solo (Grandfather Theme) – Free Sheet Music PDF | BSN Lib",
    metaDescZh: "免费下载普罗科菲耶夫《彼得与狼》大管老爷爷主题独奏乐谱 PDF（考级3-4级/乐团试奏必修）。含附点蹒跚节奏解析、低音吐音指法卡与交互慢速伴奏试听。",
    metaDescEn: "Prokofiev's Peter and the Wolf Grandfather bassoon excerpt (Audition Level). Download free printable sheet music PDF with low staccato rhythm guide & audio track.",
    keywordsZh: "彼得与狼大管乐谱,彼得与狼老爷爷主题,交响乐大管片段,普罗科菲耶夫大管独奏,大管初学经典,Peter and the Wolf Bassoon,免费大管PDF",
    keywordsEn: "Peter and the Wolf Bassoon Solo, Peter and the Wolf Grandfather Theme, Peter and the Wolf Bassoon Excerpt, Grandfather Theme Bassoon Sheet Music, Prokofiev Bassoon Solo, Free Bassoon Sheet Music PDF, Orchestral Audition Bassoon Excerpts, Low Bb Bassoon Staccato",
    composer: "Sergei Prokofiev (1891-1953)",
    composerEraZh: "20世纪现代主义 (Modern Era, 1936年作于莫斯科)",
    composerEraEn: "20th Century Modernism (Composed in Moscow, 1936)",
    difficultyZh: "初中级 / 考级3-4级 / 乐团试奏必修",
    difficultyEn: "Intermediate / Grade 3-4 / Orchestral Audition Standard",
    keySignature: "B♭ Major (降B大调 · 2个降号)",
    tempo: "Poco più mosso (♩ = 80-88)",
    timeSignature: "4/4 拍",
    rangeNote: "B♭2 (低音降B) 至 B♭3 (中音降B)",
    instrumentTypeZh: "大管管弦乐独奏片段 (Orchestral Excerpt)",
    instrumentTypeEn: "Orchestral Bassoon Solo Excerpt",
    historicalContextZh: "普罗科菲耶夫于 1936 年受莫斯科中央儿童剧院委托创作了交响童话《彼得与狼》。他巧妙地用每一种乐器代表一个角色，其中大管被赋予了'老爷爷'的角色——低沉、沙哑、步履蹒跚却又充满长辈的慈爱与威严。这是全世界音乐普及教育中最具代表性的大管声音形象。",
    historicalContextEn: "Composed in 1936 for the Central Children's Theatre in Moscow, Prokofiev's symphonic fairy tale assigns specific instruments to each character. The bassoon portrays Grandfather with its gravelly low register, plodding steps, and humorous scolding.",
    auditionSignificanceZh: "作为全球各大乐团初级/中级职业考试的常客，该片段主要考查演奏员的节奏稳定性（附点与后半拍休止）以及塑造特定音乐形象的叙事能力（Storytelling with tone）。",
    auditionSignificanceEn: "A staple in audition lists, testing exact rhythmic precision on dotted figures, crisp staccato release, and vivid theatrical characterization.",
    pedagogicalFocusZh: [
      "附点八分音符与十六分音符的精准时值，避免吹成三连音摇摆",
      "低音降B（B♭2）起音如皮靴踩在雪地上的扎实厚重质感",
      "休止符的利落收音，模拟老爷爷拄拐杖停顿时的唠叨神态",
      "跨八度跳进时音色一致性，不因换区而音色单薄"
    ],
    pedagogicalFocusEn: [
      "Rigid distinction between dotted-eighth/sixteenth vs triplet swing feel",
      "Rich and resonant low Bb2 attack mimicking heavy boot footsteps",
      "Clean silence on rests capturing the comedic pauses of an elderly scold",
      "Timbre consistency across the octave interval"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "附点节奏节拍器严苛对点",
        desc: "开启 80 BPM 节拍器，打十六分音符细分音（Subdivision）。确保每个附点八分音符占满3个十六分音符时值，第4个十六分音符精准到位。",
        focusNote: "B♭2 - D3 - F3 - B♭3"
      },
      {
        step: 2,
        title: "拄拐杖式的断奏触感",
        desc: "舌尖以坚实的触感点触双簧片，吐音短促有力但不粗糙，每个音头带有一种稳重的沉重感。",
        focusNote: "A3 / G3"
      },
      {
        step: 3,
        title: "戏剧性语调塑造",
        desc: "在第2-3小节模拟老爷爷叹气'哎呀，森林里有大灰狼！'的语调，尾音略带渐弱（decrescendo）。",
        focusNote: "F3 / C3"
      }
    ],
    faqs: [
      {
        qZh: "为什么吹奏老爷爷主题时容易把附点吹成摇摆三连音？",
        aZh: "这是因为初学者习惯用感觉打拍子。应将一拍细分为4个十六分音符（哒-啦-啦-哒），前三个是长音，第四个是短促后半拍，通过严格的细分节奏练习即可根治。",
        qEn: "Why do players accidentally swing the dotted rhythm?",
        aEn: "Relying on intuition rather than subdivision causes dotted notes to collapse into 6/8 triplets. Subdivide mentally into four 16ths to lock the exact 3:1 ratio."
      },
      {
        qZh: "《彼得与狼》大管老爷爷主题在乐团试音中处于什么评级？考官重点考察什么？",
        aZh: "该选段在乐团试音（Orchestral Auditions）中属必考的核心交响乐片段（Excerpt），对应业余考级约4-5级。试音考官重点考察低音区断音（Staccato）的发音清晰度、附点八分音符与十六分音符的时值严谨度，以及大管老爷爷蹒跚幽默的角色性格塑造。",
        qEn: "What audition level is the Grandfather theme from Peter and the Wolf, and what do audition panels listen for?",
        aEn: "While ranked around ABRSM Grade 4-5 in difficulty, this is a universal first-round orchestral audition excerpt. Panels listen for impeccably centered low-register articulation, strict non-swung dotted eighth/sixteenth subdivisions, and authentic comical narrative characterization."
      },
      {
        qZh: "吹奏老爷爷主题中的低音降B（B♭2）与低音F音时容易发虚或起音迟滞，有什么解决技巧？",
        aZh: "检查左手拇指是否完全盖严低音B♭键，且下唇不要紧压哨片。低音起音时下颌微落、口腔呈‘O’型共鸣，依靠瞬间凝聚的丹田横膈膜送气（气流支持）触发哨片震动，可使用较宽、前端稍薄的低音哨片提升低音发音敏感度。",
        qEn: "How do I fix sluggish response or airy tone on low Bb2 and F2 notes in the Grandfather theme?",
        aEn: "Ensure the left thumb forms an airtight seal on the low Bb spatula and keep the lower jaw dropped without biting the reed. Form an 'O'-shaped oral cavity and initiate articulation using clean abdominal air bursts rather than excess tongue pressure."
      }
    ],
    relatedSlugs: ["in-the-hall-of-the-mountain-king", "rite-of-spring-bassoon-solo", "telemann-bassoon-sonata-f-minor", "sorcerers-apprentice-bassoon", "mozart-bassoon-concerto-k191"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "breath-single-tongue-clean-attack", "fingering-low-bb-to-c-slur", "breath-extreme-dynamics-pp-ff", "reed-opening-wires", "reed-crow-pitch-tuning", "stage-seat-strap-posture"],
    relatedFingeringNotes: ["Bb1", "C2", "D2", "Eb2"],
    relatedOctave: "first",
    relatedTools: ["reedDoctor", "tuner", "metronome"]
  },

  // 3. RITE OF SPRING (Priority 3)
  {
    id: "s_orch5",
    slug: "rite-of-spring-bassoon-solo",
    titleZh: "斯特拉文斯基《春之祭》开篇大管极高音独奏 (引子完整全谱)",
    titleEn: "Stravinsky The Rite of Spring - Opening High Bassoon Solo (Complete Intro)",
    seoTitleZh: "春之祭开篇大管独奏乐谱 (Opening) · 免费PDF与高音C4指法试音指南 | BSN Lib",
    seoTitleEn: "Rite of Spring Bassoon Solo (Opening) – Free Sheet Music PDF | BSN Lib",
    metaDescZh: "免费获取斯特拉文斯基《春之祭》开篇第一大管独奏五线谱 PDF。详解极高音 C4 起音、古立陶宛牧歌原始音色塑造、交响乐团大管首席试音第一名必考秘诀。",
    metaDescEn: "Stravinsky's Rite of Spring opening bassoon solo (Audition Level). Download free printable sheet music PDF with high C4 fingering chart, audio track & excerpt guide.",
    keywordsZh: "春之祭大管独奏,春之祭引子大管乐谱,大管高音C4指法,斯特拉文斯基大管,大管试音第一名,Rite of Spring Bassoon,春之祭开篇,免费大管五线谱",
    keywordsEn: "Rite of Spring Bassoon Solo (Opening), Rite of Spring Opening Bassoon Solo, Rite of Spring Bassoon Solo Sheet Music, Rite of Spring Bassoon Sheet Music PDF, Stravinsky Rite of Spring Bassoon, High C4 Bassoon Fingering, Orchestral Audition Excerpt Bassoon, Free Printable Sheet Music PDF, Sacre du Printemps Bassoon",
    composer: "Igor Stravinsky (1882-1971)",
    composerEraZh: "20世纪先锋派 (Ballets Russes 巴黎首演, 1913年)",
    composerEraEn: "20th Century Avant-Garde (Premiered in Paris, 1913)",
    difficultyZh: "专业演奏级 / 职业乐团首席试音必考",
    difficultyEn: "Professional / Orchestral Principal Audition Benchmark",
    keySignature: "A Aeolian / 自由调式 (立陶宛古牧歌调式)",
    keySignatureEn: "A Aeolian / Modal",
    tempo: "Lento, tempo rubato (♩ = 50 自由慢板)",
    timeSignature: "4/4 (混合节拍与自由延音)",
    rangeNote: "E3 (中音E) 至 D4 (极高音D)",
    instrumentTypeZh: "交响乐首席大管无伴奏独奏 (Solo Bassoon Unaccompanied)",
    instrumentTypeEn: "Solo Bassoon Orchestral Exposition",
    historicalContextZh: "1913年5月29日，斯特拉文斯基的芭蕾舞剧《春之祭》在巴黎香榭丽舍剧院首演，开创了现代音乐的新纪元。全剧由一支孤独的第一大管在极高音区（High C4）吹出苍凉孤寂的古立陶宛民歌旋律开启。由于音区极高，当时连圣-桑（Saint-Saëns）都在首演现场惊呼：'如果那是大管，那我就是个小提琴！'，从此奠定了该段落作为大管史诗级篇章的地位。",
    historicalContextEn: "Premiered in Paris in 1913 by Diaghilev's Ballets Russes, The Rite of Spring began with a solitary high bassoon solo in its highest tessitura. Saint-Saëns famously stormed out questioning the instrument's identity. Today it remains the single most famous orchestral opening in woodwind history.",
    auditionSignificanceZh: "全球所有交响乐团招募'第一大管/首席大管（Principal Bassoon）'时的必考曲目第 1 题。考察乐手在巨大心理压力下的高音起音稳定性、极高音纯正音色、自由速度（Rubato）处理与极弱（ppp Morendo）控制力。",
    auditionSignificanceEn: "The undisputed #1 excerpt required for all Principal Bassoon auditions worldwide. Tests extreme high register response under pressure, cantabile lamentation, and breath control down to ppp morendo.",
    pedagogicalFocusZh: [
      "超高音 C4 无任何伴奏下的孤勇起音，下唇绝不能死咬簧片",
      "自由速度（Tempo rubato）下立陶宛古代牧歌的苍凉叙事感与停顿呼吸",
      "高音泛音键（High A/C vent keys）的精准配合与半孔开度控制",
      "末尾在 E3 上如旷野中逐渐消逝（Morendo至消失）的气息衰减控制"
    ],
    pedagogicalFocusEn: [
      "Confident, soft attack on extreme high C4 without clamping the reed",
      "Expressive rubato phrasing evoking ancient pagan folklore",
      "Precise vent key coordination and micro half-hole positioning",
      "Controlled decrescendo to silence (morendo) on the final E3"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "超高音 C4 的喉部狭窄通道与口型设定",
        desc: "口腔内呈'呜（Oo）'型，舌面后部微抬，哨片含入口中深度适中，依靠快速集中的高密度气流击发 C4，不可靠下巴咬死。",
        focusNote: "C4 (High C)"
      },
      {
        step: 2,
        title: "高音装饰音华彩的连贯平滑",
        desc: "在第2小节挑向高音 D4 时，左手食指半孔滚移必须平滑无缝，避免产生任何杂音或气泡音。",
        focusNote: "D4 (High D)"
      },
      {
        step: 3,
        title: "旷野消逝 (Morendo) 终音控制",
        desc: "第3小节回落到 E3 后，横膈膜保持强力支撑，缓缓减少气流量，直至音量自然融入空气中。",
        focusNote: "E3 (Morendo)"
      }
    ],
    faqs: [
      {
        qZh: "吹奏春之祭开篇高音 C4 起音经常发不出声或直接冒低八度音，该怎么调整？",
        aZh: "这是因为气速不够或左手泛音键按压不准。检查左手拇指是否精准打开高音 C 泛音键，且左手食指是否保持半孔状态。起音前嘴唇不要过度施压，腹部在起音前一刹那预先充压，以高流速气柱推入。",
        qEn: "Why does High C4 drop down an octave or fail to speak?",
        aEn: "Low air velocity and incorrect vent key venting are common culprits. Verify that the high C key is cleanly opened and the index finger is rolled properly. Build abdominal air pressure before releasing the tongue."
      },
      {
        qZh: "《春之祭》开头高音 D5 与 C5 换指时容易破音，有什么替代指法或吹嘴控制秘诀？",
        aZh: "吹奏春之祭最高音 D5 时，推荐使用专业高音 D 泛音键（High D key）配合左手食指半孔滚移。若使用德国传统指法，可尝试微提喉头、气流集中向上颚送气，嘴唇向哨片前端收拢2毫米，能显著降低破音概率。",
        qEn: "What alternate fingerings or embouchure tips prevent cracking on High D5/C5 in The Rite of Spring?",
        aEn: "Use the dedicated High D harmonic key on modern systems alongside a smooth left index half-hole roll. Slightly focus air upward against the hard palate with a forward-cushioned embouchure (taking 1-2mm less reed) to stabilize the delicate acoustic wave without pinching."
      },
      {
        qZh: "《春之祭》大管独奏在交响乐团试奏中属于什么难度级别？应选用什么弯管（Bocal）？",
        aZh: "这是全球交响乐团大管副首席及独奏席位的终极试金石（难度评级：专业演奏级/最高级）。建议选用 Heckel CC1 或 CC2 弯管（或 Yamaha 1号高音弯管），此类弯管高音阻尼适中、管壁共振高敏，能确保高音 C/D 的音准在偏高趋势中保持纯净稳定。",
        qEn: "What is the difficulty rating of the Rite of Spring bassoon solo, and what bocal is best suited?",
        aEn: "It is widely considered the ultimate pinnacle of orchestral bassoon audition excerpts (Conservatory Diploma / Professional Principal level). Renowned players favor Heckel CC1/CC2 or Yamaha 1-length bocals, which offer optimal upper-harmonic resistance and spot-on intonation for high C5 and D5."
      }
    ],
    relatedSlugs: ["peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "sorcerers-apprentice-bassoon", "scheherazade-kalendar-prince-cadenza", "mozart-bassoon-concerto-k191"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "bocal-selection-physics", "breath-extreme-dynamics-pp-ff", "breath-high-register-embouchure", "fingering-high-register-flick-keys"],
    relatedFingeringNotes: ["C5", "D5", "B4", "A4"],
    relatedOctave: "third",
    relatedTools: ["tuner", "drone", "breathSimulator"]
  },

  // 4. THE SORCERER'S APPRENTICE (Priority 4)
  {
    id: "s_orch2",
    slug: "sorcerers-apprentice-bassoon",
    titleZh: "杜卡斯《魔法师的学徒》大管经典扫帚复活动机 (9/8拍交响全谱)",
    titleEn: "Dukas The Sorcerer's Apprentice - Main Bassoon Motif (9/8 Scherzo)",
    seoTitleZh: "魔法师的学徒大管乐谱·扫帚复活动机9/8拍吐音与八度大跳解析 | BSN Lib",
    seoTitleEn: "Sorcerer's Apprentice Bassoon Sheet Music · Dukas Broom Motif & Audition Guide | BSN Lib",
    metaDescZh: "免费下载杜卡斯《魔法师的学徒》交响乐大管声部经典扫帚复活动机五线谱。9/8拍复合三连音律动、机械般精准断奏与跨八度音程瞬态咬合教学。",
    metaDescEn: "Free printable sheet music for Dukas's Sorcerer's Apprentice iconic bassoon broomstick motif. Master 9/8 compound staccato, rapid octave leaps, fingering coordination, and audition tips.",
    keywordsZh: "魔法师的学徒大管乐谱,魔法师学徒扫帚动机,大管交响乐试音必考,大管断奏练习,杜卡斯大管片段,Sorcerers Apprentice Bassoon",
    keywordsEn: "Sorcerer's Apprentice Bassoon Sheet Music, Bassoon Sorcerer's Apprentice, Sorcerers Apprentice Bassoon, Dukas Bassoon Excerpt, Broomstick Motif Sheet Music, Orchestral Audition Bassoon Staccato",
    composer: "Paul Dukas (1865-1935)",
    composerEraZh: "晚期浪漫主义 / 法国印象派交响名作 (1897年)",
    composerEraEn: "Late Romantic / French Impressionism (1897)",
    difficultyZh: "高级 / 考级7-9级 / 乐团大管齐奏必考",
    difficultyEn: "Advanced / Grade 7-9 / Orchestral Audition Standard",
    keySignature: "F Minor (f小调 · 4个降号)",
    tempo: "Vif (活泼欢快 · ♩. = 112-120)",
    timeSignature: "9/8 拍 (每小节三大拍)",
    rangeNote: "F2 (低音F) 至 G#3 (升G3)",
    instrumentTypeZh: "大管三重奏齐奏交响乐选段 (Bassoon Section Solo)",
    instrumentTypeEn: "Bassoon Section Orchestral Excerpt",
    historicalContextZh: "杜卡斯根据歌德同名叙事诗创作了这部谐谑曲《魔法师的学徒》（迪士尼《幻想曲》米老鼠施法篇的主题曲）。三支大管在低音区齐奏出一段极具机械感与诡异幽默色彩的断奏主题，惟妙惟肖地描绘被小魔法师赋予生命的魔法扫帚笨拙站起、左右摇晃着提水挑桶的滑稽情景。",
    historicalContextEn: "Based on Goethe's poem, Dukas's scherzo features a bassoon trio portraying an enchanted broom coming to life, carrying buckets of water. Made famous globally by Disney's Fantasia, it is one of the pinnacle woodwind excerpts.",
    auditionSignificanceZh: "乐团考题中考查快速复合三拍子（9/8拍）节奏律动感与超强手指爆发力的代表作。评委关注点在于每个八分音符的断音是否像机械齿轮般严丝合缝、大跳音程是否有杂音漏气。",
    auditionSignificanceEn: "A core audition piece testing rapid compound meter articulation, tongue-finger synchronicity, and pitch accuracy on rapid wide intervals.",
    pedagogicalFocusZh: [
      "9/8 拍复合拍子的强弱律动（强-弱-弱 / 次强-弱-弱 / 弱-弱-弱），避免平铺直叙",
      "快速单吐断奏（Staccato）短促有力，舌尖接触簧片极浅极快",
      "跨八度音程（F2 到 F3、C3 到 G#3）的瞬间指法切换与低音闭合",
      "乐段逐渐加速狂奔时的气息充沛与声部声效平衡"
    ],
    pedagogicalFocusEn: [
      "Dynamic hierarchy in 9/8 compound time (Strong-weak-weak pulses)",
      "Ultra-crisp light single tonguing with instantaneous reed release",
      "Rapid wide leaps (F2 to F3, C3 to G#3) without tonal cracking",
      "Sustained abdominal drive during accelerating frantic broom runs"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "9/8 拍三大拍重音律动定桩",
        desc: "先将附点四分音符设为 ♩. = 70，在心里默数'1-2-3, 2-2-3, 3-2-3'，只强调每拍第1个音，后两音轻盈收拢。",
        focusNote: "F2 - C3 - F3"
      },
      {
        step: 2,
        title: "机械齿轮式短断音点射",
        desc: "以干脆的舌尖点射发音，舌头不要在簧片上停留过久，保持音符间清晰的微休止空气间隔。",
        focusNote: "G#3 / F3"
      },
      {
        step: 3,
        title: "加速奔跑段落连贯衔接",
        desc: "逐步提速至 ♩. = 112，第3小节进入加速三连音时腹肌稳固收紧，气流推向最强（ff）。",
        focusNote: "B♭2 / F3"
      }
    ],
    faqs: [
      {
        qZh: "如何练习 9/8 拍快速大管吐音不累舌头？",
        aZh: "吐音疲劳往往是因为舌头幅度过大或用力过猛。练习时想象舌尖只是轻触漂浮的乒乓球，只动舌尖前三分之一，气流保持恒定向前推送，不要用舌头去'堵死'气流。",
        qEn: "How to avoid tongue fatigue in fast 9/8 staccato?",
        aEn: "Minimize tongue stroke distance to just the tip (front 1/3). Maintain continuous air support through the phrase rather than stopping the air column with each tongue strike."
      },
      {
        qZh: "《魔法师的学徒》大管片段在考级与乐团考试中属于几级？如何稳定 9/8 拍三连音律动？",
        aZh: "属于交响乐团职业试奏必考的高难度片段（对应英皇演奏文凭 LRSM / FRSM 等级）。9/8 拍每小节包含3个大拍（附点四分音符），练习时务必以大拍为基准打节拍器，避免数成散碎的9个八分音符，利用每拍第一音的微重音带动后两音飞驰。",
        qEn: "What is the audition difficulty of The Sorcerer's Apprentice bassoon excerpt, and how do I steady the 9/8 pulse?",
        aEn: "It is an elite professional audition excerpt (equivalent to LRSM/FRSM diploma level). The 9/8 meter consists of three dotted-quarter compound beats per measure; set your metronome to the dotted quarter rather than counting nine individual eighths to maintain relentless momentum."
      },
      {
        qZh: "吹奏跳音跑动时手指和舌头容易打架（不同步）怎么办？哨片应如何修整？",
        aZh: "手舌不同步的根源在于手指按键过迟。练习时采用‘先落指、后吐音’的附点微停顿法建立肌肉记忆。哨片方面，选用硬度为 Medium-Soft 或将哨片尖端两翼（Tip corners）轻刮薄半档，能大幅减轻舌尖反作用力，保证跳音干脆利落。",
        qEn: "How can I fix finger-tongue coordination issues in rapid staccato, and how should the reed be adjusted?",
        aEn: "Discrepancies happen when fingers lag behind the tongue. Practice with dotted rhythmic variations where fingers land slightly before the tongue releases. Use a medium-soft reed with lightly scraped tip corners to reduce tonguing fatigue and ensure razor-sharp response."
      }
    ],
    relatedSlugs: ["in-the-hall-of-the-mountain-king", "peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "tchaikovsky-swan-lake-little-swans", "rite-of-spring-bassoon-solo", "weissenborn-op8-no10-fast-staccato"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "reed-crow-pitch-tuning", "breath-double-tonguing-speed-drills", "practice-staccato-double-tonguing-clarity", "fingering-rh-thumb-roller-pivots"],
    relatedFingeringNotes: ["F2", "Ab2", "C3", "F3"],
    relatedOctave: "first",
    relatedTools: ["metronome", "reedDoctor", "tuner"]
  },

  // 5. SPIRITED AWAY (Priority 5)
  {
    id: "s3",
    slug: "spirited-away-always-with-me",
    titleZh: "久石让《千与千寻》永远同在 (大管温暖抒情长乐段完整全曲)",
    titleEn: "Joe Hisaishi Always With Me - Spirited Away (Warm Bassoon Solo)",
    seoTitleZh: "千与千寻大管乐谱·永远同在抒情五线谱与高音C4连音歌唱指引 | BSN Lib",
    seoTitleEn: "Always With Me Spirited Away Bassoon Sheet Music · Joe Hisaishi Solo | BSN Lib",
    metaDescZh: "免费下载宫崎骏《千与千寻》片尾曲《永远同在》大管温暖抒情独奏五线谱。16小节完整演奏谱、3/4拍圆舞曲歌唱连音（Legato）与制高点高音C4教学指引。",
    metaDescEn: "Download free Spirited Away Always With Me sheet music for bassoon solo. Master Joe Hisaishi's warm melodic lines, 3/4 cantabile legato, and High C4 peak expression.",
    keywordsZh: "千与千寻大管乐谱,永远同在巴松谱,久石让大管独奏,动漫大管简谱五线谱,巴松初学经典名曲,Always With Me Bassoon",
    keywordsEn: "Spirited Away Bassoon, Always With Me Sheet Music, Joe Hisaishi Bassoon, Anime Bassoon Solo, Ghibli Bassoon",
    composer: "久石让 / 木村弓 (Joe Hisaishi / Yumi Kimura)",
    composerEraZh: "现代影视动漫交响名曲 (吉卜力经典, 2001年)",
    composerEraEn: "Contemporary Studio Ghibli Masterpiece (2001)",
    difficultyZh: "初级入门 / 考级2-3级 / 少儿与成人初学最爱",
    difficultyEn: "Beginner-Intermediate / Grade 2-3 / Popular Repertoire",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Andante Cantabile (抒情如歌 · ♩ = 84-90)",
    timeSignature: "3/4 拍 (优美圆舞曲律动)",
    rangeNote: "C3 (中央C下一八度) 至 D4 (高音D)",
    instrumentTypeZh: "大管抒情独奏与伴奏谱 (Solo Bassoon Melodic)",
    instrumentTypeEn: "Lyrical Bassoon Solo with Piano Accompaniment",
    historicalContextZh: "宫崎骏奥斯卡最佳动画长片《千与千寻》主题曲《永远同在》（いつも何度でも）。大管温润如大提琴与人声般真挚的音色，完美诠释了千寻在成长历程中的纯真、勇敢与对美好回忆的深情眷恋。该曲是各大音乐厅管乐沙龙、初学者展演与少儿音乐会中最受欢迎的演奏曲目。",
    historicalContextEn: "The Oscar-winning theme from Miyazaki's Spirited Away. The bassoon's cello-like warmth and expressive vocal timbre capture the poignant nostalgia and youthful courage of Chihiro's journey, making it a beloved performance piece.",
    auditionSignificanceZh: "常作为初级音乐考级、学校乐团选拔与室内乐表演的自选独奏曲目，重点考察演奏者的长音圆滑连音（Legato）连贯度、如歌的乐句呼吸与弱音纯净度。",
    auditionSignificanceEn: "A premier showcase piece for school auditions and recitals, evaluating lyrical tone quality, legato phrasing, and subtle vibrato control.",
    pedagogicalFocusZh: [
      "3/4 拍抒情圆舞曲的摇曳律动，第1拍沉稳深情，后两拍轻柔托起",
      "全音域圆滑连音（Legato）如丝绸般无缝连接，换指时严禁破音断音",
      "第6小节与第10小节乐句高潮处高音 C4 与 D4 的饱满共鸣与气流支撑",
      "第16小节极弱（pp）完满收官，长音渐弱至极微依然保持音准稳定"
    ],
    pedagogicalFocusEn: [
      "Graceful 3/4 waltz lilt with expressive warmth on downbeats",
      "Seamless cantabile legato across registers without key-clicking noise",
      "Tonal projection on high C4 and D4 expressive focal peaks",
      "Controlled pp decrescendo on the final tonic resolution"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "3/4 拍如歌长音呼吸定调",
        desc: "以 ♩ = 84 速度吹奏，每4小节为一个完整呼吸乐句，在第4、第8、第12小节末尾从容深吸气。",
        focusNote: "C3 - E3 - G3 - A3"
      },
      {
        step: 2,
        title: "副歌制高点高音 C4 气流托底",
        desc: "在第6小节进入全曲制高点 C4 时，下唇保持微卷松弛，依靠腹部核心气流向上顶托，呈现明亮温暖的高音音色。",
        focusNote: "C4 (High C peak)"
      },
      {
        step: 3,
        title: "宁静温暖的尾声长音收束",
        desc: "第15-16小节回到低音 C3，音量由 mf 逐渐降至 pp，保持气流纯净直至全曲完满终结。",
        focusNote: "C3 (Warm Pianissimo)"
      }
    ],
    faqs: [
      {
        qZh: "大管吹奏《千与千寻》这种抒情曲目时，如何让音色听起来像歌唱一样优美？",
        aZh: "关键在于'气先于音'与'音音相连'。吹奏连音时气流要像一条连续不断的水平线，手指只是在气流线上轻柔改变音孔，喉部保持完全放松，尾音不要突然下坠断气。",
        qEn: "How to make the bassoon sing like human voice on lyrical anime songs?",
        aEn: "Think of your airflow as a continuous horizontal ribbon of air. Your fingers simply redirect the air without interrupting it. Keep the throat open and maintain breath support right through the release."
      },
      {
        qZh: "《千与千寻·永远同在》适合几级大管学员学习？在音乐会表演中有何效果？",
        aZh: "适合大管考级2-4级初中阶学员作为趣味抒情曲目练习。全曲音域主要在中低音区（F2至G3），旋律线条优美易记，极为适合在汇报演出、室内乐重奏或独奏音乐会中展示大管如大提琴般温暖纯正的歌唱性音色。",
        qEn: "What grade level is Spirited Away 'Always with Me' for bassoon, and is it suitable for recitals?",
        aEn: "It is ideally suited for early intermediate students (ABRSM Grades 2-4). The melody resides in the warm middle-to-low register (F2 to G3), making it an outstanding lyrical showcase for student recitals and school concerts with piano accompaniment."
      },
      {
        qZh: "吹奏抒情长乐句时气息不够用，中途如何合理偷气而不破坏旋律连贯？",
        aZh: "在乐句的弱拍连线空隙处（如两小节乐意结尾的四分音符后）迅速利用鼻口联合‘偷气’半口。吸气时保持喉咙打开，避免起音时的气流冲击音；吹奏时腹横肌保持持续外顶的张力，使弱音（p）弱而不虚。",
        qEn: "How do I manage breathing without interrupting the long lyrical phrases in 'Always with Me'?",
        aEn: "Take quick 'catch-breaths' at structural phrase cadences after tied notes using an open throat. Maintain active abdominal wall expansion throughout to keep piano passages supported and singing rather than dropping in pitch."
      }
    ],
    relatedSlugs: ["twinkle-twinkle-little-bassoon", "pink-panther-jazz-theme", "weissenborn-op8-no1-tone-method", "weissenborn-op8-no15-andante-cantabile"],
    relatedArticleIds: ["practice-interval-embouchure-relaxation", "practice-dynamic-range-pp-ff-stability", "reed-resistance-scraping", "stage-seat-strap-posture"],
    relatedFingeringNotes: ["F3", "G3", "A3", "Bb3", "C4"],
    relatedOctave: "second",
    relatedTools: ["drone", "tuner", "camp"]
  },

  // 6. WEBER BASSOON CONCERTO OP.75
  {
    id: "s_weber",
    slug: "weber-bassoon-concerto-op75",
    titleZh: "韦伯 F大调大管协奏曲 Op.75 第一乐章 (庄严快板独奏呈示)",
    titleEn: "Weber Bassoon Concerto in F Major Op.75 - Allegro ma non troppo",
    seoTitleZh: "韦伯大管协奏曲Op.75乐谱·第一乐章庄严快板五线谱与考级精讲 | BSN Lib",
    seoTitleEn: "Weber Bassoon Concerto Op.75 Sheet Music · Allegro Solo Exposition | BSN Lib",
    metaDescZh: "免费下载韦伯 F大调大管协奏曲 Op.75 第一乐章独奏呈示部高清乐谱。兼具进行曲威严与歌剧咏叹调深情，附大跳音程与浪漫主义风格演奏指南。",
    metaDescEn: "Free Weber Bassoon Concerto in F Major Op.75 sheet music. Explore the regal military march rhythm, operatic cantabile, and wide register leaps with audio player.",
    keywordsZh: "韦伯大管协奏曲,韦伯Op75乐谱,大管浪漫派名作,大管考级高级曲目,Weber Bassoon Concerto",
    keywordsEn: "Weber Bassoon Concerto, Weber Op75 Bassoon, Classical Woodwind Concerto, Bassoon Exam Score",
    composer: "Carl Maria von Weber (1786-1826)",
    composerEraZh: "早期浪漫主义时期 (1811年创作于慕尼黑)",
    composerEraEn: "Early Romantic Era (Composed in Munich, 1811)",
    difficultyZh: "高级 / 考级7-9级 / 音乐学院经典必考",
    difficultyEn: "Advanced / Grade 7-9 / Conservatory Standard",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Allegro ma non troppo (庄严适度快板 · ♩ = 96-104)",
    timeSignature: "4/4 拍",
    rangeNote: "F2 (低音F) 至 F4 (高音F)",
    instrumentTypeZh: "大管协奏曲独奏 (Bassoon Concerto Solo)",
    instrumentTypeEn: "Bassoon Concerto Solo",
    historicalContextZh: "韦伯于 1811 年为慕尼黑宫廷大管大师格奥尔格·弗里德里希·布兰特（Georg Friedrich Brandt）创作了这部旷世巨作。作品充满德意志浪漫派的戏剧性张力与歌剧色彩，开篇附点如军鼓般威风凛凛，随后瞬间转入柔情似水的歌唱性旋律，极富舞台魅力。",
    historicalContextEn: "Written in 1811 for the Munich court bassoonist Georg Friedrich Brandt, Weber's concerto is one of the pillars of the romantic bassoon literature, pairing military vigor with bel canto operatic lyricism.",
    auditionSignificanceZh: "国内外各大音乐学院专业附中与大学本科入学考试的高频必选曲目，也是国际管乐比赛中考查浪漫派综合技巧与音乐修养的核心作品。",
    auditionSignificanceEn: "A top-tier conservatory audition piece testing rapid dynamic shifts, march articulation, and passionate romantic phrasing.",
    pedagogicalFocusZh: [
      "附点军乐动机的挺拔与果断，附点八分音符与十六分音符绝不拖泥带水",
      "由极强（f）威武断奏瞬间切换至极弱（p Dolce）歌剧咏叹调的音色掌控",
      "跨两个八度的大跳音准与口型平衡"
    ],
    pedagogicalFocusEn: [
      "Crisp dotted march rhythm with military precision",
      "Instant tonal transformation from martial forte to dolce operatic cantabile",
      "Pitch stabilization across wide two-octave interval jumps"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "军乐附点节拍对位",
        desc: "以 ♩ = 84 慢练前两小节，附点音符铿锵有力，跳音如击剑般干脆利落。",
        focusNote: "F2 - A2 - C3 - F3"
      },
      {
        step: 2,
        title: "第3小节极柔音色突变",
        desc: "进入第3小节时下唇瞬间放松，以温暖圆润的低音 F2 展开歌唱乐句。",
        focusNote: "F2 (Dolce)"
      }
    ],
    faqs: [
      {
        qZh: "韦伯协奏曲与莫扎特协奏曲在演奏风格上有何最大区别？",
        aZh: "莫扎特强调古典主义的轻盈、典雅与克制；而韦伯则具有浓烈的浪漫派戏剧性，强弱对比更夸张，附点更加威严，抒情段落需要更多的揉音与歌剧般的情感起伏。",
        qEn: "What is the key stylistic difference between Mozart K.191 and Weber Op.75?",
        aEn: "Mozart demands classical elegance, poise, and restraint; Weber requires romantic bravura, dramatic contrasts between martial vigor and operatic expressiveness."
      },
      {
        qZh: "韦伯大管协奏曲 Op.75 处于什么考级与专业比赛级别？第一乐章速度如何拿捏？",
        aZh: "该曲与莫扎特 K.191 并列为大管协奏曲双璧，是 ABRSM 8级、DipABRSM 文凭及各大国际比赛选拔必考曲目。第一乐章为灿烂的庄严快板（Allegro ma non troppo），建议速度 ♩ = 108-116，兼具德奥古典严谨与浪漫主义歌剧戏剧性。",
        qEn: "What level is Weber Bassoon Concerto Op.75 in exams and international competitions?",
        aEn: "Alongside Mozart K.191, Weber Op.75 is the cornerstone of advanced bassoon repertoire (ABRSM Grade 8 / DipABRSM / LRSM). The first movement is an Allegro ma non troppo (recommended ♩ = 108-116), demanding brilliant operatic drama paired with rhythmic discipline."
      },
      {
        qZh: "韦伯第一乐章中的八度分解三连音大跳容易按错拇指键，指法上有什么防滑口诀？",
        aZh: "检查右手大拇指在低音B♭、B、C和F#各按键之间的平滑滑移，掌心保持放松半弧形。在向上大跳至高音区时，左手大拇指提前悬停在A/C泛音键上方1毫米，起音瞬间精准点按泛音键助推超吹泛音产生。",
        qEn: "How do I navigate rapid octave arpeggio jumps and thumb key switches in Weber Op.75?",
        aEn: "Keep the right thumb relaxed in a rounded curvature without clamping. When leaping into the upper octave, keep the left thumb hovering directly above the speaker (flick) keys to vent momentarily, triggering immediate harmonic speaking without register cracking."
      }
    ],
    relatedSlugs: ["mozart-bassoon-concerto-k191", "telemann-bassoon-sonata-f-minor", "peter-and-the-wolf-grandfather", "weissenborn-op8-no15-andante-cantabile", "sorcerers-apprentice-bassoon"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "fingering-high-register-flick-keys", "practice-slow-practice-muscle-memory", "theory-bass-tenor-clef"],
    relatedFingeringNotes: ["F2", "C4", "D4", "F4"],
    relatedOctave: "second",
    relatedTools: ["tuner", "metronome", "drone"]
  },

  // 7. TELEMANN BASSOON SONATA IN F MINOR
  {
    id: "s_telemann",
    slug: "telemann-bassoon-sonata-f-minor",
    titleZh: "泰勒曼 f小调大管奏鸣曲 TWV 41:f1 第一乐章 (Triste 忧伤而高贵的广板)",
    titleEn: "Telemann Bassoon Sonata in F Minor TWV 41:f1 - Triste (Complete)",
    seoTitleZh: "泰勒曼f小调大管奏鸣曲乐谱 (TWV 41:f1) · 免费独奏PDF与通奏低音伴奏 | BSN Lib",
    seoTitleEn: "Telemann Bassoon Sonata in F Minor (TWV 41:f1) – Free Sheet Music PDF | BSN Lib",
    metaDescZh: "免费下载泰勒曼 f小调大管奏鸣曲第一乐章（Triste 忧伤的广板，考级6-7级）高清五线谱 PDF。附 4 个降号指法难点卡、巴洛克倚音装饰指南与钢琴/通奏低音伴奏音频。",
    metaDescEn: "Telemann Bassoon Sonata in F minor TWV 41:f1 (Grade 6-7). Download free solo sheet music PDF with continuo audio track, 4-flat fingering guide & ornament tips.",
    keywordsZh: "泰勒曼大管奏鸣曲,f小调大管奏鸣曲,巴洛克大管乐谱,大管考级中级曲目,Telemann Bassoon Sonata,免费大管谱PDF",
    keywordsEn: "Telemann Bassoon Sonata in F Minor (TWV 41:f1), Telemann Bassoon Sonata, F Minor Bassoon Sonata, Baroque Bassoon Solo, TWV 41:f1 Sheet Music, Free Bassoon Sheet Music PDF, Telemann Triste Bassoon, Basso Continuo Audio Accompaniment",
    composer: "Georg Philipp Telemann (1681-1767)",
    composerEraZh: "巴洛克时期 (Baroque Era, 1728年刊登于《音乐忠实大师》)",
    composerEraEn: "Baroque Era (Published in Der getreue Music-Meister, 1728)",
    difficultyZh: "中高级 / 考级6-7级 / 巴洛克必考",
    difficultyEn: "Intermediate-Advanced / Grade 6-7 / Baroque Repertoire",
    keySignature: "F Minor (f小调 · 4个降号)",
    tempo: "Triste (忧伤的广板 · ♩ = 56-62)",
    timeSignature: "4/4 拍",
    rangeNote: "F2 (低音F) 至 F3 (中音F)",
    instrumentTypeZh: "大管与通奏低音奏鸣曲 (Sonata with Continuo)",
    instrumentTypeEn: "Bassoon Sonata with Basso Continuo",
    historicalContextZh: "泰勒曼于 1728 年在其主编的音乐期刊《音乐忠实大师》上发表了这部传世之作。f 小调深沉忧郁、充满哲思的和声织体，使大管在巴洛克时期彻底摆脱低音伴奏配角，展现出如大提琴般高贵的独奏咏叹气质。",
    historicalContextEn: "Published in 1728 in Der getreue Music-Meister, Telemann's F minor sonata is one of the earliest masterworks celebrating the bassoon's melancholy vocal elegance.",
    auditionSignificanceZh: "考级与试奏中检验演奏者对巴洛克风格理解（揉音幅度、倚音时值与和声色彩）的标准曲目。",
    auditionSignificanceEn: "A benchmark for evaluating Baroque stylistic authenticity, nuance in appoggiatura execution, and sustained tone.",
    pedagogicalFocusZh: [
      "f小调 4 个降号（B♭, E♭, A♭, D♭）复杂音孔按压与音准稳定",
      "巴洛克倚音（Appoggiatura）的柔和揉进与解决",
      "叹息音型（Seufzer）中由强渐弱的呼吸微动态"
    ],
    pedagogicalFocusEn: [
      "Clean execution of four-flat key signature (Bb, Eb, Ab, Db)",
      "Expressive appoggiatura leaning and gentle resolution",
      "Sighing motif dynamics (Messa di voce swelling and receding)"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "4降号指法顺滑过渡",
        desc: "重点练习降D3与降A2指法，确保左手小指与右手拇指按键闭合严密不漏气。",
        focusNote: "D♭3 / A♭2"
      }
    ],
    faqs: [
      {
        qZh: "吹奏巴洛克慢乐章时应该如何处理揉音（Vibrato）？",
        aZh: "巴洛克时期揉音是一种装饰手段（Ornamentation），而非现代浪漫派的持续揉音。建议在长音的中后段自然加入轻微的横膈膜气流揉音，音头保持纯净直音。",
        qEn: "How to apply vibrato in Baroque bassoon music?",
        aEn: "Baroque vibrato should be used as a deliberate expressive ornament rather than continuous wobble. Start long notes with a pure, straight tone and add a gentle warmth toward the note's peak."
      },
      {
        qZh: "泰勒曼《f小调大管奏鸣曲》TWV 41:f1 属于几级考级曲目？巴洛克音型重音有何讲究？",
        aZh: "该曲是英皇考级 6-7 级以及高校本科入学考试常备的巴洛克器乐典范。在巴洛克风格中，强拍（Good Notes）音量饱满，弱拍（Bad Notes）轻盈收尾；连线音通常前重后轻，不可吹成浪漫派式平铺直叙的等强音量。",
        qEn: "What grade level is Telemann Sonata in F minor TWV 41:f1, and how should Baroque metric accents be shaped?",
        aEn: "It is an ABRSM Grade 6-7 and undergraduate entrance staple. Baroque performance practice demands distinction between strong (noble) and weak notes: stress the downbeat with gentle decay on the offbeat, avoiding romanticized continuous uniform dynamics."
      },
      {
        qZh: "吹奏 f小调乐章时，低音区 C# / Db 音高容易偏高偏刺耳，如何校正？",
        aZh: "f小调中频现的低音 C#3（降D3）常偏高。指法上确保右手中指与小指下键紧密配合，下唇微向外松出半毫米释放哨片阻尼；口腔内形成类似打哈欠的深沉共鸣，配合本站调音器与持续无人机低音（Drone C/F）校正泛音纯律。",
        qEn: "How can I tame the sharp, bright intonation on low C#3/Db3 in Telemann's F minor Sonata?",
        aEn: "Low C#3 tends to register sharp on most bassoon bore designs. Relax embouchure pressure slightly forward by 0.5mm, expand a warm 'yawn' pharyngeal cavity, and practice against our F-minor tonic drone to match pure fifths."
      }
    ],
    relatedSlugs: ["peter-and-the-wolf-grandfather", "rite-of-spring-bassoon-solo", "mozart-bassoon-concerto-k191", "weber-bassoon-concerto-op75", "weissenborn-op8-no15-andante-cantabile"],
    relatedArticleIds: ["theory-bass-tenor-clef", "theory-intonation-tendency-chart", "breath-vibrato-mechanics", "bocal-length-temperature-pitch", "care-vacuum-leak-testing", "breath-diaphragmatic-support", "reed-crow-pitch-tuning"],
    relatedFingeringNotes: ["F2", "Ab2", "C3", "Db3", "Eb3"],
    relatedOctave: "first",
    relatedTools: ["drone", "tuner", "reedDoctor"]
  },

  // 8. IN THE HALL OF THE MOUNTAIN KING
  {
    id: "s_orch1",
    slug: "in-the-hall-of-the-mountain-king",
    titleZh: "格里格《培尔·金特》在山魔王的宫殿里 (大管主导完整乐段)",
    titleEn: "Grieg In the Hall of the Mountain King (Complete Bassoon Theme)",
    seoTitleZh: "在山魔王的宫殿里大管乐谱·格里格极弱跳音与渐强名段精解 | BSN Lib",
    seoTitleEn: "In the Hall of the Mountain King Bassoon Sheet Music · Grieg Theme & Staccato Guide | BSN Lib",
    metaDescZh: "免费下载格里格《在山魔王的宫殿里》大管主旋律五线谱。极弱（pp）断奏蹑手蹑脚触感、渐强加速（Accelerando）与交响乐团试音解析。",
    metaDescEn: "Free printable sheet music for Grieg's In the Hall of the Mountain King bassoon theme. Master pianissimo (pp) staccato, accelerando finger control, and audition tips.",
    keywordsZh: "山魔王的宫殿大管乐谱,培尔金特大管片段,格里格大管独奏,大管跳音练习,交响乐必考大管,Mountain King Bassoon",
    keywordsEn: "In the Hall of the Mountain King Bassoon Sheet Music, Mountain King Bassoon, Peer Gynt Bassoon Excerpt, Grieg Bassoon Solo, Staccato Bassoon Sheet Music, Orchestral Audition",
    composer: "Edvard Grieg (1843-1907)",
    composerEraZh: "民族乐派 / 浪漫主义时期 (1875年创作)",
    composerEraEn: "Nationalist Romantic Era (1875)",
    difficultyZh: "进阶 / 考级4-5级 / 乐团选拔经典",
    difficultyEn: "Intermediate / Grade 4-5 / Orchestral Excerpt",
    keySignature: "B Minor (b小调 · 2个升号)",
    tempo: "Alla marcia e molto marcato (♩ = 80 加速至 140)",
    timeSignature: "4/4 拍",
    rangeNote: "B2 (低音B) 至 F#3 (升F3)",
    instrumentTypeZh: "大管与低音提琴齐奏乐团动机 (Orchestral Bassoon Theme)",
    instrumentTypeEn: "Orchestral Bassoon Theme",
    historicalContextZh: "格里格为易卜生诗剧《培尔·金特》创作的经典配乐。在山魔王的黑暗洞穴中，大管以极弱（pp）的断奏开启了妖怪群魔乱舞的神秘脚步，全曲随着速度不断加快与力度持续爆发，将现场气氛推向狂热的顶峰。",
    historicalContextEn: "Grieg's incidental music depicts trolls gathering in the Mountain King's cave. The bassoon begins pianissimo with cautious tiptoeing steps, building into a manic crescendo and accelerando.",
    auditionSignificanceZh: "乐团考试中考查从极弱（pp）到极强（ff）动态控制力与加速过程中节拍稳定度的绝佳考题。",
    auditionSignificanceEn: "A frequent audition excerpt testing strict dynamic range from true pp to roaring ff and tempo control during accelerando.",
    pedagogicalFocusZh: [
      "初始力度严格限制在极弱（pp），每个八分音符跳音像针尖一样短促轻巧",
      "b小调升F3与升C3半音阶跳进的音准",
      "渐强与加速过程中心理不慌乱，手指动作依然紧凑贴键"
    ],
    pedagogicalFocusEn: [
      "Strict pianissimo staccato attack with needle-sharp articulation",
      "Pitch accuracy on B minor accidentals (F#3 and C#3)",
      "Controlled accelerando without losing finger economy"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "极弱跳音针尖点触",
        desc: "以 80 BPM 开始练习，舌尖以最小幅度触碰簧片顶端，发出清晰而微弱的断音。",
        focusNote: "B2 - C#3 - D3 - E3"
      }
    ],
    faqs: [
      {
        qZh: "吹奏极弱（pp）断音时总是容易漏气或不出声怎么办？",
        aZh: "极弱并不等于没有气流。必须保持腹部核心强有力的支撑（气压高但出气孔小），嘴唇轻柔含簧，舌头轻快释放即可。",
        qEn: "How to avoid air leaks or missed notes in soft staccato?",
        aEn: "Pianissimo requires strong core air compression with a controlled air release, not less air pressure. Keep the embouchure gentle and tongue lightly."
      },
      {
        qZh: "《在山魔王的宫殿》大管片段属于什么难度？乐曲逐渐加速（Accelerando）时如何保持节拍不乱？",
        aZh: "属于考级4-6级及青年交响乐团试音代表曲目。全曲结构是由极慢极弱（pp, ♩=60）逐步推进到极快极强（fff, ♩=144）。练习时严禁盲目加速，必须使用交互伴奏在每个速度阶梯（如 60-80-100-120-140）建立稳定的重音骨架。",
        qEn: "What is the difficulty level of In the Hall of the Mountain King, and how do I manage the extreme accelerando?",
        aEn: "It corresponds to ABRSM Grades 4-6 and youth orchestra placement exams. The musical challenge lies in transforming a pianissimo crawl (♩=60) into a frantic gallop (♩=144). Step-practice with metronomic increments (60-80-100-120-144) to keep articulation clean."
      },
      {
        qZh: "乐曲后半段低音区跳进速度极快，小指键位切换不过来怎么办？",
        aZh: "当遇到连续的低音F、G、A跳跃时，右手小指可保持在低音F键就位，运用右大拇指的低音F#替代键（若管身配置）或保持手腕放松避免手掌死按，同时哨片前端应修整出弹性适中的脊柱（Spine）以支撑大音量爆发。",
        qEn: "How do I handle rapid low-register pinky switches during the climactic measures?",
        aEn: "Keep the right wrist relaxed and avoid lifting fingers high above the tone holes. Check pinky spatula roller friction and use a responsive reed with a firm heart and flexible tip so fortissimo articulation speaks instantly."
      }
    ],
    relatedSlugs: ["peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "rite-of-spring-bassoon-solo", "sorcerers-apprentice-bassoon", "tchaikovsky-swan-lake-little-swans", "weissenborn-op8-no3-staccato"],
    relatedArticleIds: ["breath-extreme-dynamics-pp-ff", "theory-orchestral-excerpts-preparation", "reed-crow-pitch-tuning", "practice-staccato-double-tonguing-clarity", "reed-staccato-tongue-speed-rebound"],
    relatedFingeringNotes: ["B2", "C#3", "D3", "E3", "F#3"],
    relatedOctave: "first",
    relatedTools: ["metronome", "tuner", "camp"]
  },

  // 9. TCHAIKOVSKY SWAN LAKE
  {
    id: "s_orch3",
    slug: "tchaikovsky-swan-lake-little-swans",
    titleZh: "柴可夫斯基《天鹅湖》四小天鹅舞曲 (双大管伴奏与主题完整全谱)",
    titleEn: "Tchaikovsky Swan Lake - Dance of the Little Swans (Bassoon Duet)",
    seoTitleZh: "天鹅湖四小天鹅舞曲大管乐谱·柴可夫斯基双大管跳音伴奏精讲 | BSN Lib",
    seoTitleEn: "Swan Lake Bassoon Sheet Music (Dance of the Little Swans) – Free Sheet Music PDF | BSN Lib",
    metaDescZh: "免费下载柴可夫斯基《四小天鹅舞曲》双大管完整乐谱。芭蕾足尖点地轻盈八分跳音、双声部和声同步与经典交响乐伴奏指引。",
    metaDescEn: "Free printable sheet music for Tchaikovsky's Swan Lake bassoon accompaniment (Dance of the Little Swans). Master light staccato, dual bassoon unison, and ballet tempo stability.",
    keywordsZh: "四小天鹅大管乐谱,天鹅湖大管片段,柴可夫斯基大管双重奏,大管跳音芭蕾伴奏,Swan Lake Bassoon",
    keywordsEn: "Swan Lake Bassoon, Swan Lake Bassoon Sheet Music, Dance of the Little Swans Bassoon, Tchaikovsky Bassoon Excerpt, Bassoon Duet Sheet Music",
    composer: "Pyotr Ilyich Tchaikovsky (1840-1893)",
    composerEraZh: "俄罗斯浪漫主义芭蕾名作 (1876年)",
    composerEraEn: "Russian Romantic Ballet (1876)",
    difficultyZh: "中级进阶 / 考级4-5级 / 室内乐重奏",
    difficultyEn: "Intermediate / Grade 4-5 / Chamber & Orchestral",
    keySignature: "F# Minor (升f小调 · 3个升号)",
    tempo: "Allegro moderato (中庸快板 · ♩ = 104-112)",
    timeSignature: "4/4 拍",
    rangeNote: "F#2 (升F2) 至 G3 (中音G)",
    instrumentTypeZh: "双大管声部伴奏与旋律 (Bassoon Duet & Section)",
    instrumentTypeEn: "Bassoon Section / Duet",
    historicalContextZh: "芭蕾舞剧《天鹅湖》第二幕中最著名的名场面。四只小天鹅手拉手跳出整齐划一的足尖舞步，大管在低音声部提供极富弹性、轻快如弹簧般的八分音符伴奏，是管弦乐配器中的天才之作。",
    historicalContextEn: "Tchaikovsky's choreography for the four cygnets crossing their arms is universally known. The bassoons provide the energetic, spring-like rhythmic engine beneath the oboe melodies.",
    auditionSignificanceZh: "考查大管乐手在乐团中担当伴奏骨架时的节拍稳定性与双簧声部配合默契度。",
    auditionSignificanceEn: "Tests precision rhythm playing and dynamic sensitivity when accompanying primary solo woodwinds.",
    pedagogicalFocusZh: [
      "八分音符断音严格保持一半时值，体现轻盈的芭蕾足尖点地感",
      "双大管声部和声同步，不抢拍不拖拍",
      "升F2与升C3指法平稳流畅"
    ],
    pedagogicalFocusEn: [
      "Strict half-value eighth-note staccato capturing tiptoe ballet elegance",
      "Synchronized section blend without rushing tempo",
      "Fluid fingers on F#2 and C#3 accidentals"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "足尖弹簧八分音符练习",
        desc: "以 100 BPM 节拍器练习，每个跳音短促清脆，强弱始终保持在 mf 与 p 之间。",
        focusNote: "F#2 - A2 - C#3"
      }
    ],
    faqs: [
      {
        qZh: "为什么吹奏四小天鹅伴奏时容易越吹越快（赶拍子）？",
        aZh: "连续的短跳音容易诱发手指冲动。练习时心里要始终默数均匀的四分音符大拍，将注意力放在重拍落点上，保持身体节奏沉稳。",
        qEn: "Why is it easy to rush the tempo in Little Swans?",
        aEn: "Repetitive staccatos trigger finger rushing. Mentally ground yourself in the quarter-note downbeats and keep the internal pulse relaxed."
      },
      {
        qZh: "《四小天鹅舞曲》大管伴奏在乐团试奏中属于几级？考官重点考察大管声部的什么素质？",
        aZh: "对应考级5-6级，是歌剧舞剧交响乐团（Ballet Orchestra）大管考入团试奏的必检片段。考官首要听察伴奏织体的‘钟摆般精准律动’与两支大管八度重叠时的音色融合度，要求音头整齐划一、绝不允许任何节拍摇晃。",
        qEn: "What audition standard does the Dance of the Little Swans represent, and what do conductors look for?",
        aEn: "Ranked around ABRSM Grade 5-6, it is a staple for ballet orchestra auditions. Conductors look for clockwork metronomic precision and pristine pitch blend with the second bassoon, demanding uniform articulation and zero rushing."
      },
      {
        qZh: "全曲都是连绵不断的八分音符断音，吹到第16小节舌根酸胀怎么办？",
        aZh: "不要完全用舌根肌肉去机械‘戳’哨片。采用‘轻触即放’（Light Brush）的舌尖微动法，大部分断音动力来自横膈膜的微震颤（腹部脉冲），舌尖只起到瞬时闸门作用，可有效消除舌头酸累。",
        qEn: "How do I prevent tongue muscle cramp during the continuous staccato measures of Little Swans?",
        aEn: "Avoid heavy, percussive tongue thrusts. Rely on subtle abdominal breath pulses to drive the sound while the tip of the tongue merely brushes the reed's tip like a release valve, preventing tongue fatigue."
      }
    ],
    relatedSlugs: ["in-the-hall-of-the-mountain-king", "sorcerers-apprentice-bassoon", "peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "pink-panther-jazz-theme"],
    relatedArticleIds: ["theory-orchestral-excerpts-preparation", "breath-double-tonguing-speed-drills", "practice-staccato-double-tonguing-clarity", "reed-crow-pitch-tuning", "fingering-rh-thumb-roller-pivots"],
    relatedFingeringNotes: ["F#3", "G#3", "A3", "B3", "C#4"],
    relatedOctave: "second",
    relatedTools: ["metronome", "tuner", "drone"]
  },

  // 10. SCHEHERAZADE CADENZA
  {
    id: "s_scheherazade",
    slug: "scheherazade-kalendar-prince-cadenza",
    titleZh: "里姆斯基-科萨科夫《天方夜谭》卡兰达王子大管华彩 (交响华彩独奏全谱)",
    titleEn: "Rimsky-Korsakov Scheherazade - The Kalendar Prince Bassoon Cadenza",
    seoTitleZh: "天方夜谭大管华彩乐谱·里姆斯基科萨科夫卡兰达王子独奏精讲 | BSN Lib",
    seoTitleEn: "Scheherazade Bassoon Cadenza Sheet Music · Rimsky-Korsakov | BSN Lib",
    metaDescZh: "免费下载里姆斯基-科萨科夫《天方夜谭》卡兰达王子大管华彩独奏五线谱。三十二分音符快速异域琶音、双吐技巧与自由华彩（Cadenza）演奏法。",
    metaDescEn: "Download Scheherazade Kalendar Prince bassoon cadenza sheet music. Master rapid 32nd-note oriental arpeggios, double tonguing, and expressive solo freedom.",
    keywordsZh: "天方夜谭大管乐谱,天方夜谭大管华彩,卡兰达王子大管独奏,大管双吐练习,交响乐大管试音,Scheherazade Bassoon",
    keywordsEn: "Scheherazade Bassoon Cadenza, Kalendar Prince Solo Sheet Music, Rimsky-Korsakov Bassoon Excerpt",
    composer: "Nikolai Rimsky-Korsakov (1844-1908)",
    composerEraZh: "俄罗斯强力集团 / 浪漫派管弦乐巅峰 (1888年)",
    composerEraEn: "Russian Five / Romantic Orchestral Masterpiece (1888)",
    difficultyZh: "专业级 / 考级8-10级 / 职业首席试音必考",
    difficultyEn: "Professional / Grade 8-10 / Principal Audition Standard",
    keySignature: "B Minor (b小调 · 2个升号)",
    tempo: "Andantino quasi allegretto / Cadenza ad libitum (♩ = 92)",
    timeSignature: "3/8 拍 (自由华彩)",
    rangeNote: "B2 (低音B) 至 B3 (中音B)",
    instrumentTypeZh: "大管无伴奏自由华彩独奏 (Solo Bassoon Cadenza)",
    instrumentTypeEn: "Solo Bassoon Orchestral Cadenza",
    historicalContextZh: "交响组曲《天方夜谭》（一千零一夜）第二乐章《卡兰达王子的故事》。大管扮演古代阿拉伯王宫中博古通今的说书人，吹出一段充满浓郁东方异域传奇色彩的华彩乐段，三十二分音符如行云流水般倾泻而出。",
    historicalContextEn: "In the second movement of Scheherazade, the solo bassoon portrays the wandering prince-storyteller with a dazzling, exotic, oriental cadenza full of rapid arpeggiated flourishes.",
    auditionSignificanceZh: "国际职业乐团考查大管演奏员双手极致敏捷度（Rapid fingers）、吐音清晰度与即兴戏剧表现力的殿堂级考题。",
    auditionSignificanceEn: "A premier solo audition excerpt measuring virtuoso finger agility, double tonguing clarity, and improvisatory rubato flair.",
    pedagogicalFocusZh: [
      "三十二分音符快速琶音跑动的颗粒均匀度，吐音如珍珠落盘",
      "自由华彩（Cadenza ad libitum）时速度的戏剧性伸缩，由慢渐快再收束",
      "升A3半音阶指法与东方调式装饰音转换"
    ],
    pedagogicalFocusEn: [
      "Pearl-like 32nd-note rapid arpeggio clarity",
      "Theatrical pacing and natural rubato across the unmeasured cadenza",
      "Smooth execution of A#3 chromatic turns and oriental ornamentation"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "三十二分音符慢速匀速拆解",
        desc: "以 60 BPM 开始，将三十二分音符按八分音符慢练，确保每个音孔完全盖实，再逐步提速。",
        focusNote: "B2 - D3 - F#3 - B3"
      }
    ],
    faqs: [
      {
        qZh: "吹奏天方夜谭华彩必须要掌握双吐（Double Tonguing）吗？",
        aZh: "如果单吐速度能稳定达到 ♩ = 120 的十六分音符，单吐即可胜任；但在极速或长时值跑动中，掌握'突-库（T-K）'双吐技术能极大降低肌肉疲劳，使音色更加轻盈。",
        qEn: "Is double tonguing mandatory for the Scheherazade cadenza?",
        aEn: "While a crisp, lightning-fast single tongue can manage, double tonguing (T-K-T-K) provides a significant advantage for effortless speed and endurance."
      },
      {
        qZh: "《天方夜谭》卡兰德王子华彩在大管独奏中属于什么考级与考核高度？",
        aZh: "这是交响乐大管声部最著名的炫技华彩独奏之一，属于专业文凭顶峰（FRSM / 乐团大管首席独奏选拔试音）级别。全曲要求在无指挥节拍束缚下展现极其自由洒脱的东方异域风情，兼具极速十六分音符吐音与宽广的动态起伏。",
        qEn: "What level of audition does the Scheherazade Kalendar Prince Cadenza represent?",
        aEn: "It is an orchestral audition titan (Fellowship FRSM / Principal Bassoon trial level). The excerpt demands dramatic improvisatory rubato to paint Rimsky-Korsakov's exotic Arabian tale, paired with brilliant articulation across the full instrument range."
      },
      {
        qZh: "快速爬音冲向高音 G4/A4 时经常冒出刺耳尖叫音，指法上有什么要领？",
        aZh: "冲向高音 G4 和 A4 时，左手大拇指的‘扬音键’（Speaker / Flick keys，即 A 键与 C 键）必须在起音瞬间进行微秒级的‘轻触弹离’（Flicking/Venting），为气柱提供高频泛音波节点，随后立即松开以防音高漂高。",
        qEn: "How do I prevent cracking or squeaking on rapid climbs to high G4 and A4 in the Cadenza?",
        aEn: "Master the classic bassoon 'flicking' technique: momentarily tap the left thumb A-key or C-key right as the note begins. This vents the acoustic tube to establish the upper harmonic wave without locking the key down."
      }
    ],
    relatedSlugs: ["rite-of-spring-bassoon-solo", "peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "sorcerers-apprentice-bassoon", "mozart-bassoon-concerto-k191", "weissenborn-op8-no10-fast-staccato"],
    relatedArticleIds: ["breath-double-tonguing-speed-drills", "fingering-high-register-flick-keys", "theory-orchestral-excerpts-preparation", "practice-slow-practice-muscle-memory"],
    relatedFingeringNotes: ["B2", "F#3", "B3", "D4", "F#4"],
    relatedOctave: "second",
    relatedTools: ["metronome", "drone", "tuner"]
  },

  // 11. WEISSENBORN OP.8 NO.1
  {
    id: "s_w1",
    slug: "weissenborn-op8-no1-tone-method",
    titleZh: "魏森伯恩实用教程 Op.8 No.1 (低音长音、均匀气息与平稳起音)",
    titleEn: "Weissenborn Practical Method Op.8 No.1 - Tone & Long Tones",
    seoTitleZh: "魏森伯恩大管教程Op.8 No.1乐谱·F大调长音与起音基本功精讲 | BSN Lib",
    seoTitleEn: "Weissenborn Bassoon Method Op.8 No.1 Sheet Music · Tone & Scales | BSN Lib",
    metaDescZh: "免费下载魏森伯恩大管实用教程 Op.8 No.1 完整24小节乐谱。初学大管必练第一课：F大调长音气息支撑、低音F2至高音F3音阶平稳起音指引。",
    metaDescEn: "Download Weissenborn Practical Bassoon Method Op.8 No.1 complete 24-measure sheet music. Essential beginner tone building, breath support, and F major scale mastery.",
    keywordsZh: "魏森伯恩大管教程,魏森伯恩Op8No1,大管入门长音练习,大管初学第一课,Weissenborn Bassoon Method",
    keywordsEn: "Weissenborn Bassoon Method, Weissenborn Op8 No1, Bassoon Long Tone Sheet Music, Beginner Bassoon Etude",
    composer: "Julius Weissenborn (1837-1888)",
    composerEraZh: "德国莱比锡管乐学派教学权威 (1887年)",
    composerEraEn: "German Leipzig Pedagogical School (1887)",
    difficultyZh: "初级入门 / 考级1-2级 / 零基础必练第一课",
    difficultyEn: "Beginner / Grade 1-2 / The #1 Essential Method Piece",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Moderato (庄重适中 · ♩ = 76)",
    timeSignature: "4/4 拍",
    rangeNote: "F2 (低音F) 至 F3 (中音F)",
    instrumentTypeZh: "大管独奏教学练习曲 (Pedagogical Method Etude)",
    instrumentTypeEn: "Pedagogical Method Etude",
    historicalContextZh: "莱比锡布商大厦管弦乐团传奇大管首席尤利乌斯·魏森伯恩编写的《大管实用教程》（Practical Bassoon Method Op.8），是百余年来全球所有大管学习者入门与筑基的'圣经'。第1课通过纯净的全音符长音与二分音符连音，系统建立正确口型、腹部深呼吸与饱满德式音色。",
    historicalContextEn: "Weissenborn's Practical Bassoon Method Op.8 has been the worldwide pedagogical standard since 1887. Lesson 1 builds the essential foundational tone through full-measure whole notes.",
    auditionSignificanceZh: "所有大管初学者第一阶段考核的必查曲目，检验起音发音点是否干净、长音音准是否稳定不漂移。",
    auditionSignificanceEn: "The standard milestone test for beginner tone quality, attack purity, and steady pitch retention.",
    pedagogicalFocusZh: [
      "全音符 4 拍腹部深气息托底，保持音高不随气量变化而偏低",
      "从低音 F2 跨越到中音 C3、F3 时左手拇指轻启 Whisper 键，手型平稳不抬高",
      "换气标记处迅速深吸气，避免收音粗暴"
    ],
    pedagogicalFocusEn: [
      "Four-beat whole note core air support keeping stable intonation",
      "Smooth whisper key engagement from F2 up to C3 and F3 without finger lifting",
      "Clean breath marks without clipping note endings"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "全音符 4 拍心中默数",
        desc: "以 ♩ = 76 练习，心中默数 1-2-3-4，确保每个全音符气流均匀如直线。",
        focusNote: "F2 - G2 - A2 - B♭2"
      }
    ],
    faqs: [
      {
        qZh: "吹奏长音时音高总是越来越低怎么办？",
        aZh: "这是因为随着肺部空气呼出，腹部支撑松懈了。吹到第3-4拍时，腹肌要更有意识地向内收紧托住气流，保持管内气压恒定。",
        qEn: "Why does my pitch drop flat at the end of long tones?",
        aEn: "As air depletes, core abdominal compression tends to sag. Consciously engage lower abdominal muscles on beats 3 and 4 to keep internal air velocity steady."
      },
      {
        qZh: "威森伯恩 Op.8 No.1 长音练习曲适合什么阶段练习？每天应投入多少时间？",
        aZh: "适合入门至考级1-3级的所有大管学习者，也是专业演奏家终身必备的每日开号热身曲目。建议每天练习前投入10-15分钟，配合校音器以 ♩=60 慢速吹奏全音符，培养坚实深沉的喉腔共鸣与音准直觉。",
        qEn: "What stage of bassoon study is Weissenborn Op.8 No.1 for, and how long should I practice it daily?",
        aEn: "It serves beginners (Grades 1-3) through conservatory masters as the definitive daily warm-up study. Spend 10-15 minutes every session playing whole notes at ♩=60 against a drone to build core resonance and embouchure stamina."
      },
      {
        qZh: "在长音做 < (渐强) 时音准偏低、做 > (渐弱) 时音准偏高，如何保持音高笔直？",
        aZh: "强弱音准飘移是大管声学物理特性：气压增大时音高往往下坠，气流减弱时音高反升。校正秘诀是‘弱时气速不减、强时喉腔不缩’：做渐弱时下颌微落、腹肌维持支撑；做渐强时口型微含、扩大咽腔空间抵消下坠。",
        qEn: "Why does pitch drop when playing crescendo and go sharp on decrescendo, and how can I fix it?",
        aEn: "This is acoustic physics in double reeds. During a decrescendo, keep abdominal air velocity brisk and drop the jaw slightly to prevent pinching sharp; during a crescendo, slightly firm the lip corners and expand the throat to counteract the flat tendency."
      }
    ],
    relatedSlugs: ["weissenborn-op8-no4-thirds-intervals", "telemann-bassoon-sonata-f-minor", "peter-and-the-wolf-grandfather", "weissenborn-op8-no10-fast-staccato", "twinkle-twinkle-little-bassoon", "spirited-away-always-with-me"],
    relatedArticleIds: ["reed-care-basics", "practice-long-tone-harmonics-overtones", "reed-pitch-center-crow-tuning", "fingering-whisper-key-half-hole-fissure"],
    relatedFingeringNotes: ["F2", "G2", "A2", "Bb2", "C3"],
    relatedOctave: "first",
    relatedTools: ["drone", "tuner", "camp"]
  },

  // 12. WEISSENBORN OP.8 NO.4
  {
    id: "s_w2",
    slug: "weissenborn-op8-no4-thirds-intervals",
    titleZh: "魏森伯恩练习曲 Op.8 No.4 (三度模进跳进与音程转换)",
    titleEn: "Weissenborn Op.8 No.4 - Thirds & Interval Leaps",
    seoTitleZh: "魏森伯恩大管Op.8 No.4乐谱·三度跳进模进练习曲精解 | BSN Lib",
    seoTitleEn: "Weissenborn Op.8 No.4 Sheet Music · Thirds & Interval Leaps | BSN Lib",
    metaDescZh: "免费下载魏森伯恩大管练习曲 Op.8 No.4 高清五线谱。三度跳进模进音型训练、平稳运指与连音气流贯穿技巧指南。",
    metaDescEn: "Download Weissenborn Bassoon Etude Op.8 No.4 sheet music. Master thirds interval leaps, smooth finger placement, and cantabile legato airflow.",
    keywordsZh: "魏森伯恩Op8No4,大管三度练习曲,大管音程跳进,大管考级练习曲,Weissenborn Op8 No4",
    keywordsEn: "Weissenborn Op8 No4, Bassoon Thirds Etude, Interval Leap Bassoon Sheet Music",
    composer: "Julius Weissenborn (1837-1888)",
    composerEraZh: "德国古典教学练习曲 (1887年)",
    composerEraEn: "German Classical Pedagogy (1887)",
    difficultyZh: "初级进阶 / 考级3级 / 音程跳进必练",
    difficultyEn: "Early Intermediate / Grade 3 / Essential Thirds",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Andante con moto (♩ = 84)",
    timeSignature: "4/4 拍",
    rangeNote: "F2 至 F3",
    instrumentTypeZh: "大管独奏练习曲 (Bassoon Etude)",
    instrumentTypeEn: "Bassoon Pedagogical Etude",
    historicalContextZh: "魏森伯恩实用教程中的经典三度模进篇章。通过连续上行跳进与下行二度级进，训练初学者双手指肚对音孔的精准触觉定位与气流平稳度。",
    historicalContextEn: "A foundational exercise in thirds, training finger independence, accurate tone hole sealing, and uninterrupted legato airflow across intervals.",
    auditionSignificanceZh: "考级基础技术考察重点，评判手型是否多余抬高以及连音是否平滑。",
    auditionSignificanceEn: "A classic technical assessment piece testing hand posture efficiency and pitch continuity.",
    pedagogicalFocusZh: [
      "三度跳进时手指抬起高度不超过 1.5 厘米",
      "音程交替时保持气息连贯（Legato），避免音头断裂"
    ],
    pedagogicalFocusEn: [
      "Fingers remain within 1.5cm of tone holes during leaps",
      "Continuous air column supporting uninterrupted legato"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "三度跳音手指慢速贴孔",
        desc: "慢速练习 F2-A2、G2-Bb2，双手指肚像磁铁一样贴近管身，手指动作轻盈不拍打按键。",
        focusNote: "F2 - A2"
      }
    ],
    faqs: [
      {
        qZh: "练习三度跳进时手指总是有按键噪音怎么办？",
        aZh: "这是因为手指抬得过高用力拍打音孔。手指应始终轻触音孔上方，只用指肚肉垫柔和闭合。",
        qEn: "How to eliminate finger slapping noise on keys?",
        aEn: "Keep fingers relaxed and close to the tone holes at all times. Use the soft pads of your fingertips rather than slapping down with force."
      },
      {
        qZh: "Op.8 No.4 三度模进练习曲对应考级几级？对培养手指独立性有何作用？",
        aZh: "对应英皇考级 2-4 级音阶琶音必修核心。三度跳进（如 C-E, D-F, E-G）是大管指法从‘相邻阶梯’跨入‘空间跳跃’的关键枢纽，能根治手指抬得过高、换指迟滞等通病，为后续莫扎特协奏曲等经典名作打下指法基石。",
        qEn: "What grade level does Weissenborn Op.8 No.4 correspond to, and why are thirds so vital?",
        aEn: "It aligns with ABRSM Grades 2-4 technical exam requirements. Practicing thirds trains non-adjacent finger lifting and dropping, eliminating excessive finger motion and building the muscle memory needed for classical concertos."
      },
      {
        qZh: "三度跨越低音区时左右手大拇指总容易卡键或按空，有什么手型矫正方法？",
        aZh: "保持双手虎口自然张开成微圆弧形，手掌不要向管身内侧下塌。左手拇指指腹外侧接触 B/Bb 键，右手拇指以指尖关节微曲状态轻触低音 E 键与低音 F# 键，利用腕关节微调而非手臂发力，移动距离控制在 3-5 毫米以内。",
        qEn: "How do I prevent thumbs from jamming or missing keys during third leaps in the low register?",
        aEn: "Maintain a relaxed, rounded C-shape in both hands. Use the fleshy lateral edge of the left thumb for the low keys and keep thumb travel to a compact 3-5mm arc, moving from the joint rather than the wrist."
      }
    ],
    relatedSlugs: ["weissenborn-op8-no1-tone-method", "weissenborn-op8-no10-fast-staccato", "telemann-bassoon-sonata-f-minor", "mozart-bassoon-concerto-k191"],
    relatedArticleIds: ["practice-interval-embouchure-relaxation", "fingering-whisper-key-half-hole-fissure", "care-sticky-pads-troubleshooting", "practice-slow-practice-muscle-memory"],
    relatedFingeringNotes: ["F2", "A2", "C3", "E3", "G3"],
    relatedOctave: "first",
    relatedTools: ["metronome", "drone", "tuner"]
  },

  // 13. WEISSENBORN OP.8 NO.10
  {
    id: "s_w3",
    slug: "weissenborn-op8-no10-fast-staccato",
    titleZh: "魏森伯恩练习曲 Op.8 No.10 (十六分音符快速跑动与两连两吐)",
    titleEn: "Weissenborn Op.8 No.10 - Fast 16th Articulation & Staccato",
    seoTitleZh: "魏森伯恩大管Op.8 No.10乐谱·两连两吐十六分音符跑动精练 | BSN Lib",
    seoTitleEn: "Weissenborn Op.8 No.10 Sheet Music · Fast 16th Articulation | BSN Lib",
    metaDescZh: "免费下载魏森伯恩大管练习曲 Op.8 No.10 高清五线谱。两连两吐（Slur 2, Tongue 2）十六分音符快速跑动、手指灵敏度与考级必练技巧。",
    metaDescEn: "Download Weissenborn Op.8 No.10 bassoon etude sheet music. Master rapid 16th-note runs, two-slur two-tongue patterns, and finger agility.",
    keywordsZh: "魏森伯恩Op8No10,大管两连两吐练习曲,大管十六分音符快速跑动,大管考级必练,Weissenborn Op8 No10",
    keywordsEn: "Weissenborn Op8 No10, Fast Bassoon Etude, Two Slur Two Tongue Bassoon Sheet Music",
    composer: "Julius Weissenborn (1837-1888)",
    composerEraZh: "德国管乐进阶教材 (1887年)",
    composerEraEn: "German Advanced Etude (1887)",
    difficultyZh: "中级考级 / 考级4-5级 / 快速吐音必练",
    difficultyEn: "Intermediate / Grade 4-5 / Articulation Benchmark",
    keySignature: "C Major (C大调)",
    tempo: "Allegro moderato (♩ = 92-104)",
    timeSignature: "4/4 拍",
    rangeNote: "C3 至 A3",
    instrumentTypeZh: "大管快速吐音练习曲 (Bassoon Articulation Etude)",
    instrumentTypeEn: "Bassoon Articulation Etude",
    historicalContextZh: "国内外考级与比赛极高频考查的经典练习曲！训练舌尖与手指在十六分音符高速运动下的毫秒级同步，彻底告别吐音粘滞与杂音。",
    historicalContextEn: "One of the most widely performed etudes in conservatory auditions, demanding precise synchronization between finger motion and single tonguing in 16th-note patterns.",
    auditionSignificanceZh: "考查舌指同步协调能力（Tongue-Finger Coordination）的核心曲目。",
    auditionSignificanceEn: "Standard benchmark for rapid articulation cleanliness and rhythmic endurance.",
    pedagogicalFocusZh: [
      "严格执行两连两吐：前两音圆滑连贯，后两音短促颗粒",
      "十六分音符节奏平稳如节拍机，避免第三拍向前赶抢拍"
    ],
    pedagogicalFocusEn: [
      "Crisp execution of slur 2, tongue 2 articulation formula",
      "Metronomic stability on 16th-note subdivision without rushing"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "口诀吟唱节奏定型",
        desc: "念唱'嘀-哩-哒-哒'，前两音轻柔滑过，后两音舌尖像打水漂一样轻点簧片尖端。",
        focusNote: "C3 - D3 - E3 - C3"
      }
    ],
    faqs: [
      {
        qZh: "两连两吐跑动时后两个吐音容易含糊怎么办？",
        aZh: "放慢速度，单独把后两个音用强断音（Marcato）点练，让舌头建立明确的触感记忆后再提速。",
        qEn: "How to keep the two tongued notes crisp in slur-two-tongue-two?",
        aEn: "Isolate the two tongued notes at a slower tempo with deliberate crispness before joining them to the slurred pair."
      },
      {
        qZh: "威森伯恩 Op.8 No.10 在考级中属于几级？练习这首曲目的核心评测指标是什么？",
        aZh: "对应英皇考级 4-5 级练习曲标准。核心评测指标是‘两连两吐’（Slur two, Tongue two）交替时的节奏骨架对称性。要求连音滑顺无指隙杂音、吐音清脆利落如雨滴，两者音量与音色完全均等。",
        qEn: "What grade level is Weissenborn Op.8 No.10, and what are its core pedagogical metrics?",
        aEn: "It aligns with ABRSM Grades 4-5. The primary objective is absolute metric equality in 'two slurred, two tongued' patterns: slurs must be fluid without fingering clatter, and staccatos must be crisp like raindrops with identical dynamic balance."
      },
      {
        qZh: "快速跑动中遇到升F与降B音时，用常规指法还是副指法（叉状指法）？",
        aZh: "本曲快速十六分音符中，高音 F#3 建议使用右手食指按 F# 侧键的常规标准指法以保证音准；遇到降 B 音（Bb3）时，推荐采用左手拇指 Bb 辅助键而非右手副键，能避免跨越换指时产生音洞漏洞。",
        qEn: "Should I use standard or alternate fingerings for F# and Bb in fast sixteenth passages?",
        aEn: "Stick to standard F#3 fingerings for reliable pitch centering. For Bb, use the left thumb Bb spatula key rather than the front bis key to avoid awkward finger crossings during rapid scale cascades."
      }
    ],
    relatedSlugs: ["mozart-bassoon-concerto-k191", "peter-and-the-wolf-grandfather", "sorcerers-apprentice-bassoon", "scheherazade-kalendar-prince-cadenza", "weissenborn-op8-no1-tone-method"],
    relatedArticleIds: ["practice-staccato-double-tonguing-clarity", "reed-staccato-tongue-speed-rebound", "fingering-rh-thumb-roller-pivots", "breath-double-tonguing-speed-drills"],
    relatedFingeringNotes: ["G2", "B2", "D3", "G3", "B3"],
    relatedOctave: "second",
    relatedTools: ["metronome", "tuner", "camp"]
  },

  // 14. WEISSENBORN OP.8 VOL.2 NO.15
  {
    id: "s_w4",
    slug: "weissenborn-op8-no15-andante-cantabile",
    titleZh: "魏森伯恩高级歌唱性练习曲 Op.8 卷二 No.15 (Andante 柔美行板与高音揉音)",
    titleEn: "Weissenborn Op.8 Vol.2 No.15 - Cantabile Andante",
    seoTitleZh: "魏森伯恩大管Op.8卷二No.15乐谱·Andante如歌行板与高音C4精析 | BSN Lib",
    seoTitleEn: "Weissenborn Op.8 Vol.2 No.15 Sheet Music · Cantabile Andante | BSN Lib",
    metaDescZh: "免费下载魏森伯恩高级歌唱性练习曲 Op.8 卷二 No.15 高清乐谱。次中音谱号视奏、高音区 G3 至 C4 如大提琴般宽广连音与揉音教学。",
    metaDescEn: "Download Weissenborn Op.8 Vol.2 No.15 bassoon etude sheet music. Master tenor clef reading, High C4 cantabile legato, and expressive vibrato.",
    keywordsZh: "魏森伯恩高级练习曲,魏森伯恩卷二No15,大管如歌行板,次中音谱号大管,Weissenborn Vol 2 No 15",
    keywordsEn: "Weissenborn Vol 2 No 15, Cantabile Bassoon Etude, Tenor Clef Bassoon Sheet Music",
    composer: "Julius Weissenborn (1837-1888)",
    composerEraZh: "德国浪漫派高级教学曲目 (1887年)",
    composerEraEn: "German Romantic Method (1887)",
    difficultyZh: "高级 / 考级6-7级 / 抒情歌唱力作",
    difficultyEn: "Advanced / Grade 6-7 / Lyrical Masterclass",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Andante cantabile (柔美如歌行板 · ♩ = 66)",
    timeSignature: "3/4 拍",
    rangeNote: "F3 至 C4 (高音C)",
    instrumentTypeZh: "大管高级歌唱性独奏练习曲 (Cantabile Etude)",
    instrumentTypeEn: "Cantabile Bassoon Etude",
    historicalContextZh: "魏森伯恩大管进阶教程第二卷中最动人的抒情长篇。训练演奏者在高音区泛音键配合、宽广气息支撑与柔和揉音感，旋律优美动人，极富感染力。",
    historicalContextEn: "One of the most lyrical gems in Weissenborn's advanced second volume, teaching high-register cantabile phrasing, tenor clef reading, and subtle dynamic shading.",
    auditionSignificanceZh: "考级中考查次中音谱号（Tenor Clef）识别能力与大管高音歌唱性的必修曲目。",
    auditionSignificanceEn: "Evaluates tenor clef reading proficiency and lyrical expression in the high tenor register.",
    pedagogicalFocusZh: [
      "高音区（G3 到 C4）保持气息如大提琴般的宽广连贯（Legatissimo）",
      "掌握柔和的揉音（Vibrato）幅度，避免因下颌咬合而引起音准晃动"
    ],
    pedagogicalFocusEn: [
      "Broad, cello-like legatissimo in the tenor register (G3 to C4)",
      "Warm vibrato oscillation without jaw tension"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "高音C4泛音键支撑",
        desc: "第4小节进入制高点 C4 时气流加压送出，保持下唇放松微卷，长音饱满宽广。",
        focusNote: "C4 (Tenor peak)"
      }
    ],
    faqs: [
      {
        qZh: "吹奏高音抒情乐句时口型总是发酸怎么办？",
        aZh: "口型发酸是因为过度用下巴咬哨片支撑高音。必须把发力点转移到腹部横膈膜，嘴唇只负责密封包住哨片。",
        qEn: "Why does my embouchure tire quickly on high lyrical phrases?",
        aEn: "Embouchure fatigue indicates excessive jaw biting. Shift the workload to abdominal air compression while keeping the facial muscles relaxed and cushioned."
      },
      {
        qZh: "Op.8 No.15 行板抒情曲属于几级考级？如何通过大管吹出歌唱般的揉音？",
        aZh: "属于考级 5-6 级抒情艺术歌曲类别。练习揉音时切忌用下巴咬动哨片，应以腹肌微颤带动气流波动的‘气流揉音’（Diaphragmatic Vibrato）。建议从每拍2次、3次波动开始慢速练习，让音色像大提琴般自然丰满温润。",
        qEn: "What grade level is Weissenborn Op.8 No.15, and how should vibrato be cultivated?",
        aEn: "It represents ABRSM Grade 5-6 lyrical cantabile requirements. Develop breath-driven vibrato through subtle abdominal pulses rather than chewing the reed with the jaw. Practice pulsing twice or three times per beat at ♩=60 for warm, cello-like singing tone."
      },
      {
        qZh: "吹到高音区（A3至C4）乐句时，音高容易越来越尖刺偏高，如何维持温暖厚重？",
        aZh: "高音偏高通常是因为嘴唇挤压哨片过多。解决之道：下巴微微下移并放松下唇包卷度，将口腔内部空间扩张如‘含着温水’；气流保持深长集中的同时，选用稍软、中段开阔的哨片，让大管木质温暖泛音充分释放。",
        qEn: "How do I prevent upper-register notes (A3 to C4) from sounding pinched and sharp?",
        aEn: "Drop the jaw slightly and loosen the lower lip cushion to avoid biting the reed. Imagine maintaining an open oral cavity as if sipping warm tea, and sustain deep diaphragmatic airflow to bring out the rich, woody low-order harmonics."
      }
    ],
    relatedSlugs: ["mozart-bassoon-concerto-k191", "telemann-bassoon-sonata-f-minor", "peter-and-the-wolf-grandfather", "spirited-away-always-with-me", "weber-bassoon-concerto-op75"],
    relatedArticleIds: ["practice-dynamic-range-pp-ff-stability", "theory-bass-tenor-clef", "bocal-length-temperature-pitch", "breath-high-register-embouchure"],
    relatedFingeringNotes: ["D3", "F3", "A3", "C4", "E4"],
    relatedOctave: "second",
    relatedTools: ["drone", "tuner", "breathSimulator"]
  },

  // 15. TWINKLE TWINKLE LITTLE BASSOON
  {
    id: "s1",
    slug: "twinkle-twinkle-little-bassoon",
    titleZh: "小星星的巴松奇幻冒险 (少儿入门完整全曲 A-B-A)",
    titleEn: "Twinkle Twinkle Little Bassoon (Complete Theme)",
    seoTitleZh: "小星星大管简谱五线谱·少儿巴松启蒙入门完整12小节乐谱 | BSN Lib",
    seoTitleEn: "Twinkle Twinkle Little Bassoon Sheet Music · Beginner Kids Solo | BSN Lib",
    metaDescZh: "免费下载少儿大管启蒙首选《小星星》完整12小节演奏乐谱。精选低音F2至中音G3舒适音区，ABA完整曲式、逐小节指法图解与儿童伴奏试听。",
    metaDescEn: "Download Twinkle Twinkle Little Bassoon complete 12-measure sheet music for young beginners. Comfortable F2-G3 range, ABA form, and interactive audio.",
    keywordsZh: "小星星大管乐谱,少儿巴松入门谱,儿童大管考级,大管初学简谱五线谱,Twinkle Twinkle Bassoon",
    keywordsEn: "Twinkle Twinkle Bassoon, Beginner Bassoon Sheet Music, Easy Bassoon for Kids",
    composer: "Traditional / W.A. Mozart",
    composerEraZh: "少儿启蒙童谣经典",
    composerEraEn: "Traditional Children Nursery Theme",
    difficultyZh: "入门级 (Grade 1) / 零基础儿童必弹",
    difficultyEn: "Beginner (Grade 1) / First Recital Piece",
    keySignature: "F Major (F大调 · 1个降号)",
    tempo: "Andante (舒适步调 · ♩ = 80)",
    timeSignature: "4/4 拍",
    rangeNote: "F2 (低音F) 至 D3 (中音D)",
    instrumentTypeZh: "少儿大管启蒙独奏 (Kids Beginner Solo)",
    instrumentTypeEn: "Kids Beginner Solo",
    historicalContextZh: "专为初学者小手设计的完整乐曲！音域精选在低音 F2 到中音 G3 黄金舒适音区，节奏规整，包含完整 A 段呈示 (M.1-4)、B 段展开 (M.5-8) 与 A' 段再现 (M.9-12)，12小节完整演奏谱！",
    historicalContextEn: "Carefully arranged for young hands and beginners within the golden F2 to G3 comfort zone. Complete 12-measure ABA recital arrangement.",
    auditionSignificanceZh: "少儿琴童第一次舞台展演与基本功验收的标准乐曲。",
    auditionSignificanceEn: "The primary milestone piece for young students' first recital performance.",
    pedagogicalFocusZh: [
      "六孔按孔平稳覆盖，不漏气",
      "换气标记点从容吸气",
      "音色清亮温暖"
    ],
    pedagogicalFocusEn: [
      "Full tone hole seal with small fingers",
      "Calm breathing on breath marks",
      "Warm and clear tone production"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "第1小节 F2 到 C3 六孔全开平稳过渡",
        desc: "手指同时轻抬，动作轻巧，Whisper键轻启，不拍打按键。",
        focusNote: "F2 - C3"
      }
    ],
    faqs: [
      {
        qZh: "孩子小手按不满音孔漏气怎么办？",
        aZh: "建议使用专为少儿设计的迷你巴松（Mini-Bassoon / Fargottino）或带有密闭按键盖的儿童管，同时调整挂带长度使乐器自然贴合手型。",
        qEn: "How to handle small hands struggling to seal tone holes?",
        aEn: "Consider a short-reach student bassoon or mini-bassoon with plateau keys, and ensure the neck strap is adjusted so the instrument balances comfortably without hand strain."
      },
      {
        qZh: "《小星星》变奏曲适合多大年龄的孩子学习大管？是否需要使用少儿专用大管？",
        aZh: "适合 6-10 岁初学儿童。对于手掌较小的孩子，强烈推荐选用专门设计的 F调或G调少儿大管（Mini-Bassoon / Tenoroon）或加装按键延长杆。该曲属启蒙至考级1级水平，能极大激发儿童对双簧管乐器的学习兴趣与乐感。",
        qEn: "At what age can a child start bassoon with 'Twinkle Twinkle', and is a mini-bassoon required?",
        aEn: "Children aged 6-10 can comfortably begin on a mini-bassoon (F or G tenoroon) or standard bassoon fitted with key extensions. Ranked at the Pre-Grade / Grade 1 level, this playful tune builds foundational embouchure and musical joy."
      },
      {
        qZh: "初学孩子第一次吹响大管时容易发出刺耳杂音或怪叫，怎样挑选第一只练习哨片？",
        aZh: "初学者应选用开度较小、硬度为 Soft（偏软）的入门树脂或精选天然芦苇哨片，阻力小、易发音。教导孩子用上下唇像包住牙齿一样包裹哨片，轻轻哈气起音，切忌像吹小号一样死咬嘴唇。",
        qEn: "How should a beginner choose their first bassoon reed and avoid harsh squawks?",
        aEn: "Select a soft-strength reed with a narrow tip opening for minimal blowing resistance. Coach the student to cushion the reed gently with rolled lips like an 'O' ring and blow warm, unhurried air without clenching teeth."
      }
    ],
    relatedSlugs: ["spirited-away-always-with-me", "weissenborn-op8-no1-tone-method", "pink-panther-jazz-theme", "ode-to-joy-beethoven-bassoon"],
    relatedArticleIds: ["reed-care-basics", "stage-seat-strap-posture", "fingering-whisper-key-half-hole-fissure", "practice-long-tone-harmonics-overtones"],
    relatedFingeringNotes: ["F2", "C3", "D3", "Bb2", "A2", "G2"],
    relatedOctave: "first",
    relatedTools: ["camp", "tuner", "drone"]
  },

  // 16. THE PINK PANTHER
  {
    id: "s4",
    slug: "pink-panther-jazz-theme",
    titleZh: "快乐的粉红豹 (少儿爵士摇摆完整主题与切分音)",
    titleEn: "The Pink Panther (Complete Easy Jazz Swing Theme)",
    seoTitleZh: "粉红豹大管爵士乐谱·半音滑音与切分摇摆节奏精讲 | BSN Lib",
    seoTitleEn: "The Pink Panther Bassoon Sheet Music · Jazz Swing & Chromatics | BSN Lib",
    metaDescZh: "免费下载享誉全球的《粉红豹》大管爵士独奏乐谱。半音阶倚音滑移、爵士切分摇摆（Swing Feel）与蹑手蹑脚神秘顿音教学。",
    metaDescEn: "Download The Pink Panther bassoon solo sheet music. Master chromatic grace note slides, jazz syncopation, and comedic staccato articulation.",
    keywordsZh: "粉红豹大管乐谱,粉红豹巴松简谱五线谱,大管爵士乐曲,大管半音阶练习,Pink Panther Bassoon",
    keywordsEn: "Pink Panther Bassoon, Jazz Bassoon Sheet Music, Henry Mancini Bassoon Solo",
    composer: "Henry Mancini (1924-1994)",
    composerEraZh: "经典爵士影视名作 (1963年)",
    composerEraEn: "Classic Jazz Film Score (1963)",
    difficultyZh: "初中级 / 考级3-4级 / 爵士进阶",
    difficultyEn: "Intermediate / Grade 3-4 / Jazz Swing",
    keySignature: "E Minor (e小调 · 1个升号)",
    tempo: "Tempo di Swing (摇摆节拍 · ♩ = 96)",
    timeSignature: "4/4 拍 (Swing Feel)",
    rangeNote: "C#3 至 B3",
    instrumentTypeZh: "大管爵士独奏 (Jazz Solo Bassoon)",
    instrumentTypeEn: "Jazz Bassoon Solo",
    historicalContextZh: "亨利·曼西尼创作的奥斯卡提名经典。大管低沉独特的沙哑音质与爵士切分节奏完美结合，极具演奏趣味与舞台表现力。",
    historicalContextEn: "Henry Mancini's Grammy-winning jazz theme. The bassoon's dry, comical voice makes it the perfect match for the stealthy, sliding panther motif.",
    auditionSignificanceZh: "考查演奏员对爵士摇摆律动（Swing Feel）与半音阶滑音控制力的趣味考题。",
    auditionSignificanceEn: "A fun showcase testing jazz syncopation, half-hole accuracy, and dynamic comedic flair.",
    pedagogicalFocusZh: [
      "半音阶滑音（C#3 到 D3、D#3 到 E3）手指平滑移动",
      "切分音（Syncopation）与后半拍重音的爵士摇摆感"
    ],
    pedagogicalFocusEn: [
      "Smooth chromatic slides (C#3 to D3, D#3 to E3)",
      "Syncopated swing feel with relaxed offbeat accents"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "半音前倚音轻巧滑移",
        desc: "右手小指轻触按键，左手拇指轻启Whisper键，手指动作轻巧勿拍打按键。",
        focusNote: "C#3 - D3"
      }
    ],
    faqs: [
      {
        qZh: "如何吹出粉红豹地道的爵士摇摆味？",
        aZh: "心中带有'哒-空-哒-哒'的摇摆节拍感，八分音符不要吹成呆板的一样长，前长后短（约2:1），吐音要干净有弹性。",
        qEn: "How to capture the authentic jazz swing feel?",
        aEn: "Feel the internal triplet lilt (long-short on eighth pairs) and keep the articulation buoyant and bouncy rather than classical and rigid."
      },
      {
        qZh: "《粉红豹》大管版在考级中处于什么难度？乐曲中的神秘滑音（Scoop/Bend）怎么吹？",
        aZh: "对应英皇考级 4-6 级业余重奏与独奏自选曲目。吹奏主题开头的爵士滑音时，在发音瞬间下唇微微向外放松半毫米使音高微降，随后伴随气流推进迅速提回原音高，即可营造出极具辨识度的豹行侦探神秘感。",
        qEn: "What grade level is The Pink Panther for bassoon, and how do you execute the jazz pitch scoops?",
        aEn: "It is an ABRSM Grade 4-6 recital crowd-pleaser. To create the iconic jazz scoop, momentarily drop the jaw by 0.5mm upon note onset to dip the pitch, then snap back up to center with an air burst as the note sounds."
      },
      {
        qZh: "吹奏粉红豹主题中持续的小二度半音阶上行（如 D#-E-F-F#）时手指容易打结怎么办？",
        aZh: "慢练半音阶指法转换：右手小指先找准低音 F 键，右大拇指预先搭在升 F（F#）键旁。在 D# 到 E 转换时，左手拇指仅抬开半孔。配合本站指法交互卡片进行单小节循环肌肉记忆训练。",
        qEn: "How do I master the chromatic half-step walking line (D#-E-F-F#) without tripping fingers?",
        aEn: "Anchor the right pinky over the F spatula and keep the right thumb hovering close to the low F# key. Practice the chromatic finger transitions slowly in isolated four-note loops using our interactive 3D fingering chart."
      }
    ],
    relatedSlugs: ["spirited-away-always-with-me", "in-the-hall-of-the-mountain-king", "tchaikovsky-swan-lake-little-swans", "peter-and-the-wolf-grandfather"],
    relatedArticleIds: ["reed-resistance-scraping", "practice-interval-embouchure-relaxation", "fingering-eb-trill-and-resonance-keys", "theory-intonation-tendency-chart"],
    relatedFingeringNotes: ["E2", "G2", "Bb2", "B2", "D3"],
    relatedOctave: "first",
    relatedTools: ["metronome", "tuner", "camp"]
  },

  // 17. BEETHOVEN ODE TO JOY
  {
    id: "s6",
    slug: "ode-to-joy-beethoven-bassoon",
    titleZh: "贝多芬第九交响曲《欢乐颂》大管与倍低音大管伴奏 (完整四乐句)",
    titleEn: "Ode to Joy - Bassoon & ContraBassoon Companion (Complete)",
    seoTitleZh: "欢乐颂大管乐谱·贝多芬低音巴松与倍低音大管重奏完整16小节谱 | BSN Lib",
    seoTitleEn: "Ode to Joy Bassoon Sheet Music · Beethoven Symphony 9 Theme & Excerpt | BSN Lib",
    metaDescZh: "免费下载贝多芬《欢乐颂》大管与倍低音大管（Contrabassoon）经典合奏五线谱。庄严崇高主句、深沉低音共鸣与交响乐声部合奏要诀。",
    metaDescEn: "Free printable Ode to Joy sheet music for bassoon & contrabassoon. Master Beethoven's noble Ninth Symphony theme, resonant low register projection, and ensemble blending.",
    keywordsZh: "欢乐颂大管乐谱,贝多芬第九交响曲大管,倍低音大管乐谱,大管合奏乐谱,Ode to Joy Bassoon",
    keywordsEn: "Ode to Joy Bassoon, Ode to Joy Bassoon Sheet Music, Beethoven Bassoon Excerpt, Contrabassoon Sheet Music, Beethoven Symphony 9 Bassoon",
    composer: "Ludwig van Beethoven (1770-1827)",
    composerEraZh: "古典主义向浪漫主义过渡巅峰 (1824年)",
    composerEraEn: "Late Classical / Early Romantic (1824)",
    difficultyZh: "初级 / 考级2-3级 / 乐团合奏必修",
    difficultyEn: "Early Intermediate / Grade 2-3 / Ensemble Standard",
    keySignature: "D Major (D大调 · 2个升号)",
    tempo: "Allegro assai (庄严有力 · ♩ = 100)",
    timeSignature: "4/4 拍",
    rangeNote: "D2 (低音D) 至 A2 (低音A)",
    instrumentTypeZh: "大管与倍低音大管管弦乐重奏 (Bassoon & Contrabassoon)",
    instrumentTypeEn: "Bassoon & Contrabassoon Ensemble",
    historicalContextZh: "贝多芬第九交响曲第四乐章的永恒主题。大管与倍低音大管在低音声部奏出深厚宽广、庄严宏伟的合唱伴奏骨架，传递全人类自由平等的崇高博爱精神。",
    historicalContextEn: "The immortal theme of Beethoven's Ninth Symphony. The low bassoon and contrabassoon anchor the monumental vocal entrance with resonant grandeur.",
    auditionSignificanceZh: "重奏与乐团低音合奏的经典考题，考察低音声部的音准纯洁度与庄严运弓感。",
    auditionSignificanceEn: "A foundational standard for testing low-register ensemble resonance and intonation.",
    pedagogicalFocusZh: [
      "低音区与倍低音大管（ContraBassoon）深沉雄浑的低音频段发音",
      "全曲完整16小节四乐句结构与呼吸节奏掌控"
    ],
    pedagogicalFocusEn: [
      "Deep low-register projection for bassoon and contrabassoon",
      "Four-phrase architectural breathing across 16 measures"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "低音 D2 坚实根音发音",
        desc: "腹部深吸气，喉咙充分打开，让哨片最大面积自由振动，产生深厚共鸣。",
        focusNote: "D2 (Low Root)"
      }
    ],
    faqs: [
      {
        qZh: "吹奏倍低音大管时耗气量很大怎么调整？",
        aZh: "倍低音大管哨片较宽，需横膈膜深吸气并保持极度放松的口腔空间，避免浅吸气导致快速疲劳。",
        qEn: "How to manage high air volume on contrabassoon?",
        aEn: "Contrabassoon reeds require high air volume rather than high velocity. Breathe deeply into the lower lungs and maintain a wide, relaxed embouchure."
      },
      {
        qZh: "《欢乐颂》大管与倍低音大管旋律属于什么难度等级？在乐团合奏中承担什么角色？",
        aZh: "属于考级 2-4 级入门至中级进阶必修，但在交响乐团中是贝九第四乐章整个低音弦乐与管乐声部的声学地基。大管需具备极其雄浑宽广的低频穿透力，与大提琴、低音提琴声部紧密交织。",
        qEn: "What difficulty is Beethoven's Ode to Joy for bassoon, and what role does it play in orchestral tutti?",
        aEn: "Pedagogically rated at ABRSM Grades 2-4, it forms the monumental acoustic foundation of Beethoven's Symphony No. 9 finale. The bassoon anchors the majestic hymn melody alongside the cellos and double basses with commanding warmth."
      },
      {
        qZh: "吹奏低音区的欢乐颂旋律时音色容易发闷或发炸，怎样获得开阔辉煌的低音？",
        aZh: "深呼吸使横膈膜完全下沉，口咽腔如同含着一枚热鸡蛋，放松喉头。吹奏低音 D、C、B♭ 时气流要宽广而缓慢，用温暖的‘呼气感’灌满大管四米长的双S形声波管道，避免死咬哨片造成音色干瘪。",
        qEn: "How do I achieve an expansive, majestic low tone without barking or muffled stuffiness in Ode to Joy?",
        aEn: "Take a deep diaphragmatic breath, drop the soft palate, and imagine warming your hands on a cold winter day. Direct slow, voluminous warm air through the full length of the bore, avoiding embouchure bite to let the low harmonics ring."
      }
    ],
    relatedSlugs: ["twinkle-twinkle-little-bassoon", "weissenborn-op8-no1-tone-method", "peter-and-the-wolf-grandfather", "mozart-bassoon-concerto-k191"],
    relatedArticleIds: ["reed-care-basics", "practice-dynamic-range-pp-ff-stability", "care-wood-crack-prevention", "stage-seat-strap-posture"],
    relatedFingeringNotes: ["F2", "G2", "A2", "Bb2", "C3"],
    relatedOctave: "first",
    relatedTools: ["drone", "tuner", "camp"]
  },

  // 18. WEISSENBORN OP.8 NO.12
  {
    id: "s7",
    slug: "weissenborn-op8-no12-staccato-legato",
    titleZh: "魏森伯恩基础练习曲 Op.8 No.12 (断奏与连音交替完整版)",
    titleEn: "Weissenborn Practical Method Op.8 No.12 - Staccato & Legato",
    seoTitleZh: "魏森伯恩大管Op.8 No.12乐谱·断奏与连音交替练习曲精讲 | BSN Lib",
    seoTitleEn: "Weissenborn Op.8 No.12 Sheet Music · Staccato & Legato | BSN Lib",
    metaDescZh: "免费下载魏森伯恩大管实用教程 Op.8 No.12 完整乐谱。单吐断音与圆滑连音毫秒级无缝切换、低音到中音清晰颗粒吐音教学。",
    metaDescEn: "Download Weissenborn Bassoon Method Op.8 No.12 sheet music. Master alternating staccato and legato articulation and clear low-to-mid register tone.",
    keywordsZh: "魏森伯恩Op8No12,大管断奏连音练习曲,大管考级必练,大管吐音教学,Weissenborn Op8 No12",
    keywordsEn: "Weissenborn Op8 No12, Bassoon Staccato and Legato, Weissenborn Sheet Music",
    composer: "Julius Weissenborn (1837-1888)",
    composerEraZh: "德国管乐基础教材 (1887年)",
    composerEraEn: "German Foundational Etude (1887)",
    difficultyZh: "考级专区 (Grade 4) / 吐连交替必修",
    difficultyEn: "Intermediate / Grade 4 / Articulation Switching",
    keySignature: "C Major (C大调)",
    tempo: "Moderato (♩ = 88)",
    timeSignature: "4/4 拍",
    rangeNote: "G2 至 G3",
    instrumentTypeZh: "大管吐连交替练习曲 (Articulation Etude)",
    instrumentTypeEn: "Articulation Method Etude",
    historicalContextZh: "经典巴松必修考级教材。针对断奏与连音交替的指法平稳性训练，帮助学生巩固中低音区发音与换气节奏。",
    historicalContextEn: "A core pedagogical study on switching between detached staccato articulation and cantabile legato in rapid succession.",
    auditionSignificanceZh: "各大音乐等级考试中考查基本吐音与连音切换能力的经典教材曲目。",
    auditionSignificanceEn: "Standard exam etude evaluating articulation agility and breath control balance.",
    pedagogicalFocusZh: [
      "连续单吐断音（Staccato）与圆滑连音（Legato）的毫秒级无缝切换",
      "低音 G2、A2、B2 到中音 C3 的清晰颗粒吐音"
    ],
    pedagogicalFocusEn: [
      "Seamless switching between crisp staccato and vocal legato",
      "Clean tonal clarity across low G2 to tenor C3"
    ],
    practiceStepsZh: [
      {
        step: 1,
        title: "单吐断音颗粒感",
        desc: "舌尖点触簧片尖端1/3，断音短促弹跳，气流在断奏之间保持恒定微压。",
        focusNote: "G2 - A2 - B2 - C3"
      }
    ],
    faqs: [
      {
        qZh: "从断音切换到连音时容易抢拍或音色发硬怎么纠正？",
        aZh: "注意在断奏的最后一个音不要猛烈停顿，气流顺畅过渡到连音的起始音，舌头自然退回原位。",
        qEn: "How to prevent harshness or rushing when switching from staccato to legato?",
        aEn: "Do not stop the air column abruptly on the last staccato note. Let the continuous breath glide smoothly into the first slurred note."
      },
      {
        qZh: "威森伯恩 Op.8 No.12 在考级中对应什么水平？主要训练演奏者的什么核心能力？",
        aZh: "对应英皇考级 5 级练习曲标准。主要考查演奏者在同一旋律动机中‘连音（Legato）与断音（Staccato）快速无缝切换’的高级机能，要求不仅手指换指无杂音，且气流在连断之间始终保持源源不断的动力支撑。",
        qEn: "What examination grade is Weissenborn Op.8 No.12, and what core technique does it evaluate?",
        aEn: "It is an ABRSM Grade 5 benchmark study. It evaluates the player's ability to transition instantaneously between silky legato and crisp staccato within the same musical phrase without dynamic dropouts or finger noise."
      },
      {
        qZh: "吹奏断音时下颌总跟着一动一动导致音准晃动，如何保持口型纹丝不动？",
        aZh: "下颌随吐音上下颤动是大管演奏的重大通病。练习时对着镜子将食指放在下巴上，吐音动作仅限舌尖与哨片前端的毫厘接触，下颌与两侧嘴角如‘橡胶圈’般完全锁固不动，保持音高与音色绝对统一。",
        qEn: "How do I prevent the lower jaw from chewing or bouncing during rapid staccato-to-legato shifts?",
        aEn: "Jaw bouncing causes pitch instability. Practice in front of a mirror with your finger resting against your chin: keep the jaw and lip ring completely stationary, allowing only the tip of the tongue to make subtle, micro-millimeter contact with the reed tip."
      }
    ],
    relatedSlugs: ["peter-and-the-wolf-grandfather", "telemann-bassoon-sonata-f-minor", "weissenborn-op8-no10-fast-staccato", "weissenborn-op8-no1-tone-method", "weissenborn-op8-no4-thirds-intervals", "mozart-bassoon-concerto-k191"],
    relatedArticleIds: ["practice-staccato-double-tonguing-clarity", "fingering-whisper-key-half-hole-fissure", "practice-rhythm-subdivision-metronome-sync", "care-oil-key-mechanics-lubrication"],
    relatedFingeringNotes: ["C3", "E3", "G3", "C4", "E4"],
    relatedOctave: "second",
    relatedTools: ["metronome", "tuner", "drone"]
  }
];

export function getScoreBySlug(slug: string): (Score & ScoreDetailSEOData) | null {
  const meta = SCORES_CATALOG.find((s) => s.slug === slug || s.id === slug);
  if (!meta) return null;
  const initial = INITIAL_SCORES.find((s) => s.id === meta.id);
  if (!initial) return null;
  const enSteps = PRACTICE_STEPS_EN_MAP[meta.slug] || PRACTICE_STEPS_EN_MAP[meta.id];
  return {
    ...initial,
    ...meta,
    practiceStepsEn: meta.practiceStepsEn || enSteps
  };
}

export function getAllScoreSlugs(): string[] {
  return SCORES_CATALOG.map((s) => s.slug);
}

export const ALL_SCORE_SEO_DATA = SCORES_CATALOG;
