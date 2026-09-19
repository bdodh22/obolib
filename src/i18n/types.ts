/**
 * InstruLib Base — 通用 i18n 类型契约
 * =====================================
 * 本文件定义所有乐器站共用的多语言接口。
 *
 * 设计原则：
 * 1. 乐器无关：所有接口使用通用词汇（instrument/note/fingering），
 *    不出现 bassoon/oboe 等具体乐器名
 * 2. 严格类型约束：TranslationSchema 是所有语言文件的合同
 * 3. 乐器名称通过 config.name[locale] 动态注入，不写死
 *
 * 与 BSNLib 的差异：
 * - 去除所有 "Bassoon" 特有字段名（如 whisperKey → specialThumbKey）
 * - 新增 instrumentSpecific 块供每站扩展专有文案
 */

export type Locale = 'zh' | 'en' | 'de' | 'ja';

// ============================================================
// L1: 界面框架文案层（UI Shell）
// 所有乐器站共用
// ============================================================

export interface NavI18n {
  /** 品牌标语（从 config.brandTagline 动态获取，此处为回退值） */
  brandTagline: string;
  home: string;
  fingering: string;
  scores: string;
  tools: string;
  knowledge: string;
  member: string;
  admin: string;
  kid: string;
  ai: string;
  camp: string;
  loggedInAs: string;
  clickToLogin: string;
  logout: string;
  switchLang: string;
  /** 主 CTA 按钮文案 */
  heroCta: string;
}

export interface FooterI18n {
  copyright: string;
  disclaimer: string;
  contact: string;
  privacy: string;
  terms: string;
  followUs: string;
  builtWith: string;
}

export interface CommonI18n {
  /** 通用按钮 */
  btnLearnMore: string;
  btnTryNow: string;
  btnPrint: string;
  btnCopy: string;
  btnCopied: string;
  btnExport: string;
  btnClose: string;
  btnPrev: string;
  btnNext: string;
  btnPlay: string;
  btnPause: string;
  btnStop: string;
  btnStart: string;
  btnFinish: string;
  btnSave: string;
  btnReset: string;
  btnSearch: string;
  /** 通用状态 */
  loading: string;
  error: string;
  noResults: string;
  /** 通用标签 */
  free: string;
  premium: string;
  new: string;
  popular: string;
  difficulty: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  professional: string;
}

// ============================================================
// L1: 首页模块文案
// ============================================================

export interface HomeI18n {
  /** Hero 标题（会动态插入乐器名） */
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  /** 特性卡片 */
  cardFingeringTitle: string;
  cardFingeringDesc: string;
  cardFingeringBtn: string;
  cardScoresTitle: string;
  cardScoresDesc: string;
  cardScoresBtn: string;
  cardToolsTitle: string;
  cardToolsDesc: string;
  cardToolsBtn: string;
  cardKnowledgeTitle: string;
  cardKnowledgeDesc: string;
  cardKnowledgeBtn: string;
  cardAITitle: string;
  cardAIDesc: string;
  cardAIBtn: string;
  /** 信任背书 */
  statsUsers: string;
  statsCountries: string;
  statsScores: string;
  statsFingerings: string;
  /** FAQ 区块 */
  faqSectionTitle: string;
  faqSectionSubtitle: string;
}

// ============================================================
// L1: 通用运指系统文案（woodwind-keys / brass-valve 共用）
// ============================================================

export interface FingeringI18n {
  title: string;
  subtitle: string;
  /** 音区选择 */
  allRegisters: string;
  lowRegister: string;
  midRegister: string;
  highRegister: string;
  altissimoRegister: string;
  /** 操作 */
  prevNote: string;
  nextNote: string;
  playNote: string;
  soundPlaying: string;
  printBtn: string;
  exportCardBtn: string;
  copyAdviceBtn: string;
  copiedAdviceBtn: string;
  /** 孔位/键位状态 */
  holePressed: string;
  holeOpen: string;
  holeHalf: string;
  /** 引导模式 */
  guideBtn: string;
  guideStepCount: string;
  stepPlay: string;
  stepPause: string;
  stepPrev: string;
  stepNext: string;
  stepFinish: string;
  /** 诊断/建议 */
  diagnosisTitle: string;
  expandKeypoints: string;
  collapseKeypoints: string;
  embouchureTitle: string;
  embouchureAdvice: string;
  breathFastLaser: string;
  breathSteadyBreeze: string;
  breathWarmOpen: string;
  /** 移动端视图切换 */
  mobileViewSwitch: string;
  mobileBoth: string;
  mobileLeftOnly: string;
  mobileRightOnly: string;
  /** 高级工具区块 */
  advancedToolsTitle: string;
  advancedToolsSub: string;
  transitionComparatorTitle: string;
  scaleSequencerTitle: string;
  pressureAnalyticsTitle: string;
}

// ============================================================
// L1: 长号专用 — 把位系统文案
// ============================================================

