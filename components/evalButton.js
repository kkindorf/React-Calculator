var React = require('react');
var reactDom = require('react-dom');

var EvalButton = React.createClass({
  render: function(){
    return (
      <div>
        <input type="button"  onClick={this.props.onClick} value="=" className="eval-button" />​
      </div>
    )
  }
})

module.exports = EvalButton;
