var React = require('react'),
    TrackActions = require('../actions/TrackActions'),
    TrackApiUtil = require('../util/TrackApiUtil');

var TrackForm = React.createClass({
  getInitialState: function() {
    return {name: ''};
  },

  handleSave: function (event) {
    event.preventDefault();
    this.props.track.name = this.state.name;
    TrackApiUtil.save(this.props.track);
    this.resetState();
    this.props.reset();
  },

  resetState: function() {
    this.setState({name: ''});
  },

  updateName: function(event) {
    var name = event.currentTarget.value;
    this.setState({name: name});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSave}>
        <label>name
          <input
            type='text'
            value={this.state.name}
            onChange={this.updateName} />
        </label>
        <input type='submit' value='save' className='btn' />
      </form>
    );
  }
});

module.exports = TrackForm;
