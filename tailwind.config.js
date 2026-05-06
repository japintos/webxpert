/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
        ink: "#0b1020",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(79,70,229,.30)",
      },
    },
  },
  plugins: [],
};
