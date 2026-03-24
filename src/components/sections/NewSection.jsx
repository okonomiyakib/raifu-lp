import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const NewSection = () => (
    <section className="px-4 sm:px-6 pb-8 pt-2 mx-auto relative z-20 -mt-8">
        <ScrollReveal>
            <div className="card relative group rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 z-10">
                    <div className="bg-red-600 text-white text-[10px] font-bold tracking-[0.15em] px-4 py-2 rounded-br-2xl shadow-lg font-display uppercase flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        NEW
                    </div>
                </div>

                <a href="https://www.youtube.com/watch?v=kqc_ovsNFRk" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video bg-black relative overflow-hidden">
                    <img src="https://img.youtube.com/vi/kqc_ovsNFRk/hqdefault.jpg" alt="お好み焼Bチャンネル" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-red-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg font-display tracking-wider uppercase">
                        ▶ YouTube
                    </div>
                </a>

                <div className="p-4">
                    <h3 className="text-white font-bold text-sm flex items-center gap-2 mb-1">
                        📺 お好み焼Bチャンネル～目指せ海外展開～
                    </h3>
                    <p className="text-white/50 text-xs">最新の動画をチェックしてね！</p>
                </div>
            </div>
        </ScrollReveal>
    </section>
);
