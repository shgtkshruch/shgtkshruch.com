import { useState } from "react";
import { InView } from "react-intersection-observer";
import { css } from "../../../styled-system/css";

import type { Work } from "../../types/api";
import Link from "../common/Link";
import Text from "../common/Text";

const itemStyles = css({
  display: "flex",
  flexDirection: "column-reverse",
  margin: "0 auto",
  "&:not(:last-child)": {
    marginBottom: "6rem",
  },
  pc: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    flexFlow: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    "&:not(:last-child)": {
      marginBottom: "14rem",
    },
  },
});

const dataStyles = (isShow: boolean, textAnimationDone: boolean) =>
  css({
    display: isShow ? "block" : "none",
    pointerEvents: textAnimationDone ? "auto" : "none",
    pc: {
      width: "37%",
    },
    "& .text": {
      "&--url": {
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
  });

const linkStyles = (isShow: boolean, textAnimationDone: boolean) =>
  css({
    marginBottom: "3rem",
    opacity: isShow ? 1 : 0,
    pointerEvents: textAnimationDone ? "auto" : "none",
    boxShadow: "0 37.125px 70px -12.125px rgba(0, 0, 0, 0.3)",
    transition: "box-shadow 0.5s, opacity 1s",
    pc: {
      width: "55%",
      marginBottom: 0,
      _hover: {
        boxShadow: "0 60px 100px -12px rgba(0, 0, 0, 0.3)",
      },
    },
  });

const Item: React.FC<{ isTypingDone: boolean; item: Work }> = ({
  isTypingDone,
  item,
}) => {
  const { title, titleLang, age, url, body, image } = item;

  const [inview, setView] = useState(false);
  const [textAnimationDone, setTextAnimationDone] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inview, _) => (inview ? setView(true) : false)}
      className={itemStyles}
    >
      <div className={dataStyles(isTypingDone && inview, textAnimationDone)}>
        <Text>
          title:
          <span className={titleLang}> {title}</span>
        </Text>
        <br />
        <Text>year: {age}</Text>
        <br />
        <Text className="text--url">
          url:&nbsp;
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </Link>
        </Text>
        <br />
        <Text className="jp" onAnimationEnd={() => setTextAnimationDone(true)}>
          {body}
        </Text>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyles(isTypingDone && inview, textAnimationDone)}
      >
        <picture>
          <source type="image/webp" srcSet={`${image.url}?fm=webp&w=1200`} />
          <source type="image/jpeg" srcSet={image.url} />
          <img src={image.url} alt={title} />
        </picture>
      </a>
    </InView>
  );
};

export default Item;
