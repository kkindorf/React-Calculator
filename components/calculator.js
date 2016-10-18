var React = require("react");
var ReactDom = require("react-dom");
var NumButton = require("./numberButtons");
var ClearButton = require("./clearButton.js");
var OpButton = require("./operatorButtons.js");
var String = '';
var Calculator = React.createClass({
  getInitialState: function() {
    return {inputValue: "Let's do some math"};
  },
  onChange: function(event){
    console.log(event.target.value);
    console.log("I think I am working...!")
  },
  onSubmit: function(e) {
    e.preventDefault();
    console.log('hello world!');
  },
  onNumClick: function(event) {
    //console.log(event.target.value);
    String += event.target.value;
    console.log(String);
    console.log('num button clicked');
    this.setState({
      inputValue: String
    });
  },
  onOpClick: function(event) {
    String += event.target.value;
    console.log('op button clicked');
    this.setState({
      inputValue: String
    });
  },
  onClearClick: function(event) {
    console.log("string before"+ String);
    String = "";
    console.log("string now:"+inputValue);
    this.setState({
      inputValue: String
    });
  },
  render: function() {
    return (
            <div className="calc-container">
              <form onSubmit={this.onSubmit}>
                <input type="text" id="text" onChange={this.onChange}
                  value={this.state.inputValue}/>
                  <ClearButton onClick = {this.onClearClick}/>
                  <div className="num-buttons">
                    <NumButton num="1" onClick = {this.onNumClick}/>
                  </div>
                  <div className="op-buttons">
                    <OpButton op="*" onClick = {this.onOpClick} />
                  </div>
                <button type="submit">Submit</button>
              </form>
            </div>
    )
  }
})

module.exports = Calculator;
