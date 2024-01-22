import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-100": "#6760a9",
        "brand-200": "#7870b3",
        "brand-300": "#8981bc",
        "brand-400": "#9a92c6",
        "brand-500": "#aaa3cf",
        "brand-600": "#bbb5d9",

        "surface-100": "#121212",
        "surface-200": "#282828",
        "surface-300": "#3f3f3f",
        "surface-400": "#575757",
        "surface-500": "#717171",
        "surface-600": "#8b8b8b",

        "surface-mixed-100": "#1b191f",
        "surface-mixed-200": "#302e34",
        "surface-mixed-300": " #46444a",
        "surface-mixed-400": "#5e5c61",
        "surface-mixed-500": "#777579",
        "surface-mixed-600": "#908f93",
      },
    },
  },
  plugins: [],
};
export default config;
