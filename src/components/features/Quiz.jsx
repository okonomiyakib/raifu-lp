import React, { useState } from 'react';
import { IconX } from '../ui/Icons';

export const Quiz = ({ active, onClose }) => {
    const [step, setStep] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [feedback, setFeedback] = useState(null);

    const QUIZ = [
        { q: 'お好み焼きの「ヘラ」の正しい使い方は？', options: ['上から押さえつける', '切るように使う', '投げる', 'スプーン代わり'], ans: 1 },
        { q: '広島のお好み焼きの特徴といえば？', options: ['全部混ぜて焼く', '麺が入る重ね焼き', '四角い', 'タレを使わない'], ans: 1 },
        { q: '来風の店名の読み方は？', options: ['きかぜ', 'らいふ', 'くるかぜ', 'こいかぜ'], ans: 1 },
    ];

    const handleAnswer = (i) => {
        if (i === QUIZ[qIndex].ans) { setFeedback('correct'); setCorrectCount(c => c + 1); }
        else setFeedback('wrong');
        setTimeout(() => {
            setFeedback(null);
            if (qIndex < QUIZ.length - 1) setQIndex(q => q + 1);
            else setStep(2);
        }, 1000);
    };

    const reset = () => { setStep(0); setQIndex(0); setCorrectCount(0); };
    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex items-center justify-center p-4 backdrop-blur-xl">
            <div className="relative w-full max-w-sm card-red p-6 shadow-2xl">
                <button onClick={onClose} className="absolute top-3 right-3 text-white/30 hover:text-white/60"><IconX size={18} /></button>
                {step === 0 && (
                    <div className="text-center py-6">
                        <p className="text-wa-gold/50 text-[9px] tracking-[0.4em] font-western uppercase mb-3">Quiz Time</p>
                        <h3 className="text-2xl font-display text-wa-gold mb-4">焼き師検定</h3>
                        <p className="text-white/60 mb-6 text-sm font-serif">あなたはお好み焼きについて<br />どれだけ知っていますか？</p>
                        <button onClick={() => setStep(1)} className="btn-red py-3 px-12 rounded-full shadow-lg text-sm">検定開始</button>
                    </div>
                )}
                {step === 1 && (
                    <div>
                        <div className="flex justify-between text-[10px] mb-4">
                            <span className="text-wa-gold/60 font-western">Q. {qIndex + 1} / {QUIZ.length}</span>
                            <span className="text-wa-gold/60 font-western">正解: {correctCount}</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-5 leading-relaxed font-serif">{QUIZ[qIndex].q}</h4>
                        <div className="space-y-2.5">
                            {QUIZ[qIndex].options.map((opt, i) => (
                                <button key={i} onClick={() => handleAnswer(i)} className="w-full text-left bg-white/5 p-3 rounded-xl border border-white/5 text-white/80 active:bg-white/10 transition-all text-sm font-serif">
                                    <span className="text-wa-gold/40 font-western mr-2 text-xs">{String.fromCharCode(65 + i)}.</span> {opt}
                                </button>
                            ))}
                        </div>
                        {feedback && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md rounded-2xl animate-scale-in">
                                <div className={`text-6xl ${feedback === 'correct' ? 'text-emerald-400' : 'text-red-400'}`}>{feedback === 'correct' ? '⭕' : '❌'}</div>
                            </div>
                        )}
                    </div>
                )}
                {step === 2 && (
                    <div className="text-center py-6">
                        <h3 className="text-lg font-display text-white mb-3">検定結果</h3>
                        <div className="text-4xl font-black font-display mb-4 gold-shimmer">{correctCount === QUIZ.length ? '免許皆伝' : `${correctCount}問正解`}</div>
                        <p className="text-sm text-white/50 mb-6 font-serif">{correctCount === QUIZ.length ? '素晴らしい！あなたは立派な焼き師です。' : 'もう少し！目指せ免許皆伝。'}</p>
                        <button onClick={reset} className="text-wa-gold/60 border-b border-wa-gold/20 pb-1 text-sm font-western tracking-wider">もう一度受ける</button>
                    </div>
                )}
            </div>
        </div>
    );
};
