import { green } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primary: { ...green, 500: "#007834" },
        // placki: green,
      },
    },
  },
  plugins: [],
};
