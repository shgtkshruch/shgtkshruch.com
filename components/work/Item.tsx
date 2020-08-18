/** @jsx jsx */
import { useState } from 'react'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { InView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'

import { mq } from '../variables'
const Text = dynamic(() => import('../common/Text'))
const Link = dynamic(() => import('../common/Link'))

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
`

type DataProps = {
  isShow: boolean
  textAnimationDone: boolean
}

const Data = styled.div<DataProps>`
  display: ${props => props.isShow ? 'block' : 'none'};
  pointer-events: ${props => props.textAnimationDone ? 'auto' : 'none'};
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

type AProps = DataProps

const A = styled.a<AProps>`
  margin-bottom: 3rem;
  opacity: ${props => props.isShow ? 1 : 0};
  pointer-events: ${props => props.textAnimationDone ? 'auto' : 'none'};
  box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s, opacity 1s;
  ${mq.pc} {
    width: 55%;
    margin-bottom: 0;
    &:hover {
      box-shadow: 0 60px 100px -12px rgba(0, 0, 0, 0.3);
    }
  }
`

export default ({ isTypingDone, item }) => {
  const { title, age, url, body, image } = item

  const [inview, setView] = useState(false);
  const [textAnimationDone, setTextAnimationDone] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inview, entry) => inview ? setView(true) : false}
      css={itemStyle}
    >
      <Data isShow={isTypingDone && inview} textAnimationDone={textAnimationDone}>
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
        <Text className="jp" onAnimationEnd={() => setTextAnimationDone(true)}>{body}</Text>
      </Data>
      <A
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        isShow={isTypingDone && inview}
        textAnimationDone={textAnimationDone}
      >
        <img src={image.url} alt={title} />
      </A>
    </InView>
  )
}
