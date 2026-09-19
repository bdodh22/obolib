import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Wrench, Sparkles, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import OboeStudioWorkbench from '@/components/tools/OboeStudioWorkbench';

interface PageProps {
  params: { locale: string };
}

export function generateStaticParams() {
  return ALL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) return {};

  const config = getInstrumentConfig();
  const alternates = getHreflangAlternates('/tools', locale);

  const titles: Record<Locale, string> = {
    zh: '双簧管琴房工作台 · 调音器与7合1训练站 | OboLib',
    en: 'Oboe Studio Workbench · Tuner & 7-in-1 Suite | OboLib',
    de: 'Oboen-Studio · Stimmgerät & 7-in-1 Werkzeuge | OboLib',
    ja: 'オーボエ練習室 · チューナー＆7in1ワークベンチ | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    zh: '专为双簧管高阻力声学设计的全套琴房工具：A440/A442精准调音、长音Drone共鸣对音、左手F决策树、CO2排浊训练与首席15秒仪式。',
    en: 'Professional 7-in-1 practice workstation tailored for oboe acoustics: A440/A442 tuner, sustained drone, Left F solver, and CO2 exhale trainer.',
    de: 'Professionelle 7-in-1 Werkzeuge für Oboe: A440/A442 Präzisionsstimmer, Bordun-Resonanz, linke F-Entscheidungshilfe und CO2-Ausatmungstrainer.',
    ja: 'オーボエ奏者のための7in1スタジオワークベンチ。A440/A442高精度チューナー、ドローン共鳴、左手F運指判定、CO2排出呼吸法を完備。',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
      siteName: config.brandName,
      type: 'website',
    },
  };
}

