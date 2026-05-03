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
import { css } from "../../../styled-system/css";

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
      animationName: "fadeIn",
      animationDuration: "0.8s",
      animationDelay: "calc(sibling-index() * 0.03s)",
      animationFillMode: "forwards",
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
  padding: "0.6rem 1rem",
  borderRadius: "4px",
  fontFamily: "--fonts-japanese",
  fontSize: "0.875rem",
  letterSpacing: "0.05em",
  maxWidth: "20rem",
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
      <li className={skillItemStyles(startAnimation)}>
        <button type="button" ref={refs.setReference} {...getReferenceProps()}>
          {title}
        </button>
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
