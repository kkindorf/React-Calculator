var React = require("react");
var ReactDOM = require("react-dom");
var Calculator = require("./components/calculator.js");
document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Calculator />, document.getElementById('app'));
})
