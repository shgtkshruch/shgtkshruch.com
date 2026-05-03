import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { Skill } from "../../types/api";
import Section from "../common/Section";
import Heading from "../islands/Hgroup";
import Item from "./Item";

const listBaseStyles = {
  display: "flex",
  "--skill-gap": "1rem",
  columnGap: "var(--skill-gap)",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "55rem",
  margin: "3rem auto -1.6rem",
  pc: {
    marginTop: "5rem",
    "--skill-gap": "1.6rem",
  },
} as const;

const Skills: React.FC<{ items: Skill[] }> = ({ items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section>
      <Heading
        title="skill"
        subTitle="End-to-end thinking, from browser to server."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <ul
        inert={!isTypingDone || undefined}
        className={css({
          ...listBaseStyles,
          opacity: isTypingDone ? 1 : 0,
          visibility: isTypingDone ? "visible" : "hidden",
          transition: "opacity 0.6s ease",
        })}
      >
        {items.map((item) => (
          <Item key={item.id} item={item} startAnimation={isTypingDone} />
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
