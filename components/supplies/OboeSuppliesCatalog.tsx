'use client';

import React, { useState } from 'react';
import { Sparkles, Check, ExternalLink, ShieldCheck, Wrench, Search, Filter } from 'lucide-react';
import { OBOE_SUPPLIES, OboeSupplyItem } from '@/data/oboeSuppliesData';

interface OboeSuppliesCatalogProps {
  locale: string;
}

export default function OboeSuppliesCatalog({ locale }: OboeSuppliesCatalogProps) {
  const isZh = locale === 'zh';
  const isDe = locale === 'de';
  const isJa = locale === 'ja';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isZh ? '全部器材' : isDe ? 'Alle' : isJa ? 'すべて' : 'All Gear' },
    { id: 'machine', label: isZh ? '精密刨削机' : isDe ? 'Hobelmaschinen' : isJa ? 'マシン・加工機' : 'Machines' },
    { id: 'knife', label: isZh ? '专业刮刀' : isDe ? 'Messer' : isJa ? 'リードナイフ' : 'Knives' },
    { id: 'shaper', label: isZh ? '定型模具' : isDe ? 'Fassonformen' : isJa ? 'シェーパー' : 'Shapers' },
    { id: 'dial', label: isZh ? '微米测厚仪' : isDe ? 'Uhrenmessgeräte' : isJa ? '厚み測定器' : 'Dial Gauges' },
    { id: 'cane-staple', label: isZh ? '铜管与苇料' : isDe ? 'Hülsen & Holz' : isJa ? 'チューブ＆材料' : 'Cane & Staples' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? OBOE_SUPPLIES
    : OBOE_SUPPLIES.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold shrink-0 whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Equipment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              {/* Header tags */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg">
                  {item.brand}
                </span>
                <span className="font-mono text-emerald-700 font-black bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {item.priceRange}
                </span>
              </div>

              {/* Title & Rating */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                  <span>{item.rating}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-sans text-[11px] uppercase tracking-wide">
                    {item.targetLevel}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {isZh ? item.name.zh : isDe ? item.name.de : isJa ? item.name.ja : item.name.en}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {isZh ? item.description.zh : isDe ? item.description.de : isJa ? item.description.ja : item.description.en}
              </p>

              {/* Key Pros */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                  {isZh ? '核心亮点 (Highlights)' : 'Key Advantages'}
                </span>
                <ul className="space-y-1.5">
                  {(isZh ? item.pros.zh : isDe ? item.pros.de : isJa ? item.pros.ja : item.pros.en).map((pro, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buying Advice Note & Action */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl whitespace-nowrap shrink-0 bg-slate-50 border border-slate-200/60 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {isZh ? '💡 选购避坑指南' : '💡 Buying Advice'}
                </span>
                <p className="leading-relaxed text-[11px]">
                  {isZh ? item.buyingAdvice.zh : isDe ? item.buyingAdvice.de : isJa ? item.buyingAdvice.ja : item.buyingAdvice.en}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>{isZh ? '正品行货验证' : 'Verified Gear'}</span>
                </span>
                <span className="font-mono text-[11px] text-teal-700 font-bold">
                  {isZh ? '欧洲直邮通道' : 'EU/US Direct'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
