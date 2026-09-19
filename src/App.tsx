/**
 * InstruLib Base — 根 App 组件
 * ================================
 * 按 InstrumentConfig.features 条件组装各功能页面。
 * 新乐器站不修改此文件，通过修改 config 控制路由和模块。
 */

import React, { useState } from 'react';
import { useI18n } from './i18n';
import { getInstrumentConfig } from './config/instrument.config';
import { FeatureGate } from './config/feature-flags';
import Navigation from './components/shared/Navigation';
import InstrumentHero3D from './components/instrument/InstrumentHero3D';

// 懒加载各功能页面（减少首屏 bundle 体积）
const FingeringPage     = React.lazy(() => import('./pages/FingeringPage'));
const ScoresPage        = React.lazy(() => import('./pages/ScoresPage'));
const ToolsPage         = React.lazy(() => import('./pages/ToolsPage'));
const KnowledgePage     = React.lazy(() => import('./pages/KnowledgePage'));
const AIPage            = React.lazy(() => import('./pages/AIPage'));
const KidPage           = React.lazy(() => import('./pages/KidPage'));
const MembershipPage    = React.lazy(() => import('./pages/MembershipPage'));
const AdminPage         = React.lazy(() => import('./pages/AdminPage'));

type Tab = string;

export default function App() {
  const config = getInstrumentConfig();
  const { t } = useI18n();
  const [currentTab, setCurrentTab] = useState<Tab>('home');

  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return (
          <main>
            <InstrumentHero3D onCTAClick={() => setCurrentTab('fingering')} />
            {/* TODO: 首页功能卡片区、知识预览、FAQ 等模块 */}
          </main>
        );
      case 'fingering':
        return (
          <FeatureGate
            flag={
              config.features.hasFingeringSystem
                ? 'hasFingeringSystem'
                : config.features.hasSlidePosition
                ? 'hasSlidePosition'
                : 'hasStringDiagram'
            }
          >
            <React.Suspense fallback={<PageLoader />}>
              <FingeringPage />
            </React.Suspense>
          </FeatureGate>
        );
      case 'scores':
        return (
          <React.Suspense fallback={<PageLoader />}>
            <ScoresPage />
          </React.Suspense>
        );
      case 'tools':
        return (
          <React.Suspense fallback={<PageLoader />}>
            <ToolsPage />
          </React.Suspense>
        );
      case 'knowledge':
        return (
          <React.Suspense fallback={<PageLoader />}>
            <KnowledgePage />
          </React.Suspense>
        );
      case 'ai':
        return (
          <FeatureGate flag="hasAI">
            <React.Suspense fallback={<PageLoader />}>
              <AIPage />
            </React.Suspense>
          </FeatureGate>
        );
      case 'kid':
        return (
          <FeatureGate flag="hasKidMode">
            <React.Suspense fallback={<PageLoader />}>
              <KidPage />
            </React.Suspense>
          </FeatureGate>
        );
      case 'membership':
        return (
          <FeatureGate flag="hasMembership">
            <React.Suspense fallback={<PageLoader />}>
              <MembershipPage />
            </React.Suspense>
          </FeatureGate>
        );
      case 'admin':
        return (
          <FeatureGate flag="hasAdminConsole">
            <React.Suspense fallback={<PageLoader />}>
              <AdminPage />
            </React.Suspense>
          </FeatureGate>
        );
      default:
        return <main className="flex items-center justify-center min-h-screen text-slate-400">404</main>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation currentTab={currentTab} onTabChange={setCurrentTab} />
      <div className="flex-1 pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-slate-600 animate-spin" />
    </div>
  );
}
