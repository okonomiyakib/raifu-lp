import React, { useState, useRef, useEffect } from 'react';

const TOPPINGS = [
    { name: 'チーズ', emoji: '🧀', rarity: 'common', color: '#ffd700', desc: '濃厚でとろける定番トッピング' },
    { name: 'モチ', emoji: '🍡', rarity: 'common', color: '#fff', desc: 'もちもち食感がたまらない' },
    { name: '大葉', emoji: '🌿', rarity: 'common', color: '#44bb44', desc: '爽やかな香りのアクセント' },
    { name: 'ネギマヨ', emoji: '🧅', rarity: 'common', color: '#88cc44', desc: 'ネギとマヨの王道コンビ' },
    { name: 'イカ天', emoji: '🦑', rarity: 'common', color: '#cc8844', desc: 'サクサク香ばしい人気者' },
    { name: 'キムチ', emoji: '🌶️', rarity: 'uncommon', color: '#ff4444', desc: 'ピリ辛で食欲全開！' },
    { name: 'エビ', emoji: '🦐', rarity: 'uncommon', color: '#ff8866', desc: 'プリプリ食感の贅沢一品' },
    { name: '明太子', emoji: '🔴', rarity: 'uncommon', color: '#ff5577', desc: 'ピリッと辛い大人の味' },
    { name: 'コーンバター', emoji: '🌽', rarity: 'uncommon', color: '#ffcc00', desc: '甘くてジューシー、子供も大人も大好き' },
    { name: '牡蠣', emoji: '🦪', rarity: 'rare', color: '#aabbcc', desc: '海のミルク！冬の贅沢トッピング' },
    { name: '和牛すじ', emoji: '🥩', rarity: 'rare', color: '#cc4444', desc: 'トロトロに煮込んだ極上の味' },
    { name: 'トリュフオイル', emoji: '🍄', rarity: 'legendary', color: '#aa88ff', desc: '✦ 超レア！芳醇な香りの究極トッピング' },
    { name: '金箔のせ', emoji: '✨', rarity: 'legendary', color: '#ffd700', desc: '✦ 超レア！見た目も味も最高級' },
];

const RARITY_CONFIG = {
    common: { label: '★', bg: 'from-gray-600/30 to-gray-700/20', border: 'border-gray-400/30', text: 'text-gray-300', chance: 50 },
    uncommon: { label: '★★', bg: 'from-green-600/30 to-green-700/20', border: 'border-green-400/30', text: 'text-green-300', chance: 30 },
    rare: { label: '★★★', bg: 'from-blue-600/30 to-blue-700/20', border: 'border-blue-400/40', text: 'text-blue-300', chance: 15 },
    legendary: { label: '★★★★', bg: 'from-purple-600/40 to-amber-700/30', border: 'border-amber-400/50', text: 'text-amber-300', chance: 5 },
};

const getWeightedRandom = () => {
    const roll = Math.random() * 100;
    let rarity;
    if (roll < RARITY_CONFIG.legendary.chance) rarity = 'legendary';
    else if (roll < RARITY_CONFIG.legendary.chance + RARITY_CONFIG.rare.chance) rarity = 'rare';
    else if (roll < RARITY_CONFIG.legendary.chance + RARITY_CONFIG.rare.chance + RARITY_CONFIG.uncommon.chance) rarity = 'uncommon';
    else rarity = 'common';

    const pool = TOPPINGS.filter(t => t.rarity === rarity);
    return pool[Math.floor(Math.random() * pool.length)];
};

