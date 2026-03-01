import React, { useState, useCallback } from 'react';
import { IconX } from '../ui/Icons';

const QUIZ_BANK = [
    // 基本知識
    { q: 'お好み焼きの「ヘラ」の正しい使い方は？', options: ['上から押さえつける', '切るように使う', '投げる', 'スプーン代わり'], ans: 1, category: '基本', explanation: 'ヘラは「切るように」使うのが正しい作法です。押さえつけると生地がつぶれてしまいます。' },
    { q: '広島のお好み焼きの特徴といえば？', options: ['全部混ぜて焼く', '麺が入る重ね焼き', '四角い', 'タレを使わない'], ans: 1, category: '基本', explanation: '広島風は生地・キャベツ・肉・麺を重ねて焼く「重ね焼き」が特徴。関西風は「混ぜ焼き」です。' },
    { q: '来風の店名の読み方は？', options: ['きかぜ', 'らいふ', 'くるかぜ', 'こいかぜ'], ans: 1, category: '来風', explanation: '「来風（らいふ）」＝「来る風」で、新しい風を吹かせたいという想いが込められています。' },
    // お好み焼き歴史
    { q: 'お好み焼きの原型とされる「一銭洋食」が登場したのは？', options: ['江戸時代', '明治時代', '大正時代', '昭和時代'], ans: 2, category: '歴史', explanation: '大正時代に駄菓子屋で1銭で食べられた「一銭洋食」がお好み焼きの原型と言われています。' },
    { q: '広島でお好み焼きが広まったきっかけは？', options: ['外国人の影響', '戦後の屋台文化', '宮中の料理', '漁師のまかない'], ans: 1, category: '歴史', explanation: '戦後、広島では屋台でお好み焼きが庶民の食事として広まりました。' },
    { q: 'お好み焼きに使われる「山芋」の効果は？', options: ['色をつける', 'ふっくらさせる', '辛くする', '保存する'], ans: 1, category: '技術', explanation: '山芋のとろろは空気を含み、生地をふっくら柔らかくする効果があります。' },
    // ソース・食材
    { q: 'おたふくソースの発祥地はどこ？', options: ['東京', '大阪', '広島', '名古屋'], ans: 2, category: '食材', explanation: 'おたふくソースは1922年に広島で創業。お好み焼きソースのシェアは業界トップです。' },
    { q: 'お好み焼きの「天かす」の正式名称は？', options: ['天ぷら粕', '揚げ玉', '油かす', 'フライ粉'], ans: 1, category: '食材', explanation: '正式には「揚げ玉（あげだま）」といいます。サクサクの食感と旨味をプラスします。' },
    { q: 'キャベツの千切りの方向で味が変わる？', options: ['変わらない', '繊維に沿うと甘い', '横に切ると硬い', '斜めが最強'], ans: 1, category: '技術', explanation: '繊維に沿って切ると甘みが引き立ち、シャキシャキ感も残ります。' },
    // 焼き方
    { q: 'お好み焼きを焼く最適な温度は？', options: ['約120°C', '約160°C', '約200°C', '約250°C'], ans: 2, category: '技術', explanation: '約200°Cが理想的。低すぎると水分が飛ばず、高すぎると外だけ焦げてしまいます。' },
    { q: 'お好み焼きをひっくり返すとき、ヘラは何本使う？', options: ['1本', '2本', '3本', '使わない'], ans: 1, category: '技術', explanation: 'プロは2本のヘラを使って安定させながらひっくり返します。1本だと崩れやすいです。' },
    { q: '広島風お好み焼きで麺を焼くときのコツは？', options: ['茹でたてを使う', 'パリッと焼く', '水で戻す', '油で揚げる'], ans: 1, category: '技術', explanation: '麺をヘラで押さえてパリッと焼き上げるのが広島風の醍醐味。カリッとした食感が命です。' },
];

const RANKS = [
    { min: 0, title: '修行中', emoji: '🔰', message: 'まだまだこれから！もっとお好み焼きを知ろう！' },
    { min: 40, title: '見習い焼き師', emoji: '🥢', message: 'いい調子！お好み焼き愛が芽生えてきた！' },
    { min: 60, title: '一人前焼き師', emoji: '🍳', message: '素晴らしい！お好み焼きの基本をマスター！' },
    { min: 80, title: '達人焼き師', emoji: '🏆', message: 'すごい！あなたは立派な焼き師です！' },
    { min: 100, title: '免許皆伝', emoji: '👑', message: '完璧！伝説の焼き師として認定します！' },
];

