'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 px-6 text-center space-y-4 rounded-2xl bg-teal-50/60 border border-teal-200/80">
        <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-black text-slate-900">
            {isZh ? '留言已成功送达！' : isDe ? 'Nachricht erfolgreich gesendet!' : isJa ? 'メッセージを送信しました！' : 'Message Sent Successfully!'}
          </h4>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            {isZh
              ? '感谢您的来信。站长与声学团队已收到您的信息，承诺在 24 小时内回复至您的邮箱。'
              : isDe
              ? 'Vielen Dank. Wir antworten garantiert innerhalb von 24 Stunden per E-Mail an Sie.'
              : isJa
              ? 'お問い合わせありがとうございます。24時間以内に担当者より折り返しメールいたします。'
              : 'Thank you for getting in touch. We will reply to your email address within 24 hours.'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-teal-700 hover:text-teal-800 underline pt-2 block mx-auto"
        >
          {isZh ? '发送另一条留言' : 'Send another note'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      <div>
        <label className="font-bold text-slate-900 block mb-1.5">
          {isZh ? '您的姓名 / 称呼' : 'Your Name'}
        </label>
        <input
          type="text"
          required
          placeholder={isZh ? '例如：张同学 / 林首席' : 'e.g. Alex, Principal Oboist'}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-xs"
        />
      </div>

      <div>
        <label className="font-bold text-slate-900 block mb-1.5">
          {isZh ? '您的回复邮箱' : 'Your Email Address'}
        </label>
        <input
          type="email"
          required
          placeholder="name@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-xs"
        />
      </div>

      <div>
        <label className="font-bold text-slate-900 block mb-1.5">
          {isZh ? '主题分类' : 'Topic Category'}
        </label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-xs"
        >
          <option>{isZh ? '哨片制作与诊断求助' : 'Reed Making & Doctor Diagnosis'}</option>
          <option>{isZh ? '指法图解或乐谱勘误' : 'Fingering or Score Correction'}</option>
          <option>{isZh ? '乐器升级与品牌选型咨询' : 'Instrument Upgrade & Gear Inquiry'}</option>
          <option>{isZh ? '商业合作与学术赞助' : 'Business & Academic Partnership'}</option>
          <option>{isZh ? '其他事宜' : 'Other Inquiries'}</option>
        </select>
      </div>

      <div>
        <label className="font-bold text-slate-900 block mb-1.5">
          {isZh ? '详细信息' : 'Message Content'}
        </label>
        <textarea
          rows={4}
          required
          placeholder={isZh ? '请详细描述您的问题，我们将全力协助...' : 'Please describe your query in detail...'}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-xs"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition-all active:scale-[0.98] shadow-xs flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>{isZh ? '发送留言 (24小时内答复)' : 'Send Message (24h Guaranteed Reply)'}</span>
      </button>
    </form>
  );
}
