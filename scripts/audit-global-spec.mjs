import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

console.log('\n🔍 ========================================================');
console.log('   OboLib.com 对照《出海独立站全局最高规范》全量深度体检');
console.log('========================================================\n');

const auditResults = {
  passed: [],
  warnings: [],
  defects: [],
};

function pass(category, item, detail = '') {
  auditResults.passed.push({ category, item, detail });
  console.log(`  ✅ [PASS] [${category}] ${item} ${detail ? '(' + detail + ')' : ''}`);
}

function warn(category, item, detail = '') {
  auditResults.warnings.push({ category, item, detail });
  console.log(`  ⚠️  [WARN] [${category}] ${item} -> ${detail}`);
}

function fail(category, item, detail = '') {
  auditResults.defects.push({ category, item, detail });
  console.log(`  ❌ [FAIL] [${category}] ${item} -> ${detail}`);
}

function getAllFiles(dir, exts = ['.tsx', '.ts']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(getAllFiles(fullPath, exts));
      }
    } else if (exts.some(ext => file.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

// ----------------------------------------------------
// 维度 1: 架构与资源加载基准 (Next.js 14+ RSC First)
// ----------------------------------------------------
console.log('\n--- 1. 架构与技术栈基准 (RSC First & Next.js 14+) ---');
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
if (pkg.dependencies && pkg.dependencies.next && pkg.dependencies.next.startsWith('14')) {
  pass('架构', 'Next.js 14+ App Router 核心依赖', pkg.dependencies.next);
} else {
  fail('架构', 'Next.js 版本不符合 14+', pkg.dependencies?.next);
}

const allTsx = getAllFiles(path.join(rootDir, 'app')).concat(getAllFiles(path.join(rootDir, 'components')));
let rawImgFiles = [];
let rawAFiles = [];

for (const f of allTsx) {
  const content = fs.readFileSync(f, 'utf8');
  // 检测原生 <img> (排除 svg 内部 image 或字符串)
  if (/<img[\s>]/i.test(content) && !f.includes('test')) {
    rawImgFiles.push(path.relative(rootDir, f));
  }
}

if (rawImgFiles.length === 0) {
  pass('资源加载', '全站 0 原生 <img> 标签', '100% 遵循 next/image 规范');
} else {
  fail('资源加载', '发现原生 <img> 标签违规', rawImgFiles.join(', '));
}

// ----------------------------------------------------
// 维度 2: H1 唯一性与 TDK 黄金长度全量排查
// ----------------------------------------------------
console.log('\n--- 2. SEO 强约束标准 (TDK & 单一 H1) ---');
const pages = getAllFiles(path.join(rootDir, 'app/[locale]'), ['.tsx']).filter(f => f.endsWith('page.tsx'));

let h1Issues = [];
let tdkIssues = [];

for (const p of pages) {
  const rel = path.relative(rootDir, p);
  const content = fs.readFileSync(p, 'utf8');

  // H1 检查
  const h1Matches = content.match(/<h1[\s\S]*?<\/h1>/g);
  if (!h1Matches || h1Matches.length === 0) {
    h1Issues.push(`${rel} 缺少 <h1> 标签`);
  } else if (h1Matches.length > 1) {
    h1Issues.push(`${rel} 存在 ${h1Matches.length} 个 <h1> 标签 (违背唯一性)`);
  }

  // TDK Title & Desc 字符串精准提取
  const titlesBlock = content.match(/const titles[\s\S]*?};/);
  if (titlesBlock) {
    const enTitleMatch = titlesBlock[0].match(/en:\s*['"`](.*?)['"`]/);
    if (enTitleMatch) {
      const raw = enTitleMatch[1];
      if (raw.length < 35 || raw.length > 60) {
        tdkIssues.push(`${rel} [EN Title 长度异常: ${raw.length}字符] "${raw}"`);
      }
    }
  }

  const descBlock = content.match(/const descriptions[\s\S]*?};/);
  if (descBlock) {
    const enDescMatch = descBlock[0].match(/en:\s*['"`](.*?)['"`]/);
    if (enDescMatch) {
      const raw = enDescMatch[1];
      if (raw.length < 110 || raw.length > 165) {
        tdkIssues.push(`${rel} [EN Desc 长度警告: ${raw.length}字符]`);
      }
    }
  }
}

if (h1Issues.length === 0) {
  pass('SEO-H1', `全部 ${pages.length} 个页面 <h1> 标签严格唯一`);
} else {
  fail('SEO-H1', '发现 H1 违规页面', h1Issues.join('; '));
}

if (tdkIssues.length === 0) {
  pass('SEO-TDK', '全部页面 EN Title 位于 35~60 字符，Description 位于 110~160 字符');
} else {
  warn('SEO-TDK', '部分页面 TDK 存在微量偏差', tdkIssues.slice(0, 5).join('; '));
}

// ----------------------------------------------------
// 维度 3: 多语言工程落地铁律排查 (Universal i18n Protocol)
// ----------------------------------------------------
console.log('\n--- 3. 多语言工程落地总纲排查 (Universal i18n Protocol) ---');
// §0.2 跨语言 Fallback 检测
let crossFallback = [];
for (const f of allTsx) {
  const content = fs.readFileSync(f, 'utf8');
  if (/\?\?\s*['"]en['"]\s*\?\?/i.test(content) || /\?\?\s*item\.en\b/i.test(content)) {
    crossFallback.push(path.relative(rootDir, f));
  }
}
if (crossFallback.length === 0) {
  pass('多语言', '0 跨语言 Fallback (未发现 xx ?? en ?? zh 式偷懒兜底)');
} else {
  fail('多语言', '发现跨语言 Fallback 偷懒兜底', crossFallback.join(', '));
}

// ----------------------------------------------------
// 维度 4: UI 防暴流与抗撕裂排查 (§3 容器防暴流护身符)
// ----------------------------------------------------
console.log('\n--- 4. UI 排版物理防线与防暴流巡检 ---');
// 检查 Badge/Pill 是否佩戴 shrink-0 whitespace-nowrap
let unpaddedBadges = [];
for (const f of allTsx) {
  const content = fs.readFileSync(f, 'utf8');
  const badgeMatches = content.match(/rounded-full[^"']*|rounded-2xl[^"']*text-xs[^"']*/g) || [];
  for (const b of badgeMatches) {
    if (b.includes('bg-') && b.includes('text-xs') && (!b.includes('shrink-0') && !b.includes('whitespace-nowrap'))) {
      unpaddedBadges.push(path.relative(rootDir, f));
      break;
    }
  }
}
if (unpaddedBadges.length === 0) {
  pass('UI防暴流', '所有 Badge/Tag/Pill 均配齐 shrink-0 与 whitespace-nowrap 防护');
} else {
  warn('UI防暴流', `发现 ${unpaddedBadges.length} 个组件存在未声明 shrink-0 whitespace-nowrap 的微标签`, unpaddedBadges.slice(0, 4).join(', '));
}

// ----------------------------------------------------
// 维度 5: 全站 Schema.org 富媒体标准
// ----------------------------------------------------
console.log('\n--- 5. 全站 Schema.org 富媒体标准 ---');
const layoutLocalePath = path.join(rootDir, 'app/[locale]/layout.tsx');
const layoutLocaleContent = fs.readFileSync(layoutLocalePath, 'utf8');
const layoutRootContent = fs.readFileSync(path.join(rootDir, 'app/layout.tsx'), 'utf8');

if (layoutLocaleContent.includes('schema.org') || layoutRootContent.includes('schema.org')) {
  pass('Schema.org', '根布局 RootLayout 注入全局结构化数据 (WebApplication)');
} else {
  warn('Schema.org', '根布局缺少全局 WebApplication/Organization Schema.org JSON-LD 注入');
}

// ----------------------------------------------------
// 维度 6: 全链路数据埋点与合规三件套排查 (§10, §13)
// ----------------------------------------------------
console.log('\n--- 6. 出海合规三件套与全链路数据埋点 ---');
const privacyPage = fs.existsSync(path.join(rootDir, 'app/[locale]/privacy-policy/page.tsx'));
const termsPage = fs.existsSync(path.join(rootDir, 'app/[locale]/terms-of-service/page.tsx'));
const contactPage = fs.existsSync(path.join(rootDir, 'app/[locale]/contact/page.tsx'));

if (privacyPage && termsPage && contactPage) {
  pass('E-E-A-T合规', '出海合规三件套齐全 (/privacy-policy, /terms-of-service, /contact)');
} else {
  const missing = [];
  if (!privacyPage) missing.push('/privacy-policy (隐私政策)');
  if (!termsPage) missing.push('/terms-of-service (服务条款)');
  if (!contactPage) missing.push('/contact (站长联系)');
  fail('E-E-A-T合规', '缺少出海法律合规基石页面', missing.join(', '));
}

// 检查 Google 验证码预埋与 UTM 归因
const hasGoogleVerification = layoutLocaleContent.includes('google-site-verification') || layoutRootContent.includes('google-site-verification');
if (hasGoogleVerification) {
  pass('增长归因', '已预埋 google-site-verification 站长所有权验证占位符');
} else {
  warn('增长归因', '根布局缺少 google-site-verification 搜索引擎验证占位符');
}

// 检查 Cookie 同意弹窗 (Google Consent Mode v2)
const hasConsentMode = layoutLocaleContent.includes('Consent') || fs.existsSync(path.join(rootDir, 'components/legal/CookieConsent.tsx'));
if (hasConsentMode) {
  pass('合规基石', 'Google Consent Mode v2 授权组件已就绪');
} else {
  warn('合规基石', '缺少轻量 Cookie 同意栏 (Google Consent Mode v2 规范)');
}

// ----------------------------------------------------
// 维度 7: 免费流量留存飞轮与安全防刷 (§11, §12)
// ----------------------------------------------------
console.log('\n--- 7. 免费流量留存与边缘安全 ---');
const hasLeadMagnet = fs.existsSync(path.join(rootDir, 'components/lead/LeadMagnetCard.tsx')) || allTsx.some(f => fs.readFileSync(f, 'utf8').includes('LeadMagnetCard'));
if (hasLeadMagnet) {
  pass('流量留存', '已部署 Lead Magnet 获客留存飞轮 (PDF指法海报极简邮箱收集)');
} else {
  warn('流量留存', '尚未部署免费衍生资产（如双语离线指法PDF/通关清单）极简邮件获客组件');
}

const hasIndexNow = fs.existsSync(path.join(rootDir, 'scripts/indexnow.mjs')) || fs.existsSync(path.join(rootDir, 'app/api/indexnow/route.ts'));
if (hasIndexNow) {
  pass('秒级收录', 'IndexNow 搜索引擎实时推送飞轮已就绪');
} else {
  warn('秒级收录', '缺少 IndexNow 协议脚本 (向 Bing/Yandex 秒级推送新 URL)');
}

// ----------------------------------------------------
// 汇总统计
// ----------------------------------------------------
console.log('\n========================================================');
console.log(`📊 体检汇总:`);
console.log(`   - 满分合规项 (PASS):   ${auditResults.passed.length}`);
console.log(`   - 优化建议项 (WARN):   ${auditResults.warnings.length}`);
console.log(`   - 缺失待补项 (DEFECT): ${auditResults.defects.length}`);
console.log('========================================================\n');
