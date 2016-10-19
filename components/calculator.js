var React = require("react");
var ReactDom = require("react-dom");
var NumButton = require("./numberButtons");
var ClearButton = require("./clearButton.js");
var OpButton = require("./operatorButtons.js");
var EvalButton = require("./evalButton.js");
var string = '';
var total = '';
var initialState = {
  inputValue: '',
  totalValue: '',
  string: ''
}
var Calculator = React.createClass({
  getInitialState: function() {
    return initialState;
  },
  onNumClick: function(event) {
    //console.log(event.target.value);
    string += event.target.value;
    this.setState({
      inputValue: event.target.value,
      totalValue: string

    });
  },
  onOpClick: function(event) {
      string += event.target.value;
    this.setState({
      inputValue: event.target.value,
      totalValue: string
    });
  },
  onClearClick: function() {
    this.setState(this.getInitialState());
    string = '';

  },

  onEvalClick: function() {
    total = eval(string);
    this.setState({
      inputValue: total,
      totalValue: ''
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
                    <input type = "text" id="total-value" value = {this.state.totalValue}/>
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
