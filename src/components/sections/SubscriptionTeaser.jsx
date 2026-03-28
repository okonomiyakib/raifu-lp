import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SubscriptionTeaser = () => (
    <section className="px-4 sm:px-6 py-12 mx-auto relative overflow-hidden">
        <ScrollReveal>
            {/* メインカード：あさの様専用月額サブスク */}
            <div className="relative py-10 px-6 text-center bg-white/[0.03] rounded-2xl border border-amber-500/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="section-header mb-6">
                    <div className="shu-accent"></div>
                    <div className="title-group">
                        <span className="title-en">Subscription</span>
                        <span className="title-jp">月額課金制お好み焼き</span>
                    </div>
                </div>

                {/* 1st Memberバッジ */}
                <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[10px] font-bold px-5 py-1.5 rounded-lg tracking-[0.2em] uppercase shadow-md font-display">1st Member</span>
                </div>

                <p className="text-amber-400 font-bold text-sm mb-2 tracking-wider">世界初！？ お好み焼きの月額サブスク</p>

                <h2 className="text-2xl font-black text-white leading-relaxed mb-2">
                    初の月額課金者 🎉
                </h2>
                <p className="gold-shimmer text-3xl font-black leading-[1.6] mb-4">
                    『あさの』様
                </p>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                    あさの様専用のお好み焼き月額サブスク！<br />
                    毎営業日、来風のお好み焼きを<br />
                    1日1回お楽しみいただけます 🔥
                </p>

                <div className="wa-divider my-5">
                    <span className="text-amber-500/40 text-xs">◆</span>
                </div>

                {/* 料金 */}
                <div className="mb-5">
                    <div className="inline-block bg-amber-600/15 border border-amber-500/25 rounded-xl px-6 py-4">
                        <p className="text-white/50 text-xs tracking-wider mb-1">月額料金</p>
                        <p className="text-white font-black text-3xl leading-none">
                            ¥11,000
                            <span className="text-sm font-medium text-white/50 ml-1">（税込）</span>
                        </p>
                    </div>
                </div>

                {/* サービス内容 */}
                <div className="text-left max-w-xs mx-auto space-y-3 mb-5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xl mt-0.5 shrink-0">🍳</span>
                        <div>
                            <p className="text-white/90 text-sm font-bold">毎営業日1回お好み焼きが食べられる</p>
                            <p className="text-white/40 text-xs mt-0.5">営業日であれば毎日1回ご利用いただけます</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xl mt-0.5 shrink-0">😎</span>
                        <div>
                            <p className="text-white/90 text-sm font-bold">退店時顔パス🤩</p>
                            <p className="text-white/40 text-xs mt-0.5">お会計不要でスムーズにご退店いただけます</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xl mt-0.5 shrink-0">📅</span>
                        <div>
                            <p className="text-white/90 text-sm font-bold">月額定額制で安心</p>
                            <p className="text-white/40 text-xs mt-0.5">月々11,000円（税込）のお支払いのみ</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <span className="text-xl mt-0.5 shrink-0">🔥</span>
                        <div>
                            <p className="text-white/90 text-sm font-bold">来風のお好み焼きを毎日堪能</p>
                            <p className="text-white/40 text-xs mt-0.5">あさの様だけの特別プラン</p>
                        </div>
                    </div>
                </div>

                <div className="wa-divider my-5">
                    <span className="text-amber-500/40 text-xs">◆</span>
                </div>

                <p className="text-white/35 text-xs tracking-wider">ご利用ありがとうございます！</p>
                <p className="text-white/25 text-xs tracking-[0.15em] font-display uppercase mt-2">Asano-sama Special Monthly Plan</p>
            </div>
        </ScrollReveal>
    </section>
);
