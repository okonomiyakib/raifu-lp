import React from 'react';
import { NEWS_ITEMS } from '../../data/constants';
import { ScrollReveal } from '../ui/ScrollReveal';
import { IconChevronRight } from '../ui/Icons';

const categoryColors = {
    'EVENT': 'bg-wa-kurenai',
    'PROJECT': 'bg-wa-gold text-wa-kuro',
    'RECOMMEND': 'bg-emerald-600',
    'RECRUIT': 'bg-violet-600',
    'INFO': 'bg-white/60 text-wa-kuro',
    'BUSINESS': 'bg-amber-500 text-wa-kuro',
};

export const NewsSection = ({ onNewsClick }) => (
    <section id="info" className="px-4 py-8 max-w-[540px] mx-auto">
        <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-wa-kurenai to-wa-gold rounded-full"></div>
                <h2 className="font-western text-wa-gold text-lg tracking-[0.08em]">Info</h2>
                <span className="text-white/30 text-xs font-serif">お知らせ</span>
            </div>

            <div className="space-y-1.5">
                {NEWS_ITEMS.map(item => {
                    const inner = (
                        <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-[#3c1212]/60 border border-wa-kurenai/8 active:bg-[#4a1818] transition-colors group">
                            {/* サムネイル画像 */}
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>

                            {/* カテゴリバッジ */}
                            <span className={`shrink-0 text-[8px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase text-white ${categoryColors[item.category] || 'bg-white/20'}`}>
                                {item.category}
                            </span>

                            {/* テキスト */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white text-[13px] font-bold leading-tight truncate group-hover:text-wa-gold group-active:text-wa-gold transition-colors">{item.title}</h3>
                            </div>

                            {/* 矢印 */}
                            <IconChevronRight className="w-4 h-4 text-white/15 group-hover:text-wa-gold group-active:text-wa-gold shrink-0 transition-colors" />
                        </div>
                    );

                    return (
                        <div key={item.id}>
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block no-underline">
                                    {inner}
                                </a>
                            ) : (
                                <div onClick={() => onNewsClick && onNewsClick(item)} className="cursor-pointer">
                                    {inner}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </ScrollReveal>
    </section>
);
