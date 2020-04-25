/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { mq } from 'variables';
import Link from 'components/Common/Link';
import Text from 'components/Common/Text';

const nthChildAnimation = Array.from('_'.repeat(7)).reduce((res, _, i) => {
  const delay = 0.9 + 0.12 * i
  res += `
    &:nth-of-type(${i + 1}) {
      animation: fadeInUp 0.8s ${delay}s forwards ease-in-out;
    }
  `
  return res
}, '');

const Item = styled.li`
   position: relative;
   padding-left: 1rem;
   opacity: 0;

   &:not(:last-child) {
     margin-bottom: 5rem;
   }

   ${props => props.typingDone ? nthChildAnimation : ''}

   @keyframes fadeInUp {
    0% {
      opacity: 0;
      pointer-events: none;
      transform: translateY(15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
`;
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
    background-color: currentColor;
  }
`;

const Name = styled(Link)`
  margin-left: 1.3rem;
  letter-spacing: 0.05em;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: currentColor;
  font-family: inherit;
  outline: none;

  &::before {
    left: -5%;
    transform: skew(-25deg);
  }

  &:hover::before {
    width: 110%;
  }

  ${props => props.isShow ? activeStyle : ''}
`;

const activeStyle = css`
  color: var(--bg-color);

  &::before {
    width: 110%;
  }
`;

const TextWrapper = styled.div`
  display: ${props => props.isSelected ? 'block' : 'none'};
  margin-top: 1.6em;
  letter-spacing: 0.02em;
  line-height: 1.8;

  ${mq.pc} {
    position: absolute;
    top: 0;
    right: 0;
    width: 62%;
    padding-left: 1rem;
    margin-top: 0;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background-color: var(--primary-color);
    animation: line 0.3s 1s forwards;
  }

  @keyframes line {
    0% {
      height: 0;
    }

    100% {
      height: 100%;
    }
  }
`;

const btnStyle = css`
  display: inline-block;
  border: 1px solid currentColor;
  text-decoration: none;
  padding: 0.5rem 1.4rem;
  line-height: 1;
  letter-spacing: 0.06em;
`;

export default ({ item, typingDone, isSelected, onAnimationEnd, updateCurrentIndex }) => {
  const { age, name, text, url } = item

  return (
    <Item typingDone={typingDone} onAnimationEnd={onAnimationEnd}>
      <Header>
        <span>{age}</span>
        <Name
          as="button"
          isShow={isSelected}
          onClick={updateCurrentIndex}
          onFocus={updateCurrentIndex}
        >{name}</Name>
      </Header>
      <TextWrapper className="jp" isSelected={isSelected}>
        {text.map((t, i) => <Text key={i}>{t}</Text>)}
        <br/>
        <Text>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            css={btnStyle}
          >more</Link>
         </Text>
      </TextWrapper>
    </Item>
  )
}
