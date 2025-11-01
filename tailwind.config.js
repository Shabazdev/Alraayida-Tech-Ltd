/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zendots: ['"Zen Dots"', 'sans-serif'],
        electrolize: ['"Electrolize"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}