export const ToppingGacha = ({ active, onClose }) => {
    const [result, setResult] = useState(null);
    const [spinning, setSpinning] = useState(false);
    const [history, setHistory] = useState(() => {
        try { return JSON.parse(localStorage.getItem('gacha_history') || '[]'); } catch { return []; }
    });
    const [showHistory, setShowHistory] = useState(false);
    const [displayText, setDisplayText] = useState(null);
    const intervalRef = useRef(null);

    const spin = () => {
        if (spinning) return;
        setSpinning(true);
        setResult(null);

        const finalResult = getWeightedRandom();
        let count = 0;
        const totalSpins = 20;

        intervalRef.current = setInterval(() => {
            // スロット風に高速でアイテム表示
            const randItem = TOPPINGS[Math.floor(Math.random() * TOPPINGS.length)];
            setDisplayText(randItem);
            count++;

            if (count >= totalSpins) {
                clearInterval(intervalRef.current);
                setDisplayText(finalResult);
                setResult(finalResult);
                setSpinning(false);

                const newHistory = [finalResult, ...history].slice(0, 20);
                setHistory(newHistory);
                localStorage.setItem('gacha_history', JSON.stringify(newHistory));
            }
        }, count < totalSpins - 5 ? 80 : 150 + count * 20);
    };

    useEffect(() => {
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    if (!active) return null;

    const rarityConfig = result ? RARITY_CONFIG[result.rarity] : null;
    const currentDisplay = displayText || result;

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex items-center justify-center p-4 backdrop-blur-xl" onClick={onClose}>
            <div className="card-red p-7 w-full max-w-xs text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <p className="text-wa-gold/50 text-[9px] tracking-[0.4em] font-western uppercase mb-2">Secret Topping</p>
                <h3 className="text-white font-display font-bold mb-1 flex items-center justify-center gap-2 text-lg">
                    <span className="text-2xl">🎰</span> 裏トッピングガチャ
                </h3>
                <p className="text-[10px] text-white/30 mb-4">レアなトッピングを引き当てよう！</p>

                <div className={`bg-wa-kuro/80 p-5 rounded-xl mb-4 min-h-[120px] flex flex-col items-center justify-center border transition-all duration-500 
                    ${result ? `border-2 ${rarityConfig.border}` : 'border-wa-gold/10'}`}
                    style={result && result.rarity === 'legendary' ? { boxShadow: `0 0 30px rgba(255, 215, 0, 0.3)` } : {}}
                >
                    {currentDisplay ? (
                        <>
                            <div className={`text-4xl mb-2 transition-all ${spinning ? 'scale-90 opacity-60' : 'scale-110'}`}>
                                {currentDisplay.emoji}
                            </div>
                            <div className={`text-2xl font-black font-display transition-all ${spinning ? 'text-white/30' : ''}`}
                                style={!spinning && result ? { color: result.color } : {}}>
                                {currentDisplay.name}
                            </div>
                            {result && !spinning && (
                                <div className="animate-fade-in-up mt-2">
                                    <span className={`text-xs ${rarityConfig.text} font-bold`}>{rarityConfig.label}</span>
                                    <p className="text-[11px] text-white/50 mt-1">{result.desc}</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-3xl text-white/20 font-display">？</div>
                    )}
                </div>

                <button onClick={spin} disabled={spinning}
                    className={`w-full py-3.5 rounded-full font-bold text-base shadow-lg transition-all mb-4 ${spinning
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : 'btn-red active:scale-95'}`}>
                    {spinning ? '選定中...' : 'ガチャを回す'}
                </button>

                {/* レアリティ確率表示 */}
                <div className="flex justify-center gap-3 text-[9px] text-white/25 mb-3">
                    <span>★ {RARITY_CONFIG.common.chance}%</span>
                    <span className="text-green-400/50">★★ {RARITY_CONFIG.uncommon.chance}%</span>
                    <span className="text-blue-400/50">★★★ {RARITY_CONFIG.rare.chance}%</span>
                    <span className="text-amber-400/50">★★★★ {RARITY_CONFIG.legendary.chance}%</span>
                </div>

                {/* 履歴トグル */}
                {history.length > 0 && (
                    <div>
                        <button onClick={() => setShowHistory(!showHistory)} className="text-[10px] text-white/30 hover:text-white/50 transition-colors">
                            {showHistory ? '▲ 履歴を閉じる' : `▼ 履歴を見る (${history.length}回)`}
                        </button>
                        {showHistory && (
                            <div className="mt-2 max-h-32 overflow-y-auto no-scrollbar">
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {history.map((h, i) => (
                                        <span key={i} className={`text-xs px-2 py-0.5 rounded-full border ${RARITY_CONFIG[h.rarity].border} bg-white/5`}
                                            title={`${h.name} (${h.rarity})`}>
                                            {h.emoji}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
