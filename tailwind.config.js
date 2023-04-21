/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#15141b',
        secondary: '#3c3c3c',
        alternative: '#B0EDCC',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        "gradient-hero": " url('/src/assets/bg-image.svg')",
      },
    },
  },
  plugins: [],
}

