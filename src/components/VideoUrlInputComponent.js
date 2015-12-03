'use strict';

import React from 'react';

require('styles/VideoUrlInput.scss');

class VideoUrlInputComponent extends React.Component {
  render() {
    return (
      <div className="videourlinput-component">
        <input onChange={this.props.onChange} type="text" placeholder="youtube url" />
      </div>
    );
  }
}

VideoUrlInputComponent.displayName = 'VideoUrlInputComponent';

// Uncomment properties you need
// VideoUrlInputComponent.propTypes = {};
// VideoUrlInputComponent.defaultProps = {};

export default VideoUrlInputComponent;
