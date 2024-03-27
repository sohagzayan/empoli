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
        gray_light_400: {
          DEFAULT: "hsl(var(--gray-light-400))",
        },
        primary: {
          500: "#624CF5",
          600: "#583bd3",
          50: " #F6F4FE",
          25: "#f5f7fc",
          DEFAULT: "#6A49F2",
          foreground: "hsl(var(--primary-foreground))",
        },
        light_gray: {
          DEFAULT: "#F8F8F8",
        },
        translucent_black: {
          DEFAULT: "rgba(0,0,0,.14)",
        },
        purple: {
          DEFAULT: "#32236F",
          light: "#E1DBF4",
        },
        blue: {
          DEFAULT: "#3E3F66",
          midnight_blue: "#1c2733",
          steel_blue: "#667488",
        },
        coral: {
          500: "#15BF59",
          400: "#26ae61",
        },
        grey: {
          600: "#545454", // Subdued - color name in figma
          500: "#757575",
          400: "#AFAFAF", // Disabled - color name in figma
          50: "#F6F6F6", // White Grey - color name in figma
        },

        black: "#000000",
        white: "#FFFFFF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        poppins: ["var(--font-inter)"],
      },
      backgroundImage: {
        "dotted-pattern": "url('/assets/images/dotted-pattern.png')",
        "hero-img": "url('/assets/images/hero.png')",
        "hero-shape": "url('/assets/images/banner-shape.svg')",
        "recruiting-banner": "url('/assets/images/mic-baner.png')",
        "bread_crump-banners": "url('/assets/images/bread_crumb_bg.png')",
        banner_overlay_shape:
          "url('/assets/images/inner_page_banner_overlay.svg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      boxShadow: {
        shadow1: "0px 4px 30px 0px #EDE9FE",
        shadow_dark: "0px 4px 10px 0px #0c0c0c21",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
