import alt from 'components/Dispatcher';

class YoutubeVideoActions {
  prepareAddVideo(url) {
    this.dispatch(url);
  }

  addVideo(url) {
    this.dispatch(url);
  }

  receivedResults(results) {
    this.dispatch(results);
  }

  searchError(error) {
    this.dispatch(error);
  }
}

export default alt.createActions(YoutubeVideoActions);
