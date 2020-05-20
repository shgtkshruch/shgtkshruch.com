import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import Container from 'components/Container';
import Intro from 'components/intro/index.js';
import Work from 'components/work/index.js';
import History from 'components/history/index.js';
import Skill from 'components/skill/index.js';
import Contact from 'components/contact/index.js';
import Footer from 'components/footer/index.js';
import Color from 'components/common/Color';
import GitHubCorner from 'components/Github-Corner';
import { mq, theme } from 'variables';

export default () => {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(index + 1)
  }

  return (
    <>
      <Container>
        <Global
          styles={css`
            :root {
              --primary-color: ${theme.light.primaryColor};
              --bg-color: ${theme.light.bgColor};
              --accent-color: ${theme.light.accentColor};
            }

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
        {index > 0 && <Work next={next} />}
        {index > 1 && <History next={next} />}
        {index > 2 && <Skill next={next} />}
        {index > 3 && <Contact next={next} />}
        <Footer />
        <Color />
      </Container>
      <GitHubCorner />
    </>
  )
}