export default function ToolsPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const config = getInstrumentConfig();
  const dict = getDictionary(locale);

  const copy = {
    zh: {
      badge: '7合1专业声学琴房工作台',
      heading: '双簧管声学琴房工作台',
      subtitle: '专为双簧管高内压阻力、A=440/442Hz乐团标准及复杂侧键机械打造的专业数字化练习中枢。',
      highlights: [
        'A440 / A442 乐团声学校准与动态音高捕捉',
        '长音持续 Drone 与双簧管真实泛音共鸣',
        '左手 F vs 分叉 F 瞬间决策树，扫除指法死穴',
        'CO2 排浊呼吸模拟器，根治肺部憋气与头晕疲劳',
      ],
      faqTitle: '双簧管声学校准与练习常见问答',
      faqs: [
        {
          q: '为什么双簧管调音必须支持 A=440Hz 与 A=442Hz 快速切换？',
          a: '欧美与亚洲顶尖交响乐团存在不同的音高校准传统。美国乐团多以 A=440Hz 为基准，而德国、奥地利及欧洲大陆乐团普遍采用 A=442Hz（甚至 A=443Hz）以获取更明亮激昂的弦乐色彩。作为乐队对音的基准领头乐器，双簧管演奏家必须随时适应不同乐团的频率要求。',
        },
        {
          q: '练习长音时使用 Drone 对音相比普通指针调音表有什么不可替代的优势？',
          a: '普通指针调音表只检测十二平均律绝对频率，但双簧管在管弦乐与重奏中必须根据纯律和自然泛音列进行微调。持续的 Drone 声让乐手在听觉中建立基频与差拍共振感，训练内耳对纯五度、大三度纯合音的生理微调能力。',
        },
        {
          q: '双簧管演奏时经常觉得“胸口憋气、缺氧头晕”是怎么回事？',
          a: '这是双簧管乐手普遍遭遇的“CO2 排浊悖论”。双簧管哨片缝隙极小（约 0.6-0.8mm），吹气阻力极大，乐手往往肺内陈旧空气尚未耗尽，就需要吸入新鲜空气。如果只吸不呼，积聚的二氧化碳会导致血液氧气交换受阻产生缺氧感。本站工作台专门提供了 3 阶段排浊节奏训练器。',
        },
      ],
    },
    en: {
      badge: '7-in-1 Professional Practice Suite',
      heading: 'Oboe Acoustic Studio Workbench',
      subtitle: 'A dedicated digital practice suite engineered for high air-column resistance, orchestral A=440/442Hz standards, and complex mechanism decisions.',
      highlights: [
        'A440 / A442 dual orchestral tuning calibration',
        'Continuous sustained Drone with authentic oboe harmonic timbre',
        'Left F vs Forked F instant decision solver',
        'CO2 stale-air purge pacer to relieve chest fatigue and dizziness',
      ],
      faqTitle: 'Acoustic Calibration & Practice FAQ',
      faqs: [
        {
          q: 'Why does an oboe tuner require fast switching between A=440Hz and A=442Hz?',
          a: 'Orchestras globally adhere to different pitch standards. North American ensembles primarily tune to A=440Hz, whereas European (German/Austrian) orchestras standardize at A=442Hz or A=443Hz for brilliant string projection. As the instrument responsible for tuning the orchestra, oboists must instantly adapt.',
        },
        {
          q: 'Why is practicing with a drone superior to watching a visual needle tuner?',
          a: 'Visual needle tuners evaluate equal temperament mechanically. In live chamber and orchestral performance, oboists must adjust based on pure just intonation and harmonic overtones. A continuous drone trains the inner ear to eliminate acoustic beating in pure fifths and major thirds.',
        },
        {
          q: 'Why do oboists feel dizzy or chest-pressured during long passages?',
          a: 'This is the classic "CO2 stale-air paradox." Due to the minuscule reed aperture (0.6-0.8mm), air expends very slowly. Oboists often finish a phrase with lungs still half full of deoxygenated air. Inhaling on top of stale air triggers hypercapnia. Our 3-phase purge pacer trains rapid exhalation before inhalation.',
        },
      ],
    },
    de: {
      badge: '7-in-1 Professionelle Oboen-Werkbank',
      heading: 'Oboen-Akustik-Studio Werkbank',
      subtitle: 'Digitale Übeplattform für hohen Blaswiderstand, A=440/442Hz Orchesterstandards und Mechanik-Entscheidungen.',
      highlights: [
        'A440 / A442 Orchester-Stimmton-Kalibrierung',
        'Kontinuierlicher Bordun mit realistischen Oboen-Obertönen',
        'Linkes F vs. Gabel-F Sofort-Entscheidungshilfe',
        'CO2-Ausatmungstrainer gegen Lungenüberdruck und Schwindel',
      ],
      faqTitle: 'Häufige Fragen zu Intonation & Übetechniken',
      faqs: [
        {
          q: 'Warum ist der Wechsel zwischen A=440Hz und A=442Hz für Oboisten essenziell?',
          a: 'Internationale Orchester nutzen unterschiedliche Stimmtonhöhen. Während im angelsächsischen Raum A=440Hz dominiert, spielen mitteleuropäische Orchester überwiegend auf A=442Hz. Da die Oboe den Stimmton für das gesamte Orchester angibt, ist flexible Intonation unverzichtbar.',
        },
        {
          q: 'Was macht das Üben mit einem Dauerton (Drone) wirksamer als herkömmliche Stimmgeräte?',
          a: 'Ein Nadel-Stimmgerät zeigt nur die gleichstufige Stimmung. Beim Musizieren im Ensemble muss die Oboe reine Intervalle anpassen. Das Üben gegen einen Drone schult das Innenohr, Schwebungen in Terzen und Quinten intuitiv auszugleichen.',
        },
        {
          q: 'Woher rührt das typische Engegefühl in der Brust beim Oboespielen?',
          a: 'Durch die extrem schmale Rohrblattöffnung kann die Luft nur langsam entweichen. Oboisten haben nach einer Phrase oft noch verbrauchte Luft in der Lunge. Unser 3-Phasen-Trainer übt das blitzschnelle Ausatmen vor dem Neueinatmen.',
        },
      ],
    },
    ja: {
      badge: '7in1 プロフェッショナル練習室ワークベンチ',
      heading: 'オーボエ音響練習室ワークベンチ',
      subtitle: '高抵抗な空気柱、A=440/442Hzオーケストラ基準、複雑なメカニズム判定に対応したデジタル練習ツール。',
      highlights: [
        'A440 / A442 オーケストラ基準ピッチのワンタップ切り替え',
        'オーボエ倍音を忠実に再現した持続ドローン共鳴機能',
        '左手F vs フォークFの即時運指ナビゲーター',
        '胸の苦しさと酸欠を防ぐCO2排出呼吸ペーサー',
      ],
      faqTitle: '音響調律と練習に関するよくある質問',
      faqs: [
        {
          q: 'オーボエのチューナーになぜA=440HzとA=442Hzの両方が必要なのですか？',
          a: '世界各国のオーケストラで採用されている基準ピッチが異なるためです。北米ではA=440Hzが主流ですが、日本やヨーロッパの多くの主要オーケストラではA=442Hzが標準です。全奏者にピッチを渡すオーボエ奏者には、双方への即応性が求められます。',
        },
        {
          q: 'メーター式チューナーだけでなくドローン音を使った練習が不可欠な理由は？',
          a: '針式チューナーは平均律のみを表示しますが、実際のアンサンブルでは純正律に基づく微調整が必要です。持続ドローン音に合わせて練習することで、うなりを消し、純正な5度や長3度を捉える聴覚を養うことができます。',
        },
        {
          q: 'オーボエを吹いていると胸が苦しくなったり目眩がするのはなぜですか？',
          a: 'リードの開きが0.6〜0.8mmと極めて狭いため、息が肺の中に余ったまま次のブレスを迎えてしまう「CO2残留」が原因です。本ツールに搭載された3段階ペーサーで、吸う直前に素早く息を吐き切る呼吸習慣を身につけられます。',
        },
      ],
    },
  };

  const currentCopy = copy[locale] || copy.en;

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: `${config.name[locale]} Acoustic Studio Workbench`,
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: currentCopy.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        },
      ],
    };

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* 顶部殿堂级 Hero 头图与单 H1 */}
        <section className="relative pt-12 pb-8 md:pt-16 md:pb-12 border-b border-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
                <Wrench className="w-3.5 h-3.5" />
                <span>{currentCopy.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {currentCopy.heading}
              </h1>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                {currentCopy.subtitle}
              </p>

              {/* 四大声学核心亮点药丸标签 */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {currentCopy.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7 合 1 交互式客户端工作台 */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <OboeStudioWorkbench locale={locale} />

          {/* 纯 SSR 深度声学 FAQ 区域，赋能 SEO 搜索大词 */}
          <section className="mt-16 pt-12 border-t border-slate-900 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {currentCopy.faqTitle}
                </h2>
                <p className="text-xs text-slate-400">
                  Acoustic Standards & Pedagogical Principles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentCopy.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-200 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-amber-400/80 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Orchestral Standard Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
}
