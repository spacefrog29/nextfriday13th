/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          // Aged paper
          paper: '#f4e8d0',
          paperDark: '#d4c4a0',
          sepia: '#704214',

          // Grindhouse colors
          bloodRed: '#8B0000',
          shockRed: '#DC143C',
          filmYellow: '#FFD700',
          grimeGreen: '#3d4a2d',

          // Film noir
          midnight: '#0a0a0a',
          smoke: '#2a2a2a',
          ash: '#4a4a4a',

          // Highlights
          spotlight: '#fffacd',
        },
      },
      fontFamily: {
        creepster: ['Creepster', 'cursive'],
        typewriter: ['Special Elite', 'monospace'],
        mono: ['Rubik Mono One', 'monospace'],
      },
      animation: {
        'flicker': 'flicker 2s infinite',
        'filmBurn': 'filmBurn 4s infinite',
        'typewriter': 'typewriter 3s steps(40) 1 normal',
        'stamp': 'stamp 0.6s ease-out',
        'bloodDrip': 'bloodDrip 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.8' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0.7' },
          '40%, 60%': { opacity: '1' },
          '50%': { opacity: '0.9' },
          '70%': { opacity: '0.85' },
          '80%, 90%': { opacity: '1' },
        },
        filmBurn: {
          '0%, 100%': { filter: 'brightness(1) contrast(1)' },
          '50%': { filter: 'brightness(1.1) contrast(0.95)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        stamp: {
          '0%': {
            transform: 'scale(0) rotate(-15deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2) rotate(-8deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(-5deg)',
            opacity: '1',
          },
        },
        bloodDrip: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        zoomIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'vintage-deep': '8px 8px 0 rgba(10,10,10,0.8)',
        'vintage-inset': 'inset 4px 4px 8px rgba(0,0,0,0.5)',
        'neon-red': '0 0 20px #DC143C, 0 0 40px #DC143C, 0 0 60px #DC143C',
        'grindhouse': '0 10px 40px rgba(0,0,0,0.7), inset 0 0 20px rgba(139,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
