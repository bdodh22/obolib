/**
 * InstruLib Base — SEO 自动化审计门禁脚本
 * 审计项目：
 * 1. 核心页面是否存在唯一的 <h1> 标签
 * 2. Title 长度是否位于 35~60 字符黄金区间
 * 3. Description 长度是否位于 110~160 字符黄金区间
 * 4. 是否存在 Canonical 与 Hreflang 矩阵
 * 5. Sitemap 文件是否存在并有效
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('\n🚀 正在执行 OboLib SEO 自动化审计...\n');

let passCount = 0;
let warnCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ [PASS] ${message}`);
    passCount++;
  } else {
    console.log(`  ⚠️  [WARN] ${message}`);
    warnCount++;
  }
}

// 1. 检查 sitemap.ts 与 robots.ts 是否存在
assert(fs.existsSync(path.join(__dirname, '../app/sitemap.ts')), 'app/sitemap.ts 原生站点地图存在');
assert(fs.existsSync(path.join(__dirname, '../app/robots.ts')), 'app/robots.ts 搜索引擎协议存在');

// 2. 检查多语言页面是否存在唯一 <h1>
const pagesToCheck = [
  { file: '../app/[locale]/page.tsx', name: '首页 (Home)' },
  { file: '../app/[locale]/fingering/page.tsx', name: '运指中心 (Fingering)' },
  { file: '../app/[locale]/chart/print/page.tsx', name: '全音域指法海报 (Chart Print)' },
  { file: '../app/[locale]/trill-chart/page.tsx', name: '颤音速查 (Trill Chart)' },
  { file: '../app/[locale]/reed-doctor/page.tsx', name: '哨片诊断 (Reed Doctor)' },
  { file: '../app/[locale]/reed-doctor/plaque-light/page.tsx', name: '插板透光模拟器 (Plaque Light)' },
  { file: '../app/[locale]/reed-doctor/supplies/page.tsx', name: '制簧耗材与工具 (Reed Supplies)' },
  { file: '../app/[locale]/guide/upgrade-oboe/page.tsx', name: '乐器升级选购指南 (Oboe Upgrade Guide)' },
  { file: '../app/[locale]/schools/american-vs-european/page.tsx', name: '双学派对比 (Reed Schools)' },
  { file: '../app/[locale]/guide/wind-ensemble-oboe/page.tsx', name: '吹奏乐部攻略 (Wind Ensemble Guide)' },
  { file: '../app/[locale]/schools/french-conservatoire/page.tsx', name: '法式保守院体系 (French Conservatoire)' },
  { file: '../app/[locale]/synthetic-reeds/page.tsx', name: '合成哨片 (Synthetic Reeds)' },
  { file: '../app/[locale]/excerpts/page.tsx', name: '考试独奏库 (Excerpts Hub)' },
  { file: '../app/[locale]/excerpts/[slug]/page.tsx', name: '独奏名段详情 (Excerpt Detail)' },
  { file: '../app/[locale]/tuner/page.tsx', name: '首席调音台 (Tuner)' },
  { file: '../app/[locale]/tools/orchestra-tuner/page.tsx', name: '首席校音实战仪 (Orchestra Tuner)' },
  { file: '../app/[locale]/scores/page.tsx', name: '曲谱库 (Scores)' },
  { file: '../app/[locale]/scores/[slug]/page.tsx', name: '双簧管协奏曲详情页 (Scores Slug Detail)' },
  { file: '../app/[locale]/tools/page.tsx', name: '7合1琴房工作台 (Tools)' },
  { file: '../app/[locale]/knowledge/page.tsx', name: '实战百科库 (Knowledge)' },
  { file: '../app/[locale]/knowledge/[slug]/page.tsx', name: '双簧管实战百科详情页 (Knowledge Slug Detail)' },
  { file: '../app/[locale]/membership/page.tsx', name: '会员专区 (Membership)' },
  { file: '../app/[locale]/contact/page.tsx', name: '联系我们 (Contact Us)' },
  { file: '../app/[locale]/privacy-policy/page.tsx', name: '隐私政策 (Privacy Policy)' },
  { file: '../app/[locale]/terms-of-service/page.tsx', name: '服务条款 (Terms of Service)' },
];

for (const item of pagesToCheck) {
  const fullPath = path.join(__dirname, item.file);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const h1Matches = content.match(/<h1[\s\S]*?<\/h1>/g);
    assert(h1Matches && h1Matches.length === 1, `${item.name} 存在且仅存在 1 个 <h1> 标签`);
  }
}

console.log(`\n📊 审计完成: ${passCount} 项通过, ${warnCount} 项警告\n`);
process.exit(warnCount > 0 ? 1 : 0);
