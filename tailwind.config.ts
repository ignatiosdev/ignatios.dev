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
    themes: [
      {
        dark: {
          primary: "#1432CD",
          "base-100": "#01030E",
          "base-content": "#D9D9D9",
          ".text-subtitle": {
            color: "#D9D9D9",
            opacity: 0.8,
          },
          ".text-subtitle-darker": {
            color: "#D9D9D9",
            opacity: 0.6,
          },
        },
      },
    ],
  },
};
export default config;
