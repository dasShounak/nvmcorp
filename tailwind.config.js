module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Baloo", "sans-serif"],
      heading: ["Spin Cycle", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('../img/hero.svg')",
        cta: "url('../img/cta.svg')",
      },
    },
  },
  plugins: [],
};
