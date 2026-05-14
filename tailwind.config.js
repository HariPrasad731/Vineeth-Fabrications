export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        hvac: {
          dark: "#050914",
          cyan: "#67e8f9",
        },
      },
    },
  },
  plugins: [],
};
