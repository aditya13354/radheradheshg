import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B1E3F',
          50: '#FBE9EE',
          100: '#F5CBD6',
          200: '#E794A9',
          300: '#D45D7C',
          400: '#B23A5C',
          500: '#8B1E3F',
          600: '#711933',
          700: '#561326',
          800: '#3B0D1A',
          900: '#21070E',
        },
        gold: {
          DEFAULT: '#C89B3C',
          50: '#FBF4E4',
          100: '#F5E7C2',
          200: '#EACE85',
          300: '#DEB552',
          400: '#C89B3C',
          500: '#A57F2F',
          600: '#816324',
          700: '#5D471A',
          800: '#392C10',
          900: '#151005',
        },
        ivory: '#FFF9F2',
        terracotta: {
          DEFAULT: '#C75B39',
          light: '#E08A6E',
          dark: '#9E4227',
        },
        ink: '#2F2F2F',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
        hindi: ['var(--font-noto-devanagari)', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 12px 32px -18px rgba(47, 47, 47, 0.18)',
        gold: '0 8px 24px -12px rgba(200, 155, 60, 0.22)',
        soft: '0 4px 18px rgba(47, 47, 47, 0.06)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DEB552 0%, #C89B3C 50%, #A57F2F 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #B23A5C 0%, #8B1E3F 60%, #561326 100%)',
        'warm-radial': 'radial-gradient(circle at 30% 20%, #FFF9F2 0%, #F8ECE0 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
