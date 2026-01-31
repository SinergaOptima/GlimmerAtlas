import type { Config } from 'tailwindcss';
import { catppuccinMocha } from './src/config/theme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        base: catppuccinMocha.base,
        mantle: catppuccinMocha.mantle,
        crust: catppuccinMocha.crust,

        // Surface colors
        surface: {
          0: catppuccinMocha.surface0,
          1: catppuccinMocha.surface1,
          2: catppuccinMocha.surface2,
        },

        // Overlay colors
        overlay: {
          0: catppuccinMocha.overlay0,
          1: catppuccinMocha.overlay1,
          2: catppuccinMocha.overlay2,
        },

        // Text colors
        text: {
          DEFAULT: catppuccinMocha.text,
          muted: catppuccinMocha.subtext0,
          subtle: catppuccinMocha.subtext1,
        },

        // Accent colors
        lavender: catppuccinMocha.lavender,
        blue: catppuccinMocha.blue,
        sapphire: catppuccinMocha.sapphire,
        sky: catppuccinMocha.sky,
        teal: catppuccinMocha.teal,
        green: catppuccinMocha.green,
        yellow: catppuccinMocha.yellow,
        peach: catppuccinMocha.peach,
        maroon: catppuccinMocha.maroon,
        red: catppuccinMocha.red,
        mauve: catppuccinMocha.mauve,
        pink: catppuccinMocha.pink,
        flamingo: catppuccinMocha.flamingo,
        rosewater: catppuccinMocha.rosewater,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': `0 0 10px ${catppuccinMocha.lavender}15`,
        'glow-md': `0 0 20px ${catppuccinMocha.lavender}20`,
        'glow-lg': `0 0 30px ${catppuccinMocha.lavender}25`,
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
