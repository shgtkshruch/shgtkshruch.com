import { css } from "../../../styled-system/css";

type Props =
  | ({ type?: never } & React.ComponentPropsWithoutRef<"a">)
  | ({ type: "button" } & React.ComponentPropsWithoutRef<"button">);

const sharedClassName = (className?: string) =>
  `${css({
    position: "relative",
    padding: "0.3rem 0.5rem",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: "100%",
      backgroundColor: "var(--primary-color)",
      transition: "width 0.3s ease-in-out",
      zIndex: -1,
    },
    pc: {
      _hover: {
        color: "var(--bg-color)",
        textDecoration: "none",
        _before: {
          width: "100%",
        },
      },
    },
  })} ${className || ""}`;

const LinkComponent: React.FC<Props> = ({ children, className, type, ...props }) => {
  if (type === "button") {
    return (
      <button
        type="button"
        {...(props as React.ComponentPropsWithoutRef<"button">)}
        className={sharedClassName(className)}
      >
        {children}
      </button>
    );
  }

  return (
    <a {...(props as React.ComponentPropsWithoutRef<"a">)} className={sharedClassName(className)}>
      {children}
    </a>
  );
};

export default LinkComponent;
