import React from 'react';
import { IconFacebook, IconInstagram, IconYouTube, IconXSNS } from '../ui/Icons';

export const Footer = () => (
    <footer className="relative bg-gradient-to-b from-[#3a1010] to-[#2a0a0a] border-t-2 border-wa-kurenai/30 py-12 px-5 text-center z-10 overflow-hidden">
        {/* 赤いぼかし背景 */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(200,50,50,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(180,30,30,0.2) 0%, transparent 50%)' }}></div>

        <div className="relative z-10">
            {/* ロゴ */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-wa-gold/40 overflow-hidden bg-white shadow-xl animate-glow-pulse">
                <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
            </div>

            {/* SNSリンク — 大きく明るく見やすく */}
            <div className="flex justify-center flex-wrap gap-4 mb-8">
                <a href="https://www.facebook.com/GuangDaoLiuoHaomiShaoLaiFengraifu/" target="_blank"
                    className="w-14 h-14 bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/30 active:scale-95 transition-transform">
                    <IconFacebook className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/okonomiyaki_raifu/" target="_blank"
                    className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] rounded-2xl flex items-center justify-center shadow-lg shadow-pink-900/30 active:scale-95 transition-transform">
                    <IconInstagram className="w-7 h-7" />
                </a>
                <a href="https://www.youtube.com/@user-cv7gk1be7j" target="_blank"
                    className="w-14 h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/30 active:scale-95 transition-transform">
                    <IconYouTube className="w-7 h-7" />
                </a>
                <a href="https://x.com/raifu_0405" target="_blank"
                    className="w-14 h-14 bg-[#333333] rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform border border-white/10">
                    <IconXSNS className="w-6 h-6" />
                </a>
                <a href="https://financie.jp/users/okonomiyakib" target="_blank"
                    className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg active:scale-95 transition-transform border-2 border-wa-gold/30">
                    <img src="./assets/financie.jpg" alt="FiNANCiE" className="w-full h-full object-cover" />
                </a>
            </div>

            {/* 区切り */}
            <div className="wa-divider mb-6">
                <span className="text-wa-kurenai text-xs">◆</span>
            </div>

            {/* 店舗情報 */}
            <div className="text-white/70 text-sm leading-loose font-serif space-y-5 mb-8">
                <p>〒702-8058<br /><span className="font-bold text-white/90">岡山県岡山市南区並木町2丁目14-8</span></p>

                <div className="flex items-stretch justify-center gap-6 text-[13px]">
                    <div className="text-center">
                        <span className="block text-wa-kurenai text-[10px] mb-1 font-western tracking-widest font-bold uppercase">Open</span>
                        <span className="text-white/90 font-bold">11:30 - 14:00</span><br />
                        <span className="text-white/90 font-bold">17:30 - 20:00</span>
                    </div>
                    <div className="w-px bg-wa-kurenai/30 self-stretch"></div>
                    <div className="text-center">
                        <span className="block text-wa-kurenai text-[10px] mb-1 font-western tracking-widest font-bold uppercase">Close</span>
                        <span className="text-white/90 font-bold">水曜日・木曜日</span><br />
                        <span className="text-white/40 text-xs">(不定休あり)</span>
                    </div>
                </div>

                <a href="tel:0862647202" className="inline-flex items-center gap-2 text-lg font-black bg-wa-kurenai text-white py-3 px-8 rounded-full active:scale-95 transition-transform shadow-xl hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                    📞 086-264-7202
                </a>
            </div>

            <div className="text-[10px] text-white/15 font-western tracking-wider">
                &copy; 2026 RAIFU Project. All Rights Reserved.
            </div>
        </div>
    </footer>
);
