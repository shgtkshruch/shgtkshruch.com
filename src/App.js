import React from 'react';

import Container from './components/Container'
import Intro from './Intro'
import Work from './Work'
import History from './History'
import Skill from './Skill'
import Contact from './Contact'
import Footer from './Footer'

export default () => (
  <Container>
    <link
      href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Inconsolata"
      rel="stylesheet"
    />
    <Intro />
    <Work />
    <History />
    <Skill />
    <Contact />
    <Footer />
  </Container>
)
