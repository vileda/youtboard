import alt from 'components/Dispatcher';

class YoutubeVideoActions {
  prepareAddVideo(url) {
    this.dispatch(url);
  }
}

export default alt.createActions(YoutubeVideoActions);
