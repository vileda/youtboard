import alt from 'components/Dispatcher';
import _ from 'underscore';
import YoutubeVideoActions from 'actions/YoutubeVideoActions';

export class YoutubeVideoStore {
  constructor() {
    this.videos = [];
    this.youtubeUrl = '';
    this.youtubeEmbedUrl = '';
    this.videoLoaded = false;
    this.bindListeners({
      handlePrepareAddVideo: YoutubeVideoActions.PREPARE_ADD_VIDEO,
      handleAddVideo: YoutubeVideoActions.ADD_VIDEO
    });
  }

  handlePrepareAddVideo(url) {
    var match = url.match(/[?&]?v=([a-zA-Z0-9_]+)/);
    if(match && match.length > 1) this.youtubeEmbedUrl = 'http://www.youtube.com/embed/'+match[1];
    else this.youtubeEmbedUrl = '';
    this.videoLoaded = !!this.youtubeEmbedUrl.trim();
    this.youtubeUrl = url;
  }

  handleAddVideo(url) {
    this.videos.push(url);
  }
}

export default alt.createStore(YoutubeVideoStore, 'YoutubeVideoStore');
