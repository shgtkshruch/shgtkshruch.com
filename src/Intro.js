import React, { useState } from 'react';
import styled from '@emotion/styled'
import Hgroup from './components/Hgroup'
import Mouse from './Mouse'

const Section = styled.section`
  position: relative;
  height: 100vh;
`
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const MouseWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: ${props => props.isMouseShow ? 1 : 0};
  transition: opacity 0.7s ease-in;
`

export default () => {
  const [isMouseShow, setIsMouseShow] = useState(false)

  function onTypingDone() {
    setIsMouseShow(true)
    window.addEventListener('scroll', () => setIsMouseShow(false))
  }

  return (
    <Section>
      <Wrapper>
        <Hgroup
          title="Shigetaka Shirouchi"
          subTitle="I'm a Front-End Engineer."
          onTypingDone={onTypingDone}
        />
      </Wrapper>
      <MouseWrapper isMouseShow={isMouseShow}>
        <Mouse />
      </MouseWrapper>
    </Section>
  )
}
