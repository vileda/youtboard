import history from 'components/History';

import config from 'config';

export function redirect(route) {
  history.pushState(null, route);
}
