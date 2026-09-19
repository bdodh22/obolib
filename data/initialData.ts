import { Score, PracticeCheckin } from "../types";
import { EXPANDED_SCORES } from "./expandedScores";

const BASE_SCORES: Score[] = [
  {
    id: "s1",
    title: "小星星的巴松奇幻冒险 (少儿入门完整全曲 A-B-A)",
    englishTitle: "Twinkle Twinkle Little Bassoon (Complete Theme)",
    category: "kids",
    sectionType: "intro",
    tags: ["入门", "少儿启蒙", "舒适音区", "完整童谣"],
    difficulty: "入门级 (Grade 1)",
    author: "Traditional / W.A. Mozart",
    composer: "Traditional / W.A. Mozart",
    source: "IMSLP / 经典少儿大管启蒙教程",
    instrument: "Bsn",
    targetAge: "6-10岁",
    tempoBpm: 80,
    keySignature: "F Major (1♭)",
    timeSignature: "4/4",
    totalMeasures: 12,
    practiceGoals: [
      "【[A] 呈示段 M.1-4】低音 F2 到中音 C3 的六孔按压平稳过渡，不漏气",
      "【[B] 展开段 M.5-8】连续模进与换气控制，保持音色清亮开阔",
      "【[A'] 再现段 M.9-12】主句再现与完满收官，主音 F2 饱满而有共鸣"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 4,
        type: "fingering",
        title: "[A段] 主题呈示 (第1-4小节)",
        suggestion: "建议此处起音前腹部深吸气，保持口型松弛；注意从降B2到A2下行时右手盖实音孔，手指抬起不要过高。",
        severity: "tip"
      },
      {
        measureNumber: 5,
        startMeasure: 5,
        endMeasure: 8,
        type: "breathing",
        title: "[B段] 对比与展开 (第5-8小节)",
        suggestion: "中央C3音色明亮，注意连续下行模进时气流平稳，每2小节末尾轻换气。",
        severity: "highlight"
      },
      {
        measureNumber: 9,
        startMeasure: 9,
        endMeasure: 12,
        type: "expression",
        title: "[A'段] 主题再现与收尾 (第9-12小节)",
        suggestion: "再现首句饱满开朗，第12小节回到主音F2时气流平稳送出，完成全曲。",
        severity: "tip"
      }
    ],
    description: "专为初学者小手设计的完整乐曲！音域精选在低音 F2 到中音 G3 黄金舒适音区，节奏规整，包含完整 A 段呈示 (M.1-4)、B 段展开 (M.5-8) 与 A' 段再现 (M.9-12)，12小节完整演奏谱！",
    audioUrl: "",
    aiTip: "💡 练习提示：第1-2小节从 F2 跳到 C3 时，六个手指同时轻抬，左手拇指轻启Whisper键即可，手指不要抬得太高。",
    rating: 5,
    downloadCount: 2180,
    isFree: true,
    sheetNotes: [
      // === SECTION A: 呈示段 (M.1 - 4) ===
      { beat: "1-1", note: "F2", length: "quarter", fingering: "低音F2起音", dynamic: "f", articulation: "tenuto", teacherTip: "坚实饱满" },
      { beat: "1-2", note: "F2", length: "quarter", fingering: "保持口型平稳", dynamic: "f", articulation: "tenuto" },
      { beat: "1-3", note: "C3", length: "quarter", fingering: "六孔全开中央C", dynamic: "f", articulation: "tenuto" },
      { beat: "1-4", note: "C3", length: "quarter", fingering: "音色明亮开阔", dynamic: "f", articulation: "tenuto", breath: true },
      { beat: "2-1", note: "D3", length: "quarter", fingering: "中音D3", dynamic: "f", articulation: "legato" },
      { beat: "2-2", note: "D3", length: "quarter", fingering: "手指不要抬太高", dynamic: "f", articulation: "legato" },
      { beat: "2-3", note: "C3", length: "half", fingering: "保持长音平稳", dynamic: "f", articulation: "tenuto", breath: true },
      { beat: "3-1", note: "B♭2", length: "quarter", fingering: "右手中指+降B键", dynamic: "mf", articulation: "legato" },
      { beat: "3-2", note: "B♭2", length: "quarter", fingering: "音准稳定", dynamic: "mf", articulation: "legato" },
      { beat: "3-3", note: "A2", length: "quarter", fingering: "右手两指", dynamic: "mf", articulation: "legato" },
      { beat: "3-4", note: "A2", length: "quarter", fingering: "平稳", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "4-1", note: "G2", length: "quarter", fingering: "双手四指", dynamic: "p", articulation: "legato" },
      { beat: "4-2", note: "G2", length: "quarter", fingering: "柔和", dynamic: "p", articulation: "legato" },
      { beat: "4-3", note: "F2", length: "half", fingering: "回到主音F2长音", dynamic: "f", articulation: "tenuto", breath: true },

      // === SECTION B: 对比与展开段 (M.5 - 8) ===
      { beat: "5-1", note: "C3", length: "quarter", fingering: "明亮中央C", dynamic: "f", articulation: "tenuto" },
      { beat: "5-2", note: "C3", length: "quarter", fingering: "开阔", dynamic: "f", articulation: "tenuto" },
      { beat: "5-3", note: "B♭2", length: "quarter", fingering: "下落Bb", dynamic: "mf", articulation: "legato" },
      { beat: "5-4", note: "B♭2", length: "quarter", fingering: "平稳", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "6-1", note: "A2", length: "quarter", fingering: "柔和A", dynamic: "mf", articulation: "legato" },
      { beat: "6-2", note: "A2", length: "quarter", fingering: "温暖", dynamic: "mf", articulation: "legato" },
      { beat: "6-3", note: "G2", length: "half", fingering: "半终止G2", dynamic: "p", articulation: "tenuto", breath: true },
      { beat: "7-1", note: "C3", length: "quarter", fingering: "再次展开C3", dynamic: "f", articulation: "tenuto" },
      { beat: "7-2", note: "C3", length: "quarter", fingering: "清亮", dynamic: "f", articulation: "tenuto" },
      { beat: "7-3", note: "B♭2", length: "quarter", fingering: "模进Bb", dynamic: "mf", articulation: "legato" },
      { beat: "7-4", note: "B♭2", length: "quarter", fingering: "平稳", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "8-1", note: "A2", length: "quarter", fingering: "中音A", dynamic: "mf", articulation: "legato" },
      { beat: "8-2", note: "A2", length: "quarter", fingering: "平稳", dynamic: "mf", articulation: "legato" },
      { beat: "8-3", note: "G2", length: "half", fingering: "准备回到再现", dynamic: "p", articulation: "tenuto", breath: true },

      // === SECTION A': 主题再现与收官 (M.9 - 12) ===
      { beat: "9-1", note: "F2", length: "quarter", fingering: "再现主句F2", dynamic: "f", articulation: "accent" },
      { beat: "9-2", note: "F2", length: "quarter", fingering: "均匀", dynamic: "f", articulation: "tenuto" },
      { beat: "9-3", note: "C3", length: "quarter", fingering: "中央C", dynamic: "f", articulation: "tenuto" },
      { beat: "9-4", note: "C3", length: "quarter", fingering: "明亮", dynamic: "f", articulation: "tenuto", breath: true },
      { beat: "10-1", note: "D3", length: "quarter", fingering: "中音D3", dynamic: "f", articulation: "legato" },
      { beat: "10-2", note: "D3", length: "quarter", fingering: "歌唱", dynamic: "f", articulation: "legato" },
      { beat: "10-3", note: "C3", length: "half", fingering: "长音", dynamic: "f", articulation: "tenuto", breath: true },
      { beat: "11-1", note: "B♭2", length: "quarter", fingering: "平稳过渡", dynamic: "mf", articulation: "legato" },
      { beat: "11-2", note: "B♭2", length: "quarter", fingering: "连音", dynamic: "mf", articulation: "legato" },
      { beat: "11-3", note: "A2", length: "quarter", fingering: "中音A", dynamic: "mf", articulation: "legato" },
      { beat: "11-4", note: "A2", length: "quarter", fingering: "柔和", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "12-1", note: "G2", length: "quarter", fingering: "导音G2", dynamic: "p", articulation: "legato" },
      { beat: "12-2", note: "G2", length: "quarter", fingering: "微弱", dynamic: "p", articulation: "legato" },
      { beat: "12-3", note: "F2", length: "half", fingering: "主音F2辉煌全曲终结！", dynamic: "f", articulation: "accent" }
    ]
  },
  {
    id: "s3",
    title: "《千与千寻》永远同在 (大管温暖抒情长乐段完整版)",
    englishTitle: "Always With Me - Spirited Away (Complete Warm Bassoon Solo)",
    category: "kids",
    sectionType: "intro",
    tags: ["入门", "吉卜力", "抒情连音", "久石让", "歌唱性"],
    difficulty: "初级 (Grade 2-3)",
    author: "久石让 (Joe Hisaishi)",
    composer: "Joe Hisaishi",
    source: "吉卜力工作室官方总谱改编",
    instrument: "Bsn",
    targetAge: "7-16岁",
    tempoBpm: 84,
    keySignature: "F Major (1♭)",
    timeSignature: "3/4",
    totalMeasures: 16,
    practiceGoals: [
      "【乐段一 M.1-4】3/4 拍圆舞曲式抒情律动，圆滑连音（Legato）如歌声般温暖连贯",
      "【乐段二 M.5-8】副歌升华与全曲制高点高音C4，气流充沛、下唇微卷不咬死",
      "【乐段三 M.9-12】抒情高潮与回旋展开，换气前保持音高不掉",
      "【乐段四 M.13-16】温暖完满的收束式，长音渐弱至极弱（pp）"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 4,
        type: "articulation",
        title: "[A段] 主题呈示 (第1-4小节)",
        suggestion: "保持圆滑连音（Legato）平稳流动，气流轻推，第4小节末尾深吸气。",
        severity: "tip"
      },
      {
        measureNumber: 5,
        startMeasure: 5,
        endMeasure: 8,
        type: "breathing",
        title: "[B段] 副歌升华与高音C4 (第5-8小节)",
        suggestion: "建议此处换气充分，保持腹部深支撑，进入第6小节高音C4制高点时口型勿过度咬紧。",
        severity: "highlight"
      },
      {
        measureNumber: 9,
        startMeasure: 9,
        endMeasure: 12,
        type: "intonation",
        title: "[C段] 抒情回旋展开 (第9-12小节)",
        suggestion: "注意高音D4与C4下落时气流持续托住，建议此处微换气，保持轻柔纯净。",
        severity: "warning"
      },
      {
        measureNumber: 13,
        startMeasure: 13,
        endMeasure: 16,
        type: "expression",
        title: "[D段] 温暖完满收束 (第13-16小节)",
        suggestion: "渐弱收音，主音长音平稳送出，以宁静优美的共鸣结束全曲。",
        severity: "tip"
      }
    ],
    description: "宫崎骏奥斯卡动画《千与千寻》主题曲【16小节完整演奏谱】。旋律悠扬温暖，完整展现大管在中高音区如大提琴与人声般纯美真挚的音色，是少儿与成人大管初学者最爱演奏的必练名作。",
    audioUrl: "",
    aiTip: "💡 音乐处理：长音像在唱一首温柔的摇篮曲，换气前千万不要松懈口型，气流要推送到最后一刻。",
    rating: 5,
    downloadCount: 3890,
    isFree: true,
    sheetNotes: [
      // === SECTION A: 主歌起句 (M.1 - 4) ===
      { beat: "1-1", note: "C3", length: "quarter", fingering: "中央C温润发音", dynamic: "p", articulation: "legato", teacherTip: "柔和如歌" },
      { beat: "1-2", note: "E3", length: "quarter", fingering: "双手按实六孔", dynamic: "p", articulation: "legato" },
      { beat: "1-3", note: "G3", length: "quarter", fingering: "右手全开，轻快明朗", dynamic: "mf", articulation: "legato" },
      { beat: "2-1", note: "A3", length: "half", fingering: "高音A泛音键，抒情展开", dynamic: "mf", articulation: "tenuto" },
      { beat: "2-3", note: "G3", length: "quarter", fingering: "回落G3", dynamic: "p", articulation: "legato", breath: true },
      { beat: "3-1", note: "F3", length: "quarter", fingering: "中音F3", dynamic: "p", articulation: "legato" },
      { beat: "3-2", note: "E3", length: "quarter", fingering: "柔美下行", dynamic: "p", articulation: "legato" },
      { beat: "3-3", note: "D3", length: "quarter", fingering: "温存回声", dynamic: "p", articulation: "legato" },
      { beat: "4-1", note: "C3", length: "dotted-half", fingering: "温暖长音", dynamic: "p", articulation: "tenuto", breath: true },

      // === SECTION B: 副歌高潮 (M.5 - 8) ===
      { beat: "5-1", note: "F3", length: "quarter", fingering: "渐强上推", dynamic: "mf", articulation: "legato" },
      { beat: "5-2", note: "G3", length: "quarter", fingering: "推向乐句中心", dynamic: "mf", articulation: "legato" },
      { beat: "5-3", note: "A3", length: "quarter", fingering: "明亮高音A", dynamic: "f", articulation: "accent" },
      { beat: "6-1", note: "C4", length: "half", fingering: "高音C4辉煌长音 (全曲制高点)", dynamic: "f", articulation: "tenuto" },
      { beat: "6-3", note: "A3", length: "quarter", fingering: "下行回音", dynamic: "mf", articulation: "legato", breath: true },
      { beat: "7-1", note: "G3", length: "quarter", fingering: "渐弱平复", dynamic: "p", articulation: "legato" },
      { beat: "7-2", note: "F3", length: "quarter", fingering: "宁静", dynamic: "p", articulation: "legato" },
      { beat: "7-3", note: "E3", length: "quarter", fingering: "轻柔", dynamic: "p", articulation: "legato" },
      { beat: "8-1", note: "D3", length: "dotted-half", fingering: "半终止长音", dynamic: "mf", articulation: "tenuto", breath: true },

      // === SECTION C: 抒情高潮与回旋 (M.9 - 12) ===
      { beat: "9-1", note: "F3", length: "quarter", fingering: "再次上行", dynamic: "mf", articulation: "legato" },
      { beat: "9-2", note: "G3", length: "quarter", fingering: "如歌流动", dynamic: "mf", articulation: "legato" },
      { beat: "9-3", note: "A3", length: "quarter", fingering: "高音A", dynamic: "f", articulation: "legato" },
      { beat: "10-1", note: "C4", length: "half", fingering: "辉煌C4", dynamic: "f", articulation: "legato" },
      { beat: "10-3", note: "D4", length: "quarter", fingering: "顶点D4", dynamic: "f", articulation: "accent", breath: true },
      { beat: "11-1", note: "C4", length: "half", fingering: "平稳回落", dynamic: "mf", articulation: "legato" },
      { beat: "11-3", note: "A3", length: "quarter", fingering: "柔和", dynamic: "mf", articulation: "legato" },
      { beat: "12-1", note: "G3", length: "dotted-half", fingering: "深情回声", dynamic: "p", articulation: "tenuto", breath: true },

      // === SECTION D: 温暖收束 (M.13 - 16) ===
      { beat: "13-1", note: "F3", length: "quarter", fingering: "准备尾声", dynamic: "p", articulation: "legato" },
      { beat: "13-2", note: "G3", length: "quarter", fingering: "流动", dynamic: "p", articulation: "legato" },
      { beat: "13-3", note: "A3", length: "quarter", fingering: "轻声歌唱", dynamic: "mf", articulation: "legato" },
      { beat: "14-1", note: "G3", length: "half", fingering: "渐弱", dynamic: "p", articulation: "legato" },
      { beat: "14-3", note: "E3", length: "quarter", fingering: "温柔", dynamic: "p", articulation: "legato" },
      { beat: "15-1", note: "D3", length: "quarter", fingering: "缓行", dynamic: "pp", articulation: "legato" },
      { beat: "15-2", note: "E3", length: "quarter", fingering: "回旋", dynamic: "pp", articulation: "legato" },
      { beat: "15-3", note: "D3", length: "quarter", fingering: "准备落音", dynamic: "pp", articulation: "legato" },
      { beat: "16-1", note: "C3", length: "dotted-half", fingering: "温暖完满的主和弦长音 (pp)", dynamic: "pp", articulation: "tenuto" }
    ]
  },
  {
    id: "s4",
    title: "快乐的粉红豹 (少儿爵士摇摆完整主题与切分音)",
    englishTitle: "The Pink Panther (Complete Easy Jazz Swing Theme)",
    category: "kids",
    sectionType: "intermediate",
    tags: ["进阶名段", "爵士切分", "粉红豹", "幽默摇摆", "半音滑音"],
    difficulty: "初中级 (Grade 3-4)",
    author: "Henry Mancini (1924-1994)",
    composer: "Henry Mancini",
    source: "IMSLP 经典爵士改编",
    instrument: "Bsn",
    targetAge: "8-16岁",
    tempoBpm: 96,
    keySignature: "E Minor (1#)",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "半音阶滑音（C#3 到 D3、D#3 到 E3）手指平滑移动",
      "切分音（Syncopation）与后半拍重音的爵士摇摆感（Swing Feel）",
      "跳音（Staccato）短促俏皮，展现粉红豹蹑手蹑脚的神秘感"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "fingering",
        title: "半音倚音滑移",
        suggestion: "注意此处半音阶过渡（C#3 到 D3），右手小指轻触按键，左手拇指轻启Whisper键，手指动作轻巧勿拍打按键。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "爵士切分与高音B3",
        suggestion: "注意此处高音B3与半孔准确性，后半拍切分音重音清晰，建议第3小节末尾建议此处换气。",
        severity: "warning"
      }
    ],
    description: "世界最著名的爵士幽默代表作！大管低沉独特的沙哑音质与爵士切分节奏完美结合，专为大管改编的移调版本极具演奏趣味与舞台表现力。",
    audioUrl: "",
    aiTip: "💡 爵士摇摆要诀：切分音符要吹得有弹性，吐音要干净利落，心中带有'哒-空-哒-哒'的摇摆节拍感。",
    rating: 4.9,
    downloadCount: 2650,
    isFree: false,
    sheetNotes: [
      // Measure 1 - 经典半音起步
      { beat: "1-1", note: "C#3", length: "eighth", fingering: "半音前倚音起", dynamic: "p", articulation: "staccato", teacherTip: "神秘轻快" },
      { beat: "1-2", note: "D3", length: "quarter", fingering: "短吐音", dynamic: "mf", articulation: "staccato" },
      { beat: "1-3", note: "D#3", length: "eighth", fingering: "半音上滑", dynamic: "p", articulation: "staccato" },
      { beat: "1-4", note: "E3", length: "quarter", fingering: "重音落点", dynamic: "f", articulation: "accent", breath: true },
      // Measure 2 - 摇摆回旋
      { beat: "2-1", note: "C#3", length: "eighth", fingering: "半音前倚音", dynamic: "p", articulation: "staccato" },
      { beat: "2-2", note: "D3", length: "quarter", fingering: "吐音", dynamic: "mf", articulation: "staccato" },
      { beat: "2-3", note: "D#3", length: "eighth", fingering: "上滑", dynamic: "p", articulation: "staccato" },
      { beat: "2-4", note: "E3", length: "quarter", fingering: "重音", dynamic: "f", articulation: "accent" },
      // Measure 3 - 爵士切分大跨度
      { beat: "3-1", note: "B3", length: "quarter", fingering: "高音B3切分", dynamic: "f", articulation: "accent", teacherTip: "泛音键清晰" },
      { beat: "3-2", note: "A#3", length: "quarter", fingering: "半音下落", dynamic: "mf", articulation: "legato" },
      { beat: "3-3", note: "G3", length: "quarter", fingering: "摇摆", dynamic: "mf", articulation: "staccato" },
      { beat: "3-4", note: "E3", length: "quarter", fingering: "低位切分", dynamic: "f", articulation: "accent", breath: true },
      // Measure 4
      { beat: "4-1", note: "D3", length: "eighth", fingering: "短促", dynamic: "p", articulation: "staccato" },
      { beat: "4-2", note: "E3", length: "half", fingering: "爵士长音收束", dynamic: "mf", articulation: "tenuto" }
    ]
  },
  {
    id: "s6",
    title: "贝多芬第九交响曲《欢乐颂》低音巴松与倍低音大管伴奏 (完整四乐句)",
    englishTitle: "Ode to Joy - Bassoon & ContraBassoon Companion (Complete)",
    category: "ensemble",
    sectionType: "orchestral",
    tags: ["交响乐必考片段", "倍低音大管", "欢乐颂", "低音重奏", "贝多芬"],
    difficulty: "初级 (Grade 2-3)",
    author: "Ludwig van Beethoven (1770-1827)",
    composer: "L.V. Beethoven",
    source: "IMSLP 贝多芬第九交响曲第四乐章原谱",
    instrument: "Dbn",
    targetAge: "8-18岁",
    tempoBpm: 100,
    keySignature: "D Major (2#)",
    timeSignature: "4/4",
    totalMeasures: 16,
    practiceGoals: [
      "低音区与倍低音大管（ContraBassoon）深沉雄浑的低音频段发音",
      "全曲完整16小节四乐句结构与呼吸节奏掌控",
      "管弦乐重奏声部平稳配合能力"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 2,
        type: "breathing",
        title: "庄严主句与换气点",
        suggestion: "倍低音大管气流量大，第1小节末尾建议此处换气，横膈膜扩张保持深厚共鸣。",
        severity: "tip"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "fingering",
        title: "低音D2根音与附点",
        suggestion: "注意低音D2根音指法闭合严密，附点八分音符吐音有力，第4小节末建议此处换气。",
        severity: "highlight"
      }
    ],
    description: "专为大管 (Bsn) 与倍低音大管 (ContraBassoon) 编写的经典旋律与低音骨架伴奏。庄严崇高、温暖有力，适合乐团声部合奏与考级视奏。",
    audioUrl: "",
    aiTip: "💡 低音共鸣：吹奏倍低音巴松时气流量大，横膈膜要保持稳定深吸气，嘴唇不可死咬，让簧片最大面积自由振动。",
    rating: 5,
    downloadCount: 2190,
    isFree: false,
    sheetNotes: [
      // Measure 1 - 乐句一
      { beat: "1-1", note: "F#2", length: "quarter", fingering: "庄严主句起", dynamic: "f", articulation: "tenuto" },
      { beat: "1-2", note: "F#2", length: "quarter", fingering: "饱满", dynamic: "f", articulation: "tenuto" },
      { beat: "1-3", note: "G2", length: "quarter", fingering: "均匀上行", dynamic: "f", articulation: "tenuto" },
      { beat: "1-4", note: "A2", length: "quarter", fingering: "明亮", dynamic: "f", articulation: "tenuto", breath: true },
      // Measure 2
      { beat: "2-1", note: "A2", length: "quarter", fingering: "坚定", dynamic: "f", articulation: "tenuto" },
      { beat: "2-2", note: "G2", length: "quarter", fingering: "回落", dynamic: "f", articulation: "tenuto" },
      { beat: "2-3", note: "F#2", length: "quarter", fingering: "平稳", dynamic: "f", articulation: "tenuto" },
      { beat: "2-4", note: "E2", length: "quarter", fingering: "沉稳", dynamic: "f", articulation: "tenuto", breath: true },
      // Measure 3
      { beat: "3-1", note: "D2", length: "quarter", fingering: "低音D2根音", dynamic: "f", articulation: "accent" },
      { beat: "3-2", note: "D2", length: "quarter", fingering: "深厚", dynamic: "f", articulation: "tenuto" },
      { beat: "3-3", note: "E2", length: "quarter", fingering: "推进", dynamic: "f", articulation: "tenuto" },
      { beat: "3-4", note: "F#2", length: "quarter", fingering: "上推", dynamic: "f", articulation: "tenuto", breath: true },
      // Measure 4
      { beat: "4-1", note: "F#2", length: "dotted-quarter", fingering: "附点", dynamic: "f", articulation: "tenuto" },
      { beat: "4-2", note: "E2", length: "eighth", fingering: "短促", dynamic: "f", articulation: "staccato" },
      { beat: "4-3", note: "E2", length: "half", fingering: "半终止", dynamic: "f", articulation: "tenuto", breath: true }
    ]
  },
  {
    id: "s7",
    title: "魏森伯恩巴松基础练习曲 Op.8 No.12 (断奏与连音交替完整版)",
    englishTitle: "Weissenborn Practical Method Op.8 No.12 - Staccato & Legato",
    category: "exam",
    sectionType: "intermediate",
    tags: ["进阶名段", "魏森伯恩", "断奏与连音", "音区过渡", "考级必修"],
    difficulty: "考级专区 (Grade 4)",
    author: "Julius Weissenborn (1837-1888)",
    composer: "J. Weissenborn",
    source: "IMSLP 魏森伯恩教程第一册",
    instrument: "Bsn",
    targetAge: "9-15岁",
    tempoBpm: 88,
    keySignature: "C Major",
    timeSignature: "4/4",
    totalMeasures: 8,
    practiceGoals: [
      "连续单吐断音（Staccato）与圆滑连音（Legato）的毫秒级无缝切换",
      "低音 G2、A2、B2 到中音 C3 的清晰颗粒吐音",
      "左手中指与无名指在换区时的敏捷性"
    ],
    segments: [
      {
        measureNumber: 1,
        startMeasure: 1,
        endMeasure: 1,
        type: "articulation",
        title: "单吐断音颗粒感",
        suggestion: "舌尖点触簧片尖端1/3，断音短促弹跳，第1小节第4拍末建议此处换气。",
        severity: "tip"
      },
      {
        measureNumber: 2,
        startMeasure: 2,
        endMeasure: 2,
        type: "articulation",
        title: "圆滑连音气息推进",
        suggestion: "迅速切换至圆滑连音（Legato），气流平稳上推至高音G3，第2小节末建议此处换气。",
        severity: "highlight"
      },
      {
        measureNumber: 3,
        startMeasure: 3,
        endMeasure: 4,
        type: "half-hole",
        title: "两断两连与半孔交替",
        suggestion: "注意此处两断两连交替时左手食指半孔转换与手型稳定，注意此处半孔准确性。",
        severity: "warning"
      }
    ],
    description: "经典巴松必修考级教材。针对断奏与连音交替的指法平稳性训练，帮助学生巩固中低音区发音与换气节奏。",
    audioUrl: "",
    aiTip: "💡 吐音练习：先用单吐音吹准，舌头接触簧片尖端的三分之一处，断奏时气流不要完全中断。",
    rating: 5,
    downloadCount: 1980,
    isFree: true,
    sheetNotes: [
      // Measure 1 - 四个单吐断音
      { beat: "1-1", note: "G2", length: "quarter", fingering: "单吐断音", dynamic: "mf", articulation: "staccato", teacherTip: "颗粒清晰" },
      { beat: "1-2", note: "A2", length: "quarter", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "1-3", note: "B2", length: "quarter", fingering: "单吐", dynamic: "mf", articulation: "staccato" },
      { beat: "1-4", note: "C3", length: "quarter", fingering: "连音进入", dynamic: "mf", articulation: "legato", breath: true },
      // Measure 2 - 四个圆滑连音
      { beat: "2-1", note: "D3", length: "quarter", fingering: "圆滑连音", dynamic: "mf", articulation: "legato" },
      { beat: "2-2", note: "E3", length: "quarter", fingering: "连贯", dynamic: "mf", articulation: "legato" },
      { beat: "2-3", note: "F3", length: "quarter", fingering: "如歌", dynamic: "mf", articulation: "legato" },
      { beat: "2-4", note: "G3", length: "quarter", fingering: "高点", dynamic: "f", articulation: "tenuto", breath: true },
      // Measure 3 - 两断两连交替
      { beat: "3-1", note: "F3", length: "quarter", fingering: "断音下行", dynamic: "mf", articulation: "staccato" },
      { beat: "3-2", note: "E3", length: "quarter", fingering: "断音", dynamic: "mf", articulation: "staccato" },
      { beat: "3-3", note: "D3", length: "quarter", fingering: "连音", dynamic: "mf", articulation: "legato" },
      { beat: "3-4", note: "C3", length: "quarter", fingering: "连音落", dynamic: "mf", articulation: "legato", breath: true },
      // Measure 4
      { beat: "4-1", note: "B2", length: "quarter", fingering: "单吐", dynamic: "p", articulation: "staccato" },
      { beat: "4-2", note: "A2", length: "quarter", fingering: "单吐", dynamic: "p", articulation: "staccato" },
      { beat: "4-3", note: "G2", length: "half", fingering: "主音长音平稳收束", dynamic: "f", articulation: "tenuto" }
    ]
  }
];

