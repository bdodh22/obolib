'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Scissors, RotateCcw, AlertTriangle, ExternalLink, CheckCircle2, ChevronRight, Sliders } from 'lucide-react';

interface ReedZone {
  id: string;
  name: { zh: string; en: string; de: string; ja: string };
  thickness: string;
  role: { zh: string; en: string; de: string; ja: string };
  symptomIfThick: { zh: string; en: string; de: string; ja: string };
  fixAdvice: { zh: string; en: string; de: string; ja: string };
}

const REED_ZONES: ReedZone[] = [
  {
    id: 'tip',
    name: { zh: '刀口尖端区 (Tip 2-3mm)', en: 'Tip Zone (Front 2-3mm)', de: 'Bahnpitze (2-3mm)', ja: '先端チップ (Tip 2-3mm)' },
    thickness: '0.06 - 0.10 mm',
    role: {
      zh: '极薄的微震动带，直接决定起音（Attack）灵敏度、轻奏（pp）控制与吐音反应速度。',
      en: 'Ultra-thin vibration zone dictating attack responsiveness, delicate pianissimo, and staccato clarity.',
      de: 'Hauchdünne Zone für direkte Ansprache, weiches Pianissimo und Artikulation.',
      ja: '発音（アタック）の鋭さ、ピアニッシモの安定度、タンギングの反応を決定します。',
    },
    symptomIfThick: {
      zh: '起音迟钝发僵、弱奏容易卡阻或破音、嘴唇极易疲劳。',
      en: 'Stiff attack response, difficulty speaking at pianissimo, rapid embouchure fatigue.',
      de: 'Schwere Ansprache im Pianissimo, unelastisches Blasen, schnelle Lippenermüdung.',
      ja: '立ち上がりが重く、弱音での発音困難、唇の疲労が早くなります。',
    },
    fixAdvice: {
      zh: '使用削片刀与刮舌片（Plaque）垫在片下，以极轻极平的下刀角度从心部向尖端方向微削两角。切忌削薄中心点。',
      en: 'Insert scraping plaque. Using a sharp hollow-ground knife, lightly shave the side corners towards the tip. Strictly keep the exact tip center intact.',
      de: 'Zunge einschieben, mit flachem Messer extrem feine Späne an den Ecken abtragen. Die Mitte nicht schwächen.',
      ja: 'プラークを差し込み、よく研いだナイフで両サイドの角を先端に向かって極薄く削ります。センターは削らないこと。',
    },
  },
  {
    id: 'heart',
    name: { zh: '心脏核心区 (Heart)', en: 'Heart Core Zone', de: 'Herz-Bereich (Heart)', ja: 'ハート区 (Heart)' },
    thickness: '0.35 - 0.45 mm',
    role: {
      zh: '双簧管哨片的灵魂与抗阻脊梁，决定音色的暗醇厚重度与核心共鸣焦点。',
      en: 'The vital core of the oboe reed providing structural blowing resistance, dark focus, and core warmth.',
      de: 'Die Seele des Rohres für Blaswiderstand, dunklen runden Ton und harmonische Tiefe.',
      ja: 'リードの芯であり抵抗感と深みのあるダークな音色、豊かな響きを支えます。',
    },
    symptomIfThick: {
      zh: '整体吹奏阻力沉重如堵、音色发闷不开、高音偏低（Sagging）。',
      en: 'Excessive stuffy resistance, muffled tone projection, sagging intonation in upper octaves.',
      de: 'Erstickter Ton, zu hoher Blaswiderstand, zu tiefe Intonation in der Höhe.',
      ja: '息の通りが悪く重すぎる、音がこもる、高音域の音程がぶら下がる。',
    },
    fixAdvice: {
      zh: '危险区域！必须极其谨慎。仅在两侧过渡区刮除1-2根微米级芦苇纤维，绝不可大面积削平，否则哨片直接报废垮塌。',
      en: 'Highest caution zone! Remove only microscopic cane dust from lateral heart edges. Never shave center flat or the reed will collapse permanently.',
      de: 'Höchste Vorsicht! Nur mikroskopische Fasern an den Rändern abtragen, niemals die Mitte aushöhlen.',
      ja: '最も慎重を要する領域。サイドのグラデーション部分のみを数ミクロン削り、センターの厚みは絶対に残します。',
    },
  },
  {
    id: 'spine',
    name: { zh: '中央脊梁区 (Spine)', en: 'Central Spine Ridge', de: 'Mittelgrat (Spine)', ja: 'スパイン背骨 (Spine)' },
    thickness: '0.45 - 0.55 mm',
    role: {
      zh: '从尖端后方贯穿至软木管的中央脊梁，支撑两片芦苇的拱桥张力。',
      en: 'The central longitudinal ridge running down to the staple, preserving reed arch tension and pitch stability.',
      de: 'Der tragende Mittelgrat für Stabilität der Blattöffnung und Intonationshalt.',
      ja: 'ステープルから先端直前まで走る中央の背骨。開きとピッチの安定性を保ちます。',
    },
    symptomIfThick: {
      zh: '高低音音色断层严重、八度跳进极不顺畅。',
      en: 'Noticeable tonal register fracture, clumsy octave leap response.',
      de: 'Brüchige Registerübergänge, unflexible Oktavsprünge.',
      ja: 'レジスターの音色差が激しく、オクターブ跳躍が困難。',
    },
    fixAdvice: {
      zh: '保持脊梁高度，通常不直接刮脊梁，而是平滑过渡两侧侧槽（Channels）。',
      en: 'Preserve spine height. Smooth the lateral channels flanking the spine rather than attacking the ridge directly.',
      de: 'Gratlinie schützen, nur die seitlichen Übergangskanäle angleichen.',
      ja: 'スパイン自体は削らず、スパインの両脇の溝（チャンネル）をなだらかに整えます。',
    },
  },
  {
    id: 'back',
    name: { zh: '背部与斜坡窗口 (Back & Windows)', en: 'Back & Lateral Windows', de: 'Hinterer Bereich (Back)', ja: 'バック・窓部 (Back)' },
    thickness: '0.50 - 0.65 mm',
    role: {
      zh: '美式长刮（American Scrape）与欧式短刮（European Scrape）的核心区别区域，调控整体气流容积与低音响应。',
      en: 'Primary discriminator between American Long Scrape and European Short Scrape, governing total airflow freedom and low notes.',
      de: 'Unterschied zwischen amerikanischem und europäischem Schabebild, steuert Tiefenansprache.',
      ja: 'アメリカン・ロングスクレープとヨーロピアンの最大の違い。低音の鳴りと気流の自由度を左右します。',
    },
    symptomIfThick: {
      zh: '低音区 Bb3 到 D4 极难发声、吹奏时胸口憋闷。',
      en: 'Low notes (Bb3-D4) refuse to articulate smoothly, creating claustrophobic chest back-pressure.',
      de: 'Tiefe Töne (B3-D4) sprechen starr an, hoher Staudruck.',
      ja: '低音域（Bb3〜D4）が鳴りにくく、演奏時に強い胸圧（息の詰まり）を感じる。',
    },
    fixAdvice: {
      zh: '顺着芦苇纤维方向，从缠线向上方 3mm 处向前顺推刮修背部窗口，释放低频震动。',
      en: 'Scrape forward along cane grains from 3mm above the thread wrap to open low-frequency vibration resonance.',
      de: 'Von knapp oberhalb der Wicklung nach vorne schaben, um Tiefenresonanz zu öffnen.',
      ja: '糸巻きの上3mmから前方へ木目に沿って削り、低音の振動を解放します。',
    },
  },
  {
    id: 'staple',
    name: { zh: '软木铜管柱 (47mm Brass Staple)', en: '47mm Brass Cork Staple', de: '47mm Messinghülse (Staple)', ja: '47mm 真鍮ステープル (Staple)' },
    thickness: '47 mm Standard',
    role: {
      zh: '双簧管独有的金属软木套管。将芦苇片紧密绑牢并直插上管插座，对乐团 A=440/442Hz 标准音准起决定性作用。',
      en: 'The brass cork tube mounting the dual blades, inserted into the upper joint socket. Fundamental determinant of concert pitch A=440/442Hz.',
      de: 'Die Messinghülse für feste Korkpassung und exakte 440/442Hz Intonationsbasis.',
      ja: 'オーボエ特有の真鍮コルク管。上管ソケットに密着し、A=440/442Hzの基本ピッチを左右します。',
    },
    symptomIfThick: {
      zh: '管壁漏气会导致全音域破裂；若总长超过 72mm 会造成音准整体偏低。',
      en: 'Air leaks cause erratic tone collapse; total reed length exceeding 72mm drags overall intonation flat.',
      de: 'Undichtigkeiten zerstören den Klang; Gesamtlänge über 72mm führt zu tiefer Grundstimmung.',
      ja: '息漏れがあると音が出ず、全長が72mmを超えると全体の音程がぶら下がります。',
    },
    fixAdvice: {
      zh: '检查缠线密封度与软木厚度，必要时涂抹蜂蜡密封或使用高精度 47mm 铜管（如 Chiarugi #2）。',
      en: 'Inspect thread airtight seal and cork compression. Apply beeswax along binding or replace with precision 47mm staples (e.g. Chiarugi #2).',
      de: 'Wicklung auf Dichtigkeit prüfen, ggf. Bienenwachs auftragen oder Marken-Hülsen (z.B. Chiarugi #2) nutzen.',
      ja: '糸巻きの気密性とコルクを確認。必要に応じて蜜蝋でシーリングするか、高品質ステープル（キア鲁ギ等）を使用。',
    },
  },
];

