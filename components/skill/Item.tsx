import styled from "@emotion/styled";
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

const SkillItem = styled.li<{ startAnimation: boolean }>`
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

const TooltipContent = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  max-width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
`;

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
      <SkillItem
        ref={refs.setReference}
        startAnimation={startAnimation}
        {...getReferenceProps()}
      >
        {title}
      </SkillItem>
      {isOpen && (
        <FloatingPortal>
          <TooltipContent
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {body}
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill="rgba(0, 0, 0, 0.9)"
            />
          </TooltipContent>
        </FloatingPortal>
      )}
    </>
  );
};

export default Item;
