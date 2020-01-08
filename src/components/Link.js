/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { mq } from '../variables'

const linkStyle = css`
  position: relative;
  padding: 0.3rem 0.5rem;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #000;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  ${mq.pc} {
    &:hover {
      color: #fff;
      text-decoration: none;

      &::before {
        width: 100%;
      }
    }
  }
`
export default ({ url, children }) => {
  return (
    <a
      css={linkStyle}
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      {children}
   </a>
  )
}