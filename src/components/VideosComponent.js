'use strict';

import React from 'react';
import YoutubeVideoStore from 'stores/YoutubeVideoStore';

require('styles/Videos.scss');

class VideosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = YoutubeVideoStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    YoutubeVideoStore.listen(this.onChange);
  }

  onChange(state) {
    this.setState(state)
  }

  render() {
    return (
      <div className="videos-component">
        {this.state.videos.length}
      </div>
    );
  }
}

VideosComponent.displayName = 'VideosComponent';

// Uncomment properties you need
// VideosComponent.propTypes = {};
// VideosComponent.defaultProps = {};

export default VideosComponent;
