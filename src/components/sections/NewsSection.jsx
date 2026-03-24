import React from 'react';
import { NEWS_ITEMS } from '../../data/constants';
import { ScrollReveal } from '../ui/ScrollReveal';
import { IconChevronRight } from '../ui/Icons';

const categoryColors = {
    'EVENT': 'bg-red-600',
    'PROJECT': 'bg-red-500',
    'RECOMMEND': 'bg-emerald-500',
    'RECRUIT': 'bg-violet-500',
    'INFO': 'bg-white/30',
    'BUSINESS': 'bg-amber-500',
};

export const NewsSection = ({ onNewsClick }) => (
    <section id="info" className="px-4 sm:px-6 py-8 mx-auto">
        <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-4">
                <div className="w-[3px] h-6 bg-gradient-to-b from-red-400 to-transparent rounded-full shadow-[0_0_8px_rgba(255,80,80,0.3)]"></div>
                <h2 className="font-display text-[#ff8a8a] text-lg tracking-[0.12em] uppercase">Info</h2>
                <span className="text-white/35 text-xs">お知らせ</span>
            </div>

            <div className="space-y-1.5">
                {NEWS_ITEMS.map(item => {
                    const inner = (
                        <div className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06] active:bg-white/[0.08] transition-all group">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <span className={`shrink-0 text-[8px] font-bold px-2 py-0.5 rounded-md tracking-wider uppercase text-white font-display ${categoryColors[item.category] || 'bg-white/20'}`}>
                                {item.category}
                            </span>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white/85 text-[13px] font-medium leading-tight truncate group-hover:text-red-300 transition-colors">{item.title}</h3>
                            </div>
                            <IconChevronRight className="w-4 h-4 text-white/15 group-hover:text-red-400 shrink-0 transition-all group-hover:translate-x-0.5" />
                        </div>
                    );
                    return (
                        <div key={item.id}>
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block no-underline">{inner}</a>
                            ) : (
                                <div onClick={() => onNewsClick && onNewsClick(item)} className="cursor-pointer">{inner}</div>
                            )}
                        </div>
                    );
                })}
            </div>
        </ScrollReveal>
    </section>
);
