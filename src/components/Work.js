/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

import { mq } from '../variables'

import Link from './Link'

const Item = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 6rem;
  }

  ${mq.pc} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 14rem;
    }
  }
`

const Data = styled.div`
  ${mq.pc} {
    width: 35%;
    margin-right: auto;
  }

  .text {
    &--url {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`

const imgStyle = css`
  margin-bottom: 3rem;
  box-shadow: 0 37.125px 70px -12.125px rgba(0, 0, 0, 0.3);
  transition:
    box-shadow 0.5s,
    opacity 1s;

  &.is-active {
    opacity: 1;
  }

  ${mq.pc} {
    width: 60%;
    margin-bottom: 0;

    &:hover {
      box-shadow: 0 60px 100px -12px rgba(0, 0, 0, 0.3);
    }
  }
`
export default ({ item }) => {
  const { title, age, url, text, image } = item

  return (
    <Item>
      <Data>
        <h3 className="text">
          <span className="text__content">title: {title}</span>
        </h3>
        <p className="text">
          <span className="text__content">year: {age}</span>
        </p>
        <p className="text text--url">
          <span className="text__content text__content--url">
            url:&nbsp;
            <Link url={url}>{url}</Link>
          </span>
        </p>
        <p className="text jp">
          <span className="text__content">{text}</span>
        </p>
      </Data>
      <img src={image} alt={title} css={imgStyle} />
    </Item>
  )
}
