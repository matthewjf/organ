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

    // var saveClasses = classNames({
    //   'btn': true,
    //   'disabled': Boolean(this.state.track.roll.length)
    // });
    //
    // var playClasses = classNames({
    //   'btn': true,
    //   'disabled': Boolean(this.state.track.roll.length)
    // });

    return (
      <section>
        <h2>Recording</h2>
        <button className='btn' onClick={this.handleStart}>start</button>
        <button className='btn' onClick={this.handleStop}>stop</button>
        <button className='btn' onClick={this.handlePlay}>play</button>

        <TrackForm track={this.state.track} reset={this.resetState}/>
      </section>
    );
  }

});

module.exports = Recorder;
