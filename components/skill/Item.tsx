import {
  arrow,
  autoUpdate,
  FloatingArrow,
  FloatingPortal,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useRef, useState } from "react";
import { css } from "../../styled-system/css";

import type { Skill } from "../../types/api";

const keyframesStyle = `
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

const skillItemStyles = (startAnimation: boolean) =>
  css({
    position: "relative",
    marginRight: "1rem",
    marginBottom: "0.4rem",
    letterSpacing: "0.1em",
    opacity: 0,
    fontSize: "1.1rem",
    pointerEvents: "none",
    ...(startAnimation && {
      transition: "color 0.3s",
      "&:nth-of-type(1)": { animation: "fadeIn 0.8s 0.05s forwards" },
      "&:nth-of-type(2)": { animation: "fadeIn 0.8s 0.1s forwards" },
      "&:nth-of-type(3)": { animation: "fadeIn 0.8s 0.15s forwards" },
      "&:nth-of-type(4)": { animation: "fadeIn 0.8s 0.2s forwards" },
      "&:nth-of-type(5)": { animation: "fadeIn 0.8s 0.25s forwards" },
      "&:nth-of-type(6)": { animation: "fadeIn 0.8s 0.3s forwards" },
      "&:nth-of-type(7)": { animation: "fadeIn 0.8s 0.35s forwards" },
      "&:nth-of-type(8)": { animation: "fadeIn 0.8s 0.4s forwards" },
      "&:nth-of-type(9)": { animation: "fadeIn 0.8s 0.45s forwards" },
      "&:nth-of-type(10)": { animation: "fadeIn 0.8s 0.5s forwards" },
      "&:nth-of-type(11)": { animation: "fadeIn 0.8s 0.55s forwards" },
      "&:nth-of-type(12)": { animation: "fadeIn 0.8s 0.6s forwards" },
      "&:nth-of-type(13)": { animation: "fadeIn 0.8s 0.65s forwards" },
      "&:nth-of-type(14)": { animation: "fadeIn 0.8s 0.7s forwards" },
      "&:nth-of-type(15)": { animation: "fadeIn 0.8s 0.75s forwards" },
      "&:nth-of-type(16)": { animation: "fadeIn 0.8s 0.8s forwards" },
      "&:nth-of-type(17)": { animation: "fadeIn 0.8s 0.85s forwards" },
      "&:nth-of-type(18)": { animation: "fadeIn 0.8s 0.9s forwards" },
      "&:nth-of-type(19)": { animation: "fadeIn 0.8s 0.95s forwards" },
      "&:nth-of-type(20)": { animation: "fadeIn 0.8s 1s forwards" },
      "&:nth-of-type(21)": { animation: "fadeIn 0.8s 1.05s forwards" },
      "&:nth-of-type(22)": { animation: "fadeIn 0.8s 1.1s forwards" },
      "&:nth-of-type(23)": { animation: "fadeIn 0.8s 1.15s forwards" },
      "&:nth-of-type(24)": { animation: "fadeIn 0.8s 1.2s forwards" },
      "&:nth-of-type(25)": { animation: "fadeIn 0.8s 1.25s forwards" },
      "&:nth-of-type(26)": { animation: "fadeIn 0.8s 1.3s forwards" },
      "&:nth-of-type(27)": { animation: "fadeIn 0.8s 1.35s forwards" },
      "&:nth-of-type(28)": { animation: "fadeIn 0.8s 1.4s forwards" },
      "&:nth-of-type(29)": { animation: "fadeIn 0.8s 1.45s forwards" },
      "&:nth-of-type(30)": { animation: "fadeIn 0.8s 1.5s forwards" },
    }),
    "&::after": {
      content: '"/"',
      position: "absolute",
      top: 0,
      left: "100%",
      color: "var(--primary-color)",
    },
    pc: {
      marginBottom: "1.6rem",
      fontSize: "1.2rem",
      _hover: {
        color: "var(--accent-color)",
      },
    },
  });

const tooltipContentStyles = css({
  background: "rgba(0, 0, 0, 0.9)",
  color: "white",
  padding: "8px 12px",
  borderRadius: "4px",
  fontSize: "0.875rem",
  maxWidth: "300px",
  zIndex: 1000,
  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
});

const Item: React.FC<{ item: Skill; startAnimation: boolean }> = ({
  item,
  startAnimation,
}) => {
  const { title, body } = item;
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(5), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <style>{keyframesStyle}</style>
      <li
        ref={refs.setReference}
        className={skillItemStyles(startAnimation)}
        {...getReferenceProps()}
      >
        {title}
      </li>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={tooltipContentStyles}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {body}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill="rgba(0, 0, 0, 0.9)"
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Item;
