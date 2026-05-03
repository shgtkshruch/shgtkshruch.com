import { useState } from "react";
import type { Contact, History, Skill, Work } from "../../types/api";
import Contacts from "../contact";
import Histories from "../history";
import Intro from "../intro";
import Skills from "../skill";
import Works from "../work";

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
    <main>
      <Intro next={next} />
      {index > 0 && <Works items={works} />}
      {index > 0 && <Histories items={history} />}
      {index > 0 && <Skills items={skills} />}
      {index > 0 && <Contacts items={contacts} />}
    </main>
  );
}
