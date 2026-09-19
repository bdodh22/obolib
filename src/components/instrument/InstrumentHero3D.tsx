/**
 * InstruLib Base — 通用 3D 乐器 Hero 组件
 * ==========================================
 * 从 BSNLib BassoonHero3D.tsx 提炼，完全配置驱动：
 * - 3D 模型路径从 config.model3D.path 读取
 * - 品牌渐变色从 config.theme.heroGradient 读取
 * - 模型缩放/旋转/相机距离从 config.model3D 读取
 * - Feature Flag: has3DModel 为 false 时渲染 SVG 插图降级
 *
 * 依赖：@react-three/fiber, @react-three/drei, three
 */

'use client';

import React, { Suspense, useRef } from 'react';
import { useI18n } from '../../i18n';
import { getInstrumentConfig } from '../../config/instrument.config';
import { isFeatureEnabled } from '../../config/feature-flags';

// Three.js / React Three Fiber 按需导入（大体积，懒加载）
// 注意：实际使用时解除注释
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// ── 3D 模型子组件 ──────────────────────────────────────────
// function InstrumentModel() {
//   const config = getInstrumentConfig();
//   const { scene } = useGLTF(config.model3D!.path);
//   const modelRef = useRef<THREE.Group>(null);
//
//   useFrame((state) => {
//     if (modelRef.current && config.model3D!.autoRotate) {
//       modelRef.current.rotation.y += config.model3D!.autoRotateSpeed * 0.01;
//     }
//   });
//
//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={config.model3D!.scale}
//       rotation={config.model3D!.initialRotation}
//     />
//   );
// }

// ── Hero 主组件 ───────────────────────────────────────────

interface InstrumentHero3DProps {
  onCTAClick?: () => void;
  ctaLabel?: string;
}

export default function InstrumentHero3D({ onCTAClick, ctaLabel }: InstrumentHero3DProps) {
  const config = getInstrumentConfig();
  const { t, locale } = useI18n();
  const has3D = isFeatureEnabled('has3DModel') && !!config.model3D;

  return (
    <section
      className={`relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br ${config.theme.heroGradient}`}
    >
      {/* ── 背景环境光晕 ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: config.theme.primary }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: config.theme.accent }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* ── 左侧文案 ── */}
        <div className="space-y-6">
          {/* 品牌徽章 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: config.theme.primaryLight }}
            />
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest shrink-0 whitespace-nowrap">
              {config.brandName}
            </span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {t.home.heroTitle.replace('{instrument}', config.name[locale])}
          </h1>

          {/* 副标题 */}
          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            {t.home.heroDescription.replace('{instrument}', config.name[locale])}
          </p>

          {/* CTA 按钮组 */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onCTAClick}
              className="px-6 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ backgroundColor: config.theme.primary }}
            >
              {ctaLabel ?? t.nav.heroCta}
            </button>
            <button
              className="px-6 py-3.5 rounded-2xl font-bold text-sm text-white/90 bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              {t.common.btnLearnMore}
            </button>
          </div>

          {/* 信任数据 */}
          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { label: t.home.statsUsers, value: '50K+' },
              { label: t.home.statsCountries, value: '30+' },
              { label: t.home.statsScores, value: '100+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-xs text-white/60 mt-0.5 whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 右侧 3D 模型 / 降级插图 ── */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          {has3D ? (
            // 3D Canvas（实际使用时取消注释并导入 Three.js）
            <div className="w-full h-[450px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
              {/*
              <Canvas
                camera={{
                  position: [0, 0, config.model3D!.cameraDistance],
                  fov: 45,
                }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                  <InstrumentModel />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} />
              </Canvas>
              */}
              {/* 占位：3D 模型待接入 */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white/30 text-center space-y-3">
                  <div className="text-6xl">🎵</div>
                  <p className="text-sm font-medium">
                    3D Model: {config.model3D?.path}
                  </p>
                  <p className="text-xs opacity-60">接入 Three.js 后显示</p>
                </div>
              </div>
            </div>
          ) : (
            // 无 3D 模型时的插图降级
            <div className="w-full h-[400px] rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="text-white/40 text-center space-y-2">
                <div className="text-8xl">🎼</div>
                <p className="text-sm">{config.name[locale]}</p>
              </div>
            </div>
          )}

          {/* 浮动功能卡片装饰 */}
          <div className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: config.theme.primaryLight }}
            />
            <span className="text-white text-xs font-semibold whitespace-nowrap">
              {t.home.cardFingeringTitle}
            </span>
          </div>

          <div className="absolute -bottom-4 -left-4 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-white text-xs font-semibold whitespace-nowrap">
              {t.home.cardAITitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
