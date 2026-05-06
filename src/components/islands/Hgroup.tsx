import { useEffect, useState } from "react";
import Typist from "react-typist-component";
import { css } from "../../../styled-system/css";
import { useInView } from "../../hooks/useInView";

type HgroupProps = {
  title: string;
  subTitle: string;
  level?: 1 | 2;
  startDelay?: number;
  onTypingDone?: () => void;
  intersectionOptions?: IntersectionObserverInit;
};

const headingStyles = css({
  display: "inline-block",
  marginBottom: "1rem",
  fontSize: "2rem",
  lineHeight: "1.4",
  fontWeight: "normal",
  letterSpacing: "0.1em",
});

const subTitleStyles = css({
  fontSize: "1rem",
  letterSpacing: "0.1em",
  lineHeight: "1.6",
  pc: {
    fontSize: "1.2rem",
  },
});

const Hgroup: React.FC<HgroupProps> = ({
  title,
  subTitle,
  level = 2,
  startDelay = 500,
  onTypingDone,
  intersectionOptions,
}) => {
  const { ref, inView } = useInView<HTMLElement>(intersectionOptions);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const Heading = `h${level}` as "h1" | "h2";

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion && inView) {
      onTypingDone?.();
    }
  }, [prefersReducedMotion, inView, onTypingDone]);

  return (
    <hgroup
      ref={ref}
      className={css({
        textAlign: "center",
      })}
    >
      {inView &&
        (prefersReducedMotion ? (
          <>
            <Heading className={headingStyles}>{title}</Heading>
            <br />
            <span className={subTitleStyles}>{subTitle}</span>
          </>
        ) : (
          <Typist startDelay={startDelay} typingDelay={25} onTypingDone={onTypingDone}>
            <Heading className={headingStyles}>{title}</Heading>
            <Typist.Delay ms={350} />
            <br />
            <span className={subTitleStyles}>{subTitle}</span>
          </Typist>
        ))}
    </hgroup>
  );
};

export default Hgroup;