// CPS Affiliate Recommendations for Reed Tools
const RECOMMENDED_TOOLS = [
  {
    name: 'Landwell Double Hollow Ground Oboe Reed Knife',
    category: 'Scraping Knife',
    categoryZh: '专业双凹面手工刮刀',
    price: '$89.00',
    tag: 'Essential Choice',
    url: 'https://www.amazon.com/dp/B0002E2D6W?tag=obolib-20',
  },
  {
    name: 'Chiarugi Oboe Staples 47mm 2+ Brass (Pack of 10)',
    category: 'Staples & Cork',
    categoryZh: '意大利原产 47mm 软木铜管',
    price: '$38.50',
    tag: 'Intonation Standard',
    url: 'https://www.amazon.com/dp/B08X4P99ZX?tag=obolib-20',
  },
  {
    name: 'Precision Dial Indicator Micrometer for Oboe',
    category: 'Thickness Gauge',
    categoryZh: '高精度数显哨片测厚千分表',
    price: '$129.00',
    tag: 'Pro Customizer',
    url: 'https://www.amazon.com/dp/B07V4MN98X?tag=obolib-20',
  },
  {
    name: 'Rigotti Blue Double Reed Scraping Plaque',
    category: 'Plaque Tool',
    categoryZh: '弧形精钢刮舌垫片 (Plaque)',
    price: '$14.95',
    tag: 'Safety Guard',
    url: 'https://www.amazon.com/dp/B01MTXYZ89?tag=obolib-20',
  },
];

