import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { Work } from "../../types/api";
import Section from "../common/Section";
import Heading from "../islands/Hgroup";
import Item from "./Item";

const Works: React.FC<{ next: () => void; items: Work[] }> = ({
  next,
  items,
}) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true);
    next();
  }

  return (
    <Section className="work">
      <Heading
        title="work"
        subTitle="Writing code wherever, from companies to open source."
        onTypingDone={onTypingDone}
      />
      <div
        className={css({
          paddingTop: "4rem",
          pc: {
            paddingTop: "14rem",
          },
        })}
      >
        {items.map((item) => (
          <Item key={item.id} item={item} isTypingDone={isTypingDone} />
        ))}
      </div>
    </Section>
  );
};

export default Works;
