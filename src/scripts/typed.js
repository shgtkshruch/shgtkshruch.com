/* global Typed */

export default () => {
  Typed.new('#typed', {
    stringsElement: document.getElementById('typed-strings'),
    showCursor: false,
    callback() {
      $('.gallery').addClass('is-active');
      $('.terminal').addClass('is-intro-end');
    },
  });
};
