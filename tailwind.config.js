/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B6B',
        'secondary': '#4ECDC4',
        'dark': '#2C3E50',
        'light': '#ECF0F1',
        'accent': '#FFB400'
      },
    },
  },
  plugins: [],
}
