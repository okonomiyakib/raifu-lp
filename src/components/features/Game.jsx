import React, { useState, useEffect, useRef } from 'react';
import { IconX } from '../ui/Icons';

export const Game = ({ active, onClose }) => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const requestRef = useRef();
    const state = useRef({ items: [], playerX: 150, frame: 0, isPlaying: false, score: 0 });
    const PADDLE_WIDTH = 60; const PADDLE_HEIGHT = 10; const SPAWN_RATE = 40;
    const ITEM_TYPES = [{ type: 'good', color: '#86efac', text: '🥬', points: 100 }, { type: 'good', color: '#fca5a5', text: '🥩', points: 200 }, { type: 'good', color: '#fde047', text: '🥚', points: 300 }, { type: 'bad', color: '#555', text: '🔥', points: -500 }];

    useEffect(() => {
        if (active) startGame();
        return () => cancelAnimationFrame(requestRef.current);
    }, [active]);

    const startGame = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        state.current = { items: [], playerX: canvas.width / 2, frame: 0, isPlaying: true, score: 0 };
        setScore(0); setGameOver(false);
        requestRef.current = requestAnimationFrame(gameLoop);
    };

    const gameLoop = () => {
        if (!state.current.isPlaying) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width; const height = canvas.height;

        state.current.frame++;
        if (state.current.frame % SPAWN_RATE === 0) {
            const type = ITEM_TYPES[Math.floor(Math.random() * ITEM_TYPES.length)];
            state.current.items.push({ x: Math.random() * (width - 20) + 10, y: -20, size: 24, ...type });
        }

        for (let i = state.current.items.length - 1; i >= 0; i--) {
            const item = state.current.items[i];
            item.y += 4;
            if (item.y + item.size >= height - 50 && item.y <= height - 50 + PADDLE_HEIGHT && item.x >= state.current.playerX - PADDLE_WIDTH / 2 && item.x <= state.current.playerX + PADDLE_WIDTH / 2) {
                if (item.type === 'bad') { setGameOver(true); state.current.isPlaying = false; }
                else { state.current.score += item.points; setScore(state.current.score); }
                state.current.items.splice(i, 1); continue;
            }
            if (item.y > height) state.current.items.splice(i, 1);
        }

        ctx.clearRect(0, 0, width, height);
        ctx.font = "24px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        state.current.items.forEach(item => ctx.fillText(item.text, item.x, item.y));
        ctx.fillStyle = '#bbb'; ctx.fillRect(state.current.playerX - PADDLE_WIDTH / 2, height - 50, PADDLE_WIDTH, PADDLE_HEIGHT);
        ctx.fillStyle = '#8B4513'; ctx.fillRect(state.current.playerX - 5, height - 40, 10, 20);

        if (state.current.isPlaying) requestRef.current = requestAnimationFrame(gameLoop);
    };

    const handleTouchMove = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        state.current.playerX = (e.touches[0].clientX - rect.left) * scaleX;
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md">
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="flex justify-between w-full text-white mb-2"><span className="font-bold">SCORE: {score}</span><button onClick={onClose}><IconX /></button></div>
                <div className="relative border-4 border-brand-gold rounded-lg overflow-hidden bg-brand-dark w-full aspect-[3/5] shadow-2xl">
                    <canvas ref={canvasRef} width={300} height={500} className="w-full h-full touch-none" onTouchMove={handleTouchMove} />
                    {gameOver && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center animate-fade-in-up">
                            <h2 className="text-3xl font-serif text-brand-red font-bold mb-2">焦げました...</h2>
                            <p className="text-xl text-white mb-6">Score: {score}</p>
                            <button onClick={startGame} className="bg-brand-gold text-black font-bold py-3 px-8 rounded-full mb-3">もう一度焼く</button>
                            <button onClick={onClose} className="text-white/50 text-sm">終了する</button>
                        </div>
                    )}
                    {!gameOver && <div className="absolute bottom-4 left-0 right-0 text-center text-white/30 text-xs pointer-events-none">左右にスワイプしてキャッチ！<br />🔥は避けて！</div>}
                </div>
            </div>
        </div>
    );
};
