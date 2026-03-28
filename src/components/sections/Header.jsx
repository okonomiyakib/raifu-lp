import React, { useState, useEffect, useRef } from 'react';
import { DesignGalleryButton } from './DesignGallerySection';

export const Header = ({ onDesignClick }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => setIsPlaying(false)).then(() => {
                    if (audioRef.current && !audioRef.current.paused) setIsPlaying(true);
                });
            }
        }
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const sectionTags = [
        { label: 'NEW', href: '#new' },
        { label: 'メニュー', href: '#menu' },
        { label: 'チャレンジ', href: '#challenge' },
        { label: 'お知らせ', href: '#info' },
        { label: 'プロジェクト', href: '#activities' },
        { label: 'ゲーム', href: '#games' },
        { label: 'チーム', href: '#team' },
    ];

    const navItems = [
        { label: 'トップ', href: '#top', icon: '⌂' },
        ...sectionTags.map(t => ({ label: t.label, href: t.href, icon: '›' })),
    ];

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* メインヘッダー */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${scrolled ? 'bg-[#2b1215]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : 'bg-gradient-to-b from-[#2b1215]/90 to-transparent'}`}>
                <div className="px-4 py-2.5 flex items-center pointer-events-auto">
                    <div className="w-10 h-10 shrink-0 rounded-xl border border-red-500/30 overflow-hidden bg-white shadow-lg shadow-red-900/20">
                        <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
                    </div>

                    <a href="https://gamma.app/docs/-zoev3h5gnk64yda?mode=doc" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg active:scale-95 transition-all shadow-lg shadow-red-900/30 hover:bg-red-500 ml-2.5">
                        <span className="font-display text-[9px] tracking-wider">HP</span>
                        <span className="tracking-wide">公式</span>
                    </a>

                    <div className="flex-1"></div>

                    {/* デザインボタン */}
                    <DesignGalleryButton onClick={onDesignClick} />

                    {/* Shack */}
                    <a href="https://x.com/SHACK_SAME_SAME?s=20" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-white/8 backdrop-blur-md rounded-lg pr-2 pl-0.5 py-0.5 text-[9px] text-white border border-white/10 ml-1.5 shrink-0">
                        <div className="w-5 h-5 rounded-md overflow-hidden">
                            <img src="./assets/shack.jpg" alt="Shack" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[7px] text-red-400 font-display uppercase tracking-widest">Music</span>
                            <span className="font-bold">Shack</span>
                        </div>
                    </a>

                    {/* 健ちゃん */}
                    <a href="https://x.com/kabuco_h?s=20" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-white/8 backdrop-blur-md rounded-lg pr-2 py-0.5 pl-1.5 text-[9px] text-white border border-white/10 ml-1.5 shrink-0">
                        <div className="flex flex-col leading-none">
                            <span className="text-[7px] text-emerald-400 font-display uppercase tracking-widest">CNPトレカ開発</span>
                            <span className="font-bold">健ちゃん</span>
                        </div>
                    </a>

                    <div className="relative ml-1.5">
                        <audio ref={audioRef} loop autoPlay>
                            <source src="./assets/ninket_cm.mp3" type="audio/mp3" />
                        </audio>
                        <button onClick={togglePlay}
                            className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-300 ${isPlaying
                                ? 'border-red-500 bg-red-600/30 text-red-400 shadow-[0_0_15px_rgba(255,80,80,0.3)]'
                                : 'border-white/15 bg-white/8 text-white/50'}`}
                            aria-label={isPlaying ? "Stop" : "Play"}>
                            {isPlaying ? (
                                <div className="flex gap-[2px] h-3.5 items-end">
                                    <div className="w-[3px] bg-red-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ height: '60%' }}></div>
                                    <div className="w-[3px] bg-red-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s', height: '100%' }}></div>
                                    <div className="w-[3px] bg-red-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ animationDelay: '0.4s', height: '70%' }}></div>
                                </div>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-white/8 border border-white/15 active:scale-95 transition-all hover:border-red-500/40 ml-1.5"
                        aria-label="メニュー">
                        <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                        <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
                    </button>
                </div>

                {/* セクションナビタグ — 常時表示 */}
                <div className="transition-all duration-500 overflow-hidden pointer-events-auto max-h-12 opacity-100">
                    <div className="section-nav px-4 pb-2.5">
                        {sectionTags.map((tag, i) => (
                            <button key={i} onClick={() => handleNavClick(tag.href)} className="section-nav-tag">
                                {tag.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* フルスクリーンメニュー */}
            {menuOpen && (
                <div className="fixed inset-0 z-[45] bg-[#2b1215]/98 backdrop-blur-2xl flex flex-col items-center justify-center" onClick={() => setMenuOpen(false)}>
                    <nav className="w-full max-w-xs space-y-0.5" onClick={e => e.stopPropagation()}>
                        <p className="text-red-400/50 text-[10px] font-display tracking-[0.3em] uppercase text-center mb-6">Navigation</p>
                        {navItems.map((item, i) => (
                            <button key={i} onClick={() => handleNavClick(item.href)}
                                className="w-full text-left py-3 px-5 rounded-lg text-white/80 text-sm font-medium active:bg-red-600/15 transition-all flex items-center gap-4 hover:text-red-300 group">
                                <span className="text-red-500/50 font-display text-xs group-hover:text-red-400 transition-colors">{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                    <button onClick={() => setMenuOpen(false)} className="mt-8 text-white/30 text-xs font-display tracking-[0.2em] border border-white/15 px-6 py-2 rounded-lg hover:border-red-500/40 hover:text-red-400/60 transition-all uppercase">
                        Close
                    </button>
                </div>
            )}
        </>
    );
};
