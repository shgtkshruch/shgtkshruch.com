/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

import { mq } from '../variables'
import Link from './Link'
import Text from './Text'

const Item = styled.li`
   position: relative;
   padding-left: 1rem;

   &:not(:last-child) {
     margin-bottom: 4rem;
   }
`
const size = '10px';

const Header = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translate(-50%, -50%);
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: #000;

    ${mq.pc} {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const Name = styled.span`
  margin-left: 1rem;
  letter-spacing: 0.05em;
  font-size: 1.2rem;
  cursor: pointer;

  ${mq.pc} {
    text-decoration: underline;
  }

  &.is-active {
    background-color: #000;
    color: #fff;
    text-decoration: none;
  }
`

const textStyle = css`
  margin-top: 1.6em;
  letter-spacing: 0.02em;
  z-index: 1;
  line-height: 1.8;

  ${mq.pc} {
    position: absolute;
    top: 0;
    right: 0;
    width: 62%;
    padding-left: 1rem;
    margin-top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background-color: #000;
    animation: line 0.3s 1s forwards;
  }
`

const btnStyle = css`
  display: inline-block;
  border: 1px solid currentColor;
  text-decoration: none;
  padding: 0.5rem 1.4rem;
  line-height: 1;
  letter-spacing: 0.06em;
`

export default ({ item }) => {
  const { age, name, text, url } = item

  return (
    <Item>
      <Header>
        <span>{age}</span>
        <Name>{name}</Name>
      </Header>
      <div className="jp" css={textStyle}>
        {text.map((t, i) => (
          <Text key={i}>{t}</Text>
        ))}
        <Text>
          <Link
            href={url}
            css={btnStyle}
          >more</Link>
        </Text>
      </div>
    </Item>
  )
}
