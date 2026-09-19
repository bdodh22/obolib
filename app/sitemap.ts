import { MetadataRoute } from 'next';
import { ALL_LOCALES, getLocalizedPath } from '@/lib/i18n/config';
import { getInstrumentConfig } from '@/src/config/instrument.config';
import { OBOE_SCORES_CATALOG } from '@/data/scoresCatalog';
import { OBOE_KNOWLEDGE_ARTICLES } from '@/data/knowledgeArticles';

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
    { path: '/scores', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/knowledge', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/membership', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms-of-service', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  // 动态加入 6 大双簧管传世分谱
  for (const score of OBOE_SCORES_CATALOG) {
    baseStaticSubpaths.push({
      path: `/scores/${score.slug}`,
      priority: 0.88,
      changeFrequency: 'weekly' as const,
    });
  }

  // 动态加入 6 大双簧管实战百科
  for (const article of OBOE_KNOWLEDGE_ARTICLES) {
    baseStaticSubpaths.push({
      path: `/knowledge/${article.slug}`,
      priority: 0.88,
      changeFrequency: 'weekly' as const,
    });
  }

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
