import React from 'react';
import { IconX } from '../ui/Icons';

export const CalendarModal = ({ active, onClose }) => {
    if (!active) return null;
    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex items-center justify-center p-4 backdrop-blur-xl animate-scale-in" onClick={onClose}>
            <div className="relative w-full max-w-md" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-12 right-0 text-white/60 p-2">
                    <div className="flex items-center gap-1.5 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10 font-western">
                        <IconX size={14} /> Close
                    </div>
                </button>
                <img src="./assets/calendar_2026_03.jpg" alt="営業カレンダー" className="w-full h-auto rounded-xl shadow-2xl border border-wa-gold/15" />
            </div>
        </div>
    );
};
