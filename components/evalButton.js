var React = require('react');
var reactDom = require('react-dom');

var EvalButton = React.createClass({
  render: function(){
    return (
      <div>
        <button type="button"  onClick={this.props.onClick}  className="eval-button">=</button>​
      </div>
    )
  }
})

module.exports = EvalButton;
