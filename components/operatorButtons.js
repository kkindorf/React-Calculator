var React = require("react");
var ReactDom = require("react-dom");

var OpButton = React.createClass({
  render: function() {
    return (
      <div>
        <input type="button" value={this.props.op} onClick = {this.props.onClick} className="op-button" />​
      </div>
    )
  }
})

module.exports = OpButton;