interface OboeReedDoctorStudioProps {
  locale: string;
}

export default function OboeReedDoctorStudio({ locale }: OboeReedDoctorStudioProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [selectedZoneId, setSelectedZoneId] = useState<string>('tip');
  const [scrapeIntensity, setScrapeIntensity] = useState<number>(1);
  const [transparency, setTransparency] = useState<number>(0.35);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [prescriptionLog, setPrescriptionLog] = useState<string | null>(null);

  const activeZone = REED_ZONES.find((z) => z.id === selectedZoneId) || REED_ZONES[0];

  const handleSimulateScrape = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      const newTrans = Math.min(0.88, transparency + scrapeIntensity * 0.1);
      setTransparency(newTrans);
      const transPercent = Math.round(newTrans * 100);

      const zoneName = isZh ? activeZone.name.zh : activeZone.name.en;
      if (selectedZoneId === 'tip') {
        setPrescriptionLog(
          isZh
            ? `【诊断处方】在「${zoneName}」执行了 Lv.${scrapeIntensity} 虚拟微修。透光度达 ${transPercent}%。成效：起音灵敏度提升40%，pp 弱奏发声即刻改善，高音阻抗降低。`
            : `[Prescription] Virtual scrape applied on "${zoneName}" with intensity Lv.${scrapeIntensity}. Translucency reached ${transPercent}%. Attack speaks 40% crisper, pianissimo response restored.`
        );
      } else if (selectedZoneId === 'heart') {
        setPrescriptionLog(
          isZh
            ? `【诊断处方】针对「${zoneName}」边缘修除微米级纤维。警告：中心脊柱厚度已锁定，音色保持暗醇核心，避免了哨片扁平塌陷。`
            : `[Prescription] Micro-fiber shaved from "${zoneName}" flanks. Core spine thickness locked to prevent tone buzz and collapse.`
        );
      } else if (selectedZoneId === 'back') {
        setPrescriptionLog(
          isZh
            ? `【诊断处方】顺应芦苇纹路对「${zoneName}」推削，低音区（Bb3-D4）气流阻抗显著减小，胸腔憋闷感释放。`
            : `[Prescription] Windows smoothed along grain on "${zoneName}". Low register (Bb3-D4) speech liberated.`
        );
      } else {
        setPrescriptionLog(
          isZh
            ? `【诊断处方】已对「${zoneName}」完成校准建议，建议上管测试 A4 乌鸦音（Crow）。`
            : `[Prescription] Calibration completed for "${zoneName}". Test-blow reed crow for balanced C-octaves.`
        );
      }
    }, 600);
  };

  const handleReset = () => {
    setTransparency(0.35);
    setPrescriptionLog(null);
  };

  return (
    <div className="w-full space-y-12">
      {/* Interactive Reed Doctor Studio Board */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Header Tabs: 5 Anatomical Zones */}
        <div className="bg-slate-50 border-b border-slate-200/80 p-4 sm:p-5 flex items-center gap-2 overflow-x-auto">
          {REED_ZONES.map((zone) => {
            const isSelected = zone.id === activeZone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZoneId(zone.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {isZh ? zone.name.zh : isDe ? zone.name.de : isJa ? zone.name.ja : zone.name.en}
              </button>
            );
          })}
        </div>

        {/* Studio Workspace: Visual Reed Simulator (Left) + Diagnosis & Scrape Prescription (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
          {/* Left: High-Precision Reed Backlight SVG Model */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-900 rounded-3xl text-white relative">
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span>BACKLIGHT SIMULATOR</span>
              <span className="text-emerald-400 font-bold">TRANSLUCENCY: {Math.round(transparency * 100)}%</span>
            </div>

            {/* Oboe Reed Visual SVG */}
            <svg viewBox="0 0 160 380" width="180" height="360" className="drop-shadow-2xl">
              <defs>
                {/* Backlight light projection */}
                <radialGradient id="backlightGlow" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#FEF08A" stopOpacity={transparency + 0.15} />
                  <stop offset="60%" stopColor="#EAB308" stopOpacity={transparency * 0.7} />
                  <stop offset="100%" stopColor="#713F12" stopOpacity="0.85" />
                </radialGradient>

                {/* Staple Brass */}
                <linearGradient id="reedStapleBrass" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CA8A04" />
                  <stop offset="50%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#854D0E" />
                </linearGradient>
              </defs>

              {/* 1. Staple Cork (47mm) */}
              <rect x="62" y="240" width="36" height="130" rx="4" fill="#D97706" stroke="#92400E" strokeWidth="2" />
              <text x="80" y="310" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="bold">
                47mm Cork
              </text>

              {/* Brass Tip of Staple */}
              <rect x="68" y="224" width="24" height="18" fill="url(#reedStapleBrass)" stroke="#854D0E" strokeWidth="1" />

              {/* 2. Red Silk Binding Thread Wrap */}
              <rect x="64" y="170" width="32" height="56" rx="2" fill="#DC2626" stroke="#991B1B" strokeWidth="1.5" />
              {/* Thread Lines */}
              {[178, 186, 194, 202, 210, 218].map((y) => (
                <line key={y} x1="64" y1={y} x2="96" y2={y} stroke="#EF4444" strokeWidth="1" />
              ))}

              {/* 3. Cane Blades (Oboe Double Reed Cane) */}
              {/* Back / Windows Zone */}
              <polygon
                points="58,100 102,100 96,170 64,170"
                fill={activeZone.id === 'back' ? '#F59E0B' : 'url(#backlightGlow)'}
                stroke="#A16207"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedZoneId('back')}
              />

              {/* Heart & Spine Zone */}
              <polygon
                points="52,45 108,45 102,100 58,100"
                fill={
                  activeZone.id === 'heart'
                    ? '#10B981'
                    : activeZone.id === 'spine'
                    ? '#3B82F6'
                    : 'url(#backlightGlow)'
                }
                stroke="#A16207"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedZoneId('heart')}
              />

              {/* Center Spine Ridge Overlay */}
              <path
                d="M 77,20 L 83,20 L 82,165 L 78,165 Z"
                fill={activeZone.id === 'spine' ? '#60A5FA' : 'rgba(0,0,0,0.25)'}
                className="cursor-pointer"
                onClick={() => setSelectedZoneId('spine')}
              />

              {/* Tip Zone (Frontmost 2-3mm) */}
              <polygon
                points="48,15 112,15 108,45 52,45"
                fill={activeZone.id === 'tip' ? '#EC4899' : 'url(#backlightGlow)'}
                stroke="#CA8A04"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onClick={() => setSelectedZoneId('tip')}
              />

              {/* Tip Center Opening Arc (Crow embouchure) */}
              <path d="M 48,15 Q 80,8 112,15" stroke="#FDE047" strokeWidth="2" fill="none" />

              {/* Labels */}
              <text x="80" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                TIP
              </text>
              <text x="80" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                HEART
              </text>
              <text x="80" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                BACK
              </text>
            </svg>

            {/* Scrape Controls Bar */}
            <div className="w-full mt-6 pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{isZh ? '刮刀削力强度' : 'Knife Pressure'}:</span>
                <span className="font-bold text-amber-400">Lv.{scrapeIntensity} ({scrapeIntensity === 1 ? 'Fine' : 'Deep'})</span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={scrapeIntensity}
                onChange={(e) => setScrapeIntensity(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleSimulateScrape}
                  disabled={isSimulating}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all active:scale-95"
                >
                  <Scissors className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? (isZh ? '微米打磨中...' : 'Scraping...') : (isZh ? '模拟刮修下刀' : 'Simulate Knife')}</span>
                </button>
                <button
                  onClick={handleReset}
                  title="Reset Translucency"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Zone Anatomy, Symptoms & Doctor Prescription */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{isZh ? '双簧管解剖部位分析' : 'Anatomy Analysis'}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-baseline gap-3">
                <span>{isZh ? activeZone.name.zh : isDe ? activeZone.name.de : isJa ? activeZone.name.ja : activeZone.name.en}</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 bg-slate-100 text-slate-600">
                  {activeZone.thickness}
                </span>
              </h2>
            </div>

            {/* Zone Function */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-xs font-bold uppercase text-slate-500">{isZh ? '声学功能与角色' : 'Acoustic Role'}</span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {isZh ? activeZone.role.zh : isDe ? activeZone.role.de : isJa ? activeZone.role.ja : activeZone.role.en}
              </p>
            </div>

            {/* Diagnostic Alert: Symptom when too thick/stiff */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>{isZh ? '常见病症（偏厚/偏硬）' : 'Common Symptoms (Too Stiff)'}</span>
              </div>
              <p className="text-sm text-amber-950 leading-relaxed">
                {isZh ? activeZone.symptomIfThick.zh : isDe ? activeZone.symptomIfThick.de : isJa ? activeZone.symptomIfThick.ja : activeZone.symptomIfThick.en}
              </p>
            </div>

            {/* Clinic Action Advice */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isZh ? '双簧管医生刮修处方 (Doctor Prescription)' : 'Scraping Protocol'}</span>
              </div>
              <p className="text-sm text-emerald-950 leading-relaxed font-medium">
                {isZh ? activeZone.fixAdvice.zh : isDe ? activeZone.fixAdvice.de : isJa ? activeZone.fixAdvice.ja : activeZone.fixAdvice.en}
              </p>
            </div>

            {/* Realtime Prescription Output Box */}
            {prescriptionLog && (
              <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-slate-900 text-emerald-300 text-xs font-mono leading-relaxed border border-emerald-500/40 shadow-inner">
                {prescriptionLog}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Toolkit & High-Conversion CPS Affiliate Grid */}
      <section className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {isZh ? '专业双簧管削片与调校工具箱 (Pro Toolkit)' : 'Recommended Oboe Reed Tools'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {isZh
              ? '工欲善其事必先利其器：顶尖职业双簧管演奏家必备的进口刮刀、高精度测厚表与软木铜管'
              : 'Endorsed by orchestral principals: Precision double-hollow ground knives, micrometers, and staples.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RECOMMENDED_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase">
                  {tool.tag}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{tool.name}</h3>
                <p className="text-xs text-slate-500">{isZh ? tool.categoryZh : tool.category}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-base font-black text-slate-900">{tool.price}</span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
                >
                  <span>{isZh ? '查看详情' : 'Check Price'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
