'use strict';

import React from 'react';
import AddVideoFromYoutubeComponent from 'components/AddVideoFromYoutubeComponent';

class AppView extends React.Component {
  render() {
    return (
      <div className="index">
        <AddVideoFromYoutubeComponent />
      </div>
    );
  }
}

AppView.defaultProps = {
};

export default AppView;
