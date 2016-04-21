var Dispatcher = require('../dispatcher/Dispatcher.js');

var TrackActions = {
  addTrack: function (track) {
    Dispatcher.dispatch({
      actionType: "ADDTRACK",
      track: track
    });
  },
  removeTrack: function(track){
    Dispatcher.dispatch({
      actionType: 'REMOVETRACK',
      track: track
    });
  },
  setTracks: function(tracks){
    Dispatcher.dispatch({
      actionType: 'SETTRACKS',
      tracks: tracks
    });
  }

};

module.exports = TrackActions;
