/* global inView */

import work from './work';
import heading from './heading';
import history from './history';
import tippy from './tippy';

inView.offset({
  top: 100,
  bottom: $(window).height() / 3,
});

$(window).scroll(() => {
  $('.js-mouse').fadeOut(1000);
});


work();
heading();
history();
tippy();
