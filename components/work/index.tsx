import { useState } from "react";
import { css } from "../../styled-system/css";

import type { Work } from "../../types/api";
import Heading from "../common/Hgroup";
import Section from "../common/Section";
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
    <Section id="work" className="work">
      <Heading
        title="work"
        subTitle="Write code anywhere in the company or OSS."
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