export interface SlidePositionI18n {
  title: string;
  subtitle: string;
  position: string;   // '把位'
  positions: string;  // '把位图'
  slide: string;      // '滑管'
  slideSpeed: string;
  positionChart: string;
  allPositions: string;
  drillMode: string;
}

// ============================================================
// L1: 古筝专用 — 弦序图文案
// ============================================================

export interface StringDiagramI18n {
  title: string;
  subtitle: string;
  string: string;     // '弦'
  strings: string;    // '弦数'
  openString: string;
  pressedString: string;
  pressedPitch: string;
  tuning: string;
  scale: string;
  stringNumber: string;
  technique: {
    pluck: string;
    press: string;
    slide: string;
    tremolo: string;
    harmonic: string;
  };
  schools: {
    title: string;
    zhejiang: string;
    hakka: string;
    shaanxi: string;
    henan: string;
  };
}

// ============================================================
// L1: 手碟专用 — 音阶配置 + 冥想模式
// ============================================================

export interface ScaleConfigI18n {
  title: string;
  subtitle: string;
  scaleName: string;
  rootNote: string;
  tonalCenter: string;
  selectScale: string;
  meditationMode: string;
  meditationTitle: string;
  meditationDesc: string;
  ambientSound: string;
  breathingGuide: string;
  scaleNames: {
    kurd: string;
    celtic: string;
    integral: string;
    aegean: string;
    hijaz: string;
    amara: string;
    pygmy: string;
  };
}

// ============================================================
// L1: 曲谱库文案
// ============================================================

export interface ScoresI18n {
  title: string;
  subtitle: string;
  filterByDifficulty: string;
  filterByCategory: string;
  filterByTag: string;
  sortBy: string;
  sortByRating: string;
  sortByDownloads: string;
  sortByDate: string;
  categories: {
    kids: string;
    exam: string;
    classical: string;
    ensemble: string;
    modern: string;
    traditional: string;
  };
  scoreDetail: {
    composer: string;
    source: string;
    targetAge: string;
    tempoBpm: string;
    keySignature: string;
    timeSignature: string;
    totalMeasures: string;
    practiceGoals: string;
    aiTip: string;
    download: string;
    playback: string;
    practice: string;
  };
}

// ============================================================
// L1: 工具箱文案
// ============================================================

export interface ToolsI18n {
  title: string;
  subtitle: string;
  /** 通用工具（所有乐器） */
  breathTrainer: string;
  breathTrainerDesc: string;
  metronome: string;
  metronomeDesc: string;
  tuner: string;
  tunerDesc: string;
  scalePlayer: string;
  scalePlayerDesc: string;
  /** 芦片工具（双簧管/巴松） */
  reedCalibrator?: string;
  reedCalibratorDesc?: string;
  reedDoctorAI?: string;
  /** 圆号专用 */
  harmonicSeries?: string;
  harmonicSeriesDesc?: string;
  stoppedTechnique?: string;
  /** 单簧管专用 */
  breakTechnique?: string;
  breakTechniqueDesc?: string;
  /** 长号专用 */
  slideSpeedDrill?: string;
  slideSpeedDrillDesc?: string;
}

// ============================================================
// L1: 知识库文案
// ============================================================

export interface KnowledgeI18n {
  title: string;
  subtitle: string;
  articleBy: string;
  readTime: string;
  relatedArticles: string;
  categories: {
    technique: string;
    history: string;
    maintenance: string;
    theory: string;
    repertoire: string;
    beginner: string;
  };
}

// ============================================================
// L1: AI 工具文案
// ============================================================

export interface AIToolsI18n {
  title: string;
  subtitle: string;
  askQuestion: string;
  aiThinking: string;
  aiResponse: string;
  practiceCoach: string;
  practiceCoachDesc: string;
  reedDoctor: string;
  reedDoctorDesc: string;
  scoreAnalyzer: string;
  scoreAnalyzerDesc: string;
  disclaimer: string;
}

// ============================================================
// L1: 会员系统文案
// ============================================================

export interface MembershipI18n {
  title: string;
  subtitle: string;
  freePlan: string;
  proPlan: string;
  priceMonthly: string;
  priceYearly: string;
  feature: string;
  features: string;
  getStarted: string;
  upgrade: string;
  currentPlan: string;
}

// ============================================================
// 顶层 TranslationSchema — 所有语言文件必须实现此接口
// ============================================================

export interface TranslationSchema {
  nav: NavI18n;
  footer: FooterI18n;
  common: CommonI18n;
  home: HomeI18n;
  fingering: FingeringI18n;
  scores: ScoresI18n;
  tools: ToolsI18n;
  knowledge: KnowledgeI18n;
  ai: AIToolsI18n;
  membership: MembershipI18n;
  /** 长号专用（可选） */
  slidePosition?: SlidePositionI18n;
  /** 古筝专用（可选） */
  stringDiagram?: StringDiagramI18n;
  /** 手碟专用（可选） */
  scaleConfig?: ScaleConfigI18n;
}
