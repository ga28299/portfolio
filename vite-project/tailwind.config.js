/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greeny: '#14a307',
        dark: '#1a1a1a',
        purpleDark: '#2d0c5e',
        purpleLight: '#592d7a',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  screens: {
    xs:"480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  },
  plugins: [],
  darkMode: 'class',
};

