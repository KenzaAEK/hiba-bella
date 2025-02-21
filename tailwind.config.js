/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-peach': '#FFE5D9',
        'pastel-lavender': '#E2E2F0',
        'pastel-sage': '#D4E6B5',
        'pastel-beige': '#F8F3E6',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
};