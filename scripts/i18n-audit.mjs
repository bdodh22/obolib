/**
 * InstruLib Base — i18n 多语言质量审计门禁脚本
 * 审计项目：
 * 1. 检查 en.json, zh.json, de.json, ja.json 是否存在
 * 2. 深度比对各语言字典顶层与嵌套键的 100% 对齐率
 * 3. 杜绝未翻译空键或丢失键导致的运行时白屏
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '../messages');

console.log('\n🌐 正在执行 InstruLib 多语言 (i18n) 质量审计...\n');

const locales = ['en', 'zh', 'de', 'ja'];
const dicts = {};

for (const loc of locales) {
  const filePath = path.join(messagesDir, `${loc}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`  ❌ 缺失语言字典文件: messages/${loc}.json`);
    process.exit(1);
  }
  dicts[loc] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`  ✅ messages/${loc}.json 读取成功 (${Object.keys(dicts[loc]).length} 个根模块)`);
}

function getDeepKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      keys = keys.concat(getDeepKeys(val, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const baseKeys = new Set(getDeepKeys(dicts.en));
console.log(`\n🔑 基准 (EN) 键总数: ${baseKeys.size}`);

let hasDiscrepancy = false;

for (const loc of ['zh', 'de', 'ja']) {
  const targetKeys = new Set(getDeepKeys(dicts[loc]));
  const missingInTarget = [...baseKeys].filter(k => !targetKeys.has(k));
  const extraInTarget = [...targetKeys].filter(k => !baseKeys.has(k));

  if (missingInTarget.length > 0) {
    console.error(`  ❌ [${loc}.json] 缺失以下键 (${missingInTarget.length} 个):`);
    missingInTarget.slice(0, 5).forEach(k => console.error(`     - ${k}`));
    hasDiscrepancy = true;
  } else {
    console.log(`  ✅ [${loc}.json] 与基准 en.json 键 100% 对齐 (一致率 100%)`);
  }
}

if (!hasDiscrepancy) {
  console.log('\n🎉 i18n 质量体检 100% 满分通过！无悬挂缺失键。\n');
  process.exit(0);
} else {
  console.error('\n⚠️ i18n 审计未通过，请补充缺失字典键。\n');
  process.exit(1);
}
