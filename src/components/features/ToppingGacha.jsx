import React, { useState } from 'react';

export const ToppingGacha = ({ active, onClose }) => {
    const [result, setResult] = useState(null);
    const [spinning, setSpinning] = useState(false);
    const TOPPINGS = ['チーズ', 'モチ', '大葉', 'ネギマヨ', 'イカ天', 'キムチ', '納豆', 'ハラペーニョ'];

    const spin = () => {
        if (spinning) return;
        setSpinning(true); setResult(null);
        let count = 0;
        const interval = setInterval(() => {
            setResult(TOPPINGS[Math.floor(Math.random() * TOPPINGS.length)]);
            count++;
            if (count > 15) { clearInterval(interval); setSpinning(false); }
        }, 100);
    };

    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-brand-gray p-8 rounded-2xl w-full max-w-xs text-center border-4 border-brand-red relative" onClick={e => e.stopPropagation()}>
                <h3 className="text-white font-bold mb-6 flex items-center justify-center gap-2"><span className="text-2xl">🎰</span> 裏トッピングガチャ</h3>
                <div className="bg-black p-6 rounded-lg mb-6 min-h-[100px] flex items-center justify-center border-inset border-4 border-gray-800">
                    <div className={`text-3xl font-black text-brand-gold ${spinning ? 'opacity-50' : 'scale-110'}`}>{result || '?'}</div>
                </div>
                <button onClick={spin} disabled={spinning} className={`w-full py-4 rounded-full font-bold text-lg shadow-lg ${spinning ? 'bg-gray-600 text-gray-400' : 'bg-brand-red text-white hover:scale-105 transition-transform'}`}>{spinning ? '選定中...' : 'ガチャを回す'}</button>
            </div>
        </div>
    );
};
