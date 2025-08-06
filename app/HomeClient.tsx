"use client";

import { useState } from "react";
import type { Work, History, Skill, Contact } from "../types/api";
import Container from "../components/layout/Container";
import Intro from "../components/intro";
import Works from "../components/work";
import Histories from "../components/history";
import Skills from "../components/skill";
import Contacts from "../components/contact";
import Footer from "../components/footer";

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
  );
}
