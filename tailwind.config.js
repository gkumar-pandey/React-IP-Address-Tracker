/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},

    screens: {
      sm: { max: "500px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "502px", max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "770px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { max: "1290px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" }
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};
