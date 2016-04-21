var Dispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;

var KeyStore = new Store(Dispatcher);

var _keys = {};

var addKey = function (key) {
  _keys[key] = true;
  KeyStore.__emitChange();
};

var removeKey = function (key) {
  _keys[key] = false;
  KeyStore.__emitChange();
};

var setKeys = function (notes) {
  _keys = {};
  if (notes) {
    notes.forEach(function(note) {
      _keys[note] = true;
    });
  }

  KeyStore.__emitChange();
};

KeyStore.all = function () {
  return Object.keys(_keys).filter(function(key) {
    return _keys[key];
  }).slice();
};

KeyStore.includes = function (key) {
  return _keys[key];
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
  case 'KEYDOWN':
    addKey(payload.noteName);
    break;
  case 'KEYUP':
    removeKey(payload.noteName);
    break;
  case "SETKEYS":
    setKeys(payload.notes);
    break;
  }
};

module.exports = KeyStore;
