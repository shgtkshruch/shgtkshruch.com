import { css } from "../../styled-system/css";

const footerStyles = css({
  paddingBottom: "1rem",
  textAlign: "center",
});

const smallStyles = css({
  fontSize: "0.6rem",
  pc: {
    fontSize: "0.8rem",
  },
});

const Index: React.FC = () => (
  <footer className={footerStyles}>
    <small className={smallStyles}>
      Copyright © 2017-2025 shigetaka shirouchi All Rights Reserved.
    </small>
  </footer>
);

export default Index;
