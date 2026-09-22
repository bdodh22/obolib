/**
 * 全链路数据埋点与增长归因标准模块 (Indie Site Analytics & Attribution)
 * 遵循《独立站全局开发规范》第 5 节：
 * 1. 统一事件字典：search_query, tool_calculate, lead_capture_submit, outbound_click
 * 2. UTM 渠道参数跨页会话持久化 (SessionStorage)
 */

export type AnalyticsEventType =
  | 'search_query'
  | 'tool_calculate'
  | 'lead_capture_submit'
  | 'outbound_click';

export interface AnalyticsEventParams {
  query?: string;
  tool_name?: string;
  lead_type?: string;
  email?: string;
  url?: string;
  target_domain?: string;
  locale?: string;
  [key: string]: unknown;
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  captured_at?: string;
}

const UTM_STORAGE_KEY = 'obolib_utm_attribution';

/**
 * 捕获并持久化 URL 中的 UTM 参数至 sessionStorage
 */
export function captureAndPersistUtm(): UtmParams | null {
  if (typeof window === 'undefined') return null;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    if (utmSource || utmMedium || utmCampaign) {
      const utmData: UtmParams = {
        utm_source: utmSource || undefined,
        utm_medium: utmMedium || undefined,
        utm_campaign: utmCampaign || undefined,
        utm_term: urlParams.get('utm_term') || undefined,
        utm_content: urlParams.get('utm_content') || undefined,
        captured_at: new Date().toISOString(),
      };

      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      return utmData;
    }

    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

/**
 * 获取当前已保存的 UTM 归因参数
 */
export function getStoredUtm(): UtmParams | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

/**
 * 触发全站统一事件埋点
 */
export function trackEvent(eventType: AnalyticsEventType, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined') return;

  const utmData = getStoredUtm();
  const payload = {
    event: eventType,
    timestamp: new Date().toISOString(),
    pathname: window.location.pathname,
    ...params,
    attribution: utmData,
  };

  // 1. 本地安全控制台输出（开发环境与审查审计）
  if (process.env.NODE_ENV !== 'production') {
    console.info(`[Analytics] 📊 Event: ${eventType}`, payload);
  }

  // 2. 如果存在 window.gtag (Google Analytics / Ads)，向其分发事件
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
  if (typeof w.gtag === 'function') {
    w.gtag('event', eventType, payload);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push(payload);
  }

  // 3. 记录到本地事件缓冲（保证无外部脚本时也可供调试）
  try {
    const recentEvents = JSON.parse(localStorage.getItem('obolib_recent_events') || '[]');
    recentEvents.push({ type: eventType, time: Date.now() });
    if (recentEvents.length > 50) recentEvents.shift();
    localStorage.setItem('obolib_recent_events', JSON.stringify(recentEvents));
  } catch {}
}
