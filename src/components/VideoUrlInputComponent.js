'use strict';

import React from 'react';
import YoutubeVideoStore from 'stores/YoutubeVideoStore';

require('styles/VideoUrlInput.scss');

class VideoUrlInputComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="videourlinput-component">
        <input name="video_url" onChange={this.props.onChange} type="text" placeholder="youtube url" />
      </div>
    );
  }
}

VideoUrlInputComponent.displayName = 'VideoUrlInputComponent';

// Uncomment properties you need
// VideoUrlInputComponent.propTypes = {};
// VideoUrlInputComponent.defaultProps = {};

export default VideoUrlInputComponent;
