var React = require('react');
var reactDom = require('react-dom');

var EvalButton = React.createClass({
  render: function(){
    return (
      <div>
        <input type="button"  onClick={this.props.onClick}  className="eval-button" value = "="/>​
      </div>
    )
  }
})

module.exports = EvalButton;
