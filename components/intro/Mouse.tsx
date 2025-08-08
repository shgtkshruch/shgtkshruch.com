import { css } from "../../styled-system/css";

const keyframesStyle = `
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes mouse-wheel {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(0.375em);
  }
}
`;

const scrollStyles = css({
  width: "1em",
  height: "3.125em",
  transform: "translateX(-50%) scale(2)",
  zIndex: 99999,
});

const arrowStyles = css({
  "& span, &::after, &::before": {
    display: "block",
    width: "0.315em",
    height: "0.315em",
    borderRight: "1px solid currentColor",
    borderBottom: "1px solid currentColor",
    margin: "0 0 0.125em 0.315em",
    transform: "rotate(45deg)",
    animation: "mouse-scroll 1s infinite",
    animationDirection: "alternate",
  },
  "&::after, &::before": {
    content: '""',
  },
  "&::before": {
    marginTop: "0.315em",
    animationDelay: "0.1s",
  },
  "&::after": {
    animationDelay: "0.3s",
  },
  "& span": {
    animationDelay: "0.2s",
  },
});

const mouseStyles = css({
  height: "1.375em",
  width: "0.875em",
  border: "1px solid currentColor",
  borderRadius: "2em",
});

const wheelStyles = css({
  height: "0.1875em",
  width: "0.1875em",
  margin: "0.1875em auto 0",
  backgroundColor: "currentColor",
  animation: "mouse-wheel 1.4s ease infinite",
  borderRadius: "50%",
});

const MouseComponent: React.FC = () => (
  <>
    <style>{keyframesStyle}</style>
    <div className={scrollStyles}>
      <div className={mouseStyles}>
        <div className={wheelStyles} />
      </div>
      <div className={arrowStyles}>
        <span></span>
      </div>
    </div>
  </>
);

export default MouseComponent;
