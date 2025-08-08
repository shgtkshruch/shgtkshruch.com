import { css } from "../../styled-system/css";

const ContainerComponent = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      maxWidth: "48rem",
      marginLeft: "auto",
      marginRight: "auto",
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
      pc: {
        maxWidth: "98rem",
        paddingRight: "4rem",
        paddingLeft: "4rem",
      },
    })}
  >
    {children}
  </div>
);

export default ContainerComponent;
