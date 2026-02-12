import React, { useEffect, useRef } from 'react';

export const EmberParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        const embers = [];
        const MAX = 25;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < MAX; i++) {
            embers.push({
                x: Math.random() * canvas.width,
                y: canvas.height + Math.random() * 200,
                size: Math.random() * 3 + 1,
                speedY: Math.random() * 0.8 + 0.3,
                speedX: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.5 + 0.2,
                life: Math.random(),
                // 赤〜オレンジ〜金のランダム色
                hue: Math.random() * 40 + 10, // 10-50 (赤〜オレンジ〜金)
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            embers.forEach(e => {
                e.y -= e.speedY;
                e.x += e.speedX + Math.sin(e.life * 3) * 0.2;
                e.life += 0.005;
                e.opacity = Math.sin(e.life * Math.PI) * 0.5;

                if (e.y < -20 || e.opacity <= 0) {
                    e.y = canvas.height + 20;
                    e.x = Math.random() * canvas.width;
                    e.life = 0;
                    e.opacity = 0.3;
                }

                ctx.beginPath();
                ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${e.hue}, 90%, 55%, ${e.opacity})`;
                ctx.fill();

                // グロー効果
                ctx.beginPath();
                ctx.arc(e.x, e.y, e.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${e.hue}, 90%, 55%, ${e.opacity * 0.15})`;
                ctx.fill();
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[1] pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
};
