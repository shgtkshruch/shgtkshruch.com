/* global Typed */

export default () => {
  Typed.new('#typed', {
    stringsElement: document.getElementById('typed-strings'),
    showCursor: false,
  });
};
