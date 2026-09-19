/**
 * InstruLib Base — 应用入口
 * 挂载 React 应用 + i18n Provider
 */

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { I18nProvider, preloadTranslation, detectPreferredLocale } from './i18n';
import { getInstrumentConfig } from './config/instrument.config';
import App from './App';

const config = getInstrumentConfig();

async function bootstrap() {
  const preferredLocale = detectPreferredLocale();
  const translation = await preloadTranslation(preferredLocale);

  const rootEl = document.getElementById('root')!;
  const isSSR = rootEl.innerHTML.trim() !== '' && rootEl.innerHTML !== '<!--ssr-outlet-->';

  const tree = (
    <React.StrictMode>
      <I18nProvider initialLocale={preferredLocale} initialTranslation={translation}>
        <App />
      </I18nProvider>
    </React.StrictMode>
  );

  if (isSSR) {
    // SSR 注水模式
    hydrateRoot(rootEl, tree);
  } else {
    // CSR 模式（开发环境）
    createRoot(rootEl).render(tree);
  }
}

bootstrap();
