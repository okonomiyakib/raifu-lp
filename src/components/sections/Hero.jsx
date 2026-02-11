import React from 'react';

export const Hero = () => (
    <section className="relative h-[60vh] min-h-[500px] flex flex-col items-center justify-end pb-8 overflow-hidden">
        <div className="absolute inset-0 z-0 select-none">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/50 z-10"></div>
            <div className="w-full h-full bg-cover bg-center animate-pulse-slow scale-105" style={{ backgroundImage: "url('./assets/hero.jpg')" }}></div>
        </div>

        <div className="relative z-20 px-6 w-full max-w-lg mx-auto mb-4 text-left">
            <div className="space-y-4">
                <p className="text-brand-gold text-xs tracking-[0.3em] font-serif pl-1 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>広島流お好み焼 来風 - らいふ -</p>
                <h1 className="text-4xl font-serif font-black text-white leading-tight tracking-tight text-shadow-black animate-fade-in-up mix-blend-overlay" style={{ animationDelay: '0.2s' }}>新時代の<br />飲食店の形を<br />共に創る</h1>
                <p className="text-white font-serif mt-4 text-base leading-relaxed animate-fade-in-up border-l-2 border-brand-red pl-4" style={{ animationDelay: '0.3s' }}>お客様と創り上げる<br />新しい「食」のエンターテイメント。<br /><span className="text-xs opacity-60 mt-1 block font-sans">Traditional taste, New experience.</span></p>
            </div>
        </div>
    </section>
);
