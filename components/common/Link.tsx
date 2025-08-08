import { css } from "../../styled-system/css";

const LinkComponent: React.FC<React.ComponentPropsWithoutRef<"a">> = ({
  children,
  className,
  ...props
}) => (
  <a
    {...props}
    className={`${css({
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
    })} ${className || ""}`}
  >
    {children}
  </a>
);

export default LinkComponent;
