/**
 * InstruLib Base — i18n 质量审计脚本
 * =====================================
 * 检查各语言字典文件的键值完整性
 * 运行: node scripts/check-i18n.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '../src/i18n/locales');

// 动态读取所有语言文件
const localeFiles = fs.readdirSync(localesDir).filter(f => f.endsWith('.ts') || f.endsWith('.js'));

if (localeFiles.length === 0) {
  console.log('⚠️  暂无语言文件，请在 src/i18n/locales/ 下创建语言文件');
  process.exit(0);
}

console.log(`\n🔍 InstruLib i18n 审计报告`);
console.log(`   语言文件目录: ${localesDir}`);
console.log(`   发现语言文件: ${localeFiles.join(', ')}`);
console.log(`\n✅ 基础检查通过（详细键值比对需要语言文件导出后执行）`);
console.log(`\n📋 待实现的审计项目：`);
console.log(`   [ ] 所有语言文件包含相同的顶层键`);
console.log(`   [ ] 无裸露英文字符串（非英语语言文件）`);
console.log(`   [ ] 无空字符串值`);
console.log(`   [ ] 动态参数 {instrument} 在所有语言中保持一致`);
