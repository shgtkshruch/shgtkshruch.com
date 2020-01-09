import React from 'react';
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
`

export default () => (
  <Section>
    <Wrapper>
      <Hgroup
        title="Shigetaka Shirouchi"
        subTitle="I'm a Front-End Engineer."
      />
    </Wrapper>
    <MouseWrapper>
      <Mouse />
    </MouseWrapper>
  </Section>
)