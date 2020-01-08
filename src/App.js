import React from 'react';

import Container from './components/Container'
import Work from './Work'
import History from './History'
import Skill from './Skill'
import Contact from './Contact'

export default () => (
  <Container>
    <link href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
    <Work />
    <History />
    <Skill />
    <Contact />
  </Container>
)
