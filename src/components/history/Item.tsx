import { Fragment, useState } from "react";
import { css } from "../../../styled-system/css";
import { useSiblingIndex } from "../../hooks/useSiblingIndex";
import type { History } from "../../types/api";
import Link from "../common/Link";
import Text from "../common/Text";

const keyframesStyle = `
@keyframes fadeInUp {
  0% {
    opacity: 0;
    pointer-events: none;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
}
`;

const lineKeyframesStyle = `
@keyframes line {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
`;

const itemStyles = (typingDone: boolean) =>
  css({
    position: "relative",
    paddingLeft: "1rem",
    opacity: 0,
    "&:not(:last-child)": {
      marginBottom: "5rem",
    },
    ...(typingDone && {
      animationName: "fadeInUp",
      animationDuration: "0.5s",
      animationDelay: "calc(800ms + var(--sibling-index, sibling-index()) * 50ms)",
      animationFillMode: "forwards",
      animationTimingFunction: "ease-in-out",
    }),
  });

const headerStyles = css({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "5rem 1fr",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "-1rem",
    transform: "translate(-50%, -50%)",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
});

const nameStyles = (isShow: boolean) =>
  css({
    width: "fit-content",
    lineHeight: 1.2,
    letterSpacing: "0.05em",
    fontSize: "1.2rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    color: "currentColor",
    fontFamily: "inherit",
    outline: "none",
    "&::before": {
      left: "-7.5%",
      transform: "skew(-25deg)",
      ...(isShow && {
        width: "115%",
      }),
    },
    "&:hover::before": {
      width: "115% !important",
    },
    ...(isShow && {
      color: "var(--bg-color)",
    }),
  });

const textWrapperStyles = (isSelected: boolean) =>
  css({
    display: isSelected ? "block" : "none",
    marginTop: "1.6em",
    letterSpacing: "0.02em",
    lineHeight: 1.8,
    pc: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "62%",
      paddingLeft: "1rem",
      marginTop: 0,
      zIndex: 1,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "1px",
      height: 0,
      backgroundColor: "var(--primary-color)",
      animation: "line 0.3s 1s forwards",
    },
  });

const moreButtonStyles = css({
  display: "inline-block",
  verticalAlign: "middle",
  border: "1px solid currentColor",
  textDecoration: "none",
  padding: "0.4rem 1.4rem",
  lineHeight: 1,
  letterSpacing: "0.06em",
});

type ItemPComponentProps = {
  item: History;
  startAnimation: boolean;
  isSelected: boolean;
  onAnimationEnd: () => void;
  updateCurrentIndex: () => void;
};

const ItemComponent: React.FC<ItemPComponentProps> = ({
  item,
  startAnimation,
  isSelected,
  onAnimationEnd,
  updateCurrentIndex,
}) => {
  const { age, title, body, url } = item;
  const [animationKey, setAnimationKey] = useState(0);

  const triggerAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const ref = useSiblingIndex<HTMLLIElement>();

  return (
    <>
      <style>{keyframesStyle}</style>
      <style>{lineKeyframesStyle}</style>
      <li ref={ref} className={itemStyles(startAnimation)} onAnimationEnd={onAnimationEnd}>
        <div className={headerStyles}>
          <span>{age}</span>
          <Link
            type="button"
            className={nameStyles(isSelected)}
            onClick={() => {
              updateCurrentIndex();
              triggerAnimation();
            }}
            onFocus={updateCurrentIndex}
          >
            {title}
          </Link>
        </div>
        <div key={animationKey} className={`jp ${textWrapperStyles(isSelected)}`}>
          {body.split("\n").map((t, i, arr) => (
            <Fragment key={`${title}-${t.slice(0, 20)}`}>
              <Text className="jp">{t}</Text>
              {i < arr.length - 1 && <br />}
            </Fragment>
          ))}
          <br />
          <Text
            className={css({
              display: "inline-block",
              marginBlock: "0.4rem",
            })}
          >
            <Link className={moreButtonStyles} href={url} target="_blank" rel="noopener noreferrer">
              more
            </Link>
          </Text>
        </div>
      </li>
    </>
  );
};

export default ItemComponent;
