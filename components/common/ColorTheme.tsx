"use client";

import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { mq, theme } from "../variables";

const Button = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid currentColor;
  border-radius: 50%;
  background-color: var(--bg-color);
  color: var(--primary-color);
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;
  &:focus {
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
  ${mq.pc} {
    &:hover {
      background-color: var(--primary-color);
      color: var(--bg-color);
    }
  }
  @media (min-width: 98rem) {
    top: calc(50% - 25px);
    left: calc((100vw - 98rem) / 4 - 25px);
  }
`;

const Icon = styled.i`
  font-size: 1rem;
`;

const ColorTheme: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  function handleClick() {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      theme[currentTheme].primaryColor
    );
    document.documentElement.style.setProperty(
      "--bg-color",
      theme[currentTheme].bgColor
    );
    document.documentElement.style.setProperty(
      "--accent-color",
      theme[currentTheme].accentColor
    );
  }, [currentTheme]);

  return (
    <Button onClick={handleClick}>
      <Icon
        className={currentTheme === "light" ? "fa fa-sun" : "fa fa-moon"}
        aria-hidden
      />
    </Button>
  );
};

export default ColorTheme;
