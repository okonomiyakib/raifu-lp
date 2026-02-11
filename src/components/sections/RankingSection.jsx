import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { IconTrophy } from '../ui/Icons';
import { RANKING_DATA } from '../../data/constants';

export const RankingSection = () => (
    <section className="px-6 pb-20 max-w-lg mx-auto">
        <ScrollReveal>
            <div className="bg-glass rounded-xl p-6 border border-brand-gold/10">
                <h2 className="text-xl font-serif text-brand-gold mb-6 flex items-center gap-2">
                    <IconTrophy size={20} /> Monthly Ranking
                </h2>
                <div className="space-y-3">
                    {RANKING_DATA.map((r) => (
                        <div key={r.rank} className={`flex items-center p-3 rounded-lg ${r.top ? 'bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20' : 'bg-white/5'}`}>
                            <div className={`w-8 h-8 flex items-center justify-center font-black text-lg font-serif ${r.top ? 'text-brand-gold scale-110' : 'text-white/50'}`}>
                                {r.rank}
                            </div>
                            <div className="flex-1 ml-3">
                                <div className="text-sm font-bold text-white/90">{r.name}</div>
                                {r.rank === 1 && <div className="text-[10px] text-brand-gold/70">👑 Current Champion</div>}
                            </div>
                            <div className="font-mono text-brand-gold text-base font-bold tracking-wider">{r.score.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-white/40 text-xs">上位入賞で「トッピング無料券」プレゼント中！</p>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
