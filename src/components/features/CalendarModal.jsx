import React from 'react';
import { IconX } from '../ui/Icons';

export const CalendarModal = ({ active, onClose }) => {
    if (!active) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 backdrop-blur-md" onClick={onClose}>
            <div className="relative w-full max-w-md" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-12 right-0 text-white p-2">
                    <div className="flex items-center gap-1 text-sm"><IconX size={20} /> 閉じる</div>
                </button>
                <img src="./assets/calendar_2026_02.jpg" alt="営業カレンダー" className="w-full h-auto rounded-lg shadow-2xl border border-brand-gold/20" />
            </div>
        </div>
    );
};
