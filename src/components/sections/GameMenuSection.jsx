import React from 'react';
import { GAMES_LINKS } from '../../data/constants';
import { IconChevronRight } from '../ui/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export const GameMenuSection = ({ onPlayClick, onOmikujiClick, onQuizClick, onGachaClick }) => (
    <section className="px-4 sm:px-6 py-10 mx-auto">
        <ScrollReveal>
            <div className="section-header">
                <div className="shu-accent"></div>
                <div className="title-group">
                    <span className="title-en">Games</span>
                    <span className="title-jp">お楽しみコンテンツ</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-3">
                <button onClick={onPlayClick} className="group bg-gradient-to-br from-red-600/30 to-red-900/20 p-5 rounded-xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-all border border-red-500/20 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,80,80,0.15)]">
                    <span className="text-3xl group-hover:scale-110 transition-transform">🥣</span>
                    <div className="text-base font-bold text-white">具材キャッチ</div>
                    <div className="text-[9px] text-white/35 tracking-widest font-display uppercase">Catch Game</div>
                </button>
                <button onClick={onOmikujiClick} className="group bg-gradient-to-br from-red-700/25 to-red-900/15 p-5 rounded-xl flex flex-col items-center justify-center gap-2 active:scale-95 transition-all border border-red-500/15 hover:border-red-500/35 hover:shadow-[0_0_25px_rgba(255,80,80,0.12)]">
                    <span className="text-3xl group-hover:scale-110 transition-transform">⚡️</span>
                    <div className="text-base font-bold text-white">ヘラみくじ</div>
                    <div className="text-[9px] text-white/35 tracking-widest font-display uppercase">Fortune</div>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-6">
                <button onClick={onQuizClick} className="group bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center gap-2 p-3.5 active:scale-95 transition-all hover:border-red-500/25">
                    <span className="text-lg">🎓</span>
                    <span className="text-sm text-white/80 group-hover:text-red-300 transition-colors font-medium">焼き師検定</span>
                </button>
                <button onClick={onGachaClick} className="group bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center gap-2 p-3.5 active:scale-95 transition-all hover:border-red-500/25">
                    <span className="text-lg">🎰</span>
                    <span className="text-sm text-white/80 group-hover:text-red-300 transition-colors font-medium">裏ガチャ</span>
                </button>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-[3px] h-5 bg-red-500 rounded-full shadow-[0_0_8px_rgba(255,80,80,0.3)]"></div>
                    <h3 className="text-xs font-display text-[#ff8a8a] tracking-[0.15em] uppercase font-bold">External Games</h3>
                </div>
                {GAMES_LINKS.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="card flex items-center p-3.5 group">
                        <div className="text-xl mr-3 group-hover:scale-110 transition-transform">{link.icon}</div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white/85 font-medium text-sm leading-tight group-hover:text-red-300 transition-colors">{link.title}</h3>
                            <p className="text-white/35 text-[11px] truncate">{link.desc}</p>
                        </div>
                        <IconChevronRight className="text-white/12 w-4 h-4 group-hover:text-red-400 group-hover:translate-x-1 transition-all ml-1 shrink-0" />
                    </a>
                ))}
            </div>
        </ScrollReveal>
    </section>
);
