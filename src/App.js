import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import Container from './components/Container';
import Intro from './Intro';
import Work from './Work';
import History from './History';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';
import Color from './components/Color';
import { mq } from './variables';

export default () => {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(index + 1)
  }

  return (
    <Container>
      <Global
        styles={css`
          .jp {
            font-family: 'Sawarabi Gothic', "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
            font-size: 0.9rem;
            letter-spacing: 0.08em;
            line-height: 2.6;

            ${mq.pc} {
              font-size: 0.95rem;
            }
          }
        `}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Inconsolata"
        rel="stylesheet"
      />
      <Intro next={next} />
      {index > 0 && <Work next={next} /> }
      {index > 1 && <History next={next} />}
      {index > 2 && <Skill next={next} />}
      {index > 3 && <Contact next={next} />}
      <Footer />
      <Color />
    </Container>
  )
}
