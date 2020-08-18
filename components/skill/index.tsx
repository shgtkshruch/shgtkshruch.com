import { useState } from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { mq } from '../variables'
const Section = dynamic(() => import('../common/Section'))
const Heading = dynamic(() => import('../common/Hgroup'))
const Item = dynamic(() => import('./Item'))

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 55rem;
  margin: 3rem auto -1.6rem;
  ${mq.pc} {
    margin-top: 5rem;
  }
`

export default ({ next, items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true)
    next()
  }

  return (
    <Section id="skils">
      <Heading
        title="skill"
        subTitle="Adopt the latest tools and methodology."
        onTypingDone={onTypingDone}
      />
      <List>
        {items.map((item, i) => <Item key={i} item={item} startAnimation={isTypingDone} />)}
      </List>
    </Section>
  )
}
