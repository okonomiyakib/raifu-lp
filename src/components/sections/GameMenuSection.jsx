import React from 'react';
import { GAMES_LINKS } from '../../data/constants';
import { IconChevronRight } from '../ui/Icons';

export const GameMenuSection = ({ onPlayClick, onOmikujiClick, onQuizClick, onGachaClick }) => (
    <section className="px-6 py-8 max-w-lg mx-auto">
        <div className="flex justify-between items-end mb-6 px-2">
            <div>
                <h2 className="text-xl font-serif text-white font-bold">Games</h2>
                <p className="text-brand-gold text-xs tracking-widest">お楽しみコンテンツ</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full mb-3">
            <button onClick={onPlayClick} className="bg-brand-red/90 backdrop-blur-md border border-brand-redLight p-4 rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-brand-red transition-all shadow-lg active:scale-95">
                <span className="text-2xl">🥣</span>
                <div className="text-sm font-bold text-white">具材キャッチ</div>
            </button>
            <button onClick={onOmikujiClick} className="bg-white/10 backdrop-blur-md border border-brand-gold/30 p-4 rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-white/20 transition-all shadow-lg active:scale-95">
                <span className="text-2xl">⚡️</span>
                <div className="text-sm font-bold text-white">ヘラみくじ</div>
            </button>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full mb-6 max-w-sm mx-auto">
            <button onClick={onQuizClick} className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-dark transition-all active:scale-95">
                <span className="text-lg">🎓</span>
                <span className="text-xs text-white">焼き師検定</span>
            </button>
            <button onClick={onGachaClick} className="bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-dark transition-all active:scale-95">
                <span className="text-lg">🎰</span>
                <span className="text-xs text-white">裏ガチャ</span>
            </button>
        </div>

        {/* Moved from Activities */}
        <div className="space-y-3">
            <h3 className="text-sm font-serif text-brand-gold border-b border-brand-gold/20 pb-1 mb-3 inline-block">External Games</h3>
            {GAMES_LINKS.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:scale-[1.01] transition-all duration-300 group">
                    <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm font-bold leading-tight group-hover:text-brand-gold transition-colors">{link.title}</h3>
                        <p className="text-white/40 text-[10px] truncate">{link.desc}</p>
                    </div>
                    <IconChevronRight className="text-white/20 w-4 h-4 group-hover:text-brand-gold group-hover:translate-x-1 transition-all ml-1" />
                </a>
            ))}
        </div>
    </section>
);
