/* global Typed */

export default () => {
  Typed.new('#typed', {
    stringsElement: document.getElementById('typed-strings'),
    showCursor: false,
    callback() {
      document.querySelector('.js-typed').classList.add('is-intro-end');
      document.querySelector('.gallery').classList.add('is-active');
    },
  });
};
