import alt from 'components/Dispatcher';
import _ from 'underscore';
import YoutubeVideoActions from 'actions/YoutubeVideoActions';
import YoutubeSource from 'sources/YoutubeSource';

export class YoutubeVideoStore {
  constructor() {
    this.videos = [];
    this.searchResults = {items: []};
    this.searchQuery = '';
    this.youtubeEmbedUrl = '';
    this.videoLoaded = false;
    this.registerAsync(YoutubeSource);
    this.bindListeners({
      handlePrepareAddVideo: YoutubeVideoActions.PREPARE_ADD_VIDEO,
      handleAddVideo: YoutubeVideoActions.ADD_VIDEO,
      handleReceivedResults: YoutubeVideoActions.RECEIVED_RESULTS,
      handleSearchError: YoutubeVideoActions.SEARCH_ERROR
    });
  }

  handlePrepareAddVideo(url) {
    this.searchQuery = url;
    this.getInstance().searchAction();
    var match = url.match(/[?&]?v=([a-zA-Z0-9_]+)/);
    if(match && match.length > 1) this.youtubeEmbedUrl = 'http://www.youtube.com/embed/'+match[1];
    else this.youtubeEmbedUrl = '';
    this.videoLoaded = !!this.youtubeEmbedUrl.trim();
  }

  handleAddVideo(url) {
    this.videos.push(url);
    this.youtubeEmbedUrl = '';
    this.videoLoaded = false;
    YoutubeSource.save(this.videos);
  }

  handleReceivedResults(results) {
    this.searchResults = results;
  }

  handleSearchError(error) {
    this.searchResults = error;
  }
}

export default alt.createStore(YoutubeVideoStore, 'YoutubeVideoStore');
