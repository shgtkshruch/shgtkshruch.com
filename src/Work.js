import React, { useState } from 'react';
import styled from '@emotion/styled'
import { InView } from 'react-intersection-observer'
import { mq } from './variables'
import Section from './components/Section';
import Heading from './components/Hgroup';
import Work from './components/Work'

import nozomiFinancialGroup from './images/nozomi-financial-group.jpg';
import yoshienishikawa from './images/yoshienishikawa.jpg';
import avivaPro from './images/aviva-pro.jpg';
import damborghini from './images/damborghini.jpg';
import hydroPower from './images/hydro-power.jpg';
import schooTours from './images/schoo-tours.jpg';

const items = [
  {
    title: 'Nozomi Finacial Group',
    image: nozomiFinancialGroup,
    age: 2017,
    url: 'https://nozomifinancial.net/',
    text: 'アメリカと日本で活躍されているコンサルタントのコーポレートサイトをデザイン・制作しました。シンプルなデザインに統一しつつ、アニメーションで演出を加えました。日英の多言語対応も行い、WordPressですべての文言を更新できるようにしました。'
  },
  {
    title: 'Yoshie Nishikawa',
    image: yoshienishikawa,
    age: 2017,
    url: 'https://www.yoshienishikawa.com/',
    text: 'イタリアで活躍されている写真家のコーポレートサイトをデザイン・制作しました。写真が主役になるようミニマルなデザインを採用しました。WordPressで実装し、SNS連携の機能も盛り込みました。'
  },
  {
    title: 'aviva pro',
    image: avivaPro,
    age: 2016,
    url: 'https://www.aviva.co.jp/avivapro_web/',
    text: 'AVIVA様のWEBデザインコースのランディングページのコーディングを担当しました。落ち着いたデザインを守りつつ、アクセントとしてスクロールエフェクトやホバーエフェクトを工夫しました。'
  },
  {
    title: 'damborghini',
    image: damborghini,
    age: 2016,
    url: 'https://damborghini.com/',
    text: 'ブランディングサイトのコーディングを担当しました。導入部分のテキストによるアニメーション演出やSVGによるモーダル開閉アニメーションなどを実装しました。'
  },
  {
    title: 'hydro power',
    image: hydroPower,
    age: 2016,
    url: 'https://hpjsuiso.com/',
    text: 'コーポレートサイトのコーディング、スマートフォンUIを担当しました。波の動きをSVGで再現し、破綻しにくいCSSの設計を採用しました。'
  },
  {
    title: 'schoo tours',
    image: schooTours,
    age: 2013,
    url: 'https://shgtkshruch.github.io/schoo-tours/',
    text: '架空の旅行会社のランディングページのデザイン・コーディングを担当しました。写真をきれいに見せるために要素をできるだけ省いたフラットなデザインを採用しました。'
  }
]

const List = styled.div`
  padding-top: 4rem;

  ${mq.pc} {
    padding-top: 14rem;
  }
`

export default () => {
  const [inview, setView] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inview, entry) => inview ? setView(true) : false}
    >
      {inview &&
        <Section id="work" className="work">
          <Heading
            title="work"
            subTitle="My client and private works."
            onTypingDone={() => setIsTypingDone(true)}
          />
          <List>
            {items.map((item, i) => <Work key={i} item={item} isTypingDone={isTypingDone} />)}
          </List>
        </Section>
      }
    </InView>
  )
}
