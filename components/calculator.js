var React = require("react");
var ReactDom = require("react-dom");
var NumButton = require("./numberButtons");
var ClearButton = require("./clearButton.js");
var OpButton = require("./operatorButtons.js");
var EvalButton = require("./evalButton.js");
var string = '';
var total = '';
var initialState = {
  inputValue: ''
}
var Calculator = React.createClass({
  getInitialState: function() {
    return initialState;
  },
  onNumClick: function(event) {
    if(string == total){
      string = '';
    }
    string += event.target.value;
    this.setState({
      inputValue: string
    });
  },
  onOpClick: function(event) {
     if(isNaN(string[string.length -1])){
       return;
     }
    string += event.target.value;
    this.setState({
      inputValue: string
    });
  },
  onClearClick: function() {
    this.setState(this.getInitialState());
    string = '';
  },
  onEvalClick: function() {
    total = eval(string);
    this.setState({
      inputValue: total
    });
    string = total.toString();
  },
  render: function() {
    return (
          <div className="container-fluid">
            <div className="row">
              <div className="calc-container">
                <form onSubmit={this.onSubmit}>
                  <input type="text" id="text"
                    value={this.state.inputValue}/>
                      <div className="col-xs-3">
                        <NumButton disabled = {this.state.isDisabled} num= '7' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '4' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '1' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num='.' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                        <NumButton disabled = {this.state.isDisabled} num= '8' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '5' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '2' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '0' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                        <NumButton disabled = {this.state.isDisabled} num= '9' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '6' onClick = {this.onNumClick}/>
                        <NumButton disabled = {this.state.isDisabled} num= '3' onClick = {this.onNumClick}/>
                        <EvalButton onClick = {this.onEvalClick}/>
                      </div>
                      <div className="op-buttons">
                        <div className="col-xs-3">
                          <ClearButton onClick = {this.onClearClick}/>
                          <OpButton op= '/' onClick = {this.onOpClick} />
                          <OpButton op= '*' onClick = {this.onOpClick} />
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
