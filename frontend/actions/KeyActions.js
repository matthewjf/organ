var Dispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  keyDown: function (noteName) {
    Dispatcher.dispatch({
      actionType: "KEYDOWN",
      noteName: noteName
    });
  },

  keyUp: function (noteName) {
    Dispatcher.dispatch({
      actionType: "KEYUP",
      noteName: noteName
    });
  },

  setKeys: function (notes) {
    Dispatcher.dispatch({
      actionType: "SETKEYS",
      notes: notes
    });
  }
};

module.exports = KeyActions;
