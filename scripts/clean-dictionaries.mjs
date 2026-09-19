import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const files = [
  'messages/zh.json',
  'messages/en.json',
  'messages/de.json',
  'messages/ja.json',
];

for (const file of files) {
  const p = path.join(rootDir, file);
  let content = fs.readFileSync(p, 'utf8');

  // 通用品牌与缩写替换
  content = content.replace(/BSN\s*Lib/g, 'OboLib');
  content = content.replace(/BSN/g, 'OboLib');
  content = content.replace(/bsnlib\.com/g, 'obolib.com');

  if (file.endsWith('zh.json')) {
    content = content.replace(/巴松管/g, '双簧管');
    content = content.replace(/巴松/g, '双簧管');
    content = content.replace(/大管/g, '双簧管');
    content = content.replace(/倍低音大管/g, '英国管');
    content = content.replace(/次中音谱表/g, '高音谱表');
    content = content.replace(/低音谱表/g, '高音谱表');
    content = content.replace(/大管主旋律/g, '双簧管主旋律');
    content = content.replace(/Bassoon/g, 'Oboe');
    content = content.replace(/bassoon/g, 'oboe');
  } else if (file.endsWith('en.json')) {
    content = content.replace(/Contrabassoon/g, 'English Horn');
    content = content.replace(/contrabassoon/g, 'English horn');
    content = content.replace(/Bassoon/g, 'Oboe');
    content = content.replace(/bassoon/g, 'oboe');
    content = content.replace(/bass-clef/g, 'treble-clef');
    content = content.replace(/non-transposing bass instrument/g, 'non-transposing soprano woodwind instrument');
  } else if (file.endsWith('de.json')) {
    content = content.replace(/Kontrafagott/g, 'Englischhorn');
    content = content.replace(/kontrafagott/g, 'Englischhorn');
    content = content.replace(/Fagott/g, 'Oboe');
    content = content.replace(/fagott/g, 'Oboe');
    content = content.replace(/Bassoon/g, 'Oboe');
    content = content.replace(/bassoon/g, 'oboe');
    content = content.replace(/Bass-Schlüssel/g, 'Violinschlüssel');
  } else if (file.endsWith('ja.json')) {
    content = content.replace(/コントラファゴット/g, 'コーラングレ（イングリッシュホルン）');
    content = content.replace(/ファゴット/g, 'オーボエ');
    content = content.replace(/Bassoon/g, 'Oboe');
    content = content.replace(/bassoon/g, 'oboe');
    content = content.replace(/ヘ音記号/g, 'ト音記号');
  }

  fs.writeFileSync(p, content, 'utf8');
  console.log(`Cleaned: ${file}`);
}
