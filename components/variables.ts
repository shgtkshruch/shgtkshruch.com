import { token } from "../styled-system/tokens";

// Breakpoints are now handled by Panda CSS
export const breakpoints = { sp: 600, pc: 1200 };

// Media queries using Panda's token system
export const mq = {
  sp: "@media (min-width: 600px)",
  pc: "@media (min-width: 1200px)",
};

// Theme colors - now using Panda CSS semantic tokens
export const theme = {
  light: {
    primaryColor: token("colors.light.primary"),
    bgColor: token("colors.light.bg"),
    accentColor: token("colors.light.accent"),
  },
  dark: {
    primaryColor: token("colors.dark.primary"),
    bgColor: token("colors.dark.bg"),
    accentColor: token("colors.dark.accent"),
  },
};
