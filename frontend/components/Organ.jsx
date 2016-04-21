var React = require('react'),
    OrganKey = require('./OrganKey'),
    Tones = require('../constants/Tones'),
    Recorder = require('./Recorder'),
    JukeBox = require('./JukeBox');

var Organ = React.createClass ({
  organKeys: function() {
    return Object.keys(Tones).map (function(tone) {
      return <OrganKey key={tone} noteName={tone}/>;
    });
  },

  render: function() {
    return (
      <div className='main'>
        <h1>Piano</h1>
        <div className='organ'>
          {this.organKeys()}
        </div>
        <div className='tracks'>
          <Recorder />
          <JukeBox />
        </div>
      </div>
    );
  }
});

module.exports = Organ;
