import { useState } from "react";
import { css } from "../../../styled-system/css";
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
      "&:nth-of-type(1)": {
        animation: "fadeInUp 0.8s 0.9s forwards ease-in-out",
      },
      "&:nth-of-type(2)": {
        animation: "fadeInUp 0.8s 1.02s forwards ease-in-out",
      },
      "&:nth-of-type(3)": {
        animation: "fadeInUp 0.8s 1.14s forwards ease-in-out",
      },
      "&:nth-of-type(4)": {
        animation: "fadeInUp 0.8s 1.26s forwards ease-in-out",
      },
      "&:nth-of-type(5)": {
        animation: "fadeInUp 0.8s 1.38s forwards ease-in-out",
      },
      "&:nth-of-type(6)": {
        animation: "fadeInUp 0.8s 1.5s forwards ease-in-out",
      },
      "&:nth-of-type(7)": {
        animation: "fadeInUp 0.8s 1.62s forwards ease-in-out",
      },
    }),
  });

const headerStyles = css({
  position: "relative",
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
    marginLeft: "1.3rem",
    letterSpacing: "0.05em",
    fontSize: "1.2rem",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    color: "currentColor",
    fontFamily: "inherit",
    outline: "none",
    "&::before": {
      left: "-5%",
      transform: "skew(-25deg)",
      ...(isShow && {
        width: "110%",
      }),
    },
    "&:hover::before": {
      width: "110% !important",
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
  border: "1px solid currentColor",
  textDecoration: "none",
  padding: "0.5rem 1.4rem",
  lineHeight: 1,
  letterSpacing: "0.06em",
});

type ItemPComponentProps = {
  item: History;
  typingDone: boolean;
  isSelected: boolean;
  onAnimationEnd: () => void;
  updateCurrentIndex: () => void;
};

const ItemComponent: React.FC<ItemPComponentProps> = ({
  item,
  typingDone,
  isSelected,
  onAnimationEnd,
  updateCurrentIndex,
}) => {
  const { age, title, body, url } = item;
  const [animationKey, setAnimationKey] = useState(0);

  const triggerAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <>
      <style>{keyframesStyle}</style>
      <style>{lineKeyframesStyle}</style>
      <li className={itemStyles(typingDone)} onAnimationEnd={onAnimationEnd}>
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
        <div
          key={animationKey}
          className={`jp ${textWrapperStyles(isSelected)}`}
        >
          {body.split("\n").map((t) => (
            <Text key={`${title}-${t.slice(0, 20)}`}>{t}</Text>
          ))}
          <br />
          <Text>
            <Link
              className={moreButtonStyles}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              more
            </Link>
          </Text>
        </div>
      </li>
    </>
  );
};

export default ItemComponent;
