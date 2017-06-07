export default () => {
  const $mouse = $('.js-mouse');

  $(window).scroll(() => {
    $mouse
      .css({
        transition: 'initial',
      })
      .fadeOut();
  });
};
