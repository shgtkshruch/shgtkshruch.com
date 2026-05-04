import Typist from "react-typist-component";
import { css } from "../../../styled-system/css";
import { useInView } from "../../hooks/useInView";

type HgroupProps = {
  title: string;
  subTitle: string;
  onTypingDone?: () => void;
  intersectionOptions?: IntersectionObserverInit;
};

const Hgroup: React.FC<HgroupProps> = ({ title, subTitle, onTypingDone, intersectionOptions }) => {
  const { ref, inView } = useInView<HTMLElement>(intersectionOptions);

  return (
    <hgroup
      ref={ref}
      className={css({
        textAlign: "center",
      })}
    >
      {inView && (
        <Typist startDelay={500} typingDelay={30} onTypingDone={onTypingDone}>
          <h2
            className={css({
              display: "inline-block",
              marginBottom: "1rem",
              fontSize: "2rem",
              lineHeight: "1.4",
              fontWeight: "normal",
              letterSpacing: "0.1em",
            })}
          >
            {title}
          </h2>
          <Typist.Delay ms={350} />
          <br />
          <span
            className={css({
              fontSize: "1rem",
              letterSpacing: "0.1em",
              lineHeight: "1.6",
              pc: {
                fontSize: "1.2rem",
              },
            })}
          >
            {subTitle}
          </span>
        </Typist>
      )}
    </hgroup>
  );
};

export default Hgroup;
