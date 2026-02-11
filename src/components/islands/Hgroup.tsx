import { useState } from "react";
import { InView } from "react-intersection-observer";
import Typist from "react-typist-component";
import { css } from "../../../styled-system/css";

type HgroupProps = {
  title: string;
  subTitle: string;
  onTypingDone: () => void;
};

const Hgroup: React.FC<HgroupProps> = ({ title, subTitle, onTypingDone }) => {
  const [inview, setView] = useState(false);

  return (
    <InView
      as="hgroup"
      className={css({
        textAlign: "center",
      })}
      onChange={(inview, _entry) => (inview ? setView(true) : false)}
    >
      {inview && (
        <Typist startDelay={500} typingDelay={35} onTypingDone={onTypingDone}>
          <h2
            className={css({
              display: "inline-block",
              marginBottom: "1rem",
              fontSize: "2rem",
              lineHeight: "1.4",
              fontWeight: "normal",
              letterSpacing: "0.2em",
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
    </InView>
  );
};

export default Hgroup;
