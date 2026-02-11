import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { Skill } from "../../types/api";
import Heading from "../islands/Hgroup";
import Section from "../common/Section";
import Item from "./Item";

const listStyles = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "55rem",
  margin: "3rem auto -1.6rem",
  pc: {
    marginTop: "5rem",
  },
});

const Skills: React.FC<{ next: () => void; items: Skill[] }> = ({
  next,
  items,
}) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true);
    next();
  }

  return (
    <Section>
      <Heading
        title="skill"
        subTitle="Adopt the latest tools and methodology."
        onTypingDone={onTypingDone}
      />
      <ul className={listStyles}>
        {items.map((item) => (
          <Item key={item.id} item={item} startAnimation={isTypingDone} />
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
