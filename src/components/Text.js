import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.span`
  display: inline-block;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    z-index: 1;
  }
`

const Content = styled.span`
  opacity: 0;
  animation: show 0.1s 0.9s forwards;

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export default ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)
