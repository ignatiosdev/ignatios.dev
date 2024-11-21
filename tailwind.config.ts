import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: [
      {
        dark: {
          primary: "#14CD5B",
          info: "#303133",
          "primary-content": "#02190B",
          "base-100": "#010502",
          "base-content": "#D9D9D9",
          ".container-default": {
            "border-color": "#101211",
            "border-width": "2.5px",
            "border-style": "solid",
            "border-radius": "15px",
            "background-color": "#010502",
            padding: "1.5rem",
          },
          ".bg-primary-lighter": { "background-color": "#72E19D" },
          ".container-fit": {
            "border-color": "#101211",
            "border-width": "2.5px",
            "border-style": "solid",
            "border-radius": "15px",
            "background-color": "#010502",
          },

          ".text-subtitle": {
            color: "#D9D9D9",
            opacity: 0.8,
          },
          ".text-subtitle-darker": {
            color: "#D9D9D9",
            opacity: 0.6,
            "font-size": "1rem",
          },
          ".scrollbar-primary": {
            "scrollbar-color": "#14CD5B",
          },
        },
      },
    ],
  },
};
export default config;
