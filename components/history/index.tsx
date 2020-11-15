/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

import { breakpoints, mq } from '../variables'
import Section from '../common/Section'
import Heading from '../common/Hgroup'
import Item from './Item'

type ListProps = {
  typingDone: boolean
}

const List = styled.ul<ListProps>`
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
    height: ${props => props.typingDone ? '100%' : 0};
    background-color: currentColor;
    transition: height 0.8s ease-in-out;
  }
`
const sectionStyle = css`
  max-width: 55rem;
  margin: 0 auto;
  text-align: center;
`

export default ({ next, items }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [typingDone, setTypingDone] = useState(false);

  function updateCurrentIndex(index) {
    if (isPc()) setCurrentIndex(index)
  }

  function isSelected(i) {
    return isMobile() ? true : currentIndex === i
  }

  function isPc() {
    return window.innerWidth >= breakpoints.pc
  }

  function isMobile() {
    return window.innerWidth < breakpoints.pc
  }

  function onTypingDone() {
    setTypingDone(true)
    next();
  }

  return (
    <Section id="history" css={sectionStyle}>
      <Heading
        title="history"
        subTitle="Learn WEB technology with Internet."
        onTypingDone={onTypingDone}
      />
      <List typingDone={typingDone}>
        {items.map((item, i) => (
          <Item
            key={i}
            item={item}
            isSelected={isSelected(i)}
            typingDone={typingDone}
            onAnimationEnd={() => i === items.length - 1 && currentIndex === -1 ? setCurrentIndex(0) : false}
            updateCurrentIndex={() => updateCurrentIndex(i)}
          />
        ))}
      </List>
    </Section>
  )
}
