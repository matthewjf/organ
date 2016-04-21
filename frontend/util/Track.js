var KeyActions = require('../actions/KeyActions');

var Track = function (attrs) {
  this.name = attrs.name;
  this.roll = (attrs.roll ? attrs.roll : []);
  this.id = attrs.id;
};

Track.prototype.startRecording = function () {
  this.startTime = Date.now();
  this.roll = [];
};

Track.prototype.stopRecording = function () {
  var elapsed = Date.now() - this.startTime;
  var slice = {timeSlice: elapsed, notes: []};
  this.roll.push(slice);
};

Track.prototype.addNotes = function (notes) {
  var elapsed = Date.now() - this.startTime;
  var slice = {timeSlice: elapsed, notes: notes};
  this.roll.push(slice);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }

  var playbackStartTime = Date.now();
  var currentNote = 0;
  var recorder = this;
  KeyActions.setKeys([]);

  recorder.interval = setInterval(function () {
    if (recorder.roll[currentNote]) {
      if (Date.now() - playbackStartTime < recorder.roll[currentNote].timeSlice) {
        KeyActions.setKeys(recorder.roll[currentNote].notes);
      } else {
        currentNote += 1;
      }
    } else {
      clearInterval(recorder.interval);
      delete recorder.interval;
    }

  }, 1);
};

module.exports = Track;
