import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const NewsCard = ({ item, onClick }) => {
    const content = (
        <div className="bg-brand-gray border border-white/5 rounded-lg overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-lg h-full cursor-pointer">
            <div className="h-32 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white font-bold border border-white/10">
                    {item.category}
                </div>
            </div>
            <div className="p-4">
                <div className="text-brand-gold/60 text-[10px] mb-1 font-mono tracking-wider">{item.date}</div>
                <h3 className="text-white font-bold text-base mb-2 leading-tight font-serif group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
            </div>
        </div>
    );

    return (
        <ScrollReveal>
            {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
                    {content}
                </a>
            ) : (
                <div onClick={() => onClick && onClick(item)} className="h-full">
                    {content}
                </div>
            )}
        </ScrollReveal>
    );
};
