import React from 'react';

export const Hero = () => (
    <section className="relative h-[80vh] min-h-[520px] flex flex-col items-center justify-end pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 select-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1215] via-[#2b1215]/50 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#2b1215] to-transparent z-10"></div>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-[120px] z-10 pointer-events-none"></div>
            <div className="w-full h-full bg-cover bg-center animate-ken-burns" style={{ backgroundImage: "url('./assets/hero.jpg')" }}></div>
        </div>

        <div className="relative z-20 px-6 w-full max-w-[540px] mx-auto">
            <div className="space-y-5">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="inline-flex items-center gap-2 bg-[#2b1215]/60 backdrop-blur-md border border-red-500/30 rounded-lg px-3 py-1.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-[neonPulse_2s_ease-in-out_infinite]"></div>
                        <span className="text-white text-xs tracking-wider font-medium">広島流お好み焼　来風</span>
                    </div>
                </div>

                <h1 className="text-[2.8rem] leading-[1.15] font-black text-white text-shadow-warm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    新時代の<br />
                    飲食店の形を<br />
                    <span className="gold-shimmer">共に創る</span>
                </h1>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <p className="text-white/80 text-[15px] leading-[2] tracking-wide">
                        お客様と創り上げる<br />
                        新しい「食」のエンターテイメント。
                    </p>
                </div>

                <div className="animate-fade-in-up pt-4" style={{ animationDelay: '0.8s' }}>
                    <div className="flex items-center gap-3 text-white/30 text-[10px] tracking-[0.3em] font-display uppercase">
                        <div className="w-8 h-px bg-gradient-to-r from-red-500/60 to-transparent"></div>
                        Scroll
                        <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center pt-1">
                            <div className="w-0.5 h-1.5 bg-red-500/80 rounded-full animate-[float_2s_ease-in-out_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
