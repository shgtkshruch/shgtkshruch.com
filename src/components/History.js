/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

import { mq } from '../variables'
import Link from './Link'
import Text from './Text'

const nthChildAnimation = Array.from('_'.repeat(7)).reduce((res, _, i) => {
  const delay = 0.9 + 0.12 * i
  res += `
    &:nth-of-type(${i + 1}) {
      animation: fadeIn 0.8s ${delay}s both ease-in-out;
    }
  `
  return res
}, '')

const Item = styled.li`
   position: relative;
   padding-left: 1rem;
   opacity: 0;

   &:not(:last-child) {
     margin-bottom: 4rem;
   }

   ${nthChildAnimation}

   @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
    }
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

export default ({ index, isShow, item, onAnimationEnd, updateCurrentIndex }) => {
  const { age, name, text, url } = item
  return (
    <Item onAnimationEnd={() => onAnimationEnd(index)}>
      <Header onClick={() => updateCurrentIndex(index)}>
        <span>{age}</span>
        <Name>{name}</Name>
      </Header>
      <div
        className="jp"
        css={css`
          display: ${isShow ? 'block' : 'none'};
          ${textStyle}
        `}
      >
        {text.map((t, i) => <Text key={i}>{t}</Text>)}
        <br />
        <Text>
          <Link href={url} css={btnStyle} >more</Link>
         </Text>
      </div>
    </Item>
  )
}
