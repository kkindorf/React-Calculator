var React = require("react");
var ReactDom = require("react-dom");
var NumButton = require("./numberButtons");
var ClearButton = require("./clearButton.js");
var OpButton = require("./operatorButtons.js");
var EvalButton = require("./evalButton.js");
var PercButton = require('./percentButton.js');
var ZeroButton = require('./zeroButton.js');
var string = '';
var total = '';
var initialState = {
  inputValue: '0'
}
var Calculator = React.createClass({
  getInitialState: function() {
      return initialState;
  },
  onNumClick: function(event) {
      if(event.target.value === '0' && string === ''){
        return;
      }
      if(string == total || string == 'Limit Met') {
          string = '';
      }
      string += event.target.value;
      if(string.length === 11){
        string = 'Limit Met';
      }
      this.setState({
          inputValue: string
      });

  },
  onOpClick: function(event) {
      if (isNaN(string[string.length - 1])) {
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
      for (var i = 0; i < string.length; i++) {
          if (string[i] == '%') {
              string = string.replace(string[i], '/100');
          }
      }
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
                <form>
                  <input type="text" id="text"
                    value={this.state.inputValue} readOnly/>
                      <div className="col-xs-3">
                        <ClearButton val = 'AC' onClick = {this.onClearClick}/>
                        <NumButton num= '7' onClick = {this.onNumClick}/>
                        <NumButton num= '4' onClick = {this.onNumClick}/>
                        <NumButton num= '1' onClick = {this.onNumClick}/>
                        <ZeroButton num= '0' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                        <ClearButton val = 'CE' onClick = {this.onClearClick}/>
                        <NumButton num= '8' onClick = {this.onNumClick}/>
                        <NumButton num= '5' onClick = {this.onNumClick}/>
                        <NumButton num= '2' onClick = {this.onNumClick}/>
                      </div>
                      <div className="col-xs-3">
                       <OpButton op= '/' onClick = {this.onOpClick} />
                        <NumButton num= '9' onClick = {this.onNumClick}/>
                        <NumButton num= '6' onClick = {this.onNumClick}/>
                        <NumButton num= '3' onClick = {this.onNumClick}/>
                        <NumButton num= '.' onClick = {this.onNumClick}/>
                      </div>
                        <div className="col-xs-3">
                          <OpButton op= '*' onClick = {this.onOpClick} />
                          <OpButton op= '-' onClick = {this.onOpClick} />
                          <OpButton op= '+' onClick = {this.onOpClick} />
                          <EvalButton onClick = {this.onEvalClick}/>
                      </div>
                </form>
              </div>
            </div>
          </div>

    )
  }
})

module.exports = Calculator;
