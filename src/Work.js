import React, { useState } from 'react';
import styled from '@emotion/styled';

import { mq } from './variables';
import Section from './components/Section';
import Heading from './components/Hgroup';
import Work from './components/work/';
import items from './components/work/data';

const List = styled.div`
  padding-top: 4rem;

  ${mq.pc} {
    padding-top: 14rem;
  }
`

export default ({ next }) => {
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
        {items.map((item, i) => <Work key={i} item={item} isTypingDone={isTypingDone} />)}
      </List>
    </Section>
  )
}
