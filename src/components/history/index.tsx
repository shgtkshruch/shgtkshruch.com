import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { History } from "../../types/api";
import Section from "../common/Section";
import Heading from "../islands/Hgroup";
import { breakpoints } from "../variables";
import Item from "./Item";

const listStyles = (startAnimation: boolean) =>
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
      height: startAnimation ? "100%" : 0,
      backgroundColor: "currentColor",
      transition: "height 0.8s ease-in-out",
    },
  });

const sectionStyles = css({
  maxWidth: "57rem",
  margin: "0 auto",
  textAlign: "center",
});

const Histories: React.FC<{ items: History[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isTypingDone, setIsTypingDone] = useState(false);

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

  return (
    <Section className={sectionStyles}>
      <Heading
        title="history"
        subTitle="Self-taught engineer, turning curiosity into craft."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <ul className={listStyles(isTypingDone)}>
        {items.map((item, i) => (
          <Item
            key={item.id}
            item={item}
            isSelected={isSelected(i)}
            startAnimation={isTypingDone}
            onAnimationEnd={() =>
              i === items.length - 1 && currentIndex === -1 ? setCurrentIndex(0) : false
            }
            updateCurrentIndex={() => updateCurrentIndex(i)}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Histories;
