var React = require('react'),
    classNames = require('classnames'),
    KeyStore = require('../stores/KeyStore'),
    Note = require('../util/Note'),
    Tones = require('../constants/Tones');

var OrganKey = React.createClass({
  getInitialState: function () {
    return ({pressed: false});
  },

  _changed: function() {
    if (KeyStore.includes(this.props.noteName)) {
      this.setState({pressed: true});
      this.note.start();
    } else {
      this.setState({pressed: false});
      this.note.stop();
    }
  },

  componentDidMount: function() {
    this.note = new Note(Tones[this.props.noteName]);
    this.organKeyListener = KeyStore.addListener(this._changed);
  },

  componentWillUnmount: function() {
    this.organKeyListener.remove();
  },

  render: function () {
    var noteName = this.props.noteName;
    var keyName =
      (noteName.endsWith('S') ? (noteName.slice(0,-2) + '#') : noteName.slice(0,-1));
    var classes = classNames({
      'key': true,
      'pressed': this.state.pressed,
      'sharp': this.props.noteName.endsWith('S')
    });

    return (
      <div className={classes}>
        <div className='text'>{keyName}</div>
      </div>
    );
  }
});

module.exports = OrganKey;
