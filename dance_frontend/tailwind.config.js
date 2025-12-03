/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "background-dark": "var(--background-dark)",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "primary-glow": "var(--primary-glow)",
      },
      backgroundImage: {
        "futuristic-bg":
          "radial-gradient(circle at top left, rgba(0, 246, 255, 0.1), transparent 40%), radial-gradient(circle at bottom right, rgba(126, 0, 255, 0.1), transparent 40%)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
