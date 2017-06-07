/* global inView */

export default () => {
  inView.offset({
    bottom: $(window).height() / 2,
  });

  inView('.gallery__img')
    .on('enter', (el) => {
      $(el).next('.js-gallery-data').show();
    })
    .on('exit', (el) => {
      $(el).next('.js-gallery-data').fadeOut();
    });
};

