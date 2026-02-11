import React, { useRef, useEffect } from 'react';

export const ScrollReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                }
            });
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);
    return <div ref={ref} className="reveal">{children}</div>;
};
