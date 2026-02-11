import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";

// Generate nth-child animation styles
const generateNthChildStyles = () => {
  const styles: Record<string, { animation: string }> = {};
  for (let i = 1; i <= 7; i++) {
    const delay = 0.15 * i;
    styles[`&:nth-of-type(${i})::before`] = {
      animation: `fadeOut 0.9s ${delay}s both ease-in-out`,
    };
  }
  return styles;
};

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
        animation: "fadeOut 0.9s 0.15s both ease-in-out",
        zIndex: 1,
      },
      ...generateNthChildStyles(),
    })} ${className || ""}`}
    onAnimationEnd={onAnimationEnd}
  >
    <span
      className={css({
        opacity: 0,
        animation: "show 0.1s 0.9s forwards",
      })}
    >
      {children}
    </span>
  </div>
);

export default TextComponent;
