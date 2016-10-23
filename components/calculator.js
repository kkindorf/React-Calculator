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
var value = '';
var initialState = {
  inputValue: '0',
  equation: '0'
}
var Calculator = React.createClass({
  getInitialState: function() {
      return initialState;
  },
  onNumClick: function(event) {
    if(value === '/'|| value === '+'|| value === '*' || value === '-' || value === 'Digit Limit Met' || value === 'Not a Number'){
      value = '';
    }
    if(string == 'Digit Limit Met' || string === 'Not a Number'){
      string = '';
    }

    if(value === '0'){
      string = '';
      value = '';
    }
    if(value ==='Infinity'){
       return;
    }
    string += event.target.value;
    value += event.target.value;
      if(string.length === 14){
        value = 'Digit Limit Met';
        string = '';
      }
      this.setState({
          inputValue: value,
          equation: string
      });
  },
  onOpClick: function(event) {
    if(value === '/'|| value === '+'|| value === '*' || value === '-'){
      return;
    }
    if(value == '' && string == ''){
      return;
    }

    if(value === 'Digit Limit Met' || value === 'Not a Number'){
      return;
    }
     value = event.target.value;
      string += event.target.value;
      this.setState({
          inputValue: value,
          equation: string
      });

  },
  onDecimalClick: function(event){
    if(value === 'Digit Limit Met'){
      value = '';
      string ='';
    }
    if(value === total.toString()){
      return;
    }
    if(value.indexOf(event.target.value) !== -1){
      return;
    }
    value = event.target.value;
    string+=event.target.value;
    this.setState({
        inputValue: value,
        equation: string
    });
  },
  onClearClick: function() {
      this.setState(this.getInitialState());
      string = '';
      value = '';
  },
  onEvalClick: function() {
      total = eval(string);
      if(total.toString().length > 10){
        total = 'Digit Limit Met';
      }
      if(total == Number.POSITIVE_INFINITY){
        total = 'Digit Limit Met';
      }
      if(isNaN(total)){
        total = 'Digit Limit Met';
      }
      this.setState({
          inputValue: total,
          equation: ''
      });
      value = total.toString();
      string = total;
  },
  render: function() {
    return (
          <div className="container-fluid">
            <div className="row">

              <div className="calc-container">

                  <input type="text" id="text"
                    value={this.state.inputValue} readOnly/>
                    <input type="text" id="equation"
                      value={this.state.equation} readOnly/>
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
                        <NumButton num= '.' onClick = {this.onDecimalClick}/>
                      </div>
                      <div className="col-xs-3">
                        <OpButton op= '*' onClick = {this.onOpClick} />
                        <OpButton op= '-' onClick = {this.onOpClick} />
                        <OpButton op= '+' onClick = {this.onOpClick} />
                        <EvalButton onClick = {this.onEvalClick}/>
                    </div>
              </div>
            </div>
          </div>
    )
  }
})

module.exports = Calculator;
