var React = require("react");
var ReactDom = require("react-dom");

var NumButton = React.createClass({
  render: function() {
    return (
      <div>
        <input type="button"  onClick={this.props.onClick} value={this.props.num}  className="num-button"/>​
      </div>
    )
  }
})
module.exports = NumButton;
