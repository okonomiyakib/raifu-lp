import React from 'react';
import { GAMES_LINKS } from '../../data/constants';
import { IconChevronRight } from '../ui/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export const GameMenuSection = ({ onPlayClick, onOmikujiClick, onQuizClick, onGachaClick }) => (
    <section className="px-4 py-10 max-w-[540px] mx-auto">
        <ScrollReveal>
            <div className="section-header">
                <div className="shu-accent"></div>
                <div className="title-group">
                    <span className="title-en">Games</span>
                    <span className="title-jp">お楽しみコンテンツ</span>
                </div>
            </div>

            {/* メインゲーム — 赤が目立つ大きなカード */}
            <div className="grid grid-cols-2 gap-3 w-full mb-3">
                <button onClick={onPlayClick} className="group bg-gradient-to-br from-wa-kurenai to-wa-beni p-5 rounded-xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform border border-red-600/30 shadow-lg shadow-red-900/20">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🥣</span>
                    <div className="text-base font-bold text-white font-serif">具材キャッチ</div>
                    <div className="text-[9px] text-white/50 tracking-widest font-western uppercase">Catch Game</div>
                </button>
                <button onClick={onOmikujiClick} className="group bg-gradient-to-br from-wa-shu/70 to-wa-enji p-5 rounded-xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform border border-wa-shu/30 shadow-lg shadow-red-900/20">
                    <span className="text-3xl group-hover:scale-110 transition-transform">⚡️</span>
                    <div className="text-base font-bold text-white font-serif">ヘラみくじ</div>
                    <div className="text-[9px] text-white/50 tracking-widest font-western uppercase">Fortune</div>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-6">
                <button onClick={onQuizClick} className="group bg-[#3c1212] border border-wa-kurenai/15 rounded-xl flex items-center justify-center gap-2 p-3.5 active:scale-95 transition-transform">
                    <span className="text-lg">🎓</span>
                    <span className="text-sm text-white font-serif group-hover:text-wa-gold transition-colors font-bold">焼き師検定</span>
                </button>
                <button onClick={onGachaClick} className="group bg-[#3c1212] border border-wa-kurenai/15 rounded-xl flex items-center justify-center gap-2 p-3.5 active:scale-95 transition-transform">
                    <span className="text-lg">🎰</span>
                    <span className="text-sm text-white font-serif group-hover:text-wa-gold transition-colors font-bold">裏ガチャ</span>
                </button>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-5 bg-wa-kurenai rounded-full"></div>
                    <h3 className="text-xs font-western text-wa-gold tracking-[0.1em] uppercase font-bold">External Games</h3>
                </div>
                {GAMES_LINKS.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="card flex items-center p-3.5 group">
                        <div className="text-xl mr-3 group-hover:scale-110 transition-transform">{link.icon}</div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-wa-gold transition-colors font-serif">{link.title}</h3>
                            <p className="text-white/30 text-[11px] truncate">{link.desc}</p>
                        </div>
                        <IconChevronRight className="text-white/15 w-4 h-4 group-hover:text-wa-gold group-hover:translate-x-1 transition-all ml-1 shrink-0" />
                    </a>
                ))}
            </div>
        </ScrollReveal>
    </section>
);
