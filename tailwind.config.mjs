/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textColor: "var(--text-color)",
      },
      fontFamily: {
        noka: "var(--noka)",
        marker: "var(--p-marker)",
      },
      boxShadow: {
        songShadow: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
