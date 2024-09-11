/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#AABF16",
        primaryViolet: "#653E91",
    },
    backgroundImage: {
      isologoGreen: "url(/src/assets/isologoGreen.png)",
      isologoViolet: "url(/src/assets/isologoViolet.png)",
      isologoWhite: "url(/src/assets/isologoWhite.png)",
    },
    gridTemplateColumns: {
      'auto-fit-270-300': 'repeat(auto-fit, minmax(270px, 1fr))',
      'auto-fill-270-300': 'repeat(auto-fill, minmax(222px, 1fr))',
    },
  },
  plugins: [],
}
}