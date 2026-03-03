import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:     "#1B4332",
          "green-mid": "#2D6A4F",
          "green-light": "#40916C",
          orange:    "#D4521A",
          "orange-light": "#F4845F",
          cream:     "#FEFAE0",
          "cream-dark": "#F0EAD2",
          dark:      "#0D1B0F",
          "gray":    "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
