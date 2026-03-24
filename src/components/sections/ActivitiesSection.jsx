import React from 'react';
import { IconChevronRight } from '../ui/Icons';
import { ACTIVITIES_LINKS } from '../../data/constants';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ActivitiesSection = () => (
    <section className="px-4 sm:px-6 py-10 mx-auto">
        <ScrollReveal>
            <div className="section-header">
                <div className="shu-accent"></div>
                <div className="title-group">
                    <span className="title-en">Activities</span>
                    <span className="title-jp">関連プロジェクト・活動</span>
                </div>
            </div>

            <div className="space-y-3">
                {ACTIVITIES_LINKS.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="card flex items-center p-4 group">
                        <div className="text-2xl mr-3 group-hover:scale-110 transition-transform w-8 text-center">{link.icon}</div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white/85 font-medium text-sm leading-snug group-hover:text-red-300 transition-colors mb-0.5 truncate">{link.title}</h3>
                            <p className="text-white/40 text-xs leading-snug break-words">{link.desc}</p>
                        </div>
                        <IconChevronRight className="text-white/15 group-hover:text-red-400 group-hover:translate-x-1 transition-all ml-2 w-5 h-5 shrink-0" />
                    </a>
                ))}
            </div>
        </ScrollReveal>
    </section>
);
