import React, { useRef, useEffect, useState } from 'react';
import { IconXSNS } from '../ui/Icons';

const teamMembers = [
    { name: 'おこビー', role: '店主　運営　エンタメ実行班', icon: './assets/icon_okoby.jpg', xUrl: 'https://x.com/raifu_0405', hoverColor: 'from-red-500 to-orange-500' },
    { name: 'しまるん', role: '店主サポート　企画　運営　デザイナー', icon: './assets/icon_shimarun.jpg', xUrl: 'https://x.com/shimamaru7', hoverColor: 'from-blue-500 to-purple-500' },
    { name: 'りとるん', role: 'デザイナー　盛り上げ隊', icon: './assets/icon_ritorun.jpg', xUrl: 'https://x.com/shimarito_0912', hoverColor: 'from-emerald-500 to-teal-500' },
    { name: '綿棒', role: '企画　運営サポート　マネージメント', icon: './assets/icon_menbou.jpg', xUrl: 'https://x.com/06MenBow04', hoverColor: 'from-amber-500 to-yellow-500' },
    { name: 'ままかりスター', role: '酒飲み　アドバイザー　繋ぎ役', icon: './assets/icon_mamakari.jpg', xUrl: 'https://x.com/mamakari_star', hoverColor: 'from-pink-500 to-rose-500' },
    { name: 'かやや', role: 'クリプトニンジャ#5金鬼オーナー　運営サポート　にんぷち開発サポート', icon: './assets/icon_kayaya.jpg', xUrl: 'https://x.com/Kayaya_Yeah', hoverColor: 'from-yellow-500 to-red-500' },
];

const hoverStyles = [
    { ring: 'rgba(255,100,50,0.35)', glow: 'rgba(255,100,50,0.2)', shadow: 'rgba(255,100,50,0.25)', name: 'text-orange-300', border: 'border-orange-400/50' },
    { ring: 'rgba(120,100,255,0.35)', glow: 'rgba(120,100,255,0.2)', shadow: 'rgba(120,100,255,0.25)', name: 'text-purple-300', border: 'border-purple-400/50' },
    { ring: 'rgba(50,200,150,0.35)', glow: 'rgba(50,200,150,0.2)', shadow: 'rgba(50,200,150,0.25)', name: 'text-emerald-300', border: 'border-emerald-400/50' },
    { ring: 'rgba(250,200,50,0.35)', glow: 'rgba(250,200,50,0.2)', shadow: 'rgba(250,200,50,0.25)', name: 'text-amber-300', border: 'border-amber-400/50' },
    { ring: 'rgba(236,72,153,0.35)', glow: 'rgba(236,72,153,0.2)', shadow: 'rgba(236,72,153,0.25)', name: 'text-pink-300', border: 'border-pink-400/50' },
    { ring: 'rgba(255,180,50,0.35)', glow: 'rgba(255,180,50,0.2)', shadow: 'rgba(255,180,50,0.25)', name: 'text-yellow-300', border: 'border-yellow-400/50' },
];

const useReveal = (delay = 0) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setTimeout(() => setVisible(true), delay); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);
    return { ref, visible };
};

