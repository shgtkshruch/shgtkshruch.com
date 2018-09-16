/* global inView, LazyLoad */

import $ from 'jquery';
import inView from 'in-view';
import LazyLoad from 'vanilla-lazyload';

export default () => {
  inView('.work__item:not(:first-child) > .work__img')
    .on('enter', (el) => {
      $(el)
        .addClass('is-active')
        .siblings('.js-work-data').show();
    });

  const myLazyLoad = new LazyLoad({
    elements_selector: '.lazy',
    to_webp: true,
  });
};

