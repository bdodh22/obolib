/**
 * InstruLib Base — 通用 Sitemap 生成脚本
 * ==========================================
 * 从 BSNLib scripts/generateSitemap.ts 提炼，完全配置驱动。
 *
 * 运行方式: tsx scripts/generateSitemap.ts
 * 输出: public/sitemap.xml
 *
 * 路由规则：
 * - 默认语言（en）路径：/fingering, /scores, /tools 等
 * - 其他语言路径：/de/fingering, /ja/scores 等
 * - 曲谱详情：/scores/:id（来自数据层）
 * - 知识库文章：/knowledge/:slug（来自数据层）
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getInstrumentConfig,
  type Locale,
} from '../src/config/instrument.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = getInstrumentConfig();
const { baseUrl, supportedLocales, defaultLocale } = config;

// ── 路由本地化工具 ────────────────────────────────────────

function getLocalizedUrl(subpath: string, locale: Locale): string {
  const cleanPath = subpath.startsWith('/') ? subpath : `/${subpath}`;
  if (locale === defaultLocale) {
    return cleanPath === '/' ? baseUrl : `${baseUrl}${cleanPath}`;
  }
  return cleanPath === '/' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}${cleanPath}`;
}

// ── 静态路由定义（按 feature flags 过滤） ────────────────

interface StaticRoute {
  path: string;
  priority: number;
  changeFrequency: string;
}

function getStaticRoutes(): StaticRoute[] {
  const routes: StaticRoute[] = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' },
  ];

  if (config.features.hasFingeringSystem || config.features.hasSlidePosition || config.features.hasStringDiagram) {
    routes.push({ path: '/fingering', priority: 0.95, changeFrequency: 'weekly' });
  }

  routes.push({ path: '/scores', priority: 0.9, changeFrequency: 'daily' });
  routes.push({ path: '/tools', priority: 0.85, changeFrequency: 'weekly' });
  routes.push({ path: '/knowledge', priority: 0.85, changeFrequency: 'weekly' });

  if (config.features.hasAI) {
    routes.push({ path: '/ai', priority: 0.8, changeFrequency: 'weekly' });
  }
  if (config.features.hasKidMode) {
    routes.push({ path: '/kid', priority: 0.75, changeFrequency: 'weekly' });
  }
  if (config.features.hasMembership) {
    routes.push({ path: '/membership', priority: 0.7, changeFrequency: 'monthly' });
  }

  return routes;
}

// ── XML 构建 ──────────────────────────────────────────────

function buildUrlEntry(url: string, lastmod: string, changefreq: string, priority: number): string {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
}

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  const staticRoutes = getStaticRoutes();
  const entries: string[] = [];

  for (const route of staticRoutes) {
    for (const locale of supportedLocales) {
      const url = getLocalizedUrl(route.path, locale);
      const priority = locale === defaultLocale ? route.priority : Math.max(0.65, route.priority - 0.1);
      entries.push(buildUrlEntry(url, today, route.changeFrequency, priority));
    }
  }

  // TODO: 动态路由（曲谱详情、知识库文章）
  // 在实际站点中，从数据层读取 scoresCatalog / knowledgeArticles 并生成
  // const scores = await loadScoresCatalog();
  // for (const score of scores) { ... }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;
}

// ── 写出文件 ──────────────────────────────────────────────

const output = generateSitemap();
const outPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outPath, output, 'utf-8');

console.log(`✅ Sitemap generated for ${config.brandName} (${config.domain})`);
console.log(`   Instrument: ${config.name.en}`);
console.log(`   Locales: ${supportedLocales.join(', ')}`);
console.log(`   URLs: ${output.split('<url>').length - 1}`);
console.log(`   Output: ${outPath}`);
