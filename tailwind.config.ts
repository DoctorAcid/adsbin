import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4DBB18",
        secondary: "#606060",
        accent: "#415B41",
        black: "#323232",
        lightGray: "#ECECEC",
      },
    },
  },
  plugins: [],
} satisfies Config;
