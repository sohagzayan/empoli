import { withUt } from "uploadthing/tw";

// function withOpacity(variableName: any) {
//   return ({ opacityValue }: any) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgba(var(${variableName}), 1)`; // Default to full opacity
//   };
// }

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
        customDarkBg: "var(--bs-bg-custom-dark)",
        primary: "var(--bs-primary)",
        white: "var(--bs-light-light)",
        gray100: "var(--bs-gray-100)",
        gray200: "var(--bs-gray-200)",
        gray300: "var(--bs-gray-300)",
        gray400: "var(--bs-gray-400)",
        gray500: "var(--bs-gray-500)",
        gray600: "var(--bs-gray-600)",
        gray700: "var(--bs-gray-700)",
        gray800: "var(--bs-gray-800)",
        gray900: "var(--bs-gray-900)",
        success: "var(--bs-success)",
        info: "var(--bs-info)",
        warning: "var(--bs-warning)",
        danger: "var(--bs-danger)",
        dark: "var(--bs-dark)",
        primaryActive: "var(--bs-primary-active)",
        secondaryActive: "var(--bs-secondary-active)",
        successActive: "var(--bs-success-active)",
        infoActive: "var(--bs-info-active)",
        warningActive: "var(--bs-warning-active)",
        dangerActive: "var(--bs-danger-active)",
        primaryLight: "var(--bs-primary-light)",
        secondaryLight: "var(--bs-secondary-light)",
        successLight: "var(--bs-success-light)",
        infoLight: "var(--bs-info-light)",
        warningLight: "var(--bs-warning-light)",
        dangerLight: "var(--bs-danger-light)",
        textMuted: "var(--bs-text-muted)",
        textPrimary: "var(--bs-text-primary)",
        textSecondary: "var(--bs-text-secondary)",
        textSuccess: "var(--bs-text-success)",
        textInfo: "var(--bs-text-info)",
        textWarning: "var(--bs-text-warning)",
        textDanger: "var(--bs-text-danger)",
        textDark: "var(--bs-text-dark)",
        textLight: "var(--bs-text-light)",
        borderColor: "var(--bs-border-color)",
        borderDashedColor: "var(--bs-border-dashed-color)",
        bgPrimary: "var(--bs-light)",
        bgSecondary: "var(--bs-secondary)",
        bgGray100: "var(--bs-gray-100)",
        bgGray200: "var(--bs-gray-200)",
        bgGray300: "var(--bs-gray-300)",
        bgGray400: "var(--bs-gray-400)",
        bgGray500: "var(--bs-gray-500)",
        bgWhite: "var(--bs-light-light)",
        shadowXs: "var(--bs-box-shadow-xs)",
        shadowSm: "var(--bs-box-shadow-sm)",
        shadow: "var(--bs-box-shadow)",
        shadowLg: "var(--bs-box-shadow-lg)",
        // Adding RGB values using the correct format
        lightRgb: "var(--bs-light-rgb)",
        primaryRgb: "var(--bs-primary-rgb)",
        secondaryRgb: "var(--bs-secondary-rgb)",
        successRgb: "var(--bs-success-rgb)",
        infoRgb: "var(--bs-info-rgb)",
        warningRgb: "var(--bs-warning-rgb)",
        dangerRgb: "var(--bs-danger-rgb)",
        darkRgb: "var(--bs-dark-rgb)",
      },
      // fontSize: {
      //   small: "var(--text-size-small)",
      //   base: "var(--text-size-primary)",
      //   medium: "var(--text-size-medium)",
      //   large: "var(--text-size-large)",
      // },
      // borderRadius: {
      //   sm: "var(--rounded-small)",
      //   md: "var(--rounded-normal)",
      //   lg: "var(--rounded-large)",
      // },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
