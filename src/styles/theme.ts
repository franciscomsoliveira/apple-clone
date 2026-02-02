// src/styles/theme.ts
export const appleTheme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    backgroundLight: "#f5f5f7",
    backgroundDark: "#161617",
    textPrimary: "#1d1d1f",
    textSecondary: "#86868b",
    textLight: "#f5f5f7",
    blueLink: "#0066cc",
    blueButton: "#0071e3",
    navBackgroundOpened: "#fafafc",
    navBackgroundOpenedDark: "#161617",
    curtainLight: "rgba(232, 232, 237, 0.4)",
    curtainDark: "rgba(0, 0, 0, 0.4)",
  },
  fonts: {
    main: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  breakpoints: {
    small: "734px", // Mobile (iPhone vertical)
    medium: "833px", // Tablets pequenos / iPhone horizontal
    large: "1068px", // iPad Pro / Laptops pequenos
    xlarge: "1440px", // Desktop padrão
  },
};

// Aqui fazemos a "mágica" para o TypeScript entender nosso tema no CSS
import "styled-components";
type MyTheme = typeof appleTheme;
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
