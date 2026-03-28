import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const AndroidRobotIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
);

const AppStoreIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

/* ハンコ風スタンプ（まっすぐ配置用） */
const HankoStamp = ({ text, color = 'red' }) => (
    <div
        className={`inline-block border-2 rounded-lg px-2.5 py-1.5 font-black text-[10px] leading-tight text-center
            ${color === 'red' ? 'border-red-500 text-red-500 bg-red-500/10 shadow-md shadow-red-900/20' : ''}
            ${color === 'blue' ? 'border-blue-400 text-blue-400 bg-blue-500/10 shadow-md shadow-blue-900/20' : ''}
            ${color === 'green' ? 'border-emerald-400 text-emerald-400 bg-emerald-500/10 shadow-md shadow-emerald-900/20' : ''}`}
    >
        {text}
    </div>
);

export const ChallengeSection = () => (
    <section className="px-4 sm:px-6 py-10 mx-auto">
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


                <div className="space-y-4">
                    {/* ═══ LV.1 - CNPトレカアプリチャレンジ（NEW!） ═══ */}
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-emerald-500/20 relative">
                        <div className="absolute -top-3 -left-1 flex items-center gap-2">
                            <span className="bg-emerald-600 text-white text-sm font-black px-4 py-1 rounded-lg shadow-md inline-block transform -rotate-2 font-display tracking-wider">LV.1</span>
                            <span className="bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded-md shadow-md animate-pulse">NEW!</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1 pt-3">🃏 CNPトレカアプリα２で遊ぼう！</h4>
                        {/* ゲーム説明 */}
                        <p className="text-[11px] text-emerald-300/80 font-bold mb-2 tracking-wide">
                            完全無料！スマホでも遊べるトレーディングカードゲーム 🎴 CNPトレカアプリα２
                        </p>
                        <p className="text-sm text-white/65 mb-3 leading-relaxed">
                            ブラウザで遊べるカードゲーム<span className="text-emerald-400 font-bold">『CNPトレカアプリα２』</span>にチャレンジ！<br />
                            2つのモードで遊んで、お得な特典をゲットしよう 🎁
                        </p>

                        {/* CNPトレカアプリα２の写真 */}
                        <div className="mb-4 rounded-xl overflow-hidden border border-emerald-500/15 shadow-lg">
                            <img src="./assets/cnp_treca_alpha2.jpg" alt="CNPトレカアプリα２" className="w-full object-cover" />
                        </div>

                        {/* ① CPU対戦チャレンジ */}
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-emerald-600/30 text-emerald-300 text-xs font-black px-2.5 py-1 rounded-md border border-emerald-500/30">①</span>
                                <span className="text-white text-sm font-bold">CPU対戦チャレンジ</span>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed mb-2">
                                『<span className="text-emerald-400 font-bold">CPU</span>』と対戦して、対戦中のスクリーンショットを下のLINEオープンチャットに貼ろう！
                            </p>
                            <div className="text-center">
                                <span className="reward-sparkle" style={{ borderColor: 'rgba(52, 211, 153, 0.5)' }}>
                                    <span className="reward-sparkle-text">🎁 店長おすすめトッピング 1つ無料！</span>
                                </span>
                            </div>
                        </div>

                        {/* ② 二人対戦チャレンジ */}
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-amber-600/30 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md border border-amber-500/30">②</span>
                                <span className="text-white text-sm font-bold">友達と二人で対戦チャレンジ</span>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed mb-2">
                                「<span className="text-amber-400 font-bold">二人で対戦する</span>」を選んで友達と遊ぼう！<br />
                                二人とも対戦中のスクショをオープンチャットに貼ってね 📸
                            </p>
                            <div className="text-center">
                                <span className="reward-sparkle">
                                    <span className="reward-sparkle-text">🏆 次回お好み焼き半額券プレゼント！</span>
                                </span>
                            </div>
                        </div>

                        {/* CNPトレカボタン - 炎エフェクト */}
                        <div className="text-center my-3">
                            <a href="https://tcg.kenty.app/" target="_blank" rel="noopener noreferrer"
                                className="btn-flame inline-flex items-center gap-2 py-3 px-8 rounded-xl text-sm">
                                🃏 『CNPトレカα２』はこちら
                            </a>
                        </div>

                        <HankoStamp text="📱 スマホでも遊べる！" color="green" />
                    </div>

                    {/* ═══ LV.2 - おこビー検索ミッション（旧LV.1） ═══ */}
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06] relative">
                        <div className="absolute -top-3 -left-1">
                            <span className="bg-red-600 text-white text-sm font-black px-4 py-1 rounded-lg shadow-md inline-block transform -rotate-2 font-display tracking-wider">LV.2</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1 pt-3">おこビー検索ミッション</h4>
                        {/* ゲーム説明 */}
                        <p className="text-[11px] text-amber-300/80 font-bold mb-2 tracking-wide">
                            完全無料！ローグライクアクションゲーム 🎮 にんぷち！
                        </p>
                        <p className="text-sm text-white/65 mb-3 leading-relaxed">
                            ブラウザゲーム<span className="text-red-400 font-bold">『にんぷち』</span>の中で、お好み焼きを持った「おこビー」のスクショを撮ってLINEに投稿！
                        </p>

                        <div className="mb-5 rounded-xl overflow-hidden border border-red-500/20 shadow-xl group">
                            <img src="./assets/game_challenge.jpg" alt="Game Challenge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="bg-[#381a1e] p-2.5 text-center text-xs text-white/70">ゲームにチャレンジしてスクショをLINEに投稿しよう！</div>
                        </div>

                        {/* ハンコ横並び */}
                        <div className="flex items-center justify-center gap-3 my-3">
                            <HankoStamp text="💡 ヒント！ステージ３" color="red" />
                            <HankoStamp text={"📱 高スペックのスマホだと\nクリアできる？かも？"} color="blue" />
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 mb-3">
                            <p className="text-sm text-red-300 font-bold text-center">
                                ⏱ ステージ３まで行った場合 最短約３分
                                <span className="text-white/40 text-xs font-normal ml-1">（写真は１分２１秒）</span>
                            </p>
                        </div>

                        {/* にんぷちボタン - 炎エフェクト */}
                        <div className="text-center my-3">
                            <a href="https://www.cryptofantasy.net/ninjapetit/" target="_blank" rel="noopener noreferrer"
                                className="btn-flame inline-flex items-center gap-2 py-3 px-8 rounded-xl text-sm">
                                🎮 『にんぷち』はこちら
                            </a>
                        </div>

                        {/* PC推奨 */}
                        <div className="bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-400/30 rounded-lg px-3 py-2 text-center mb-3 animate-pulse">
                            <span className="text-amber-300 text-sm font-bold">💻 にんぷちは PC推奨</span>
                        </div>

                        <div className="text-center">
                            <span className="reward-sparkle">
                                <span className="reward-sparkle-text">🏆 報酬：肉玉そば半額券 1枚</span>
                            </span>
                        </div>
                    </div>

                    {/* ═══ LV.3 - 甲賀ステージクリア（旧LV.2） ═══ */}
                    <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06] relative">
                        <div className="absolute -top-3 -left-1">
                            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-black px-4 py-1 rounded-lg shadow-md inline-block transform -rotate-2 font-display tracking-wider">LV.3</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1 pt-3">甲賀ステージクリア</h4>
                        {/* ゲーム説明 */}
                        <p className="text-[11px] text-amber-300/80 font-bold mb-2 tracking-wide">
                            完全無料！スマホでも遊べるタワーディフェンス系ゲームアプリ 🏰 CNPバーニンウォーズ
                        </p>
                        <p className="text-sm text-white/65 mb-3 leading-relaxed">
                            <span className="text-red-400 font-bold">甲賀ステージクリア</span>がわかるスクショをLINEに投稿！
                        </p>

                        {/* CNPバーニンウォーズの写真 */}
                        <div className="mb-4 rounded-xl overflow-hidden border border-red-500/15 shadow-lg">
                            <img src="./assets/cnp_burnin_wars.png" alt="CNPバーニンウォーズ" className="w-full object-cover" />
                        </div>

                        {/* CNPバーニンウォーズボタン - 炎エフェクト */}
                        <div className="text-center my-3">
                            <a href="https://prtimes.jp/main/html/rd/p/000000071.000012092.html" target="_blank" rel="noopener noreferrer"
                                className="btn-flame inline-flex items-center gap-2 py-3 px-6 rounded-xl text-sm">
                                📱 『CNPバーニンウォーズ』はこちら
                            </a>
                        </div>

                        {/* Android & iOS ストアリンク */}
                        <div className="flex items-center justify-center gap-4 mb-3">
                            <a href="https://play.google.com/store/apps/details?id=com.bucket.burninwars&pli=1"
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#34A853]/15 hover:bg-[#34A853]/25 border border-[#34A853]/30 text-[#34A853] px-4 py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md hover:shadow-[0_0_15px_rgba(52,168,83,0.2)]">
                                <AndroidRobotIcon />
                                <span className="text-xs font-bold">Android</span>
                            </a>
                            <a href="https://apps.apple.com/jp/app/cnp%E3%83%90%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BA/id6449776219"
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white/80 px-4 py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <AppStoreIcon />
                                <span className="text-xs font-bold">iOS</span>
                            </a>
                        </div>

                        <p className="text-sm text-red-400 mb-3 text-center font-black">★ 全レベルクリアでさらにボーナス！ ★</p>
                        <div className="text-center">
                            <span className="reward-sparkle">
                                <span className="reward-sparkle-text">🏆 報酬：肉玉そば半額券 1枚~</span>
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
