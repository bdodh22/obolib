# OboLib.com 🎵 双簧管数字化工作台与学术变现枢纽

> **官方域名**：[OboLib.com](https://obolib.com)  
> **站长直联**：`admin@obolib.com`（承诺 24 小时内必答复）  
> **工程全景**：Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Web Audio + SVG + 114 个多语言 SSG 静态预渲染页面  
> **经验总结**：详见核心复盘报告 [docs/DEVELOPMENT_RETROSPECTIVE.md](file:///e:/obolib/docs/DEVELOPMENT_RETROSPECTIVE.md)

---

## 🌟 核心功能矩阵 (Phase 1 ~ Phase 5 全量落地)

1. **全音域指法交互图与 A4 极清海报** (`/` & `/fingering` & `/chart/print`)
   - 覆盖低音 Bb3 到极高音 A6 的矢量管体，还原食指半孔（Half-hole）三态裂隙与 3 个八度键、左手 F、分叉 F 联动。
   - CSS `@media print` 矢量渲染，免登录一键打印或导出 300DPI 极清 PDF。
2. **半音与全音颤音速查表** (`/trill-chart`)
   - 动态 SVG 脉冲高亮抖动键，内置 6Hz 物理颤音声学发生器。
3. **哨片诊断室与插板逆光透光刮修模拟器** (`/reed-doctor` & `/reed-doctor/plaque-light`)
   - Tip/Heart/Spine/Back/Staple 解剖级分析与处方，黑曜石插板逆光透光阴影与微米厚度音分计算。
4. **交响乐团 5 大考团独奏名段工作台** (`/excerpts` & `/excerpts/[slug]`)
   - 逐音五线谱高亮跟踪与管体指法实时联动（拉威尔、贝多芬、勃拉姆斯、柴可夫斯基、理查·施特劳斯）。
5. **首席校音实战仪与纯净长音伴奏** (`/tools/orchestra-tuner` & `/tuner`)
   - 15 秒管弦交替倒计时仪式感，麦克风自相关算法实时测算 ±3 音分稳定度。
6. **制簧耗材选购与木管升级指南** (`/reed-doctor/supplies` & `/guide/upgrade-oboe`)
   - 工业级削尖机、刨床、刮刀、软木管选购指南，Lorée / Marigaux / Yamaha 旗舰双簧管评测。
7. **全球学派对垒与吹奏乐部攻略** (`/schools/american-vs-european` & `/guide/wind-ensemble-oboe` & `/schools/french-conservatoire`)
   - 美式长刮 vs 欧式短刮对比、全日本吹奏乐大赛 3kHz 独唱家共振峰和声穿透技巧、巴黎音乐学院保守院体系历史文献。
8. **出海合规三件套与获客飞轮** (`/contact` & `/privacy-policy` & `/terms-of-service`)
   - 站长 24 小时答复承诺、GDPR/CCPA 麦克风音频纯本地计算声明、Lead Magnet A4 指法海报极简邮箱收集飞轮。

---

## 🛡️ 上线工程门禁规范

开发与迭代需依次通过四大自动化门禁：

```bash
# 1. 出海独立站 13 维规范全量体检
node scripts/audit-global-spec.mjs

# 2. 多语言质量与 553 词条键全量对齐体检
node scripts/i18n-audit.mjs

# 3. 全站核心页面单一 <h1> 与 SEO 结构体检
node scripts/seo-audit.mjs

# 4. 生产环境全量编译构建 (114 个多语言 SSG 页面预渲染)
npm run build
```

---

## 📚 详细经验总结与技术复盘

请查阅专属归档文档：  
👉 [**全周期研发经验与出海工程总结报告 (DEVELOPMENT_RETROSPECTIVE.md)**](file:///e:/obolib/docs/DEVELOPMENT_RETROSPECTIVE.md)
- 架构设计与 RSC First 边界实践
- SVG 矢量半孔裂隙与 Web Audio 共振峰算法攻坚
- 553 键多语言 0 跨语言兜底策略
- 踩坑复盘：RSC 表单事件处理、Title 字符膨胀、Tailwind 容器防暴流加固
