import React from "react";
import styled from "@emotion/styled";

import { mq } from "../variables";

const Link = styled.a`
  position: relative;
  padding: 0.3rem 0.5rem;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  ${mq.pc} {
    &:hover {
      color: var(--bg-color);
      text-decoration: none;

      &::before {
        width: 100%;
      }
    }
  }
`;

export default ({ children, ...props }) => <Link {...props}>{children}</Link>;
