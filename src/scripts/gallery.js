/* global Typed */

export default () => {
  const $images = $('.js-gallery-item');

  $images.click(function i() {
    const title = $(this).data('title');
    const age = $(this).data('age');
    const url = $(this).data('url');
    const desc = $(this).data('desc');

    $('#typed').addClass('is-text');

    Typed.new('#typed', {
      strings: [`title: ${title}<br>age: ${age}<br>url: <a href="${url}" target="_blank">${url}</a><br>${desc}`],
      showCursor: false,
    });
  });
};
