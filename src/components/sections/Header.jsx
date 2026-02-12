import React, { useState, useEffect, useRef } from 'react';

export const Header = () => {
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

    const navItems = [
        { label: '🏠 トップ', href: '#top' },
        { label: '📺 NEW動画', href: '#new' },
        { label: '🍽️ メニュー', href: '#menu' },
        { label: '🎮 チャレンジ', href: '#challenge' },
        { label: '📰 お知らせ', href: '#info' },
        { label: '🔗 プロジェクト', href: '#activities' },
        { label: '🎯 ゲーム', href: '#games' },
        { label: '🏆 ランキング', href: '#ranking' },
    ];

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-2.5 flex justify-between items-center pointer-events-none transition-all duration-500 ${scrolled ? 'bg-[#2a0a0a]/95 backdrop-blur-lg shadow-lg border-b border-wa-kurenai/20' : 'bg-gradient-to-b from-[#2a0a0a]/80 to-transparent'}`}>
                <div className="flex items-center gap-2.5 pointer-events-auto w-full">
                    {/* ロゴ */}
                    <div className="w-10 h-10 shrink-0 rounded-full border-2 border-wa-gold/50 overflow-hidden bg-white shadow-lg">
                        <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
                    </div>

                    {/* 公式HP */}
                    <a href="https://gamma.app/docs/-zoev3h5gnk64yda?mode=doc" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-wa-gold text-wa-kuro text-[11px] font-black px-3.5 py-1.5 rounded-full active:scale-95 transition-transform shadow-md">
                        <span>🏠</span>
                        <span className="tracking-wide">公式HP</span>
                    </a>

                    <div className="flex-1"></div>

                    {/* Music */}
                    <a href="https://x.com/SHACK_SAME_SAME?s=20" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full pr-2 pl-0.5 py-0.5 text-[9px] text-white">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                            <img src="./assets/shack.jpg" alt="Shack" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-[7px] text-wa-gold/70 font-western uppercase tracking-widest">Music</span>
                            <span className="font-bold">Shack</span>
                        </div>
                    </a>

                    {/* 再生ボタン */}
                    <div className="relative">
                        <audio ref={audioRef} loop autoPlay>
                            <source src="./assets/ninket_cm.mp3" type="audio/mp3" />
                        </audio>
                        <button onClick={togglePlay}
                            className={`w-9 h-9 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${isPlaying
                                ? 'border-wa-shu bg-wa-shu/20 text-wa-shu shadow-[0_0_12px_rgba(192,57,43,0.4)]'
                                : 'border-white/20 bg-white/5 text-white/40'}`}
                            aria-label={isPlaying ? "Stop" : "Play"}>
                            {isPlaying ? (
                                <div className="flex gap-[2px] h-3.5 items-end">
                                    <div className="w-[3px] bg-wa-shu rounded-full animate-[pulse_1s_ease-in-out_infinite]" style={{ height: '60%' }}></div>
                                    <div className="w-[3px] bg-wa-shu rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s', height: '100%' }}></div>
                                    <div className="w-[3px] bg-wa-shu rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ animationDelay: '0.4s', height: '70%' }}></div>
                                </div>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>
                    </div>

                    {/* ハンバーガーメニュー */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-wa-kurenai/20 border border-wa-kurenai/30 active:scale-95 transition-all"
                        aria-label="メニュー">
                        <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* ナビゲーションメニュー */}
            {menuOpen && (
                <div className="fixed inset-0 z-[45] bg-[#2a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center" onClick={() => setMenuOpen(false)}>
                    <nav className="w-full max-w-xs space-y-1" onClick={e => e.stopPropagation()}>
                        <p className="text-wa-gold/40 text-[10px] font-western tracking-[0.3em] uppercase text-center mb-4">Navigation</p>
                        {navItems.map((item, i) => (
                            <button key={i} onClick={() => handleNavClick(item.href)}
                                className="w-full text-left py-3.5 px-5 rounded-xl text-white text-base font-serif font-bold active:bg-wa-kurenai/20 transition-colors flex items-center gap-3 hover:text-wa-gold">
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                    <button onClick={() => setMenuOpen(false)} className="mt-8 text-white/30 text-sm font-western tracking-wider border border-white/10 px-6 py-2 rounded-full">
                        Close
                    </button>
                </div>
            )}
        </>
    );
};
