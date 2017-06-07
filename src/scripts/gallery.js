/* global Typed */

export default () => {
  const $images = $('.js-gallery-item');

  $images.click(function i() {
    $('#typed')
      .addClass('is-text')
      .html($(this).find('.js-gallery-data').html());

    $images.removeClass('is-active');
    $(this).addClass('is-active');
  });
};

