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
    styled:false,
    themes: [
      {
        dark: {
          primary: "#1432CD",
          "primary-content": "#030821",
          "base-100": "#01030E",
          "base-content": "#D9D9D9",
          ".container-default": {
            "border-color": "#303133",
            "border-width": "2.5px",
            "border-style": "solid",
            "border-radius": "15px",
            "background-color": "#01030E",
            padding: "1.5rem",
          },
          ".container-fit": {
            "border-color": "#303133",
            "border-width": "2.5px",
            "border-style": "solid",
            "border-radius": "15px",
            "background-color": "#01030E",
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
        },
      },
    ],
  },
};
export default config;
