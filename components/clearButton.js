var React = require("react");
var ReactDom = require("react-dom");

var ClearButton = React.createClass({
  render: function() {
    return (
      <div>
        <input type="button" value="CLEAR" onClick = {this.props.onClick} className="clear-button" />​
      </div>
    )
  }
})

module.exports = ClearButton;
