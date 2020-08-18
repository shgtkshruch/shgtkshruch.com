import { useState } from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { mq } from '../variables'
const Section = dynamic(() => import('../common/Section'))
const Heading = dynamic(() => import('../common/Hgroup'))
const Item = dynamic(() => import('./Item'))

const List = styled.div`
  padding-top: 4rem;
  ${mq.pc} {
    padding-top: 14rem;
  }
`

export default ({ next, items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true)
    next()
  }

  return (
    <Section id="work" className="work">
      <Heading
        title="work"
        subTitle="My client and private works."
        onTypingDone={onTypingDone}
      />
      <List>
        {items.map((item, i) => <Item key={i} item={item} isTypingDone={isTypingDone} />)}
      </List>
    </Section>
  )
}
