var Dispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var TrackStore = new Store(Dispatcher);

var _tracks = [];

var addTrack = function (track) {
  _tracks.push(track);
  TrackStore.__emitChange();
};

var addTracks = function (tracks) {
  console.log('track added');
  _tracks.push.apply(_tracks, tracks);
  TrackStore.__emitChange();
};

var removeTrack = function(track) {
  var trackIdx = _tracks.indexOf(track);
  if (trackIdx > -1) {
    _tracks.splice(trackIdx, 1);
    TrackStore.__emitChange();
  }
};

TrackStore.all = function () {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case 'ADDTRACK':
    addTrack(payload.track);
    break;
  case 'REMOVETRACK':
    removeTrack(payload.track);
    break;
  }
};


module.exports = TrackStore;
