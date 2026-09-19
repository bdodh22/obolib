/**
 * InstruLib Base — Instrument Configuration Core
 * ================================================
 * 这是整个多乐器站基座的灵魂文件。
 *
 * 使用方法：
 *   1. 在 INSTRUMENT_CONFIGS 中找到目标乐器的预设配置
 *   2. 将 ACTIVE_INSTRUMENT 设为对应的 InstrumentId
 *   3. 运行 `npm run dev` 即可得到该乐器的完整站点
 *
 * 新增乐器：在 INSTRUMENT_CONFIGS 添加新条目，实现 InstrumentConfig 接口即可。
 */

// ============================================================
// 类型定义
// ============================================================

export type Locale = 'zh' | 'en' | 'de' | 'ja';

export type InstrumentId =
  | 'bassoon'
  | 'french-horn'
  | 'clarinet'
  | 'oboe'
  | 'trombone'
  | 'guzheng'
  | 'handpan';

/**
 * 运指/演奏系统类型
 * - woodwind-keys:  木管按键式（巴松、双簧管、单簧管）
 * - brass-valve:    铜管活塞式（圆号、小号）
 * - trombone-slide: 长号滑管式
 * - string-pluck:   弹拨弦乐（古筝）
 * - percussion-free: 打击类，无固定运指（手碟）
 */
export type FingeringSystemType =
  | 'woodwind-keys'
  | 'brass-valve'
  | 'trombone-slide'
  | 'string-pluck'
  | 'percussion-free';

/**
 * Feature Flags — 按乐器特性开启/关闭功能模块
 * 所有 flag 默认 false，按需开启，杜绝死代码加载。
 */
export interface InstrumentFeatureFlags {
  /** 是否有 3D GLB 模型展示 */
  has3DModel: boolean;
  /** 是否有运指/键位系统（古筝/手碟使用弦序图/打击模式替代） */
  hasFingeringSystem: boolean;
  /** 是否有芦片校准工具（双簧管、巴松共用） */
  hasReedTool: boolean;
  /** 是否有把位系统（长号专用，7把位可视化） */
  hasSlidePosition: boolean;
  /** 是否有弦序交互图（古筝专用，21弦布局） */
  hasStringDiagram: boolean;
  /** 是否有音阶配置选择器（手碟专用：Kurd/Celtic/Integral 等） */
  hasScaleConfig: boolean;
  /** 是否有冥想模式（手碟专用，极简视觉+氛围音） */
  hasMeditationMode: boolean;
  /** 是否有泛音列可视化（圆号专用） */
  hasHarmonicSeries: boolean;
  /** 是否有手盖音（Stopped）模拟器（圆号专用） */
  hasStoppedTechnique: boolean;
  /** 是否有音区跨越（Break）专项工具（单簧管专用） */
  hasBreakTechnique: boolean;
  /** 是否集成 Gemini AI 工具 */
  hasAI: boolean;
  /** 是否有会员付费系统 */
  hasMembership: boolean;
  /** 是否有管理员后台 */
  hasAdminConsole: boolean;
  /** 是否有儿童模式（游戏化学习） */
  hasKidMode: boolean;
  /** 是否有声学发音路径 SVG 连接器 */
  hasAcousticPathVisual: boolean;
}

/** 3D 模型渲染配置 */
export interface Model3DConfig {
  /** GLB 文件路径，相对于 public/ */
  path: string;
  /** 模型初始缩放比例 */
  scale: number;
  /** 初始旋转 [x, y, z] (弧度) */
  initialRotation: [number, number, number];
  /** 摄像机初始距离 */
  cameraDistance: number;
  /** 是否开启自动旋转 */
  autoRotate: boolean;
  /** 自动旋转速度 */
  autoRotateSpeed: number;
}

/** 运指/演奏系统配置 */
export interface FingeringSystemConfig {
  type: FingeringSystemType;
  /** 总按键数（木管） */
  totalKeys?: number;
  /** 活塞数（铜管） */
  totalValves?: number;
  /** 把位总数（长号） */
  totalSlidePositions?: number;
  /** 弦数（古筝） */
  totalStrings?: number;
  /** 音区分组名称 */
  registers: string[];
  /** 是否支持半孔/半位技法 */
  hasHalfHole: boolean;
  /** 移调系数（如圆号 F 调 = 'F'，单簧管 Bb 调 = 'Bb'，巴松 'C'） */
  transposition: string;
}

