/** @type {import('tailwindcss').Config} */
module.exports = {
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
      spacing: {
        globalPadding: "5rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "160px",
              opacity: "0.2",
              letterSpacing: "-12px",
              textTransform: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
