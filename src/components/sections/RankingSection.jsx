import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { RANKING_DATA } from '../../data/constants';

const RANK_MEDALS = ['🥇', '🥈', '🥉'];

export const RankingSection = () => (
    <section className="px-4 py-10 pb-14 max-w-[540px] mx-auto">
        <ScrollReveal>
            <div className="section-header">
                <div className="shu-accent"></div>
                <div className="title-group">
                    <span className="title-en">Ranking</span>
                    <span className="title-jp">月間ランキング</span>
                </div>
            </div>

            <div className="card-gold p-5">
                <div className="space-y-2.5">
                    {RANKING_DATA.map((r) => (
                        <div key={r.rank} className={`flex items-center p-3.5 rounded-xl transition-all ${r.top
                            ? 'bg-red-600/15 border border-red-500/20'
                            : 'bg-white/[0.03] border border-white/[0.05]'}`}>
                            <div className={`w-9 h-9 flex items-center justify-center font-black text-lg ${r.rank <= 3 ? 'text-xl' : 'text-white/25 font-display'}`}>
                                {r.rank <= 3 ? RANK_MEDALS[r.rank - 1] : r.rank}
                            </div>
                            <div className="flex-1 ml-2.5">
                                <div className="text-sm font-medium text-white/85">{r.name}</div>
                                {r.rank === 1 && <div className="text-[10px] text-red-400 font-bold mt-0.5">👑 Champion</div>}
                            </div>
                            <div className="font-display text-red-400 text-base font-bold tracking-wider">{r.score.toLocaleString()}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] text-center">
                    <p className="text-white/55 text-sm font-medium">🎁 上位入賞で「トッピング無料券」プレゼント中！</p>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
