import React, { useEffect, useRef } from 'react';

export const EmberParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        const particles = [];
        const MAX = 30;

        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < MAX; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedY: (Math.random() - 0.5) * 0.25,
                speedX: (Math.random() - 0.5) * 0.25,
                opacity: Math.random() * 0.4 + 0.1,
                life: Math.random() * Math.PI * 2,
                isRed: Math.random() > 0.3,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach(b => {
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(255, 100, 100, ${(1 - dist / 130) * 0.06})`;
                        ctx.lineWidth = 0.5; ctx.stroke();
                    }
                });
            });

            particles.forEach(p => {
                p.x += p.speedX; p.y += p.speedY;
                p.life += 0.01;
                p.opacity = (Math.sin(p.life) * 0.3 + 0.3);
                if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;

                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.isRed
                    ? `rgba(255, 100, 100, ${p.opacity * 0.5})`
                    : `rgba(255, 200, 200, ${p.opacity * 0.2})`;
                ctx.fill();

                if (p.isRed) {
                    ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 80, 80, ${p.opacity * 0.06})`;
                    ctx.fill();
                }
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none" style={{ opacity: 0.8 }} />;
};
