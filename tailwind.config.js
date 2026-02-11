/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#0a0a0a',
                    dark: '#1c1917',
                    red: '#E02E2E', // Appetizing Red (Bright & delicious)
                    redLight: '#FF5757', // Accent Red
                    gold: '#c5a059', // Elegant Gold
                    goldLight: '#e6c888',
                    gray: '#2a2a2a'
                }
            },
            fontFamily: {
                serif: ['"Zen Antique"', '"Noto Serif JP"', 'serif'],
                sans: ['"Noto Serif JP"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    },
    plugins: [],
}
