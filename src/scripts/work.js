/* global inView */

export default () => {
  inView('.work__img')
    .on('enter', (el) => {
      $(el).next('.js-work-data').show();
    })
    .on('exit', (el) => {
      $(el).next('.js-work-data').fadeOut();
    });
};

