import React from 'react';

export const ChallengeSection = () => (
    <section className="px-6 py-10 max-w-lg mx-auto bg-gradient-to-br from-red-900/60 to-brand-dark rounded-xl border border-red-500/30 shadow-2xl relative overflow-hidden my-8 group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        <h2 className="text-2xl font-black text-white italic mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-brand-gold text-3xl">🎮</span> 完全無料ゲームで <span className="text-red-500 text-3xl">半額券</span> ゲット！！
        </h2>

        <div className="mb-6 rounded-lg overflow-hidden border-2 border-brand-gold/50 shadow-lg relative">
            <img src="./assets/game_challenge.jpg" alt="Game Challenge" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 text-center text-[10px] text-white/80">
                おこビーを見つけてスクショを撮ろう！
            </div>
        </div>

        <div className="space-y-4">
            {/* LV1 */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/10 relative">
                <div className="absolute -top-3 -left-2 bg-brand-gold text-black font-black px-2 py-0.5 rounded text-sm shadow-md rotate-[-5deg]">LV.1</div>
                <h3 className="text-lg font-bold text-white mb-1 pl-2">おこビー検索ミッション</h3>
                <p className="text-sm text-white/80 mb-1">
                    ブラウザゲーム<span className="text-brand-gold font-bold">『にんぷち』</span>の中で、お好み焼きを持った「おこビー」のスクショを撮ってLINEに投稿！
                </p>
                <div className="text-center my-3">
                    <a href="https://www.cryptofantasy.net/ninjapetit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-gold text-black font-bold py-2 px-6 rounded-full shadow-lg hover:brightness-110 transition-all text-sm">
                        <span>🎮</span> 『にんぷち』はこちら
                    </a>
                </div>
                <p className="text-[10px] text-white/50 mb-2 text-right">※にんぷちはPC推奨</p>
                <div className="text-right">
                    <span className="inline-block bg-brand-red px-3 py-1 rounded-full text-xs font-bold text-white shadow">報酬：肉玉そば半額券 1枚</span>
                </div>
            </div>

            {/* LV2 */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/10 relative">
                <div className="absolute -top-3 -left-2 bg-red-600 text-white font-black px-2 py-0.5 rounded text-sm shadow-md rotate-[-5deg]">LV.2</div>
                <h3 className="text-lg font-bold text-white mb-1 pl-2">全ステージ制覇ミッション</h3>
                <p className="text-sm text-white/80 mb-1">
                    <span className="text-brand-gold font-bold">『にんぷち』</span>または<span className="text-brand-gold font-bold">『CNPバーニンウォーズ』</span>を全クリアしてスクショを投稿！
                </p>
                <div className="text-center my-3">
                    <a href="https://prtimes.jp/main/html/rd/p/000000071.000012092.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:brightness-110 transition-all text-sm">
                        <span>📱</span> 『CNPバーニンウォーズ』はこちら
                    </a>
                </div>
                <p className="text-[10px] text-white/50 mb-2 text-right">※にんぷちはPC推奨</p>
                <p className="text-xs text-brand-gold mb-2 text-center font-bold">★両方クリアなら2枚ゲット！★</p>
                <div className="text-right">
                    <span className="inline-block bg-brand-red px-3 py-1 rounded-full text-xs font-bold text-white shadow">報酬：肉玉そば半額券 1枚~</span>
                </div>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-xs text-white/60 mb-2">▼ スクリーンショットの投稿はこちら ▼</p>
            <a href="https://line.me/ti/g2/90xLbbKsWDz5m6Pj0IQlHVYyK2knAgq7MpF99w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" target="_blank" className="block w-full bg-[#06C755] hover:bg-[#05b54d] text-white font-bold py-4 rounded-xl shadow-lg transform transition-transform active:scale-95 flex items-center justify-center gap-2">
                <span>💬</span> 投稿専用LINEオープンチャット
            </a>
        </div>
    </section>
);
