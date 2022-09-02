/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#9bd6c3",
        color2: "#008080",
        color3: "#efe5d5",
      },
    },
  },
  plugins: [],
}
