import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#E9722B",
          light: "#FFBF98"
        },
        secondary: {
          DEFAULT: "#000000",
          gray: "#797A7A"
        },
        gray: {
          DEFAULT: "#F5F5F5"
        },
        boxShadow: {
          DEFAULT: "#D0BDD6"
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "dm-sans": ["var(--font-dm-sans)"],
        briquete: ["var(--font-briquete)"],
        "noto-sans": ["var(--font-noto-sans)"],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
