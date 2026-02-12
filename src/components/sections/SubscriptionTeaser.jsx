import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SubscriptionTeaser = () => (
    <section className="px-4 py-12 max-w-[540px] mx-auto relative overflow-hidden">
        <ScrollReveal>
            <div className="relative py-10 px-6 text-center bg-[#4a1515]/30 rounded-2xl border border-wa-kurenai/15">
                {/* 朱赤の角飾り */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-wa-kurenai/70"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-wa-kurenai/70"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-wa-kurenai/70"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-wa-kurenai/70"></div>

                <div className="inline-block mb-5">
                    <span className="bg-wa-kurenai text-white text-[11px] font-black px-5 py-1.5 rounded-full tracking-[0.15em] uppercase shadow-md">
                        Coming Soon
                    </span>
                </div>

                <p className="text-wa-kurenai font-bold text-sm mb-2 tracking-wider">世界初！？</p>
                <h2 className="text-2xl font-display font-black text-white leading-relaxed mb-2">
                    お好み焼きの<br />
                    <span className="gold-shimmer text-4xl leading-[1.5]">月額課金</span>
                    ？<br />
                    <span className="text-xl">プロジェクト始動予定</span>
                </h2>

                <div className="wa-divider my-5">
                    <span className="text-wa-kurenai text-xs">◆</span>
                </div>

                <p className="text-white/40 text-xs tracking-[0.2em] font-western uppercase">
                    Project Starting Soon
                </p>
            </div>
        </ScrollReveal>
    </section>
);
