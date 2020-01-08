import React from 'react';

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
    url: 'http://nozomifinancial.net/',
    text: 'アメリカと日本で活躍されているコンサルタントのコーポレートサイトをデザイン・制作しました。シンプルなデザインに統一しつつ、アニメーションで演出を加えました。日英の多言語対応も行い、WordPressですべての文言を更新できるようにしました。'
  },
  {
    title: 'Yoshie Nishikawa',
    image: yoshienishikawa,
    age: 2017,
    url: 'http://www.yoshienishikawa.com/',
    text: 'イタリアで活躍されている写真家のコーポレートサイトをデザイン・制作しました。写真が主役になるようミニマルなデザインを採用しました。WordPressで実装し、SNS連携の機能も盛り込みました。'
  },
  {
    title: 'aviva pro',
    image: avivaPro,
    age: 2016,
    url: 'http://www.aviva.co.jp/avivapro_web/',
    text: 'AVIVA様のWEBデザインコースのランディングページのコーディングを担当しました。落ち着いたデザインを守りつつ、アクセントとしてスクロールエフェクトやホバーエフェクトを工夫しました。'
  },
  {
    title: 'damborghini',
    image: damborghini,
    age: 2016,
    url: 'http://damborghini.com/',
    text: 'ブランディングサイトのコーディングを担当しました。導入部分のテキストによるアニメーション演出やSVGによるモーダル開閉アニメーションなどを実装しました。'
  },
  {
    title: 'hydro power',
    image: hydroPower,
    age: 2016,
    url: 'http://hpjsuiso.com/',
    text: 'コーポレートサイトのコーディング、スマートフォンUIを担当しました。波の動きをSVGで再現し、破綻しにくいCSSの設計を採用しました。'
  },
  {
    title: 'schoo tours',
    image: schooTours,
    age: 2013,
    url: 'http://shgtkshruch.github.io/schoo-tours/',
    text: '架空の旅行会社のランディングページのデザイン・コーディングを担当しました。写真をきれいに見せるために要素をできるだけ省いたフラットなデザインを採用しました。'
  }
]
export default () => {
  return (
    <section id="work" class="work section">
      <hgroup class="heading">
        <h2 class="heading__title">Work</h2>
        <span class="heading__sub">My client and private works.</span>
      </hgroup>
      <div class="work__list">
        {items.map(item => {
          return (
            <div class="work__item js-gallery-item">
              <div class="work__data js-work-data">
                <h3 class="text">
                  <span class="text__content">title: {item.title}</span>
                </h3>
                <p class="text"></p>
                <span class="text__content">year: {item.age}</span>
                <br />
                <p class="text text--url"></p>
                <span class="text__content text__content--url">
                  url:&nbsp;
                  <a class="link" href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                </span>
                <br />
                <p class="text jp">
                  <span class="text__content">{item.text}</span>
                </p>
              </div>
              <img class="work__img lazy" src={`${item.image}`} alt={item.title} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
