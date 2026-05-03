import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";

type TextProps = {
  className?: string;
  onAnimationEnd?: () => void;
  children: ReactNode;
};

const textCoverDelay = 0.1;
const animationDuration = 0.9;

const TextComponent: React.FC<TextProps> = ({
  className,
  onAnimationEnd,
  children,
}) => (
  <div
    className={`${css({
      display: "inline-block",
      position: "relative",
      "&:not(:last-child)": {
        marginBottom: "0.7rem",
      },
      _before: {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        animation: `fadeOut ${animationDuration}s calc(${textCoverDelay}s + sibling-index() * 0.08s) both ease-in-out`,
        zIndex: 1,
      },
    })} ${className || ""}`}
    onAnimationEnd={onAnimationEnd}
  >
    <span
      className={css({
        opacity: 0,
        animation: `show 0.1s ${animationDuration}s forwards`,
      })}
    >
      {children}
    </span>
  </div>
);

export default TextComponent;
