/* global inView */

export default () => {
  inView('.work__item:not(:first-child) > .work__img')
    .on('enter', (el) => {
      $(el)
        .addClass('is-active')
        .siblings('.js-work-data').show();
    });

  window.addEventListener('load', () => {
    $('.work').find('.work__img').each((i, el) => {
      $(el).attr('src', $(el).data('src'));
    });
  });
};

