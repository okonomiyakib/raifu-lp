import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { IconTrophy } from '../ui/Icons';
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
                            ? 'bg-wa-gold/10 border border-wa-gold/25'
                            : 'bg-white/5 border border-white/5'}`}>
                            <div className={`w-9 h-9 flex items-center justify-center font-black text-lg ${r.rank <= 3 ? 'text-xl' : 'text-white/30 font-western'}`}>
                                {r.rank <= 3 ? RANK_MEDALS[r.rank - 1] : r.rank}
                            </div>
                            <div className="flex-1 ml-2.5">
                                <div className="text-sm font-bold text-white font-serif">{r.name}</div>
                                {r.rank === 1 && <div className="text-[10px] text-wa-gold font-bold mt-0.5">👑 Champion</div>}
                            </div>
                            <div className="font-western text-wa-gold text-base font-bold tracking-wider">{r.score.toLocaleString()}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-wa-gold/15 text-center">
                    <p className="text-white/60 text-sm font-serif font-bold">🎁 上位入賞で「トッピング無料券」プレゼント中！</p>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
