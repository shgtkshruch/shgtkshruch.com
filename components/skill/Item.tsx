import styled from "@emotion/styled";
import Tippy from "@tippy.js/react";

import type { Skill } from "../../types/api";
import { mq } from "../variables";

const nthChildAnimation = Array.from("_".repeat(30)).reduce((res, _, i) => {
  const delay = 0.05 * (i + 1);
  res += `
    &:nth-of-type(${i + 1}) {
      transition: color 0.3s;
      animation: fadeIn 0.8s ${delay}s forwards;
    }
  `;
  return res;
}, "");

const SkillItem = styled.li<{startAnimation: boolean}>`
  position: relative;
  margin-right: 1rem;
  margin-bottom: 0.4rem;
  letter-spacing: 0.1em;
  opacity: 0;
  font-size: 1.1rem;
  pointer-events: none;
  ${(props) => (props.startAnimation ? nthChildAnimation : "")}
  &::after {
    content: "/";
    position: absolute;
    top: 0;
    left: 100%;
    color: var(--primary-color);
  }
  ${mq.pc} {
    margin-bottom: 1.6rem;
    font-size: 1.2rem;
    &:hover {
      color: var(--accent-color);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const Item: React.FC<{ item: Skill; startAnimation: boolean }> = ({
  item,
  startAnimation,
}) => {
  const { title, body } = item;

  return (
    <Tippy content={body} animation="shift-toward-subtle" theme="material">
      <SkillItem startAnimation={startAnimation}>{title}</SkillItem>
    </Tippy>
  );
};

export default Item;
