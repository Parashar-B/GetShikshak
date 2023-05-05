/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // "primary-color":"#004d46",
        "primary-color":"#0a4a40",
      }
    },
  },
  plugins: [],
}

// previous primary-color: #00635A