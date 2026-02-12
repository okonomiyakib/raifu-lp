import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const NewsCard = ({ item, onClick }) => {
    const categoryColors = {
        'EVENT': 'bg-wa-kurenai text-white',
        'PROJECT': 'bg-wa-gold text-wa-kuro',
        'RECOMMEND': 'bg-emerald-600 text-white',
        'RECRUIT': 'bg-violet-600 text-white',
        'INFO': 'bg-white/80 text-wa-kuro',
        'BUSINESS': 'bg-amber-500 text-wa-kuro',
    };

    const content = (
        <div className="card h-full group">
            <div className="h-32 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-wa-card/80 to-transparent"></div>
                <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase ${categoryColors[item.category] || 'bg-white/20 text-white'}`}>
                    {item.category}
                </div>
            </div>
            <div className="p-3.5">
                <div className="text-wa-gold text-[10px] mb-1 font-western tracking-wider font-bold">{item.date}</div>
                <h3 className="text-white font-bold text-[13px] mb-1.5 leading-snug font-serif group-hover:text-wa-gold transition-colors">{item.title}</h3>
                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">{item.desc}</p>
            </div>
        </div>
    );

    return (
        <ScrollReveal>
            {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">{content}</a>
            ) : (
                <div onClick={() => onClick && onClick(item)} className="h-full">{content}</div>
            )}
        </ScrollReveal>
    );
};
