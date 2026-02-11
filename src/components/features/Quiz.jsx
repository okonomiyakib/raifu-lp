import React, { useState } from 'react';
import { IconX } from '../ui/Icons';

export const Quiz = ({ active, onClose }) => {
    const [step, setStep] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [feedback, setFeedback] = useState(null);

    const QUIZ_DATA = [
        { q: 'お好み焼きの「ヘラ」の正しい使い方は？', options: ['上から押さえつける', '切るように使う', '投げる', 'スプーン代わり'], ans: 1 },
        { q: '広島のお好み焼きの特徴といえば？', options: ['全部混ぜて焼く', '麺が入る重ね焼き', '四角い', 'タレを使わない'], ans: 1 },
        { q: '来風の店名の読み方は？', options: ['きかぜ', 'らいふ', 'くるかぜ', 'こいかぜ'], ans: 1 },
    ];

    const handleAnswer = (optionIndex) => {
        if (optionIndex === QUIZ_DATA[qIndex].ans) {
            setFeedback('correct'); setCorrectCount(c => c + 1);
        } else {
            setFeedback('wrong');
        }
        setTimeout(() => {
            setFeedback(null);
            if (qIndex < QUIZ_DATA.length - 1) setQIndex(q => q + 1);
            else setStep(2);
        }, 1000);
    };

    const reset = () => { setStep(0); setQIndex(0); setCorrectCount(0); };

    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm bg-brand-dark border border-brand-gold/30 rounded-xl p-6 shadow-2xl">
                <button onClick={onClose} className="absolute top-2 right-2 text-white/50"><IconX /></button>
                {step === 0 && (
                    <div className="text-center py-8">
                        <h3 className="text-2xl font-serif text-brand-gold mb-4">焼き師検定</h3>
                        <p className="text-white/80 mb-8 text-sm">あなたはお好み焼きについて<br />どれだけ知っていますか？</p>
                        <button onClick={() => setStep(1)} className="bg-brand-red text-white py-3 px-10 rounded-full font-bold shadow-lg">検定開始</button>
                    </div>
                )}
                {step === 1 && (
                    <div>
                        <div className="flex justify-between text-xs text-brand-gold mb-4"><span>Q. {qIndex + 1} / {QUIZ_DATA.length}</span><span>正解数: {correctCount}</span></div>
                        <h4 className="text-lg font-bold text-white mb-6 min-h-[3em]">{QUIZ_DATA[qIndex].q}</h4>
                        <div className="space-y-3">
                            {QUIZ_DATA[qIndex].options.map((opt, i) => (
                                <button key={i} onClick={() => handleAnswer(i)} className="w-full text-left bg-white/5 hover:bg-white/10 p-3 rounded border border-white/10 text-white/90 transition-colors">{i + 1}. {opt}</button>
                            ))}
                        </div>
                        {feedback && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-xl animate-fade-in-up">
                                <div className={`text-6xl font-black ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}>{feedback === 'correct' ? '⭕' : '❌'}</div>
                            </div>
                        )}
                    </div>
                )}
                {step === 2 && (
                    <div className="text-center py-6">
                        <h3 className="text-xl font-serif text-white mb-2">検定結果</h3>
                        <div className="text-5xl font-black text-brand-gold mb-4">{correctCount === QUIZ_DATA.length ? '免許皆伝' : `${correctCount}問正解`}</div>
                        <p className="text-sm text-white/60 mb-6">{correctCount === QUIZ_DATA.length ? '素晴らしい！あなたは立派な焼き師です。' : 'もう少し！目指せ免許皆伝。'}</p>
                        <button onClick={reset} className="text-brand-gold border-b border-brand-gold/50 pb-1 text-sm">もう一度受ける</button>
                    </div>
                )}
            </div>
        </div>
    );
};
