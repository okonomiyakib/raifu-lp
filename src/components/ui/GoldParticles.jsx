import React, { useEffect, useRef } from 'react';

export const GoldParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = -(Math.random() * 0.3 + 0.1);
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.life = 0;
                this.maxLife = Math.random() * 600 + 400;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.life * 0.01) * 0.1;
                this.life++;
                if (this.life > this.maxLife || this.y < -10) {
                    this.reset();
                }
            }
            draw() {
                const progress = this.life / this.maxLife;
                const alpha = progress < 0.1
                    ? this.opacity * (progress / 0.1)
                    : progress > 0.8
                        ? this.opacity * ((1 - progress) / 0.2)
                        : this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${alpha})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 25; i++) {
            const p = new Particle();
            p.y = Math.random() * canvas.height;
            p.life = Math.random() * p.maxLife;
            particles.push(p);
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ opacity: 0.6 }}
        />
    );
};
