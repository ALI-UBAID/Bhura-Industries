/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c7cb',
          300: '#9b9ea5',
          400: '#6b6e76',
          500: '#4a4d54',
          600: '#363940',
          700: '#272930',
          800: '#1a1c21',
          900: '#0f1114',
          950: '#08090b',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0cb',
          200: '#f4df93',
          300: '#eec85b',
          400: '#e9b433',
          500: '#d99a1f',
          600: '#bc7a16',
          700: '#955a15',
          800: '#7c4817',
          900: '#6a3d17',
          950: '#3d200a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf1dd',
          300: '#f5e4c2',
          400: '#eed09b',
          500: '#e5b86e',
        },
        accent: {
          500: '#c0241f',
          600: '#a91d1a',
          700: '#8c1815',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
