/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

import { breakpoints, mq } from './variables'
import Section from './components/Section';
import Heading from './components/Hgroup';
import History from './components/History'

const items = [
  {
    age: 2011,
    name: 'dotinstall',
    url: 'http://dotinstall.com/users/shgtkshruch',
    text: ['HTML・CSS・JavaScriptなどWEBテクノロジーの基礎を学ぶ。', '動画完了数は1500本以上。']
  },
  {
    age: 2013,
    name: 'Schoo',
    url: 'https://schoo.jp/',
    text: ['課題制作で実際にWEBサイトを制作。', '授業内のコンペティションで最優秀賞を受賞。']
  },
  {
    age: 2015,
    name: 'Lancers',
    url: 'https://www.lancers.jp/profile/sh19e',
    text: ['コーポレートサイトやランディングページなどの制作を受注。', '全ての案件の評価で☆5つを獲得。']
  },
  {
    age: 2016,
    name: 'Chogenbashugi',
    url: 'http://chogenba.com/',
    text: ['WEB制作会社の案件を元に実践的なコーディング技術を学ぶ。']
  },
  {
    age: 2017,
    name: 'Cykinso',
    url: 'https://cykinso.co.jp/',
    text: ['腸内フローラ解析のスタートアップに入社。', 'Ruby on Railsで自社サービスの開発に携わる']
  }
]

const List = styled.ul`
  display: inline-block;
  text-align: left;
  position: relative;
  padding: 4rem 0;
  margin-top: 2rem;

  ${mq.pc} {
    display: block;
    margin-top: 5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: #000;
    transition: height 0.8s;
  }

  &.is-active::before {
    height: 100%;
  }
`
const sectionStyle = css`
  max-width: 55rem;
  margin: 0 auto;
  text-align: center;
`

export default class H extends React.Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0
    }

    this.updateCurrentIndex = this.updateCurrentIndex.bind(this)
  }

  isShow(i) {
    if (this.isMobile()) return true
    return this.isPc() && this.state.currentIndex === i
  }

  updateCurrentIndex(index) {
    if (this.isPc()) {
      this.setState({ currentIndex: index })
    }
  }

  isPc() {
    return window.innerWidth >= breakpoints.pc
  }

  isMobile() {
    return window.innerWidth < breakpoints.pc
  }

  render() {
    return (
      <Section id="history" css={sectionStyle}>
        <Heading title="history" subTitle="Learn WEB technology with Internet." />
        <List>
          {items.map((item, i) => (
            <History
              key={i}
              item={item}
              index={i}
              isShow={this.isShow(i)}
              updateCurrentIndex={this.updateCurrentIndex}
            />
          ))}
        </List>
      </Section>
    )
  }
}
