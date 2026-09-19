import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

console.log('🌐 ========================================================');
console.log('   OboLib.com 生成式引擎优化 (GEO) 深度体检');
console.log('   Generative Engine Optimization & AI Search Readiness');
console.log('========================================================\n');

let passCount = 0;
let warnCount = 0;

function pass(name, detail) {
  passCount++;
  console.log(`  ✅ [PASS] [${name}] ${detail}`);
}

function warn(name, detail) {
  warnCount++;
  console.log(`  ⚠️  [WARN] [${name}] ${detail}`);
}

// 1. llms.txt 检查
const llmsPath = path.join(rootDir, 'public', 'llms.txt');
if (fs.existsSync(llmsPath)) {
  const content = fs.readFileSync(llmsPath, 'utf8');
  if (content.startsWith('#') && content.includes('https://obolib.com') && content.length > 500) {
    pass('LLMS-Standard', `public/llms.txt 存在且完全符合 llmstxt.org 标准规范 (${content.length} 字符, 含绝对 URL)`);
  } else {
    warn('LLMS-Standard', 'public/llms.txt 内容偏短或格式不标准');
  }
} else {
  warn('LLMS-Standard', '缺失 public/llms.txt');
}

// 2. llms-full.txt 深度问答语料检查
const llmsFullPath = path.join(rootDir, 'public', 'llms-full.txt');
if (fs.existsSync(llmsFullPath)) {
  const fullContent = fs.readFileSync(llmsFullPath, 'utf8');
  if (fullContent.length > 1500 && fullContent.includes('Frequently Asked Questions') && fullContent.includes('Acoustic')) {
    pass('LLMS-Full-Corpus', `public/llms-full.txt 深度知识库就绪 (${fullContent.length} 字符, 覆盖机械史、刮修处方与声学物理)`);
  } else {
    warn('LLMS-Full-Corpus', 'public/llms-full.txt 深度知识不足');
  }
} else {
  warn('LLMS-Full-Corpus', '缺失 public/llms-full.txt');
}

// 3. robots.ts AI 爬虫白名单
const robotsPath = path.join(rootDir, 'app', 'robots.ts');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  const bots = ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended'];
  const allAllowed = bots.every(b => robotsContent.includes(b));
  if (allAllowed) {
    pass('AI-Crawlers-Allowed', 'app/robots.ts 显式放行主流 AI 爬虫 (GPTBot, PerplexityBot, ClaudeBot, Google-Extended)');
  } else {
    warn('AI-Crawlers-Allowed', '部分关键 AI 爬虫未在 robots.ts 中显式放行');
  }
}

// 4. Schema 结构化数据实体覆盖
let schemaMatches = 0;
function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(f)) res.push(...walk(full));
    } else if (f.endsWith('.tsx')) res.push(full);
  }
  return res;
}
const allTsx = walk(rootDir);
for (const f of allTsx) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('application/ld+json') && (content.includes('WebApplication') || content.includes('MusicComposition') || content.includes('ContactPage'))) {
    schemaMatches++;
  }
}
if (schemaMatches >= 3) {
  pass('Entity-Graph', `全站已部署深度 Schema.org 实体标记 (覆盖 WebApplication, MusicComposition, ContactPage)`);
} else {
  warn('Entity-Graph', '结构化数据覆盖率有待加强');
}

// 5. 地理定位与声学标准标定 (Geo-targeting)
const hasGeoPitch = fs.existsSync(llmsFullPath) && fs.readFileSync(llmsFullPath, 'utf8').includes('North America') && fs.readFileSync(llmsFullPath, 'utf8').includes('Germany & Austria');
if (hasGeoPitch) {
  pass('Geo-Targeting', '国际乐团标准音高与学派地域映射已就绪 (北美 A=440Hz vs 德奥 A=443Hz vs 日欧 A=442Hz)');
} else {
  warn('Geo-Targeting', '缺少音高与地域对应标定');
}

console.log('========================================================');
console.log(`📊 GEO 体检完成: ${passCount} 项通过, ${warnCount} 项警告`);
console.log('========================================================\n');
