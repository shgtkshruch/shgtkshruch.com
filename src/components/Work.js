/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { InView } from 'react-intersection-observer'
import { mq } from '../variables'
import Text from './Text'
import Link from './Link'

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
  transition: box-shadow 0.5s, opacity 1s;
  animation: fadeIn 0.8s ease-in-out;

  ${mq.pc} {
    width: 60%;
    margin-bottom: 0;

    &:hover {
      box-shadow: 0 60px 100px -12px rgba(0, 0, 0, 0.3);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
export default class Work extends React.Component {
  constructor() {
    super();

    this.state = {
      inview: false
    };
  }

  handleInview(inview, entry) {
    if (inview) {
      this.setState({ inview: true })
    }
  }

  render() {
    const { title, age, url, text, image } = this.props.item

    return (
      <InView
        as="div"
        onChange={(inview, entry) => this.handleInview(inview, entry)}
        css={itemStyle}
      >
        {this.state.inview &&
          <>
            <Data>
              <Text>title: {title}</Text>
              <br />
              <Text>year: {age}</Text>
              <br />
              <Text className="text--url">
                url:&nbsp;
                <Link url={url}>{url}</Link>
              </Text>
              <br />
              <Text className="jp">{text}</Text>
            </Data>
            <img src={image} alt={title} css={imgStyle} />
          </>
        }
      </InView>
    )
  }
}
