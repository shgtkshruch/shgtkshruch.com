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
    bottom: $(window).height() / 3,
  });

  inView('.js-heading')
    .on('enter', (el) => {
      if (!$(el).find('.js-heading-output').is(':empty')) return;

      Typed.new(`#${el.id} .js-heading-output`, {
        stringsElement: $(el).find('.heading__main').get(0),
        showCursor: false,
        callback() {
          if ($(el).hasClass('history')) {
            setTimeout(() => {
              $('.history__list').addClass('is-active');
              setTimeout(() => {
                $('.history__item').first().find('.history__name').click();
              }, 1800);
            }, 500);
          }

          if ($(el).hasClass('skill')) {
            $('.skill__list').addClass('is-active');
          }
        },
      });
    });
};
