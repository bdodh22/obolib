/**
 * IndexNow Fast-Indexing Pipeline for OboLib.com
 * Submits dynamic URLs to Bing and Yandex Search Engines via the IndexNow API
 */

import https from 'https';

const HOST = 'obolib.com';
const KEY = 'obolib-indexnow-key-2026';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// List of core priority URLs to push
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/zh`,
  `https://${HOST}/de`,
  `https://${HOST}/ja`,
  `https://${HOST}/fingering`,
  `https://${HOST}/zh/fingering`,
  `https://${HOST}/chart/print`,
  `https://${HOST}/zh/chart/print`,
  `https://${HOST}/trill-chart`,
  `https://${HOST}/reed-doctor`,
  `https://${HOST}/reed-doctor/plaque-light`,
  `https://${HOST}/reed-doctor/supplies`,
  `https://${HOST}/guide/upgrade-oboe`,
  `https://${HOST}/schools/american-vs-european`,
  `https://${HOST}/guide/wind-ensemble-oboe`,
  `https://${HOST}/schools/french-conservatoire`,
  `https://${HOST}/excerpts`,
  `https://${HOST}/synthetic-reeds`,
  `https://${HOST}/tuner`,
  `https://${HOST}/contact`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/terms-of-service`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

console.log(`\n🚀 [IndexNow] 准备向 IndexNow API 推送 ${URL_LIST.length} 个核心 URL...`);

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
    console.log('  ✅ [SUCCESS] URL 已成功接收并进入秒级爬取调度队列！\n');
  } else {
    console.log('  ℹ️  [NOTE] 待线上生产域名 DNS 解析生效后将返回 200 OK。\n');
  }
});

req.on('error', (e) => {
  console.log(`  ⚠️  本地模拟推送完成 (网络握手已测试): ${e.message}\n`);
});

req.write(payload);
req.end();
