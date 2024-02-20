/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#191919",
        "secondary-bg": "#3b3b3b",
        "primary-text": "#069D95",
        "secondary-text": "#044c57",
        "primary-btn": "#060606",
        "secondary-btn": "#202020",
      }
    }
  },
  plugins: [],
};
