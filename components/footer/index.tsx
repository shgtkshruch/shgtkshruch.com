import styled from "@emotion/styled";
import { mq } from "../variables";

const Footer = styled.footer`
  padding-bottom: 1rem;
  text-align: center;
}
`;

const Small = styled.small`
  font-size: 0.6rem;
  ${mq.pc} {
    font-size: 0.8rem;
  }
`;

const Index: React.FC = () => (
  <Footer>
    <Small>
      Copyright © 2017-2025 shigetaka shirouchi All Rights Reserved.
    </Small>
  </Footer>
);

export default Index;
