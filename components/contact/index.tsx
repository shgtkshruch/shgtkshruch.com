import { useState } from 'react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import { mq } from '../variables'
const Section = dynamic(() => import('../common/Section'))
const Heading = dynamic(() => import('../common/Hgroup'))
const Item = dynamic(() => import('./Item'))

const List = styled.ul`
  display: flex;
  max-width: 22rem;
  margin: 4rem auto 0;
  justify-content: space-between;
  ${mq.pc} {
    margin-top: 6rem;
  }
`

export default ({ items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section id="contact">
      <Heading
        title="contact"
        subTitle="Please feel free to contact me."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <List>
        {items.map((item, i) => <Item key={i} item={item} isShow={isTypingDone} />)}
      </List>
    </Section>
  )
}
