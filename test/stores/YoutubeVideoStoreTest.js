'use strict';

import alt from 'components/Dispatcher';
import { YoutubeVideoStore } from 'stores//YoutubeVideoStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('YoutubeVideoStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, YoutubeVideoStore);
  });
});
