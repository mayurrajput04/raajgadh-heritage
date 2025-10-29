import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        sandstone: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d6cec0',
          400: '#c0b5a3',
          500: '#a99b86',
          600: '#8f7f6a',
          700: '#726656',
          800: '#5c5247',
          900: '#4a433b',
        },
        heritage: {
          brown: '#3E2723',
          gold: '#FFD700',
          bronze: '#CD7F32',
        }
      },
      fontFamily: {
        marathi: ['Noto Sans Devanagari', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700' },
          '100%': { boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dawn': 'linear-gradient(to bottom, #FF6B35, #F7931E, #FDC830)',
        'gradient-dusk': 'linear-gradient(to bottom, #2C3E50, #34495E, #5D4E37)',
      },
    },
  },
  plugins: [],
};

export default config;