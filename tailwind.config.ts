/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

module.exports = withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)", // Matches --color-primary
        white: "var(--color-white)", // Matches --color-white
        orange: "var(--color-orange)", // Matches --color-orange
        blue: "var(--color-blue)", // Matches --color-blue
        connect: "var(--color-connect)", // Matches --color-connect
        connect2: "var(--color-connect-2)", // Matches --color-connect-2
        connect3: "var(--color-connect-3)", // Matches --color-connect-3
        inspire: "var(--color-inspire)", // Matches --color-inspire
        inspire2: "var(--color-inspire-2)", // Matches --color-inspire-2
        inspire3: "var(--color-inspire-3)", // Matches --color-inspire-3
        awards: "var(--color-awards)", // Matches --color-awards
        awards2: "var(--color-awards-2)", // Matches --color-awards-2
        awards3: "var(--color-awards-3)", // Matches --color-awards-3
        read: "var(--color-read)", // Matches --color-read
        read2: "var(--color-read-2)", // Matches --color-read-2
        read3: "var(--color-read-3)", // Matches --color-read-3
        learn: "var(--color-learn)", // Matches --color-learn
        learn2: "var(--color-learn-2)", // Matches --color-learn-2
        learn3: "var(--color-learn-3)", // Matches --color-learn-3
        jobs: "var(--color-jobs)", // Matches --color-jobs
        jobs2: "var(--color-jobs-2)", // Matches --color-jobs-2
        jobs3: "var(--color-jobs-3)", // Matches --color-jobs-3
        gray_light_400: "#f0f0f0", // Static value, matches light gray
        light_gray: "var(--color-odd-rows)", // Matches --color-odd-rows
        black: "#000000", // Static black color
        border: "var(--border-gray)", // Matches --border-gray

        /* Background colors */
        bgPrimary: "var(--bg-primary)", // Matches --bg-primary
        bgPrimaryRgb: "var(--bg-primary-rgb)", // Matches --bg-primary-rgb
        bgSecondary: "var(--bg-secondary)", // Matches --bg-secondary
        bgThird: "var(--bg-3rd)", // Matches --bg-3rd
        bgFourth: "var(--bg-4rd)", // Matches --bg-4rd
        bgWhite: "var(--bg-white)", // Matches --bg-white
      },
      fontSize: {
        small: "var(--text-size-small)", // Matches --text-size-small (12px)
        base: "var(--text-size-primary)", // Matches --text-size-primary (16px)
        medium: "var(--text-size-medium)", // Matches --text-size-medium (18px)
        large: "var(--text-size-large)", // Matches --text-size-large (24px)
      },
      borderRadius: {
        sm: "var(--rounded-small)",
        md: "var(--rounded-normal)",
        lg: "var(--rounded-large)",
      },
      fontFamily: {
        "apercu-bold": ["Apercu Bold", "sans-serif"],
        "apercu-medium": ["Apercu Medium", "sans-serif"],
        "apercu-regular": ["Apercu Regular", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
