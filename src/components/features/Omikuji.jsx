import React, { useState, useEffect, useCallback } from 'react';
import { IconX } from '../ui/Icons';

const FORTUNES = [
    {
        rank: '超大吉', color: 'gold-shimmer', emoji: '🌟',
        desc: '最高の焼き加減！今日は何をやってもうまくいく最強運！全てのトッピングがあなたの味方に。',
        topping: '全部乗せスペシャル',
        lucky: { item: '金のヘラ', color: 'ゴールド', direction: '南東', number: 7 }
    },
    {
        rank: '大吉', color: 'text-wa-kurenai', emoji: '🔥',
        desc: '熱々な一日になりそう！鉄板のように情熱的に過ごせば、良い出来事が焼き上がる。',
        topping: 'チーズ & モチ',
        lucky: { item: 'お好みソース', color: 'レッド', direction: '東', number: 3 }
    },
    {
        rank: '中吉', color: 'text-white', emoji: '✨',
        desc: 'バランスの良い一日。野菜を多めに摂ると運気UP！周りとの調和を大切にしよう。',
        topping: '大葉＆ネギたっぷり',
        lucky: { item: 'マヨネーズ', color: 'グリーン', direction: '北', number: 5 }
    },
    {
        rank: '小吉', color: 'text-white/80', emoji: '🥢',
        desc: 'じっくり焼けば味が出る。慌てず着実に進めれば、夕方に良い知らせが届くかも。',
        topping: 'ネギかけ',
        lucky: { item: 'かつお節', color: 'ブルー', direction: '西', number: 8 }
    },
    {
        rank: '吉', color: 'text-white/70', emoji: '🍳',
        desc: 'ソースの香りのように、小さな幸せが漂ってくる一日。感謝の気持ちを忘れずに。',
        topping: 'イカ天',
        lucky: { item: '青のり', color: 'パープル', direction: '南', number: 2 }
    },
    {
        rank: '末吉', color: 'text-white/60', emoji: '🌙',
        desc: 'ゆっくりとした運気の上昇。焦らず、丁寧に行動すれば後半に大きな転機が訪れる。',
        topping: 'もやし増量',
        lucky: { item: '七味唐辛子', color: 'オレンジ', direction: '北西', number: 9 }
    },
];

const HeraAnimation = ({ onComplete }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 300),
            setTimeout(() => setPhase(2), 800),
            setTimeout(() => setPhase(3), 1300),
            setTimeout(() => onComplete(), 1800),
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div className="py-10 flex flex-col items-center">
            <div className={`transition-all duration-500 ${phase >= 1 ? 'scale-125' : 'scale-100'}`}>
                <div className={`text-5xl ${phase >= 2 ? 'animate-bounce' : ''}`}>
                    {phase < 2 ? '🥢' : phase < 3 ? '⚡️' : '✨'}
                </div>
            </div>
            <p className="text-white/50 animate-pulse font-serif text-sm mt-4">
                {phase < 1 ? 'ヘラを構えています...' : phase < 2 ? '鉄板で焼いています...' : phase < 3 ? '運命を焼き上げ中...' : '完成！'}
            </p>
            <div className="flex gap-1 mt-3">
                {[0, 1, 2].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${phase > i ? 'bg-red-400 scale-110' : 'bg-white/20'}`} />
                ))}
            </div>
        </div>
    );
};

export const Omikuji = ({ active, onClose }) => {
    const [result, setResult] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [todayCount, setTodayCount] = useState(() => {
        const saved = localStorage.getItem('omikuji_today');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.date === new Date().toDateString()) return data.count;
        }
        return 0;
    });

    const drawOmikuji = useCallback(() => {
        if (animating) return;
        setAnimating(true);
        setShowDetails(false);
        setResult(null);
    }, [animating]);

    const handleAnimationComplete = useCallback(() => {
        const fortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
        setResult(fortune);
        setAnimating(false);
        setShowDetails(false);
        const newCount = todayCount + 1;
        setTodayCount(newCount);
        localStorage.setItem('omikuji_today', JSON.stringify({ date: new Date().toDateString(), count: newCount }));
        setTimeout(() => setShowDetails(true), 600);
    }, [todayCount]);

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
                <h3 className="text-wa-gold font-display text-xl mb-1 tracking-wider text-shadow-gold">今日の運勢 — ヘラみくじ —</h3>
                <p className="text-[10px] text-white/30 mb-4">本日 {todayCount} 回目</p>

                {animating ? (
                    <HeraAnimation onComplete={handleAnimationComplete} />
                ) : result ? (
                    <div className="animate-fade-in-up">
                        <div className="text-3xl mb-2">{result.emoji}</div>
                        <div className={`text-5xl font-black font-display mb-3 ${result.color}`}>{result.rank}</div>
                        <p className="text-white/80 mb-5 font-serif leading-relaxed text-sm">{result.desc}</p>

                        <div className="bg-white/5 rounded-xl p-4 border border-wa-gold/10 mb-4">
                            <p className="text-[10px] text-wa-gold/50 mb-1 font-western tracking-[0.2em] uppercase">Lucky Topping</p>
                            <p className="text-xl font-bold text-white font-serif">{result.topping}</p>
                        </div>

                        {showDetails && (
                            <div className="grid grid-cols-2 gap-2 mb-5 animate-fade-in-up">
                                <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.06]">
                                    <p className="text-[8px] text-white/30 uppercase tracking-widest">ラッキーアイテム</p>
                                    <p className="text-sm text-white/80 font-medium">{result.lucky.item}</p>
                                </div>
                                <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.06]">
                                    <p className="text-[8px] text-white/30 uppercase tracking-widest">ラッキーカラー</p>
                                    <p className="text-sm text-white/80 font-medium">{result.lucky.color}</p>
                                </div>
                                <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.06]">
                                    <p className="text-[8px] text-white/30 uppercase tracking-widest">ラッキー方角</p>
                                    <p className="text-sm text-white/80 font-medium">{result.lucky.direction}</p>
                                </div>
                                <div className="bg-white/[0.04] rounded-lg p-2.5 border border-white/[0.06]">
                                    <p className="text-[8px] text-white/30 uppercase tracking-widest">ラッキーナンバー</p>
                                    <p className="text-sm text-white/80 font-medium">{result.lucky.number}</p>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3 justify-center">
                            <button onClick={drawOmikuji} className="text-wa-gold/60 border-b border-wa-gold/20 pb-1 text-xs font-western tracking-wider">もう一度引く</button>
                            <button onClick={onClose} className="btn-red py-2.5 px-8 rounded-full shadow-lg text-sm">結果を受け取る</button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
