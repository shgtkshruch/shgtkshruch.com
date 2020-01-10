import React, { useState } from 'react';
import styled from '@emotion/styled'

import { mq } from './variables'
import Section from './components/Section';
import Heading from './components/Hgroup';
import Contact from './components/Contact';

const items = [
  {
    name: 'mail',
    url: 'mailto:info@shgtkshruch.com'
  },
  {
    name: 'github',
    url: 'https://github.com/shgtkshruch'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/shgtkshruch'
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/shgtkshruch'
  },
  {
    name: 'hatena',
    url: 'http://b.hatena.ne.jp/sh19e/bookmark'
  }
]

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
      {isTypingDone &&
        <List>
          {items.map((item, i) => <Contact key={i} item={item} />)}
        </List>
      }
    </Section>
  )
}
