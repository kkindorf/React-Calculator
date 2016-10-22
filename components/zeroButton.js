var React = require('react');
var ReactDom = require('react-dom');

var ZeroButton = React.createClass({
  render: function(){
    return (
      <div>
          <input type="button" onClick={this.props.onClick} value={this.props.num} className="zero-button" readOnly/>​
      </div>
    )
  }
})

module.exports = ZeroButton;
