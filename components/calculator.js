var React = require("react");
var ReactDom = require("react-dom");
var NumButton = require("./numberButtons");
var ClearButton = require("./clearButton.js");
var OpButton = require("./operatorButtons.js");
var EvalButton = require("./evalButton.js");
var String = '';
var val;

var Calculator = React.createClass({
  getInitialState: function() {
    return {inputValue: ''};
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
    val = event.target.value;
    val = parseInt(val);
    String += val.toString();
    console.log(typeof(String));
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
    this.setState({
      inputValue: String
    });
  },
  onEvalClick: function(event) {
    console.log(event.target.value);
    String += event.target.value;
    String = eval(String);
    String = String.toString();
    this.setState({
      inputValue: String
    });
  },
  render: function() {
    return (
          <div className="container-fluid">
            <div className="row">
              <div className="calc-container">
                <form onSubmit={this.onSubmit}>
                  <input type="text" id="text" onChange={this.onChange}
                    value={this.state.inputValue}/>
                      <div className="col-xs-3">
                        <NumButton num= '7' onClick = {this.onNumClick}/>
                        <NumButton num= '4' onClick = {this.onNumClick}/>
                        <NumButton num= '1' onClick = {this.onNumClick}/>
                        <NumButton num='.' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                        <NumButton num= '8' onClick = {this.onNumClick}/>
                        <NumButton num= '5' onClick = {this.onNumClick}/>
                        <NumButton num= '2' onClick = {this.onNumClick}/>
                        <NumButton num= '0' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                        <NumButton num= '9' onClick = {this.onNumClick}/>
                        <NumButton num= '6' onClick = {this.onNumClick}/>
                        <NumButton num= '3' onClick = {this.onNumClick}/>
                        <EvalButton onClick = {this.onEvalClick}/>
                      </div>
                      <div className="op-buttons">
                        <div className="col-xs-3">
                          <ClearButton onClick = {this.onClearClick}/>
                          <OpButton op= '/' onClick = {this.onOpClick} />
                          <OpButton op= 'X' onClick = {this.onOpClick} />
                          <OpButton op= '-' onClick = {this.onOpClick} />
                          <OpButton op= '+' onClick = {this.onOpClick} />
                        </div>
                      </div>
                </form>
              </div>
            </div>
          </div>

    )
  }
})

module.exports = Calculator;
