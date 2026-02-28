import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LimitedMenuSection = ({ onImageClick }) => {
    const menuItems = [
        { id: 1, src: './assets/肉玉そば『極み』画像.PNG', alt: '肉玉そば『極』', price: '950円(税込)', badge: 'RECOMMEND', isSpecial: true },
        { id: 2, src: './assets/kaki_bakumori.jpg', alt: 'かき爆盛 たっぷり400g', price: '3,500円(税込)', badge: '冬季限定', isSpecial: true },
        { id: 3, src: './assets/menu_lp_3.jpg', alt: 'Comming Soon', price: '', badge: '03', isSpecial: false },
        { id: 4, src: './assets/menu_lp_4.jpg', alt: 'Comming Soon', price: '', badge: '04', isSpecial: false },
    ];

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

                <div className="grid grid-cols-2 gap-3">
                    {menuItems.map((item) => (
                        <div key={item.id}
                            className={`relative group aspect-[4/3] cursor-pointer rounded-2xl overflow-hidden shadow-lg border ${item.isSpecial ? 'border-red-500/30 animate-border-glow' : 'border-white/10'}`}
                            onClick={() => item.src && !item.alt.includes('Comming Soon') && onImageClick(item.src)}>
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                            <div className="absolute inset-0 hidden items-center justify-center bg-[#381a1e] text-white/30 text-xs flex-col gap-2">
                                <span className="text-3xl">🍽️</span>
                                <span className="tracking-widest text-[10px] font-display uppercase">Coming Soon</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                                <div className="text-white font-bold text-sm leading-tight drop-shadow-lg">{item.alt}</div>
                                {item.price && <div className="text-red-300 text-sm font-bold mt-0.5">{item.price}</div>}
                            </div>

                            <div className={`absolute top-0 left-0 text-[9px] font-bold px-3 py-1.5 rounded-br-xl z-10 font-display tracking-wider uppercase ${item.isSpecial ? 'bg-red-600 text-white shadow-lg' : 'bg-black/40 text-white/50'}`}>
                                {item.badge}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/30 text-xs mt-4">※画像タップで拡大表示</p>
            </ScrollReveal>
        </section>
    );
};
