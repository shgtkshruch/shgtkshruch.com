import { ReactNode } from "react"
import styled from "@emotion/styled"

import { mq } from "../variables"

const Section = styled.section`
  padding: 3rem 0;
  ${mq.pc} {
    padding: 9rem 0;
  }
  &:first-of-type {
    padding-top: 0;
  }
`;

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

const SectionComponent = ({ id, className, children }: SectionProps) => <Section id={id} className={className}>
  {children}
</Section>;

export default SectionComponent;
