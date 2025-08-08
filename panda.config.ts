import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sp: "600px",
        pc: "1200px",
      },
      tokens: {
        colors: {
          light: {
            primary: { value: "#222" },
            bg: { value: "#fff" },
            accent: { value: "red" },
          },
          dark: {
            primary: { value: "#dee1e8" },
            bg: { value: "#161725" },
            accent: { value: "#ef40b8" },
          },
        },
        fonts: {
          mono: {
            value: "Inconsolata, Sawarabi Gothic, monospace, sans-serif",
          },
          japanese: {
            value:
              "Sawarabi Gothic, Yu Gothic, YuGothic, ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, Arial, メイリオ, Meiryo, sans-serif",
          },
        },
        spacing: {
          section: { value: "4rem" },
          sectionPc: { value: "14rem" },
        },
        fontSizes: {
          base: { value: "1.2rem" },
          jp: { value: "0.9rem" },
          jpPc: { value: "0.95rem" },
        },
        lineHeights: {
          base: { value: "1.7" },
          jp: { value: "2.6" },
        },
        letterSpacings: {
          jp: { value: "0.08em" },
        },
      },
      semanticTokens: {
        colors: {
          primary: {
            value: {
              base: "{colors.light.primary}",
              _dark: "{colors.dark.primary}",
            },
          },
          bg: {
            value: {
              base: "{colors.light.bg}",
              _dark: "{colors.dark.bg}",
            },
          },
          accent: {
            value: {
              base: "{colors.light.accent}",
              _dark: "{colors.dark.accent}",
            },
          },
        },
      },
      keyframes: {
        "octocat-wave": {
          "0%, 100%": { transform: "rotate(0)" },
          "20%, 60%": { transform: "rotate(-25deg)" },
          "40%, 80%": { transform: "rotate(10deg)" },
        },
        fadeOut: {
          "0%": {
            transform: "scale(0, 1)",
            transformOrigin: "left top",
          },
          "30%": {
            transform: "scale(1, 1)",
            transformOrigin: "left top",
          },
          "70%": {
            transform: "scale(1, 1)",
            transformOrigin: "right top",
          },
          "100%": {
            transform: "scale(0, 1)",
            transformOrigin: "right top",
          },
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },

  // Global styles
  globalCss: {
    html: {
      fontSize: "16px",
    },
    body: {
      margin: 0,
      fontFamily: "mono",
      fontSize: "base",
      lineHeight: "base",
      color: "var(--primary-color)",
      backgroundColor: "var(--bg-color)",
    },
    "ul, ol": {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      verticalAlign: "middle",
    },
    a: {
      color: "inherit",
    },
    p: {
      margin: 0,
    },
    "h1, h2, h3": {
      margin: 0,
      fontWeight: "normal",
      fontSize: "inherit",
    },
    "::selection": {
      backgroundColor: "var(--primary-color)",
      color: "var(--bg-color)",
    },
    ".jp": {
      fontFamily: "japanese",
      fontSize: "jp",
      letterSpacing: "jp",
      lineHeight: "jp",
      pc: {
        fontSize: "jpPc",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
