/* global Typed */

function h(text) {
  return `<p class="text"><span class="text__content">${text}</p><br>`;
}

export default () => {
  const $images = $('.js-gallery-item');

  $images.click(function i() {
    const title = $(this).data('title');
    const age = $(this).data('age');
    const url = $(this).data('url');
    const desc = $(this).data('desc');

    $('#typed')
      .addClass('is-text')
      .html(`${h(title) + h(age) + h(url) + h(desc)}<a href="#" class="btn">more</a>`);

    $images.removeClass('is-active');
    $(this).addClass('is-active');
  });
};

