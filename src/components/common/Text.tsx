import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";

type TextProps = {
  className?: string;
  onAnimationEnd?: () => void;
  children: ReactNode;
};

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
        animationName: "fadeOut",
        animationDuration: "0.9s",
        animationDelay: "calc(0.1s + sibling-index() * 0.08s)",
        animationFillMode: "both",
        animationTimingFunction: "ease-in-out",
        zIndex: 1,
      },
    })} ${className || ""}`}
    onAnimationEnd={onAnimationEnd}
  >
    <span
      className={css({
        opacity: 0,
        animation: `show 0.1s 0.9s forwards`,
      })}
    >
      {children}
    </span>
  </div>
);

export default TextComponent;
