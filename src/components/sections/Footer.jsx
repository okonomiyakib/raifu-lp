import React from 'react';
import { IconFacebook, IconInstagram, IconYouTube, IconXSNS } from '../ui/Icons';

export const Footer = () => (
    <footer className="relative bg-gradient-to-b from-[#1e0d0f] to-[#150a0b] border-t-2 border-red-600/30 py-12 px-5 text-center z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10">
            <div className="mx-auto mb-6 rounded-xl border-2 border-red-500/30 overflow-hidden bg-white shadow-xl shadow-red-900/20 animate-glow-pulse" style={{ width: '72px', height: '72px' }}>
                <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-8">
                <a href="https://www.facebook.com/GuangDaoLiuoHaomiShaoLaiFengraifu/" target="_blank"
                    className="w-[52px] h-[52px] bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]">
                    <IconFacebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/okonomiyaki_raifu/" target="_blank"
                    className="w-[52px] h-[52px] bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(253,29,29,0.4)]">
                    <IconInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@user-cv7gk1be7j" target="_blank"
                    className="w-[52px] h-[52px] bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                    <IconYouTube className="w-6 h-6" />
                </a>
                <a href="https://x.com/raifu_0405" target="_blank"
                    className="w-[52px] h-[52px] bg-[#333] rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all border border-white/10 hover:bg-[#444] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                    <IconXSNS className="w-5 h-5" />
                </a>
                <a href="https://financie.jp/users/okonomiyakib" target="_blank"
                    className="w-[52px] h-[52px] rounded-2xl overflow-hidden shadow-lg active:scale-95 transition-all border-2 border-yellow-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                    <img src="./assets/financie.jpg" alt="FiNANCiE" className="w-full h-full object-cover" />
                </a>
            </div>

            <div className="wa-divider mb-6">
                <span className="text-red-500 text-xs">◆</span>
            </div>

            <div className="text-white/65 text-sm leading-loose space-y-5 mb-8">
                <p>〒702-8058<br /><span className="font-medium text-white/90">岡山県岡山市南区並木町2丁目14-8</span></p>
                <div className="flex items-stretch justify-center gap-6 text-[13px]">
                    <div className="text-center">
                        <span className="block text-red-400 text-[10px] mb-1 font-display tracking-widest font-bold uppercase">Open</span>
                        <span className="text-white/85 font-medium">11:30 - 14:00</span><br />
                        <span className="text-white/85 font-medium">17:30 - 20:00</span>
                    </div>
                    <div className="w-px bg-red-500/20 self-stretch"></div>
                    <div className="text-center">
                        <span className="block text-red-400 text-[10px] mb-1 font-display tracking-widest font-bold uppercase">Close</span>
                        <span className="text-white/85 font-medium">水曜日・木曜日</span><br />
                        <span className="text-white/45 text-xs">(不定休あり)</span>
                    </div>
                </div>
                <a href="tel:0862647202" className="inline-flex items-center gap-2 text-lg font-black bg-red-600 text-white py-3 px-8 rounded-xl active:scale-95 transition-all shadow-xl shadow-red-900/30 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(255,60,60,0.4)]">
                    📞 086-264-7202
                </a>
            </div>

            <div className="text-[10px] text-white/20 font-display tracking-wider uppercase">
                &copy; 2026 RAIFU Project. All Rights Reserved.
            </div>
        </div>
    </footer>
);
