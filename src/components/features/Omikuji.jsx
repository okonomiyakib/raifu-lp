import React, { useState, useEffect } from 'react';
import { IconX } from '../ui/Icons';

export const Omikuji = ({ active, onClose }) => {
    const [result, setResult] = useState(null);
    const [animating, setAnimating] = useState(false);
    const RESULTS = [
        { rank: '超大吉', color: 'gold-shimmer', desc: '最高の焼き加減！今日は何をやってもうまくいきそう。', topping: '全部乗せ' },
        { rank: '大吉', color: 'text-wa-kurenai', desc: '熱々な一日になりそう。情熱的に過ごそう！', topping: 'チーズ & モチ' },
        { rank: '中吉', color: 'text-white', desc: 'バランスの良い一日。野菜を多めに摂ると吉。', topping: '大葉アクセント' },
        { rank: '小吉', color: 'text-white/80', desc: 'じっくり焼けば味が出る。焦らずいこう。', topping: 'ネギかけ' },
        { rank: '吉', color: 'text-white/70', desc: 'ソースの香りのように、良い知らせが届くかも。', topping: 'イカ天' },
    ];

    const drawOmikuji = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setResult(RESULTS[Math.floor(Math.random() * RESULTS.length)]);
            setAnimating(false);
        }, 1500);
    };

    useEffect(() => { if (active && !result) drawOmikuji(); }, [active]);
    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl" onClick={onClose}>
            <div className="card-red p-8 max-w-sm w-full text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-wa-shu/50"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-wa-shu/50"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-wa-shu/50"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-wa-shu/50"></div>

                <button onClick={onClose} className="absolute top-3 right-3 text-white/30 hover:text-white/60 transition-colors"><IconX size={18} /></button>
                <h3 className="text-wa-gold font-display text-xl mb-5 tracking-wider text-shadow-gold">今日の運勢 — ヘラみくじ —</h3>
                {animating ? (
                    <div className="py-10">
                        <div className="text-4xl animate-bounce mb-4">🥢</div>
                        <p className="text-white/50 animate-pulse font-serif text-sm">鉄板で焼いています...</p>
                    </div>
                ) : result ? (
                    <div className="animate-fade-in-up">
                        <div className={`text-5xl font-black font-display mb-4 ${result.color}`}>{result.rank}</div>
                        <p className="text-white/80 mb-5 font-serif leading-relaxed text-sm">{result.desc}</p>
                        <div className="bg-white/5 rounded-xl p-4 border border-wa-gold/10">
                            <p className="text-[10px] text-wa-gold/50 mb-1 font-western tracking-[0.2em] uppercase">Lucky Topping</p>
                            <p className="text-xl font-bold text-white font-serif">{result.topping}</p>
                        </div>
                        <button onClick={onClose} className="mt-6 btn-red py-3 px-10 rounded-full shadow-lg text-sm">結果を受け取る</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