export const INITIAL_SCORES: Score[] = [
  ...EXPANDED_SCORES,
  ...BASE_SCORES
];

export const INITIAL_CHECKINS: PracticeCheckin[] = [
  { 
    id: "c1", 
    studentName: "小乐 (Leo)", 
    date: "2026-08-24", 
    category: "启蒙童谣", 
    duration: 25, 
    performance: "音准稳定，低音 F2 饱满", 
    notes: "今天攻克了魏森伯恩第1首练习曲完整8小节，换气节奏掌握很棒！",
    badges: ["长音之星", "打卡第7天"]
  },
  { 
    id: "c2", 
    studentName: "涵涵 (Hannah)", 
    date: "2026-08-23", 
    category: "考级进阶", 
    duration: 40, 
    performance: "莫扎特 K.191 第一乐章独奏呈示部完成", 
    notes: "高音降B指法熟练，附点节奏更清晰了，完成十六分音符分解和弦跑动。",
    badges: ["莫扎特勇士", "100小时里程碑"]
  },
  { 
    id: "c3", 
    studentName: "子轩 (Zixuan)", 
    date: "2026-08-24", 
    category: "乐团重奏", 
    duration: 30, 
    performance: "山魔王的宫殿里完整12小节演奏", 
    notes: "极弱断奏控制很有弹性，渐强张力十足！",
    badges: ["交响乐首席"]
  }
];
