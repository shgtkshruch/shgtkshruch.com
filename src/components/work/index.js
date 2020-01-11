/** @jsx jsx */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { InView } from 'react-intersection-observer';

import { mq } from '../../variables';
import Text from '../Text';
import Link from '../Link';

const itemStyle = css`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 6rem;
  }

  ${mq.pc} {
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row-reverse;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 14rem;
    }
  }
`;

const Data = styled.div`
  display: ${props => props.isShow ? 'block' : 'none'};

  ${mq.pc} {
    width: 37%;
  }

  .text {
    &--url {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const A = styled.a`
  margin-bottom: 3rem;
  opacity: ${props => props.isShow ? 1 : 0};
  box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s, opacity 1s;

  ${mq.pc} {
    width: 55%;
    margin-bottom: 0;

    &:hover {
      box-shadow: 0 60px 100px -12px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default ({ isTypingDone, item }) => {
  const { title, age, url, text, image } = item

  const [inview, setView] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inview, entry) => inview ? setView(true) : false}
      css={itemStyle}
    >
      <Data isShow={isTypingDone && inview}>
        <Text>title: {title}</Text>
        <br/>
        <Text>year: {age}</Text>
        <br/>
        <Text className="text--url">
          url:&nbsp;
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >{url}</Link>
        </Text>
        <br/>
        <Text className="jp">{text}</Text>
      </Data>
      <A
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        isShow={isTypingDone && inview}
      >
        <img src={image} alt={title} />
      </A>
    </InView>
  )
}
