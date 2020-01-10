import React, { useState } from 'react';

import Container from './components/Container'
import Intro from './Intro'
import Work from './Work'
import History from './History'
import Skill from './Skill'
import Contact from './Contact'
import Footer from './Footer'

export default () => {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(index + 1)
  }

  return (
    <Container>
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
    </Container>
  )
}
