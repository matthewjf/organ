var React = require('react'),
    OrganKey = require('./OrganKey'),
    Tones = require('../constants/Tones'),
    Recorder = require('./Recorder'),
    JukeBox = require('./JukeBox');

var Organ = React.createClass ({
  getInitialState: function() {
    return {showMap: false};
  },

  organKeys: function() {
    var organ = this;
    return Object.keys(Tones).map (function(tone) {
      return (
        <OrganKey key={tone} noteName={tone} showMap={organ.state.showMap}/>
        );
    });
  },

  toggleMaps: function (event) {
    this.setState({showMap: !this.state.showMap});
  },

  render: function() {
    var toggleText = (this.state.showMap ? 'hide keymap' : 'show keymap');
    return (
      <div className='main'>
        <h1>Piano</h1>
        <div className='organ'>
          {this.organKeys()}
        </div>

        <input
          type='submit'
          value={toggleText}
          className='btn'
          onClick={this.toggleMaps} />

        <div className='tracks'>
          <Recorder />
          <JukeBox />
        </div>
      </div>
    );
  }
});

module.exports = Organ;
