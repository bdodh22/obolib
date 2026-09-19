import { FingeringEntry } from "../types";

export type FingeringDifficulty = "basic" | "intermediate" | "advanced";

export interface ExtendedFingeringEntry extends FingeringEntry {
  difficulty: FingeringDifficulty;
  solfege: string; // e.g. "Do", "Re", "Fa"
  numberedNotation: string; // e.g. "1.", "4.", "5"
  characterRhyme: string; // Easy rhymes for kids
  airflowType: "warm_slow" | "steady_breeze" | "fast_laser";
  metaphorTitle: string;
  metaphorDesc: string;
  mouthShape: string;
  alternateFingerings?: {
    name: string;
    description: string;
    difficulty?: FingeringDifficulty;
    leftHand: FingeringEntry["leftHand"];
    rightHand: FingeringEntry["rightHand"];
  }[];
}

export const COMPREHENSIVE_FINGERINGS: ExtendedFingeringEntry[] = [
  // 1. Low Register (Bb1 to F2)
  {
    note: "低音 降B (Low Bb1)",
    scientificNote: "Bb1",
    octave: 1,
    clef: "bass",
    staffPosition: -5,
    difficulty: "advanced",
    solfege: "降Ti (♭Ti)",
    numberedNotation: "♭7..",
    characterRhyme: "全部按键都按满，大肚子哈大暖气～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 冬日暖阳大波浪 (宽厚极缓气流)",
    metaphorDesc: "全管共振阻力最大，嘴唇像咬着大包子彻底放松，下巴微沉，肚脐眼下沉缓缓吐暖气。",
    mouthShape: "发“呜(Woo)”口型，嘴唇松弛包住簧片1/2",
    leftHand: {
      thumb: ["Whisper键", "低音D键", "低音C键", "低音降B键"],
      fingers: [true, true, true],
      pinky: ["低音Eb键"]
    },
    rightHand: {
      thumb: ["E键(大薄饼)", "低音F#键", "低音Ab键"],
      fingers: [true, true, true],
      pinky: ["低音F键", "低音Ab键"]
    },
    description: "巴松管的最低极限音，管身全闭合，气流阻力最大。",
    tip: "嘴唇稍微向外放松，下巴微沉，腹部提供充足且温暖的缓气流，切忌咬紧簧片。"
  },
  {
    note: "低音 B (Low B1)",
    scientificNote: "B1",
    octave: 1,
    clef: "bass",
    staffPosition: -4.5,
    difficulty: "advanced",
    solfege: "西 (Ti)",
    numberedNotation: "7..",
    characterRhyme: "松开降B小耳朵，依然深沉如潜水艇～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 深海潜艇巡航 (极低音共振)",
    metaphorDesc: "管身仅放开最低降B键，其余大键全部闭合，气流温热平稳。",
    mouthShape: "发“哦(Oh)”口型，下巴放松不咬紧",
    leftHand: {
      thumb: ["Whisper键", "低音D键", "低音C键"],
      fingers: [true, true, true],
      pinky: ["低音Eb键"]
    },
    rightHand: {
      thumb: ["E键(大薄饼)", "低音F#键", "低音Ab键"],
      fingers: [true, true, true],
      pinky: ["低音F键", "低音Ab键"]
    },
    description: "次低音，低音大管声部厚重基石。",
    tip: "左手拇指松开Bb键但保持D键和C键按实，气流保持温热充足。"
  },
  {
    note: "低音 C (Low C2)",
    scientificNote: "C2",
    octave: 2,
    clef: "bass",
    staffPosition: -4,
    difficulty: "intermediate",
    solfege: "多 (Do)",
    numberedNotation: "1.",
    characterRhyme: "左手大拇指按俩键，右手小指按好F键～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 冬日暖阳大波浪 (宽厚温热气流)",
    metaphorDesc: "低音浑厚如大提琴，喉咙像吞下温水一样打开，腹部沉稳给气。",
    mouthShape: "发“哦(Oh)”口型，下巴放松不施压",
    leftHand: {
      thumb: ["Whisper键", "低音D键", "低音C键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: ["E键(大薄饼)"],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "低音区基础基石音，浑厚扎实。",
    tip: "左手拇指同时按住低音C键和D键，右手小指按实F键。"
  },
  {
    note: "低音 升C/降D (C#2/Db2)",
    scientificNote: "C#2",
    octave: 2,
    clef: "bass",
    staffPosition: -3.5,
    difficulty: "intermediate",
    solfege: "升多 (♯Do)",
    numberedNotation: "♯1.",
    characterRhyme: "左手拇指点上低音C#键，手指稳稳排整齐～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 低音神秘变奏 (低音区半音)",
    metaphorDesc: "音色带有深沉的神秘色彩，左手拇指操作C#专用侧键。",
    mouthShape: "发“呜(Woo)”口型，唇部温和支撑",
    leftHand: {
      thumb: ["Whisper键", "低音C#键", "低音D键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: ["E键(大薄饼)"],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "低音区半音，左手拇指准确控制C#键。",
    tip: "拇指不要滑到旁边的低音C键上，右手保持按实。"
  },
  {
    note: "低音 D (Low D2)",
    scientificNote: "D2",
    octave: 2,
    clef: "bass",
    staffPosition: -3,
    difficulty: "basic",
    solfege: "来 (Re)",
    numberedNotation: "2.",
    characterRhyme: "左手按住D键与Whisper，低音平稳像开火车～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 冬日暖阳大波浪 (稳定缓气流)",
    metaphorDesc: "音色沉稳，气流不需要猛吹，像把热气哈在冬天的玻璃上。",
    mouthShape: "发“呜(Woo)”口型，自然包裹",
    leftHand: {
      thumb: ["Whisper键", "低音D键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: ["E键(大薄饼)"],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "初学必学低音基准音，考验大拇指按键平稳度。",
    tip: "左手拇指按住低音D键并兼顾Whisper键，右手小指按紧低音F键。"
  },
  {
    note: "低音 升D/降E (D#2/Eb2)",
    scientificNote: "Eb2",
    octave: 2,
    clef: "bass",
    staffPosition: -2.5,
    difficulty: "intermediate",
    solfege: "降咪 (♭Mi)",
    numberedNotation: "♭3.",
    characterRhyme: "左手小指踩下Eb，右手小指按紧F键～",
    airflowType: "warm_slow",
    metaphorTitle: "♨️ 双小指轻巧协同 (低音半音)",
    metaphorDesc: "双手小指共同参与，音色圆润有柔性美感。",
    mouthShape: "发“哦(Oh)”口型，腹部深长给气",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
      pinky: ["低音Eb键"]
    },
    rightHand: {
      thumb: ["E键(大薄饼)"],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "低音区过渡半音，左手小指按下低音Eb键。",
    tip: "左手小指下压平稳，手指不要僵硬翘起。"
  },
  {
    note: "低音 E (Low E2)",
    scientificNote: "E2",
    octave: 2,
    clef: "bass",
    staffPosition: -2,
    difficulty: "basic",
    solfege: "咪 (Mi)",
    numberedNotation: "3.",
    characterRhyme: "右手大拇指盖大薄饼，六个大孔全盖满～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 暖风吹拂麦浪 (核心基石音)",
    metaphorDesc: "右手拇指平盖Pancake键，气流均匀吹入，温暖如大提琴空弦。",
    mouthShape: "发“呜(Woo)”口型，嘴唇包簧1/2",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: ["E键(大薄饼)"],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "核心基准音，左手三孔右手三孔全按实。",
    tip: "右手大拇指平放于Pancake(大薄饼)键上，六个音孔不可有一丝漏气。"
  },
  {
    note: "低音 F (Low F2)",
    scientificNote: "F2",
    octave: 2,
    clef: "bass",
    staffPosition: -1.5,
    difficulty: "basic",
    solfege: "发 (Fa)",
    numberedNotation: "4.",
    characterRhyme: "初学第一音！大薄饼松开，小指按好低音F～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 启航微风 (初学巴松第一音)",
    metaphorDesc: "松开右手拇指，双手六孔盖严，发出巴松管最自然最丰满的鸣响。",
    mouthShape: "发“呜(Woo)”口型，上下唇均匀含簧",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, true],
      pinky: ["低音F键"]
    },
    description: "巴松管初学黄金第一音，音准极佳。",
    tip: "右手拇指悬空不按键，右手小指按紧F键，六孔按实指肉放松。"
  },
  {
    note: "低音 升F/降G (F#2/Gb2)",
    scientificNote: "F#2",
    octave: 2,
    clef: "bass",
    staffPosition: -1,
    difficulty: "basic",
    solfege: "升发 (♯Fa)",
    numberedNotation: "♯4.",
    characterRhyme: "右手大拇指点下F#键，小指放开放松～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 旋转跳跃小风车 (侧键控制)",
    metaphorDesc: "右手拇指从薄饼滑至下方的F#键，其余六孔保持全关。",
    mouthShape: "发“喔(Oh)”口型，保持均匀气压",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: ["低音F#键"],
      fingers: [true, true, true],
    },
    description: "低音半音，右手大拇指灵活控制F#侧键。",
    tip: "右手小指松开低音F键，右手拇指准确按实F#侧键。"
  },
  {
    note: "低音 G (Low G2)",
    scientificNote: "G2",
    octave: 2,
    clef: "bass",
    staffPosition: -0.5,
    difficulty: "basic",
    solfege: "嗦 (Sol)",
    numberedNotation: "5.",
    characterRhyme: "右手小指松开，六个孔盖齐齐！",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 平衡纯净音柱 (自然六孔音)",
    metaphorDesc: "最纯净自然的六孔闭合音，音色丰润明朗。",
    mouthShape: "发“呜(Woo)”口型，喉头放松下沉",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, true],
    },
    description: "最标准的基础自然音，六孔闭合、右手无小指键。",
    tip: "双手大拇指均不按低音键，仅左手轻触Whisper键即可。"
  },
  {
    note: "中音 降A/升G (Ab2/G#2)",
    scientificNote: "Ab2",
    octave: 2,
    clef: "bass",
    staffPosition: 0,
    difficulty: "basic",
    solfege: "降拉 (♭La)",
    numberedNotation: "♭6.",
    characterRhyme: "右手小指点Ab键，右手第6孔松开～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 甜美柔和微风 (中音区半音)",
    metaphorDesc: "右手中指无名指抬起，右手小指触碰Ab侧键。",
    mouthShape: "发“喔(Oh)”口型，保持气流充沛",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
      pinky: ["低音Ab键"]
    },
    description: "中低音区重要转折音，小指键与指孔协同。",
    tip: "右手无名指抬起离开第6孔，右手小指按好Ab侧键。"
  },
  {
    note: "中音 A (A2)",
    scientificNote: "A2",
    octave: 2,
    clef: "bass",
    staffPosition: 0.5,
    difficulty: "basic",
    solfege: "拉 (La)",
    numberedNotation: "6.",
    characterRhyme: "左手三孔按好，右手松开第6孔～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 悠扬金秋田园 (中低音明亮音)",
    metaphorDesc: "右手仅放开无名指第6孔，音色逐渐明朗。",
    mouthShape: "发“喔(Oh)”口型，腹肌均匀托气",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
    },
    description: "右手第6孔放开，管身声柱缩短。",
    tip: "右手无名指悬空高度约1厘米，不要翘得过高以备快速回按。"
  },
  {
    note: "中音 降B/升A (Bb2/A#2)",
    scientificNote: "Bb2",
    octave: 2,
    clef: "bass",
    staffPosition: 1,
    difficulty: "basic",
    solfege: "降西 (♭Ti)",
    numberedNotation: "♭7.",
    characterRhyme: "右手食指按4孔，中指无名指都抬起～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 澄澈秋水长天 (中音降B)",
    metaphorDesc: "右手仅留食指按住第4孔，音色通透开阔。",
    mouthShape: "发“呜(Woo)”口型，下唇适度给予回弹",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [true, false, false],
    },
    description: "右手仅留食指按孔，常用于降B大调音阶。",
    tip: "右手食指盖紧第4孔，中指与无名指自然抬起悬空。"
  },
  {
    note: "中音 B (B2)",
    scientificNote: "B2",
    octave: 2,
    clef: "bass",
    staffPosition: 1.5,
    difficulty: "basic",
    solfege: "西 (Ti)",
    numberedNotation: "7.",
    characterRhyme: "右手手指全部放开，左手三孔盖严实～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 纯净半管共鸣 (右手全开音)",
    metaphorDesc: "右手全放开，气柱从靴管上方直接溢出，声学阻力变小。",
    mouthShape: "发“呜(Woo)”口型，保持口风紧凑",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "右手手指全部抬起，仅左手三孔闭合。",
    tip: "右手放松放在手托上保持乐器平衡，左手三孔切忌漏气。"
  },
  {
    note: "中央 C (Middle C3)",
    scientificNote: "C3",
    octave: 3,
    clef: "bass",
    staffPosition: 2,
    difficulty: "basic",
    solfege: "多 (Do)",
    numberedNotation: "1",
    characterRhyme: "左手放开无名指，只按食指和中指～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 明亮阳光透射 (中央C基准音)",
    metaphorDesc: "左手前两孔按住，无名指抬起，音色明亮清新。",
    mouthShape: "发“喔(Oh)”口型，微收下腹气柱上提",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "管乐中央核心音，左手1孔和2孔闭合。",
    tip: "左手无名指放松抬起，大拇指轻扣Whisper键。"
  },
  {
    note: "中音 升C/降D (C#3/Db3)",
    scientificNote: "C#3",
    octave: 3,
    clef: "bass",
    staffPosition: 2.5,
    difficulty: "basic",
    solfege: "升多 (♯Do)",
    numberedNotation: "♯1",
    characterRhyme: "左手只按食指1孔，或者加按侧键～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 灵巧单孔跳跃 (中音半音)",
    metaphorDesc: "左手仅保留食指按孔，声柱短，发音灵巧轻松。",
    mouthShape: "发“喔(Oh)”口型，气流保持平稳",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, false, false],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "中音区半音，左手食指闭合第1孔。",
    tip: "气流不可过猛以免音偏高，舌位自然平放。"
  },
  {
    note: "中音 D (D3)",
    scientificNote: "D3",
    octave: 3,
    clef: "bass",
    staffPosition: 3,
    difficulty: "basic",
    solfege: "来 (Re)",
    numberedNotation: "2",
    characterRhyme: "双手孔全部放开！只留左手Whisper键～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 空弦全开清亮音 (自然空管共振)",
    metaphorDesc: "六个主音孔全部放开，仅依靠左手大拇指Whisper键，音色极其明快开阔。",
    mouthShape: "发“呜(Woo)”口型，嘴唇适当聚拢防飘",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [false, false, false],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "空管音，六主音孔全开，左手拇指点Whisper键。",
    tip: "初学者容易偏高或发虚，用嘴唇适度包裹控制音准。"
  },
  {
    note: "中音 升D/降E (D#3/Eb3)",
    scientificNote: "Eb3",
    octave: 3,
    clef: "bass",
    staffPosition: 3.5,
    difficulty: "intermediate",
    solfege: "降咪 (♭Mi)",
    numberedNotation: "♭3",
    characterRhyme: "左手按高音侧键Eb，气流轻盈如小燕～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 燕子穿柳轻盈跃 (中音区泛音阶梯)",
    metaphorDesc: "泛音区入口，按键轻巧，气流平稳上提。",
    mouthShape: "发“喔(Oh)”口型，气柱轻快凝聚",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [false, false, false],
      pinky: ["低音Eb键"]
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "中高音区衔接音，左手小指按Eb键。",
    tip: "双手保持平稳平衡，不要晃动管身。"
  },
  {
    note: "中音 E (E3)",
    scientificNote: "E3",
    octave: 3,
    clef: "bass",
    staffPosition: 4,
    difficulty: "intermediate",
    solfege: "咪 (Mi)",
    numberedNotation: "3",
    characterRhyme: "左手按好1、2孔，右手按4、5孔加F键！",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 泛音阶梯攀升 (中音二八度音)",
    metaphorDesc: "跨越八度分水岭，双手重新闭合4个孔，音色醇厚悠长。",
    mouthShape: "发“呜(Woo)”口型，腹肌托力增强",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
      pinky: ["低音F键"]
    },
    description: "八度跨越音，双手协调按孔。",
    tip: "左手按1、2孔，右手按4、5孔并按好F键，气息适度加压。"
  },
  {
    note: "中音 F (F3)",
    scientificNote: "F3",
    octave: 3,
    clef: "bass",
    staffPosition: 4.5,
    difficulty: "basic",
    solfege: "发 (Fa)",
    numberedNotation: "4",
    characterRhyme: "左手按1、2孔，右手按4孔和小指F键～",
    airflowType: "steady_breeze",
    metaphorTitle: "🍃 晴空飞鸟展翅 (中音自然高区)",
    metaphorDesc: "巴松管最优美的歌唱性音区，圆润而具有穿透力。",
    mouthShape: "发“喔(Oh)”口型，双唇稳定支撑",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, false, false],
      pinky: ["低音F键"]
    },
    description: "经典中高音歌唱音，音准极具表现力。",
    tip: "左手1、2孔按实，右手4孔按实加小指F键。"
  },
  {
    note: "高音 升F/降G (F#3/Gb3)",
    scientificNote: "Gb3",
    octave: 3,
    clef: "tenor",
    staffPosition: 0,
    difficulty: "advanced",
    solfege: "降嗦 (♭Sol)",
    numberedNotation: "♭5",
    characterRhyme: "🌙 左手第1孔按半孔！半圆弯月像小船～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 半月清辉破云层 (半孔Half-Hole技术)",
    metaphorDesc: "巴松管最著名的『半孔Half-Hole』技法，食指下滚微露月牙缝隙。",
    mouthShape: "发“伊(Ee)”微高舌位，气流加速",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true], // First finger is half-hole
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
      pinky: ["低音F键"]
    },
    description: "巴松管高音区半孔技术第一关。",
    tip: "左手食指指肚向下轻轻滚动露出半个圆孔，气流保持高速集中。"
  },
  {
    note: "高音 G (G3)",
    scientificNote: "G3",
    octave: 3,
    clef: "tenor",
    staffPosition: 0.5,
    difficulty: "intermediate",
    solfege: "嗦 (Sol)",
    numberedNotation: "5",
    characterRhyme: "🌙 同样半孔留月牙，左手按1、2、3孔～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 乘风破浪激光束 (高音区明朗音)",
    metaphorDesc: "半孔辅助激发高频泛音，气速明显提升，音色亮丽直达高空。",
    mouthShape: "发“伊(Ee)”高舌位，唇压适中不咬簧",
    leftHand: {
      thumb: ["Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
    },
    description: "高音G音，半孔辅助激发二倍频泛音。",
    tip: "保持半孔平稳，肚脐眼微收向上托气。"
  },
  {
    note: "高音 降A/升G (Ab3/G#3)",
    scientificNote: "Ab3",
    octave: 3,
    clef: "tenor",
    staffPosition: 1,
    difficulty: "intermediate",
    solfege: "降拉 (♭La)",
    numberedNotation: "♭6",
    characterRhyme: "🌙 半孔按好，左手拇指加上高音A泛音键～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 高速喷射激光流 (高音泛音键登场)",
    metaphorDesc: "左手大拇指启动高音A泛音侧键，气柱如同高压水枪聚拢。",
    mouthShape: "发“伊(Ee)”高舌位，下唇肌肉聚拢支撑",
    leftHand: {
      thumb: ["高音A泛音键", "Whisper键"],
      fingers: [true, true, true],
    },
    rightHand: {
      thumb: [],
      fingers: [false, false, false],
      pinky: ["低音F键"]
    },
    description: "泛音键辅助音，左手拇指启动高音A键。",
    tip: "左手拇指按上高音A键，右手保持下垂放松。"
  },
  {
    note: "高音 A (High A3)",
    scientificNote: "A3",
    octave: 3,
    clef: "tenor",
    staffPosition: 1.5,
    difficulty: "advanced",
    solfege: "高拉 (La)",
    numberedNotation: "6",
    characterRhyme: "左手大拇指按A泛音键，高速气流肚皮绷紧～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 极速激光穿透流 (高音穿透力之源)",
    metaphorDesc: "交响乐独奏常用高音，气息需要集中如激光束射入管内。",
    mouthShape: "发“伊(Ee)”高舌位，喉部放松开阔",
    leftHand: {
      thumb: ["高音A泛音键", "Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
      pinky: ["低音F键"]
    },
    description: "交响乐必考高音，泛音键与高速气流配合。",
    tip: "左手拇指按实高音A键，气息不可发散，喉头彻底放松。"
  },
  {
    note: "高音 降B/升A (Bb3/A#3)",
    scientificNote: "Bb3",
    octave: 3,
    clef: "tenor",
    staffPosition: 2,
    difficulty: "advanced",
    solfege: "高降西 (♭Ti)",
    numberedNotation: "♭7",
    characterRhyme: "左手按高音C泛音键，右手加按降B键～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 激光束破空出鞘 (交响高音区)",
    metaphorDesc: "音色带有强烈的金属感与张力，双唇聚拢给簧片微弹性。",
    mouthShape: "发“伊(Ee)”高舌位，唇压适度不紧咬",
    leftHand: {
      thumb: ["高音C泛音键", "Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
      pinky: ["低音F键"]
    },
    description: "高音区关键半音，启动高音C泛音键。",
    tip: "左手拇指切换至高音C泛音键，右手小指按紧F键。"
  },
  {
    note: "高音 B (High B3)",
    scientificNote: "B3",
    octave: 3,
    clef: "tenor",
    staffPosition: 2.5,
    difficulty: "advanced",
    solfege: "高西 (Ti)",
    numberedNotation: "7",
    characterRhyme: "左手C泛音键按好，右手食指中指按实～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 极速激光贯穿 (交响乐经典乐句高音)",
    metaphorDesc: "高音导音，气压要求极高，腹部横膈膜全力支撑。",
    mouthShape: "发“伊(Ee)”高舌位，双唇均匀贴合簧片",
    leftHand: {
      thumb: ["高音C泛音键", "Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, true, false],
      pinky: ["低音F键"]
    },
    description: "高音区大调导音，要求极高的气流控制力。",
    tip: "左手拇指切换至高音C泛音键，唇压柔和不僵硬。"
  },
  {
    note: "高音 C (High C4)",
    scientificNote: "C4",
    octave: 4,
    clef: "tenor",
    staffPosition: 3,
    difficulty: "advanced",
    solfege: "超高多 (Do)",
    numberedNotation: "1˙",
    characterRhyme: "春之祭名段！左手C泛音键，高速气流肚皮绷紧～",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 超音速高压喷射 (《春之祭》灵魂高音)",
    metaphorDesc: "需要极度压缩的高速空气，舌根抬高如发‘伊’音，腹肌核心提供源源不断的支撑。",
    mouthShape: "发“伊(Ee)”高舌位，唇压极其精准柔和",
    leftHand: {
      thumb: ["高音C泛音键", "Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, false, false],
      pinky: ["高音F键"]
    },
    description: "巴松著名高音界标（《春之祭》开头名段）。",
    tip: "需要极度集中的高速气流与柔和精准的唇压，切忌咬紧簧片。"
  },
  {
    note: "超高音 D (High D4)",
    scientificNote: "D4",
    octave: 4,
    clef: "tenor",
    staffPosition: 4,
    difficulty: "advanced",
    solfege: "超高来 (Re)",
    numberedNotation: "2˙",
    characterRhyme: "巴松极限天花板！高音D泛音键，极速压缩激光束！",
    airflowType: "fast_laser",
    metaphorTitle: "⚡ 极境激光超高音 (交响乐队炫技之巅)",
    metaphorDesc: "现代交响乐与独奏华彩极限音，需要极高的气流速度与超细致的簧片振动空间。",
    mouthShape: "发“衣(Ee)”极高舌位，喉部开阔腹部强支撑",
    leftHand: {
      thumb: ["高音D泛音键", "Whisper键"],
      fingers: [true, true, false],
    },
    rightHand: {
      thumb: [],
      fingers: [true, false, false],
      pinky: ["低音Ab键"]
    },
    description: "管弦乐独奏炫技极限高音。",
    tip: "左手拇指启动高音D键，切勿死死咬合簧片，依靠高速气流激发。"
  }
];
