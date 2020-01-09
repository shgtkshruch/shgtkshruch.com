import React from 'react'
import styled from '@emotion/styled'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward-subtle.css';
import 'tippy.js/themes/material.css';
import { mq } from '../variables'

const Skill = styled.li`
  position: relative;
  margin-right: 1rem;
  margin-bottom: 0.4rem;
  letter-spacing: 0.1em;

  &::after {
    content: '/';
    position: absolute;
    top: 0;
    left: 100%;
    color: #000;
  }

  .is-active & {
    opacity: 1;
  }

  ${mq.pc} {
    margin-bottom: 1.6rem;

    &:hover {
      color: red;
    }
  }
`
export default ({ item, children }) => {
  const { name, text } = item

  return (
    <Tippy content={text} animation="shift-toward-subtle" theme="material">
      <Skill>{name}</Skill>
    </Tippy>
  )
}
