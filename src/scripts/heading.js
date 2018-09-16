/* global inView Typed */

import $ from 'jquery';

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
            $(el).next('.section').show();
          }

          if ($(el).hasClass('work')) {
            workIsShow = true;
            $('.work__list').addClass('is-active');
            $('.work__item:first-child > .work__img')
              .addClass('is-active')
              .siblings('.js-work-data').show();
            $(el).next('.section').show();
          }

          if ($(el).hasClass('history')) {
            setTimeout(() => {
              $('.history__list').addClass('is-active');
              setTimeout(() => {
                $('.history__item').first().find('.history__name').click();
                historyIsShow = true;
                $(el).next('.section').show();
              }, 1800);
            }, 500);
          }

          if ($(el).hasClass('skill')) {
            skillIsShow = true;
            $('.skill__list').addClass('is-active');
            $(el).next('.section').show();
          }

          if ($(el).hasClass('contact')) {
            $('.contact__list').addClass('is-active');
          }
        },
      });
    });
};
