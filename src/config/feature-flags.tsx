/**
 * Feature Flag 工具函数
 * =====================
 * 基于 InstrumentConfig.features 提供类型安全的 Feature Gate 访问。
 * 在组件中用 useFeature() 条件渲染，不依赖 if/else 硬编码。
 *
 * 用法：
 *   const { check } = useFeature();
 *   if (!check('hasReedTool')) return null;
 */

import { InstrumentFeatureFlags } from './instrument.config';
import { getInstrumentConfig } from './instrument.config';

/**
 * 判断当前乐器站是否开启某个 Feature
 */
export function isFeatureEnabled(flag: keyof InstrumentFeatureFlags): boolean {
  const config = getInstrumentConfig();
  return config.features[flag] === true;
}

/**
 * 批量检查多个 Feature，全部满足才返回 true（AND 逻辑）
 */
export function allFeaturesEnabled(flags: Array<keyof InstrumentFeatureFlags>): boolean {
  return flags.every(isFeatureEnabled);
}

/**
 * 批量检查多个 Feature，任意一个满足返回 true（OR 逻辑）
 */
export function anyFeatureEnabled(flags: Array<keyof InstrumentFeatureFlags>): boolean {
  return flags.some(isFeatureEnabled);
}

/**
 * React Hook: 在组件中访问 Feature Flags
 *
 * @example
 * function ReedToolSection() {
 *   const { check } = useFeatures();
 *   if (!check('hasReedTool')) return null;
 *   return <ReedCalibrationTool />;
 * }
 */
export function useFeatures() {
  return {
    /** 检查单个 feature */
    check: isFeatureEnabled,
    /** 检查多个 feature（AND 逻辑） */
    all: allFeaturesEnabled,
    /** 检查多个 feature（OR 逻辑） */
    any: anyFeatureEnabled,
  };
}

/**
 * 高阶组件：按 Feature Flag 条件渲染
 *
 * @example
 * <FeatureGate flag="hasKidMode">
 *   <KidChallenge />
 * </FeatureGate>
 */
import React from 'react';

interface FeatureGateProps {
  flag: keyof InstrumentFeatureFlags;
  children: React.ReactNode;
  /** Feature 未开启时的降级渲染（可选） */
  fallback?: React.ReactNode;
}

export function FeatureGate({ flag, children, fallback = null }: FeatureGateProps) {
  if (!isFeatureEnabled(flag)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}

/**
 * 多 Feature AND 门控高阶组件
 *
 * @example
 * <AllFeaturesGate flags={['hasAI', 'hasMembership']}>
 *   <AIPremiumTools />
 * </AllFeaturesGate>
 */
interface AllFeaturesGateProps {
  flags: Array<keyof InstrumentFeatureFlags>;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AllFeaturesGate({ flags, children, fallback = null }: AllFeaturesGateProps) {
  if (!allFeaturesEnabled(flags)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}
