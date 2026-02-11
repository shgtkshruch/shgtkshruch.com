import { useState } from "react";
import { css } from "../../../styled-system/css";

import type { Contact } from "../../types/api";
import Heading from "../islands/Hgroup";
import Section from "../common/Section";
import Item from "./Item";

const listStyles = css({
  display: "flex",
  maxWidth: "22rem",
  margin: "4rem auto 0",
  justifyContent: "space-between",
  pc: {
    marginTop: "6rem",
  },
});

const Contacts: React.FC<{ items: Contact[] }> = ({ items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section>
      <Heading
        title="contact"
        subTitle="Please feel free to contact me."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <ul className={listStyles}>
        {items.map((item) => (
          <Item key={item.id} item={item} isShow={isTypingDone} />
        ))}
      </ul>
    </Section>
  );
};

export default Contacts;
