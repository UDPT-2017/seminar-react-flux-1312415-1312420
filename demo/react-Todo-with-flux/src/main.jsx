var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
ReactDOM.render(<ListManager title="todo"/>, document.getElementById('todo'));
ReactDOM.render(<ListManager title="todo2"/>, document.getElementById('todo2'));