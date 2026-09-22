'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { captureAndPersistUtm } from '@/lib/analytics';

/**
 * 轻量 UTM 渠道归因客户端挂载器
 * 在路由变化或带 query 访问时，自动持久化 utm_source, utm_medium, utm_campaign 至 sessionStorage
 */
export default function UtmTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    captureAndPersistUtm();
  }, [pathname, searchParams]);

  return null;
}
