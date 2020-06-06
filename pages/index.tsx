import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import Container from '../components/layout/Container';
import Intro from '../components/intro';
import Work from '../components/work';
import History from '../components/history';
import Skill from '../components/skill';
import Contact from '../components/contact';
import Footer from '../components/footer';
import ColorTheme from '../components/common/ColorTheme';
import GitHubCorner from '../components/common/GitHub-Corner';
import { mq, theme } from '../components/variables';

export default function Home() {
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
        <main>
          <Intro next={next} />
          {index > 0 && <Work next={next} />}
          {index > 1 && <History next={next} />}
          {index > 2 && <Skill next={next} />}
          {index > 3 && <Contact />}
        </main>
        <Footer />
      </Container>
      <ColorTheme />
      <GitHubCorner />
    </>
  )
}
