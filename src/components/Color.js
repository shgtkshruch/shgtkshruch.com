import React, { useState } from "react";
import styled from "@emotion/styled";
import { mq } from "../variables";

const Button = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid var(--bg-color);
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--bg-color);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-color);
    color: var(--primary-color);
    border-color: var(--primary-color);
  }

  @media (min-width: 98rem) {
    left: calc((100vw - 98rem) / 4);
  }
`;
const lightColor = '#dee1e8';
const darkColor = '#161725';

export default () => {
  const [currentColor, setCurrentColor] = useState('light');

  function handleClick() {
    switch (currentColor) {
      case 'light':
        setCurrentColor('dark');
        document.documentElement.style.setProperty("--primary-color", lightColor);
        document.documentElement.style.setProperty("--bg-color", darkColor);
        break;
      default:
        setCurrentColor('light');
        document.documentElement.style.setProperty("--primary-color", "#222");
        document.documentElement.style.setProperty("--bg-color", "#fff");
    }
  }

  return (
    <Button onClick={handleClick}>change color</Button>
  )
}
