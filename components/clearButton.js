var React = require("react");
var ReactDom = require("react-dom");
var ClearButton = React.createClass({
  render: function() {
    return (
      <div>
          <input type="button" value={this.props.val} onClick = {this.props.onClick} className="clear-button" readOnly />​
      </div>
    )
  }
})

module.exports = ClearButton;
