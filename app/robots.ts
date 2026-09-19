import { MetadataRoute } from 'next';
import { getInstrumentConfig } from '@/src/config/instrument.config';

export default function robots(): MetadataRoute.Robots {
  const config = getInstrumentConfig();
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Bytespider',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: `${config.baseUrl}/sitemap.xml`,
    host: config.baseUrl,
  };
}
