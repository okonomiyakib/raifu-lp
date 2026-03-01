import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SubscriptionTeaser = () => (
    <section className="px-4 py-12 max-w-[540px] mx-auto relative overflow-hidden">
        <ScrollReveal>
            <div className="relative py-10 px-6 text-center bg-white/[0.03] rounded-2xl border border-red-500/15 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-600/10 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="inline-block mb-5">
                    <span className="bg-red-600 text-white text-[10px] font-bold px-5 py-1.5 rounded-lg tracking-[0.2em] uppercase shadow-md font-display">Coming Soon</span>
                </div>

                <p className="text-red-400 font-bold text-sm mb-2 tracking-wider">世界初！？</p>
                <h2 className="text-2xl font-black text-white leading-relaxed mb-2">
                    お好み焼きの<br />
                    <span className="gold-shimmer text-4xl leading-[1.5]">月額課金</span>
                    ？<br />
                    <span className="text-xl font-medium">プロジェクト始動予定</span>
                </h2>

                <div className="wa-divider my-5">
                    <span className="text-red-500/40 text-xs">◆</span>
                </div>

                <p className="text-white/25 text-xs tracking-[0.2em] font-display uppercase">Project Starting Soon</p>
            </div>

            {/* 初の月額課金者 */}
            <div className="relative py-8 px-6 mt-8 text-center bg-white/[0.03] rounded-2xl border border-amber-500/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/30"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/30"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="inline-block mb-4">
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[10px] font-bold px-5 py-1.5 rounded-lg tracking-[0.2em] uppercase shadow-md font-display">Coming Soon</span>
                </div>

                <h3 className="text-xl font-black text-white leading-relaxed mb-2">
                    初の月額課金者現る！？
                </h3>
                <p className="gold-shimmer text-2xl font-black leading-[1.5] mb-3">
                    『あさの』様
                </p>

                <div className="wa-divider my-4">
                    <span className="text-amber-500/40 text-xs">◆</span>
                </div>

                <p className="text-white/40 text-sm tracking-wider">詳細は近日公開</p>
            </div>
        </ScrollReveal>
    </section>
);
