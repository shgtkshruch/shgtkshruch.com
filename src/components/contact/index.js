import React, { useState } from 'react';
import styled from '@emotion/styled';

import { mq } from 'variables'
import Section from 'components/Common/Section';
import Heading from 'components/Common/Hgroup';
import Item from './item';
import data from './data';

const List = styled.ul`
  display: flex;
  max-width: 22rem;
  margin: 4rem auto 0;
  justify-content: space-between;

  ${mq.pc} {
    margin-top: 6rem;
  }
`

export default () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section id="contact">
      <Heading
        title="contact"
        subTitle="Please feel free to contact me."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <List>
        {data.map((item, i) => <Item key={i} item={item} isShow={isTypingDone} />)}
      </List>
    </Section>
  )
}
