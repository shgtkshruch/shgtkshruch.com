import type React from "react";
import { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import { theme } from "../variables";

const ColorTheme: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleClick() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    // Initialize theme on mount
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") ||
      (prefersDarkMode ? "dark" : "light");
    setCurrentTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Update CSS custom properties when theme changes
    document.documentElement.style.setProperty(
      "--primary-color",
      theme[currentTheme as keyof typeof theme].primaryColor,
    );
    document.documentElement.style.setProperty(
      "--bg-color",
      theme[currentTheme as keyof typeof theme].bgColor,
    );
    document.documentElement.style.setProperty(
      "--accent-color",
      theme[currentTheme as keyof typeof theme].accentColor,
    );
  }, [currentTheme]);

  return (
    <button
      type="button"
      onClick={handleClick}
      title={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      className={css({
        position: "fixed",
        top: "1rem",
        left: "1rem",
        display: "inline-block",
        width: "50px",
        height: "50px",
        border: "1px solid currentColor",
        borderRadius: "50%",
        backgroundColor: "var(--bg-color)",
        color: "var(--primary-color)",
        transition: "all 0.3s ease",
        outline: "none",
        cursor: "pointer",
        _focus: {
          backgroundColor: "var(--primary-color)",
          color: "var(--bg-color)",
        },
        pc: {
          _hover: {
            backgroundColor: "var(--primary-color)",
            color: "var(--bg-color)",
          },
        },
        "@media (min-width: 98rem)": {
          top: "calc(50% - 25px)",
          left: "calc((100vw - 98rem) / 4 - 25px)",
        },
      })}
    >
      <i
        className={`${currentTheme === "light" ? "fa fa-sun" : "fa fa-moon"} ${css({ fontSize: "1rem" })}`}
        aria-hidden
      />
    </button>
  );
};

export default ColorTheme;
