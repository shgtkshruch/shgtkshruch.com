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
          color: "var(--bg-color)",
          backgroundColor: "var(--primary-color)",
        },
        pc: {
          _hover: {
            color: "var(--bg-color)",
            backgroundColor: "var(--primary-color)",
          },
        },
        "@media (min-width: 98rem)": {
          top: "calc(50% - 25px)",
          left: "calc((100vw - 98rem) / 4 - 25px)",
        },
      })}
    >
      <i
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
        aria-hidden
      >
        {currentTheme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
            height="18"
          >
            <title>Light mode</title>
            <path
              d="M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"
              fill="currentcolor"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="18"
            height="18"
          >
            <title>Dark mode</title>
            <path
              d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"
              fill="currentcolor"
            />
          </svg>
        )}
      </i>
    </button>
  );
};

export default ColorTheme;
