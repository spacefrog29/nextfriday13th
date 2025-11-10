/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spooky: {
          darkest: '#0a0a0f',
          dark: '#1a1a2e',
          primary: '#16213e',
          secondary: '#0f3460',
          accent: '#533483',
          purple: '#7b2d8d',
          blood: '#8b0000',
          'blood-light': '#b22222',
          orange: '#ff6b35',
          'orange-light': '#ff8c42',
          ghost: '#e8e8e8',
          moon: '#f4f1de',
        },
      },
      fontFamily: {
        creepy: ['Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spooky-glow': 'spooky-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spooky-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(123, 45, 141, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(123, 45, 141, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
