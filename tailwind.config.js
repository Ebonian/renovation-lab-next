module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/img/banner-1.jpg')",
      },
      fontFamily: {
        kanit: ["Kanit"],
        athiti: ["Athiti"],
      },
    },
  },
  plugins: [],
};
