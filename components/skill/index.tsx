import styled from "@emotion/styled";
import { useState } from "react";

import type { Skill } from "../../types/api";
import Heading from "../common/Hgroup";
import Section from "../common/Section";
import { mq } from "../variables";
import Item from "./Item";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 55rem;
  margin: 3rem auto -1.6rem;
  ${mq.pc} {
    margin-top: 5rem;
  }
`;

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
    <Section id="skils">
      <Heading
        title="skill"
        subTitle="Adopt the latest tools and methodology."
        onTypingDone={onTypingDone}
      />
      <List>
        {items.map((item, i) => (
          <Item key={i} item={item} startAnimation={isTypingDone} />
        ))}
      </List>
    </Section>
  );
};

export default Skills;
