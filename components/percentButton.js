var React = require('react');
var ReactDom = require('react-dom');

var PercentButton = React.createClass({
  render: function(){
    return(
      <div>
                <input type="button" value='%' onClick = {this.props.onClick} className="perc-button" readOnly/>​
      </div>
    )
  }
})
module.exports = PercentButton;
