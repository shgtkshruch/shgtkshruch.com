import $ from 'jquery';

export default () => {
  if (!window.matchMedia('(min-width: 960px)').matches) return;

  const $name = $('.js-history-name');

  $name.click(function c() {
    $('.history__text').hide();

    $name.removeClass('is-active');

    $(this)
      .addClass('is-active')
      .parent().next('.history__text')
      .show();
  });
};
