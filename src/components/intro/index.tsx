import { useState } from "react";
import { css } from "../../../styled-system/css";
import { INTRO } from "../../lib/sectionText";

import Hgroup from "../islands/Hgroup";
import Mouse from "./Mouse";

const sectionStyles = css({
  position: "relative",
  height: "100svh",
});

const wrapperStyles = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
});

const mouseWrapperStyles = (isMouseShow: boolean) =>
  css({
    position: "absolute",
    bottom: "3rem",
    left: "50%",
    transform: "translate(-50%, 0)",
    opacity: isMouseShow ? 1 : 0,
    transition: "opacity 0.7s ease-in",
  });

const scrollTextStyles = css({
  position: "absolute",
  bottom: "3rem",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "1rem",
  letterSpacing: "0.2em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
});

const arrowStyles = css({
  display: "block",
  width: "0.5em",
  height: "0.5em",
  borderRight: "1px solid currentColor",
  borderBottom: "1px solid currentColor",
  transform: "rotate(45deg)",
});

const Index: React.FC<{ next: () => void }> = ({ next }) => {
  const [isMouseShow, setIsMouseShow] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onTypingDone() {
    setIsMouseShow(true);
    next();
    window.addEventListener("scroll", () => setIsMouseShow(false));
  }

  return (
    <section className={sectionStyles}>
      <div className={wrapperStyles}>
        <Hgroup
          title={INTRO.title}
          subTitle={INTRO.subTitle}
          level={1}
          startDelay={0}
          onTypingDone={onTypingDone}
          intersectionOptions={{ rootMargin: "0px 0px 0px 0px" }}
        />
      </div>
      {prefersReducedMotion ? (
        <span className={scrollTextStyles}>
          scroll
          <span className={arrowStyles} />
        </span>
      ) : (
        <div className={mouseWrapperStyles(isMouseShow)}>
          <Mouse />
        </div>
      )}
    </section>
  );
};

export default Index;
