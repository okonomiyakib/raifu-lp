import React from 'react';

export const Hero = () => (
    <section className="relative h-[75vh] min-h-[480px] flex flex-col items-center justify-end pb-10 overflow-hidden">
        {/* 背景画像 + 赤の強いオーバーレイ */}
        <div className="absolute inset-0 z-0 select-none">
            {/* 赤味の強いグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-wa-kuro via-[#3a1010]/50 to-[#5a1515]/40 z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-wa-kuro to-transparent z-10"></div>
            <div className="w-full h-full bg-cover bg-center animate-ken-burns" style={{ backgroundImage: "url('./assets/hero.jpg')" }}></div>
        </div>

        {/* コンテンツ */}
        <div className="relative z-20 px-6 w-full max-w-[540px] mx-auto">
            <div className="space-y-4">
                {/* 店名 — 赤ラベル付き */}
                <div className="animate-fade-in-up flex items-center gap-3" style={{ animationDelay: '0.2s' }}>
                    <div className="w-1.5 h-10 bg-gradient-to-b from-wa-kurenai to-wa-gold rounded-full"></div>
                    <p className="text-wa-gold text-sm tracking-[0.15em] font-serif font-bold">
                        広島流お好み焼　来風
                    </p>
                </div>

                {/* メインタイトル */}
                <h1 className="text-[2.6rem] leading-[1.2] font-display font-black text-white text-shadow-warm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    新時代の<br />
                    飲食店の形を<br />
                    <span className="gold-shimmer">共に創る</span>
                </h1>

                {/* サブテキスト */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-stretch gap-3">
                        <div className="w-[3px] bg-gradient-to-b from-wa-kurenai to-wa-shu rounded-full shrink-0"></div>
                        <div>
                            <p className="text-white/90 text-[15px] leading-[2] tracking-wide font-serif">
                                お客様と創り上げる<br />
                                新しい「食」のエンターテイメント。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
