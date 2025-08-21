// path: portfolio/tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}", // inject @/components to render
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        main: "#1c1c22", // BACKGROUND MAIN COLOR
        primary: {
          // DEFAULT: "#bfdbfe",
          DEFAULT: "#a1c2fc",
          hover: "#a1c2fc",
        },
        gold: "#d5c28f",
        // -------------------- Neon colors --------------------
        neon: {
          green: "#00ff99",
          default: "#1c1c22",
          one: "#18181b",
          two: "#232329",
        },
        // -------------------- Creamy colors --------------------
        creamy: {
          purple: "#8a9fe0",
          white: "#fbf4eb",
          burgundy: "#b25967",
          sage: "#a8b5a2",
          mint: "#cde6d0",
          slate: "#9aa8b8",
          blush: "#f4c7c3",
          sky: "#cfdff6",
          linen: "#f5ede6",
          ivory: "#fdf5e6",
          bone: "#e3ded7",
        },
        // -------------------- Soft colors --------------------
        soft: {
          slate: "#6b7280",
          slatedesc: "#7a808d",
          rose: "#a66974",
          moss: "#6b806b",
          sand: "#a6916e",
          lavender: "#7e8ab8",
          teal: "#5e8b8a",
          coral: "#b57770",
          red: "#d56767",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
