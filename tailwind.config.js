/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        herobg: "#121723",
        navbg: "#1d2430",
        navtext: "#edeef0",
        skillbg: "#1d2430",
        inputbg: "#1d2430",
        contactbutton: "#6264e1"
      },
    },
  },
  plugins: [],
}
