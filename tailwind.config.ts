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
        primary: "#0055FF",
        accent: "#00D4FF",
        dark: "#0A0A0F",
        "dark-card": "#12121A",
        "dark-border": "#1E1E2E",
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
