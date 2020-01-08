import React from 'react';
import styled from '@emotion/styled'

import { mq } from '../variables'

const Container = styled.div`
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${mq.pc} {
    max-width: 100%;
    padding-right: 4rem;
    padding-left: 4rem;
  }
`

export default ({ children }) => (
  <Container>{children}</Container>
)
