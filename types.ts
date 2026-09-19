export type I18nText = {
  zh: string;
  en: string;
};

export interface ScoreNote {
  beat: string;
  note: string;
  length: string;
  fingering: string;
  fingeringEn?: string;
  articulation?: "staccato" | "legato" | "tenuto" | "accent" | "slur" | "trill" | "normal";
  dynamic?: "ppp" | "pp" | "p" | "mp" | "mf" | "f" | "ff" | "fff" | "cresc" | "decresc";
  breath?: boolean; // 换气呼吸记号 (Breathe Mark)
  teacherTip?: string; // 导师难点手记
  teacherTipEn?: string;
  clef?: "bass" | "tenor";
}

export interface ScoreSegment {
  id?: string;
  measureNumber: number; // 小节编号 (如第1小节、第3小节)
  startMeasure?: number; // 起始小节 (用于跨小节乐句)
  endMeasure?: number; // 结束小节
  type?: "breathing" | "fingering" | "half-hole" | "intonation" | "articulation" | "posture" | "expression" | "technique" | "rhythm" | "general";
  title?: string; // 教学要点简标 (如 "呼吸气口", "半孔精准度", "小指滑键", "低音气流支撑")
  suggestion: string; // 教学建议，如 "建议此处换气，保持横膈膜支撑", "注意此处半孔准确性，左手食指下滚1/3孔位"
  severity?: "tip" | "warning" | "highlight"; // 提示等级
}

export interface Score {
  id: string;
  title: string;
  englishTitle: string;
  category: string; // kids, exam, classical, ensemble
  sectionType?: "intro" | "intermediate" | "orchestral" | "concerto"; // 入门、进阶名段、交响乐必考片段、完整考级协奏曲
  tags?: string[];
  difficulty: string;
  author: string;
  composer?: string;
  source: string;
  instrument: string; // Bsn, Dbn, Fag
  targetAge: string;
  description: string;
  englishDescription?: string;
  audioUrl?: string;
  aiTip: string;
  rating: number;
  downloadCount: number;
  isFree: boolean;
  isCustom?: boolean;
  customCreatedAt?: string;
  sheetNotes?: ScoreNote[];
  segments?: ScoreSegment[]; // 教学分段小节建议与悬浮标注
  tempoBpm?: number;
  keySignature?: string;
  keySignatureEn?: string;
  timeSignature?: string;
  timeSignatureEn?: string;
  totalMeasures?: number;
  practiceGoals?: string[];
}

export interface PracticeCheckin {
  id: string;
  studentName: string;
  date: string;
  category: string;
  duration: number;
  performance: string;
  notes: string;
  badges: string[];
}

export interface TutorMessage {
  id: string;
  sender: "user" | "tutor";
  text: string;
  timestamp: string;
}

export interface FingeringEntry {
  note: string;
  scientificNote: string;
  octave: number;
  clef: "bass" | "tenor";
  staffPosition: number; // For rendering on staff
  leftHand: {
    thumb: string[]; // e.g., ["whisper", "D", "C#"]
    fingers: [boolean, boolean, boolean]; // 1, 2, 3
    pinky?: string[]; // e.g., ["Eb", "Db"]
  };
  rightHand: {
    thumb: string[]; // e.g., ["E (pancake)", "F#", "Ab", "Bb"]
    fingers: [boolean, boolean, boolean]; // 1, 2, 3
    pinky?: string[]; // e.g., ["F", "Ab"]
  };
  description: string;
  tip: string;
}

export type NavTab = "home" | "fingering" | "score" | "tools" | "camp" | "ai" | "kid" | "admin" | "membership" | "knowledge";
