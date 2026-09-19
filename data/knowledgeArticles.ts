import { NavTab } from "../types";

export type KnowledgeCategory = 
  | "all"
  | "reed"
  | "fingering"
  | "practice"
  | "care"
  | "theory"
  | "bocal_physics"
  | "stage_health";

export type SkillLevel = "all" | "入门" | "进阶" | "演奏级";
export type JointType = "all" | "reed" | "bocal" | "wing" | "boot" | "bass" | "bell" | "full";

export interface KnowledgeArticle {
  id: string;
  category: KnowledgeCategory;
  subCategoryZh: string;
  subCategoryEn: string;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  difficulty: "入门" | "进阶" | "演奏级";
  readTime: string;
  targetAudienceZh: string;
  jointType: JointType;
  jointNameZh: string;
  goldenRuleZh: string;
  goldenRuleEn: string;
  applicableJointZh: string;
  keyPointsZh: string[];
  stepsZh?: string[];
  mistakesZh?: string[];
  tags: string[];
  relatedTab: NavTab;
  relatedToolNameZh: string;
  faqEquivalent: {
    qZh: string;
    aZh: string;
    qEn?: string;
    aEn?: string;
  };
}

export const COMPREHENSIVE_KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  // ==========================================
  // 🪡 1. 哨片微调与力学工坊 (REED WORKSHOP)
  // ==========================================
  {
    id: "reed-care-basics",
    category: "reed",
    subCategoryZh: "全周期保养与防霉防裂",
    subCategoryEn: "Reed Care Basics & Longevity",
    titleZh: "巴松哨片全周期保养与寿命延长完全指南 (Reed Care Basics) · 浸润、清洁、恒湿与防裂",
    titleEn: "Bassoon Reed Care Basics: Complete Guide to Soaking, Cleaning, Storage & Longevity",
    summaryZh: "掌握从新哨片温水浸润、每日练琴清洁漱口、唾液酸蚀防护、到 72% 双向恒湿盒存放与哨片轮换制的完整保养体系，有效将手工哨片寿命从 2 周延长至 2~3 个月。",
    summaryEn: "The complete guide to bassoon reed care basics: optimal soaking temperature, saliva acid prevention, gentle drying, 72% two-way humidity cases, and reed rotation systems to extend lifespan by up to 300%.",
    difficulty: "入门",
    readTime: "4 分钟",
    targetAudienceZh: "初学者 · 琴童家长 · 业余进阶与乐团乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Bassoon Double Reed)",
    goldenRuleZh: "「温水浸两分切莫泡透跟，吹前先漱口除糖去酸；轻拭内腔潮透气恒湿存，三支轮换用寿命延三倍。」",
    goldenRuleEn: "Soak 2 mins in clean lukewarm water, rinse your mouth before playing, blot interior moisture, store at 70-75% RH, and rotate at least 3 reeds.",
    applicableJointZh: "双簧管/巴松芦苇哨片 (Arundo Donax Cane)",
    keyPointsZh: [
      "科学水温与浸润时间控制：使用 25℃~35℃ 温水浸泡 2~3 分钟，水位仅淹没哨面 2/3（切勿浸泡至缠线软木跟部）；严禁直接用嘴含唾液浸泡（唾液含淀粉酶与酸性物质会加速芦苇纤维水解瓦解）。",
      "吹前口腔卫生与酸糖防护：吹奏前必须清水漱口，避免食物残渣、糖分或酸性饮料附着在芦苇微孔内，阻碍自由振动并滋生黑色霉菌。",
      "练毕水分管理与内腔除湿：练习结束后用温清水轻轻冲洗哨面，使用专用羽毛、通条或吸水纸小心引流内腔冷凝水，避免水分在管腔内发酵产生异味或胶层脱落。",
      "专用恒湿盒与防霉通风：杜绝将湿哨片直接装入密闭塑料管；推荐使用带有通风网眼、配备 70%~75% 双向湿度控制包（如 Boveda）的专业哨片盒，保持芦苇细胞壁弹性。",
      "多哨轮换使用制度（Reed Rotation）：同时保有 3~4 支可吹状态的哨片轮流使用，给每支哨片充分干燥恢复弹性的时间，可使整组哨片综合寿命延长 3 倍以上。"
    ],
    stepsZh: [
      "第一步（吹前浸泡）：取一小杯 25℃~30℃ 清水，将哨片刀口尖端朝下浸入 2/3，浸泡 2~3 分钟至哨尖闭合自然回弹，取出在空气中静置 1 分钟让水分渗透至芦苇深层。",
      "第二步（试音诊断）：轻含第一道铜丝吹出多重泛音（Crow）。泛音清脆纯净、三度叠置平衡即可上管安装，避免干吹导致哨尖微裂。",
      "第三步（练毕清洁）：练琴完毕取下哨片，用细水流冲洗掉表面附着的唾液蛋白，用干净吸水棉纸轻轻触碰哨口吸干多余水滴（切勿用力擦拭脆弱的哨尖边缘）。",
      "第四步（通风微干）：在无风遮阴台面上平放通风 3~5 分钟，待表面水光褪去后放入专用恒湿盒。",
      "第五步（建立轮换日志）：在哨片软木跟部标注 1、2、3 号，每日轮换使用，避免单支芦苇长期处于潮湿疲劳极限。"
    ],
    mistakesZh: [
      "❌ 用唾液干含浸泡哨片（唾液酶水解芦苇纤维，导致哨片两周内变软、塌音失去高音支撑）。",
      "❌ 浸泡超过 10 分钟或泡在水杯中过夜（芦苇细胞壁过度吸水吸胀，纤维水肿变木，音色发闷发虚）。",
      "❌ 湿哨片直接放入密闭塑料密封管（形成厌氧温床，48小时内长出黑色霉菌点，威胁呼吸道健康）。",
      "❌ 刚吃完甜食或喝过果汁直接吹奏（糖分沉积堵塞芦苇导管，造成无法清除的黏滞杂音）。",
      "❌ 独宠一支哨片直到吹烂（芦苇没有充分干燥休整期，微裂纹迅速扩大报废）。"
    ],
    tags: ["reed care basics", "bassoon reed care", "bassoon reed maintenance", "巴松哨片保养", "哨片寿命延长", "哨片浸泡时间", "哨片防霉恒湿", "双簧哨片基础"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片智能门诊",
    faqEquivalent: {
      qZh: "巴松双簧哨片日常如何科学保养？怎样延长哨片使用寿命防止发霉？",
      aZh: "吹奏前用 25-35℃ 温水浸泡 2-3 分钟（切忌唾液干含或长时间水泡）；吹前必须清水漱口；练毕用吸水纸擦干内腔冷凝水，存放于配有 70%-75% 恒湿包的透气哨片盒中；同时建立 3-4 支哨片每日轮换制，可将哨片寿命从 2 周延长至 2-3 个月。"
    }
  },
  {
    id: "reed-resistance-scraping",
    category: "reed",
    subCategoryZh: "芦苇振动与刀法打磨",
    subCategoryEn: "Cane Vibration Mechanics",
    titleZh: "新哨片阻力过大（发闷/吹不动）的微观刮修法则",
    titleEn: "How to Fix a Stuffy Reed with Heavy Airflow Resistance",
    summaryZh: "当新哨片感觉气流阻抗过大、吹奏5分钟嘴唇发酸时，通过精准刮修两侧通道与窗口区释放芦苇振动能量，切忌直接破坏中脊骨架。",
    summaryEn: "Release cane vibration energy by strategically scraping the side channels and windows.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 进阶乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Reed)",
    goldenRuleZh: "「中脊是命脉，千万莫动刀；轻推两侧翼，气通音自娇。」",
    goldenRuleEn: "Preserve the heart and spine; scrape only the lateral channels.",
    applicableJointZh: "双簧哨片 (Double Reed)",
    keyPointsZh: [
      "切忌直接刮削哨片中脊（Spine/Heart），脊柱是维持音准与声音骨架的核心支撑。",
      "重点打磨两侧窗口（Windows）及侧翼边缘（Channels），释放边际振动自由度。",
      "刮刀倾斜角度保持 30°~45°，使用极轻羽毛状笔触（Feather Strokes）单向顺纹推刮。",
      "每次左右两侧平衡打磨 2~3 刀即上管试吹，避免过度打薄导致塌音。"
    ],
    stepsZh: [
      "温水浸泡哨片 2~3 分钟，插上专用芯模（Mandrel），左手拇指轻托哨叶背面。",
      "刮刀从距哨尖 1/3 处的窗口区开始，顺着木纹斜向两侧薄边轻轻刮除薄层纤维。",
      "逆光透视：两侧透光度应对称，尖端薄如蝉翼，中脊保持深色暗影。",
      "用 1200 目极细水砂纸轻轻抛光刮痕，避免粗糙毛刺引发杂音。"
    ],
    mistakesZh: [
      "❌ 把哨尖正中间全部刮平，导致哨口闭合塌陷，高音完全失声。",
      "❌ 干刮未浸泡的芦苇，直接造成纵向开裂报废。"
    ],
    tags: ["新哨片吹不动发闷", "哨片打薄", "刮修步骤", "阻力微调", "哨刀手法"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片智能门诊",
    faqEquivalent: {
      qZh: "巴松哨片吹起来阻力过大、发闷吹不动该如何刮修调理？",
      aZh: "温水浸润哨片2-3分钟并插上芯模，使用专用刮刀以30°-45°倾斜角轻刮哨片两侧窗口及侧翼通道，释放芦苇边际振动自由度。切忌刮削正中脊柱，每刮2-3刀需上管试吹。"
    }
  },
  {
    id: "reed-opening-wires",
    category: "reed",
    subCategoryZh: "铜丝张力与哨口几何学",
    subCategoryEn: "Wire Tension & Tip Geometry",
    titleZh: "哨口开合度（Tip Opening）与第一/第二道铜丝形变微调",
    titleEn: "Modulating Tip Opening & Throats with 1st and 2nd Wires",
    summaryZh: "无需动刀也能改变哨片的软硬度与音色偏向——利用扁嘴钳微调两道铜丝的形变力学，实现高低音快速平衡。",
    summaryEn: "Adjust reed resistance and tone without a knife by modulating the 1st and 2nd brass wires.",
    difficulty: "进阶",
    readTime: "2 分钟",
    targetAudienceZh: "考级学员 · 乐团乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Reed)",
    goldenRuleZh: "「湿润状态动铜丝，捏边撑圆捏面扁；第一道管哨口度，第二道掌喉管宽。」",
    goldenRuleEn: "Adjust wires only when wet. 1st wire controls tip opening, 2nd wire controls throat cavity.",
    applicableJointZh: "双簧哨片铜丝 (Brass Wires)",
    keyPointsZh: [
      "第一道铜丝（距哨跟约28mm）：控制哨口开合高度，直接影响吹奏阻力与发音灵敏度。",
      "第二道铜丝（距哨跟约20mm）：起到反向力学支点作用，控制管腔圆润度与低音丰满度。",
      "微调需在哨片完全湿润状态下进行，单次形变量不得超过 0.2 毫米。"
    ],
    stepsZh: [
      "若哨口过窄（发音扁、低音难出）：用平口钳轻捏第一道铜丝两侧，哨口即刻自然撑开。",
      "若哨口过宽（漏气沉重、高音偏低）：用平口钳轻捏第一道铜丝上下正反面，压缩哨口扁平度。",
      "若需要增强低音宽厚度与共鸣：轻捏第二道铜丝两侧，扩展喉管内径。"
    ],
    mistakesZh: [
      "❌ 用力过猛导致铜丝绞线断裂或芦苇侧边开裂。",
      "❌ 在干燥状态下强行挤压铜丝。"
    ],
    tags: ["按全了为什么吹不出低音", "铜丝调节", "哨口高度", "软硬控制", "哨口扁平"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片门诊",
    faqEquivalent: {
      qZh: "如何通过微调两道铜丝改变巴松哨片的软硬度和哨口大小？",
      aZh: "在哨片湿润状态下，用平口钳轻捏第一道铜丝两侧可撑开哨口（增加低音与开合度）；轻捏上下正反面可收窄哨口（降低阻力）；轻捏第二道铜丝两侧可扩展内部喉管提升低音共鸣。"
    }
  },
  {
    id: "reed-hydration-hygiene",
    category: "reed",
    subCategoryZh: "温湿度管理与防霉防裂",
    subCategoryEn: "Hydration & Mold Prevention",
    titleZh: "哨片温水浸泡2分钟法则、湿度盒管理与防霉防裂",
    titleEn: "Reed Hydration, Humidity Case Care & Longevity Rules",
    summaryZh: "延长一支手工好哨片使用寿命（从2周延长至2个月）的科学温湿度养护方法，避免发水胀或发霉。",
    summaryEn: "Scientific daily maintenance methods to double your handmade reed longevity.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "琴童家长 · 初学入门",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Reed)",
    goldenRuleZh: "「温水泡两分，切莫泡透跟；练毕通水滴，透气恒湿存。」",
    goldenRuleEn: "Soak 2 mins in lukewarm water, swab dry after practice, store with airflow.",
    applicableJointZh: "双簧哨片 (Double Reed)",
    keyPointsZh: [
      "浸泡黄金时间：温水 2~3 分钟即可；忌泡水超过10分钟导致芦苇水浸发胀变软。",
      "存放环境：推荐使用带有透气孔或 72% 恒湿包的双簧专用哨片盒。",
      "吹奏完毕必须擦干内腔水滴，避免直接放入密封塑料袋内引起发霉变黑。"
    ],
    stepsZh: [
      "吹奏前准备一个专用带盖小水杯，水温控制在 25℃~35℃。",
      "仅将哨片前端 2/3 浸入水中，无需将软木缠线部分完全泡透。",
      "练琴结束后，用羽毛或吸水纸轻轻吸净内腔冷凝水，通风处自然风干 5 分钟后放入盒内。"
    ],
    mistakesZh: [
      "❌ 泡在水杯里一整天不管，导致芦苇纤维彻底泡烂瘫软。",
      "❌ 湿哨片直接装入密封塑料袋，2天内必发黑长霉斑。"
    ],
    tags: ["新哨片吹不动发闷", "哨片泡水", "防发霉", "寿命延长", "哨片盒"],
    relatedTab: "tools",
    relatedToolNameZh: "查看配套工具 · 哨片门诊",
    faqEquivalent: {
      qZh: "巴松哨片每次练琴应该泡多久水？如何防止发霉？",
      aZh: "建议使用25-35℃温水浸泡2-3分钟即可，切忌超过10分钟以免芦苇泡胀发软。吹奏完毕后用吸水纸擦干内腔，置于带有透气孔或72%恒湿包的专用哨片盒中存放。"
    }
  },
  {
    id: "reed-leak-seal-parafilm",
    category: "reed",
    subCategoryZh: "侧边密封与生料带缠裹",
    subCategoryEn: "Side Sealing & Parafilm",
    titleZh: "哨片侧缝漏气嘶嘶声（Air Leak）与密封膜缠裹技巧",
    titleEn: "Fixing Side Leaks and Sizzling Noise with Parafilm",
    summaryZh: "当哨片两侧闭合不严、吹奏有明显杂音漏气感时，使用生料带或石蜡膜进行侧边密封的无损修复方法。",
    summaryEn: "Eliminate phantom hissing leaks by sealing reed lateral edges with Teflon tape.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "全体学员 · 乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Reed)",
    goldenRuleZh: "「生料带拉薄缠第一道下，严禁遮挡刀口窗口区。」",
    goldenRuleEn: "Wrap thin Teflon tape below the 1st wire only, never cover the vibrating windows.",
    applicableJointZh: "双簧哨片侧缝 (Reed Rails)",
    keyPointsZh: [
      "抽气自检：手堵住哨跟，含住哨尖抽真空，哨叶应吸附闭合至少 2~3 秒。",
      "若瞬间漏气泄压，说明第一道铜丝下方或两侧边缘有微小裂隙。",
      "缠绕水工生料带（PTFE Tape）或 Parafilm，能立竿见影提升气密性与声音集中度。",
    ],
    stepsZh: [
      "剪取 3cm 长的超薄生料带，双手将其轻微拉伸延展变薄。",
      "紧贴第一道铜丝下方，顺时针缠绕 2~3 圈，手指压实服帖。",
      "重新进行抽气真空测试，确认完全密闭无漏气。"
    ],
    mistakesZh: [
      "❌ 胶带缠得太靠上，盖住了振动窗口（Windows），导致哨片彻底发不出声。",
      "❌ 使用厚重透明胶布，胶水溶解后产生异味并污染木管。"
    ],
    tags: ["新哨片吹不动发闷", "漏气嘶嘶声", "生料带密封", "真空测试"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片门诊",
    faqEquivalent: {
      qZh: "巴松哨片侧缝漏气发出嘶嘶杂音怎么办？",
      aZh: "用拇指堵住哨跟抽真空测试密闭性。若漏气，可在第一道铜丝下方紧贴缠绕2-3圈拉薄的生料带或石蜡膜，切勿覆盖上方振动窗口。"
    }
  },
  {
    id: "reed-crow-pitch-tuning",
    category: "reed",
    subCategoryZh: "哨片试吹泛音（Crow）与音准预判",
    subCategoryEn: "Reed Crow Acoustic Diagnosis",
    titleZh: "不用乐器也能测音准：哨片试吹单音（Crow）听辨与三层泛音诊断",
    titleEn: "Diagnosing Reed Harmony with Crowing: Triple Octave Pitch Rules",
    summaryZh: "上管之前判断哨片好坏的金标准——含住第一道铜丝吹出丰满的“嘎嘎”泛音群（Crow），准确预判整管音高与振动平衡。",
    summaryEn: "Master the art of reed crowing to diagnose pitch balance before inserting into the bocal.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 乐团乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片 (Reed Crow)",
    goldenRuleZh: "「含到铜丝吹乌鸦，三层泛音C音准；单音单调必偏窄，三音并鸣声最纯。」",
    goldenRuleEn: "A healthy crow yields three simultaneous octave pitches centered on pitch C.",
    applicableJointZh: "哨片整体振动系统 (Acoustic Cane)",
    keyPointsZh: [
      "健康的巴松哨片在单吹时应发出像乌鸦叫般的丰满多重泛音（Triple Crow），音高中心稳定在 C3~Eb3 附近。",
      "如果只发出单一尖锐的高音：说明哨尖太薄或中脊/喉部太硬，低音区将极难发声。",
      "如果只发出空洞沉重的低音：说明哨口过大或边缘太厚，高音区将偏低且费力。"
    ],
    stepsZh: [
      "将嘴唇含到第一道铜丝附近，完全放松嘴唇肌肉，不加任何咬力。",
      "用适中气流平稳吹入，倾听哨片自激振荡的声音频率。",
      "观察声音是否包含低、中、高三个清晰的共鸣八度音层。"
    ],
    mistakesZh: [
      "❌ 像吹笛子一样只含住 2mm 哨尖吹，无法激发出哨片的自然泛音群。"
    ],
    tags: ["新哨片吹不动发闷", "Crow试吹", "多重泛音", "音准预判", "哨片诊断"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片门诊",
    faqEquivalent: {
      qZh: "巴松哨片试吹“乌鸦叫”（Crow）有什么作用？如何听辨好坏？",
      aZh: "单吹哨片发出类似乌鸦的多重泛音（Crow）能预判其全音域平衡：好的哨片含到第一道铜丝轻吹会同时出现低中高三层泛音并稳定在C音附近；若只有尖锐单音说明低音会极难发声。"
    }
  },
  {
    id: "reed-tip-clipping-sharp-intonation",
    category: "reed",
    subCategoryZh: "哨尖剪切与音准修正",
    subCategoryEn: "Tip Clipping & Pitch Centering",
    titleZh: "音准偏低无法上移？巴松哨尖微切（Clipping）与末端硬度重塑",
    titleEn: "Raising Flat Pitch and Restoring Tip Spring by Precise Clipping",
    summaryZh: "当哨片变软发塌导致全音域整体偏低 15 音分以上时，利用专业哨片剪刀进行 0.2mm 级微剪切，快速找回哨片回弹刚性与音准基线。",
    summaryEn: "Safely raise overall pitch and recover reed backbone with 0.2mm tip clipping technique.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 乐团演奏员",
    jointType: "reed",
    jointNameZh: "双簧哨片尖端 (Tip)",
    goldenRuleZh: "「切尖不过零点二，宁短多次莫贪多；切后重新倒圆角，高音立现气不拖。」",
    goldenRuleEn: "Clip no more than 0.2mm at a time, re-bevel the corners, and test pitch.",
    applicableJointZh: "双簧哨尖端 (Reed Tip Edge)",
    keyPointsZh: [
      "哨片老化后纤维疲劳软化，音准常态性偏低（A=436Hz 难以升至 442Hz）。",
      "使用硬木垫块（Cutting Block）或专用旋转哨剪，垂直单次切除极窄的一丝边缘（约 0.15~0.25mm）。",
      "切尖后哨口边缘会变厚，必须使用刮刀重新将哨尖最前端 1mm 处顺滑打薄并倒出圆角。"
    ],
    stepsZh: [
      "哨片充分湿润，将哨尖平稳平贴在专用黄杨木剪切垫块（Cutting Block）上。",
      "刀片垂直对准哨尖，用力平稳下压，切下极细如发丝的一条芦苇末端。",
      "用 1500 目砂纸轻轻将两侧锐角打磨平滑（Corner Chamfer），防止划伤嘴唇。",
      "上管试吹校音仪，音准即刻提升约 5~8 音分。"
    ],
    mistakesZh: [
      "❌ 一次性剪掉 1 毫米以上，导致中脊过早到达哨尖，哨片变成硬木板彻底吹不动。",
      "❌ 切割面倾斜不对称，造成左右两片芦苇长短不一发音撕裂。"
    ],
    tags: ["音准偏低偏高", "哨尖剪切", "提高音准", "哨片回弹", "哨刀打磨"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 智能校音仪",
    faqEquivalent: {
      qZh: "巴松哨片吹着整体音准偏低怎么调升？如何进行哨尖微剪（Clipping）？",
      aZh: "在哨片湿润状态下平贴在剪切木块上，垂直微剪0.2毫米末端，并重新轻微打薄尖端1毫米处；可有效提升音准5-8音分并增强高音支撑力。"
    }
  },
  {
    id: "reed-back-spine-profiling",
    category: "reed",
    subCategoryZh: "后脊打磨与喉部力学",
    subCategoryEn: "Spine & Throat Profiling",
    titleZh: "哨片高低音脱节？中段脊背（Spine）与喉部过渡打磨的黄金配比",
    titleEn: "Harmonizing High and Low Registers with Spine-to-Throat Profiling",
    summaryZh: "解决低音好吹高音上不去、或者高音顺畅低音发空的脱节病症——建立从第一道铜丝到振动尖端的渐变力学斜坡。",
    summaryEn: "Eliminate register disparity by re-profiling the transition slope between spine and throat.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "专业学生 · 考级高阶",
    jointType: "reed",
    jointNameZh: "双簧哨片中脊 (Spine Profile)",
    goldenRuleZh: "「前薄后厚成斜坡，脊柱平滑无阶梯；喉部微收通低谷，两极平滑换区灵。」",
    goldenRuleEn: "Create an unbroken linear gradient from collar to tip without sharp steps.",
    applicableJointZh: "哨片中脊与喉部 (Spine & Throat)",
    keyPointsZh: [
      "巴松哨片纵向厚度必须呈现严格的阶梯式渐变：哨尖（0.12mm）→ 窗口（0.45mm）→ 中脊（0.85mm）→ 领口（1.15mm）。",
      "若中脊到窗口出现断崖式厚度落差，声波在过渡区会产生反射断层，造成八度大跳破音。",
      "利用铅笔在哨片背面划出微米级等高线网格，用刮刀顺纹抚平所有生硬转折。"
    ],
    stepsZh: [
      "使用千分尺或厚度规（Dial Indicator）测量左右两侧 8 个关键力学点位厚度。",
      "在厚度突变的凸起结节处，用刮刀极轻地以 15° 平角单向推削。",
      "用专用极细平锉刀微调领口（Collar）后方 2mm 处的芦苇表皮，释放基频共鸣。"
    ],
    mistakesZh: [
      "❌ 削去中脊两侧支撑骨架，导致吹大跳连音时哨腔瞬间瘪塌失声。"
    ],
    tags: ["新哨片吹不动发闷", "中脊打磨", "厚度比例", "八度大跳", "千分尺测量"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片门诊",
    faqEquivalent: {
      qZh: "巴松哨片高低音脱节、大跳容易破音怎么打磨中脊？",
      aZh: "使用厚度规排查中脊到窗口的过渡厚度，确保从领口（1.1mm）到哨尖（0.12mm）呈平滑连续的线性斜坡，抚平突兀的台阶感，使声波自由传导。"
    }
  },
  {
    id: "reed-beeswax-thread-sealing",
    category: "reed",
    subCategoryZh: "缠线固型与天然蜂蜡密封 (Beeswax Sealing)",
    subCategoryEn: "Thread Binding & Beeswax Sealing",
    titleZh: "终结侧缝暗漏气：哨片尼龙/棉线缠裹（Wrapping）与天然蜂蜡（Beeswax）封蜡固型工艺",
    titleEn: "Eliminating Micro-Leaks: Thread Wrapping and Natural Beeswax Sealing",
    summaryZh: "手工制哨与哨片维护核心秘籍——用高张力棉线/尼龙线绑紧第二道铜丝与哨跟，并以天然纯蜂蜡深度渗透密封，彻底消除侧缝微漏气与水汽侵蚀。",
    summaryEn: "Master the classic thread wrapping and warm beeswax penetration method to ensure airtight seal and structural durability.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "手工制哨者 · 进阶乐手",
    jointType: "reed",
    jointNameZh: "哨片基座与线头 (Wrapping & Base)",
    goldenRuleZh: "「高张力线紧密绕，蜂蜡温热深渗透；二道铜丝封至根，绝无漏气音纯厚。」",
    goldenRuleEn: "Tightly bind threads from 2nd wire to butt, melt warm beeswax to seal all seams.",
    applicableJointZh: "哨片第二道铜丝至哨根区域",
    keyPointsZh: [
      "双簧哨片下半段若有肉眼不可见的微细裂缝，会导致吹奏时气流耗散、音色发虚且高音极易破音。",
      "天然蜂蜡（Pure Beeswax）相比传统胶水（Duco Cement）具备微柔韧性，不会因芦苇干湿膨胀而脆裂脱落。",
      "缠线时从第二道铜丝（距跟部约20mm）开始致密顺时针环绕，直至覆盖哨根底部，形成标准的橄榄形保护罩。"
    ],
    stepsZh: [
      "将湿润哨片插在专用芯模（Mandrel）上固定，选用加固棉线或涤纶尼龙线。",
      "自第二道铜丝下方紧密缠绕，每圈相互咬合无空隙，线头收尾打双死结并剪除余线。",
      "将天然蜂蜡块靠近温热电烙铁或低火源融化，用调刀将液态蜂蜡均匀涂抹在线体表面。",
      "用手指隔着烘焙纸快速滚转压平，使液态蜂蜡彻底渗入线缝与芦苇管腔微孔，凝固后光洁防水。"
    ],
    mistakesZh: [
      "❌ 封蜡时温度过高把蜂蜡烧焦，或将蜡液滴溅到第一道铜丝上方的振动窗口区。",
      "❌ 缠线过松，吹奏数周后线圈松散脱落导致哨片爆开。"
    ],
    tags: ["哨片封蜡与打磨", "蜂蜡密封", "哨片缠线", "防漏气", "手工制哨"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片智能门诊",
    faqEquivalent: {
      qZh: "巴松哨片为什么要用蜂蜡和棉线缠裹？如何正确封蜡？",
      aZh: "棉线缠裹能加固哨片喉部结构防止芦苇爆裂，而天然蜂蜡具有良好的柔韧密封性，能渗入线缝阻绝微量漏气与口水渗蚀。在第二道铜丝至哨根致密缠线后，将温热蜂蜡涂抹渗入并压光即可。"
    }
  },
  {
    id: "reed-sandpaper-collar-profiling",
    category: "reed",
    subCategoryZh: "精细水砂纸抛光与倒角 (Fine Sanding)",
    subCategoryEn: "Fine Sandpaper Polishing & Corner Chamfer",
    titleZh: "微米级毛刺消除：1500~2000目水砂纸抛光、领口（Collar）倒角与边角平衡",
    titleEn: "Micro-Polishing: 1500-2000 Grit Sanding, Collar Beveling & Corner Chamfer",
    summaryZh: "刮刀动刀后的关键收尾工序——利用极细水砂纸去除芦苇毛刺木纤维，修圆哨尖两侧锋利锐角，让发音如丝般顺滑并保护嘴唇。",
    summaryEn: "Remove microscopic wood burrs, round sharp tip corners, and smooth the collar line with ultra-fine abrasive sheets.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 乐团乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片表皮 (Blade Surface)",
    goldenRuleZh: "「砂纸微湿极细目，顺纹轻抚消毛刺；尖角倒圆不割唇，丝滑发音无杂音。」",
    goldenRuleEn: "Use wet ultra-fine sandpaper along the grain; chamfer sharp corners to protect lips.",
    applicableJointZh: "哨叶正面、两侧边缘与哨尖角",
    keyPointsZh: [
      "刮刀刮修后会在芦苇表面留下微观刀痕与翘起木纤维，高速气流通过时会激发出沙沙的空气杂音。",
      "使用 1500~2000 目耐水砂纸（微蘸清水）顺着木纹极轻滑过 3~5 次，即可完全抹平刀痕而不改变核心厚度。",
      "哨尖左右两个 90° 直角必须用细砂纸以 45° 倾角轻轻倒圆（Chamfer 约 0.3mm），避免吹奏中刺破嘴唇内膜。"
    ],
    stepsZh: [
      "将 2000 目耐水砂纸裁剪为 2cm×5cm 小片，表面微喷少量清水湿润。",
      "将砂纸平铺在指腹下方，从第一道铜丝前沿顺着中脊与窗口方向，单向轻抚式推过 3 次。",
      "用砂纸边缘轻轻打磨哨尖左右两个顶角，修成微弧形圆润轮廓。",
      "检查领口（Collar）台阶线：用细砂纸轻微倒角过渡，消除生硬折角。"
    ],
    mistakesZh: [
      "❌ 使用 400 目或 600 目粗砂纸使劲来回打磨，导致哨尖瞬间被磨穿报废。",
      "❌ 横向垂直于木纹打磨，扯断纵向维管束纤维造成大面积毛糙。"
    ],
    tags: ["哨片封蜡与打磨", "水砂纸打磨", "消除毛刺", "哨尖倒角", "精细抛光"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 哨片智能门诊",
    faqEquivalent: {
      qZh: "巴松哨片刮完后声音有沙沙毛刺杂音怎么办？怎么用砂纸精细打磨？",
      aZh: "使用1500-2000目微湿水砂纸顺着木纹方向轻抚推过3-5次抹平微观刀痕，并将哨尖左右两角以45度轻微倒圆角，可消除杂音并提升嘴唇贴合舒适度。"
    }
  },

  // ==========================================
  // 🎹 2. 指法声学与半孔高音换区 (FINGERING & ACOUSTICS - 7篇)
  // ==========================================
  {
    id: "fingering-half-hole-mastery",
    category: "fingering",
    subCategoryZh: "声柱泛音与半孔控制",
    subCategoryEn: "Acoustic Nodes & Half-Hole Venting",
    titleZh: "高音 F#3 / G3 / G#3 半孔（Half-Hole）精准滚动与破音消除",
    titleEn: "Mastering the 50% Half-Hole Technique for F#3 & G3",
    summaryZh: "攻克巴松中高音区最重要的换区关卡——左手食指平滑向下微滚开孔，彻底消除尖叫爆破杂音与翻回低音问题。",
    summaryEn: "Conquer the octave pivot: roll your left index finger smoothly to vent the upper node.",
    difficulty: "入门",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 初学进阶",
    jointType: "wing",
    jointNameZh: "翼管第1音孔 (Tone Hole 1)",
    goldenRuleZh: "「手指如水蜜桃，肉垫贴孔心；食指轻下滚两毫米，莫离音孔心。」",
    goldenRuleEn: "Roll the finger pad downward 2mm, never lift the finger completely.",
    applicableJointZh: "翼管第1音孔 (Wing Joint Tone Hole 1)",
    keyPointsZh: [
      "半孔的物理本质是微型泛音泄气孔（Vent），破坏基频振动促使空气柱翻转进入第二八度。",
      "必须采用「肉垫滚动（Rolling）」动作，绝对不可将食指完全抬起再移位覆盖。",
      "开孔面积以 40%~50% 为最佳：开孔过大音准偏高且发音尖锐；开孔过小音出不来或翻回低音。"
    ],
    stepsZh: [
      "左手食指自然保持微弯拱形，指腹肉垫饱满覆盖第 1 孔。",
      "吹奏 F#3 或 G3 时，第一指节轻微向下方（管身下方方向）平滑滚动 2 毫米。",
      "露出上方半月牙形的半孔通道，保持中指与无名指依然紧实密闭不动。",
      "配合腹部提速气流（Laser Airflow），音符将清脆亮丽跃上高八度。"
    ],
    mistakesZh: [
      "❌ 手指垂直抬起悬空后再按半边，产生卡顿和明显气流断层与爆破破音。",
      "❌ 伴随手腕整体晃动导致左手大拇指脱离低音泛音键（Whisper Key）。"
    ],
    tags: ["半孔F#3/G3总是尖叫破音", "半孔50%", "食指滚动", "破音消除", "换区技巧"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法 & 练习 · 半孔指法演练",
    faqEquivalent: {
      qZh: "巴松高音 F#3 与 G3 容易破音或翻回低音，半孔该怎么按？",
      aZh: "左手食指切忌垂直抬起再悬空覆盖，应保持指腹肉垫贴在第1孔上，轻微向管身下方滚动2毫米露出约40%-50%的半月牙形通气口，同时腹部送出高速集中气流。"
    }
  },
  {
    id: "fingering-weak-fingers-leaks",
    category: "fingering",
    subCategoryZh: "弱指独立性与防漏气",
    subCategoryEn: "Finger Seal & Leak Prevention",
    titleZh: "低音下不去？弱指（左手3孔与右手6孔无名指）防漏排查",
    titleEn: "Preventing Leaks on Ring Fingers (Holes 3 & 6)",
    summaryZh: "解决初学者最常见的低音虚浮、下潜困难根源——无名指肉垫平实密闭覆盖与指力分离训练。",
    summaryEn: "Eliminate the #1 beginner hurdle: weak ring finger sealing causing silent leaks.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "琴童 · 初学者",
    jointType: "boot",
    jointNameZh: "下靴管第6孔 (Boot Joint)",
    goldenRuleZh: "「指肚肉垫对准心，无名指莫立指尖；低音虚浮先查六，腹气一托音自圆。」",
    goldenRuleEn: "Seal with wide fleshy pads, check hole 6 first when low notes fail.",
    applicableJointZh: "翼管第3孔 / 下靴管第6孔",
    keyPointsZh: [
      "无名指天生肌腱与中指小指相连，容易在换指时无意识翘起导致孔边缘微量漏气。",
      "手指不要使用指尖垂直戳按，必须使用饱满宽厚的指肚肉垫（Finger Pulp）。",
      "手掌保持包裹水蜜桃的自然弧度，手腕自然垂落，切忌大臂内夹或手腕过度下折。"
    ],
    stepsZh: [
      "对镜自检：右手下靴管第4、5、6孔，观察无名指肉垫是否完全封堵住金属音孔边缘。",
      "进行「慢速抬指下落」独立肌力训练：按住1-5孔不动，单独慢速抬起落下第6孔50次。",
      "吹奏低音 F2~C2 连音阶梯，体会下腹部实打实的气流阻尼感。"
    ],
    mistakesZh: [
      "❌ 用指尖死死用力扣按音孔，导致手指酸痛僵硬且依然漏气。",
      "❌ 换低音时右手小指跟着紧绷翘起。"
    ],
    tags: ["按全了为什么吹不出低音", "右手无名指小指总是抽筋酸痛", "弱指防漏气", "第6孔", "低音虚浮"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 换指动作对比",
    faqEquivalent: {
      qZh: "巴松低音区发声虚浮甚至吹不出音，怎么检查是否漏气？",
      aZh: "90%初学者低音发声困难是因为左手第3孔或右手第6孔无名指边缘微量漏气。请使用宽厚饱满的指腹肉垫平实覆盖音孔，避免用指尖垂直死戳，并保持手型自然微弯。"
    }
  },
  {
    id: "fingering-high-register-flick-keys",
    category: "fingering",
    subCategoryZh: "高音连音与左手拇指点按键 (Flicking)",
    subCategoryEn: "High Note Flicking Technique",
    titleZh: "中高音 A3 / Bb3 / B3 / C4 干净起音：左手大拇指点按（Flicking）秘诀",
    titleEn: "Clean Slurs & Attack on A3, Bb3, B3, C4 with Thumb Flick Keys",
    summaryZh: "消除从低音大跳跃进中音时的“嘎嘎”破音——掌握左手拇指在高音 A、C、D 键上的瞬间点按（Flick）技巧。",
    summaryEn: "Eliminate low grunts when slurring to mid-high notes by flicking the A, C, or D thumb keys.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 (5级+) · 乐团乐手",
    jointType: "wing",
    jointNameZh: "翼管高音泛音键群 (Wing High Keys)",
    goldenRuleZh: "「起音瞬间点一下，音出键离莫死按；如蜻蜓点水般轻巧，高音通透不闷响。」",
    goldenRuleEn: "Tap the flick key at the exact moment of attack, then release instantly.",
    applicableJointZh: "翼管上方高音 A/C/D 键 (Wing Joint Flick Keys)",
    keyPointsZh: [
      "从低音向中音 A3、Bb3、B3、C4 连音大跳时，声柱空气惯性容易停留在低八度基频产生杂音。",
      "左手大拇指在发音瞬间轻点一下对应的 A 键或 C 键（Flick），破坏低音驻波促使高八度瞬间建立。",
      "点完立即松手或保留（视乐器音色而定），避免长时间按死造成音准偏高或声音变干。"
    ],
    stepsZh: [
      "练习从 F2 连音大跳到 A3：吹响 F2 保持气流，按 A3 指法的同时左手大拇指轻点翼管 A 键。",
      "练习大跳到 C4：同时轻点翼管 C 键，嘴唇不要过分夹紧，腹部提速送气。",
      "体会「蜻蜓点水」的拇指敏捷度，反复慢速循环连音练习。"
    ],
    mistakesZh: [
      "❌ 靠嘴唇死死咬住哨片来硬挤出高音，导致音准偏高半个音且音色尖利。",
      "❌ 拇指按住 Flick 键不放导致声音发干发飘。"
    ],
    tags: ["半孔F#3/G3总是尖叫破音", "Flicking点按键", "高音大跳", "左手大拇指", "破音消除"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 查看 Flick 键位",
    faqEquivalent: {
      qZh: "吹奏巴松 A3、Bb3、C4 容易出现低音咕噜破音，怎么用 Flick 键解决？",
      aZh: "在发音起吹的瞬间，左手大拇指快速点按一下翼管对应的 High A 键或 C 键（如蜻蜓点水般触碰即离），瞬间破坏低八度基频驻波，配合腹部提速气流实现干净发音。"
    }
  },
  {
    id: "fingering-resonance-enhancers",
    category: "fingering",
    subCategoryZh: "共鸣修正与替代指法 (Alternate/Resonance)",
    subCategoryEn: "Alternate & Resonance Fingerings",
    titleZh: "降 E (Eb3) / 升 F (F#3) / 升 G (G#3) 的共鸣键（Resonance Keys）与替代指法选配",
    titleEn: "Resonance Keys and Alternate Fingerings for Eb3, F#3, G#3",
    summaryZh: "让音色更加圆润纯净、消除偏音——详解德式巴松在特征偏音上的右手小指与大拇指共鸣键加按法则。",
    summaryEn: "Master German bassoon resonance key add-ons to improve intonation and timbre purity.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 乐团声部",
    jointType: "boot",
    jointNameZh: "下靴管共鸣键群 (Resonance Keys)",
    goldenRuleZh: "「中音Eb加按低音D降音高，F#换用右食指侧边键更圆润，G#加按Bb键更稳固。」",
    goldenRuleEn: "Add Low D key for sharp Eb3, use right index side key for lyrical F#3 passages.",
    applicableJointZh: "下靴管/长管共鸣键 (Resonance Keys)",
    keyPointsZh: [
      "标准 Eb3（左123 右大拇指Eb键）：声音天生容易单薄偏高，加按左手大拇指低音 D 键或 C 键可大幅降低音高并丰富低频泛音。",
      "快速乐段中的 F#3：若使用传统大拇指 F# 键换指别扭，可选用右手中指+右手小指 F 键的替代指法提高跑动速度。",
      "音色匹配原则：慢速歌唱性乐段使用长指法（共鸣好），极速跑动乐段使用短指法（换指轻快）。"
    ],
    stepsZh: [
      "对照调音器吹奏长音 Eb3，分别尝试「不加共鸣键」与「加按左手大拇指 D 键」，观察音准表针回正情况。",
      "练习莫扎特协奏曲第一乐章华彩乐段，在 Eb 与 F# 快速交替中切换右手侧键替代指法。"
    ],
    mistakesZh: [
      "❌ 在极速十六分音符乐段强行加按复杂共鸣键，导致手指打架绊手绊脚。"
    ],
    tags: ["音准偏低偏高", "Eb3偏高补偿", "替代指法", "共鸣键", "换指流畅度"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 替代指法对比",
    faqEquivalent: {
      qZh: "巴松 Eb3 和 F#3 音色发干、音准偏高怎么办？如何使用共鸣键？",
      aZh: "吹奏中音 Eb3 时，左手大拇指加按低音 D 键可有效校正偏高的音准并使音色更浑厚；慢速乐段使用长共鸣指法，极速跑动时可选用右手侧边替代指法。"
    }
  },
  {
    id: "fingering-altissimo-high-e",
    category: "fingering",
    subCategoryZh: "超高音区（High D4 ~ E5）",
    subCategoryEn: "Altissimo Register Mastery",
    titleZh: "春之祭与现代作品超高音（High D4 ~ E5）指法与喉位共鸣",
    titleEn: "Conquering the Altissimo Register for Stravinsky's Rite of Spring",
    summaryZh: "攻克交响乐最险峻的超高音区——高音指法组合、喉头高位共鸣与小指共鸣辅助键选用。",
    summaryEn: "Master the extreme high register with precise French/German key combinations and open throat resonance.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "音乐学院 · 乐团演奏家",
    jointType: "wing",
    jointNameZh: "翼管与高音E键 (High E Key)",
    goldenRuleZh: "「气如激光喉腔耸，下巴微松哨含深；右手加开共鸣键，超高通透稳如钟。」",
    goldenRuleEn: "Laser speed air, elevated tongue position, slight deeper reed insertion.",
    applicableJointZh: "翼管高音键群 / 靴管共鸣键",
    keyPointsZh: [
      "超高音依靠极高流速的「激光气柱（Laser Airflow）」与高喉位（发'Ee'音的舌根拱起）。",
      "哨片可以稍向嘴里深含 1~2 毫米，利用较厚区域提供超高频振动支撑。",
      "左手 High D/E 键配合右手 G# 或 F 共鸣键，可显著稳定超高音基频并改善音准。"
    ],
    stepsZh: [
      "热身：先从 A4 长音过渡到 B4，体会腹部压缩气流速度。",
      "吹奏 High C5/D5：舌位保持发'Yi'的拱起状态，喉部保持放松通道。",
      "微调音准：右手小指按住低音 F 键或 Ab 键作为共鸣阻尼，消除摇晃感。"
    ],
    mistakesZh: [
      "❌ 牙齿直接死咬哨尖，导致芦苇振动完全窒息停振。",
      "❌ 气流跟不上导致音符完全翻回低音爆破。"
    ],
    tags: ["超高音指法", "春之祭开篇", "High D5", "喉位共鸣", "高音E键"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 探索超高音指法",
    faqEquivalent: {
      qZh: "巴松管超高音区（High D4-E5）如何稳定发声与控制音准？",
      aZh: "保持腹部高压高速气流，舌位抬高发'Yi'音拱起，哨片可稍深含1-2毫米，切忌用牙齿死咬哨片；搭配右手低音F或Ab小指键可增强超高音共鸣稳定性。"
    }
  },
  {
    id: "fingering-whisper-key-mechanics",
    category: "fingering",
    subCategoryZh: "低音泛音键连动机制 (Whisper Key Lock)",
    subCategoryEn: "Whisper Key & High Note Transition",
    titleZh: "左手大拇指泛音键（Whisper Key）与靴管右大拇指锁（Whisper Lock）机制",
    titleEn: "Mechanics of the Whisper Key and Automatic Low Joint Locks",
    summaryZh: "厘清巴松管最基础也最容易混淆的泛音控制按键——低音泛音键在低音区与高音区工作状态的物理声学差异。",
    summaryEn: "Master whisper key operations, vent pad clearance, and bridge linking across wing and boot joints.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "初学入门 · 考级基础",
    jointType: "wing",
    jointNameZh: "翼管泛音按键 (Whisper Mechanism)",
    goldenRuleZh: "「吹低音拇指按紧泛音键，上高音食指半孔拇指松开；连动桥位对精准，皮垫闭严低音沉。」",
    goldenRuleEn: "Close whisper key below F3, release above F#3. Align the bridge mechanism precisely.",
    applicableJointZh: "翼管与靴管联动桥 (Bridge Key)",
    keyPointsZh: [
      "Whisper Key 的皮垫位于 S 型弯管的小通气孔（Whisper Pip）上，低音区（F3及以下）必须完全按闭。",
      "吹奏 Low E2 以下音符时，靴管右大拇指 E 键会自动通过连动桥杆锁闭 Whisper Key，左手拇指可自由移动到 Low D/C 键。",
      "若安装乐器时翼管与靴管角度错位（连动桥未卡入插槽），低音区将严重漏气导致低八度完全吹不出。"
    ],
    stepsZh: [
      "组装小管（翼管）与靴管时，仔细观察金属连动桥（Whisper Bridge）的咬合滑块是否正对槽位。",
      "按压右大拇指 Low E 键，观察弯管通气孔上的小皮垫是否随之自动压紧。",
      "吹奏 Low Bb1 ~ F2 音阶，确认左手大拇指无多余负担。"
    ],
    mistakesZh: [
      "❌ 吹奏高音 G3、A3 时左手大拇指仍然死死按住 Whisper Key，导致高八度泛音无法建立破音。",
      "❌ 组装时蛮力卡入连动桥导致金属杆弯曲变形。"
    ],
    tags: ["按全了为什么吹不出低音", "WhisperKey", "低音泛音键", "连动桥对齐", "弯管气孔"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 查看键位结构",
    faqEquivalent: {
      qZh: "巴松左手大拇指 Whisper Key 什么时候按、什么时候松开？",
      aZh: "吹奏 F3 及以下所有低音时必须按闭 Whisper Key（或由右大拇指低音键自动联动锁闭）；吹奏 F#3 及以上中高音时必须松开，以便让弯管通气孔泄气进入高八度。"
    }
  },
  {
    id: "fingering-low-bb-to-c-slur",
    category: "fingering",
    subCategoryZh: "极低音区大跳与左手拇指滑行",
    subCategoryEn: "Low Bb to Low D Slide Mastery",
    titleZh: "深海潜航：从极低音 Low Bb1 平滑连音滑行至 Low D2 的拇指力学",
    titleEn: "Mastering the Lowest Register Slurs (Low Bb1 to Low D2)",
    summaryZh: "攻克长管（Bass Joint）4个重型按键的滑行动作——利用大拇指第一关节与指肚侧边缘的微滚动实现无缝连音。",
    summaryEn: "Learn the ergonomic thumb gliding and rolling across Low Bb, B, C, and D heavy keys.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 (6级+) · 乐团声部",
    jointType: "bass",
    jointNameZh: "长管低音键群 (Bass Joint Low Keys)",
    goldenRuleZh: "「拇指侧边平滑滑，切莫离键空中跳；下巴沉底气流宽，深海重低音如磐。」",
    goldenRuleEn: "Glide with the thumb side edge, never hop in the air, keep low jaw relaxed.",
    applicableJointZh: "长管与靴管极低音键群 (Low Keys)",
    keyPointsZh: [
      "长管上的 Low Bb、B、C、D 键按键行程长、弹簧阻力大，拇指不可腾空跳跃按键。",
      "必须使用左手大拇指外侧边缘，像轮子一样在按键滚轮（Rollers）上平滑滚压滑过。",
      "配合极宽、极深、极温热的慢速气柱，喉咙完全扩张如打哈欠状态。"
    ],
    stepsZh: [
      "将双手轻放在乐器上，不吹气单独练习左手大拇指在 Low D → C → B → Bb 滚轮上的平滑滚动 30 次。",
      "吸入大量丹田气，口型发'O'，极弱音（pp）起吹 Low D2，平稳滑入 Low Bb1。",
      "仔细倾听音与音之间是否有气流断裂或金属撞击磕碰声。"
    ],
    mistakesZh: [
      "❌ 换指瞬间嘴唇猛咬哨片，导致极低音瞬间熄火翻上高八度。",
      "❌ 拇指抬起离开乐器再重重砸下，产生巨大的机械杂音。"
    ],
    tags: ["按全了为什么吹不出低音", "极低音LowBb", "滚轮滑行", "左手大拇指", "深海重低音"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 极低音专区",
    faqEquivalent: {
      qZh: "巴松极低音（Low Bb1 到 Low D2）连音很难连起来、总是断气怎么练？",
      aZh: "左手大拇指应利用侧边肉垫沿着金属滚轮（Rollers）顺畅滚压滑行，切忌垂直抬指砸键；下巴保持完全下沉放松，腹部供给温热宽厚的气柱。"
    }
  },
  {
    id: "fingering-altissimo-high-eb-e5",
    category: "fingering",
    subCategoryZh: "极限超高音与High E键拓展",
    subCategoryEn: "Altissimo Fingerings & High E Key Mastery",
    titleZh: "极限超高音指南：High Eb4 / E4 / F4 / E5 指法宝典与左手 High E 键运用",
    titleEn: "Altissimo Mastery: Fingerings for High Eb4, E4, F4 & Left-Hand High E Key",
    summaryZh: "挑战斯特拉文斯基《春之祭》与拉威尔《波莱罗》的极高声区——掌握复合超高音指法、左手 High D/E 泛音键联动与高位舌根共鸣腔。",
    summaryEn: "Master extreme altissimo fingerings for Rite of Spring & Bolero using High E key coordination and high tongue position.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "音乐学院专业生 · 乐团首席",
    jointType: "wing",
    jointNameZh: "翼管高音键群 (High Keywork)",
    goldenRuleZh: "「High E键助攻不咬死，舌根抬高发'Ee'声；右指稳按共鸣垫，气如激光破云霄。」",
    goldenRuleEn: "Engage High E key with high arched tongue voicing ('Ee'); never bite the reed tip.",
    applicableJointZh: "翼管 High D / High E 泛音键及靴管共鸣孔",
    keyPointsZh: [
      "超高音（Eb4~F4/E5）属于第 4~5 级高阶泛音，空气柱极其短促脆弱，任何下巴过度咬力都会直接阻断振动。",
      "左手配置：善用翼管专用的 High D / High Eb / High E 键，左手大拇指精准搭在泛音键尖端，右手配合按紧 G# / F# 共鸣键拉直音准线。",
      "口腔共鸣：舌根必须大幅上拱发'Kee/Ee'音，将气流速度压缩至接近音速，使哨尖在微幅开合下高效共振。"
    ],
    stepsZh: [
      "首先吹响稳定的 High C4，感受腹肌紧绷与气压集中的临界点。",
      "左手开启 High D 键与 High E 键，右手加入低音 F 键或 Ab 共鸣键，吹奏 High Eb4 / E4。",
      "喉咙完全打开保持放松，哨片稍微往嘴唇内深入 1~2 毫米，气流瞬间爆发注入。",
      "使用智能调音仪监测音准，如偏低则微松右手中指，如偏高则微沉下颌。"
    ],
    mistakesZh: [
      "❌ 听到高音上不去就用下排牙齿死死咬合哨尖，哨口闭合导致完全发不出声。",
      "❌ 忽略右手小指/无名指的共鸣键，导致超高音音色极其刺耳且偏高 30 音分。"
    ],
    tags: ["超高音指法", "春之祭开篇", "HighE键", "拉威尔波莱罗", "极限高音"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 演奏级超高音专区",
    faqEquivalent: {
      qZh: "巴松超高音（High Eb4 到 High E5）怎么吹？指法和口型有什么要领？",
      aZh: "超高音核心在于利用左手High D/E泛音键配合右侧共鸣键，舌根抬高发'Ee'音提升气流初速度；严禁下巴死咬哨片，哨片可稍深入嘴唇1毫米以释放高频振动。"
    }
  },
  {
    id: "fingering-harmonic-overblown-fingerings",
    category: "fingering",
    subCategoryZh: "自然泛音列超吹与现代音乐多音",
    subCategoryEn: "Harmonic Overblowing & Multiphonics Fingerings",
    titleZh: "自然泛音列（Harmonics）超吹指法与泛音键物理机制",
    titleEn: "Natural Harmonic Series Overblowing and Node Venting Mechanics",
    summaryZh: "深入理解巴松声学本质——通过保持低音指法、仅依靠气流速度与泛音键微开激发出全音域纯净泛音，提升现代音乐与色彩奏法表现力。",
    summaryEn: "Explore natural harmonic partials over low fingerings to deepen acoustic control and modern extended techniques.",
    difficulty: "演奏级",
    readTime: "3 分钟",
    targetAudienceZh: "专业研修者 · 考级高阶",
    jointType: "full",
    jointNameZh: "全管声学振动波节 (Acoustic Nodes)",
    goldenRuleZh: "「基频指法底盘稳，气速翻倍泛音生；点开波节键即响，空灵音色如天籁。」",
    goldenRuleEn: "Keep base low fingering, double air velocity, and tap nodal vents for ethereal harmonics.",
    applicableJointZh: "全管声波驻波节点",
    keyPointsZh: [
      "巴松管是双圆锥管声学体系，按住低音 C2 或 D2 指法，通过气流加速与口咽腔形变，可以自然吹出高八度、纯五度、双八度等 6 个以上泛音点。",
      "泛音指法（Harmonics）音色带有类似长笛与竖琴的朦胧空灵感，是演奏法国现代作品及独奏华彩的利器。",
      "轻点翼管 A/C/D 泛音键（Flicking/Venting）的本质就是在驻波波节处刺破基频，引导空气柱瞬间进入目标高阶分音。"
    ],
    stepsZh: [
      "按住低音 F2 标准指法，稳定吹奏长音 3 秒。",
      "不改变手指位置，仅将腹部气压提升并将舌位上抬发'Tee'，空气柱即刻翻跃至高八度 F3。",
      "继续加速气柱，吹出泛音 C4 与 F4，建立空气柱分段共振感知。",
      "结合乐谱中的菱形泛音符记号（◇），准确还原作曲家的纯净音色意图。"
    ],
    mistakesZh: [
      "❌ 试图依靠嘴唇猛夹哨片来逼出泛音，导致音准严重失真且声音发干。",
      "❌ 气流支撑不连贯，泛音在基频与泛音之间不受控地上下乱跳。"
    ],
    tags: ["超高音指法", "自然泛音", "波节超吹", "现代奏法", "声学原理"],
    relatedTab: "fingering",
    relatedToolNameZh: "前往指法图鉴 · 泛音专区",
    faqEquivalent: {
      qZh: "巴松怎么吹出空灵的自然泛音（Harmonics）？其物理原理是什么？",
      aZh: "保持低音基频指法不变，依靠横膈膜加压提速气流并抬高舌位发'Tee'，可激发管内空气柱在波节处倍频振动，产生独特的空灵泛音色彩。"
    }
  },

  // ==========================================
  // 💨 3. 气息口型与双吐起音训练 (BREATH, TONE & ARTICULATION - 6篇)
  // ==========================================
  {
    id: "breath-diaphragmatic-support",
    category: "practice",
    subCategoryZh: "腹式呼吸与气柱托力",
    subCategoryEn: "Diaphragmatic Breath Support",
    titleZh: "吹出大提琴般温暖厚实音色的气息与口型秘诀",
    titleEn: "Creating Warm Cello-like Tone with Deep Air Support",
    summaryZh: "摆脱干瘪、尖锐的鸭子音色——建立下沉横膈膜支撑、温热气柱与圆形包饺子口型。",
    summaryEn: "Develop deep diaphragmatic support and rounded cushion embouchure for warm bassoon tone.",
    difficulty: "入门",
    readTime: "3 分钟",
    targetAudienceZh: "初学者 · 考级考生",
    jointType: "full",
    jointNameZh: "全管声柱共鸣 (Full Bore)",
    goldenRuleZh: "「吸气如闻花香腰围涨，呼气如哈大雾气柱沉；下巴微松莫死咬，圆包哨片音自醇。」",
    goldenRuleEn: "Breathe like smelling a flower, exhale warm fog, cushion the reed with round lips.",
    applicableJointZh: "管腔整体共鸣 (Full Bore)",
    keyPointsZh: [
      "巴松管身粗大长达2.5米，需要大容积、高流速的「温热慢气（Warm Air）」，而非高压冷气。",
      "口型采用圆形「包饺子」法：发'呜(Oo)'的口型，上下嘴唇像厚软海绵轻裹哨片。",
      "下巴必须自然下沉打开（像含着一颗温热的鹌鹑蛋），切忌牙齿死咬下嘴唇。"
    ],
    stepsZh: [
      "吸气训练：双手叉腰，深吸气感受后腰与腹部一整圈向外膨胀扩张。",
      "呼气训练：对着手掌哈出一口温热大雾气，体会喉头完全放松打开的感觉。",
      "含哨吹奏：哨尖含入约 1cm，腹底托住气柱，平稳送气吹出饱满 F2 长音。"
    ],
    mistakesZh: [
      "❌ 耸肩胸式浅呼吸，吹2秒就气竭胸闷。",
      "❌ 嘴角向后咧开死咬哨片，吹出单薄尖锐的'鸭叫声'。"
    ],
    tags: ["吹久了下巴咬肌酸痛漏气", "温暖音色", "包饺子口型", "腹式呼吸", "大提琴音色"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 气息互动教练",
    faqEquivalent: {
      qZh: "如何吹出巴松管特有的浑厚、温暖、像大提琴一样的音色？",
      aZh: "保持腹式深呼吸，呼气时像哈出温热大雾一样打开喉头；口型采用发'呜'的圆形包饺子法，上下嘴唇如软海绵包裹哨片，下巴放松下沉，杜绝牙齿死咬。"
    }
  },
  {
    id: "breath-double-tonguing-mastery",
    category: "practice",
    subCategoryZh: "快速起音与双吐（T-K-T-K）",
    subCategoryEn: "Double Tonguing & Rapid Articulation",
    titleZh: "突破十六分音符极限：巴松双吐（T-K-T-K）起音与舌位着力点",
    titleEn: "Double Tonguing Mastery (T-K-T-K) for Rapid Passages",
    summaryZh: "攻克贝多芬第四交响曲等快速断奏乐段——单吐提速与双吐（Ta-Ka）颗粒感训练法。",
    summaryEn: "Master double tonguing (T-K) on double reed to effortlessly play 16th notes above 130 BPM.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级高阶 (7级+) · 乐团乐手",
    jointType: "reed",
    jointNameZh: "双簧哨片起音 (Tongue-to-Reed)",
    goldenRuleZh: "「前吐T如触琴弦，后吐K如喉中咳；气流持续莫中断，双吐如珠滚玉盘。」",
    goldenRuleEn: "T touches the reed tip lightly; K strokes the soft palate without air interruption.",
    applicableJointZh: "哨尖与口腔软腭 (Reed Tip & Palate)",
    keyPointsZh: [
      "单吐极速一般受限于 110~120 BPM，超过该速度必须使用双吐（Ta-Ka 或 Du-Gu）。",
      "前吐（T）：舌尖极其轻微点触哨片下片尖端 1mm 处，绝对不能大面积拍打哨口。",
      "后吐（K）：软腭轻微收缩发'Ka'，核心是保持横膈膜气柱持续向外推，不可在 K 音处气断。"
    ],
    stepsZh: [
      "无乐器口头念白：慢速连续念「Ta-Ka-Ta-Ka-Ta-Ka」，保证两个音节时值与力度绝对均等。",
      "只含哨片练双吐：吹响哨片音（Crow），用中等速度练习「Du-Gu-Du-Gu」八分音符循环。",
      "上管慢速开练：从低音 F2 开始，节拍器 60 BPM 开练十六分音符，逐渐提速至 132 BPM。"
    ],
    mistakesZh: [
      "❌ 'K' 音时气流骤降，导致后半拍发音虚浮变弱、节奏严重瘸腿。",
      "❌ 舌头用力过猛死拍哨尖，导致哨口被打裂破损。"
    ],
    tags: ["双吐技巧", "TK吐音", "吐音颗粒感", "快速断奏", "贝多芬四交"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 律动节拍器练吐音",
    faqEquivalent: {
      qZh: "巴松管双吐（T-K-T-K）怎么练才能保证前后音色均匀不卡顿？",
      aZh: "双吐的关键是气流持续不中断，前吐T用舌尖轻触哨尖下沿，后吐K轻触软腭；先进行慢速口头念白与哨片试吹，确保T与K音量与颗粒度完全一致再上管提速。"
    }
  },
  {
    id: "breath-single-tongue-clean-attack",
    category: "practice",
    subCategoryZh: "单吐起音与哨尖触点",
    subCategoryEn: "Single Tonguing & Pristine Attack",
    titleZh: "告别发闷砸击：巴松单吐清脆起音（Tongue Attack）的微米触点与释放法",
    titleEn: "Clean Single Tonguing: Tip-to-Tip Contact and Pressure Release",
    summaryZh: "解决初学者起音发闷、带口水杂音或‘砰砰’重重砸击的顽疾——建立舌尖对哨下片的轻柔释放起吹机制。",
    summaryEn: "Transform heavy thumpy attacks into elegant, sparkling staccato by understanding tongue release physics.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "初学者 · 考级考生",
    jointType: "reed",
    jointNameZh: "双簧哨尖起音 (Tongue Attack)",
    goldenRuleZh: "「舌头不是锤子砸，而是阀门把门开；气压提前建蓄势，舌离瞬间音自来。」",
    goldenRuleEn: "The tongue is a release valve, not a hammer. Build air pressure before releasing.",
    applicableJointZh: "哨片下片尖端 (Lower Reed Tip)",
    keyPointsZh: [
      "管乐起音的正确物理机制是「气压先建立 → 舌头轻触哨尖止振 → 舌头瞬间后撤释放气流」。",
      "接触点：舌尖正前上方极其微小的一块面积，轻触下哨片边缘下方约 1mm 处。",
      "切忌把整根舌头平贴在哨口正前方，否则会把哨口打扁产生金属爆音。",
      "试音实战标杆：以普罗科菲耶夫《彼得与狼》老爷爷主题（Peter and the Wolf Grandfather Solo）作为检验标准，音头扎实颗粒如靴底踏雪，绝无沉闷砸击感。"
    ],
    stepsZh: [
      "将气流蓄在嘴唇后方（保持横膈膜支撑），舌尖轻触哨片不让气流通过。",
      "心里数'1-2-放'，舌头如触电般迅速缩回口腔底部，气流瞬间激荡哨片发出清脆音头。",
      "在 F2、C3、F3 三个八度上练习 8 分音符轻巧跳音（Staccato），并直接进阶演练《彼得与狼》老爷爷低音断奏乐谱。"
    ],
    mistakesZh: [
      "❌ 每次吐音都用舌头使劲去拍击哨片，把哨尖边缘拍出毛刺或裂口。",
      "❌ 气流随着吐音一顿一挫，音色断断续续干瘪。"
    ],
    tags: ["双吐技巧", "单吐起音", "起音颗粒感", "吐音触点", "跳音断奏", "彼得与狼大管断奏", "Peter and the Wolf Bassoon"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 节拍器辅助训练",
    faqEquivalent: {
      qZh: "巴松吐音为什么总是发闷或者发出很重的砸击声？怎么纠正？",
      aZh: "吐音不是用舌头去撞击哨片，而是充当气流阀门：提前在腹部蓄积气压，舌尖轻贴哨尖下片，在需要发音时迅速后撤释放气流，实现干净清脆的起音。"
    }
  },
  {
    id: "breath-circular-breathing",
    category: "practice",
    subCategoryZh: "循环呼吸秘籍 (Circular Breathing)",
    subCategoryEn: "Circular Breathing Fundamentals",
    titleZh: "永不断气的管乐黑魔法：巴松循环呼吸（腮部储气+鼻吸气）分步训练",
    titleEn: "Step-by-Step Circular Breathing for Extended Bassoon Solos",
    summaryZh: "解决超长连音乐句气不够吹的终极技巧——利用口腔与腮帮子储气挤压维持哨片振动，同时通过鼻子瞬间补气。",
    summaryEn: "Master circular breathing by using cheek reservoir air while inhaling through the nose.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "专业学生 · 乐团演奏员",
    jointType: "full",
    jointNameZh: "口腔与呼吸道 (Oral Cavity & Nasal)",
    goldenRuleZh: "「吹气过程鼓双腮，面肌挤气鼻吸风；软腭开合如阀门，连绵不绝气自通。」",
    goldenRuleEn: "Puff cheeks to store air, squeeze with facial muscles while sniffing through the nose.",
    applicableJointZh: "口腔气囊与鼻腔 (Cheeks & Airway)",
    keyPointsZh: [
      "第一阶段（吸管吹水泡）：用吸管插入水杯中吹泡泡，练习在鼓起腮帮挤压水泡的同时用鼻子轻吸气，保持水泡持续翻滚不间断。",
      "第二阶段（双簧哨片试吹）：单独用哨片吹长音，在换气瞬间收缩面颊肌肉挤出气流，鼻子快速短吸气。",
      "第三阶段（乐器实战）：选择低音 F2 或 G2 阻力适中的音符，进行长达 2 分钟的无间断长音循环练习。"
    ],
    stepsZh: [
      "吹奏长音至第 4 拍时，有意识将一部分空气储存在口腔与双腮内（微鼓腮）。",
      "关闭咽喉通道，利用腮部与舌头向前推挤的压力继续给哨片供气（持续约 0.5 秒）。",
      "在腮部供气的瞬间，鼻子迅速短促深吸一口气（Sniff）。",
      "重新打开咽喉通道，平滑无缝切换回腹部横膈膜供气。"
    ],
    mistakesZh: [
      "❌ 换气瞬间腮部挤压气压不足，导致音准骤降 20 音分或发音瞬间中断。",
      "❌ 鼻子吸气动作太大导致身体剧烈晃动。"
    ],
    tags: ["循环呼吸", "永不断气", "长音练习", "气流控制", "现代作品"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 呼吸互动教练",
    faqEquivalent: {
      qZh: "巴松管如何练习循环呼吸？怎样保证换气时声音不中断？",
      aZh: "先用吸管在水杯中练习鼓腮挤气同时用鼻子吸气；上管时在换气瞬间靠面部肌肉挤压口腔残气维持哨片振动，同时鼻子快速吸气，最后平滑切换回肺部供气。"
    }
  },
  {
    id: "breath-vibrato-mechanics",
    category: "practice",
    subCategoryZh: "揉弦般的歌唱性揉音 (Vibrato)",
    subCategoryEn: "Vibrato Mechanics & Expression",
    titleZh: "从腹肌脉动到歌唱性揉音（Vibrato）：频率、幅度与波形控制",
    titleEn: "Cultivating Warm Diaphragmatic Vibrato on Bassoon",
    summaryZh: "赋予巴松如歌般的情感张力——掌握腹式横膈膜脉动与喉部微调协同的揉音训练法则。",
    summaryEn: "Develop elegant, lyrical diaphragmatic vibrato with precise speed and depth control.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 (6级+) · 演奏员",
    jointType: "full",
    jointNameZh: "全管声柱共振 (Acoustic Column)",
    goldenRuleZh: "「慢揉如湖面微波，快揉如心跳悸动；揉音源于腹下沉，切忌下巴如嚼糖。」",
    goldenRuleEn: "Vibrato comes from gentle abdominal pulses, never chew the reed with your jaw.",
    applicableJointZh: "横膈膜气柱与咽喉 (Diaphragm & Throat)",
    keyPointsZh: [
      "巴松的揉音主要来源于腹部/横膈膜的气压微脉动，辅以喉部微张，严禁用下巴嚼咬哨片（Jaw Vibrato）。",
      "揉音的标准波动频率约为每秒 4.5~5.5 次波峰，波动幅度以音分 ±10~15 cents 为宜。",
      "必须先能吹出平稳无晃动的纯正直线长音，再在上面叠加规律揉音。"
    ],
    stepsZh: [
      "节拍器设定 60 BPM，一拍吹出 2 个平滑气流脉冲（'Ha-Ha'），腹部伴随轻微收缩。",
      "逐渐进阶为一拍 3 连音（'Ha-Ha-Ha'），再进阶到一拍 4 连音（'Ha-Ha-Ha-Ha'）。",
      "将断开的'Ha'连缀成平滑正弦波（Sine Wave），融入 C3、G3 等抒情旋律长音。"
    ],
    mistakesZh: [
      "❌ 靠下巴上下咬合嚼哨片，音准剧烈上下乱晃且声音发抖发硬。",
      "❌ 从音符起吹第1毫秒就剧烈乱抖，破坏音准锚点。"
    ],
    tags: ["巴松揉音", "Vibrato气流", "腹肌脉动", "歌唱性旋律", "音色提升"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 调音器监测音分波动",
    faqEquivalent: {
      qZh: "巴松管揉音（Vibrato）如何正确发力？怎么避免下巴乱嚼？",
      aZh: "巴松揉音源自横膈膜的深层气压微脉动，配合节拍器从每拍2次、3次、4次平滑气脉练起，严禁用下巴嚼动哨片，避免音准失控。"
    }
  },
  {
    id: "breath-extreme-dynamics-pp-ff",
    category: "practice",
    subCategoryZh: "极强与极弱音控 (Pianissimo to Fortissimo)",
    subCategoryEn: "Extreme Dynamics Control",
    titleZh: "从 ppp 极弱耳语到 fff 爆棚共鸣：气压与口唇阻尼的非线性控制",
    titleEn: "Mastering Extreme Dynamic Ranges: From Whisper ppp to Thunderous fff",
    summaryZh: "掌握交响乐中极弱独奏不灭音、极强乐段不炸音的口风气压力学平衡。",
    summaryEn: "Control pitch and intonation stability across radical dynamic swings without flattening or sharpening.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级高阶 · 乐团乐手",
    jointType: "full",
    jointNameZh: "全管动力学系统 (Dynamics Column)",
    goldenRuleZh: "「弱奏气缓唇微松，音准不升心沉底；强奏腹紧喉大开，音色不燥声震宇。」",
    goldenRuleEn: "In pp, keep air moving and lips relaxed; in ff, tighten core and open throat.",
    applicableJointZh: "全管声柱与口风控制",
    keyPointsZh: [
      "吹奏 ppp 极弱音时，切忌用嘴唇使劲把哨口夹扁（会导致音准剧烈偏高 +30 cents 且声音干瘪）。",
      "强奏 fff 时，切忌盲目乱吹冷气（会导致音准骤降偏低），必须靠腹肌剧烈加压并彻底打开口腔发'Ah'音维持宽厚低频。",
      "通过微调含哨深度（弱音略退 0.5mm，强音略深 0.5mm）补偿阻力平衡。"
    ],
    stepsZh: [
      "练习低音 F2 的长音渐强渐弱（Messa di Voce）：从 ppp 缓慢递增至 fff（历时 8 拍），再递减回 ppp。",
      "眼睛紧盯调音器指针，保证音分指针始终稳定在 ±3 cents 以内不动。",
      "体会横膈膜在极弱音时仍然保持高弹性的蓄势托力。"
    ],
    mistakesZh: [
      "❌ 吹弱音时由于害怕破音而偷偷把腹部力道卸掉，导致声音瞬间熄火。",
      "❌ 强奏时嘴唇跟着使劲咬，把哨片咬成死线导致声音撕裂。"
    ],
    tags: ["音准偏低偏高", "极弱音ppp", "极强音fff", "长音渐强渐弱", "交响乐控制力"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 调音器动态监测",
    faqEquivalent: {
      qZh: "巴松吹极弱音（ppp）容易断音或偏高、极强音（fff）容易偏低破音怎么办？",
      aZh: "弱奏时保持横膈膜稳定供气、嘴唇放松莫夹扁哨口以防音准飙高；强奏时腹部发力加压但喉头彻底扩张发'Ah'音，避免音准发飘下坠。"
    }
  },
  {
    id: "breath-double-tonguing-speed-drills",
    category: "practice",
    subCategoryZh: "极速双吐与喉舌协同 (Double Tonguing)",
    subCategoryEn: "Double Tonguing Speed Drills & Synchronization",
    titleZh: "突破 144 BPM 极限：巴松双吐（Ta-Ka / Du-Gu）音色均一性与极速断奏训练",
    titleEn: "Break the 144 BPM Barrier: Double Tonguing (Ta-Ka/Du-Gu) Tone Uniformity",
    summaryZh: "攻克贝多芬第四交响曲末乐章与格林卡《鲁斯兰与柳德米拉》十六分音符快速吐音——建立舌尖（T）与后软腭（K）完全一致的起音颗粒感。",
    summaryEn: "Master rapid double tonguing for orchestral blockbusters with seamless T-K syllable uniformity.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "考级考生 (8级+) · 乐团面试者",
    jointType: "full",
    jointNameZh: "口腔与舌肌动力学 (Articulation Engine)",
    goldenRuleZh: "「前舌后腭力道匀，轻点哨尖莫重砸；慢练颗粒如珍珠，提速飞驰气不断。」",
    goldenRuleEn: "Equalize T and K strike weights; keep continuous pressurized airstream beneath the tongue.",
    applicableJointZh: "舌尖、软腭与横膈膜联动",
    keyPointsZh: [
      "单吐在 112 BPM 以上会因舌肌疲劳导致发僵卡顿，双吐利用舌尖（Ta/Da）与软腭后缩（Ka/Ga）交替切断气流，将发音速度翻倍。",
      "核心难点在于'Ka'音天然偏暗偏软：必须单独进行纯'Ka-Ka-Ka'逆向单音训练，直到后腭发音与前舌'Ta'的清脆度与音量毫无二致。",
      "气流必须保持如激光般不间断向外推压，双吐不是'吐一口气'，而是舌头在连续强气柱上像水轮机叶片般快速切割。"
    ],
    stepsZh: [
      "节拍器定在 72 BPM，纯粹用'Ka-Ka-Ka-Ka'后腭音吹奏中音 F3，练习 3 组。",
      "切换为'Ta-Ka-Ta-Ka'四连音，专注听辨前两个音与后两个音的音色是否有明暗差异。",
      "每次提速 4 BPM（76 → 80 → ... → 132 → 144 BPM），保持手指与吐音毫秒级绝对咬合同步。",
      "在《贝四》末乐章片段实战：弱奏（p）轻吐，舌头仅接触哨尖 10% 面积。"
    ],
    mistakesZh: [
      "❌ 'Ta'音响亮清脆，'Ka'音含糊沉闷，导致乐句听起来像跛脚鸭子一瘸一拐。",
      "❌ 吐音时舌根带动整个喉头剧烈上下跳动，引起嘴唇口型变形漏气。"
    ],
    tags: ["双吐循环呼吸", "极速双吐", "Ta-Ka发音", "贝四交响乐", "断奏颗粒感"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 互动节拍器",
    faqEquivalent: {
      qZh: "巴松管双吐（Double Tonguing）怎么练？后音'Ka'不清晰怎么办？",
      aZh: "双吐的关键是让后腭发音'Ka'与舌尖发音'Ta'保持同等清脆与力度；建议先单独以纯'Ka'练习音阶，保持气流持续高压推力，再从慢速70 BPM逐步加速交替。"
    }
  },
  {
    id: "breath-circular-breathing-extended-solos",
    category: "practice",
    subCategoryZh: "循环呼吸在超长乐句中的实战应用",
    subCategoryEn: "Circular Breathing in Extended Repertoire",
    titleZh: "双吐与循环呼吸高级协同：长乐句无缝腮部气囊储气与鼻吸气实战",
    titleEn: "Advanced Coordination: Circular Breathing for Unbroken Lyrical Cadenzas",
    summaryZh: "彻底打破生理肺活量极限——在演奏巴洛克无休止长乐句或现代协奏曲华彩时，利用面颊口腔储气与瞬时鼻腔吸气实现永不断流的平滑歌唱。",
    summaryEn: "Maintain continuous airflow through cheek compression and micro-inhalation during marathon musical passages.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "独奏乐手 · 专业研修者",
    jointType: "full",
    jointNameZh: "面颊储气囊与软腭活塞 (Air Reservoir)",
    goldenRuleZh: "「换气前微鼓双腮，面肌挤气鼻吸气；软腭下落如活塞，气流无痕接肺源。」",
    goldenRuleEn: "Puff cheeks slightly, compress cheek muscles while sniffing, seamlessly switch to lungs.",
    applicableJointZh: "口腔腮部、软腭与鼻腔气道",
    keyPointsZh: [
      "循环呼吸的物理核心：当肺部气体即将耗尽时，将最后一小口空气截留在两腮与口腔中，面颊肌肉收缩加压维持哨片发声，此时软腭关闭咽喉，鼻子在 0.2 秒内迅速吸入新鲜空气。",
      "音准稳压技巧：面部挤压气囊时极易因气压突降而音准偏低，需在换气瞬间下唇给予微米级支撑补偿。",
      "选点策略：通常在走阶梯式级进音阶或颤音（Trill）处触发循环呼吸，音符本身的起伏能完全掩盖微小的气流切换痕迹。"
    ],
    stepsZh: [
      "杯中水吸管排练：含吸管在水杯中吹气泡，练习鼓腮挤水泡的同时鼻子吸气，做到水泡连续不断。",
      "上管长音实战：在中音 G3 上吹奏稳定长音，在第 4 拍鼓腮、第 5 拍面颊挤气+鼻吸气、第 6 拍顺滑切回横膈膜肺气。",
      "颤音中植入：在 D4 颤音中无痕执行循环呼吸，感受听众完全无法察觉换气点的极致连贯体验。"
    ],
    mistakesZh: [
      "❌ 肺部完全吹空到窒息才仓皇换气，导致面颊气压不足直接熄火断音。",
      "❌ 换气瞬间下巴大幅度下拉，导致音高瞬间下跌半音。"
    ],
    tags: ["双吐循环呼吸", "循环呼吸", "永不断气", "腮部气囊", "华彩长乐句"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 呼吸互动教练",
    faqEquivalent: {
      qZh: "巴松吹超长乐句如何用循环呼吸做到完全听不出换气痕迹？",
      aZh: "提前在肺内保留1/3余气时鼓腮储气，利用面颊肌肉平缓挤压口腔残气维持哨片共振，同时鼻孔敏捷吸气；选择在快速级进或颤音（Trill）处切换最不易察觉。"
    }
  },

  // ==========================================
  // 🛠️ 4. 乐器结构、低音测漏与深度保养防裂 (CARE & MAINTENANCE - 6篇)
  // ==========================================
  {
    id: "care-jammed-tenon-assembly",
    category: "care",
    subCategoryZh: "组装拔管与防卡死",
    subCategoryEn: "Tenon Assembly & Jam Prevention",
    titleZh: "装管/拆管卡死拔不出来？软木蜡涂抹与防摔拔管法",
    titleEn: "How to Safely Assemble and Disassemble Jammed Joints",
    summaryZh: "避免乐器损坏的最危险操作——软木节温湿膨胀卡死时的正确解脱与日常保养手法。",
    summaryEn: "Safely assemble and disassemble bassoon joints without bending keywork or cracking tenons.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "琴童家长 · 全体学员",
    jointType: "boot",
    jointNameZh: "下靴管/翼管榫头 (Tenons)",
    goldenRuleZh: "「装管顺时针微旋，拔管莫死掰键杠；软木常涂润滑蜡，温水通条护管腔。」",
    goldenRuleEn: "Twist gently in one direction, apply cork grease regularly, never twist key mechanisms.",
    applicableJointZh: "下靴管 / 翼管榫头 (Boot & Wing Tenons)",
    keyPointsZh: [
      "组装乐器时手掌必须握在木质管身上，严禁抓握金属连杆和按键用力旋转。",
      "拔管时采用「微小角度左右轻微晃动+单向旋转」，切忌蛮力垂直死拉。",
      "软木发干时及时涂抹天然软木膏（Cork Grease），过紧时可用细砂纸极轻微打磨软木圈。"
    ],
    stepsZh: [
      "先组装靴管与小管（翼管），确认卡扣（Body Lock）对准并锁紧。",
      "再装入大管（长管）与喇叭口，最后将座带或背带挂钩挂在靴管托环上。",
      "吹奏完毕必须使用专用巴松双通条布，从小到大彻底拉出内腔积水。"
    ],
    mistakesZh: [
      "❌ 抓着细长的泛音键用力拧管，直接导致金属按键变形漏气。",
      "❌ 通条布堆成一团硬塞进管内导致卡死拉不出来。"
    ],
    tags: ["乐器卡管拔不出来怎么办", "软木蜡", "组装技巧", "通条布拉水", "防扳断按键"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "巴松管节卡死拔不出来怎么办？如何安全组装与拆卸？",
      aZh: "双手握紧木质管身（严禁抓握金属按键与连杆），微幅顺时针左右轻旋拔出。平时定期在接口软木上涂抹软木膏，避免受潮膨胀卡死。"
    }
  },
  {
    id: "care-vacuum-leak-testing",
    category: "care",
    subCategoryZh: "管节抽气密闭性测试 (Suction Test)",
    subCategoryEn: "Joint Vacuum Suction Testing",
    titleZh: "乐器是否漏气？翼管与靴管的「口部抽真空测试法」自检指南",
    titleEn: "DIY Bassoon Vacuum Leak Testing for Wing and Boot Joints",
    summaryZh: "无需专业维修仪器的快速测漏法——用嘴堵住管口抽真空，30秒准确找出皮垫破损与机械缝隙。",
    summaryEn: "Diagnose silent air leaks across pads and tenons using the classic oral suction test.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "进阶学员 · 乐器维护员",
    jointType: "wing",
    jointNameZh: "翼管与靴管 (Wing & Boot Suction)",
    goldenRuleZh: "「堵住大头抽小头，真空吸舌三秒整；若是瞬间进冷气，必有皮垫闭不严。」",
    goldenRuleEn: "Plug the wide tenon, pull suction on the small end; vacuum must hold for 3 seconds.",
    applicableJointZh: "翼管 / 下靴管气密系统 (Bore Airtightness)",
    keyPointsZh: [
      "翼管测试：用左手大拇指死死堵住翼管底部的软木大孔，按闭所有按键，嘴含住顶端弯管插孔并用力向外抽气形成负压。",
      "若负压能将舌尖牢牢吸附住 3~5 秒以上并发出清脆的“啵”拔罐声，证明翼管气密性 100% 完美。",
      "靴管 U型弯管（U-Tube）是漏气重灾区：底部垫圈老化会导致低音完全吹不出。"
    ],
    stepsZh: [
      "单节拆下翼管，逐一检查 1、2、3 孔及泛音键皮垫。",
      "将底部大榫头紧贴大腿内侧或用手掌堵死，用嘴从弯管接口抽气。",
      "若感觉漏气，用细长吸水纸条配合手电筒逐个照光检查皮垫闭合痕迹。"
    ],
    mistakesZh: [
      "❌ 乐器漏气以为是自己嘴力不行，盲目使劲狂吹加重肌肉疲劳。"
    ],
    tags: ["按全了为什么吹不出低音", "乐器测漏", "抽真空测试", "气密性自检", "U型管漏气"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "怎么在家自己检查巴松管是否漏气？",
      aZh: "将翼管或靴管单节拆下，用手掌堵死底部大榫头并按闭所有按键，从顶端口部抽真空：若能紧紧吸附舌尖3秒以上且拔开有清脆声，证明气密良好；若漏气需检查皮垫或U型管垫圈。"
    }
  },
  {
    id: "care-boot-u-tube-maintenance",
    category: "care",
    subCategoryZh: "下靴管U型金属弯头密封与除垢",
    subCategoryEn: "Boot Joint U-Tube Gasket Care",
    titleZh: "低音全失的元凶：下靴管 U 型金属底弯头（U-Tube）密封圈与积水清理",
    titleEn: "Maintaining Boot Joint U-Tube Metal Bend and Rubber Gasket Sealing",
    summaryZh: "巴松最容易被忽视的声学底部转折点——U型管密封软木/橡胶垫圈老化引起全管失压的排查与修复。",
    summaryEn: "Inspect and service the U-tube at the bottom of the boot joint to eliminate phantom leaks on low notes.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "进阶乐手 · 乐器维保",
    jointType: "boot",
    jointNameZh: "下靴管底盖U型弯头 (U-Tube Assembly)",
    goldenRuleZh: "「底盖螺丝切莫死拧，橡胶垫圈一年一检；倒积水从小孔出，内壁干燥无锈蚀。」",
    goldenRuleEn: "Never over-tighten U-tube screws. Inspect rubber gasket annually for dry rot.",
    applicableJointZh: "下靴管底部金属U管 (Boot Joint Bottom)",
    keyPointsZh: [
      "巴松管内空气柱在下靴管底部通过金属 U 型弯管完成 180° 折返进入大管。",
      "如果底盖螺丝松动、或橡胶软木密封垫圈因常年浸水腐烂，吹奏 Low F 以下音符时空气会全部从底部泄露，导致低音完全发不出声。",
      "每次练完琴倒水时，必须从小管孔一侧倒出（小管内壁有橡胶防腐涂层），严禁倒向无橡胶层的大管孔。"
    ],
    stepsZh: [
      "卸下靴管底部的金属保护罩（Bottom Bow Guard）。",
      "检查固定 U 型管的两颗螺母是否松动（使用螺丝刀轻带，切忌死力拧裂木头）。",
      "如果垫圈老化漏气，涂抹一层极薄的食品级硅脂或天然凡士林临时密封，并预约专业技师更换垫圈。"
    ],
    mistakesZh: [
      "❌ 倒积水时从大管方向倾倒，导致未做防水涂层的枫木木材长期泡水发黑发霉开裂。",
      "❌ 蛮力拧紧底部固定螺丝，直接挤裂靴管底部枫木榫头。"
    ],
    tags: ["按全了为什么吹不出低音", "U型弯管漏气", "倒积水正确方向", "下靴管垫圈", "低音失真"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "巴松下靴管 U 型弯管（U-Tube）漏气怎么排查？倒积水有什么讲究？",
      aZh: "拆开靴管金属底盖检查U型弯头垫圈是否老化漏气；倒水时必须从小管孔一侧倾倒（小管有防水橡胶层），切勿倒向大管孔，避免枫木内壁泡水腐烂开裂。"
    }
  },
  {
    id: "care-wood-crack-prevention",
    category: "care",
    subCategoryZh: "木材温湿度与冬季防开裂",
    subCategoryEn: "Wood Cracking & Winter Care",
    titleZh: "北方暖气与冬季温差：巴松枫木管身防开裂与湿度维稳",
    titleEn: "Preventing Maple Body Cracking in Dry Winters and Heated Rooms",
    summaryZh: "保护数万元枫木乐器的生死攸关防线——冬季由冷入热时的管体回温流程与 45%~60% 湿度维稳实操。",
    summaryEn: "Safeguard your valuable maple bassoon from catastrophic cracking during dry winter seasons.",
    difficulty: "入门",
    readTime: "3 分钟",
    targetAudienceZh: "琴童家长 · 全体乐手",
    jointType: "wing",
    jointNameZh: "翼管与靴管枫木体 (Maple Body)",
    goldenRuleZh: "「室外进屋莫急开，箱内静置半个钟；湿度恒守五十度，热气直吹木必崩。」",
    goldenRuleEn: "Never open cold cases immediately indoors. Let temper 30 mins, keep 50% humidity.",
    applicableJointZh: "枫木管体全部管节 (Wing, Boot, Bass Joints)",
    keyPointsZh: [
      "巴松管身多由数十年的高密度欧洲枫木制成，对湿度急剧骤降（低于35%）和剧烈温差极度敏感。",
      "冬天从室外（0℃以下）进入有暖气的室内（22℃），绝对不可立即开箱吹奏，必须在箱内自然回温 30~45 分钟。",
      "琴盒内应常年放置 Boveda 49%~55% 双向湿度控制包，避免木材干缩产生开裂。"
    ],
    stepsZh: [
      "进屋后将乐器盒平放，静置 30 分钟使内外温差均匀平衡。",
      "吹奏前，用手掌心轻握翼管上方木身数分钟，用体温轻柔预热内腔。",
      "吹奏结束后彻底拉布吸干内壁水分，绝不在出风口、电暖器或地暖上直接放置乐器。"
    ],
    mistakesZh: [
      "❌ 冬天带着冰冷的乐器一进屋就猛吹热气，内壁骤热膨胀外壁冰冷，管体瞬间裂开缝隙。",
      "❌ 将乐器裸露放置在暖气片或空调直吹口附近。"
    ],
    tags: ["乐器卡管拔不出来怎么办", "管身开裂防范", "冬天乐器保养", "双向恒湿包", "回温流程"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "冬天如何防止巴松枫木管身开裂？从室外拿进室内怎么处理？",
      aZh: "从寒冷室外进入暖气房，必须将琴盒闭合静置30-45分钟待其自然回温再开箱；琴盒内常备49%-55%双向恒湿包，严禁将乐器放置在地暖、暖气片或风口处。"
    }
  },
  {
    id: "care-sticky-pads-troubleshooting",
    category: "care",
    subCategoryZh: "皮垫受潮粘连与杂音清除",
    subCategoryEn: "Sticky Leather Pads Cleaning",
    titleZh: "高音按键皮垫（Pads）啪啪发粘与闭合漏气的简易清除法",
    titleEn: "Eliminating Sticky Pad Clicks and Moisture Leaks",
    summaryZh: "解决泛音键和闭孔键按下时发出的刺耳“啪啪”粘黏声与迟钝回弹——使用吸水纸无损除粘实操。",
    summaryEn: "Fix sticky, noisy leather pads safely with powdered cleaning paper without tearing skin.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "全体学员",
    jointType: "wing",
    jointNameZh: "翼管按键皮垫 (Leather Pads)",
    goldenRuleZh: "「吸水纸垫入轻按压，抽出松键莫硬撕；常清冷凝水积液，皮垫久弹不发黏。」",
    goldenRuleEn: "Insert cleaning paper, press pad lightly, release key before pulling paper out.",
    applicableJointZh: "翼管高音键 / 靴管 G# 键皮垫",
    keyPointsZh: [
      "管内冷凝水流经音孔时，水中糖分与唾液残渣会在皮垫皮革表面形成黏性水膜，造成开键卡顿与杂音。",
      "使用专用无尘吸水纸（Cleaning Paper）垫在皮垫下方，轻按按键 2~3 秒吸走残液。",
      "如严重发粘，可使用含微量滑石粉的专用散粉纸（Powder Paper）轻压一次。"
    ],
    stepsZh: [
      "取一张吸水纸，平整塞入发粘的皮垫与金属音孔之间。",
      "用手指轻柔按闭该键 3 秒，松开按键后，再取出吸水纸。",
      "重复 2~3 次直至纸面不再显现水渍阴影。"
    ],
    mistakesZh: [
      "❌ 在手指紧紧按死按键的情况下硬把纸抽出来，导致脆弱的羊皮垫表面被撕裂漏气。",
      "❌ 随意喷涂 WD-40 等油性溶剂，导致皮垫迅速腐烂变质。"
    ],
    tags: ["皮垫发粘啪啪响", "吸水纸使用", "按键回弹迟钝", "皮垫漏气", "日常除湿"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "巴松按键皮垫受潮发粘、按下发出啪啪声怎么清除？",
      aZh: "将专用吸水纸垫在皮垫下方，轻按按键2-3秒吸净水渍，【先松开按键再抽出纸张】防止撕裂皮革；切忌在按死状态下生拉硬拽吸水纸。"
    }
  },
  {
    id: "care-oil-key-mechanics-lubrication",
    category: "care",
    subCategoryZh: "按键机械传动轴注油与异响消除",
    subCategoryEn: "Keywork Oiling & Linkage Noise Elimination",
    titleZh: "按键吱吱异响与松旷：巴松机械传动轴/针簧（Springs）定期点油指南",
    titleEn: "Eliminating Keywork Clatter and Squeaks with Precision Oiling",
    summaryZh: "维护巴松数十根精密连杆与针簧——每季度一次的微量纯矿物键油（Key Oil）精准点注实操。",
    summaryEn: "Master quarterly key rod and needle spring lubrication to keep actions silent and butter-smooth.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "全体学员 · 进阶乐手",
    jointType: "full",
    jointNameZh: "金属按键连杆系统 (Key Mechanisms)",
    goldenRuleZh: "「针尖蘸油半滴足，只点轴缝莫沾木；多余油渍棉签擦，机械顺滑无异响。」",
    goldenRuleEn: "One micro-drop per rod joint on a needle tip. Never allow oil to touch the wood or pads.",
    applicableJointZh: "全管按键螺丝与传动连杆 (Rods & Screws)",
    keyPointsZh: [
      "巴松按键连杆长达 30cm，长期缺油会导致金属轴心干磨损耗，产生明显松旷摇晃与'咔哒'机械噪音。",
      "必须使用中等粘度的专用木管键油（Medium Key Oil），严禁使用缝纫机油或食用油。",
      "绝对不能让油滴接触到枫木管身或羊皮垫，否则会导致木质发软或皮垫硬化报废。"
    ],
    stepsZh: [
      "准备一根细针或专用带针头注油瓶。",
      "针尖蘸取极微小的一滴键油，轻点在长轴螺丝两端的缝隙处。",
      "反复开合该按键 20 次，让润滑油顺着毛细现象渗入轴心内部。",
      "用医用棉签仔细擦除渗出在金属表面的多余浮油。"
    ],
    mistakesZh: [
      "❌ 拿着大油壶往乐器上倒油，导致皮垫和木头吸油报废。",
      "❌ 针簧生锈脱落时用铁丝强行乱别，刮伤乐器镀银层。"
    ],
    tags: ["乐器卡管拔不出来怎么办", "按键注油", "机械异响消除", "针簧保养", "连杆润滑"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "巴松管按键出现吱吱响声、回弹迟钝怎么加油润滑？",
      aZh: "用细针蘸取半滴专用木管键油，精准点在连杆两端轴心缝隙处，反复按压让油渗入，并立即用棉签擦净多余浮油；严禁让油液沾染木材或皮垫。"
    }
  },

  // ==========================================
  // 🎷 5. 弯管物理与声学校准 (BOCAL PHYSICS - 2篇)
  // ==========================================
  {
    id: "bocal-selection-physics",
    category: "bocal_physics",
    subCategoryZh: "弯管长度与音准物理",
    subCategoryEn: "Bocal Acoustic Length & Pitch",
    titleZh: "1号弯管 vs 2号弯管：长度、音准基准（440Hz/442Hz）与音色差异",
    titleEn: "Bocal Physics: #1 vs #2 Length, Pitch Calibration & Resistance",
    summaryZh: "决定音准基准与气流阻尼的核心声学构件——弯管长度编号选择与微型通气孔（Whisper Hole）清洁。",
    summaryEn: "Understanding bocal length, acoustic resistance, pitch elevation, and whisper nipple hygiene.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "全体学员 · 乐团首席",
    jointType: "bocal",
    jointNameZh: "S型弯管 (Bocal / Crook)",
    goldenRuleZh: "「数字越小管越短，音高偏升；1号配乐团442Hz，2号稳守440Hz。」",
    goldenRuleEn: "Lower number means shorter length and higher pitch. #1 for 442Hz, #2 for 440Hz.",
    applicableJointZh: "S型吹嘴弯管 (Bocal / Crook)",
    keyPointsZh: [
      "弯管编号代表声学管长：0号最长音最低，1号适合 A=442Hz 乐团标准，2号为欧美 A=440Hz 标准，3号偏长偏低。",
      "弯管上的微型突起通气孔（Whisper Pip）是泛音键闭合的关键，堵塞时低音将彻底吹不出。",
      "弯管是极薄的黄铜/纯银合金打造，插拔时必须握在弯头根部，绝不可抓着细尖用力扭动。"
    ],
    stepsZh: [
      "冬天室内偏冷乐器偏低时，换用更短的 1 号弯管拉升音高。",
      "夏天高温管体偏高时，换用 2 号弯管稳定音准中心。",
      "每周用微细通针或吉他1弦，轻通弯管侧面的微型通气孔（Whisper Pip），清除内壁污垢。"
    ],
    mistakesZh: [
      "❌ 抓着弯管最细的前端用力往乐器上插，直接拧成麻花状断裂报废。",
      "❌ 通气孔被口水污垢堵死，导致左手低音大跳时泛音键完全失效。"
    ],
    tags: ["弯管编号1号2号", "440Hz还是442Hz", "音准偏低偏高", "弯管通气孔", "弯管防扭断"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 智能校音仪校准",
    faqEquivalent: {
      qZh: "巴松 1 号弯管和 2 号弯管有什么区别？该怎么选用？",
      aZh: "1号弯管比2号弯管略短约2毫米，音高偏高约4-6音分，适合442Hz乐团标准或冬季偏冷环境；2号弯管适合440Hz标准；插拔弯管必须握在坚固的基座圆弧处，切忌捏尖端用力。"
    }
  },
  {
    id: "bocal-crack-hygiene-cleaning",
    category: "bocal_physics",
    subCategoryZh: "弯管内壁水垢清洗与防焊缝开裂",
    subCategoryEn: "Bocal Internal Hygiene & Seam Integrity",
    titleZh: "弯管内腔水垢堵塞引发的阻力剧增与温水刷洗指南",
    titleEn: "Cleaning Mineral Deposits in Bocal to Restore Free Airflow",
    summaryZh: "吹奏几个月后感觉气流越来越堵？弯管内壁口水矿物结垢的温水小苏打浸泡与极细通条刷洗方法。",
    summaryEn: "Safely dissolve internal saliva calcification and maintain crook resonance with gentle brushing.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "全体乐手 · 初学入门",
    jointType: "bocal",
    jointNameZh: "S型弯管内腔 (Bocal Bore)",
    goldenRuleZh: "「温水冲洗莫用烫，软毛通刷顺管行；通气小孔轻吹通，气流畅通音透明。」",
    goldenRuleEn: "Flush with lukewarm water, use soft bocal brush, never use boiling water.",
    applicableJointZh: "S型吹嘴弯管 (Bocal / Crook)",
    keyPointsZh: [
      "弯管内径前端仅有约 4mm，吹奏时唾液矿物质极易在内壁形成粗糙水垢，增加气流涡流阻力并滋生细菌。",
      "每月应使用专用细长弹簧弯管通刷（Bocal Brush）进行一次彻底清洁。",
      "弯管上的微型突起软木环需定期上软木蜡，保证插入翼管时气密严丝合缝。"
    ],
    stepsZh: [
      "将弯管浸泡在 30℃ 左右的淡温水中（可加一滴中性洗洁精或微量食用小苏打）5 分钟。",
      "将专用尼龙软毛通条刷从小头轻轻顺入，贯穿整根弯管来回拉刷 3 次。",
      "用流动温水冲洗干净内壁，向通气小孔吹一口气确认水滴排空，自然风干。"
    ],
    mistakesZh: [
      "❌ 使用开水烫煮弯管，导致铜管退火变形或软木胶水完全脱落。",
      "❌ 用硬铁丝硬捅，划伤高精度声学内壁。"
    ],
    tags: ["弯管编号1号2号", "弯管清洗", "水垢清理", "弯管通刷", "阻力微调"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 保养手册",
    faqEquivalent: {
      qZh: "巴松 S 型弯管内壁脏了怎么清洗？",
      aZh: "用30℃温水加微量中性洗洁精浸泡5分钟，使用专用尼龙软毛弯管通刷轻柔拉刷内腔，冲净后吹通侧面微型气孔自然风干；严禁使用沸水或硬铁丝。"
    }
  },
  {
    id: "bocal-length-temperature-pitch",
    category: "bocal_physics",
    subCategoryZh: "弯管长度声学与环境温度补偿",
    subCategoryEn: "Bocal Length Acoustics & Thermal Pitch Drift",
    titleZh: "弯管音准核心声学：0/1/2/3号弯管长度差、440/442Hz 选型与冷热气温音准漂移",
    titleEn: "Bocal Intonation Physics: Length Gradients (#0 to #3), Pitch Calibration & Thermal Drift",
    summaryZh: "巴松管音准基线的一级调控者——深度解析弯管物理长度（每差1号约相差 2.5mm）、声速受温度影响（每升降 5℃ 变化 3 音分）的动态换管补偿策略。",
    summaryEn: "Master the acoustic mathematics of bocal lengths (#0, #1, #2, #3) to conquer seasonal temperature pitch drift.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "乐团首席 · 独奏考级考生",
    jointType: "bocal",
    jointNameZh: "S型弯管全长 (Crook Acoustics)",
    goldenRuleZh: "「冬冷声慢管换短（1号/0号），夏热声快管换长（2号/3号）；拔管莫超三毫米，保持锥度音不散。」",
    goldenRuleEn: "Cold air slows sound wave speed requiring shorter bocals; warm air raises pitch.",
    applicableJointZh: "S型吹嘴弯管 (Bocal / Crook)",
    keyPointsZh: [
      "弯管编号与长度：0号（最短/最高，约444Hz）、1号（标准偏高，约442Hz）、2号（标准中性，约440Hz）、3号（偏长偏低，约438Hz）。",
      "环境温度物理定律：空气中声速随温度升高而加快（c = 331.3 + 0.6t m/s）。冬季 16℃ 室内演奏时乐器天然偏低 10~15 音分，此时必须换用更短的 1 号或 0 号弯管抵消。",
      "拔出弯管调音限制：弯管插入翼管深度最多拔出 2~3mm，若拔出过多会导致内腔产生空穴台阶，破坏声波锥度并严重影响高音稳定性。"
    ],
    stepsZh: [
      "演出前用智能校音仪测定乐器充分热管后的 A4（A3）基准频率。",
      "若乐团采用 442Hz 标准且室温偏低（<20℃），首选使用 1 号弯管；若室温超过 28℃，换用 2 号弯管防止偏高。",
      "若使用 2 号弯管仍略偏高，将弯管向外拔出 1.5mm，并在拔出缝隙套上专用 O 型硅胶垫圈防止晃动漏气。"
    ],
    mistakesZh: [
      "❌ 靠把弯管拔出 1 厘米来降音高，导致靴管低音完全漏气且音色空洞散架。",
      "❌ 严冬直接拿冰冷的弯管吹奏，不先用手心暖管导致音准极度偏低且冷凝水迅速堵塞。"
    ],
    tags: ["弯管音准", "0号1号2号3号弯管", "442Hz调音", "温度音准漂移", "拔管调音"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 智能校音仪",
    faqEquivalent: {
      qZh: "巴松弯管上的 0、1、2、3 号数字代表什么？冬天夏天怎么选？",
      aZh: "数字代表弯管长度：0号最短音最高（444Hz），1号适合442Hz乐团标准，2号适合440Hz标准，3号最长；冬天天气冷声速慢乐器偏低选1号或0号，夏天温度高选2号或3号。"
    }
  },
  {
    id: "bocal-whisper-pip-leak-tuning",
    category: "bocal_physics",
    subCategoryZh: "微型通气孔气密与音准微调",
    subCategoryEn: "Whisper Pip Leak Diagnostics & Fine Tuning",
    titleZh: "弯管微型通气孔（Whisper Pip）气密漏气排查、皮垫对齐与音高微调",
    titleEn: "Bocal Whisper Pip Intonation: Air Leak Diagnostics, Pad Alignment & Nipple Cleaning",
    summaryZh: "巴松管最隐蔽的失音元凶——弯管侧面仅 1mm 的微型通气突起（Nipple / Pip）皮垫对齐不良导致低音全部吹不出或高音破音的实操排查与自检校准。",
    summaryEn: "Resolve phantom bass failures and high register cracks by perfecting whisper key pad sealing against the crook pip.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 · 乐手维护",
    jointType: "bocal",
    jointNameZh: "弯管通气孔与泛音键垫 (Whisper Pip)",
    goldenRuleZh: "「通气小孔孔心正，皮垫压紧气不漏；左拇指按低音键，小孔全闭低音轰。」",
    goldenRuleEn: "Ensure the whisper key pad covers the bocal nipple with 100% airtight precision.",
    applicableJointZh: "弯管 Whisper Pip 与翼管 Whisper Key 连杆皮垫",
    keyPointsZh: [
      "弯管侧面的微型通气孔（Whisper Pip）直接受控于左手大拇指泛音键（Whisper Key）：吹低音时皮垫必须 100% 严密封死小孔；吹高音时小孔打开作为波节泄气阀。",
      "如果插入弯管时旋转角度偏移，导致皮垫只盖住半个小孔，低音区（Low F 至 Low Bb）将发生灾难性泛音翻车，完全吹不出厚实低音。",
      "冷凝水滴若堵在通气小孔中，会导致高音大跳时泛音键失灵，产生严重沙哑颤音。"
    ],
    stepsZh: [
      "组装乐器时，俯视对准：确保弯管通气突起与翼管顶部的连杆皮垫正中垂直对齐。",
      "气密自检：左手按下 Whisper Key，闭眼向哨片轻轻吹气，观察是否有微弱嘶嘶气流从弯管侧面逃逸。",
      "如果皮垫偏歪，可用手轻捏连杆金属臂做微米级角度矫正，或微调弯管插入旋转角度。",
      "用专用极细通针或吉他 1 弦细丝轻轻穿通通气孔，清除内部结垢水汽。"
    ],
    mistakesZh: [
      "❌ 插入弯管时没看标记胡乱乱转，皮垫完全错位悬空还以为是乐器靴管漏气坏了。",
      "❌ 用粗铁钉暴力捅通气孔，将精密声学气孔扩孔变形造成永久不可逆漏气。"
    ],
    tags: ["弯管音准", "WhisperPip", "通气孔漏气", "低音翻车", "皮垫对齐"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 乐器气密测漏",
    faqEquivalent: {
      qZh: "为什么巴松低音突然完全吹不响？怎么检查弯管通气孔（Whisper Pip）？",
      aZh: "绝大多数情况是弯管插入角度偏斜，导致左手低音泛音键皮垫没有完全盖严弯管侧面的微型通气小孔（Whisper Pip）；重新对准角度确保皮垫100%压实小孔即可恢复饱满低音。"
    }
  },

  // ==========================================
  // 🎼 6. 乐理视奏与考级名段 (THEORY & SCORE - 3篇)
  // ==========================================
  {
    id: "theory-bass-tenor-clef",
    category: "theory",
    subCategoryZh: "次中音谱表与读谱转换",
    subCategoryEn: "Tenor Clef Sight-Reading",
    titleZh: "从低音谱表（𝄢）向次中音谱表（𝄡）平滑过渡记忆口诀",
    titleEn: "Bassoon Tenor Clef: Smooth Reading Guide from Bass Clef to Tenor Clef",
    summaryZh: "巴松考级五级以上必考科目——次中音谱号的核心读谱公式与高八度视觉锚点。",
    summaryEn: "Master the Bassoon Tenor Clef with quick reading shortcuts, middle C anchoring, and transition practice tips for intermediate & advanced orchestral repertoire.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 (5级+) · 乐团声部",
    jointType: "full",
    jointNameZh: "读谱认知 (Sight Reading)",
    goldenRuleZh: "「次中音第四线是中央C，比低音谱表往上挪五度（或往下挪四度）。」",
    goldenRuleEn: "Tenor Clef 4th line is Middle C (C4), five scale degrees above Bass Clef.",
    applicableJointZh: "读谱认知 (Sight Reading)",
    keyPointsZh: [
      "次中音谱号中心缺口正对着「第四线」，代表中央 C（C4）。",
      "快速换算口诀：看次中音谱表上的音，直接当作低音谱表往上数纯五度即可。",
      "高音区使用次中音谱表可以避免乐谱出现密密麻麻的上加线，让视奏更加清爽。",
      "经典曲目锚点：在《泰勒曼 f小调大管奏鸣曲 TWV 41:f1》（Telemann Bassoon Sonata in F Minor）第一乐章 Triste 中，次中音谱表承担了极具歌唱性的高音区抒情走句与 4 降号视奏转换。"
    ],
    stepsZh: [
      "牢记基准锚点：第四线是中央 C4，第三间是 A3，第二线是 F3。",
      "找熟悉的练习曲：将低音谱表与次中音谱表对照练习 10 首短乐句。",
      "结合经典乐谱实战：直接调出《泰勒曼 f小调大管奏鸣曲》全谱，结合伴奏慢速视奏，迅速克服次中音谱表恐惧心理。",
      "结合巴松指法：看次中音谱表第四线，左手大拇指下意识准备按 C4 指法。"
    ],
    mistakesZh: [
      "❌ 混淆中音谱号（Alto Clef，第三线是C）与次中音谱号（Tenor Clef，第四线是C）。"
    ],
    tags: ["次中音谱号", "低音谱表", "识谱口诀", "考级乐理", "五线谱视奏", "Bassoon Tenor Clef", "Tenor Clef", "泰勒曼大管奏鸣曲次中音谱表", "Telemann Bassoon Sonata"],
    relatedTab: "score",
    relatedToolNameZh: "前往乐谱 & 练习 · 视奏伴奏库",
    faqEquivalent: {
      qZh: "巴松次中音谱表（Tenor Clef）怎么看？有什么快速换算口诀？",
      aZh: "次中音谱号的中心缺口在第四线上，代表中央C（C4）。快速换算方法：将看到的音符在低音谱表基础上往上数一个纯五度（如次中音第一线音高为D3，相当于低音谱表第三间C3往上的D3）。",
      qEn: "How to read Bassoon Tenor Clef quickly?",
      aEn: "The center indentation of the Tenor Clef rests on the 4th line, indicating Middle C (C4). Quick rule of thumb: read any note on the tenor clef as if it were on bass clef, then shift it up a perfect fifth."
    }
  },
  {
    id: "theory-intonation-tendency-chart",
    category: "theory",
    subCategoryZh: "音准天性偏差与口型补偿",
    subCategoryEn: "Bassoon Intonation Tendencies",
    titleZh: "巴松天然音准偏高/偏低图谱与口风气流补偿口诀",
    titleEn: "Intonation Map: Inherent Sharp/Flat Notes & Embouchure Compensation",
    summaryZh: "克服乐器物理锥度导致的先天音准缺陷——掌握高音区偏低、低音区偏高与特征音（如低音Eb、高音G）的微调补偿法。",
    summaryEn: "Master inherent acoustic sharp/flat notes on bassoon and dynamically compensate with voicing.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "考级学员 (5级+) · 重奏乐团",
    jointType: "full",
    jointNameZh: "全管声学音准 (Intonation Grid)",
    goldenRuleZh: "「低音常偏高下巴微沉，中音Eb常偏高加按低音D；高音易偏低下巴微松送疾风。」",
    goldenRuleEn: "Drop jaw for sharp low notes, voice faster air for flat high notes.",
    applicableJointZh: "全音域声学音准 (Full Scale Acoustics)",
    keyPointsZh: [
      "低音区（BBb1 ~ F2）：天性容易整体偏高（尤其是强奏时），下巴需稍微下沉拉长下唇海绵垫。",
      "中音区 Eb3 / F#3：由于音孔间距物理妥协，通常偏高 10~15 音分，需右手中指/小指加按共鸣键校正。",
      "高音区（G4 ~ C5）：初学者容易因喉头收缩而严重偏低，必须依靠高速气流与高舌位支撑，切忌死咬哨尖。",
      "多降号调性校正：以 4 个降号的《泰勒曼 f小调大管奏鸣曲》（Telemann Bassoon Sonata）作为音准稳定度试金石，检验低音 Db2、Ab2、Eb3 在持续通奏低音下的和弦协和度。"
    ],
    stepsZh: [
      "使用 440Hz/442Hz 调音器录制一段全音域八度慢琶音。",
      "记录个人哨片与管体匹配下的特征偏差音（如标注 Eb3 偏高 +12 cents）。",
      "针对偏高音：下颌微松、喉头向下扩张发'Ah'音；针对偏低音：横膈膜提速气流发'Ee'音。",
      "实操曲目进阶：在《泰勒曼奏鸣曲》与《彼得与狼》伴奏下开启智能调音器，实时观察乐句起伏时的音分偏离。"
    ],
    mistakesZh: [
      "❌ 听到音准不准就只靠嘴唇使劲乱挤乱咬，破坏音色核心厚度。"
    ],
    tags: ["音准偏低偏高", "Eb3偏高补偿", "调音秘籍", "音分校准", "重奏合奏", "泰勒曼奏鸣曲音准", "Telemann Bassoon Intonation"],
    relatedTab: "tools",
    relatedToolNameZh: "打开配套工具 · 智能校音仪",
    faqEquivalent: {
      qZh: "巴松管哪些音天生容易偏高或偏低？如何用口风气息补偿？",
      aZh: "巴松低音区整体易偏高（需放松下巴下沉）、中音Eb3/F#3易偏高（可加开右侧共鸣键）、高音易偏低（需用高速气柱与高舌位抬升，切忌死咬嘴唇）。"
    }
  },
  {
    id: "theory-orchestral-excerpts-preparation",
    category: "theory",
    subCategoryZh: "交响名段考级备考与风格处理",
    subCategoryEn: "Orchestral Excerpts Performance Guide",
    titleZh: "交响名段考级必胜：杜卡斯《魔法师》、普罗科菲耶夫《彼得与狼》与柴六独奏断奏颗粒感",
    titleEn: "Audition Excerpts: Sorcerer's Apprentice, Peter & the Wolf & Tchaikovsky 6 Articulation",
    summaryZh: "乐团招聘与高等级考级必考交响片段攻坚——《彼得与狼》老爷爷附点跳音、《魔法师的学徒》轻巧断奏与《春之祭》极高音独奏准备全书。",
    summaryEn: "Master legendary bassoon orchestral excerpts: Peter and the Wolf low staccato, Sorcerer's Apprentice, and Rite of Spring with pristine articulation and dynamic control.",
    difficulty: "演奏级",
    readTime: "4 分钟",
    targetAudienceZh: "考级考生 (8级+) · 乐团面试者",
    jointType: "full",
    jointNameZh: "乐队交响片段 (Orchestral Repertoire)",
    goldenRuleZh: "「《魔法师》轻灵如小丑跳步；《彼得与狼》沉稳如踏雪拄杖；《春之祭》旷古如长笛悠远。」",
    goldenRuleEn: "Sorcerer requires buoyant dry staccato; Peter & Wolf demands gravelly character footing; Rite of Spring needs effortless altissimo.",
    applicableJointZh: "全音域综合表现力 (Orchestral Expression)",
    keyPointsZh: [
      "《彼得与狼》（Peter and the Wolf）老爷爷主题：顿音与附点重音鲜明（3:1 时值细分），突出巴松低音区诙谐、严肃又慈祥的拟人化音色，是全球职业交响乐团试音必考的第一道低音跳音关卡。",
      "《魔法师的弟子》（L'Apprenti Sorcier）：F小调主干断奏，核心是舌尖轻点哨尖下沿，每粒十六分音符留出 50% 空间给共鸣回音，切忌吹死吹重。",
      "《斯特拉文斯基：春之祭》（The Rite of Spring）开篇极高音独奏：高音 C4 纯净起吹与 Rubato 自由节拍把控，考核演奏家顶级气流控制力。",
      "《柴可夫斯基第六交响曲》（悲怆）开篇独奏：低音 E2 ~ A2 的 ppp 极弱音，要求口型完全放松，气流极慢极稳送入，杜绝破音起吹。"
    ],
    stepsZh: [
      "在《彼得与狼大管老爷爷独奏》（Peter and the Wolf Bassoon Solo）全谱中，开启 80 BPM 细分节拍器，严格把控 3:1 附点跳音时值，绝不吹成三连音摇摆。",
      "节拍器 70 BPM 慢速练习《魔法师》三连音断奏跳进，确保每个音符发音干脆无杂音。",
      "在极弱音（ppp）长音长气息练习中，用纯气流（Breath Attack）轻柔带响柴六开篇第一小节。"
    ],
    mistakesZh: [
      "❌ 把魔法师的跳音吹成沉重砸地的大扫帚，完全失去法国作品的轻盈幽默感。",
      "❌ 把《彼得与狼》的附点八分音符与十六分音符吹成滑稽的三连音（Swing feel）。"
    ],
    tags: ["交响名段", "彼得与狼大管独奏", "Peter and the Wolf Bassoon", "魔法师的弟子", "春之祭大管独奏", "柴六独奏", "考级面试", "断奏颗粒感"],
    relatedTab: "score",
    relatedToolNameZh: "前往乐谱 & 练习 · 伴奏攻坚",
    faqEquivalent: {
      qZh: "巴松考级交响乐名段（如《魔法师的弟子》《柴六》开篇）怎么吹出专业水准？",
      aZh: "《魔法师的弟子》需用舌尖轻点哨尖呈现极具弹性的轻灵断奏，留足共鸣回音；《柴六》开篇极弱音ppp需保持松沉下巴与平缓温热慢气，杜绝重击起音。"
    }
  },

  // ==========================================
  // 🧘 7. 舞台演奏、坐姿工效与防伤防护 (STAGE & ERGONOMICS - 3篇)
  // ==========================================
  {
    id: "stage-seat-strap-posture",
    category: "stage_health",
    subCategoryZh: "座带调节与颈椎脊柱力学",
    subCategoryEn: "Seat Strap Balance & Ergonomics",
    titleZh: "新手第1天：抱管平衡、座带（Seat Strap）黄金调节与防驼背",
    titleEn: "Beginner Day 1: Seat Strap Balance, Posture & Neck Spine Protection",
    summaryZh: "巴松重达 3.5 公斤——学会利用座带力学支点将重量全部转移到椅面上，杜绝手腕腱鞘炎与低头驼背伸颈。",
    summaryEn: "Learn the ergonomic leverage of seat straps to completely support the 3.5kg bassoon weight on the chair.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "琴童家长 · 全体初学者",
    jointType: "boot",
    jointNameZh: "靴管座带挂钩 (Seat Strap Ring)",
    goldenRuleZh: "「座带垫在椅子前三分一，哨尖自然送嘴唇；人找乐器脖必酸，乐器就人身挺立。」",
    goldenRuleEn: "Adjust the strap so the reed meets your mouth naturally without reaching forward.",
    applicableJointZh: "下靴管座带孔 (Boot Joint Strap Ring)",
    keyPointsZh: [
      "座带应放置在大腿下方距椅面前沿约 1/3 处，坐骨稳稳压住座带皮条。",
      "调节座带挂钩长度，达到「双手完全松开乐器时，哨片正好轻触下嘴唇中心」的最佳平衡点。",
      "演奏时头部保持端正水平，绝对不可伸长脖子去迎合乐器（Turtle Necking）。"
    ],
    stepsZh: [
      "坐在椅子前半部分，双脚平稳踩地，将座带横向铺在椅面上并坐实。",
      "将挂钩扣入靴管底部的吊环中，将乐器斜靠在右侧大腿外侧。",
      "闭上双眼头部保持直立，微调座带长短，直到哨口自然进入嘴唇。",
      "双手轻放在按键上，手臂自然垂落放松，手型如握水蜜桃。"
    ],
    mistakesZh: [
      "❌ 座带调得太长，整个人弯腰驼背伸长脖子去够哨片，练半小时颈椎剧痛。",
      "❌ 用右手大拇指死死托住整根管身的重量，导致大拇指关节严重劳损腱鞘炎。"
    ],
    tags: ["右手无名指小指总是抽筋酸痛", "座带调节", "初学手型", "防驼背", "抱管平衡"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 新手起步手册",
    faqEquivalent: {
      qZh: "巴松座带（Seat Strap）应该怎么调？吹久了脖子酸痛怎么解决？",
      aZh: "座带铺在椅面靠前1/3处用坐骨压实，调节长度至【不低头伸颈时哨片刚好自然送入嘴唇】；双手完全不承受乐器重量，杜绝弯腰驼背。"
    }
  },
  {
    id: "stage-right-hand-crutch",
    category: "stage_health",
    subCategoryZh: "手托（Crutch）调节与腱鞘炎防范",
    subCategoryEn: "Right Hand Crutch Adjustment",
    titleZh: "右手托（Hand Crutch）安装角度与右手虎口防抽筋指南",
    titleEn: "How to Adjust Right Hand Crutch to Prevent Cramps and Tendonitis",
    summaryZh: "右手总是抽筋、无名指按不到低音孔？正确调节右手手托的支撑深度与倾角，解放手指灵活性。",
    summaryEn: "Adjust the wooden crutch angle to relax the right hand webbing and prevent strain.",
    difficulty: "入门",
    readTime: "2 分钟",
    targetAudienceZh: "全体学员 · 进阶乐手",
    jointType: "boot",
    jointNameZh: "下靴管右手托 (Hand Rest Crutch)",
    goldenRuleZh: "「手托轻抵虎口窝，手指自然落孔心；若是压迫神经过，调松拔高换角度。」",
    goldenRuleEn: "Rest the crutch against the fleshy web of the thumb, allowing fingers to curve naturally.",
    applicableJointZh: "下靴管右手托基座 (Crutch Bracket)",
    keyPointsZh: [
      "右手托（Crutch）的作用是让右手掌心与下靴管保持恒定的声学生理间距，防止手掌塌陷。",
      "手托支撑点应落在右手虎口肉垫处，使右手 4、5、6 指指腹能垂直平实覆盖音孔。",
      "手掌极小的少年儿童或手指较长的成人，可微调手托高度或选用加长型手托。"
    ],
    stepsZh: [
      "将手托金属杆插入下靴管基座中，先不要拧死螺丝。",
      "右手自然搭在 4、5、6 孔上，转动手托使 T 型木柄平贴在右手虎口窝处。",
      "确认右手食指、中指、无名指能毫无拉扯感地快速抬起下落，然后锁紧手托固定螺丝。"
    ],
    mistakesZh: [
      "❌ 手托顶得过高，导致右手手指不得不笔直僵硬伸展，完全无法按严音孔。",
      "❌ 手托长期松动晃动，导致右手按键稳定性丧失。"
    ],
    tags: ["右手无名指小指总是抽筋酸痛", "右手手托", "虎口防抽筋", "手型放松", "下靴管支撑"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 演奏工效学",
    faqEquivalent: {
      qZh: "巴松右手手托（Crutch）有什么用？右手容易抽筋怎么调？",
      aZh: "手托支撑在虎口窝处，帮助右手保持圆润拱形，防止手掌塌陷；手托高度需调节至手指能最轻松自然覆盖4、5、6孔，避免虎口紧绷与手指拉扯。"
    }
  },
  {
    id: "stage-standing-balance-harness",
    category: "stage_health",
    subCategoryZh: "站姿独奏与双肩背带 (Harness)",
    subCategoryEn: "Standing Solo Balance & Harness Setup",
    titleZh: "协奏曲站立独奏：双肩减压背带（Shoulder Harness）与重心力学配置",
    titleEn: "Solo Bassoonist Standing Setup: Dual Shoulder Harness and Center of Gravity",
    summaryZh: "告别单脖带勒痛颈椎——站立演奏莫扎特/韦伯协奏曲时的双肩平衡减压背带配置与下肢重心转换技巧。",
    summaryEn: "Distribute the 3.5kg instrument evenly across both shoulders to eliminate cervical vertebrae pain.",
    difficulty: "进阶",
    readTime: "3 分钟",
    targetAudienceZh: "独奏乐手 · 考级考生",
    jointType: "boot",
    jointNameZh: "背带挂环与靴管 (Harness Attachment)",
    goldenRuleZh: "「双肩承重莫勒颈，左脚微前重心稳；挂钩卡紧靴管环，身体微晃音更灵。」",
    goldenRuleEn: "Distribute load evenly on both shoulders, position left foot slightly forward for stable stance.",
    applicableJointZh: "乐器背带悬挂系统",
    keyPointsZh: [
      "站立独奏绝不能使用单根细挂绳（Neck Strap），3.5公斤的重量会直接压迫颈椎第5-7节引发麻木。",
      "推荐使用 X 型或加宽双肩减压背带（Balam 或 Vandoren Harness），将重力均匀分散至肩胛骨与腰背骨架。",
      "站姿采用「丁字步」：左脚稍微向前半步，身体重心可随乐句起伏在双腿间微幅移动。"
    ],
    stepsZh: [
      "穿戴双肩背带，收紧后背交叉调节扣，确保双肩受力完全对称。",
      "将金属安全挂钩牢固扣入靴管中段挂环，检查锁扣弹簧回弹。",
      "微调前方主升降绳，使乐器在悬垂状态下，哨尖高度正好平齐于下唇。",
      "练习身体小幅度左右微转，保持哨片与嘴唇角度恒定在 90° 直角。"
    ],
    mistakesZh: [
      "❌ 挂钩未完全锁死导致乐器在站立演奏中突然滑脱摔碎。",
      "❌ 站立时双膝死死锁死紧绷，导致脑部供血不足头晕。"
    ],
    tags: ["右手无名指小指总是抽筋酸痛", "站姿独奏", "双肩背带", "颈椎减压", "协奏曲舞台"],
    relatedTab: "tools",
    relatedToolNameZh: "查看知识库 · 演奏工效学",
    faqEquivalent: {
      qZh: "巴松管站立独奏用什么背带好？脖子疼怎么解决？",
      aZh: "站立演奏建议选用双肩减压背带（Harness），将乐器重量分摊至肩胛骨和背部；调节主绳至哨片自然平齐嘴唇，双腿呈丁字步站立，杜绝单脖带死勒颈椎。"
    }
  }
];

export const KNOWLEDGE_ARTICLES = COMPREHENSIVE_KNOWLEDGE_ARTICLES;
