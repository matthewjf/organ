var React = require('react'),
    classNames = require('classnames'),
    TrackActions = require('../actions/TrackActions');

var TrackPlayer = React.createClass({

  handlePlay: function() {
    this.props.track.play();
  },

  handleDelete: function() {
    TrackActions.removeTrack(this.props.track);
  },

  render: function () {
    var track = this.props.track;

    return (
      <div className='trackPlayer'>
        <span className='trackName'>{track.name}</span>
        <button className='btn' onClick={this.handlePlay}>play</button>
        <button className='btn' onClick={this.handleDelete}>delete</button>
      </div>
    );
  }
});

module.exports = TrackPlayer;
