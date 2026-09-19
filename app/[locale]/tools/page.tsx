import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Wrench, Volume2, Clock, Wind, Disc, Sparkles, ArrowRight } from 'lucide-react';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { ALL_LOCALES, Locale, getHreflangAlternates } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

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
  const dict = getDictionary(locale);
  const alternates = getHreflangAlternates('/tools', locale);

  const title = `${config.name[locale]} Companion Tools · Tuner, Metronome & Reed Doctor | ${config.brandName}`;
  const description = `Practice companion tools for ${config.name[locale]}: acoustic pitch tuner, precision subdivisions metronome, drone practice, and reed adjustment advisor.`;

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

  const tools = [
    {
      title: 'Acoustic Precision Tuner',
      desc: `Calibrated specifically for ${config.name[locale]} resonance and standard orchestral pitch A=440Hz / A=442Hz.`,
      icon: Volume2,
      tag: 'Acoustic Core',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      title: 'Multimetric Metronome',
      desc: 'Compound meters, accent groupings, and tempo ramp training designed for difficult orchestral rhythmic passages.',
      icon: Clock,
      tag: 'Timing & Rhythm',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      title: 'Diaphragm & Breath Trainer',
      desc: 'Breathing rhythm simulator with visual expansion cues to stabilize support across low register transitions.',
      icon: Wind,
      tag: 'Breathing & Airflow',
      color: 'text-teal-600 bg-teal-50 border-teal-200',
    },
    {
      title: 'Drone & Scale Sequencer',
      desc: 'Continuous sustained pitch drone generator for intonation centering and slow overtone interval tuning.',
      icon: Disc,
      tag: 'Intonation Drill',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      {/* 头部标题 */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5" />
          <span>Acoustic Practice Toolbox</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          {config.name[locale]} {dict.nav.tools}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {dict.home.cardToolsDesc}
        </p>
      </div>

      {/* 工具列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.title}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-teal-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${tool.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shrink-0 bg-slate-100 text-slate-600">
                    {tool.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-teal-600 transition-colors flex items-center gap-1.5">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
