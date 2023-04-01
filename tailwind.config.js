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
      animation: {
        fadeIn: "fadeIn 0.75s ease-in forwards",
        bounce: "bounce 1.5s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(35px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        variants: {
          animation: ["motion-safe"]
        }
      },
    },
  },
  plugins: [],
}
