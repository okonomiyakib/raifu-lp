import React, { useState, useEffect, useRef } from 'react';

export const Header = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Attempt to play audio on mount
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Auto-play prevented by browser:", error);
                    setIsPlaying(false);
                }).then(() => {
                    // If successful or handled
                    if (!audioRef.current.paused) {
                        setIsPlaying(true);
                    }
                });
            }
        }
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div id="header-container">
            <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent pointer-events-none transition-all duration-500">
                <div className="flex items-center gap-3 pointer-events-auto w-full">
                    {/* Logo */}
                    <div className="w-12 h-12 shrink-0 rounded-full border-2 border-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.3)] overflow-hidden bg-white relative">
                        <img src="./assets/raifu_logo_new.png" alt="来風" className="w-full h-full object-cover" />
                    </div>

                    {/* Official HP Button */}
                    <a
                        href="https://gamma.app/docs/-zoev3h5gnk64yda?mode=doc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-brand-gold/20 hover:bg-brand-gold/30 border border-brand-gold/50 text-brand-gold text-xs font-bold px-3 py-2 rounded-full backdrop-blur-md transition-all active:scale-95 shadow-[0_0_10px_rgba(197,160,89,0.2)]"
                    >
                        <span>🏠</span>
                        <span className="sm:hidden">HP</span>
                        <span className="hidden sm:inline">公式サイト</span>
                    </a>

                    <div className="flex-1"></div>

                    {/* Music Credit & BGM Control */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://x.com/SHACK_SAME_SAME?s=20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full pr-3 pl-1 py-1 text-[10px] text-white/90 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center border border-white/20 overflow-hidden">
                                <img src="./assets/shack.jpg" alt="Shack" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-[8px] text-brand-gold/70">Music by</span>
                                <span className="font-serif font-bold">Shack</span>
                            </div>
                        </a>

                        <div className="relative">
                            <audio ref={audioRef} loop autoPlay>
                                <source src="./assets/ninket_cm.mp3" type="audio/mp3" />
                            </audio>
                            <button
                                onClick={togglePlay}
                                className={`w-10 h-10 flex items-center justify-center rounded-full border border-brand-gold/30 bg-black/40 backdrop-blur-md text-brand-gold transition-all duration-300 ${isPlaying ? 'shadow-[0_0_10px_rgba(197,160,89,0.4)] bg-brand-gold/10' : ''}`}
                                aria-label={isPlaying ? "Stop Music" : "Play Music"}
                            >
                                {isPlaying ? (
                                    <div className="flex gap-[2px] h-4 items-end">
                                        <div className="w-[3px] bg-brand-gold animate-[pulse_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
                                        <div className="w-[3px] bg-brand-gold animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s', height: '100%' }}></div>
                                        <div className="w-[3px] bg-brand-gold animate-[pulse_0.8s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M8 5v14l11-7z" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
