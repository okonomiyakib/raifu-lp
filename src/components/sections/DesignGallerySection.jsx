import React, { useState } from 'react';

const designs = [
    { id: 1, src: './assets/design_ninjadao_raifu.jpg', alt: 'NINJA DAO × 来風' },
    { id: 2, src: './assets/design_ninket_puchi.png', alt: 'にんケットぷちin岡山' },
    { id: 3, src: './assets/design_minnano_raifu.jpg', alt: 'みんなのらいふ' },
];

/* ヘッダー用の小さなボタン */
export const DesignGalleryButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center gap-1 bg-white/8 backdrop-blur-md rounded-lg px-2 py-1 text-[9px] text-white border border-white/10 hover:border-red-500/40 active:scale-95 transition-all"
    >
        <span className="text-sm">🎨</span>
        <div className="flex flex-col leading-none">
            <span className="text-[7px] text-red-400 font-display uppercase tracking-widest">Design</span>
            <span className="font-bold text-[8px]">しまるん</span>
        </div>
    </button>
);

/* フルスクリーンモーダル */
export const DesignGalleryModal = ({ active, onClose, onImageClick }) => {
    const [current, setCurrent] = useState(0);

    if (!active) return null;

    const goNext = () => setCurrent((prev) => (prev + 1) % designs.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + designs.length) % designs.length);

    return (
        <div className="fixed inset-0 z-[60] bg-[#1a0a0c]/95 backdrop-blur-2xl flex flex-col items-center justify-center" onClick={onClose}>
            <div className="w-full max-w-[500px] px-4" onClick={e => e.stopPropagation()}>
                {/* ヘッダー */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-white font-bold text-lg">🎨 デザイン for しまるん</h2>
                        <p className="text-white/30 text-[10px]">{current + 1} / {designs.length}</p>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white text-2xl transition-colors">✕</button>
                </div>

                {/* メイン画像 */}
                <div className="relative">
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer aspect-square bg-[#1e0a0c] flex items-center justify-center"
                        onClick={() => onImageClick && onImageClick(designs[current].src)}
                    >
                        {designs.map((design, index) => (
                            <img
                                key={design.id}
                                src={design.src}
                                alt={design.alt}
                                className="absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out"
                                style={{
                                    opacity: index === current ? 1 : 0,
                                    transform: index === current ? 'scale(1)' : 'scale(0.95)',
                                }}
                            />
                        ))}
                    </div>

                    {/* 矢印 */}
                    <button onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:bg-red-600/60 transition-all active:scale-90 shadow-lg z-20 border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:bg-red-600/60 transition-all active:scale-90 shadow-lg z-20 border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>

                {/* タイトル */}
                <p className="text-white font-bold text-center mt-3">{designs[current].alt}</p>

                {/* サムネイル */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    {designs.map((design, index) => (
                        <button key={design.id} onClick={() => setCurrent(index)}
                            className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === current
                                ? 'border-red-500 shadow-[0_0_15px_rgba(255,80,80,0.3)] scale-110' : 'border-white/10 opacity-50 hover:opacity-75'}`}>
                            <img src={design.src} alt={design.alt} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
