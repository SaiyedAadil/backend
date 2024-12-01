module.exports = {
  content: ["./*.html", "./**/*.html", "./assets/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require("./plugin")],
  plugins: [require("tailgrids/plugin")],
};
