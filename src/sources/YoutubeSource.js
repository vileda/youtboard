import scriptjs from 'scriptjs';

import YoutubeVideoActions from 'actions/YoutubeVideoActions';

scriptjs('https://apis.google.com/js/client.js?onload=googleApiClientReady');

window.googleApiClientReady = function() {
  gapi.client.setApiKey('AIzaSyByJWb95wyGnMLkb8Mf3McPn-F4CaxBrYU');
  gapi.client.load('youtube', 'v3', function() {
    window.YouTubeClientLoaded = true;
  });
};

const YoutubeSource = {
  searchAction: {
    remote(state) {
      return new Promise(function (resolve, reject) {
        var request = gapi.client.youtube.search.list({
          q: state.searchQuery,
          part: 'snippet'
        });

        request.execute(function(response) {
          resolve(response.result);
        });
      });
    },

    local(state) {
      return null;
    },
    shouldFetch(state) {
      return true;
    },
    //loading() {},
    success: YoutubeVideoActions.receivedResults,
    error: YoutubeVideoActions.searchError
  }
};

export default YoutubeSource;
