'use strict';

import React from 'react';

require('styles/VideoPreview.scss');

class VideoPreviewComponent extends React.Component {
  render() {
    return (
      <div className="videopreview-component">
        <iframe id="ytplayer" type="text/html" width="640" height="390"
                src={this.props.url}
                htmlFrameborder="0" />
      </div>
    );
  }
}

VideoPreviewComponent.displayName = 'VideoPreviewComponent';

// Uncomment properties you need
// VideoPreviewComponent.propTypes = {};
// VideoPreviewComponent.defaultProps = {};

export default VideoPreviewComponent;
