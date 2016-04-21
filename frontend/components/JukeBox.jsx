var React = require('react'),
    classNames = require('classnames'),
    TrackStore = require('../stores/TrackStore'),
    TrackApiUtil = require('../util/TrackApiUtil'),
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
    TrackApiUtil.fetch();
    this.jukeBoxListener = TrackStore.addListener(this._changed);
  },

  componentWillUnmount: function() {
    this.jukeBoxListener.remove();
  },

  render: function () {
    var tracks = this.state.tracks.map(function(track){
      return (
        <li className='clearfix' key={track.id}>
          <TrackPlayer key={track.id} track={track} />
        </li>
      );
    });

    return (
      <div className='jukebox'>
        <h2>JukeBox</h2>
        <ul>
          {tracks}
        </ul>
      </div>
    );
  }

});

module.exports = JukeBox;
