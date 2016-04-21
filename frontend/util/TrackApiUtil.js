var TrackActions = require('../actions/TrackActions.js');

module.exports = {
  fetch: function() {
    $.ajax({
      url: "/api/tracks",
      success: function (tracks) {
        TrackActions.setTracks(tracks);
      }
    });
  },

  save: function(data) {
    $.ajax({
      url: "/api/tracks",
      data: {track: data},
      method: 'POST',
      success: function (trackData) {
        TrackActions.addTrack(trackData);
      }
    });
  },

  destroy: function(id) {
    $.ajax({
      url: "/api/tracks/" + id,
      method: 'DELETE',
      success: function (track) {
        TrackActions.removeTrack(track);
      }
    });
  }
};
