import React from 'react';
import styled from '@emotion/styled'
import Typist from 'react-typist';
import { InView } from 'react-intersection-observer'
import { mq } from '../variables'

const Hgroup = styled.hgroup`
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.4;
  font-weight: normal;
  letter-spacing: 0.2em;
`

const Sub = styled.span`
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.6;

  ${mq.pc} {
    font-size: 1.2rem;
  }
`

export default class H extends React.Component {
  constructor() {
    super();

    this.state = {
      inView: false
    };
  }

  handleInview(inview, entry) {
    if (inview) {
      this.setState({ inView: true })
    }
  }

  render() {
    return (
      <Hgroup>
        <InView
          as="div"
          onChange={(inview, entry) => this.handleInview(inview, entry)}
        >
          {this.state.inView &&
            <Typist>
              <Title>{this.props.title}</Title>
              <Sub>{this.props.subTitle}</Sub>
            </Typist>
          }
        </InView>
      </Hgroup>
    )
  }
}
