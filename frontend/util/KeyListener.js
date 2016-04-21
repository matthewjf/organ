var Mapping = require('../constants/Mapping'),
    KeyActions = require('../actions/KeyActions');

$(document).keydown(function(event) {
  KeyActions.keyDown(Mapping[event.which]);
});

$(document).keyup(function(event) {
  KeyActions.keyUp(Mapping[event.which]);
});
