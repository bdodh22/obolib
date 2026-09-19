// Master Buyer & Upgrade Guide Data for Professional Oboes
// Instrument models, wood acoustic profiles, key mechanisms, and audition grading

export interface OboeInstrumentModel {
  id: string;
  brand: string;
  model: string;
  tier: 'Intermediate' | 'Semi-Professional' | 'Orchestral Master';
  origin: string;
  priceRangeUSD: string;
  bodyMaterial: string;
  keySystem: string;
  soundAcousticCharacter: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  strengths: {
    en: string[];
    zh: string[];
    de: string[];
    ja: string[];
  };
  recommendationTarget: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
}

export const OBOE_INSTRUMENT_MODELS: OboeInstrumentModel[] = [
  {
    id: 'loree-royale',
    brand: 'F.Lorée',
    model: 'Royale (125 Anniversary Edition)',
    tier: 'Orchestral Master',
    origin: 'Paris, France',
    priceRangeUSD: '$10,500 - $12,800',
    bodyMaterial: 'Select African Blackwood (Dalbergia melanoxylon) / Thick-wall',
    keySystem: 'Full Conservatoire, Semi-Automatic, 3rd Octave Key, Left F, Low Bb Vent',
    soundAcousticCharacter: {
      en: 'Dark, massive orchestral core with enormous dynamic headroom. Cuts through full fortissimo brass sections while maintaining round nobility.',
      zh: '深沉、浓厚而富于密度的管弦乐核心音色。在管乐队或全编制交响乐团的 fff 齐奏中具备极强的穿透力，弱奏时高贵圆润。',
      de: 'Dunkler, kerniger Orchesterklang mit enormen dynamischen Reserven. Nobel und tragfähig.',
      ja: '深く太い芯のあるオーケストラ向きの響き。ブラスセクションの咆哮にも埋もれない強靭な遠達性を誇ります。',
    },
    strengths: {
      zh: [
        '管壁加厚设计（Thick Wall），极度耐吹，高风压下音准与共鸣坚若磐石',
        '高音区 E6 至 A6 极其稳定，不容易破裂或尖锐',
        '法国百年老字号，全球乐团复购率最高的经典神管',
      ],
      en: [
        'Thick-wall acoustic design provides unflinching resistance under extreme breath pressure',
        'Exceptional high register stability from E6 through A6 without pinching',
        'The historic French benchmark in world-class symphonies',
      ],
      de: [
        'Dickwandiges Design für maximale Stabilität',
        'Extrem verlässliche Höhe ab E6 bis A6',
        'Weltweit in Spitzenorchestern etablierter Standard',
      ],
      ja: [
        '肉厚設計による高い耐圧性と圧倒的な響き',
        'E6〜A6の最高音域における驚異的な安定度',
        '世界のトップオーケストラで愛用される名門の看板モデル',
      ],
    },
    recommendationTarget: {
      zh: '适合专业交响乐团首席、职业独奏家或欧美顶级音乐学院研究生。',
      en: 'Targeted for symphony principals, professional soloists, and conservatory aspirants.',
      de: 'Ideal für Solobläser und Profimusiker.',
      ja: 'オーケストラ首席奏者、プロ奏者、音大院生に推奨。',
    },
  },
  {
    id: 'marigaux-901',
    brand: 'Marigaux',
    model: '901 Grand Symphony',
    tier: 'Orchestral Master',
    origin: 'Paris, France',
    priceRangeUSD: '$9,800 - $11,500',
    bodyMaterial: 'Aged African Blackwood',
    keySystem: 'Full Conservatoire, Semi-Automatic, Double Octave, Left F, Low Bb Resonance',
    soundAcousticCharacter: {
      en: 'Incomparably sweet, lyrical, singing French tone. Effortless response and velvety cantabile that melts into woodwind section chords.',
      zh: '无可比拟的甜美、如丝绒般歌唱的法式纯美音色。起音极度灵巧轻柔，在木管和声融合度上堪称世界第一。',
      de: 'Unvergleichlich süßer, lyrischer Gesangston. Seidige Ansprache und perfekte Satzmischung.',
      ja: '極めて甘美で歌心に満ちたフランスの伝統的トーン。繊細なピアニッシモの発音性に優れ、木管群への溶け込みは世界屈指。',
    },
    strengths: {
      zh: [
        '起音阻抗均匀，弱音（pp）起奏如同羽毛般平滑柔顺',
        '中高音区（A4-C6）歌唱性绝伦，特别适合演绎慢板长线条抒情乐句',
        '键位工学极其舒适贴手，手指弹跳敏捷',
      ],
      en: [
        'Feather-light pianissimo entry with perfectly graduated acoustic resistance',
        'Sublime lyrical singing quality across A4-C6, tailor-made for slow cantabiles',
        'Silky keywork ergonomics tailored for rapid finger articulation',
      ],
      de: [
        'Butterweiche Pianissimo-Ansprache',
        'Hervorragende Kantabilität in der Mittellage',
        'Ergonomische Klappenmechanik',
      ],
      ja: [
        '羽のように滑らかな最弱音（pp）の発音性',
        '中高音域（A4〜C6）の圧倒的なカンタービレ表現力',
        '手になじむ吸いつくようなキータッチ',
      ],
    },
    recommendationTarget: {
      zh: '追求法式甜美音色与室内乐融洽度的职业乐手首选，全球最受欢迎的型号之一。',
      en: 'The top pick for chamber musicians and artists prioritizing sweetness and cantabile color.',
      de: 'Erste Wahl für Liebhaber des süßen, warmen französischen Klangs.',
      ja: '甘い音色と美しいレガートを重視する奏者に世界中で最も選ばれている銘器。',
    },
  },
  {
    id: 'yamaha-custom-yob-841',
    brand: 'Yamaha',
    model: 'Custom YOB-841L (Duet+ Composite Bore)',
    tier: 'Orchestral Master',
    origin: 'Hamamatsu, Japan',
    priceRangeUSD: '$8,200 - $9,600',
    bodyMaterial: 'African Blackwood with Ebonite Inner Tube Liner (Crack-Proof)',
    keySystem: 'Full Conservatoire, Semi-Automatic, Philadelphia D-Key System, 3rd Octave',
    soundAcousticCharacter: {
      en: 'Pure, focused American-style acoustic core with razor-sharp intonation precision across all 3 octaves.',
      zh: '纯净、聚焦的美式音准基准音色。全音域八度音准极其精准，几乎无需过度依靠嘴唇下颌咬合补偿。',
      de: 'Klarer, zentrierter Klang mit chirurgischer Intonationsgenauigkeit über alle drei Oktaven.',
      ja: 'クリアでピントの合った芯のある響き。全3オクターブにわたる驚異的な音程の正確さを誇ります。',
    },
    strengths: {
      zh: [
        'Duet+ 科技：上管内部注塑特种防裂硬橡胶复合内衬，彻底解决木管炸膛开裂顽疾',
        '机械工艺精密：日系最高水准机械连动，几无机械杂音与旷量',
        '音准误差极小：乐团考核中音准最省心省力的利器',
      ],
      en: [
        'Duet+ technology: vulcanite-lined upper bore completely eliminates humidity cracking risks',
        'Japanese master craftsmanship: zero key clatter, surgical mechanical tolerance',
        'Unflinching pitch center simplifies audition tuning under pressure',
      ],
      de: [
        'Duet+ Riss-Schutztechnologie im Oberstück',
        'Präziseste japanische Mechanik ohne Spiel',
        'Unübertroffene Intonationssicherheit',
      ],
      ja: [
        'Duet+技術：上管内径を樹脂で保護し、割れのリスクを根本から低減',
        '狂いのない高精度なメカニズムと高い工作精度',
        'オーディションのプレッシャー下でも揺るがない音程精度',
      ],
    },
    recommendationTarget: {
      zh: '气候多变、干燥或经常在巡演中的专业乐手，以及对音准精度有严苛要求的高考与考级学生。',
      en: 'Musicians who tour frequently across harsh climates or demand bulletproof intonation.',
      de: 'Perfekt für Tourneemusiker und feuchtigkeitsempfindliche Klimazonen.',
      ja: '気候変化の激しい地域やツアー演奏の多い奏者、正確な音程を第一とする奏者に最適。',
    },
  },
  {
    id: 'buffet-orfeo',
    brand: 'Buffet Crampon',
    model: 'Orfeo Greenline',
    tier: 'Orchestral Master',
    origin: 'Mantes-la-Ville, France',
    priceRangeUSD: '$10,200 - $12,000',
    bodyMaterial: 'Greenline Composite (95% Grenadilla Powder + 5% Carbon Fiber Resin)',
    keySystem: 'Full Conservatoire, Semi-Automatic, 3rd Octave, Ergonomic Key Touch',
    soundAcousticCharacter: {
      en: 'Modern, rich, projecting tone with velvety depth and immediate acoustic energy response.',
      zh: '现代、饱满、投影感极强的醇厚声响。能量传导迅猛直接，中低音区共鸣浑厚开阔。',
      de: 'Moderner, tragfähiger Klang mit seidigem Glanz und direkter Ansprache.',
      ja: '現代的で豊かに響き渡るプロジェクション。中低音の豊かな倍音と素早い音響レスポンスが魅力。',
    },
    strengths: {
      zh: [
        'Greenline 材质：100% 免疫管体开裂，无论室外冰冷环境还是强光灯烘烤均安然无恙',
        '独特的内膛锥度设计，低音 Bb3 至 Eb4 浑厚饱满不发炸',
        '按键镀银附带特种防护抗氧化涂层',
      ],
      en: [
        'Greenline material: 100% immune to wood cracks in freezing air or scorching stage lights',
        'Custom bore profile delivers rich, non-stuffy Low Bb3 through Eb4',
        'Silver-plated keywork with anti-tarnish protective coating',
      ],
      de: [
        '100% rissfest dank patentiertem Greenline-Verbundstoff',
        'Volle, offene Tiefe von Bb3 bis Eb4',
        'Langlebige Versilberung',
      ],
      ja: [
        'グリーンライン素材採用：野外演奏や温度差による「管体の割れ」から100%解放',
        '低音域（Bb3〜Eb4）の抜けが良く詰まらない設計',
        '耐久性に優れた銀メッキキイ',
      ],
    },
    recommendationTarget: {
      zh: '需要频繁在户外或空调剧场演出的职业乐手，以及希望一把琴终生不用担心木裂的终极选择。',
      en: 'Orchestral players performing in open-air festivals or demanding a lifetime crack-free guarantee.',
      de: 'Ideal für Opern- und Freiluftorchester.',
      ja: '野外コンサートや過酷な環境での演奏機会が多いプロ、一生モノの割れない楽器を求める奏者へ。',
    },
  },
  {
    id: 'yamaha-yob-441',
    brand: 'Yamaha',
    model: 'YOB-441 Intermediate / Semi-Pro',
    tier: 'Intermediate',
    origin: 'Hamamatsu, Japan',
    priceRangeUSD: '$3,800 - $4,600',
    bodyMaterial: 'Select Grenadilla Wood (Matte Finish)',
    keySystem: 'Modified Conservatoire, Semi-Automatic, Left F, 3rd Octave Optional',
    soundAcousticCharacter: {
      en: 'Warm, balanced, easily produced classical tone. Very forgiving blowing resistance.',
      zh: '温润、平衡、阻抗适中的古典音色。起音门槛友好，初学者与高中大学乐团乐手能轻松吹透。',
      de: 'Warmer, ausgewogener Klang mit angenehmem Blaswiderstand.',
      ja: '温かく均整のとれた響き。適度な吹き心地で息がスムーズに入り、初心者から中級者に最適。',
    },
    strengths: {
      zh: [
        '性价比之王：以不到旗舰款一半的价格，获得纯正优质黑檀木管体与全覆指闭孔键位',
        '音准线性极佳，不易跑调',
        '全球音乐学院附中与高中管乐队保有量第一',
      ],
      en: [
        'Unbeatable value: genuine Grenadilla wood body at half the price of master horns',
        'Linear, predictable intonation scale simplifies embouchure training',
        'The #1 recommended horn for advancing middle and high school students globally',
      ],
      de: [
        'Bestes Preis-Leistungs-Verhältnis für Echtholz-Oboen',
        'Linear skalierte Intonation',
        'Weltweit meistempfohlenes Schülerinstrument',
      ],
      ja: [
        '圧倒的コストパフォーマンス：手頃な価格で本物のグラナディラ材木製管体を入手可能',
        '狂いにくい正確なスケール設計',
        '世界中の吹奏楽部やユースオケで最も推薦される定番モデル',
      ],
    },
    recommendationTarget: {
      zh: '初学者换第一把真正木管的最佳选择，足以支撑中考、特长生考试与高校乐团排练。',
      en: 'The definitive upgrade step for beginner students transitioning to their first wooden horn.',
      de: 'Der ideale Aufstieg vom Plastik- zum Holzinstrument.',
      ja: 'プラスチック製から初めての木製楽器へステップアップする中高生・愛好家にベストバイ。',
    },
  },
];
