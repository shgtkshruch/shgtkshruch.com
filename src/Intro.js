import React from 'react';
import styled from '@emotion/styled'

import Hgroup from './components/Hgroup'
import Mouse from './Mouse'

const Section = styled.section`
  position: relative;
  height: 100vh;
`
const Wrapper = styled.hgroup`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default () => (
  <Section>
    <Wrapper>
      <Hgroup
        title="Shigetaka Shirouchi"
        subTitle="I'm a Front-End Engineer."
      />
      <Mouse />
    </Wrapper>
  </Section>
)
