import styled from "@emotion/styled"

import { mq } from "../variables"

const Container = styled.div`
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  ${mq.pc} {
    max-width: 98rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

const ContainerComponent = ({ children }) => <Container>{children}</Container>;

export default ContainerComponent;
