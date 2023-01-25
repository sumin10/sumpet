/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { brand: "#e8d5ab" },
      backgroundImage: {
        banner: `url('../public/image/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
