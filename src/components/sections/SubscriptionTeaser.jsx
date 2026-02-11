import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SubscriptionTeaser = () => (
    <section className="px-5 py-10 max-w-lg mx-auto relative overflow-hidden my-4">
        <ScrollReveal>
            <div className="bg-gradient-to-r from-brand-black via-brand-red/20 to-brand-black border-y border-brand-gold/30 py-8 px-4 text-center relative group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>

                <div className="inline-block bg-brand-gold text-brand-black text-[10px] font-black px-2 py-0.5 rounded mb-3 tracking-widest transform -rotate-2">
                    COMING SOON...
                </div>

                <h2 className="text-xl md:text-2xl font-serif font-black text-white leading-relaxed mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                    <span className="block text-sm text-brand-gold mb-1 font-sans font-normal">世界初！？</span>
                    お好み焼きの<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold animate-pulse-slow">月額課金</span>
                    ？<br />
                    プロジェクト始動予定
                </h2>

                <div className="w-16 h-[2px] bg-brand-red mx-auto my-4"></div>

                <p className="text-white/60 text-xs tracking-wider">
                    PROJECT STARTING SOON
                </p>
            </div>
        </ScrollReveal>
    </section>
);
