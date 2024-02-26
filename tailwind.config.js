/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary100: "#8B5FBF",
        primary200: "#61398F",
        primary300: "#FFFFFF",
        accent100: "#D6C6E1",
        accent200: "#9A73B5",
        text100: "#4A4A4A",
        text200: "#878787",
        bg100: "#F5F3F7",
        bg200: "#E9E4ED",
        bg300: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
