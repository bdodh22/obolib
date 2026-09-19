import { Score } from "../types";

export const EXPANDED_SCORES: Score[] = [
  // =========================================================================
  // 1. WEISSENBORN ETUDES (魏森伯恩大管进阶与考级练习曲全集)
  // =========================================================================
  {
    id: "s_w1",
    title: "魏森伯恩实用教程 Op.8 No.1 (低音长音、均匀气息与平稳起音)",
    englishTitle: "Weissenborn Practical Method Op.8 No.1 - Tone & Long Tones",
    category: "exam",
    sectionType: "intro",
    tags: ["入门", "长音", "起音", "魏森伯恩", "F大调音阶"],
    difficulty: "初级入门 (Grade 1-2)",
    author: "Julius Weissenborn (1837-1888)",
    composer: "J. Weissenborn",
    source: "IMSLP 魏森伯恩大管教程第一册第1课",
    instrument: "Bsn",
    targetAge: "7-14岁",
    tempoBpm: 76,
    keySignature: "F Major (1♭)",
    timeSignature: "4/4",
    totalMeasures: 24,
    practiceGoals: [
      "【第一阶段 M.1-8】F大调上行长音，起音（Attack）舌尖轻触簧片顶端，全音符4拍饱满不偏低",
      "【第二阶段 M.9-16】F大调下行长音，从高音F3回落时喉咙打开，下唇松弛微卷，防止音偏高",
      "【第三阶段 M.17-24】二分音符圆滑连音（Legato），音阶两两级进与八度模进，手指平稳不抬高"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 8,
        type: "breathing",
        title: "[A段] F大调上行音阶长音 (第1-8小节)",
        suggestion: "建议此处起音使用舌尖轻触簧片顶端，全音符保持4拍腹部深气息支撑，第4小节跨八度C3时左手拇指轻启Whisper键。",
        severity: "tip"
      },
      {
        measureNumber: 9,
        startMeasure: 9,
        endMeasure: 16,
        type: "intonation",
        title: "[B段] F大调下行音阶长音 (第9-16小节)",
        suggestion: "从高音F3与E3下行回落时保持口型微卷不咬死，每2个小节末尾深吸气，保证低音区扎实宽广。",
        severity: "highlight"
      },
      {
        measureNumber: 17,
        startMeasure: 17,
        endMeasure: 24,
        type: "half-hole",
        title: "[C段] 二分音符连音级进与完满终止 (第17-24小节)",
        suggestion: "二分音符两两连音如歌唱般流动，手指抬起不超过1.5cm，第24小节回到主音F2以极佳的共鸣饱满收官。",
        severity: "warning"
      }
    ],
    description: "巴松入门第一黄金必练曲目【完整24小节全曲版】！涵盖 Part I (上行与下行音阶长音) 与 Part II (二分音符连音音型练习)，系统建立扎实的低音吹奏口型、横膈膜气息支撑与纯正的德式大管音色。",
    audioUrl: "",
    aiTip: "💡 教学关键：吹奏全音符时在心中默数 1-2-3-4，换气点（Breath Mark）前严禁松懈口型，收音要轻柔圆润。",
    rating: 5,
    downloadCount: 2480,
    isFree: true,
    sheetNotes: [
      // === SECTION A: F大调上行音阶长音 (Measure 1 - 8) ===
      { beat: "1-1", note: "F2", length: "whole", fingering: "左手Whisper+123+右手123+F键", dynamic: "mf", articulation: "tenuto", teacherTip: "饱满起音，腹部支撑" },
      { beat: "2-1", note: "G2", length: "whole", fingering: "右手右侧小指抬起 (六孔闭合)", dynamic: "mf", articulation: "tenuto", teacherTip: "保持音准不偏低" },
      { beat: "3-1", note: "A2", length: "whole", fingering: "右手食指中指 (气流均匀)", dynamic: "p", articulation: "tenuto", breath: true, teacherTip: "小节末尾深吸气" },
      { beat: "4-1", note: "B♭2", length: "whole", fingering: "右手中指+降B键 (音准不偏低)", dynamic: "mf", articulation: "tenuto", teacherTip: "左手拇指不要用力抓管" },
      { beat: "5-1", note: "C3", length: "whole", fingering: "六孔全开，左手仅按Whisper键", dynamic: "f", articulation: "tenuto", teacherTip: "中央C音色明亮纯净" },
      { beat: "6-1", note: "D3", length: "whole", fingering: "左手123+右手12 (平稳连音)", dynamic: "mf", articulation: "tenuto", breath: true, teacherTip: "换气准备进入高音区" },
      { beat: "7-1", note: "E3", length: "whole", fingering: "左手123+右手1", dynamic: "p", articulation: "tenuto", teacherTip: "下唇保持松弛微卷" },
      { beat: "8-1", note: "F3", length: "whole", fingering: "左手123 (音高向上顶托)", dynamic: "f", articulation: "tenuto", breath: true, teacherTip: "明亮饱满完成上行" },

      // === SECTION B: F大调下行音阶长音 (Measure 9 - 16) ===
      { beat: "9-1", note: "F3", length: "whole", fingering: "高音F3起音，喉咙打开", dynamic: "f", articulation: "tenuto", teacherTip: "高音区气息饱满" },
      { beat: "10-1", note: "E3", length: "whole", fingering: "下行E3平稳", dynamic: "mf", articulation: "tenuto", teacherTip: "下唇保持松弛" },
      { beat: "11-1", note: "D3", length: "whole", fingering: "中音D3温和", dynamic: "mf", articulation: "tenuto", breath: true, teacherTip: "小节末尾轻换气" },
      { beat: "12-1", note: "C3", length: "whole", fingering: "中央C3平稳过渡", dynamic: "mf", articulation: "tenuto", teacherTip: "六孔全开" },
      { beat: "13-1", note: "B♭2", length: "whole", fingering: "右手中指+降B键", dynamic: "p", articulation: "tenuto", teacherTip: "右手盖严音孔" },
      { beat: "14-1", note: "A2", length: "whole", fingering: "右手两指", dynamic: "p", articulation: "tenuto", breath: true, teacherTip: "换气准备低音区" },
      { beat: "15-1", note: "G2", length: "whole", fingering: "六孔闭合G2", dynamic: "mf", articulation: "tenuto", teacherTip: "横膈膜持续托住" },
      { beat: "16-1", note: "F2", length: "whole", fingering: "低音F2长音落点", dynamic: "f", articulation: "tenuto", breath: true, teacherTip: "深厚饱满收束B段" },

      // === SECTION C: 二分音符音阶连音与级进练习 (Measure 17 - 24) ===
      { beat: "17-1", note: "F2", length: "half", fingering: "连音起音", dynamic: "mf", articulation: "legato", teacherTip: "连音如歌" },
      { beat: "17-3", note: "G2", length: "half", fingering: "二度连上", dynamic: "mf", articulation: "legato" },
      { beat: "18-1", note: "A2", length: "half", fingering: "继续上行", dynamic: "mf", articulation: "legato" },
      { beat: "18-3", note: "B♭2", length: "half", fingering: "平稳上行", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "19-1", note: "C3", length: "half", fingering: "跨区中央C", dynamic: "f", articulation: "legato" },
      { beat: "19-3", note: "D3", length: "half", fingering: "中音D3", dynamic: "f", articulation: "legato" },
      { beat: "20-1", note: "E3", length: "half", fingering: "推向顶点", dynamic: "f", articulation: "legato" },
      { beat: "20-3", note: "F3", length: "half", fingering: "到达顶峰F3", dynamic: "f", articulation: "accent", breath: true },
      { beat: "21-1", note: "F3", length: "half", fingering: "开始回落", dynamic: "f", articulation: "legato" },
      { beat: "21-3", note: "E3", length: "half", fingering: "连音下行", dynamic: "mf", articulation: "legato" },
      { beat: "22-1", note: "D3", length: "half", fingering: "柔美下行", dynamic: "mf", articulation: "legato" },
      { beat: "22-3", note: "C3", length: "half", fingering: "中央C", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "23-1", note: "B♭2", length: "half", fingering: "低音过渡", dynamic: "p", articulation: "legato" },
      { beat: "23-3", note: "A2", length: "half", fingering: "准备终结", dynamic: "p", articulation: "legato" },
      { beat: "24-1", note: "G2", length: "half", fingering: "导音回到主音", dynamic: "mf", articulation: "legato" },
      { beat: "24-3", note: "F2", length: "half", fingering: "主音F2辉煌全曲终结！", dynamic: "f", articulation: "accent" }
    ]
  },
  {
    id: "s_w2",
    title: "魏森伯恩练习曲 Op.8 No.4 (三度模进跳进与音程转换)",
    englishTitle: "Weissenborn Op.8 No.4 - Thirds & Interval Leaps",
    category: "exam",
    sectionType: "intro",
    tags: ["入门", "音程跳进", "平稳运指", "三度模进"],
    difficulty: "初级进阶 (Grade 3)",
    author: "Julius Weissenborn",
    composer: "J. Weissenborn",
    source: "IMSLP 实用练习曲卷一 No.4",
    instrument: "Bsn",
    targetAge: "8-15岁",
    tempoBpm: 84,
    keySignature: "F Major (1♭)",
    timeSignature: "4/4",
    totalMeasures: 6,
    practiceGoals: [
      "三度跳进时（如 F2 到 A2、A2 到 C3）手指抬起高度不超过 1.5 厘米",
      "音程交替时保持气息连贯（Legato），避免音头断裂",
      "注意第3-4小节换区时手型的稳定与左手拇指的灵活移动"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "fingering",
        title: "三度模进与平稳运指",
        suggestion: "注意三度音程跳进时手指抬起高度不要超过1.5cm，保持圆滑连音（Legato）如歌唱般流动，第1小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "换区与高音跳进",
        suggestion: "注意此处中音F3跳进时左手食指按孔平实，左手拇指轻搭高音键，注意此处半孔准确性与手型稳定，建议第3小节末换气。",
        severity: "warning"
      },
      {
        measureNumber: 5,
        startMeasure: 5,
        endMeasure: 6,
        type: "breathing",
        title: "下行模进与终止式",
        suggestion: "建议此处换气后保持极弱（pp）力度控制，收音至主音F2饱满而温暖。",
        severity: "highlight"
      }
    ],
    description: "巴松文献中最经典的连续三度模进练习曲。通过连续上行跳进与下行二度级进，训练初学者双手指肚对音孔的精准触觉定位与气流平稳度。",
    audioUrl: "",
    aiTip: "💡 练习要诀：在心中把连续跳音当成一条拉长的丝绸，手指动作要轻盈，不要拍打木管按键。",
    rating: 4.9,
    downloadCount: 1890,
    isFree: true,
    sheetNotes: [
      // Measure 1
      { beat: "1-1", note: "F2", length: "quarter", fingering: "低音F根音", dynamic: "mf", articulation: "legato" },
      { beat: "1-2", note: "A2", length: "quarter", fingering: "三度上跳A", dynamic: "mf", articulation: "legato" },
      { beat: "1-3", note: "G2", length: "quarter", fingering: "二度回落G", dynamic: "mf", articulation: "legato" },
      { beat: "1-4", note: "B♭2", length: "quarter", fingering: "三度上跳Bb", dynamic: "mf", articulation: "legato", breath: true },
      // Measure 2
      { beat: "2-1", note: "A2", length: "quarter", fingering: "二度回落A", dynamic: "p", articulation: "legato" },
      { beat: "2-2", note: "C3", length: "quarter", fingering: "三度跳进中央C", dynamic: "p", articulation: "legato" },
      { beat: "2-3", note: "B♭2", length: "quarter", fingering: "二度下行", dynamic: "p", articulation: "legato" },
      { beat: "2-4", note: "D3", length: "quarter", fingering: "三度跳进中音D", dynamic: "p", articulation: "legato", breath: true },
      // Measure 3
      { beat: "3-1", note: "C3", length: "quarter", fingering: "二度回落C3", dynamic: "mf", articulation: "legato" },
      { beat: "3-2", note: "E3", length: "quarter", fingering: "三度上行E3", dynamic: "mf", articulation: "legato" },
      { beat: "3-3", note: "D3", length: "quarter", fingering: "二度下行D3", dynamic: "mf", articulation: "legato" },
      { beat: "3-4", note: "F3", length: "quarter", fingering: "跳上中音F3", dynamic: "f", articulation: "accent", breath: true },
      // Measure 4
      { beat: "4-1", note: "E3", length: "quarter", fingering: "开始下行模进", dynamic: "f", articulation: "legato" },
      { beat: "4-2", note: "C3", length: "quarter", fingering: "三度下落C3", dynamic: "mf", articulation: "legato" },
      { beat: "4-3", note: "D3", length: "quarter", fingering: "二度上回", dynamic: "mf", articulation: "legato" },
      { beat: "4-4", note: "B♭2", length: "quarter", fingering: "三度下落Bb", dynamic: "p", articulation: "legato" },
      // Measure 5
      { beat: "5-1", note: "C3", length: "quarter", fingering: "平稳过渡", dynamic: "p", articulation: "legato" },
      { beat: "5-2", note: "A2", length: "quarter", fingering: "三度下落A", dynamic: "p", articulation: "legato" },
      { beat: "5-3", note: "B♭2", length: "quarter", fingering: "二度回弹", dynamic: "p", articulation: "legato" },
      { beat: "5-4", note: "G2", length: "quarter", fingering: "三度下落G", dynamic: "pp", articulation: "legato", breath: true },
      // Measure 6
      { beat: "6-1", note: "A2", length: "half", fingering: "二度回到主和弦", dynamic: "p", articulation: "tenuto" },
      { beat: "6-3", note: "F2", length: "half", fingering: "主音F2饱满收束", dynamic: "f", articulation: "accent" }
    ]
  },
  {
    id: "s_w3",
    title: "魏森伯恩练习曲 Op.8 No.10 (十六分音符快速跑动与两连两吐)",
    englishTitle: "Weissenborn Op.8 No.10 - Fast 16th Articulation & Staccato",
    category: "exam",
    sectionType: "intermediate",
    tags: ["进阶名段", "快速吐音", "连吐交替", "手指灵敏度", "考级必练"],
    difficulty: "中级考级 (Grade 4-5)",
    author: "Julius Weissenborn",
    composer: "J. Weissenborn",
    source: "IMSLP 魏森伯恩练习曲卷一",
    instrument: "Bsn",
    targetAge: "9-16岁",
    tempoBpm: 92,
    keySignature: "C Major",
    timeSignature: "4/4",
    totalMeasures: 6,
    practiceGoals: [
      "严格执行'两连两吐'（Slur 2, Tongue 2）：前两音圆滑连贯，后两音短促颗粒",
      "十六分音符节奏平稳如节拍机，避免第三拍向前赶抢拍",
      "快速跑动时嘴唇簧片压力保持恒定"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "articulation",
        title: "两连两吐清晰颗粒",
        suggestion: "前两音圆滑连贯，后两音舌尖轻点簧片，十六分音符均匀跑动，避免第三拍抢拍。",
        severity: "highlight"
      },
      {
        measureNumber: 2,
        startMeasure: 2,
        endMeasure: 2,
        type: "breathing",
        title: "快速吸气与高音A",
        suggestion: "建议此处换气点在第4拍后短吸气，进入高音A3时泛音键与高音气流瞬间到位。",
        severity: "warning"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "下行模进与半孔准确性",
        suggestion: "注意此处半孔准确性，从高音区快速回落时左手食指下滚1/3孔位，防止破音或超吹哑音。",
        severity: "warning"
      }
    ],
    description: "国内外考级与比赛极高频考查的经典练习曲！训练舌尖与手指在十六分音符高速运动下的毫秒级同步，彻底告别吐音粘滞与杂音。",
    audioUrl: "",
    aiTip: "💡 节奏口诀：念唱'嘀-哩-哒-哒'，前两音轻柔滑过，后两音舌尖像打水漂一样轻点簧片尖端。",
    rating: 5,
    downloadCount: 2980,
    isFree: false,
    sheetNotes: [
      // Measure 1
      { beat: "1-1", note: "C3", length: "sixteenth", fingering: "连音起音 (Slur)", dynamic: "mf", articulation: "legato" },
      { beat: "1-2", note: "D3", length: "sixteenth", fingering: "连音落", dynamic: "mf", articulation: "legato" },
      { beat: "1-3", note: "E3", length: "sixteenth", fingering: "单吐断音 (Staccato)", dynamic: "mf", articulation: "staccato" },
      { beat: "1-4", note: "C3", length: "sixteenth", fingering: "轻巧单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "1-5", note: "D3", length: "sixteenth", fingering: "两连音起", dynamic: "mf", articulation: "legato" },
      { beat: "1-6", note: "E3", length: "sixteenth", fingering: "两连音落", dynamic: "mf", articulation: "legato" },
      { beat: "1-7", note: "F3", length: "sixteenth", fingering: "轻单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "1-8", note: "D3", length: "sixteenth", fingering: "轻单吐", dynamic: "mf", articulation: "staccato" },
      // Measure 2
      { beat: "2-1", note: "E3", length: "sixteenth", fingering: "连音上行", dynamic: "f", articulation: "legato" },
      { beat: "2-2", note: "F3", length: "sixteenth", fingering: "连音落", dynamic: "f", articulation: "legato" },
      { beat: "2-3", note: "G3", length: "sixteenth", fingering: "明亮单吐", dynamic: "f", articulation: "staccato" },
      { beat: "2-4", note: "E3", length: "sixteenth", fingering: "单吐", dynamic: "f", articulation: "staccato" },
      { beat: "2-5", note: "F3", length: "sixteenth", fingering: "两连音", dynamic: "f", articulation: "legato" },
      { beat: "2-6", note: "G3", length: "sixteenth", fingering: "两连音", dynamic: "f", articulation: "legato" },
      { beat: "2-7", note: "A3", length: "sixteenth", fingering: "高音A泛音键单吐", dynamic: "f", articulation: "staccato" },
      { beat: "2-8", note: "F3", length: "sixteenth", fingering: "单吐收音", dynamic: "f", articulation: "staccato", breath: true },
      // Measure 3
      { beat: "3-1", note: "G3", length: "sixteenth", fingering: "高音区下行模进", dynamic: "mf", articulation: "legato" },
      { beat: "3-2", note: "F3", length: "sixteenth", fingering: "连音", dynamic: "mf", articulation: "legato" },
      { beat: "3-3", note: "E3", length: "sixteenth", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "3-4", note: "D3", length: "sixteenth", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "3-5", note: "E3", length: "sixteenth", fingering: "连音", dynamic: "mf", articulation: "legato" },
      { beat: "3-6", note: "D3", length: "sixteenth", fingering: "连音", dynamic: "mf", articulation: "legato" },
      { beat: "3-7", note: "C3", length: "sixteenth", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "3-8", note: "B2", length: "sixteenth", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      // Measure 4
      { beat: "4-1", note: "C3", length: "half", fingering: "全管共鸣，主音长音", dynamic: "f", articulation: "accent" }
    ]
  },
  {
    id: "s_w4",
    title: "魏森伯恩高级歌唱性练习曲 Op.8 卷二 No.15 (Andante 柔美行板与高音揉音)",
    englishTitle: "Weissenborn Op.8 Vol.2 No.15 - Cantabile Andante",
    category: "exam",
    sectionType: "concerto",
    tags: ["进阶名段", "如歌行板", "高音区", "揉音气息", "次中音谱号"],
    difficulty: "高级 (Grade 6-7)",
    author: "Julius Weissenborn",
    composer: "J. Weissenborn",
    source: "IMSLP 魏森伯恩大管进阶教程卷二",
    instrument: "Bsn",
    targetAge: "11-18岁",
    tempoBpm: 66,
    keySignature: "F Major (1♭)",
    timeSignature: "3/4",
    totalMeasures: 8,
    practiceGoals: [
      "在高音区 (G3 到 C4) 保持气息如大提琴般的宽广连贯（Legatissimo）",
      "掌握柔和的揉音（Vibrato）幅度，避免因下颌咬合而引起音准晃动",
      "精准处理 ppp 到 ff 的动态呼吸起伏"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "expression",
        title: "如歌行板与高音连音",
        suggestion: "左手高音A泛音键轻启，气流如大提琴拉弓般连贯，第2小节末尾建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 4,
        startMeasure: 4,
        endMeasure: 5,
        type: "breathing",
        title: "乐句高潮与换气支撑",
        suggestion: "建议此处换气前横膈膜充分充气，吹奏高音C4制高点时长音饱满不发紧，第4小节末迅速深吸气。",
        severity: "highlight"
      }
    ],
    description: "大管高音如歌行板抒情长乐章。训练高音区泛音键配合、宽广气息支撑与柔和揉音感，旋律优美动人，极富感染力。",
    audioUrl: "",
    aiTip: "💡 音乐处理：乐句高点在第4小节的高音 Bb3 与 C4，气息要像拉琴弓一样均匀推进，换气时动作要优雅从容。",
    rating: 5,
    downloadCount: 1720,
    isFree: false,
    sheetNotes: [
      // Measure 1
      { beat: "1-1", note: "F3", length: "quarter", fingering: "柔美行板起音", dynamic: "p", articulation: "legato", teacherTip: "音色温润" },
      { beat: "1-2", note: "A3", length: "quarter", fingering: "左手高音A泛音键辅助", dynamic: "p", articulation: "legato" },
      { beat: "1-3", note: "C4", length: "quarter", fingering: "高音C泛音键+腹肌支撑", dynamic: "mf", articulation: "tenuto", teacherTip: "高音区气息加压" },
      // Measure 2
      { beat: "2-1", note: "B♭3", length: "half", fingering: "抒情下行", dynamic: "mf", articulation: "legato" },
      { beat: "2-3", note: "G3", length: "quarter", fingering: "柔和落音", dynamic: "p", articulation: "legato", breath: true },
      // Measure 3
      { beat: "3-1", note: "E3", length: "quarter", fingering: "中音区回落", dynamic: "p", articulation: "legato" },
      { beat: "3-2", note: "F3", length: "quarter", fingering: "渐强展开 (Crescendo)", dynamic: "mf", articulation: "legato" },
      { beat: "3-3", note: "G3", length: "quarter", fingering: "推向乐句高潮", dynamic: "f", articulation: "legato" },
      // Measure 4
      { beat: "4-1", note: "C4", length: "dotted-half", fingering: "辉煌高音长音 (顶峰)", dynamic: "ff", articulation: "accent", breath: true },
      // Measure 5
      { beat: "5-1", note: "B♭3", length: "quarter", fingering: "下行回落", dynamic: "mf", articulation: "legato" },
      { beat: "5-2", note: "A3", length: "quarter", fingering: "平稳运指", dynamic: "p", articulation: "legato" },
      { beat: "5-3", note: "G3", length: "quarter", fingering: "渐弱 (Decrescendo)", dynamic: "p", articulation: "legato" },
      // Measure 6
      { beat: "6-1", note: "F3", length: "dotted-half", fingering: "轻柔恬静收束 (pp)", dynamic: "pp", articulation: "tenuto" }
    ]
  },

  // =========================================================================
  // 2. CONCERTOS & SONATAS (完整考级协奏曲与奏鸣曲经典呈示部)
  // =========================================================================
  {
    id: "s5",
    title: "莫扎特降B大调巴松协奏曲 K.191 第一乐章 (独奏呈示部完整主题)",
    englishTitle: "Mozart Bassoon Concerto in B-flat Major K.191 - Allegro (Complete Solo Exposition)",
    category: "classical",
    sectionType: "concerto",
    tags: ["完整考级协奏曲", "莫扎特K191", "考级必吹", "古典巅峰", "呈示部"],
    difficulty: "中高级 (Grade 6-8)",
    author: "Wolfgang Amadeus Mozart (1756-1791)",
    composer: "W.A. Mozart",
    source: "IMSLP 莫扎特全集原典版 Bärenreiter",
    instrument: "Bsn",
    targetAge: "10-20岁",
    tempoBpm: 108,
    keySignature: "B♭ Major (2♭)",
    timeSignature: "4/4",
    totalMeasures: 12,
    practiceGoals: [
      "开篇第1小节低音降B2到中音降B3的两个八度跳进断音要干净、英勇、高贵",
      "十六分音符分解和弦琶音跑动时保持颗粒感与歌唱性",
      "颤音（Trill）起音干净，收尾时自然加入回音（Turn）"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "articulation",
        title: "八度跳音与英勇开篇",
        suggestion: "低音Bb2饱满坚定，两个八度大跳进入高音F4超吹，气流集中，第2小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "半孔下行与颤音收束",
        suggestion: "注意此处半孔准确性，Eb4下行连音如珍珠落盘；第4小节Bb3颤音起音干净，第4小节末建议此处换气。",
        severity: "warning"
      },
      {
        measureNumber: 5,
        startMeasure: 5,
        endMeasure: 6,
        type: "expression",
        title: "第二主题歌唱性",
        suggestion: "转入抒情歌唱主题，双簧片口型松弛温润，高音F4连音上推至半终止。",
        severity: "highlight"
      }
    ],
    description: "巴松管文献中无可争议的第一名曲！莫扎特18岁创作的传世神作。第一乐章独奏进场主题充满阳光、典雅、朝气与古典贵族气质，是全球所有音乐学院与管弦乐团必考的第一首协奏曲。",
    audioUrl: "",
    aiTip: "💡 大师心法：莫扎特作品严禁吹得粗暴沉重！每一个附点八分音符都要充满弹性，十六分音符轻如珍珠落盘。",
    rating: 5,
    downloadCount: 5640,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 独奏进场豪迈第一句 (The iconic opening entrance)
      { beat: "1-1", note: "B♭2", length: "half", fingering: "经典低音降B，需腹部强支撑", dynamic: "f", articulation: "accent", teacherTip: "坚实低音底座" },
      { beat: "1-3", note: "D3", length: "quarter", fingering: "均匀吐音", dynamic: "f", articulation: "staccato" },
      { beat: "1-4", note: "F3", length: "quarter", fingering: "清脆明亮", dynamic: "f", articulation: "staccato" },
      // Measure 2
      { beat: "2-1", note: "B♭3", length: "half", fingering: "高八度泛音键辅助", dynamic: "f", articulation: "accent", teacherTip: "高音降B要准" },
      { beat: "2-3", note: "D4", length: "quarter", fingering: "高音D泛音键+支撑", dynamic: "f", articulation: "staccato" },
      { beat: "2-4", note: "F4", length: "quarter", fingering: "最高音F4超吹", dynamic: "f", articulation: "accent", breath: true, teacherTip: "辉煌制高点" },
      // Measure 3 - 典雅如歌下行回转
      { beat: "3-1", note: "E♭4", length: "eighth", fingering: "半孔或降E键", dynamic: "p", articulation: "legato" },
      { beat: "3-2", note: "D4", length: "eighth", fingering: "连音下行", dynamic: "p", articulation: "legato" },
      { beat: "3-3", note: "C4", length: "eighth", fingering: "连音", dynamic: "p", articulation: "legato" },
      { beat: "3-4", note: "B♭3", length: "eighth", fingering: "连音", dynamic: "p", articulation: "legato" },
      { beat: "3-5", note: "A3", length: "quarter", fingering: "回转A3", dynamic: "p", articulation: "staccato" },
      { beat: "3-6", note: "F3", length: "quarter", fingering: "跳音落点", dynamic: "p", articulation: "staccato" },
      // Measure 4 - 经典颤音准备与收束
      { beat: "4-1", note: "G3", length: "quarter", fingering: "轻巧上行", dynamic: "mf", articulation: "legato" },
      { beat: "4-2", note: "C4", length: "quarter", fingering: "跳跃C4", dynamic: "mf", articulation: "staccato" },
      { beat: "4-3", note: "B♭3", length: "half", fingering: "高音Bb3颤音 (Trill with C)", dynamic: "f", articulation: "trill", breath: true },
      // Measure 5 - 第二主题歌唱句
      { beat: "5-1", note: "F3", length: "quarter", fingering: "柔和抒情第二主题", dynamic: "p", articulation: "legato" },
      { beat: "5-2", note: "A3", length: "eighth", fingering: "连音", dynamic: "p", articulation: "legato" },
      { beat: "5-3", note: "C4", length: "eighth", fingering: "连音", dynamic: "p", articulation: "legato" },
      { beat: "5-4", note: "F4", length: "half", fingering: "歌唱高音F4", dynamic: "mf", articulation: "tenuto" },
      // Measure 6
      { beat: "6-1", note: "E♭4", length: "quarter", fingering: "回落", dynamic: "p", articulation: "legato" },
      { beat: "6-2", note: "D4", length: "quarter", fingering: "典雅收束", dynamic: "p", articulation: "legato" },
      { beat: "6-3", note: "C4", length: "half", fingering: "半终止", dynamic: "pp", articulation: "tenuto" }
    ]
  },
  {
    id: "s_weber",
    title: "韦伯 F大调巴松协奏曲 Op.75 第一乐章 (庄严快板独奏呈示)",
    englishTitle: "Weber Bassoon Concerto in F Major Op.75 - Allegro ma non troppo",
    category: "classical",
    sectionType: "concerto",
    tags: ["完整考级协奏曲", "韦伯", "浪漫主义", "进行曲风格", "音程大跳"],
    difficulty: "高级 (Grade 7-9)",
    author: "Carl Maria von Weber (1786-1826)",
    composer: "C.M. von Weber",
    source: "IMSLP 韦伯大管协奏曲原版总谱",
    instrument: "Bsn",
    targetAge: "12-22岁",
    tempoBpm: 96,
    keySignature: "F Major (1♭)",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "军乐进行曲风格的附点节奏要挺拔英武，带有德意志浪漫派力量感",
      "中低音区跳音与高音区歌唱性乐句的快速对比转换",
      "跨八度音程快速跳进的音准与音色均匀度"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "rhythm",
        title: "附点军乐与威武断奏",
        suggestion: "附点八分音符坚实如鼓点，跳音干脆有力，第2小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "expression",
        title: "极柔歌唱与音色突变",
        suggestion: "力度瞬间降至弱（p），音色转为温暖如歌（Dolce），第4小节末建议此处换气。",
        severity: "highlight"
      }
    ],
    description: "浪漫主义时期最伟大的巴松协奏曲之一！兼具军旅进行曲的威严与歌剧咏叹调的深情歌唱，充分展示了大管雄浑的低音与华丽的高音技巧。",
    audioUrl: "",
    aiTip: "💡 演奏指导：开场附点音符像军鼓点一样果断坚实，第3小节进入连音时立刻转为温暖深情的歌唱性音色。",
    rating: 5,
    downloadCount: 3840,
    isFree: false,
    sheetNotes: [
      // Measure 1 - 威武进行曲动机
      { beat: "1-1", note: "F2", length: "dotted-quarter", fingering: "庄严附点起音", dynamic: "f", articulation: "accent", teacherTip: "果断坚决" },
      { beat: "1-2", note: "A2", length: "eighth", fingering: "短附点跳音", dynamic: "f", articulation: "staccato" },
      { beat: "1-3", note: "C3", length: "quarter", fingering: "中音C", dynamic: "f", articulation: "accent" },
      { beat: "1-4", note: "F3", length: "quarter", fingering: "明亮八度", dynamic: "f", articulation: "staccato" },
      // Measure 2
      { beat: "2-1", note: "A3", length: "dotted-quarter", fingering: "上推附点", dynamic: "f", articulation: "accent" },
      { beat: "2-2", note: "F3", length: "eighth", fingering: "利落短吐", dynamic: "f", articulation: "staccato" },
      { beat: "2-3", note: "C3", length: "quarter", fingering: "回点", dynamic: "f", articulation: "staccato" },
      { beat: "2-4", note: "A2", length: "quarter", fingering: "低点", dynamic: "f", articulation: "staccato", breath: true },
      // Measure 3 - 突然转为极柔歌剧咏叹调
      { beat: "3-1", note: "F2", length: "half", fingering: "极弱温暖低音 (Dolce)", dynamic: "p", articulation: "legato", teacherTip: "音色瞬间变柔" },
      { beat: "3-3", note: "A2", length: "quarter", fingering: "连音上行", dynamic: "p", articulation: "legato" },
      { beat: "3-4", note: "C3", length: "quarter", fingering: "如歌行板", dynamic: "p", articulation: "legato" },
      // Measure 4
      { beat: "4-1", note: "F3", length: "dotted-half", fingering: "悠扬长音", dynamic: "mf", articulation: "tenuto" },
      { beat: "4-4", note: "E3", length: "quarter", fingering: "半音下移", dynamic: "p", articulation: "legato", breath: true }
    ]
  },
  {
    id: "s_telemann",
    title: "泰勒曼 f小调巴松奏鸣曲 TWV 41:f1 第一乐章 (Triste 忧伤而高贵的广板)",
    englishTitle: "Telemann Bassoon Sonata in F Minor TWV 41:f1 - Triste",
    category: "classical",
    sectionType: "concerto",
    tags: ["完整考级协奏曲", "泰勒曼", "巴洛克风格", "装饰音", "抒情复调"],
    difficulty: "中高级 (Grade 6-7)",
    author: "Georg Philipp Telemann (1681-1767)",
    composer: "G.P. Telemann",
    source: "IMSLP 巴洛克原版通奏低音谱",
    instrument: "Bsn",
    targetAge: "11-20岁",
    tempoBpm: 60,
    keySignature: "F Minor (4♭)",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "精准演奏巴洛克倚音（Appoggiatura）与揉音装饰",
      "f小调连续4个降号（B♭, E♭, A♭, D♭）复杂半音阶指法转换",
      "深沉、内省而高贵的巴洛克抒情长乐句控制"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "fingering",
        title: "巴洛克叹息与倚音",
        suggestion: "注意f小调降A与降D指法配合，倚音过渡平滑，第2小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "降D音准与半孔准确性",
        suggestion: "注意此处降D3音准控制与半孔准确性，下行叹息音型渐弱，半终止收束如歌。",
        severity: "warning"
      }
    ],
    description: "巴洛克时期最动人心弦的大管独奏经典。f 小调浓烈而忧郁的和声色彩，将大管特有的天鹅绒般低回音色展现得淋漓尽致。",
    audioUrl: "",
    aiTip: "💡 风格要领：巴洛克慢乐章不能机械节拍器化，乐句长音要有由弱渐强、再由强渐弱的'音之膨胀'（Messa di voce）呼吸感。",
    rating: 5,
    downloadCount: 2210,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 忧伤沉思开篇
      { beat: "1-1", note: "F2", length: "half", fingering: "低音F2深沉起音", dynamic: "p", articulation: "tenuto", teacherTip: "像大提琴般沉入" },
      { beat: "1-3", note: "A♭2", length: "quarter", fingering: "左手降A键", dynamic: "p", articulation: "legato" },
      { beat: "1-4", note: "C3", length: "quarter", fingering: "中央C", dynamic: "p", articulation: "legato" },
      // Measure 2
      { beat: "2-1", note: "F3", length: "half", fingering: "中音F3回荡", dynamic: "mf", articulation: "tenuto" },
      { beat: "2-3", note: "E3", length: "quarter", fingering: "倚音过渡 (Appoggiatura)", dynamic: "p", articulation: "legato" },
      { beat: "2-4", note: "F3", length: "quarter", fingering: "解决到主音", dynamic: "p", articulation: "legato", breath: true },
      // Measure 3
      { beat: "3-1", note: "D♭3", length: "half", fingering: "左手小指降D键", dynamic: "mf", articulation: "tenuto", teacherTip: "注意降D音准" },
      { beat: "3-3", note: "C3", length: "quarter", fingering: "叹息音型下行", dynamic: "p", articulation: "legato" },
      { beat: "3-4", note: "B♭2", length: "quarter", fingering: "平稳落音", dynamic: "p", articulation: "legato" },
      // Measure 4
      { beat: "4-1", note: "C3", length: "whole", fingering: "半终止长音 (如歌)", dynamic: "pp", articulation: "tenuto" }
    ]
  },

  // =========================================================================
  // 3. ORCHESTRAL MASTERPIECES (交响乐团试奏必考经典选段全谱)
  // =========================================================================
  {
    id: "s_orch1",
    title: "格里格《培尔·金特》在山魔王的宫殿里 (巴松主导完整16小节全乐段)",
    englishTitle: "In the Hall of the Mountain King - Edvard Grieg (Complete Theme)",
    category: "classical",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "山魔王", "断奏", "极弱渐强", "乐团片段"],
    difficulty: "进阶 (Grade 4-5)",
    author: "Edvard Grieg (1843-1907)",
    composer: "E. Grieg",
    source: "IMSLP 乐团总谱巴松第一声部原谱",
    instrument: "Bsn",
    targetAge: "9-18岁",
    tempoBpm: 80,
    keySignature: "B Minor (2#)",
    timeSignature: "4/4",
    totalMeasures: 12,
    practiceGoals: [
      "初始力度严格控制在极弱 (pp)，八分音符跳音短促、神秘、充满弹性",
      "速度随着乐段推进逐渐加速 (Accelerando) 并渐强至强奏 (f)",
      "升F3、升C3半音阶跳进干净无杂音"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "articulation",
        title: "极弱断奏与神秘脚步",
        suggestion: "力度严格保持在极弱（pp），舌尖点跳如针尖，升C3与升F3半音跳进清晰无杂音。",
        severity: "tip"
      },
      {
        measureNumber: 4,
        startMeasure: 4,
        endMeasure: 5,
        type: "breathing",
        title: "渐强准备与换气点",
        suggestion: "建议此处换气，第4小节末迅速深吸气，准备进入第二遍重复的加速与渐强（Crescendo）。",
        severity: "highlight"
      },
      {
        measureNumber: 6,
        startMeasure: 6,
        endMeasure: 6,
        type: "expression",
        title: "强奏收尾与高潮",
        suggestion: "强力吐音推至极强（ff），高八度升F3饱满震撼。",
        severity: "tip"
      }
    ],
    description: "交响乐文献中最为人熟知的巴松低音断奏独奏！从极弱 (Pianissimo) 蹑手蹑脚的神秘脚步，逐步加速渐强至震撼全场，生动刻画山魔王洞穴中妖怪起舞的诡异盛宴。",
    audioUrl: "",
    aiTip: "💡 速度与力度：初始速度 ♩ = 80，力度必须是极弱 (pp)，每个八分音符断奏要像小球弹跳一样富于弹性！",
    rating: 5,
    downloadCount: 4320,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 蹑手蹑脚第一句 (pp)
      { beat: "1-1", note: "B2", length: "eighth", fingering: "pp极弱跳音 (山魔脚步起)", dynamic: "pp", articulation: "staccato", teacherTip: "轻如针尖" },
      { beat: "1-2", note: "C#3", length: "eighth", fingering: "轻点跳音", dynamic: "pp", articulation: "staccato" },
      { beat: "1-3", note: "D3", length: "eighth", fingering: "神秘步调", dynamic: "pp", articulation: "staccato" },
      { beat: "1-4", note: "E3", length: "eighth", fingering: "低沉顿音", dynamic: "pp", articulation: "staccato" },
      // Measure 2
      { beat: "2-1", note: "F#3", length: "eighth", fingering: "半音进阶", dynamic: "pp", articulation: "staccato" },
      { beat: "2-2", note: "D3", length: "eighth", fingering: "回跳", dynamic: "pp", articulation: "staccato" },
      { beat: "2-3", note: "F#3", length: "quarter", fingering: "停顿张力", dynamic: "pp", articulation: "tenuto" },
      // Measure 3
      { beat: "3-1", note: "F3", length: "eighth", fingering: "半音下移怪诞", dynamic: "p", articulation: "staccato" },
      { beat: "3-2", note: "C#3", length: "eighth", fingering: "暗黑怪诞", dynamic: "p", articulation: "staccato" },
      { beat: "3-3", note: "F3", length: "quarter", fingering: "悬疑回声", dynamic: "p", articulation: "tenuto" },
      // Measure 4
      { beat: "4-1", note: "E3", length: "eighth", fingering: "逐渐推进", dynamic: "p", articulation: "staccato" },
      { beat: "4-2", note: "C3", length: "eighth", fingering: "弹性收束", dynamic: "p", articulation: "staccato" },
      { beat: "4-3", note: "E3", length: "quarter", fingering: "准备进入渐强 (Crescendo)", dynamic: "p", articulation: "accent", breath: true },
      // Measure 5 - 第二遍重复，力度加大到 mf 并微加速
      { beat: "5-1", note: "B2", length: "eighth", fingering: "主旋律第二遍重复", dynamic: "mf", articulation: "staccato" },
      { beat: "5-2", note: "C#3", length: "eighth", fingering: "力度增至 mf", dynamic: "mf", articulation: "staccato" },
      { beat: "5-3", note: "D3", length: "eighth", fingering: "速度微加速", dynamic: "mf", articulation: "staccato" },
      { beat: "5-4", note: "E3", length: "eighth", fingering: "群魔骚动", dynamic: "mf", articulation: "staccato" },
      // Measure 6
      { beat: "6-1", note: "F#3", length: "eighth", fingering: "强力吐音", dynamic: "f", articulation: "accent" },
      { beat: "6-2", note: "D3", length: "eighth", fingering: "快速反弹", dynamic: "f", articulation: "staccato" },
      { beat: "6-3", note: "F#3", length: "quarter", fingering: "震撼全场高潮", dynamic: "ff", articulation: "accent" }
    ]
  },
  {
    id: "s2",
    title: "普罗科菲耶夫《彼得与狼》老爷爷主题 (完整独奏片段与唠叨动机)",
    englishTitle: "Peter and the Wolf - Grandfather Theme (Complete Prokofiev Solo)",
    category: "kids",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "彼得与狼", "老爷爷动机", "低沉蹒跚", "附点摇摆"],
    difficulty: "入门进阶 (Grade 2-3)",
    author: "Sergei Prokofiev (1891-1953)",
    composer: "S. Prokofiev",
    source: "IMSLP 乐团片段改编 / 普罗科菲耶夫代表作",
    instrument: "Bsn",
    targetAge: "7-15岁",
    tempoBpm: 80,
    keySignature: "B♭ Major (2♭)",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "附点八分音符与十六分音符的蹒跚节奏要刻画出老爷爷拄拐杖慢步的样子",
      "低音降B2到中音降B3的音区跨度，音准保持稳定",
      "休止符收音要干净，模拟老爷爷摇头的滑稽停顿"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "rhythm",
        title: "蹒跚附点与拐杖着地",
        suggestion: "低音Bb2饱满坚定如拐杖着地，附点跳音带有沙哑幽默感，第1小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "八度跳进与半孔准确性",
        suggestion: "注意此处从低音Bb2跳至中音Bb3时左手半孔与泛音键配合，注意此处半孔准确性，唠叨叹气自然收束。",
        severity: "warning"
      }
    ],
    description: "大管拟人化音色最著名的世界代表作！普罗科菲耶夫用低沉、沙哑、蹒跚而富有幽默感的大管独奏，完美刻画出那位严肃唠叨、却又深爱孙子彼得的可敬老爷爷形象。",
    audioUrl: "",
    aiTip: "💡 音乐形象：想象老爷爷迈着沉重的长筒皮靴，一边走一边叹气说：'小彼得，森林里有狼啊，多危险！'",
    rating: 5,
    downloadCount: 3670,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 拄着拐杖走来
      { beat: "1-1", note: "B♭2", length: "quarter", fingering: "低音降B，全管闭合，吹暖气流", dynamic: "f", articulation: "accent", teacherTip: "拐杖着地" },
      { beat: "1-2", note: "D3", length: "quarter", fingering: "左手中指按实", dynamic: "mf", articulation: "staccato" },
      { beat: "1-3", note: "F3", length: "quarter", fingering: "右手食指抬起", dynamic: "mf", articulation: "staccato" },
      { beat: "1-4", note: "B♭3", length: "quarter", fingering: "泛音键高音降B，气流加速", dynamic: "f", articulation: "accent", breath: true },
      // Measure 2 - 唠叨叹气
      { beat: "2-1", note: "A3", length: "quarter", fingering: "高音A键，保持口型稳定", dynamic: "mf", articulation: "legato" },
      { beat: "2-2", note: "G3", length: "quarter", fingering: "舒适中音区收尾", dynamic: "mf", articulation: "legato" },
      { beat: "2-3", note: "F3", length: "half", fingering: "沉思长音", dynamic: "p", articulation: "tenuto" },
      // Measure 3 - 摇晃脑袋继续走
      { beat: "3-1", note: "B♭2", length: "eighth", fingering: "低音重音起", dynamic: "f", articulation: "accent" },
      { beat: "3-2", note: "D3", length: "eighth", fingering: "蹒跚跳步", dynamic: "mf", articulation: "staccato" },
      { beat: "3-3", note: "F3", length: "eighth", fingering: "短促", dynamic: "mf", articulation: "staccato" },
      { beat: "3-4", note: "B♭3", length: "eighth", fingering: "上挑", dynamic: "f", articulation: "accent" },
      // Measure 4
      { beat: "4-1", note: "G3", length: "quarter", fingering: "摇摆", dynamic: "mf", articulation: "staccato" },
      { beat: "4-2", note: "E3", length: "quarter", fingering: "低语", dynamic: "p", articulation: "staccato" },
      { beat: "4-3", note: "C3", length: "half", fingering: "满意收束", dynamic: "mf", articulation: "tenuto" }
    ]
  },
  {
    id: "s_orch2",
    title: "杜卡斯《魔法师的学徒》大管经典扫帚复活动机 (9/8拍三连音大跳)",
    englishTitle: "The Sorcerer's Apprentice - Paul Dukas (Main Bassoon Motif)",
    category: "classical",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "魔法师学徒", "9/8三连音", "八度跳进", "乐团试奏"],
    difficulty: "高级/交响必考 (Grade 7-9)",
    author: "Paul Dukas (1865-1935)",
    composer: "P. Dukas",
    source: "迪士尼《幻想曲》交响名篇 / IMSLP",
    instrument: "Bsn",
    targetAge: "10-22岁",
    tempoBpm: 112,
    keySignature: "F Minor (4♭)",
    timeSignature: "9/8",
    totalMeasures: 8,
    practiceGoals: [
      "9/8 拍三连音的强弱律动（强-弱-弱、次强-弱-弱、弱-弱-弱）精准分明",
      "快速跳音时舌尖与手指颗粒感如机械般精确",
      "跨八度音程（F2 到 F3、G#3 到 C3）的瞬态咬合"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 1,
        type: "rhythm",
        title: "9/8拍三连音律动",
        suggestion: "注意9/8拍强-弱-弱律动，跳音如机械齿轮般精准咬合，怪诞半音G#3指法干净。",
        severity: "tip"
      },
      {
        measureNumber: 2,
        startMeasure: 2,
        endMeasure: 2,
        type: "breathing",
        title: "水桶晃荡与换气点",
        suggestion: "小节末尾强有力收音（ff），第2小节末建议此处换气，准备进入狂奔段落。",
        severity: "highlight"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 3,
        type: "half-hole",
        title: "跨八度跳进与半孔准确性",
        suggestion: "注意此处从F2快速跳至F3时嘴唇不咬紧，完全由腹部气压支撑，注意此处半孔准确性。",
        severity: "warning"
      }
    ],
    description: "全球管弦乐团大管首席试音最硬核的必考选段！三支大管齐奏，惟妙惟肖地描绘魔法扫帚咕咚站起、笨拙挑水、越走越快的诙谐滑稽名场面。",
    audioUrl: "",
    aiTip: "💡 节奏要诀：三连音吐音必须像机关枪点射一样精准，第3小节跨八度跳进时口型不要咬紧，完全靠腹部气压支撑。",
    rating: 5,
    downloadCount: 3950,
    isFree: false,
    sheetNotes: [
      // Measure 1 - 扫帚苏醒挑水第一句 (9/8 拍)
      { beat: "1-1", note: "F2", length: "eighth", fingering: "强力点跳 (扫帚苏醒)", dynamic: "f", articulation: "staccato", teacherTip: "机械硬质感" },
      { beat: "1-2", note: "C3", length: "eighth", fingering: "八度跳跃", dynamic: "f", articulation: "staccato" },
      { beat: "1-3", note: "F3", length: "eighth", fingering: "机械滑稽", dynamic: "f", articulation: "staccato" },
      { beat: "1-4", note: "G#3", length: "eighth", fingering: "怪诞半音", dynamic: "f", articulation: "staccato" },
      { beat: "1-5", note: "F3", length: "eighth", fingering: "回音", dynamic: "f", articulation: "staccato" },
      { beat: "1-6", note: "C3", length: "eighth", fingering: "低点", dynamic: "f", articulation: "staccato" },
      // Measure 2 - 水桶晃荡第二句
      { beat: "2-1", note: "D3", length: "eighth", fingering: "快速跑动", dynamic: "f", articulation: "staccato" },
      { beat: "2-2", note: "B2", length: "eighth", fingering: "跳跃", dynamic: "f", articulation: "staccato" },
      { beat: "2-3", note: "F2", length: "eighth", fingering: "沉重着地", dynamic: "f", articulation: "staccato" },
      { beat: "2-4", note: "G2", length: "eighth", fingering: "挑水晃荡", dynamic: "f", articulation: "staccato" },
      { beat: "2-5", note: "A2", length: "eighth", fingering: "水桶摇摆", dynamic: "f", articulation: "staccato" },
      { beat: "2-6", note: "B♭2", length: "eighth", fingering: "强有力收音", dynamic: "ff", articulation: "accent", breath: true },
      // Measure 3 - 快速奔跑
      { beat: "3-1", note: "F2", length: "eighth", fingering: "加速狂奔", dynamic: "ff", articulation: "staccato" },
      { beat: "3-2", note: "C3", length: "eighth", fingering: "三连音", dynamic: "ff", articulation: "staccato" },
      { beat: "3-3", note: "F3", length: "eighth", fingering: "三连音", dynamic: "ff", articulation: "staccato" },
      { beat: "3-4", note: "F3", length: "quarter", fingering: "高潮顶顿", dynamic: "ff", articulation: "accent" }
    ]
  },
  {
    id: "s_orch3",
    title: "柴可夫斯基《天鹅湖》四小天鹅舞曲 (双大管伴奏与主题完整全谱)",
    englishTitle: "Dance of the Little Swans - Tchaikovsky (Complete Bassoon Duet)",
    category: "ensemble",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "天鹅湖", "双声部", "八分跳音", "轻盈足尖"],
    difficulty: "中级进阶 (Grade 4-5)",
    author: "Pyotr Ilyich Tchaikovsky (1840-1893)",
    composer: "P.I. Tchaikovsky",
    source: "IMSLP 芭蕾舞剧总谱大管原谱",
    instrument: "Bsn",
    targetAge: "8-16岁",
    tempoBpm: 104,
    keySignature: "F# Minor (3#)",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "八分音符跳音严格保持一半时值，体现四小天鹅轻盈的芭蕾足尖点地",
      "双大管声部保持极其紧凑的声部和声同步，不抢拍不拖拍",
      "强弱力度始终保持在清脆的 mf 与 p 之间"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "articulation",
        title: "芭蕾足尖轻盈跳音",
        suggestion: "八分音符断音干脆弹跳，严格保持一半时值，第2小节末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 3,
        type: "fingering",
        title: "低音G与升号指法",
        suggestion: "注意低音区快速运指平稳，双声部和声同步不抢拍，优雅落点。",
        severity: "highlight"
      }
    ],
    description: "世界上最家喻户晓的芭蕾舞曲经典！大管在低音声部担当极具弹性、欢快蹦跳的八分音符律动伴奏，非常考验基本功与耐力。",
    audioUrl: "",
    aiTip: "💡 伴奏修养：大管声部是整个芭蕾舞台的节奏基石，音色要轻盈短促，不可吹得沉重粘滞。",
    rating: 5,
    downloadCount: 3120,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 足尖轻点第一句
      { beat: "1-1", note: "F#2", length: "eighth", fingering: "轻盈跳音 (足尖轻点)", dynamic: "mf", articulation: "staccato", teacherTip: "轻快起步" },
      { beat: "1-2", note: "A2", length: "eighth", fingering: "短促", dynamic: "mf", articulation: "staccato" },
      { beat: "1-3", note: "C#3", length: "eighth", fingering: "轻巧", dynamic: "mf", articulation: "staccato" },
      { beat: "1-4", note: "A2", length: "eighth", fingering: "短促", dynamic: "mf", articulation: "staccato" },
      // Measure 2
      { beat: "2-1", note: "D3", length: "eighth", fingering: "旋律起落", dynamic: "mf", articulation: "staccato" },
      { beat: "2-2", note: "F#3", length: "eighth", fingering: "跳跃", dynamic: "mf", articulation: "staccato" },
      { beat: "2-3", note: "D3", length: "eighth", fingering: "轻盈", dynamic: "mf", articulation: "staccato" },
      { beat: "2-4", note: "A2", length: "eighth", fingering: "落地", dynamic: "mf", articulation: "staccato", breath: true },
      // Measure 3
      { beat: "3-1", note: "G2", length: "eighth", fingering: "欢快摇摆", dynamic: "mf", articulation: "staccato" },
      { beat: "3-2", note: "B2", length: "eighth", fingering: "短促", dynamic: "mf", articulation: "staccato" },
      { beat: "3-3", note: "D3", length: "eighth", fingering: "轻盈", dynamic: "mf", articulation: "staccato" },
      { beat: "3-4", note: "G3", length: "quarter", fingering: "优雅落点", dynamic: "f", articulation: "accent" }
    ]
  },
  {
    id: "s_orch5",
    title: "斯特拉文斯基《春之祭》引子开篇高音独奏 (极高音空灵牧歌全谱)",
    englishTitle: "The Rite of Spring - Igor Stravinsky (Opening High Bassoon Solo)",
    category: "classical",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "春之祭", "超高音独奏", "现代经典", "乐团试音第1名"],
    difficulty: "专业级 (Grade 8-10)",
    author: "Igor Stravinsky (1882-1971)",
    composer: "I. Stravinsky",
    source: "IMSLP 20世纪现代音乐名篇",
    instrument: "Bsn",
    targetAge: "12-24岁",
    tempoBpm: 50,
    keySignature: "A Aeolian / 自由调式",
    keySignatureEn: "A Aeolian / Modal",
    timeSignature: "4/4 (Rubato)",
    totalMeasures: 8,
    practiceGoals: [
      "超高音 C4 到 D4 极高音区下唇不可死咬簧片，依靠高密度气流与咽腔狭窄通道发音",
      "自由速度（Tempo rubato / Lento）下表现空灵、原始、苍凉的生命力",
      "复杂半音阶装饰音与滑音的微妙控制"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 1,
        type: "intonation",
        title: "超高音C4与空灵起音",
        suggestion: "超高音C4起音口腔呈'呜'型，高密度气流灌注，下唇松弛不可咬死簧片。",
        severity: "tip"
      },
      {
        measureNumber: 2,
        startMeasure: 2,
        endMeasure: 2,
        type: "half-hole",
        title: "极高音D4挑音与半孔准确性",
        suggestion: "注意此处半孔准确性与高音泛音键配合，装饰音华彩平滑回落，第2小节末建议此处换气。",
        severity: "warning"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 3,
        type: "expression",
        title: "旷野消逝 (Morendo)",
        suggestion: "极其微弱的ppp气息渐弱收尾，如苍茫旷野中最后的回声。",
        severity: "highlight"
      }
    ],
    description: "20世纪音乐史上最震撼的开场！斯特拉文斯基突破乐器极限，用大管极高音区模拟立陶宛古老民谣，空灵而原始的生命力呼唤冰封大地复苏。",
    audioUrl: "",
    aiTip: "💡 超高音大师秘诀：下唇保持松弛，口腔呈'呜'型狭窄通道，横膈膜气压要像高压水枪一样集中送入管口。",
    rating: 5,
    downloadCount: 4890,
    isFree: false,
    sheetNotes: [
      // Measure 1 - 孤独苍茫第一声 (C4 极高音)
      { beat: "1-1", note: "C4", length: "quarter", fingering: "极高音C，空灵原始 (Lento)", dynamic: "p", articulation: "tenuto", teacherTip: "气流高度集中" },
      { beat: "1-2", note: "B3", length: "eighth", fingering: "半音下移", dynamic: "p", articulation: "legato" },
      { beat: "1-3", note: "A3", length: "eighth", fingering: "高音A", dynamic: "p", articulation: "legato" },
      { beat: "1-4", note: "G3", length: "quarter", fingering: "回荡", dynamic: "p", articulation: "legato" },
      // Measure 2 - 装饰音华彩
      { beat: "2-1", note: "E3", length: "half", fingering: "中音E3延音", dynamic: "p", articulation: "tenuto" },
      { beat: "2-3", note: "D4", length: "quarter", fingering: "超高音D4挑音", dynamic: "mf", articulation: "accent", teacherTip: "顶峰泛音" },
      { beat: "2-4", note: "C4", length: "quarter", fingering: "平滑回落", dynamic: "p", articulation: "legato", breath: true },
      // Measure 3
      { beat: "3-1", note: "B3", length: "quarter", fingering: "苍茫回旋", dynamic: "pp", articulation: "legato" },
      { beat: "3-2", note: "A3", length: "quarter", fingering: "叹息", dynamic: "pp", articulation: "legato" },
      { beat: "3-3", note: "E3", length: "half", fingering: "消失在旷野中 (Morendo)", dynamic: "ppp", articulation: "tenuto" }
    ]
  },
  {
    id: "s_scheherazade",
    title: "里姆斯基-科萨科夫《天方夜谭》卡兰达王子大管华彩 (交响华彩独奏全谱)",
    englishTitle: "Scheherazade - Rimsky-Korsakov (The Kalendar Prince Bassoon Cadenza)",
    category: "classical",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "天方夜谭", "卡兰达王子", "华彩乐段", "快速双吐"],
    difficulty: "高级 (Grade 7-9)",
    author: "Nikolai Rimsky-Korsakov (1844-1908)",
    composer: "N. Rimsky-Korsakov",
    source: "IMSLP 交响组曲总谱大管声部",
    instrument: "Bsn",
    targetAge: "11-22岁",
    tempoBpm: 92,
    keySignature: "B Minor (2#)",
    timeSignature: "3/8",
    totalMeasures: 8,
    practiceGoals: [
      "东方异域风情的三十二分音符快速琶音回转",
      "自由华彩（Cadenza ad libitum）时速度的戏剧性伸缩",
      "强烈的吐音颗粒感与东方神秘色彩表现"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 1,
        type: "articulation",
        title: "异域琶音与华彩开篇",
        suggestion: "三十二分音符快速跑动颗粒饱满，B3高潮停顿自由延长（Ad libitum）。",
        severity: "tip"
      },
      {
        measureNumber: 2,
        startMeasure: 2,
        endMeasure: 2,
        type: "fingering",
        title: "半音回转与装饰音",
        suggestion: "注意A#3半音指法与东方装饰音快速交替，吐音如珍珠般滚动，建议此处换气收束。",
        severity: "highlight"
      }
    ],
    description: "交响乐大管试音名篇！充满浓郁的一千零一夜东方异域传奇色彩，大管化身为古代东方说书人，讲述卡兰达王子的奇遇故事。",
    audioUrl: "",
    aiTip: "💡 音乐意境：把乐句吹出东方丝绸之路驼铃与古老宫殿的神秘回响，吐音要像珍珠般滚动。",
    rating: 5,
    downloadCount: 2780,
    isFree: false,
    sheetNotes: [
      { beat: "1-1", note: "B2", length: "sixteenth", fingering: "异域神秘起音", dynamic: "f", articulation: "staccato" },
      { beat: "1-2", note: "D3", length: "sixteenth", fingering: "琶音上行", dynamic: "f", articulation: "staccato" },
      { beat: "1-3", note: "F#3", length: "sixteenth", fingering: "三十二分音符跑动", dynamic: "f", articulation: "staccato" },
      { beat: "1-4", note: "B3", length: "quarter", fingering: "高潮停顿 (Ad libitum)", dynamic: "ff", articulation: "accent" },
      { beat: "2-1", note: "A#3", length: "sixteenth", fingering: "半音回转", dynamic: "mf", articulation: "legato" },
      { beat: "2-2", note: "B3", length: "sixteenth", fingering: "东方装饰音", dynamic: "mf", articulation: "legato" },
      { beat: "2-3", note: "G3", length: "sixteenth", fingering: "下行", dynamic: "p", articulation: "staccato" },
      { beat: "2-4", note: "E3", length: "quarter", fingering: "收束回声", dynamic: "p", articulation: "tenuto" }
    ]
  }
];
