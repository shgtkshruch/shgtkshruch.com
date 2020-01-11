/** @jsx jsx */
import { useState } from 'react';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core';

import { breakpoints, mq } from './variables';
import Section from './components/Section';
import Heading from './components/Hgroup';
import _History from './components/history/';
import items from './components/history/data';

const List = styled.ul`
  display: inline-block;
  text-align: left;
  position: relative;
  padding: 4rem 0;
  margin-top: 2rem;

  ${mq.pc} {
    display: block;
    margin-top: 5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: ${props => props.isShow ? '100%' : 0};
    background-color: currentColor;
    transition: height 0.8s ease-in-out;
  }
`
const sectionStyle = css`
  max-width: 55rem;
  margin: 0 auto;
  text-align: center;
`
const History = styled(_History)`
  opacity: ${props => props.isInview ? 1 : 0};
`

export default ({ next }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [inview, setInview] = useState(false);

  function updateCurrentIndex(index) {
    if (isPc()) setCurrentIndex(index)
  }

  function isShow(i) {
    return isMobile() ? true : currentIndex === i
  }

  function isPc() {
    return window.innerWidth >= breakpoints.pc
  }

  function isMobile() {
    return window.innerWidth < breakpoints.pc
  }

  function onTypingDone() {
    setInview(true)
    next();
  }

  return (
    <Section id="history" css={sectionStyle}>
      <Heading
        title="history"
        subTitle="Learn WEB technology with Internet."
        onTypingDone={onTypingDone}
      />
      <List isShow={inview}>
        {items.map((item, i) => (
          <History
            key={i}
            item={item}
            index={i}
            isInview={inview}
            isShow={isShow(i)}
            onAnimationEnd={(i) => i === items.length - 1 && currentIndex === -1 ? setCurrentIndex(0) : false}
            updateCurrentIndex={updateCurrentIndex}
          />
        ))}
      </List>
    </Section>
  )
}
