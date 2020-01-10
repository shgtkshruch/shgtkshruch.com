import React, { useState } from 'react';
import styled from '@emotion/styled'

import { mq } from './variables'

import Section from './components/Section';
import Heading from './components/Hgroup';
import Skill from './components/Skill';

const items = [
  {
    name: 'HTML',
    text: 'WEB標準に則ったコーディング'
  },
  {
    name: 'Pug',
    text: '効率的で変更に強いコーディング'
  },
  {
    name: 'CSS',
    text: 'レイアウトからアニメーションまで'
  },
  {
    name: 'Sass',
    text: '効率的で保守性の高いコーディング'
  },
  {
    name: 'PostCSS',
    text: 'Sassに足りない機能を補完'
  },
  {
    name: 'BEM・SMACSS',
    text: '大規模でも破綻しないCSS設計'
  },
  {
    name: 'JavaScript',
    text: '独自のUIや演出をつくる'
  },
  {
    name: 'Babel',
    text: '次世代の仕様を積極的に採用'
  },
  {
    name: 'jQuery',
    text: 'ライブラリーを組み合わせつつ独自のプログラムも実装'
  },
  {
    name: 'React',
    text: 'SPA制作'
  },
  {
    name: 'Vue.js',
    text: 'SPA制作'
  },
  {
    name: 'gulp',
    text: 'プロジェクトにあったビルド環境の作成'
  },
  {
    name: 'webpack',
    text: 'プロジェクトにあったのビルド環境の作成'
  },
  {
    name: 'PHP',
    text: 'WordPressのテーマ制作ができる'
  },
  {
    name: 'WordPress',
    text: '小・中規模サイトの制作'
  },
  {
    name: 'Rails',
    text: '中規模Webサービスの開発'
  },
  {
    name: 'Vagrant',
    text: 'プロジェクトの環境構築'
  },
  {
    name: 'Itamae',
    text: 'Infrastructure as Code'
  },
  {
    name: 'Git',
    text: 'すべてのプロジェクトをバージョン管理'
  },
  {
    name: 'GitHub',
    text: 'プルリクエストベースのチーム開発経験'
  },
  {
    name: 'AWS',
    text: 'ドメイン取得やサーバーの作成'
  },
  {
    name: 'CircleCI',
    text: 'CI/CD の設計・実装'
  },
  {
    name: 'VIM',
    text: '素早いコーディングができるようにカスタマイズ'
  },
  {
    name: 'Chrome',
    text: 'パフォーマンスの計測やデバック'
  },
]

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 55rem;
  margin: 3rem auto -1.6rem;

  ${mq.pc} {
    margin-top: 5rem;
  }
`

export default ({ next }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true)
    next()
  }

  return (
    <Section id="skils">
      <Heading
        title="skill"
        subTitle="Adopt the latest tools and methodology."
        onTypingDone={onTypingDone}
      />
      {isTypingDone &&
        <List>
          {items.map((item, i) => <Skill key={i} item={item} />)}
        </List>
      }
    </Section>
  )
}
