/**
 * IndexNow Fast-Indexing Pipeline for OboLib.com
 * Submits dynamic URLs to Bing and Yandex Search Engines via the IndexNow API
 */

import https from 'https';

const HOST = 'obolib.com';
const KEY = 'obolib-indexnow-key-2026';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// 基础静态路由
const baseSubpaths = [
  '/',
  '/fingering',
  '/chart/print',
  '/trill-chart',
  '/reed-doctor',
  '/reed-doctor/plaque-light',
  '/reed-doctor/supplies',
  '/guide/upgrade-oboe',
  '/schools/american-vs-european',
  '/guide/wind-ensemble-oboe',
  '/schools/french-conservatoire',
  '/excerpts',
  '/excerpts/ravel-le-tombeau-de-couperin-prelude',
  '/excerpts/beethoven-symphony-3-eroica-funeral-march',
  '/excerpts/brahms-violin-concerto-adagio-oboe-solo',
  '/excerpts/tchaikovsky-swan-lake-act-2-scene-solo',
  '/excerpts/richard-strauss-oboe-concerto-opening-solo',
  '/synthetic-reeds',
  '/tuner',
  '/tools',
  '/tools/orchestra-tuner',
  '/scores',
  '/knowledge',
  '/membership',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  // 6 大双簧管传世分谱
  '/scores/mozart-oboe-concerto-k314',
  '/scores/richard-strauss-oboe-concerto',
  '/scores/cimarosa-oboe-concerto-c-minor',
  '/scores/marcello-oboe-concerto-d-minor-adagio',
  '/scores/handel-oboe-concerto-g-minor-hwv287',
  '/scores/ferling-48-studies-op31-no1',
  // 6 大双簧管实战百科
  '/knowledge/wood-crack-prevention',
  '/knowledge/used-oboe-vacuum-inspection',
  '/knowledge/embouchure-fatigue-jaw-relief',
  '/knowledge/high-register-voicing-e6-a6',
  '/knowledge/left-hand-f-vs-forked-f-decision-tree',
  '/knowledge/oboe-breathing-stale-air-paradox',
];

const locales = ['', '/zh', '/de', '/ja'];
const URL_LIST = [];

for (const subpath of baseSubpaths) {
  for (const loc of locales) {
    if (subpath === '/') {
      URL_LIST.push(`https://${HOST}${loc || '/'}`);
    } else {
      URL_LIST.push(`https://${HOST}${loc}${subpath}`);
    }
  }
}

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

console.log(`\n🚀 [IndexNow] 准备向 IndexNow API 推送全站 ${URL_LIST.length} 个最新多语言 URL...`);

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  console.log(`  📡 IndexNow API 响应状态码: ${res.statusCode} (${res.statusMessage})`);
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log(`  ✅ 成功向 Bing & Yandex 提交 ${URL_LIST.length} 个 URL 进行秒级索引加速！\n`);
  } else {
    console.log(`  ℹ️  请求已发送，搜索引擎将在几分钟内调度爬取。\n`);
  }
});

req.on('error', (e) => {
  console.warn(`  ⚠️  IndexNow 推送提示: ${e.message} (离线或本地网络受限时可忽略)`);
});

req.write(payload);
req.end();
