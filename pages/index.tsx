import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import Head from 'next/head'
import Container from '../components/layout/Container';
import Intro from '../components/intro';
import Work from '../components/work';
import { mq, theme } from '../components/variables';

export default function Home() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(index + 1)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>

      <Container>
        <main>
          <Intro next={next} />
          {index > 0 && <Work next={next} />}
        </main>

        <footer>
        </footer>
      </Container>
    </>
  )
}
