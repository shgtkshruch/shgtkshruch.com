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
      {index > 0 && <Works next={next} items={works} />}
      {index > 1 && <Histories next={next} items={history} />}
      {index > 2 && <Skills next={next} items={skills} />}
      {index > 3 && <Contacts items={contacts} />}
    </main>
  );
}
