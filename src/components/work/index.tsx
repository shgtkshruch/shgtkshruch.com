import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { Work } from "../../types/api";
import Section from "../common/Section";
import Heading from "../islands/Hgroup";
import Item from "./Item";

const Works: React.FC<{ items: Work[] }> = ({ items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section className="work">
      <Heading
        title="work"
        subTitle="Writing code wherever, from companies to open source."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <div
        inert={!isTypingDone || undefined}
        className={css({
          paddingTop: "4rem",
          pc: {
            paddingTop: "14rem",
          },
          opacity: isTypingDone ? 1 : 0,
          visibility: isTypingDone ? "visible" : "hidden",
          transition: "opacity 0.6s ease",
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
