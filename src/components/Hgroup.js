import React, { useState } from 'react';
import styled from '@emotion/styled'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { InView } from 'react-intersection-observer'
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
`

export default ({ title, subTitle, onTypingDone }) => {
  const [inview, setView] = useState(false);

  return (
    <Hgroup>
      <InView
        as="div"
        onChange={(inview, entry) => inview ? setView(true) : false}
      >
        {inview &&
          <Typist
            avgTypingDelay={60}
            stdTypingDelay={40}
            onTypingDone={onTypingDone}
          >
            <Title>{title}</Title>
            <Sub>{subTitle}</Sub>
          </Typist>
        }
      </InView>
    </Hgroup>
  )
}
