import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ChallengeSection = () => (
    <section className="px-4 py-10 max-w-[540px] mx-auto">
        <ScrollReveal>
            <div className="section-header">
                <div className="shu-accent"></div>
                <div className="title-group">
                    <span className="title-en">Challenge</span>
                    <span className="title-jp">ゲームチャレンジ</span>
                </div>
            </div>

            <div className="card-red p-5 relative">
                <div className="text-center mb-5">
                    <h3 className="text-xl font-black text-white mb-2">🎮 完全無料ゲームで</h3>
                    <div className="inline-block bg-red-600 text-white text-2xl font-black px-6 py-2 rounded-xl shadow-lg shadow-red-900/40">
                        半額券ゲット！！
                    </div>
                </div>

                <div className="mb-5 rounded-xl overflow-hidden border border-red-500/20 shadow-xl group">
                    <img src="./assets/game_challenge.jpg" alt="Game Challenge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="bg-[#381a1e] p-2.5 text-center text-xs text-white/70">おこビーを見つけてスクショを撮ろう！</div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06] relative">
                        <div className="absolute -top-3 -left-1">
                            <span className="bg-red-600 text-white text-sm font-black px-4 py-1 rounded-lg shadow-md inline-block transform -rotate-2 font-display tracking-wider">LV.1</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2 pt-3">全ステージ制覇ミッション</h4>
                        <p className="text-sm text-white/65 mb-3 leading-relaxed">
                            <span className="text-red-400 font-bold">『にんぷち』</span>または<span className="text-red-400 font-bold">『CNPバーニンウォーズ』</span>を全クリアしてスクショを投稿！
                        </p>
                        <div className="text-center my-3">
                            <a href="https://prtimes.jp/main/html/rd/p/000000071.000012092.html" target="_blank" rel="noopener noreferrer" className="btn-red inline-flex items-center gap-2 py-2.5 px-6 rounded-xl shadow-lg text-sm">
                                📱 『CNPバーニンウォーズ』はこちら
                            </a>
                        </div>
                        <p className="text-[10px] text-white/25 mb-2 text-right">※にんぷちはPC推奨</p>
                        <p className="text-sm text-red-400 mb-3 text-center font-black">★ 両方クリアなら2枚ゲット！ ★</p>
                        <div className="text-right">
                            <span className="reward-sparkle">
                                <span className="reward-sparkle-text">🏆 報酬：肉玉そば半額券 1枚~</span>
                            </span>
                        </div>
                    </div>

                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06] relative">
                        <div className="absolute -top-3 -left-1">
                            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-black px-4 py-1 rounded-lg shadow-md inline-block transform -rotate-2 font-display tracking-wider">LV.2</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2 pt-3">おこビー検索ミッション</h4>
                        <p className="text-sm text-white/65 mb-3 leading-relaxed">
                            ブラウザゲーム<span className="text-red-400 font-bold">『にんぷち』</span>の中で、お好み焼きを持った「おこビー」のスクショを撮ってLINEに投稿！
                        </p>
                        <div className="text-center my-3">
                            <a href="https://www.cryptofantasy.net/ninjapetit/" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2 py-2.5 px-6 rounded-xl shadow-lg text-sm">
                                🎮 『にんぷち』はこちら
                            </a>
                        </div>
                        <p className="text-[10px] text-white/25 mb-2 text-right">※にんぷちはPC推奨</p>
                        <div className="text-right">
                            <span className="reward-sparkle">
                                <span className="reward-sparkle-text">🏆 報酬：肉玉そば半額券 1枚</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs text-white/35 mb-2">▼ スクリーンショットの投稿はこちら ▼</p>
                    <a href="https://line.me/ti/g2/90xLbbKsWDz5m6Pj0IQlHVYyK2knAgq7MpF99w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank"
                        className="block w-full bg-[#06C755] text-white font-black py-4 rounded-xl shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2 text-base hover:shadow-[0_0_25px_rgba(6,199,85,0.3)]">
                        💬 投稿専用LINEオープンチャット
                    </a>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
