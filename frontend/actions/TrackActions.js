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
  }
};

module.exports = TrackActions;
