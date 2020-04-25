import React, { useState } from 'react';
import styled from '@emotion/styled';

import { mq } from 'variables';
import Section from 'components/Common/Section';
import Heading from 'components/Common/Hgroup';
import Item from './item';
import data from 'components/Work/data';

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
        {data.map((item, i) => <Item key={i} item={item} isTypingDone={isTypingDone} />)}
      </List>
    </Section>
  )
}
