import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IconX } from '../ui/Icons';

export const Game = ({ active, onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [bestCombo, setBestCombo] = useState(0);
    const [level, setLevel] = useState(1);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('guzai_high') || '0'));
    const requestRef = useRef();
    const timerRef = useRef();
    const state = useRef({
        items: [], playerX: 150, frame: 0, isPlaying: false, score: 0,
        combo: 0, bestCombo: 0, particles: [], level: 1, spawnRate: 35, speed: 3.5
    });

    const PADDLE_W = 70, PADDLE_H = 12;
    const TYPES = [
        { type: 'good', text: '🥬', points: 100, name: 'キャベツ' },
        { type: 'good', text: '🥩', points: 200, name: '肉' },
        { type: 'good', text: '🥚', points: 300, name: '卵' },
        { type: 'good', text: '🦐', points: 400, name: 'エビ' },
        { type: 'good', text: '🧀', points: 250, name: 'チーズ' },
        { type: 'good', text: '🍜', points: 350, name: '麺' },
        { type: 'good', text: '🌽', points: 150, name: 'コーン' },
        { type: 'special', text: '⭐', points: 1000, name: 'スター' },
        { type: 'bad', text: '🔥', points: -500, name: '炎' },
        { type: 'bad', text: '💀', points: -300, name: 'ドクロ' },
    ];

    useEffect(() => {
        if (active) startGame();
        return () => { cancelAnimationFrame(requestRef.current); clearInterval(timerRef.current); };
    }, [active]);

    const startGame = () => {
        const c = canvasRef.current; if (!c) return;
        state.current = {
            items: [], playerX: c.width / 2, frame: 0, isPlaying: true, score: 0,
            combo: 0, bestCombo: 0, particles: [], level: 1, spawnRate: 35, speed: 3.5
        };
        setScore(0); setCombo(0); setBestCombo(0); setLevel(1); setTimeLeft(30); setGameOver(false);
        timerRef.current = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    clearInterval(timerRef.current);
                    state.current.isPlaying = false;
                    setGameOver(true);
                    const finalScore = state.current.score;
                    setHighScore(prev => {
                        const best = Math.max(prev, finalScore);
                        localStorage.setItem('guzai_high', best.toString());
                        return best;
                    });
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        requestRef.current = requestAnimationFrame(gameLoop);
    };

    const addParticles = (x, y, color) => {
        for (let i = 0; i < 6; i++) {
            state.current.particles.push({
                x, y, vx: (Math.random() - 0.5) * 6, vy: -Math.random() * 4 - 2,
                life: 1, color, size: Math.random() * 4 + 2
            });
        }
    };

    const gameLoop = () => {
        if (!state.current.isPlaying) return;
        const c = canvasRef.current; if (!c) return;
        const ctx = c.getContext('2d'), w = c.width, h = c.height;
        const s = state.current;
        s.frame++;

        // レベルアップ
        const newLevel = Math.floor(s.score / 2000) + 1;
        if (newLevel !== s.level) {
            s.level = newLevel;
            s.spawnRate = Math.max(15, 35 - newLevel * 3);
            s.speed = Math.min(7, 3.5 + newLevel * 0.5);
            setLevel(newLevel);
        }

        // アイテム生成
        if (s.frame % s.spawnRate === 0) {
            const isSpecial = Math.random() < 0.05;
            const isBad = !isSpecial && Math.random() < 0.2;
            let pool;
            if (isSpecial) pool = TYPES.filter(t => t.type === 'special');
            else if (isBad) pool = TYPES.filter(t => t.type === 'bad');
            else pool = TYPES.filter(t => t.type === 'good');
            const t = pool[Math.floor(Math.random() * pool.length)];
            s.items.push({
                x: Math.random() * (w - 30) + 15, y: -25, size: 28,
                wobble: Math.random() * Math.PI * 2, wobbleSpeed: Math.random() * 0.05 + 0.02,
                ...t
            });
        }

        // アイテム更新 + 衝突
        for (let i = s.items.length - 1; i >= 0; i--) {
            const it = s.items[i];
            it.y += s.speed;
            it.wobble += it.wobbleSpeed;
            it.x += Math.sin(it.wobble) * 0.8;

            if (it.y + it.size >= h - 55 && it.y <= h - 55 + PADDLE_H &&
                it.x >= s.playerX - PADDLE_W / 2 && it.x <= s.playerX + PADDLE_W / 2) {
                if (it.type === 'bad') {
                    s.combo = 0;
                    setCombo(0);
                    addParticles(it.x, it.y, '#ff4444');
                } else {
                    const comboBonus = Math.floor(s.combo * 0.5);
                    const pts = it.points + (it.points * comboBonus / 10);
                    s.score += Math.floor(pts);
                    s.combo++;
                    if (s.combo > s.bestCombo) s.bestCombo = s.combo;
                    setScore(s.score);
                    setCombo(s.combo);
                    setBestCombo(s.bestCombo);
                    addParticles(it.x, it.y, it.type === 'special' ? '#ffd700' : '#44ff88');
                }
                s.items.splice(i, 1); continue;
            }
            if (it.y > h) {
                if (it.type === 'good' || it.type === 'special') { s.combo = 0; setCombo(0); }
                s.items.splice(i, 1);
            }
        }

        // パーティクル更新
        for (let i = s.particles.length - 1; i >= 0; i--) {
            const p = s.particles[i];
            p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life -= 0.03;
            if (p.life <= 0) s.particles.splice(i, 1);
        }

        // 描画
        ctx.clearRect(0, 0, w, h);

        // 背景グラデーション
        const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
        bgGrad.addColorStop(0, 'rgba(43, 18, 21, 0.3)');
        bgGrad.addColorStop(1, 'rgba(43, 18, 21, 0.6)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        // アイテム描画
        ctx.font = "28px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        s.items.forEach(it => {
            ctx.save();
            if (it.type === 'special') {
                ctx.shadowColor = '#ffd700';
                ctx.shadowBlur = 15;
            }
            ctx.fillText(it.text, it.x, it.y);
            ctx.restore();
        });

        // パーティクル描画
        s.particles.forEach(p => {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;

        // パドル描画（お好み焼きヘラ）
        const padGrad = ctx.createLinearGradient(s.playerX - PADDLE_W / 2, 0, s.playerX + PADDLE_W / 2, 0);
        padGrad.addColorStop(0, '#b8860b');
        padGrad.addColorStop(0.5, '#daa520');
        padGrad.addColorStop(1, '#b8860b');
        ctx.fillStyle = padGrad;
        ctx.beginPath();
        ctx.roundRect(s.playerX - PADDLE_W / 2, h - 55, PADDLE_W, PADDLE_H, 4);
        ctx.fill();
        ctx.fillStyle = '#8B6914';
        ctx.fillRect(s.playerX - 4, h - 43, 8, 25);

        // コンボ表示
        if (s.combo >= 3) {
            ctx.font = `bold ${16 + Math.min(s.combo, 10)}px Inter, sans-serif`;
            ctx.fillStyle = `rgba(255, 215, 0, ${0.5 + Math.sin(s.frame * 0.1) * 0.3})`;
            ctx.textAlign = 'center';
            ctx.fillText(`${s.combo} COMBO!`, w / 2, 40);
        }

        if (s.isPlaying) requestRef.current = requestAnimationFrame(gameLoop);
    };

    const handleTouch = (e) => {
        const c = canvasRef.current; if (!c) return;
        const r = c.getBoundingClientRect();
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        state.current.playerX = (x - r.left) * (c.width / r.width);
    };

    const getRank = (s) => {
        if (s >= 15000) return { rank: '伝説の焼き師', emoji: '👑', color: '#ffd700' };
        if (s >= 10000) return { rank: '鉄板マスター', emoji: '🏆', color: '#ff6b6b' };
        if (s >= 5000) return { rank: '一人前', emoji: '🎉', color: '#44ff88' };
        if (s >= 2000) return { rank: '見習い', emoji: '🔰', color: '#88aaff' };
        return { rank: '新人', emoji: '🥢', color: '#aaaaaa' };
    };

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl">
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="flex justify-between w-full text-white mb-3 items-center">
                    <div className="flex flex-col">
                        <span className="font-western text-wa-gold tracking-wider text-sm">SCORE: <span className="text-white font-bold">{score.toLocaleString()}</span></span>
                        <span className="text-[10px] text-white/40">HI: {highScore.toLocaleString()}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-red-400 font-bold">LV.{level}</span>
                        <span className={`text-base font-black ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-white/80'}`}>{timeLeft}s</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {combo >= 2 && <span className="text-amber-400 text-sm font-bold animate-pulse">{combo}x</span>}
                        <button onClick={() => { clearInterval(timerRef.current); state.current.isPlaying = false; onClose(); }} className="text-white/40 p-1"><IconX size={20} /></button>
                    </div>
                </div>
                <div className="relative border-2 border-wa-shu/30 rounded-2xl overflow-hidden bg-wa-kuro w-full aspect-[3/5] shadow-2xl">
                    <canvas ref={canvasRef} width={300} height={500} className="w-full h-full touch-none"
                        onTouchMove={handleTouch} onMouseMove={handleTouch} />
                    {gameOver && (
                        <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center animate-fade-in-up">
                            <div className="text-4xl mb-2">{getRank(score).emoji}</div>
                            <h2 className="text-xl font-display text-wa-kurenai font-bold mb-1">{getRank(score).rank}</h2>
                            <p className="text-2xl text-white font-western font-black mb-1">{score.toLocaleString()}<span className="text-sm text-white/50 ml-1">pts</span></p>
                            <p className="text-xs text-amber-400/80 mb-1">ベストコンボ: {bestCombo}x</p>
                            {score > highScore && <p className="text-xs text-yellow-300 animate-pulse mb-3">🎉 NEW HIGH SCORE!</p>}
                            <button onClick={startGame} className="btn-gold py-3 px-10 rounded-full mb-3 text-sm">もう一度焼く</button>
                            <button onClick={() => { clearInterval(timerRef.current); onClose(); }} className="text-white/30 text-sm font-western">終了する</button>
                        </div>
                    )}
                    {!gameOver && <div className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs pointer-events-none font-serif">スワイプでキャッチ！⭐を狙え！<br />🔥💀は避けて！</div>}
                </div>
            </div>
        </div>
    );
};