export const Quiz = ({ active, onClose }) => {
    const QUESTION_COUNT = 5;
    const [step, setStep] = useState(0); // 0=intro, 1=quiz, 2=result
    const [questions, setQuestions] = useState([]);
    const [qIndex, setQIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [feedback, setFeedback] = useState(null); // null, 'correct', 'wrong'
    const [showExplanation, setShowExplanation] = useState(false);
    const [bestScore, setBestScore] = useState(() => parseInt(localStorage.getItem('quiz_best') || '0'));

    const startQuiz = useCallback(() => {
        // ランダムに問題を選出
        const shuffled = [...QUIZ_BANK].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, QUESTION_COUNT));
        setQIndex(0);
        setCorrectCount(0);
        setFeedback(null);
        setShowExplanation(false);
        setStep(1);
    }, []);

    const handleAnswer = (i) => {
        if (feedback) return;
        const isCorrect = i === questions[qIndex].ans;
        if (isCorrect) {
            setFeedback('correct');
            setCorrectCount(c => c + 1);
        } else {
            setFeedback('wrong');
        }
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        setFeedback(null);
        setShowExplanation(false);
        if (qIndex < questions.length - 1) {
            setQIndex(q => q + 1);
        } else {
            const percent = Math.round(((correctCount + (feedback === 'correct' ? 0 : 0)) / QUESTION_COUNT) * 100);
            const newBest = Math.max(bestScore, percent);
            setBestScore(newBest);
            localStorage.setItem('quiz_best', newBest.toString());
            setStep(2);
        }
    };

    const getRank = (count) => {
        const percent = Math.round((count / QUESTION_COUNT) * 100);
        return [...RANKS].reverse().find(r => percent >= r.min) || RANKS[0];
    };

    if (!active) return null;

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex items-center justify-center p-4 backdrop-blur-xl">
            <div className="relative w-full max-w-sm card-red p-6 shadow-2xl">
                <button onClick={onClose} className="absolute top-3 right-3 text-white/30 hover:text-white/60"><IconX size={18} /></button>

                {step === 0 && (
                    <div className="text-center py-6">
                        <p className="text-wa-gold/50 text-[9px] tracking-[0.4em] font-western uppercase mb-3">Quiz Time</p>
                        <h3 className="text-2xl font-display text-wa-gold mb-2">焼き師検定</h3>
                        <p className="text-white/60 mb-2 text-sm font-serif">お好み焼きの知識を<br />全{QUESTION_COUNT}問でテスト！</p>
                        <p className="text-[10px] text-white/30 mb-6">問題は毎回ランダム（全{QUIZ_BANK.length}問から出題）</p>
                        {bestScore > 0 && <p className="text-xs text-amber-400/60 mb-4">ベストスコア: {bestScore}%</p>}
                        <button onClick={startQuiz} className="btn-red py-3 px-12 rounded-full shadow-lg text-sm">検定開始</button>
                    </div>
                )}

                {step === 1 && questions.length > 0 && (
                    <div>
                        <div className="flex justify-between text-[10px] mb-2">
                            <span className="text-wa-gold/60 font-western">Q. {qIndex + 1} / {QUESTION_COUNT}</span>
                            <span className="text-wa-gold/60 font-western">正解: {correctCount}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1 mb-4">
                            <div className="bg-red-500 h-1 rounded-full transition-all duration-300" style={{ width: `${((qIndex + 1) / QUESTION_COUNT) * 100}%` }} />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[9px] bg-white/10 text-white/50 px-2 py-0.5 rounded-full">{questions[qIndex].category}</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-5 leading-relaxed font-serif">{questions[qIndex].q}</h4>
                        <div className="space-y-2.5">
                            {questions[qIndex].options.map((opt, i) => (
                                <button key={i} onClick={() => handleAnswer(i)}
                                    className={`w-full text-left p-3 rounded-xl border text-sm font-serif transition-all
                                        ${feedback === null ? 'bg-white/5 border-white/5 text-white/80 active:bg-white/10' :
                                            i === questions[qIndex].ans ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300' :
                                                feedback === 'wrong' && i !== questions[qIndex].ans ? 'bg-white/5 border-white/5 text-white/30' :
                                                    'bg-white/5 border-white/5 text-white/30'}`}
                                    disabled={feedback !== null}
                                >
                                    <span className="text-wa-gold/40 font-western mr-2 text-xs">{String.fromCharCode(65 + i)}.</span> {opt}
                                    {feedback && i === questions[qIndex].ans && <span className="ml-2">✅</span>}
                                </button>
                            ))}
                        </div>

                        {showExplanation && (
                            <div className="mt-4 animate-fade-in-up">
                                <div className={`p-3 rounded-xl border text-sm ${feedback === 'correct' ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                                    <p className={`font-bold mb-1 ${feedback === 'correct' ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {feedback === 'correct' ? '⭕ 正解！' : '❌ 不正解...'}
                                    </p>
                                    <p className="text-white/60 text-xs leading-relaxed">{questions[qIndex].explanation}</p>
                                </div>
                                <button onClick={nextQuestion} className="w-full mt-3 btn-red py-2.5 rounded-xl text-sm">
                                    {qIndex < questions.length - 1 ? '次の問題へ →' : '結果を見る'}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {step === 2 && (
                    <div className="text-center py-6">
                        <div className="text-4xl mb-2">{getRank(correctCount).emoji}</div>
                        <h3 className="text-lg font-display text-white mb-1">検定結果</h3>
                        <div className="text-4xl font-black font-display mb-2 gold-shimmer">{getRank(correctCount).title}</div>
                        <p className="text-2xl font-black text-white mb-1">{correctCount}<span className="text-base text-white/50">/{QUESTION_COUNT}</span></p>
                        <p className="text-xs text-amber-400/60 mb-2">正答率 {Math.round((correctCount / QUESTION_COUNT) * 100)}%</p>
                        <p className="text-sm text-white/50 mb-6 font-serif">{getRank(correctCount).message}</p>
                        <div className="flex gap-3 justify-center">
                            <button onClick={startQuiz} className="text-wa-gold/60 border-b border-wa-gold/20 pb-1 text-sm font-western tracking-wider">もう一度受ける</button>
                            <button onClick={onClose} className="btn-red py-2.5 px-8 rounded-full shadow-lg text-sm">閉じる</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
