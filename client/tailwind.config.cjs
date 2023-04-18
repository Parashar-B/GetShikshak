/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#004d46",
        
      }
    },
  },
  plugins: [],
}

// previous primary-color: #00635A