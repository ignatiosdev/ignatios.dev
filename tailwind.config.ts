import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "102": "1.02",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
  
    themes: [
      {
        "dark": {
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
        "light": {
          primary: "#14CD5B",
          info: "#303133",
          "primary-content": "#02190B",
          "base-100": "#F0F2F2",
          "base-content": "#0C0D0C",
          ".container-default": {
            "border-color": "#D7D9D7",
            "border-width": "0px",
            "border-style": "solid",
            "border-radius": "15px",
            "box-shadow":
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
            "background-color": "#F0F2F2",
            padding: "1.5rem",
          },
          ".bg-primary-lighter": { "background-color": "#72E19D" },
          ".container-fit": {
            "border-width": "0px",
            "border-color": "#D7D9D7",
            "border-style": "solid",
            "border-radius": "15px",
            "background-color": "#F0F2F2",
            "box-shadow":
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
          },

          ".text-subtitle": {
            color: "#0C0D0C",
            opacity: 0.8,
          },
          ".text-subtitle-darker": {
            color: "#0C0D0C",
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
