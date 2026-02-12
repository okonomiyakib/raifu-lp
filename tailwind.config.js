/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                wa: {
                    shu: '#c0392b',
                    beni: '#b91c1c',
                    enji: '#7f1d1d',
                    kurenai: '#dc2626',
                    aka: '#ef4444',
                    kuro: '#2a0a0a',
                    kuroDark: '#1f0707',
                    card: '#3c1212',
                    cardLight: '#4a1818',
                    sectionA: '#331010',
                    sectionB: '#451515',
                    gold: '#d4af37',
                    goldLight: '#f5d76e',
                    cream: '#f5f0e8',
                }
            },
            fontFamily: {
                serif: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
                display: ['"Zen Antique"', '"Shippori Mincho"', 'serif'],
                western: ['"Cormorant Garamond"', 'serif'],
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