/** 品牌主题色系 */
export interface InstrumentTheme {
  /** 主色（如 '#0D9488'） */
  primary: string;
  /** 主色浅底（用于背景） */
  primaryLight: string;
  /** 主色深（用于 hover/active） */
  primaryDark: string;
  /** 强调色 */
  accent: string;
  /** Hero 渐变（Tailwind 类名串） */
  heroGradient: string;
  /** 导航栏玻璃光晕颜色（rgba） */
  navGlowColor: string;
}

/** SEO 元数据配置 */
export interface InstrumentSEO {
  /** 页面标题模板，%s 为页面名，%brand 为品牌名 */
  titleTemplate: string;
  /** 默认首页标题（35-60字符） */
  defaultTitle: string;
  /** 默认 meta description（110-160字符） */
  defaultDescription: string;
  /** OG 分享图路径 */
  ogImage: string;
  /** 核心关键词（用于 meta keywords + 内容策略） */
  primaryKeywords: string[];
  /** 站点主力 locale */
  locale: string;
}

/**
 * InstrumentConfig — 乐器站完整配置对象
 * 这是整个基座的核心契约，每个乐器站只需填写此对象。
 */
export interface InstrumentConfig {
  // ── 基础身份 ──────────────────────────────────────────
  id: InstrumentId;

  /** 乐器名称（多语言） */
  name: Record<Locale, string>;

  /** 站点品牌名（如 'BSNLib', 'HornLib'） */
  brandName: string;

  /** 品牌副标（如 'Bassoon Learning Platform'） */
  brandTagline: Record<Locale, string>;

  /** URL slug（如 'bassoon', 'french-horn'） */
  slug: string;

  /** 生产环境域名（如 'bsnlib.com'） */
  domain: string;

  /** 完整 base URL */
  baseUrl: string;

  // ── 功能开关 ──────────────────────────────────────────
  features: InstrumentFeatureFlags;

  // ── 3D 模型 ───────────────────────────────────────────
  model3D?: Model3DConfig;

  // ── 运指/演奏系统 ─────────────────────────────────────
  fingeringSystem?: FingeringSystemConfig;

  // ── 主题色系 ──────────────────────────────────────────
  theme: InstrumentTheme;

  // ── SEO ───────────────────────────────────────────────
  seo: InstrumentSEO;

  // ── i18n ──────────────────────────────────────────────
  /** 支持的语言列表 */
  supportedLocales: Locale[];

  /** 默认/主力语言 */
  defaultLocale: Locale;

  // ── 导航结构 ──────────────────────────────────────────
  /** 启用的导航标签（按顺序） */
  navTabs: Array<
    | 'home'
    | 'fingering'
    | 'scores'
    | 'tools'
    | 'knowledge'
    | 'ai'
    | 'camp'
    | 'kid'
    | 'membership'
    | 'admin'
  >;
}

// ============================================================
// 各乐器站预设配置
// ============================================================

