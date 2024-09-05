import type { Config } from "tailwindcss";

import { colors, fontSize, fontFamily } from './src/styles/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize,
      fontFamily,
      colors,
    },
  },
  plugins: [],
};
export default config;
