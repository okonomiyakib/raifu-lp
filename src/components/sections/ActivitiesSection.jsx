import React from 'react';
import { IconChevronRight } from '../ui/Icons';
import { ACTIVITIES_LINKS } from '../../data/constants';

export const ActivitiesSection = () => (
    <section className="px-6 pb-20 max-w-lg mx-auto">
        <div className="flex justify-between items-end mb-6 px-2">
            <div>
                <h2 className="text-xl font-serif text-white font-bold">Activities</h2>
                <p className="text-brand-gold text-xs tracking-widest">関連プロジェクト・活動</p>
            </div>
        </div>
        <div className="space-y-3">
            {ACTIVITIES_LINKS.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300 w-10 text-center">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white text-base font-bold leading-snug group-hover:text-brand-gold transition-colors mb-0.5 truncate">{link.title}</h3>
                        <p className="text-white/50 text-xs leading-snug break-words">{link.desc}</p>
                    </div>
                    <IconChevronRight className="text-white/20 group-hover:text-brand-gold group-hover:translate-x-1 transition-all ml-2" />
                </a>
            ))}
        </div>
    </section>
);
