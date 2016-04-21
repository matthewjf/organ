var React = require('react'),
    classNames = require('classnames'),
    TrackStore = require('../stores/TrackStore'),
    TrackPlayer = require('./TrackPlayer');

var JukeBox = React.createClass({
  getInitialState: function () {
    return ({
      tracks: TrackStore.all()
    });
  },

  _changed: function() {
    this.setState({tracks: TrackStore.all()});
  },

  componentDidMount: function() {
    this.jukeBoxListener = TrackStore.addListener(this._changed);
  },

  componentWillUnmount: function() {
    this.jukeBoxListener.remove();
  },

  render: function () {
    var tracks = this.state.tracks.map(function(track){
      return (
        <li key={track.startTime}>
          <TrackPlayer key={track.startTime} track={track} />
        </li>
      );
    });

    return (
      <div>
        <h2>JukeBox</h2>
        <ul>
          {tracks}
        </ul>
      </div>
    );
  }

});

module.exports = JukeBox;
