import React from 'react';
import styled from '@emotion/styled'

import { mq } from '../variables'

const Hgroup = styled.hgroup`
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: normal;
  letter-spacing: 0.2em;
`

const Sub = styled.span`
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.6;

  ${mq.pc} {
    font-size: 1.2rem;
  }

  &::after {
    content: '|';
    animation: blink 1.2s infinite;
  }
`

export default ({ title, subTitle, children }) => {
  return (
    <Hgroup class="heading">
      <Title class="heading__title">{title}</Title>
      <Sub class="heading__sub">{subTitle}</Sub>
    </Hgroup>
  )
}
