// Professional Oboe Reed Making Supplies & Equipment Master Catalog
// High-Ticket Hardware, Precision Tools & Cane / Staple Consumables

export interface OboeSupplyItem {
  id: string;
  category: 'machine' | 'knife' | 'shaper' | 'dial' | 'cane-staple' | 'accessory';
  name: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  brand: string;
  priceRange: string;
  targetLevel: 'Student' | 'Conservatory' | 'Professional Master';
  rating: string;
  imageAlt: string;
  description: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  pros: {
    en: string[];
    zh: string[];
    de: string[];
    ja: string[];
  };
  buyingAdvice: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
}

export const OBOE_SUPPLIES: OboeSupplyItem[] = [
  {
    id: 'reeds-n-stuff-tip-profiler',
    category: 'machine',
    name: {
      en: "Reeds 'n Stuff Oboe Tip Profiling Machine",
      zh: "Reeds 'n Stuff 双簧管尖端精密仿形削尖机",
      de: "Reeds 'n Stuff Oboen-Spitzenhobelmaschine",
      ja: "Reeds 'n Stuff オーボエ用ティッププロファイラー",
    },
    brand: "Reeds 'n Stuff (Germany)",
    priceRange: '$1,650 - $2,200',
    targetLevel: 'Professional Master',
    rating: '★★★★★',
    imageAlt: 'Reeds n Stuff Tip Profiler',
    description: {
      en: 'The industry benchmark for scraping the front tip and heart with micron-level repeatability. Features interchangeable templates for American, European, and Viennese scrapes.',
      zh: '全球职业双簧管演奏家与音乐学院导师公认的黄金标准。可在数秒内以微米级精度削出极度对称的 Tip 尖端与 Heart 弧度，支持美式长刮、法式欧式短刮仿形模具。',
      de: 'Der Goldstandard für reproduzierbare Spitzen- und Herzbearbeitung im Mikrometerbereich. Austauschbare Schablonen für amerikanische und europäische Bahn.',
      ja: '世界中のプロ奏者や音大教授が愛用する最高峰のティップ加工機。ミクロン単位の精度でティップとハートを正確に削り出します。',
    },
    pros: {
      zh: [
        '极高重复性：每支哨片尖端厚度误差小于 0.01mm',
        '模具丰富：支持主流欧美名家刮削曲线（Bucher, Klug 等）',
        '寿命长久：德国硬质合金圆弧刮刀，打磨耐用度超 1000 支哨片',
      ],
      en: [
        'Unrivaled precision: Thickness variance under 0.01mm across reed tips',
        'Interchangeable templates for American, European, and custom scrapes',
        'German carbide blade retains ultra-sharp razor edge over 1,000+ reeds',
      ],
      de: [
        'Höchste Wiederholgenauigkeit unter 0,01 mm',
        'Vielfältige Schablonen für europäische und amerikanische Schnitte',
        'Langlebige Hartmetallklinge für über 1000 Rohre',
      ],
      ja: [
        '極めて高い再現性：先端厚み誤差0.01mm以内',
        '欧米の有名プロファイルテンプレートを幅広くラインナップ',
        '高耐久カーバイド刃採用',
      ],
    },
    buyingAdvice: {
      zh: '适合专业研究生、职业乐团乐手或批量制簧工作室。单机即可节约 70% 繁琐的粗刮时间，直通高成活率。',
      en: 'Ideal for conservatory graduates, orchestral principals, and commercial reed studios. Saves 70% of tedious initial scraping.',
      de: 'Empfohlen für Orchestermusiker und Rohrbaustudios. Reduziert die Schabzeit um 70%.',
      ja: '音大生やオーケストラ奏者に最適。初期スクレープ時間を70%短縮し、歩留まりを飛躍的に向上させます。',
    },
  },
  {
    id: 'michel-gouger',
    category: 'machine',
    name: {
      en: 'Michel Oboe Cane Gouging Machine (10.0 - 10.5mm)',
      zh: 'Michel 法国原产双簧管内圆刨床 (10.0 - 10.5mm)',
      de: 'Michel Oboen-Innenhobelmaschine',
      ja: 'ミシェル オーボエ用ガウジングマシン',
    },
    brand: 'Michel (France)',
    priceRange: '$1,800 - $2,300',
    targetLevel: 'Professional Master',
    rating: '★★★★★',
    imageAlt: 'Michel Oboe Gouging Machine',
    description: {
      en: 'The definitive classic French gouging machine. Shapes the internal concave diameter of raw cane with unparalleled smoothness and acoustic vibration purity.',
      zh: '双簧管芦苇管内圆加工的法国神级机械。精准将 10-10.5mm 原筒剖开后的芦苇片刨至中心 0.58mm、两侧 0.45mm 的理想圆弧厚度。',
      de: 'Die legendäre französische Innenhobelmaschine. Hobelt Rohrstangen auf die perfekte Wölbung und Dicke.',
      ja: 'フランス伝統の最高峰ガウジングマシン。丸材の内側を理想的な厚み（中央0.58mm/両端0.45mm）に極めて均一に削り出します。',
    },
    pros: {
      zh: [
        '刀片极为锋利顺滑，绝不撕裂芦苇内壁木质维管束',
        '滚珠轴承导轨稳定，使用三十年依然零旷量',
        '刨出的苇片共振能量极高，音色温暖富有核心凝聚力',
      ],
      en: [
        'Ultra-sharp curved guillotine blade prevents vascular fiber tearing',
        'Ball-bearing precision track with zero lateral play for decades',
        'Yields resonant cane blanks with warm core projection',
      ],
      de: [
        'Präziser Schnitt ohne Faserriss',
        'Kugelgelagerte Führung für jahrzehntelange Spielfreiheit',
        'Liefert warme, tragfähige Resonanz',
      ],
      ja: [
        '繊維を痛めない滑らかな切削面',
        '高精度ボールベアリングレールによる耐久性',
        '豊かで温かい芯のある響きを実現',
      ],
    },
    buyingAdvice: {
      zh: '双簧管自制哨片核心底层工具。若预算充裕，这是决定哨片弹性与音色天花板的最关键投资。',
      en: 'The cornerstone of self-sufficient reed making. The single most impactful investment for cane vibration quality.',
      de: 'Die wichtigste Grundinvestition für die Kontrolle über das eigene Rohrmaterial.',
      ja: '自作リードの命運を握る最重要工具。素材の鳴りを根本からコントロールしたい奏者に必須。',
    },
  },
  {
    id: 'landwell-knife-double-hollow',
    category: 'knife',
    name: {
      en: 'Landwell Double Hollow Ground Oboe Reed Knife',
      zh: 'Landwell 双面空心打磨纯手工双簧管刮刀',
      de: 'Landwell Doppelhohlschliff Oboen-Schabemesser',
      ja: 'ランドウェル ダブルホロー 両刃リードナイフ',
    },
    brand: 'Landwell (USA)',
    priceRange: '$160 - $210',
    targetLevel: 'Conservatory',
    rating: '★★★★★',
    imageAlt: 'Landwell Double Hollow Ground Knife',
    description: {
      en: 'Renowned worldwide for its double-hollow ground blade and razor-sharp burr. Allows micro-precision scrapes on the delicate 0.06mm oboe tip without gouging.',
      zh: '全球双簧管乐手几乎人手一把的传世级刮刀。双面凹槽空心精磨刃口，能在 0.06mm 极薄 Tip 尖端进行微米级粉末状微刮，绝不卡刀或起毛。',
      de: 'Weltweit berühmt für seinen Doppelhohlschliff und extrem feinen Grat. Erlaubt mikrofeines Schaben der empfindlichsten Spitzenpartie.',
      ja: '世界中のオーボエ奏者に最も支持される最高峰ナイフ。両面ホローグラインド刃により、0.06mmの繊細なティップも粉末状に微細に削れます。',
    },
    pros: {
      zh: [
        '特种高碳特硬工具钢，保刃性极其优越',
        '配有符合人体工程学的红木手柄，手腕发力轻松可控',
        '微米刮除能力强，能刮出如雪花般的细腻芦苇粉末',
      ],
      en: [
        'Ultra-high carbon tool steel with exceptional edge retention',
        'Ergonomic hardwood handle optimizes wrist angle and leverage',
        'Removes powder-thin cane dust without disturbing the underlying heart',
      ],
      de: [
        'Hochlegierter Kohlenstoffstahl mit langer Standzeit',
        'Ergonomischer Hartholzgriff für ermüdungsfreies Arbeiten',
        'Schabt hauchfeinen Holzstaub statt dicker Späne',
      ],
      ja: [
        '高硬度カーボンスチールによる優れた刃持ち',
        '手に馴染む人間工学に基づいた木製ハンドル',
        '粉雪のように微細な削り屑を出せるコントロール性',
      ],
    },
    buyingAdvice: {
      zh: '强烈推荐每位双簧管学子配备的第一把专业级刮刀。建议搭配天然阿肯色硬质磨刀石（Hard Arkansas Stone）保养。',
      en: 'The recommended first professional knife for every advancing student. Pair with an ultra-hard Arkansas oil stone.',
      de: 'Das ideale erste Profimesser für jeden Studenten. Mit Arkansas-Ölstein schärfen.',
      ja: 'ステップアップを目指すすべての奏者に推薦する決定版。アーカンサス砥石との併用を推奨。',
    },
  },
  {
    id: 'rigotti-shaper-handle-tips',
    category: 'shaper',
    name: {
      en: 'Rigotti Oboe Shaper Handle & Precision Form Tips',
      zh: 'Rigotti 双簧管仿型手柄与激光精工模具板 (No. -1 / 1 / 1A)',
      de: 'Rigotti Fassonhaue & Wechselformen',
      ja: 'リゴティ オーボエ用シェーパーハンドル＆ティップ',
    },
    brand: 'Rigotti (France)',
    priceRange: '$120 - $185',
    targetLevel: 'Conservatory',
    rating: '★★★★☆',
    imageAlt: 'Rigotti Oboe Shaper Handle',
    description: {
      en: 'Hardened steel shaper tips that define the outline contour and taper of the oboe reed. Determines overall pitch, internal throat opening, and octave balance.',
      zh: '决定双簧管哨片外形轮廓与腰身宽度的核心定型模具。模具宽度直接决定乐器喉部开合度、442Hz 音准基线及高低八度的平稳度。',
      de: 'Formaufsätze aus gehärtetem Stahl, die die Kontur des Oboenrohrs bestimmen. Maßgeblich für Intonation und Ansprache.',
      ja: 'リードの輪郭形状（幅とくびれ）を決定する高精度焼入れスチール製シェーパー。ピッチ感や吹奏感の骨格を決定します。',
    },
    pros: {
      zh: [
        '法式精密切削，两耳夹具固定稳固，两翼切除零跑偏',
        '提供 No. -1（较窄，暗色凝聚）、No. 1（平衡全能）、No. 1A（通透松弛）多种型号',
        '耐磨防锈，可更换式手柄设计',
      ],
      en: [
        'Precision French machining with secure clamping ears to eliminate slippage',
        'Available in No. -1 (narrow, dark focused), No. 1 (balanced standard), and 1A',
        'Interchangeable handle fits dozens of standard global shaper tip profiles',
      ],
      de: [
        'Präzise Klemmung verhindert Verrutschen',
        'In verschiedenen Breiten für schmale oder weite Tonansprache erhältlich',
        'Modular austauschbare Spitzen',
      ],
      ja: [
        'ガタつきのない確実な固定クランプ',
        'No. -1（細め・まとまり重視）、No. 1（標準・万能）など多彩なモデル',
        '交換可能なモジュラーハンドル',
      ],
    },
    buyingAdvice: {
      zh: '对于想尝试不同声学音色倾向的乐手，购买 1 个手柄搭配 1~2 个不同模具板是性价比最高的进阶方案。',
      en: 'Best value configuration: buy 1 universal handle and 2 tip geometries to explore contrasting tone colors.',
      de: 'Kombinieren Sie einen Universalausleger mit 2 verschiedenen Fassons.',
      ja: 'ハンドル1本と好みのティップ2種類を揃えるのが最も合理的です。',
    },
  },
  {
    id: 'chiarugi-staples-type-2',
    category: 'cane-staple',
    name: {
      en: 'Chiarugi 47mm Type 2 Brass Cork Staples (Pack of 10)',
      zh: 'Chiarugi 意大利原产 47mm 2号黄铜软木铜管 (10支装)',
      de: 'Chiarugi 47mm Typ 2 Messinghülsen (10er Pack)',
      ja: 'キアルギ 47mm 2番 ブラス製コルクチューブ (10本入)',
    },
    brand: 'Chiarugi (Italy)',
    priceRange: '$35 - $48',
    targetLevel: 'Student',
    rating: '★★★★★',
    imageAlt: 'Chiarugi Oboe Staples',
    description: {
      en: 'The global standard 47mm European brass staple used by over 80% of European and Asian symphony orchestras. Guarantees rock-solid 442Hz concert pitch.',
      zh: '全球 80% 以上交响乐团乐手与教授选用的 47mm 欧洲标准软木双簧管铜管。2号经典内孔锥度，赋予双簧管坚如磐石的 442Hz 音准与浑厚共鸣。',
      de: 'Die Standardhülse in über 80% aller europäischen Orchester. Garantiert 442Hz Kammerton und brillante Klangentfaltung.',
      ja: '世界のオーケストラ奏者の8割以上が使用する事実上の世界標準チューブ。442Hzの正確なピッチと芯のある音色を実現。',
    },
    pros: {
      zh: [
        '圆锥度极其精准无偏差，管壁厚度均匀',
        '天然一级葡萄牙软木，插拔严丝合缝绝不漏气',
        '铜材弹性优异，可反复拆线捆绑使用 5 次以上',
      ],
      en: [
        'Consistent precision internal taper prevents acoustic turbulence',
        'Grade-A natural Portuguese cork prevents air leakage in reed well',
        'High-density alloy allows 5+ re-tying cycles without oval deformation',
      ],
      de: [
        'Perfekte Innenbohrung für saubere Luftsäule',
        'Hochwertiger Naturkork dichtet absolut zuverlässig ab',
        'Mehrfach wiederverwendbar',
      ],
      ja: [
        '均一なテーパー設計による正確なピッチ',
        '気密性に優れた高品質ポルトガル産天然コルク',
        '変形しにくく、5回以上巻き直して再利用可能',
      ],
    },
    buyingAdvice: {
      zh: '双簧管必备耗材。建议每次备足 10~20 支，47mm 适合多数现代管乐器（Yamaha, Marigaux, Lorée）。',
      en: 'Essential consumable. Always keep 10-20 pieces in stock; 47mm pairs perfectly with Yamaha, Marigaux, and Lorée.',
      de: 'Unverzichtbarer Grundbedarf für 442Hz Stimmung.',
      ja: '常に10〜20本はストックしておきたい定番チューブ。現代の主要楽器に完璧にマッチします。',
    },
  },
  {
    id: 'reeds-n-stuff-dial-indicator',
    category: 'dial',
    name: {
      en: 'Reeds n Stuff Precision Dial Indicator Micrometer',
      zh: "Reeds 'n Stuff 双簧管千分位刻度测厚表",
      de: 'Reeds n Stuff Präzisions-Uhrenmessgerät',
      ja: 'Reeds n Stuff 精密ダイヤルインジケーター',
    },
    brand: "Reeds 'n Stuff (Germany)",
    priceRange: '$280 - $360',
    targetLevel: 'Conservatory',
    rating: '★★★★☆',
    imageAlt: 'Reeds n Stuff Dial Indicator',
    description: {
      en: 'Specialized 0.01mm mechanical dial gauge with curved tongue probe. Measures the critical thickness profile across Tip, Heart, and Spine without crushing the reed.',
      zh: '专为双簧管弧形管身设计的 0.01mm 机械刻度测厚表。特制圆滑探针能伸入上下簧片间，精确测出 Tip 尖端（0.06-0.08mm）与 Heart 心脏（0.40-0.45mm）数据。',
      de: 'Feinuhrenmessgerät mit gebogener Zunge. Misst die Rohrstärke im 0,01 mm Bereich ohne das Schilf zu beschädigen.',
      ja: 'オーボエリード専用の曲面プローブを備えた0.01mm高精度厚み測定器。リードを傷めずに先端や心臓部の厚みを数値化します。',
    },
    pros: {
      zh: [
        '数据说话：将模糊的“感觉厚薄”转化为确凿的微米读数',
        '探针接触力极其微弱柔和，绝不折断薄如蝉翼的尖端',
        '附带基准归零校准旋钮',
      ],
      en: [
        'Translates subjective scraping into objective micron numbers',
        'Feather-light spring pressure protects fragile tips from cracking',
        'Includes zero-calibration bezel ring for instant reference',
      ],
      de: [
        'Macht das Schaben messbar und replizierbar',
        'Schonender Federdruck verhindert Einreißen der Spitze',
        'Präzise Nullpunktjustierung',
      ],
      ja: [
        '「感覚」を「数値」に変えることで再現性を飛躍的に高める',
        '繊細な先端を割らない超低圧スプリング機構',
        'ゼロ点調整ダイヤル付き',
      ],
    },
    buyingAdvice: {
      zh: '当哨片吹不响或音准偏低时，测厚表可在 3 秒内找出究竟是哪一个区域削薄过度，是突破刮哨瓶颈的进阶神器。',
      en: 'Invaluable diagnostic tool: instantly identifies uneven thickness pockets within 3 seconds.',
      de: 'Unverzichtbar zur systematischen Fehleranalyse beim Rohrbau.',
      ja: '「なぜ鳴らないのか」を3秒で突き止める診断ツール。スランプ脱出に極めて有効です。',
    },
  },
];
