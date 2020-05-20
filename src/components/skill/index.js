import React, { useState } from 'react';
import styled from '@emotion/styled';

import { mq } from 'variables';
import Section from 'components/common/Section';
import Heading from 'components/common/Hgroup';
import Item from './item';
import data from './data';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 55rem;
  margin: 3rem auto -1.6rem;

  ${mq.pc} {
    margin-top: 5rem;
  }
`

export default ({ next }) => {
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
        {data.map((item, i) => <Item key={i} item={item} startAnimation={isTypingDone} />)}
      </List>
    </Section>
  )
}
