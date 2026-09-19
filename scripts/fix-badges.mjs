import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();

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

const files = walk(rootDir);
let count = 0;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  let matched = false;
  
  const replaced = content.replace(/(className=["'][^"']*(?:rounded-full|rounded-2xl)[^"']*)/g, (match) => {
    if (match.includes('bg-') && match.includes('text-xs') && (!match.includes('shrink-0') || !match.includes('whitespace-nowrap'))) {
      matched = true;
      let m = match;
      if (!m.includes('shrink-0')) {
        m = m.replace(/(rounded-full|rounded-2xl)/, '$1 shrink-0');
      }
      if (!m.includes('whitespace-nowrap')) {
        m = m.replace(/(rounded-full|rounded-2xl)/, '$1 whitespace-nowrap');
      }
      return m;
    }
    return match;
  });

  if (matched && replaced !== content) {
    fs.writeFileSync(f, replaced, 'utf8');
    count++;
    console.log('Fixed:', path.relative(rootDir, f));
  }
}

console.log(`Total files updated: ${count}`);
