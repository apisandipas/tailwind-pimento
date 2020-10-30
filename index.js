const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ theme }) {}, {
  theme: {
    extend: {
      colors: (theme) => ({
        pimentoBG: "#242c38",
        pimentoFG: "#f2f2f4",
        "pimento-black0": "#333b47",
        "pimento-black1": "#424a56",
        "pimento-red0": "#f05656",
        "pimento-red1": "#ff6565",
        "pimento-green0": "#2cc46e",
        "pimento-green1": "#3bd37d",
        "pimento-yellow0": "#ecc46f",
        "pimento-yellow1": "#fbd37e",
        "pimento-blue0": "#6088dd",
        "pimento-blue1": "#6f97ec",
        "pimento-magenta0": "#fa5477",
        "pimento-magenta1": "#ff6386",
        "pimento-cyan0": "#64b9f2",
        "pimento-cyan1": "#71c6ff",
        "pimento-white0": "#d2d2d4",
        "pimento-white1": "#f1f1f3",
      }),
    },
  },
});

