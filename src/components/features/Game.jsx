import React, { useState, useEffect, useRef } from 'react';
import { IconX } from '../ui/Icons';

export const Game = ({ active, onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const requestRef = useRef();
    const state = useRef({ items: [], playerX: 150, frame: 0, isPlaying: false, score: 0 });
    const PADDLE_W = 60, PADDLE_H = 10, SPAWN = 40;
    const TYPES = [
        { type: 'good', text: '🥬', points: 100 },
        { type: 'good', text: '🥩', points: 200 },
        { type: 'good', text: '🥚', points: 300 },
        { type: 'bad', text: '🔥', points: -500 }
    ];

    useEffect(() => {
        if (active) startGame();
        return () => cancelAnimationFrame(requestRef.current);
    }, [active]);

    const startGame = () => {
        const c = canvasRef.current; if (!c) return;
        state.current = { items: [], playerX: c.width / 2, frame: 0, isPlaying: true, score: 0 };
        setScore(0); setGameOver(false);
        requestRef.current = requestAnimationFrame(gameLoop);
    };

    const gameLoop = () => {
        if (!state.current.isPlaying) return;
        const c = canvasRef.current; if (!c) return;
        const ctx = c.getContext('2d'), w = c.width, h = c.height;
        state.current.frame++;
        if (state.current.frame % SPAWN === 0) {
            const t = TYPES[Math.floor(Math.random() * TYPES.length)];
            state.current.items.push({ x: Math.random() * (w - 20) + 10, y: -20, size: 24, ...t });
        }
        for (let i = state.current.items.length - 1; i >= 0; i--) {
            const it = state.current.items[i]; it.y += 4;
            if (it.y + it.size >= h - 50 && it.y <= h - 50 + PADDLE_H && it.x >= state.current.playerX - PADDLE_W / 2 && it.x <= state.current.playerX + PADDLE_W / 2) {
                if (it.type === 'bad') { setGameOver(true); state.current.isPlaying = false; }
                else { state.current.score += it.points; setScore(state.current.score); }
                state.current.items.splice(i, 1); continue;
            }
            if (it.y > h) state.current.items.splice(i, 1);
        }
        ctx.clearRect(0, 0, w, h);
        ctx.font = "24px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        state.current.items.forEach(it => ctx.fillText(it.text, it.x, it.y));
        ctx.fillStyle = '#c0392b'; ctx.fillRect(state.current.playerX - PADDLE_W / 2, h - 50, PADDLE_W, PADDLE_H);
        ctx.fillStyle = '#8B4513'; ctx.fillRect(state.current.playerX - 5, h - 40, 10, 20);
        if (state.current.isPlaying) requestRef.current = requestAnimationFrame(gameLoop);
    };

    const handleTouch = (e) => {
        const c = canvasRef.current; if (!c) return;
        const r = c.getBoundingClientRect();
        state.current.playerX = (e.touches[0].clientX - r.left) * (c.width / r.width);
    };

    return (
        <div className="fixed inset-0 z-50 bg-wa-kuro/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl">
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="flex justify-between w-full text-white mb-3 items-center">
                    <span className="font-western text-wa-gold tracking-wider text-sm">SCORE: <span className="text-white font-bold">{score}</span></span>
                    <button onClick={onClose} className="text-white/40 p-1"><IconX size={20} /></button>
                </div>
                <div className="relative border-2 border-wa-shu/30 rounded-2xl overflow-hidden bg-wa-kuro w-full aspect-[3/5] shadow-2xl">
                    <canvas ref={canvasRef} width={300} height={500} className="w-full h-full touch-none" onTouchMove={handleTouch} />
                    {gameOver && (
                        <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center animate-fade-in-up">
                            <h2 className="text-2xl font-display text-wa-kurenai font-bold mb-2">焦げました...</h2>
                            <p className="text-lg text-white font-western mb-6">Score: {score}</p>
                            <button onClick={startGame} className="btn-gold py-3 px-10 rounded-full mb-3 text-sm">もう一度焼く</button>
                            <button onClick={onClose} className="text-white/30 text-sm font-western">終了する</button>
                        </div>
                    )}
                    {!gameOver && <div className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs pointer-events-none font-serif">左右にスワイプしてキャッチ！<br />🔥は避けて！</div>}
                </div>
            </div>
        </div>
    );
};
