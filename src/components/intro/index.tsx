import { useState } from "react";
import { css } from "../../../styled-system/css";

import Hgroup from "../islands/Hgroup";
import Mouse from "./Mouse";

const sectionStyles = css({
  position: "relative",
  height: "100vh",
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

const Index: React.FC<{ next: () => void }> = ({ next }) => {
  const [isMouseShow, setIsMouseShow] = useState(false);

  function onTypingDone() {
    setIsMouseShow(true);
    next();
    window.addEventListener("scroll", () => setIsMouseShow(false));
  }

  return (
    <section className={sectionStyles}>
      <div className={wrapperStyles}>
        <Hgroup
          title="Shigetaka Shirouchi"
          subTitle="I'm a Front-End Engineer."
          onTypingDone={onTypingDone}
        />
      </div>
      <div className={mouseWrapperStyles(isMouseShow)}>
        <Mouse />
      </div>
    </section>
  );
};

export default Index;
