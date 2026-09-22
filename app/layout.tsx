import type { Metadata } from 'next';
import './globals.css';
import { getInstrumentConfig } from '@/src/config/instrument.config';

const config = getInstrumentConfig();

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  alternates: {
    canonical: config.baseUrl,
  },
  title: {
    default: config.seo.defaultTitle,
    template: config.seo.titleTemplate,
  },
  description: config.seo.defaultDescription,
  keywords: config.seo.primaryKeywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: config.seo.locale,
    url: config.baseUrl,
    siteName: config.brandName,
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
  },
  verification: {
    google: 'google-site-verification-placeholder-obolib',
    other: {
      'msvalidate.01': 'msvalidate-placeholder-obolib',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.brandName,
    url: config.baseUrl,
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
