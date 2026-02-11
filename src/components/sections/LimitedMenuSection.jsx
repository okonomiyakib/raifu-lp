import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LimitedMenuSection = ({ onImageClick }) => {
    const menuItems = [
        { id: 1, src: './assets/肉玉そば『極み』画像.PNG', alt: '肉玉そば『極』', price: '950円(税込)', badge: 'RECOMMEND', isSpecial: true },
        { id: 2, src: './assets/menu_lp_2.jpg', alt: 'Comming Soon', price: '', badge: '02', isSpecial: false },
        { id: 3, src: './assets/menu_lp_3.jpg', alt: 'Comming Soon', price: '', badge: '03', isSpecial: false },
        { id: 4, src: './assets/menu_lp_4.jpg', alt: 'Comming Soon', price: '', badge: '04', isSpecial: false },
    ];

    return (
        <section className="px-5 py-8 max-w-lg mx-auto relative z-20">
            <ScrollReveal>
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-serif font-bold text-white relative inline-block">
                        <span className="text-brand-gold mr-2 text-xl">✦</span>
                        店内LP限定メニュー
                        <span className="text-brand-gold ml-2 text-xl">✦</span>
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mt-2"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className={`relative group overflow-hidden rounded-xl border shadow-lg bg-black/60 aspect-[4/3] ${item.isSpecial ? 'border-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]' : 'border-brand-gold/30'} cursor-pointer`}
                            onClick={() => item.src && !item.alt.includes('Comming Soon') && onImageClick(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="absolute inset-0 hidden items-center justify-center bg-brand-gray/50 text-white/30 text-xs font-mono flex-col gap-2">
                                <span className="text-2xl">🍽️</span>
                                <span>No Image</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-3 pointer-events-none">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-white font-bold text-sm leading-tight shadow-black drop-shadow-md">{item.alt}</div>
                                    {item.price && <div className="text-brand-gold text-xs font-mono mt-1">{item.price}</div>}
                                </div>
                            </div>

                            <div className={`absolute top-0 left-0 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg shadow-md z-10 tracking-wider ${item.isSpecial ? 'bg-gradient-to-r from-red-600 to-brand-red ring-1 ring-white/20' : 'bg-brand-gray/80 text-white/80'}`}>
                                {item.badge}
                            </div>

                            {!item.alt.includes('Comming Soon') && (
                                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-center text-white/40 text-[10px] mt-4">※画像をタップで拡大表示</p>
            </ScrollReveal>
        </section>
    );
};
