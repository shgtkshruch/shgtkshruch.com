import { lazy, Suspense, useState } from "react";
import type { Contact, History, Skill, Work } from "../../types/api";
import Intro from "../intro";

const Works = lazy(() => import("../work"));
const Histories = lazy(() => import("../history"));
const Skills = lazy(() => import("../skill"));
const Contacts = lazy(() => import("../contact"));

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
      {index > 0 && (
        <Suspense>
          <Works items={works} />
          <Histories items={history} />
          <Skills items={skills} />
          <Contacts items={contacts} />
        </Suspense>
      )}
    </main>
  );
}
