var React = require('react'),
    classNames = require('classnames'),
    KeyStore = require('../stores/KeyStore'),
    TrackStore = require('../stores/TrackStore'),
    Track = require('../util/Track'),
    TrackActions = require('../actions/TrackActions'),
    TrackForm = require('./TrackForm');

var Recorder = React.createClass({
  getInitialState: function () {
    return ({
      isRecording: false, track: new Track({name: 'name'})
    });
  },

  _changed: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  componentDidMount: function() {
    this.recorderListener = KeyStore.addListener(this._changed);
  },

  componentWillUnmount: function() {
    this.recorderListener.remove();
  },

  handleStart: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  handleStop: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  handlePlay: function () {
    this.state.track.play();
  },

  resetState: function() {
    this.setState({isRecording: false, track: new Track({name: 'name'})});
  },

  render: function () {

    var playClasses = classNames({
      'btn': true,
      'btn-success': true,
      'disabled': this.state.track.roll.length < 1
    });

    var startClasses = classNames({
      'btn': true,
      'btn-primary': true,
      'disabled': this.state.isRecording
    });

    var stopClasses = classNames({
      'btn': true,
      'btn-primary': true,
      'disabled': !this.state.isRecording
    });

    var startText = (this.state.isRecording ? 'recording' : 'start');
    var disableSave = this.state.track.roll.length < 1;

    return (
      <section className='recorder'>
        <h2>Recording</h2>
        <button className={startClasses}
          onClick={this.handleStart}>{startText}</button>
        <button className={stopClasses}
          onClick={this.handleStop}>stop</button>
        <button className={playClasses} onClick={this.handlePlay}>play</button>

        <TrackForm
          track={this.state.track}
          reset={this.resetState}
          disable={disableSave}/>
      </section>
    );
  }

});

module.exports = Recorder;
