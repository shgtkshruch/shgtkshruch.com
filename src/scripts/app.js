/* global inView */

import work from './work';
import heading from './heading';
import history from './history';
import tippy from './tippy';

inView.offset({
  top: 100,
  bottom: $(window).height() / 3,
});


work();
heading();
history();
tippy();
