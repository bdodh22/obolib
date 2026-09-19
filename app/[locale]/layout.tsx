import React from 'react';
import { notFound } from 'next/navigation';
import { SUBPATH_LOCALES, Locale, ALL_LOCALES } from '@/lib/i18n/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/legal/CookieConsent';
import { getInstrumentConfig } from '@/src/config/instrument.config';

export function generateStaticParams() {
  return SUBPATH_LOCALES.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;

  if (!ALL_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const config = getInstrumentConfig();

  const globalAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.brandName,
    url: `${config.baseUrl}/${locale === 'en' ? '' : locale}`,
    inLanguage: locale,
    description: config.seo.defaultDescription,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: config.brandName,
      url: config.baseUrl,
      email: 'admin@obolib.com',
    },
  };

  return (
    <div data-locale={locale} className="w-full flex-1 flex flex-col">
      {/* Google Site Verification & Global Schema */}
      <meta name="google-site-verification" content="google-site-verification-placeholder-obolib" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalAppSchema) }}
      />
      <Navbar locale={locale as Locale} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer locale={locale as Locale} />
      <CookieConsent locale={locale as Locale} />
    </div>
  );
}
