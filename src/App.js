import React from 'react';

import Container from './components/Container'
import Intro from './Intro'
import Work from './Work'
import History from './History'
import Skill from './Skill'
import Contact from './Contact'

export default () => (
  <Container>
    <Intro />
    <link
      href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Inconsolata"
      rel="stylesheet"
    />
    <Work />
    <History />
    <Skill />
    <Contact />
  </Container>
)
