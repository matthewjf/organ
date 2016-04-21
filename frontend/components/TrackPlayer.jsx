var React = require('react'),
    classNames = require('classnames'),
    TrackActions = require('../actions/TrackActions'),
    TrackApiUtil = require('../util/TrackApiUtil');

var TrackPlayer = React.createClass({

  handlePlay: function() {
    this.props.track.play();
  },

  handleDelete: function() {
    TrackApiUtil.destroy(this.props.track.id);
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
