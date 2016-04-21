var Dispatcher = require('../dispatcher/Dispatcher.js'),
    Store = require('flux/utils').Store,
    Track = require('../util/Track');

var TrackStore = new Store(Dispatcher);

var _tracks = [];

var addTrack = function (trackData) {
  var track = new Track(trackData);
  _tracks.push(track);
  TrackStore.__emitChange();
};

var setTracks = function (tracks) {
  tracks.forEach(function(trackData){
    _tracks.push(new Track(trackData));
  });

  TrackStore.__emitChange();
};

var removeTrack = function(track) {
  var trackIds = _tracks.map(function(t){
    return t.id;
  });
  var trackIdx = trackIds.indexOf(track.id);

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
  case 'SETTRACKS':
    setTracks(payload.tracks);
    break;
  }
};


module.exports = TrackStore;
