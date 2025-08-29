import { useState } from "react";
import { css } from "../../styled-system/css";

import type { History } from "../../types/api";
import Heading from "../common/Hgroup";
import Section from "../common/Section";
import { breakpoints } from "../variables";
import Item from "./Item";

const listStyles = (typingDone: boolean) =>
  css({
    display: "inline-block",
    textAlign: "left",
    position: "relative",
    padding: "4rem 0",
    marginTop: "2rem",
    pc: {
      display: "block",
      marginTop: "5rem",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "1px",
      height: typingDone ? "100%" : 0,
      backgroundColor: "currentColor",
      transition: "height 0.8s ease-in-out",
    },
  });

const sectionStyles = css({
  maxWidth: "55rem",
  margin: "0 auto",
  textAlign: "center",
});

const Histories: React.FC<{ next: () => void; items: History[] }> = ({
  next,
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [typingDone, setTypingDone] = useState(false);

  function updateCurrentIndex(index: number) {
    if (isPc()) setCurrentIndex(index);
  }

  function isSelected(i: number) {
    return isMobile() ? true : currentIndex === i;
  }

  function isPc() {
    return window.innerWidth >= breakpoints.pc;
  }

  function isMobile() {
    return window.innerWidth < breakpoints.pc;
  }

  function onTypingDone() {
    setTypingDone(true);
    next();
  }

  return (
    <Section className={sectionStyles}>
      <Heading
        title="history"
        subTitle="Learn WEB technology with Internet."
        onTypingDone={onTypingDone}
      />
      <ul className={listStyles(typingDone)}>
        {items.map((item, i) => (
          <Item
            key={item.id}
            item={item}
            isSelected={isSelected(i)}
            typingDone={typingDone}
            onAnimationEnd={() =>
              i === items.length - 1 && currentIndex === -1
                ? setCurrentIndex(0)
                : false
            }
            updateCurrentIndex={() => updateCurrentIndex(i)}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Histories;
