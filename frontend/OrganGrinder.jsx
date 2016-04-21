var ReactDOM = require('react-dom'),
    React = require('react'),
    Dispatcher = require('./dispatcher/Dispatcher'),
    Organ = require('./components/Organ');

require('./util/KeyListener');

document.addEventListener("DOMContentLoaded", function () {
  var content = document.querySelector('#content');
  ReactDOM.render(<Organ />, content);
});
