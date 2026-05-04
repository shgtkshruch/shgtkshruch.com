import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { useSiblingIndex } from "../../hooks/useSiblingIndex";

type TextProps = {
  className?: string;
  onAnimationEnd?: () => void;
  children: ReactNode;
};

const TextComponent: React.FC<TextProps> = ({
  className,
  onAnimationEnd,
  children,
}) => {
  const ref = useSiblingIndex<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${css({
        display: "inline",
        paddingBlock: "0.15em",
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundRepeat: "no-repeat",
        boxDecorationBreak: "clone",
        animationName: "fadeOut",
        animationDuration: "0.9s",
        animationDelay:
          "calc(0.1s + var(--sibling-index, sibling-index()) * 0.08s)",
        animationFillMode: "both",
        animationTimingFunction: "ease-in-out",
      })} ${className || ""}`}
      onAnimationEnd={onAnimationEnd}
    >
      <span
        className={css({
          opacity: 0,
          animationName: "show",
          animationDuration: "0.1s",
          animationDelay: "1s",
          animationFillMode: "forwards",
        })}
      >
        {children}
      </span>
    </div>
  );
};

export default TextComponent;
