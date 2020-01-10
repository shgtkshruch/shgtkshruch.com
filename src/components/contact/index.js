/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const nthChildAnimation = Array.from('_'.repeat(5)).reduce((res, _, i) => {
  const delay = 0.12 * (i + 1);
  res += `
    &:nth-of-type(${i + 1}) {
      animation: fadeInUp 0.8s ${delay}s forwards;
    }
  `
  return res
}, '')

const Contact = styled.li`
  opacity: 0;

  ${props => props.isShow ? nthChildAnimation : ''}

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const Svg = props => {
  const size = `2.2rem`;
  return (
    <svg
      css={css`
        width: ${size};
        height: ${size};
        transition: fill 0.3s;

        &:hover {
          fill: ${props.color};
        }
        `
      }
      {...props}
    />
  )
}

export default ({ item, isShow }) => {
  const { url, color, d } = item

  return (
    <Contact isShow={isShow}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Svg viewBox="0 0 16 16" color={color}>
          <path d={d} />
        </Svg>
      </a>
    </Contact>
  )
}
