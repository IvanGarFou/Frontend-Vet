/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 // Pega esto dentro de tu archivo tailwind.config.js
  theme: {
    extend: {
      colors: {
        'background': '#FAF8F3',
        'primary': '#F2D6C1',        
        'button-bg': '#A8C3A0',
        'text-main': '#4B4B4B',
        'accent': '#D88C66',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}