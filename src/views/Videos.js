'use strict';

import React from 'react';
import Videos from 'components/VideosComponent';

class VideosView extends React.Component {
  render() {
    return (
      <div className="videos">
        <Videos />
      </div>
    );
  }
}

VideosView.defaultProps = {
};

export default VideosView;
