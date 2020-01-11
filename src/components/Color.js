import React, { useState } from "react";
import styled from "@emotion/styled";
import { mq } from '../variables';

const Button = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid currentColor;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--bg-color);
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  ${mq.pc} {
    &:hover {
      background-color: var(--bg-color);
      color: var(--primary-color);
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
    <Button onClick={handleClick}>
      <Icon className={currentColor === 'light' ? 'fa fa-sun' : 'fa fa-moon'} />
    </Button>
  )
}
