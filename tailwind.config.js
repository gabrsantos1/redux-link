/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e7720b",
          50: "#f5933d",
          20: "#e6a66e",
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
        varela: ["Varela Round", "serif"],
      },
    },
  },

  plugins: [],
};
