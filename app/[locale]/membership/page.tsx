import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Crown, Check, ShieldCheck, Zap } from 'lucide-react';
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
  const alternates = getHreflangAlternates('/membership', locale);

  const title = `Pro Membership · Unlimited Scores & AI Coaching | ${config.brandName}`;
  const description = `Join ${config.brandName} Pro to unlock unlimited PDF score downloads, AI reed adjustment doctor, orchestral excerpt passage companion, and slow-motion video fingerings.`;

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

export default function MembershipPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const config = getInstrumentConfig();
  const dict = getDictionary(locale);

  const plans = [
    {
      name: 'Free Musician',
      price: '$0',
      period: 'forever',
      desc: `Essential chromatic fingering references and fundamental studies for ${config.name[locale]}.`,
      features: [
        'Complete chromatic fingering chart',
        'Standard pitch drone tuner (A440)',
        '10 foundational practice scores',
        'Knowledge base & maintenance guides',
      ],
      cta: 'Current Plan',
      isPopular: false,
    },
    {
      name: 'Studio Pro',
      price: '$9.90',
      period: 'per month',
      desc: 'All-access pass for serious students, teachers, and orchestral audition candidates.',
      features: [
        'Unlimited PDF score & parts downloads',
        'AI Reed Doctor & adjustment diagnostic simulator',
        'Orchestral excerpt passage assistant with fingering sync',
        'Interactive measure-by-measure slow practice audio',
        'Offline mobile progressive web access',
      ],
      cta: 'Upgrade to Pro',
      isPopular: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 space-y-12">
      {/* 头部标题 */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap shrink-0 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
          <Crown className="w-3.5 h-3.5" />
          <span>Elevate Your Artistry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Simple, Transparent Membership
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Everything you need to master {config.name[locale]} from first scales to professional auditions.
        </p>
      </div>

      {/* 价格对比卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
              plan.isPopular
                ? 'bg-slate-900 text-white shadow-xl relative border-2 border-purple-500'
                : 'glass-card border border-slate-200 text-slate-900'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full whitespace-nowrap shrink-0 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Zap className="w-3 h-3" />
                <span>Most Popular</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-xs mt-1 leading-relaxed ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className={`text-xs ${plan.isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-slate-200/20 text-xs leading-relaxed">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                  plan.isPopular
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Cancel anytime. Secure checkout via Stripe. 14-day money-back guarantee.</span>
      </div>
    </div>
  );
}
