const typographyPlugin = require('@tailwindcss/typography')

const typographyStyles = require('./typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      colors: {
        // Emerald & Gold, taken from the Ramzan Talent Scholarship logo
        forest: {
          50: '#F3F7F5',
          100: '#EAF3EF',
          200: '#D5E2DB',
          300: '#C9D6CF',
          400: '#9DB8AC',
          500: '#C8DBD2',
          700: '#0E5A45',
          900: '#073B2E',
          950: '#052A21',
        },
        gold: {
          DEFAULT: '#D4A72C',
          soft: '#F3DE9C',
          cream: '#F6EFD9',
          line: '#E2D6B0',
          ink: '#8A6A12',
          deep: '#5C4A10',
        },
        ink: {
          DEFAULT: '#10201A',
          700: '#2E3F38',
          600: '#3E5048',
          500: '#4A5A53',
          on: '#1A1A14',
        },
        line: '#E0E9E4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.035em',
        heading: '-0.03em',
      },
      boxShadow: {
        float: '0 20px 40px rgba(7, 59, 46, 0.16)',
      },
      keyframes: {
        'sheet-down': {
          from: { opacity: '0', transform: 'translateY(-16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'bar-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        'sheet-down': 'sheet-down 200ms ease-out',
        'pop-in': 'pop-in 200ms ease-out',
        'bar-up': 'bar-up 300ms ease-out',
      },
    },
  },
}
