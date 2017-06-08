/* global inView Typed */

export default () => {
  inView('.js-heading')
    .on('enter', (el) => {
      Typed.new(`#${el.id} .heading__typed`, {
        stringsElement: $(el).find('.heading__main').get(0),
        showCursor: false,
      });
    });
};
