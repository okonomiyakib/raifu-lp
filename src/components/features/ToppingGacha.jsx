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
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex items-center justify-center p-4 backdrop-blur-xl" onClick={onClose}>
            <div className="card-red p-7 w-full max-w-xs text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <p className="text-wa-gold/50 text-[9px] tracking-[0.4em] font-western uppercase mb-2">Secret Topping</p>
                <h3 className="text-white font-display font-bold mb-5 flex items-center justify-center gap-2 text-lg">
                    <span className="text-2xl">🎰</span> 裏トッピングガチャ
                </h3>

                <div className="bg-wa-kuro/80 p-5 rounded-xl mb-5 min-h-[90px] flex items-center justify-center border border-wa-gold/10">
                    <div className={`text-3xl font-black font-display transition-all ${spinning ? 'text-white/30 scale-90' : 'text-wa-gold scale-110'}`}>
                        {result || '？'}
                    </div>
                </div>

                <button onClick={spin} disabled={spinning}
                    className={`w-full py-3.5 rounded-full font-bold text-base shadow-lg transition-all ${spinning
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : 'btn-red active:scale-95'}`}>
                    {spinning ? '選定中...' : 'ガチャを回す'}
                </button>
            </div>
        </div>
    );
};
