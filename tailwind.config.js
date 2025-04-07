/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "button-image": "url('/images/bars.svg.svg')",
      },
      margin: {
        "48rem": "48rem",
      },
    },
    
  },
  plugins: [],
};
