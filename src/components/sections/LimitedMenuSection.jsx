import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LimitedMenuSection = ({ onImageClick }) => {
    const mainMenuItems = [
        { id: 1, src: './assets/肉玉そば『極み』画像.PNG', alt: '肉玉そば『極』', price: '950円(税込)', badge: 'RECOMMEND', hasImage: true },
        { id: 2, src: './assets/kaki_bakumori.jpg', alt: 'かき爆盛 たっぷり400g', price: '3,500円(税込)', badge: '冬季限定', hasImage: true },
        { id: 3, src: null, alt: '肉玉そば超肉まみれ', price: '1,550円(税込)', badge: 'NEW', hasImage: false, emoji: '🥩' },
        { id: 4, src: null, alt: '肉玉そばチーズまみれ', price: '1,350円(税込)', badge: 'NEW', hasImage: false, emoji: '🧀' },
        { id: 5, src: null, alt: '高血圧おこ', price: '1,350円(税込)', badge: '店長not推奨', hasImage: false, emoji: '🔥', subtitle: '※食べすぎ注意！' },
        { id: 6, src: null, alt: '二郎系肉玉そば', price: '1,250円(税込)', badge: 'NEW', hasImage: false, emoji: '🍜' },
    ];

    const sideMenuItems = [
        { id: 10, src: null, alt: '嫁泣かせタレ焼き', price: '750円(税込)', badge: 'NEW', hasImage: false, emoji: '😭' },
        { id: 11, src: null, alt: '牛窓甘藍(うしまどかんらん)青唐辛子味噌', price: '550円(税込)', badge: 'NEW', hasImage: false, emoji: '🌶️' },
    ];

    const MenuCard = ({ item, isSide = false }) => (
        <div
            className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg border transition-all duration-500
                ${item.hasImage ? 'aspect-[4/3] border-red-500/30 animate-border-glow' : 'border-white/10 hover:border-red-500/30'}
                ${isSide ? '' : ''}`}
            onClick={() => item.hasImage && item.src && onImageClick(item.src)}
        >
            {item.hasImage ? (
                <>
                    <img src={item.src} alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="absolute inset-0 hidden items-center justify-center bg-[#381a1e] text-white/30 text-xs flex-col gap-2">
                        <span className="text-3xl">🍽️</span>
                        <span className="tracking-widest text-[10px] font-display uppercase">Coming Soon</span>
                    </div>
                </>
            ) : (
                <div className={`${isSide ? 'py-5 px-4' : 'aspect-[4/3]'} bg-gradient-to-br from-[#3d1a1e] via-[#2e1215] to-[#1e0a0c] flex flex-col items-center justify-center gap-2 relative overflow-hidden`}>
                    {/* 装飾的な和風パターン */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #ff6b6b 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ff6b6b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    {/* グローエフェクト */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-red-500/5 blur-3xl rounded-full" />

                    <span className="text-4xl group-hover:scale-125 transition-transform duration-500 drop-shadow-lg relative z-10">
                        {item.emoji}
                    </span>
                    <div className="text-white font-bold text-sm leading-tight text-center drop-shadow-lg relative z-10">
                        {item.alt}
                    </div>
                    {item.subtitle && (
                        <div className="text-red-400/60 text-[10px] font-bold relative z-10">{item.subtitle}</div>
                    )}
                    {item.price && (
                        <div className="text-red-300 text-sm font-bold relative z-10 mt-0.5">{item.price}</div>
                    )}
                    <div className="text-white/20 text-[9px] tracking-widest font-display uppercase mt-1 relative z-10 flex items-center gap-1.5">
                        <span className="w-3 h-px bg-white/20"></span>
                        PHOTO COMING SOON
                        <span className="w-3 h-px bg-white/20"></span>
                    </div>
                </div>
            )}

            {/* テキストオーバーレイ（画像あり用） */}
            {item.hasImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                    <div className="text-white font-bold text-sm leading-tight drop-shadow-lg">{item.alt}</div>
                    {item.price && <div className="text-red-300 text-sm font-bold mt-0.5">{item.price}</div>}
                </div>
            )}

            {/* バッジ */}
            <div className={`absolute top-0 left-0 text-[9px] font-bold px-3 py-1.5 rounded-br-xl z-10 font-display tracking-wider uppercase
                ${item.badge === 'NEW' ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-900/40'
                    : item.badge === 'RECOMMEND' ? 'bg-red-600 text-white shadow-lg'
                        : item.badge === '冬季限定' ? 'bg-red-600 text-white shadow-lg'
                            : item.badge === '店長not推奨' ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                                : 'bg-black/40 text-white/50'}`}>
                {item.badge}
            </div>
        </div>
    );

    return (
        <section className="px-4 py-10 max-w-[540px] mx-auto">
            <ScrollReveal>
                <div className="section-header">
                    <div className="shu-accent"></div>
                    <div className="title-group">
                        <span className="title-en">Menu</span>
                        <span className="title-jp">店内LP限定メニュー</span>
                    </div>
                </div>

                {/* メインメニュー */}
                <div className="mb-2">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-red-400 text-xs font-bold tracking-wider">🔥 メイン</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {mainMenuItems.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* 一品メニュー */}
                <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-400 text-xs font-bold tracking-wider">🍢 一品</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {sideMenuItems.map((item) => (
                            <MenuCard key={item.id} item={item} isSide={false} />
                        ))}
                    </div>
                </div>

                <p className="text-center text-white/30 text-xs mt-4">※画像タップで拡大表示</p>
            </ScrollReveal>
        </section>
    );
};
