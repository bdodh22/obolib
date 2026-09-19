import { MetadataRoute } from 'next';
import { ALL_LOCALES, getLocalizedPath } from '@/lib/i18n/config';
import { getInstrumentConfig } from '@/src/config/instrument.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getInstrumentConfig();
  const currentDate = new Date();

  // 基础静态路由表
  const baseStaticSubpaths = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/fingering', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/chart/print', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/trill-chart', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/reed-doctor', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/reed-doctor/plaque-light', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/reed-doctor/supplies', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/guide/upgrade-oboe', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/schools/american-vs-european', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/guide/wind-ensemble-oboe', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/schools/french-conservatoire', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/synthetic-reeds', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/excerpts', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/excerpts/ravel-le-tombeau-de-couperin-prelude', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/excerpts/beethoven-symphony-3-eroica-funeral-march', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/excerpts/brahms-violin-concerto-adagio-oboe-solo', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/excerpts/tchaikovsky-swan-lake-act-2-scene-solo', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/excerpts/richard-strauss-oboe-concerto-opening-solo', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tuner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools/orchestra-tuner', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/scores', priority: 0.85, changeFrequency: 'daily' as const },
    { path: '/tools', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/knowledge', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/membership', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms-of-service', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  const localizedStaticRoutes: MetadataRoute.Sitemap = [];

  for (const item of baseStaticSubpaths) {
    for (const locale of ALL_LOCALES) {
      const localizedPath = getLocalizedPath(item.path, locale);
      localizedStaticRoutes.push({
        url: localizedPath === '/' ? `${config.baseUrl}` : `${config.baseUrl}${localizedPath}`,
        lastModified: currentDate,
        changeFrequency: item.changeFrequency,
        priority: locale === 'en' ? item.priority : Math.max(0.7, item.priority - 0.05),
      });
    }
  }

  return localizedStaticRoutes;
}