const MemberCard = ({ member, index }) => {
    const { ref, visible } = useReveal(index * 250);
    const [hovered, setHovered] = useState(false);
    const style = hoverStyles[index];

    return (
        <a
            ref={ref}
            href={member.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.85)',
                filter: visible ? 'blur(0px)' : 'blur(10px)',
                transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
            }}
        >
            {/* ホバーグロー */}
            <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${style.glow} 0%, transparent 70%)` }}
            />

            <div className={`relative flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl
                bg-white/[0.05] border border-white/[0.08]
                group-hover:bg-white/[0.1]
                transition-all duration-500 group-active:scale-[0.97]`}
                style={{
                    borderColor: hovered ? style.ring : undefined,
                    boxShadow: hovered ? `0 0 30px ${style.shadow}` : undefined,
                }}
            >
                {/* 上部カラーライン */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full
                    bg-gradient-to-r from-transparent via-red-400/40 to-transparent
                    group-hover:w-24 transition-all duration-700"
                    style={{ background: hovered ? `linear-gradient(90deg, transparent, ${style.ring}, transparent)` : undefined }}
                />

                {/* アイコン */}
                <div className="relative mb-4">
                    {/* リング */}
                    <div className="absolute -inset-3 rounded-full border border-transparent group-hover:scale-105 transition-all duration-700"
                        style={{ borderColor: hovered ? style.ring : 'transparent' }}
                    />
                    <div className="absolute -inset-6 rounded-full border border-transparent group-hover:scale-110 transition-all duration-1000"
                        style={{ borderColor: hovered ? `${style.ring}55` : 'transparent' }}
                    />

                    {/* グロー */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ boxShadow: `0 0 40px ${style.glow}, 0 0 80px ${style.glow}` }}
                    />

                    {/* メインアイコン — ホバーで色が変わるボーダー */}
                    <div className="relative w-44 h-44 rounded-full overflow-hidden border-3 border-white/15
                        transition-all duration-500
                        shadow-xl"
                        style={{
                            borderColor: hovered ? style.ring : 'rgba(255,255,255,0.15)',
                            boxShadow: hovered ? `0 8px 40px ${style.shadow}` : '0 4px 15px rgba(0,0,0,0.2)',
                            borderWidth: '3px',
                        }}
                    >
                        <img src={member.icon} alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                        <div className="w-full h-full bg-gradient-to-br from-[#3d1a1e] to-[#1e0a0c] items-center justify-center text-4xl font-bold text-white/50" style={{ display: 'none' }}>
                            {member.name.charAt(0)}
                        </div>
                        {/* ホバーカラーオーバーレイ */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                            style={{ background: `linear-gradient(135deg, ${style.glow}, transparent)` }}
                        />
                    </div>

                    {/* Xバッジ */}
                    <div className="absolute -bottom-1 -right-1 w-11 h-11 rounded-xl flex items-center justify-center z-10
                        bg-[#333] border-2 border-[#2b1215] shadow-md
                        group-hover:shadow-lg transition-all duration-500"
                        style={{
                            background: hovered ? style.ring : '#333',
                            boxShadow: hovered ? `0 0 15px ${style.shadow}` : undefined,
                        }}
                    >
                        <IconXSNS className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* 名前 — ホバーで色が変わる */}
                <h3 className={`text-2xl font-bold tracking-wider mb-2 transition-colors duration-500 ${hovered ? style.name : 'text-white'}`}>
                    {member.name}
                </h3>

                {/* 役割 */}
                <p className="text-white/40 text-sm leading-relaxed tracking-wide mb-4
                    group-hover:text-white/60 transition-colors duration-500">
                    {member.role}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs text-white/20
                    group-hover:text-white/50 transition-all duration-500 font-display tracking-[0.15em] uppercase">
                    <div className="w-4 h-px bg-current" />
                    Follow
                    <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
};

export const TeamSection = () => {
    const headerRef = useRef(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
            { threshold: 0.2 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="px-4 py-16 max-w-[540px] mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div ref={headerRef}
                style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
                }}
            >
                <div className="section-header mb-1">
                    <div className="shu-accent"></div>
                    <div className="title-group">
                        <span className="title-en">Team</span>
                        <span className="title-jp">運営メンバー</span>
                    </div>
                </div>
                <p className="text-white/25 text-xs mb-10 ml-4 tracking-wider font-light">来風プロジェクトを支えるチーム</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {teamMembers.map((member, index) => (
                    <MemberCard key={index} member={member} index={index} />
                ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-500/30" />
                <span className="text-[9px] text-red-400/30 tracking-[0.4em] font-display uppercase">RAIFU PROJECT</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500/30" />
            </div>
        </section>
    );
};
