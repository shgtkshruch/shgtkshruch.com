export default () => {
  const $name = $('.js-history-name');

  $name.click(function c() {
    $('.history__text').hide();

    $name.removeClass('is-active');

    $(this)
      .addClass('is-active')
      .next('.history__text').show();
  });
};
