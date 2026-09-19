'use client';

import React, { useState } from 'react';
import { Download, Mail, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

interface LeadMagnetCardProps {
  locale: Locale;
}

export default function LeadMagnetCard({ locale }: LeadMagnetCardProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      try {
        localStorage.setItem('obolib_lead_captured', email);
      } catch {}
    }, 600);
  };

  return (
    <div className="w-full bg-gradient-to-br from-teal-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-teal-700/50 shadow-xl relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>{isZh ? '免费高价值学术礼包' : 'Free Master Toolkit Download'}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            {isZh
              ? '获取 300DPI 极清指法海报 PDF 与离线自查清单'
              : isDe
              ? 'Kostenloses 300DPI Grifftabellen-PDF & Checkliste'
              : isJa
              ? '300DPI 印刷用オーボエ運指ポスターPDF＆自習リスト'
              : 'Download Printable 300DPI Poster PDF & Audition Checklist'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isZh
              ? '专为琴房与排练室打印优化的矢量 A4 指法海报，包含食指半孔剖面图、左手 F 辅助键与首席校音标准。输入邮箱，即刻为您生成专属免登录下载凭证。'
              : 'Vector A4 chart optimized for music stands with half-hole vent details and audition checklist. Enter your email for instant access.'}
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-4 rounded-2xl whitespace-nowrap shrink-0 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-xs flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
            <div>
              <span className="font-bold block">
                {isZh ? '下载凭证已就绪！' : 'Download Link Ready!'}
              </span>
              <span className="text-[11px] opacity-90">
                {isZh
                  ? '已将高分辨率 PDF 链接同步至您的邮箱。您也可以点击页面顶部的“全音域指法海报”直接按 Ctrl+P 免登录打印。'
                  : 'Your high-res PDF has been confirmed. You can also print directly from our Chart Print tool.'}
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isZh ? '输入您的常用邮箱...' : 'Enter your email...'}
                className="w-full pl-10 pr-4 py-3 rounded-2xl whitespace-nowrap shrink-0 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-teal-400 focus:bg-white/15 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-[0.98] shadow-md shrink-0 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{status === 'loading' ? (isZh ? '生成中...' : 'Generating...') : (isZh ? '立即免费获取' : 'Get Free PDF')}</span>
            </button>
          </form>
        )}

        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{isZh ? '严格遵守隐私协议 · 0 垃圾邮件' : 'Strictly Zero Spam Guarantee'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
