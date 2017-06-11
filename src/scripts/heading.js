/* global inView Typed */

export default () => {
  let introShow = false;
  let workIsShow = false;
  let historyIsShow = false;
  let skillIsShow = false;

  inView('.js-heading')
    .on('enter', (el) => {
      if (!$(el).find('.js-heading-output').is(':empty')) return;

      if (
        ($(el).hasClass('work') && !introShow) ||
        ($(el).hasClass('history') && !workIsShow) ||
        ($(el).hasClass('skill') && !historyIsShow) ||
        ($(el).hasClass('contact') && !skillIsShow)
      ) return;

      Typed.new(`#${el.id} .js-heading-output`, {
        stringsElement: $(el).find('.heading__main').get(0),
        showCursor: false,
        typeSpeed: $(el).data('speed'),
        callback() {
          if ($(el).hasClass('intro')) {
            introShow = true;
            $('.js-mouse').fadeIn(1000);
          }

          if ($(el).hasClass('work')) {
            $('.work__list').fadeIn();
            workIsShow = true;
          }

          if ($(el).hasClass('history')) {
            setTimeout(() => {
              $('.history__list').addClass('is-active');
              setTimeout(() => {
                $('.history__item').first().find('.history__name').click();
                historyIsShow = true;
              }, 1800);
            }, 500);
          }

          if ($(el).hasClass('skill')) {
            $('.skill__list').addClass('is-active');
            skillIsShow = true;
          }

          if ($(el).hasClass('contact')) {
            $('.contact__list').addClass('is-active');
          }
        },
      });
    });
};
