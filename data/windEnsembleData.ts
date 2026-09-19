// Master Data: Oboe in Symphonic Wind Ensemble & Japanese Band Repertoire
// All-Japan Band Contest (吹奏楽コンクール) Acoustic Survival & 442Hz Tuning

export interface WindEnsembleSectionGuide {
  id: string;
  topic: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  acousticChallenge: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  solutionTechnique: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
  pitfallToAvoid: {
    en: string;
    zh: string;
    de: string;
    ja: string;
  };
}

export const WIND_ENSEMBLE_GUIDES: WindEnsembleSectionGuide[] = [
  {
    id: 'brass-masking-penetration',
    topic: {
      en: 'Cutting Through 50-Player Brass Walls (Acoustic Projection)',
      zh: '穿透 50 人大编制铜管声浪 (声学投影与共振峰)',
      de: 'Durchdringung großer Blasorchester (Klangprojektion)',
      ja: '大編成の金管群を突き抜けるプロジェクション (倍音と響きの飛ばし方)',
    },
    acousticChallenge: {
      en: 'Trumpets and trombones generate massive acoustic energy in the 500Hz-1500Hz band (exceeding 105dB). An oboe playing fortissimo in that band gets entirely masked.',
      zh: '小号与长号在 500Hz-1500Hz 频段产生高达 105dB 以上的巨大声压。双簧管若盲目拼力硬吹，声音会被铜管完全淹没（频率遮蔽效应）。',
      de: 'Trompeten und Posaunen überdecken mit über 105dB den Bereich von 500-1500Hz.',
      ja: 'トランペットやトロンボーンが500Hz〜1500Hz帯で105dB超の大音量を放ち、オーボエの基本波を完全にマスキング（遮蔽）します。',
    },
    solutionTechnique: {
      en: 'Focus on the "Singer’s Formant" (2.8kHz-3.5kHz). Relax the throat and arch the back of the tongue (like saying "ee") to enrich high-order harmonics. These frequencies cut like a laser through brass chords.',
      zh: '激发 2.8kHz-3.5kHz 的“独唱家共振峰”。喉头彻底放松，舌根微微隆起（如发“依”音），激发尖锐的高次倍频泛音，如手术刀般直接穿透铜管和声背景。',
      de: 'Nutzung des Sängerformanten (2,8-3,5 kHz). Entspannter Hals und hohe Zungenposition ("i").',
      ja: '2.8kHz〜3.5kHzの「シンガーズフォルマント（高次倍音）」を意識。喉を締めず舌の奥を高く保つ（「イ」の母音）ことで、レーザーのように突き抜ける芯を作ります。',
    },
    pitfallToAvoid: {
      zh: '切忌拼命咬紧下颌强吹！这会立刻压扁哨片尖端（0.6mm缝隙塌陷），导致声音发白尖锐，且音准暴涨偏高 20 音分。',
      en: 'Never bite down on the reed with jaw force! It crushes the 0.6mm reed aperture, causing flat, choked timbre and sharp intonation (+20 cents).',
      de: 'Niemals mit Kieferdruck beißen; das Rohr schnürt ab und wird zu hoch.',
      ja: '絶対に顎の力でリードを噛み潰さないこと！アパチュアが潰れて音が痩せ、ピッチが20セント以上上ずります。',
    },
  },
  {
    id: 'tuning-442-harmony',
    topic: {
      en: 'A=442Hz Band Tuning with Flutes and Clarinets',
      zh: 'A=442Hz 管乐团和声协同与八度音程微调',
      de: 'A=442Hz Intonationsabgleich mit Flöten und Klarinetten',
      ja: 'A=442Hz フルート・クラリネットとのピッチ・ハーモニー調和',
    },
    acousticChallenge: {
      en: 'Wind band rooms warm up rapidly during 40-minute rehearsals. Flutes naturally climb sharp while clarinets drop flat in the throat register.',
      zh: '排练厅在 40 分钟合奏后温度迅速上升 5℃。长笛往往自然偏高 10 音分，而黑管喉音区容易偏低，双簧管处于和声夹层极难调谐。',
      de: 'Temperaturanstieg im Probenraum führt zu gegensätzlichen Intonationstrends der Instrumente.',
      ja: '合奏中の室温上昇によりフルートが上ずり、クラリネットの喉音域がぶら下がる中、オーボエが和音の基準としてピッチを保つ困難さ。',
    },
    solutionTechnique: {
      en: 'Maintain unwavering 442Hz core stability. Use standard 47mm staple depth; when matching octave unisons with flute, subtly modify lower lip cushion depth rather than pulling the reed out.',
      zh: '双簧管必须充当坚实的中流砥柱。铜管铜管插入深度保持标准 47mm，与长笛同度齐奏时，依靠下唇肉垫前后微米移动调音，切忌像单簧管那样将哨片随意拔出。',
      de: 'Stabile 47mm Hülsenposition beibehalten und Feinkompensation über den Lippenansatz steuern.',
      ja: '47mmチューブを正規位置まで確実に差し込み、ピッチ調整はチューブの抜き差しではなくアンブシュアの浅深（ミリ単位）で微調整する。',
    },
    pitfallToAvoid: {
      zh: '双簧管若拔出铜管超过 1mm，会严重破坏上管圆锥内膛音阶比例，导致中音 C#5 与高音 A5 瞬间跑调。',
      en: 'Never pull the staple out more than 1mm; it breaks the conical bore acoustic proportions, wrecking C#5 and A5.',
      de: 'Das Herausziehen der Hülse zerstört die konische Mensur.',
      ja: 'チューブを1mm以上抜くと内径テーパー比が崩れ、C#5やA5の音程バランスが崩壊します。',
    },
  },
  {
    id: 'japanese-contest-etiquette',
    topic: {
      en: 'All-Japan Band Contest (吹奏楽コンクール) Preparation',
      zh: '全日本吹奏乐大赛 (吹コン) 舞台实战与哨片备份守则',
      de: 'Wettbewerbsvorbereitung & Rohrkonditionierung',
      ja: '全日本吹奏楽コンクール本番対策とリード・コンディション管理',
    },
    acousticChallenge: {
      en: 'Dry air conditioning in major concert halls (like Nagoya Congress Center) dries reeds within 90 seconds during long rests.',
      zh: '大型比赛剧院（如名古屋国际会议场、普门馆）冷气极干燥。双簧管在 12 分钟自选曲的长休止符中，哨片尖端会在 90 秒内风干开裂。',
      de: 'Trockene Klimaanlagen in großen Konzertsälen trocknen das Rohr bei langen Pausen aus.',
      ja: '大ホールの強力な空調により、課題曲・自由曲の長い休符中にリード先端がわずか90秒で乾燥・変形します。',
    },
    solutionTechnique: {
      en: 'Always carry a compact water vial on the stand. Rewet the reed during 16-bar rests. Keep at least 3 contest-grade broken-in reeds rotated in a velvet hygroscopic case.',
      zh: '谱架上必须配备微型密封浸水瓶。在 16 小节以上休止符时静音润湿哨片；在吸湿丝绒盒中常备至少 3 支经 2 周磨合的比赛级主力哨片。',
      de: 'Stets Wasserbehälter am Notenständer bereitstellen und 3 eingespielte Rohre rotieren.',
      ja: '譜面台に水入れを常備し、長い休符で確実に再湿潤。2週間以上吹き込んだ本番用リードを最低3本ローテーション管理。',
    },
    pitfallToAvoid: {
      zh: '严禁用舌头狂舔干燥的尖端！唾液中的消化酶会快速分解芦苇木质纤维，导致尖端开合度失控塌陷。',
      en: 'Never vigorously lick a bone-dry tip with saliva; enzymes degrade cane fibers rapidly and deform the tip opening.',
      de: 'Trockene Rohre nicht mit Speichel anfeuchten (Enzyme zersetzen die Fasern).',
      ja: '乾燥したリードを唾液で舐めて戻そうとしないこと。唾液の酵素が葦の繊維を劣化させ、開きを狂わせます。',
    },
  },
];
