'use strict';

import React from 'react';
import _ from 'underscore';
import history from 'components/History';
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
    this.addVideo = this.addVideo.bind(this);
  }

  componentDidMount() {
    YoutubeVideoStore.listen(this.onChange);
  }

  onChange(state) {
    this.setState(state)
  }

  onUrlChange(e) {
    e.persist();
    YoutubeVideoActions.prepareAddVideo(e.target.value);
  }

  addVideo(e) {
    YoutubeVideoActions.addVideo(e.target.value);
    history.pushState(null, '/videos');
  }

  render() {
    return (
      <div className="addvideofromyoutube-component">
        <form action="/videos" method="GET">
          <VideoUrlInput onChange={this.onUrlChange} />
          { this.state.videoLoaded ? <button type="button" onClick={this.addVideo}>Add Video</button> : null }
        </form>
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
