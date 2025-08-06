/** @jsxImportSource @emotion/react */

import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import Typist from "react-typist-component";

import { mq } from "../variables";

const wrapperStyle = css`
  text-align: center;
`;

const Title = styled.h2`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: normal;
  letter-spacing: 0.2em;
`;

const Sub = styled.span`
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.6;
  ${mq.pc} {
    font-size: 1.2rem;
  }
`;

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
      className={wrapperStyle}
      onChange={(inview, entry) => (inview ? setView(true) : false)}
    >
      {inview && (
        <Typist startDelay={500} typingDelay={35} onTypingDone={onTypingDone}>
          <Title>{title}</Title>
          <Typist.Delay ms={350} />
          <br />
          <Sub>{subTitle}</Sub>
        </Typist>
      )}
    </InView>
  );
};

export default Hgroup;
