import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../variables'

const Footer = styled.footer`
  padding-bottom: 1rem;
  text-align: center;
}
`
const Small = styled.small`
  font-size: 0.6rem;
  ${mq.pc} {
    font-size: 0.8rem;
  }
`

export default () => (
  <Footer>
    <Small>
      Copyright © 2017-2020 shigetaka shirouchi All Rights Reserved.
    </Small>
  </Footer>
)