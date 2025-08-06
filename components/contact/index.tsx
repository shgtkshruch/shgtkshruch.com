import styled from "@emotion/styled";
import { useState } from "react";

import type { Contact } from "../../types/api";
import Heading from "../common/Hgroup";
import Section from "../common/Section";
import { mq } from "../variables";
import Item from "./Item";

const List = styled.ul`
  display: flex;
  max-width: 22rem;
  margin: 4rem auto 0;
  justify-content: space-between;
  ${mq.pc} {
    margin-top: 6rem;
  }
`;

const Contacts: React.FC<{ items: Contact[] }> = ({ items }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <Section id="contact">
      <Heading
        title="contact"
        subTitle="Please feel free to contact me."
        onTypingDone={() => setIsTypingDone(true)}
      />
      <List>
        {items.map((item) => (
          <Item key={item.id} item={item} isShow={isTypingDone} />
        ))}
      </List>
    </Section>
  );
};

export default Contacts;
