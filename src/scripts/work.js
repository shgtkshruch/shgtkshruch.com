/* global inView */

export default () => {
  inView('.work__item:not(:first-child) > .work__img')
    .on('enter', (el) => {
      $(el)
        .addClass('is-active')
        .siblings('.js-work-data').show();
    });
};

