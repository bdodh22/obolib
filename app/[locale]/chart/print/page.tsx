import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Printer } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import OboePrintPoster from '@/components/fingering/OboePrintPoster';

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
  const alternates = getHreflangAlternates('/chart/print', locale);

  const titles: Record<Locale, string> = {
    en: 'Printable Oboe Fingering Chart: High-Res A4 Poster | OboLib',
    zh: '双簧管全音域指法表打印版: A4极清海报与PDF导出 | OboLib',
    de: 'Oboen-Grifftabelle Druckversion: A4-Poster & PDF | OboLib',
    ja: '印刷用オーボエ運指表: A4高解像度ポスター＆PDF | OboLib',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Printable 300DPI vector oboe fingering chart from Bb3 to A6. Optimized for A4 music stands with half-hole, octave keys, and left-hand F.',
    zh: '专为A4纸与谱架设计的300DPI高清矢量双簧管指法海报。免登录一键打印或导出PDF，完整收录低音Bb3至超高音A6所有半音。',
    de: 'Druckbare 300DPI Vektor-Oboengrifftabelle von B3 bis A6. Optimiert für A4-Notenständer mit Halbloch und Oktavklappen.',
    ja: 'A4サイズ譜面台用に最適化された300DPI高解像度オーボエ運指表。Bb3からA6までワンクリックで印刷・PDF保存可能。',
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

export default function ChartPrintPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Printable Oboe Fingering Poster (A4 300DPI)',
    url: 'https://obolib.com/chart/print',
    description:
      'High resolution printable vector fingering chart for oboe covering chromatic notes from Low Bb3 to Altissimo A6.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 print:p-0 print:m-0 print:max-w-none">
        <div className="print:hidden text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
            <Printer className="w-3.5 h-3.5 shrink-0" />
            <span>Classroom & Music Stand Ready</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {locale === 'zh'
              ? 'A4 纸 300DPI 极清全音域指法海报'
              : locale === 'de'
              ? 'Druckbare Oboen-Grifftabelle (A4 Poster)'
              : locale === 'ja'
              ? '印刷用 A4 高解像度オーボエ運指ポスター'
              : 'Printable Oboe Fingering Poster'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'zh'
              ? '免登录即刻打印或另存为高分辨率 PDF。专为音乐学院谱架张贴优化排版，清晰辨析食指半孔月牙、左手 F 与三大八度键。'
              : locale === 'de'
              ? 'Sofort drucken oder als hochauflösendes PDF speichern. Optimiert für den Notenständer mit klarer Halbloch-Darstellung.'
              : locale === 'ja'
              ? 'ログイン不要で即座に印刷または高解像度PDFとして保存。ハーフホールの形状や左手Fキーを明瞭に表示。'
              : '1-click printable or exportable as crisp vector PDF. Specially formatted for studio music stands with clear half-hole and left-F indicators.'}
          </p>
        </div>

        <OboePrintPoster locale={locale} />
      </div>
    </>
  );
}
