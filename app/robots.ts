import { MetadataRoute } from 'next';
import { getInstrumentConfig } from '@/src/config/instrument.config';

export default function robots(): MetadataRoute.Robots {
  const config = getInstrumentConfig();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${config.baseUrl}/sitemap.xml`,
  };
}