const CONFIGS: Record<InstrumentId, InstrumentConfig> = {
  // ──────────────────────────────────────────────────────────
  // 巴松管 (Bassoon) — 原版 BSNLib，生产已验证
  // ──────────────────────────────────────────────────────────
  'bassoon': {
    id: 'bassoon',
    name: { zh: '巴松管', en: 'Bassoon', de: 'Fagott', ja: 'ファゴット' },
    brandName: 'BSNLib',
    brandTagline: {
      zh: '专业巴松学习平台',
      en: 'Professional Bassoon Learning',
      de: 'Professionelles Fagott-Lernen',
      ja: 'プロファゴット学習プラットフォーム',
    },
    slug: 'bassoon',
    domain: 'bsnlib.com',
    baseUrl: 'https://bsnlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: true,
      hasReedTool: true,
      hasSlidePosition: false,
      hasStringDiagram: false,
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: false,
      hasStoppedTechnique: false,
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: true,
      hasKidMode: true,
      hasAcousticPathVisual: true,
    },
    model3D: {
      path: '/models/bassoon.glb',
      scale: 1.0,
      initialRotation: [0, 0.3, 0],
      cameraDistance: 3.5,
      autoRotate: true,
      autoRotateSpeed: 0.5,
    },
    fingeringSystem: {
      type: 'woodwind-keys',
      totalKeys: 26,
      registers: ['低音区 (Low)', '中音区 (Mid)', '高音区 (High)', '极高音 (Altissimo)'],
      hasHalfHole: true,
      transposition: 'C',
    },
    theme: {
      primary: '#7C3AED',         // 紫色
      primaryLight: '#F5F3FF',
      primaryDark: '#6D28D9',
      accent: '#D97706',
      heroGradient: 'from-purple-900 via-purple-700 to-amber-600',
      navGlowColor: 'rgba(124, 58, 237, 0.15)',
    },
    seo: {
      titleTemplate: '%s | BSNLib – Bassoon Learning',
      defaultTitle: 'BSNLib – Interactive Bassoon Fingering, Scores & AI Tools',
      defaultDescription:
        'Master the bassoon with interactive fingering charts, 100+ scores, AI reed doctor, and breath training. Trusted by players in 30+ countries.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['bassoon fingering', 'bassoon lessons', 'bassoon scores', 'fagott lernen', 'ファゴット運指'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'camp', 'kid', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 双簧管 (Oboe) — 阶段1，与巴松共享最多
  // ──────────────────────────────────────────────────────────
  'oboe': {
    id: 'oboe',
    name: { zh: '双簧管', en: 'Oboe', de: 'Oboe', ja: 'オーボエ' },
    brandName: 'OboLib',
    brandTagline: {
      zh: '专业双簧管学习平台',
      en: 'Professional Oboe Learning',
      de: 'Professionelles Oboe-Lernen',
      ja: 'プロオーボエ学習プラットフォーム',
    },
    slug: 'oboe',
    domain: 'obolib.com',
    baseUrl: 'https://obolib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: true,
      hasReedTool: true,          // 双簧管芦片工具直接复用！
      hasSlidePosition: false,
      hasStringDiagram: false,
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: false,
      hasStoppedTechnique: false,
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: false,
      hasAcousticPathVisual: true,
    },
    model3D: {
      path: '/models/oboe.glb',
      scale: 1.0,
      initialRotation: [0, 0.2, 0],
      cameraDistance: 3.0,
      autoRotate: true,
      autoRotateSpeed: 0.4,
    },
    fingeringSystem: {
      type: 'woodwind-keys',
      totalKeys: 23,
      registers: ['低音区 (Low)', '中音区 (Mid)', '高音区 (High)'],
      hasHalfHole: true,
      transposition: 'C',
    },
    theme: {
      primary: '#0D9488',         // 青绿色
      primaryLight: '#F0FDFA',
      primaryDark: '#0F766E',
      accent: '#0369A1',
      heroGradient: 'from-teal-900 via-teal-700 to-cyan-500',
      navGlowColor: 'rgba(13, 148, 136, 0.15)',
    },
    seo: {
      titleTemplate: '%s | OboLib – Oboe Learning',
      defaultTitle: 'OboLib – Interactive Oboe Fingering, Scores & Reed Guide',
      defaultDescription:
        'Master the oboe with interactive fingering charts, 80+ classical scores, AI reed calibration tool, and breathing exercises. Trusted worldwide.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['oboe fingering', 'oboe lessons', 'oboe reed', 'oboe scores', 'Oboe lernen'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 单簧管 (Clarinet) — 阶段2，市场最大
  // ──────────────────────────────────────────────────────────
  'clarinet': {
    id: 'clarinet',
    name: { zh: '单簧管', en: 'Clarinet', de: 'Klarinette', ja: 'クラリネット' },
    brandName: 'ClarLib',
    brandTagline: {
      zh: '专业单簧管学习平台',
      en: 'Professional Clarinet Learning',
      de: 'Professionelles Klarinette-Lernen',
      ja: 'プロクラリネット学習プラットフォーム',
    },
    slug: 'clarinet',
    domain: 'clarlib.com',
    baseUrl: 'https://clarlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: true,
      hasReedTool: false,
      hasSlidePosition: false,
      hasStringDiagram: false,
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: false,
      hasStoppedTechnique: false,
      hasBreakTechnique: true,    // 单簧管专有：音区跨越 Break 技法
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: true,
      hasAcousticPathVisual: true,
    },
    model3D: {
      path: '/models/clarinet.glb',
      scale: 1.0,
      initialRotation: [0, 0.2, 0],
      cameraDistance: 3.5,
      autoRotate: true,
      autoRotateSpeed: 0.4,
    },
    fingeringSystem: {
      type: 'woodwind-keys',
      totalKeys: 18,
      registers: ['低音区 (Chalumeau)', '跨越音区 (Break)', '中音区 (Clarion)', '高音区 (Altissimo)'],
      hasHalfHole: false,
      transposition: 'Bb',        // 降B调（Bb 调单簧管）
    },
    theme: {
      primary: '#2563EB',         // 蓝色
      primaryLight: '#EFF6FF',
      primaryDark: '#1D4ED8',
      accent: '#7C3AED',
      heroGradient: 'from-blue-900 via-blue-700 to-indigo-500',
      navGlowColor: 'rgba(37, 99, 235, 0.15)',
    },
    seo: {
      titleTemplate: '%s | ClarLib – Clarinet Learning',
      defaultTitle: 'ClarLib – Interactive Clarinet Fingering, Scores & AI Coach',
      defaultDescription:
        'Master the clarinet with 200+ fingering charts, Bb & A clarinet support, break technique guide, and AI-powered practice coaching. Free to start.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['clarinet fingering', 'clarinet lessons', 'klarinette lernen', 'クラリネット運指', 'clarinet break technique'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'camp', 'kid', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 圆号 (French Horn) — 阶段3
  // ──────────────────────────────────────────────────────────
  'french-horn': {
    id: 'french-horn',
    name: { zh: '圆号', en: 'French Horn', de: 'Horn', ja: 'ホルン' },
    brandName: 'HornLib',
    brandTagline: {
      zh: '专业圆号学习平台',
      en: 'Professional French Horn Learning',
      de: 'Professionelles Horn-Lernen',
      ja: 'プロホルン学習プラットフォーム',
    },
    slug: 'french-horn',
    domain: 'hornlib.com',
    baseUrl: 'https://hornlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: true,
      hasReedTool: false,
      hasSlidePosition: false,
      hasStringDiagram: false,
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: true,    // 圆号专有：泛音列可视化
      hasStoppedTechnique: true,  // 圆号专有：手盖音模拟器
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: false,
      hasAcousticPathVisual: true,
    },
    model3D: {
      path: '/models/french-horn.glb',
      scale: 1.0,
      initialRotation: [0, 0.5, 0],
      cameraDistance: 4.0,
      autoRotate: true,
      autoRotateSpeed: 0.3,
    },
    fingeringSystem: {
      type: 'brass-valve',
      totalValves: 3,
      registers: ['低音区', '中音区', '高音区', '超高音区'],
      hasHalfHole: false,
      transposition: 'F',         // F 调圆号
    },
    theme: {
      primary: '#B45309',         // 琥珀铜色
      primaryLight: '#FFFBEB',
      primaryDark: '#92400E',
      accent: '#DC2626',
      heroGradient: 'from-amber-900 via-amber-700 to-yellow-500',
      navGlowColor: 'rgba(180, 83, 9, 0.15)',
    },
    seo: {
      titleTemplate: '%s | HornLib – French Horn Learning',
      defaultTitle: 'HornLib – Interactive French Horn Fingering & Harmonic Series',
      defaultDescription:
        'Master the French horn with valve fingering charts, harmonic series visualizer, stopped horn technique guide, and orchestral excerpt library.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['french horn fingering', 'horn valve chart', 'Horn lernen', 'ホルン運指', 'stopped horn technique'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 长号 (Trombone) — 阶段4
  // ──────────────────────────────────────────────────────────
  'trombone': {
    id: 'trombone',
    name: { zh: '长号', en: 'Trombone', de: 'Posaune', ja: 'トロンボーン' },
    brandName: 'TromLib',
    brandTagline: {
      zh: '专业长号学习平台',
      en: 'Professional Trombone Learning',
      de: 'Professionelles Posaune-Lernen',
      ja: 'プロトロンボーン学習プラットフォーム',
    },
    slug: 'trombone',
    domain: 'tromlib.com',
    baseUrl: 'https://tromlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: false,
      hasReedTool: false,
      hasSlidePosition: true,     // 长号专有：7把位可视化
      hasStringDiagram: false,
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: true,    // 长号也有泛音列
      hasStoppedTechnique: false,
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: false,
      hasAcousticPathVisual: true,
    },
    model3D: {
      path: '/models/trombone.glb',
      scale: 1.0,
      initialRotation: [0, 0.3, 0],
      cameraDistance: 5.0,
      autoRotate: true,
      autoRotateSpeed: 0.3,
    },
    fingeringSystem: {
      type: 'trombone-slide',
      totalSlidePositions: 7,
      registers: ['低音区 (Pedal)', '基音区 (Fundamental)', '中音区 (Mid)', '高音区 (High)'],
      hasHalfHole: false,
      transposition: 'Bb',
    },
    theme: {
      primary: '#0369A1',         // 钢蓝色
      primaryLight: '#E0F2FE',
      primaryDark: '#075985',
      accent: '#D97706',
      heroGradient: 'from-sky-900 via-sky-700 to-blue-500',
      navGlowColor: 'rgba(3, 105, 161, 0.15)',
    },
    seo: {
      titleTemplate: '%s | TromLib – Trombone Learning',
      defaultTitle: 'TromLib – Trombone Slide Positions, Scores & Practice Tools',
      defaultDescription:
        'Master the trombone with interactive 7-position slide charts, harmonic series trainer, orchestral excerpt library, and AI-powered slide speed drills.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['trombone slide positions', 'trombone lessons', 'Posaune lernen', 'トロンボーン練習', 'trombone fingering chart'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 古筝 (Guzheng) — 阶段5，差异最大
  // ──────────────────────────────────────────────────────────
  'guzheng': {
    id: 'guzheng',
    name: { zh: '古筝', en: 'Guzheng', de: 'Guzheng', ja: '古筝' },
    brandName: 'GuzLib',
    brandTagline: {
      zh: '专业古筝学习平台',
      en: 'Professional Guzheng Learning',
      de: 'Guzheng Lernen',
      ja: '古筝学習プラットフォーム',
    },
    slug: 'guzheng',
    domain: 'guzlib.com',
    baseUrl: 'https://guzlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: false,
      hasReedTool: false,
      hasSlidePosition: false,
      hasStringDiagram: true,     // 古筝专有：21弦弦序图
      hasScaleConfig: false,
      hasMeditationMode: false,
      hasHarmonicSeries: false,
      hasStoppedTechnique: false,
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: true,
      hasAcousticPathVisual: false,
    },
    model3D: {
      path: '/models/guzheng.glb',
      scale: 1.0,
      initialRotation: [0.1, 0.3, 0],
      cameraDistance: 5.0,
      autoRotate: true,
      autoRotateSpeed: 0.2,
    },
    fingeringSystem: {
      type: 'string-pluck',
      totalStrings: 21,
      registers: ['低音弦 (1-7弦)', '中音弦 (8-14弦)', '高音弦 (15-21弦)'],
      hasHalfHole: false,
      transposition: 'D',         // 标准调 D 商调式
    },
    theme: {
      primary: '#B45309',         // 赤金色
      primaryLight: '#FEF9EE',
      primaryDark: '#92400E',
      accent: '#DC2626',
      heroGradient: 'from-red-900 via-amber-800 to-yellow-600',
      navGlowColor: 'rgba(180, 83, 9, 0.20)',
    },
    seo: {
      titleTemplate: '%s | GuzLib – Guzheng Learning',
      defaultTitle: 'GuzLib – Interactive Guzheng Strings, Techniques & Music Library',
      defaultDescription:
        'Master the guzheng with interactive 21-string diagram, pressing-pitch visualizer, school of technique guide (Zhejiang/Hakka), and classical & modern score library.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['guzheng tutorial', 'guzheng fingering', 'guzheng strings', '古筝入门', 'guzheng technique'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'camp', 'kid', 'membership'],
  },

  // ──────────────────────────────────────────────────────────
  // 手碟 (Handpan) — 阶段6，最独特的受众
  // ──────────────────────────────────────────────────────────
  'handpan': {
    id: 'handpan',
    name: { zh: '手碟', en: 'Handpan', de: 'Handpan', ja: 'ハンドパン' },
    brandName: 'HandpanLib',
    brandTagline: {
      zh: '冥想音乐与手碟演奏',
      en: 'Meditative Music & Handpan Playing',
      de: 'Meditationsmusik & Handpan',
      ja: '瞑想音楽とハンドパン演奏',
    },
    slug: 'handpan',
    domain: 'handpanlib.com',
    baseUrl: 'https://handpanlib.com',
    features: {
      has3DModel: true,
      hasFingeringSystem: false,
      hasReedTool: false,
      hasSlidePosition: false,
      hasStringDiagram: false,
      hasScaleConfig: true,       // 手碟专有：音阶配置选择器
      hasMeditationMode: true,    // 手碟专有：冥想模式
      hasHarmonicSeries: false,
      hasStoppedTechnique: false,
      hasBreakTechnique: false,
      hasAI: true,
      hasMembership: true,
      hasAdminConsole: false,
      hasKidMode: false,
      hasAcousticPathVisual: false,
    },
    model3D: {
      path: '/models/handpan.glb',
      scale: 1.0,
      initialRotation: [-0.3, 0, 0],
      cameraDistance: 3.5,
      autoRotate: true,
      autoRotateSpeed: 0.2,
    },
    fingeringSystem: {
      type: 'percussion-free',
      registers: ['中央音 (Ding)', '环形音孔 (Tone Fields)'],
      hasHalfHole: false,
      transposition: 'D',
    },
    theme: {
      primary: '#059669',         // 深绿色（大地/冥想感）
      primaryLight: '#ECFDF5',
      primaryDark: '#047857',
      accent: '#6D28D9',
      heroGradient: 'from-emerald-900 via-teal-800 to-cyan-600',
      navGlowColor: 'rgba(5, 150, 105, 0.15)',
    },
    seo: {
      titleTemplate: '%s | HandpanLib – Handpan Learning',
      defaultTitle: 'HandpanLib – Handpan Scales, Techniques & Meditative Music',
      defaultDescription:
        'Explore the handpan with scale configurator (Kurd, Celtic, Integral), meditation mode, rhythm patterns, and world music scores. Begin your journey.',
      ogImage: '/og-image.svg',
      primaryKeywords: ['handpan tutorial', 'handpan scales', 'handpan technique', 'handpan kurd scale', 'ハンドパン演奏'],
      locale: 'en-US',
    },
    supportedLocales: ['zh', 'en', 'de', 'ja'],
    defaultLocale: 'en',
    navTabs: ['home', 'fingering', 'scores', 'tools', 'knowledge', 'ai', 'membership'],
  },
};

// ============================================================
// 当前激活的乐器配置
// ============================================================

/**
 * 🔧 修改此处切换乐器站！
 * 每个独立站的仓库中，此值固定为对应的 InstrumentId。
 */
export const ACTIVE_INSTRUMENT: InstrumentId = 'oboe';

/**
 * 获取当前激活的乐器配置
 */
export function getInstrumentConfig(): InstrumentConfig {
  return CONFIGS[ACTIVE_INSTRUMENT];
}

/**
 * 获取指定乐器的配置（用于管理工具或多站对比）
 */
export function getConfigById(id: InstrumentId): InstrumentConfig {
  return CONFIGS[id];
}

/**
 * 所有乐器配置（用于管理工具展示）
 */
export const ALL_INSTRUMENT_CONFIGS = CONFIGS;

export default CONFIGS[ACTIVE_INSTRUMENT];
