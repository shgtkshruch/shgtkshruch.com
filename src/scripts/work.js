/* global inView */

export default () => {
  inView('.work__img')
    .on('enter', (el) => {
      $(el)
        .addClass('is-active')
        .next('.js-work-data').show();
    });
};

