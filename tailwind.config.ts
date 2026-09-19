import type { Config } from "tailwindcss";

const config: Config = {
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
        border: "hsl(var(--border))",
        brand: {
          DEFAULT: "var(--brand-primary, #7C3AED)",
          light: "var(--brand-primary-light, #F5F3FF)",
          dark: "var(--brand-primary-dark, #6D28D9)",
          accent: "var(--brand-accent, #D97706)",
        },
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0, 0, 0, 0.04)",
        "glass-hover": "0 16px 40px rgba(124, 58, 237, 0.08)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
