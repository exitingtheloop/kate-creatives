/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D1F1B',
        gold: '#D4AF37', 
        pink: '#22c55e',
        green: '#F4C6D6',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
