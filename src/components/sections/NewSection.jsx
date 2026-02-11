import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const NewSection = () => (
    <section className="px-5 pb-6 pt-0 max-w-lg mx-auto relative z-20 -mt-12">
        <ScrollReveal>
            <div className="bg-brand-gray border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group">
                <div className="absolute top-0 left-0 bg-brand-red text-white text-xs font-black italic px-4 py-1 z-10 rounded-br-xl shadow-lg border-b border-r border-white/10">
                    NEW
                </div>
                <a href="https://www.youtube.com/watch?v=kqc_ovsNFRk" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video bg-black relative overflow-hidden group">
                    <img
                        src="https://img.youtube.com/vi/kqc_ovsNFRk/hqdefault.jpg"
                        alt="お好み焼Bチャンネル"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                        YouTube
                    </div>
                </a>
                <div className="p-4 bg-gradient-to-t from-brand-black to-brand-gray/90 backdrop-blur-sm">
                    <h3 className="text-white font-bold text-sm flex items-center gap-2">
                        <span className="text-brand-gold">📺</span> お好み焼Bチャンネル～目指せ海外展開～
                    </h3>
                    <p className="text-white/50 text-xs mt-1">最新の動画をチェックしてね！</p>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
