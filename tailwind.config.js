/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                wa: {
                    shu: '#dc2626',
                    beni: '#b91c1c',
                    enji: '#991b1b',
                    kurenai: '#dc2626',
                    aka: '#ef4444',
                    kuro: '#2b1215',
                    kuroDark: '#1e0d0f',
                    card: '#3a1c20',
                    cardLight: '#452226',
                    sectionA: '#321619',
                    sectionB: '#381a1e',
                    gold: '#ff8a8a',
                    goldLight: '#ffa8a8',
                    cream: '#fce8e8',
                }
            },
            fontFamily: {
                serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
                display: ['"Orbitron"', '"Inter"', 'sans-serif'],
                western: ['"Orbitron"', '"Inter"', 'sans-serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'ken-burns': 'kenBurns 20s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'border-glow': 'borderGlow 2.5s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
            },
        }
    },
    plugins: [],
}
