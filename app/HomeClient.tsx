"use client";

import { useState } from "react";
import ColorTheme from "../components/common/ColorTheme";
import GitHubCorner from "../components/common/GitHub-Corner";
import GlobalStyle from "../components/common/GlobalStyle";
import Contacts from "../components/contact";
import Footer from "../components/footer";
import Histories from "../components/history";
import Intro from "../components/intro";
import Container from "../components/layout/Container";
import Skills from "../components/skill";
import Works from "../components/work";
import type { Contact, History, Skill, Work } from "../types/api";

type HomeProps = {
  works: Work[];
  history: History[];
  skills: Skill[];
  contacts: Contact[];
};

export function HomeClient({ works, history, skills, contacts }: HomeProps) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex(index + 1);

  return (
    <>
      <Container>
        <main>
          <Intro next={next} />
          {index > 0 && <Works next={next} items={works} />}
          {index > 1 && <Histories next={next} items={history} />}
          {index > 2 && <Skills next={next} items={skills} />}
          {index > 3 && <Contacts items={contacts} />}
        </main>
        <Footer />
      </Container>
      <GitHubCorner />
      <GlobalStyle />
      <ColorTheme />
    </>
  );
}
