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
          // Primary dark (navy-gray) — main body/card backgrounds
          dark:        "#1F252E",
          // Slate blue — hero sections, headers, primary surfaces
          green:       "#435970",
          "green-mid": "#4D6B8A",
          "green-light": "#6B8FAF",
          // Bright green — CTAs, accents, icons, links
          orange:      "#22C358",
          "orange-light": "#3BD96A",
          // Cream / sage — light backgrounds & pills
          cream:       "#F2F0ED",
          "cream-dark": "#CEDAC8",
          // Muted gray — secondary text
          "gray":      "#67717E",
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
