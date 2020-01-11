import React from 'react';
import styled from '@emotion/styled';

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward-subtle.css';
import 'tippy.js/themes/material.css';

import { mq } from '../../variables';

const nthChildAnimation = Array.from('_'.repeat(25)).reduce((res, _, i) => {
  const delay = 0.05 * (i + 1);
  res += `
    &:nth-of-type(${i + 1}) {
      transition: color 0.3s;
      animation: fadeIn 0.8s ${delay}s forwards;
    }
  `
  return res
}, '');

const Skill = styled.li`
  position: relative;
  margin-right: 1rem;
  margin-bottom: 0.4rem;
  letter-spacing: 0.1em;
  opacity: 0;
  font-size: 1.1rem;

  ${props => props.startAnimation ? nthChildAnimation : ''}

  &::after {
    content: '/';
    position: absolute;
    top: 0;
    left: 100%;
    color: currentColor;
  }

  ${mq.pc} {
    margin-bottom: 1.6rem;
    font-size: 1.2rem;

    &:hover {
      color: red;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default ({ item, startAnimation, children }) => {
  const { name, text } = item

  return (
    <Tippy content={text} animation="shift-toward-subtle" theme="material">
      <Skill startAnimation={startAnimation}>{name}</Skill>
    </Tippy>
  )
}
