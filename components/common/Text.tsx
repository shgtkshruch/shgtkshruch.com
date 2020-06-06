import { ReactNode} from "react"
import styled from "@emotion/styled"

const nthChildAnimation = Array.from("_".repeat(7)).reduce((res, _, i) => {
  const delay = 0.15 * (i + 1);
  res += `
    &:nth-of-type(${i + 1})::before {
      animation: fadeOut 0.9s ${delay}s both ease-in-out;
    }
  `;
  return res
}, "")

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 0.7rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    animation: fadeOut 0.9s 0.15s both ease-in-out;
    z-index: 1;
  }
  ${nthChildAnimation}
  @keyframes fadeOut {
    0% {
      transform: scale(0, 1);
      transform-origin: left top;
    }
    30% {
      transform: scale(1, 1);
      transform-origin: left top;
    }
    70% {
      transform: scale(1, 1);
      transform-origin: right top;
    }
    100% {
      transform: scale(0, 1);
      transform-origin: right top;
    }
  }
`;

const Content = styled.span`
  opacity: 0;
  animation: show 0.1s 0.9s forwards;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

type Text = {
  className?: string
  onAnimationEnd?: () => void
  children: ReactNode
}

export default ({ className, onAnimationEnd, children }: Text) => (
  <Wrapper className={className} onAnimationEnd={onAnimationEnd}>
    <Content>{children}</Content>
  </Wrapper>
)
