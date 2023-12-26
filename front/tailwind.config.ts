import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      width: {
        "420": "420px",
        "350": "350px",
        "110": "110px"
      },
      padding: {
        send_icon: "10px"
      },
      colors: {
        icons_color: "#7f829e",
        placeholder_color: "#2c2d3c"
      },
      borderWidth: {
        1: "1px"
      }
    }
  },
  plugins: [require("tailwind-scrollbar")]
};

export default config;
