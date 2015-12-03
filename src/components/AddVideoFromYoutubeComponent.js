'use strict';

import React from 'react';
import _ from 'underscore';
import VideoUrlInput from 'components/VideoUrlInputComponent';
import VideoPreview from 'components/VideoPreviewComponent';
import YoutubeVideoStore from 'stores/YoutubeVideoStore';
import YoutubeVideoActions from 'actions/YoutubeVideoActions';

require('styles//AddVideoFromYoutube.scss');

class AddVideoFromYoutubeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = YoutubeVideoStore.getState();
    this.onUrlChange = _.debounce(this.onUrlChange, 200);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    YoutubeVideoStore.listen(this.onChange);
  }

  onUrlChange(e) {
    YoutubeVideoActions.prepareAddVideo(e.target.value);
  }

  onChange(state) {
    this.setState(state)
  }

  render() {
    return (
      <div className="addvideofromyoutube-component">
        <VideoUrlInput onChange={this.onUrlChange} />
        { this.state.videoLoaded ? <button type="submit">Add Video</button> : null }
        { this.state.videoLoaded ? <VideoPreview url={this.state.youtubeEmbedUrl} /> : null }
      </div>
    );
  }
}

AddVideoFromYoutubeComponent.displayName = 'AddVideoFromYoutubeComponent';

// Uncomment properties you need
// AddVideoFromYoutubeComponent.propTypes = {};
// AddVideoFromYoutubeComponent.defaultProps = {};

export default AddVideoFromYoutubeComponent;
