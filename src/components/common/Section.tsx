import type { ReactNode } from "react";
import { css } from "../../../styled-system/css";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const SectionComponent: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => (
  <section
    id={id}
    className={`${css({
      padding: "3rem 0",
      pc: {
        padding: "9rem 0",
      },
      _firstOfType: {
        paddingTop: 0,
      },
    })} ${className || ""}`}
  >
    {children}
  </section>
);

export default SectionComponent;
