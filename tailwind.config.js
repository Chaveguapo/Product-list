/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Red Hat Text"],
    },
    container: {
      padding: "2rem",
    },
    extend: {
      colors: {
        Red: " hsl(14, 86%, 42%)",
        Green: "hsl(159, 69%, 38%)",
        Rose_50: "hsl(20, 50%, 98%)",
        Rose_300: "hsl(14, 25%, 72%)",
        Rose_400: "hsl(7, 20%, 60%)",
        Rose_500: "hsl(12, 20%, 44%)",
        Rose_900: "hsl(14, 65%, 9%)",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
