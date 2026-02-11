import React, { useState, useEffect } from 'react';
import { IconX } from '../ui/Icons';

export const Omikuji = ({ active, onClose }) => {
    const [result, setResult] = useState(null);
    const [animating, setAnimating] = useState(false);
    const OMICUJI_RESULTS = [
        { rank: '超大吉', color: 'text-brand-gold', desc: '最高の焼き加減！今日は何をやってもうまくいきそう。', topping: '全部乗せ' },
        { rank: '大吉', color: 'text-brand-red', desc: '熱々な一日になりそう。情熱的に過ごそう！', topping: 'チーズ & モチ' },
        { rank: '中吉', color: 'text-white', desc: 'バランスの良い一日。野菜を多めに摂ると吉。', topping: '大葉アクセント' },
        { rank: '小吉', color: 'text-white', desc: 'じっくり焼けば味が出る。焦らずいこう。', topping: 'ネギかけ' },
        { rank: '吉', color: 'text-white', desc: 'ソースの香りのように、良い知らせが届くかも。', topping: 'イカ天' },
    ];

    const drawOmikuji = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            const random = Math.floor(Math.random() * OMICUJI_RESULTS.length);
            setResult(OMICUJI_RESULTS[random]);
            setAnimating(false);
        }, 1500);
    };

    useEffect(() => { if (active && !result) drawOmikuji(); }, [active]);

    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-brand-dark border-2 border-brand-gold p-8 rounded-lg max-w-sm w-full text-center relative shadow-[0_0_30px_rgba(197,160,89,0.2)]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-white/50"><IconX /></button>
                <h3 className="text-brand-gold font-serif text-xl mb-6">今日の運勢 - ヘラみくじ -</h3>
                {animating ? (
                    <div className="py-12"><div className="text-4xl animate-bounce mb-4">🥢</div><p className="text-white/70 animate-pulse">鉄板で焼いています...</p></div>
                ) : result ? (
                    <div className="animate-fade-in-up">
                        <div className={`text-5xl font-black font-serif mb-4 ${result.color} text-shadow-gold`}>{result.rank}</div>
                        <p className="text-white/90 mb-6 font-serif leading-relaxed">{result.desc}</p>
                        <div className="bg-white/10 rounded p-4 border border-white/10"><p className="text-xs text-brand-gold/70 mb-1">ラッキートッピング</p><p className="text-xl font-bold text-white">{result.topping}</p></div>
                        <button onClick={onClose} className="mt-8 bg-brand-red text-white py-3 px-8 rounded-full font-bold shadow-lg hover:brightness-110 transition-all">結果を受け取る</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
