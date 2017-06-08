/* global inView Typed */

export default () => {
  // calcurate heading height and adapt it
  $('.js-heading').each((i, el) => {
    const $heading = $(el).find('.heading__typed').first();
    const height = $heading.height();

    $heading.hide();
    $(el).find('.heading__typed').eq(1).css({ height });
  });

  inView.offset({
    bottom: 200,
  });

  inView('.js-heading')
    .on('enter', (el) => {
      Typed.new(`#${el.id} .js-heading-output`, {
        stringsElement: $(el).find('.heading__main').get(0),
        showCursor: false,
      });
    })
    .on('exit', (el) => {
      $(el).find('.js-heading-output').empty();
    });
};
