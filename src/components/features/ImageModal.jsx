import React from 'react';
import { IconX } from '../ui/Icons';

export const ImageModal = ({ src, onClose }) => {
    if (!src) return null;
    return (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in-up" onClick={onClose}>
            <div className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors">
                    <div className="flex items-center gap-1 text-sm bg-black/50 px-3 py-1 rounded-full border border-white/10"><IconX size={16} /> 閉じる</div>
                </button>
                <img src={src} alt="Zoom" className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-brand-gold/20" />
            </div>
        </div>
    );
};
