import React from 'react';
import { NEWS_ITEMS } from '../../data/constants';
import { NewsCard } from '../ui/NewsCard';

export const NewsSection = ({ onNewsClick }) => (
    <section className="px-5 py-8 max-w-lg mx-auto relative z-10 bg-gradient-to-b from-red-950/90 via-red-900/50 to-transparent pt-6 backdrop-blur-sm -mt-4">
        <div className="flex justify-between items-end mb-8 pt-4 border-t border-white/10">
            <div>
                <h2 className="text-2xl font-serif text-white font-bold">INFO</h2>
                <p className="text-brand-gold text-xs tracking-widest">お店からのお知らせ</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {NEWS_ITEMS.map(item => <NewsCard key={item.id} item={item} onClick={onNewsClick} />)}
        </div>
    </section>
);
