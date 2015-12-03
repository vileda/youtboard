require('https://apis.google.com/js/client.js?onload=googleApiClientReady');

window.googleApiClientReady = function() {
  gapi.client.setApiKey('465723722VeAji1ZVqYiJxB7oyMTVLI');
  gapi.client.load('youtube', 'v3', function() {
    window.YouTubeClientLoaded = true;
  });
};

const YoutubeSource = {
  remoteAction: {
    remote(state) {},
    local(state) {
      return null;
    },
    shouldFetch(state) {
      return true;
    },
    loading() {},
    success() {},
    error() {}
  }
};

export default YoutubeSource;
