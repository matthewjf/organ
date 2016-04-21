var React = require('react'),
    TrackActions = require('../actions/TrackActions'),
    classNames = require('classnames'),
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
    if (this.props.track.roll.length > 0) {
      return (
        <form onSubmit={this.handleSave}>
          <fieldset className='form-group'>
            <label>name
              <input
                type='text'
                value={this.state.name}
                onChange={this.updateName}
                className='form-control' />
            </label>
          </fieldset>

          <input type='submit' value='save' className='btn btn-primary' />
        </form>
      );
    } else {
      return <div></div>;
    }
  }
});

module.exports = TrackForm;
