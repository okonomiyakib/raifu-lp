import React from 'react';
import { IconFacebook, IconInstagram, IconYouTube, IconXSNS } from '../ui/Icons';

export const Footer = () => (
    <footer className="bg-brand-dark border-t border-brand-gold/10 py-12 px-6 text-center z-10 relative">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-brand-gold/30 overflow-hidden bg-white relative shadow-lg">
            <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
        </div>

        {/* SNS Links */}
        <div className="flex justify-center flex-wrap gap-6 mb-10">
            <a href="https://www.facebook.com/GuangDaoLiuoHaomiShaoLaiFengraifu/" target="_blank" className="transform hover:scale-110 transition-transform">
                <IconFacebook className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/okonomiyaki_raifu/" target="_blank" className="transform hover:scale-110 transition-transform">
                <IconInstagram className="w-10 h-10" />
            </a>
            <a href="https://www.youtube.com/@user-cv7gk1be7j" target="_blank" className="transform hover:scale-110 transition-transform">
                <IconYouTube className="w-10 h-10" />
            </a>
            <a href="https://x.com/raifu_0405" target="_blank" className="transform hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-white/20">
                    <IconXSNS className="w-6 h-6" />
                </div>
            </a>
            <a href="https://financie.jp/users/okonomiyakib" target="_blank" className="transform hover:scale-110 transition-transform">
                <img src="./assets/financie.jpg" alt="FiNANCiE" className="w-10 h-10 rounded-lg shadow-lg" />
            </a>
        </div>

        <div className="flex justify-center gap-4 mb-6 text-brand-gold/40">
            <div className="w-8 h-[1px] bg-current self-center"></div>
            <span className="font-serif text-xs">Information</span>
            <div className="w-8 h-[1px] bg-current self-center"></div>
        </div>

        <div className="text-white/80 text-sm leading-relaxed font-serif space-y-4 mb-8">
            <p>
                〒702-8058<br />
                岡山県岡山市南区並木町2丁目14-8
            </p>
            <p>
                <span className="block text-brand-gold/60 text-xs mb-1">Open</span>
                11:30 - 14:00<br />
                17:30 - 20:00
            </p>
            <p>
                <span className="block text-brand-gold/60 text-xs mb-1">Close</span>
                水曜日・木曜日 (不定休あり)
            </p>
            <a href="tel:0862647202" className="inline-block mt-2 text-xl font-bold border border-white/20 py-2 px-6 rounded-full hover:bg-white/10 transition-colors">
                📞 086-264-7202
            </a>
        </div>

        <div className="text-[10px] text-white/20">
            &copy; 2026 RAIFU Project. All Rights Reserved.
        </div>
    </footer>
);
