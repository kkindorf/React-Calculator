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
    //checking all edge cases
    if(value === '/'|| value === '+'|| value === '*' || value === '-' || value === 'Digit Limit Met' || value === 'Not a Number' || value === total.toString()){
      value = '';
    }
    if(string == 'Digit Limit Met' || string === 'Not a Number'){
      string = '';
    }
    if(value === '0'){
      value = '';
      string = '';
    }
    if(value === '0' && parseInt(event.target.value) >= 0){
      return;
    }
    //TODO see if I can shorten this statement later
    if(event.target.value === '0' && string.charAt(string.length - 1) === '0' && isNaN(parseInt(string.charAt(string.length - 2))) && string.charAt(string.length - 2)!=='.'){
      return;
    }
    if(string === '0' || string === total.toString()){
      string = '';
    }
    if(value ==='Infinity'){
       return;
    }
    //after edge cases checked add event.target.value to string and value
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
  //on operator click
  onOpClick: function(event) {
    //if value is already an operator, break
    if(value === '/'|| value === '+'|| value === '*' || value === '-'){
      return;
    }
    //if we are at first page load you cannot add a operator
    if(value == '' && string == ''){
      return;
    }
    //if the last character in string is a decimal, than an operator cannot
    //be added to equation
    if(string.charAt(string.length - 1) === '.'){
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
      value = '';
      string = '';
    }
    //you cannot add a decimal to a number if the number is already a decimal
    if(value.indexOf(event.target.value) !== -1){
      return;
    }
    value += event.target.value;
    string+=event.target.value;
    this.setState({
        inputValue: value,
        equation: string
    });
  },
  onClearClick: function() {
    //reset state of app
      this.setState(this.getInitialState());
      string = '';
      value = '';
  },
  onEvalClick: function() {
      total = eval(string);
      if(total.toString().length > 10){
        total = 'Digit Limit Met';
      }
      //if total equals infinity
      if(total == Number.POSITIVE_INFINITY){
        total = 'Digit Limit Met';
      }
      //if total is not a number
      if(isNaN(total)){
        total = 'Digit Limit Met';
      }
      this.setState({
          inputValue: total,
          equation: ''
      });
      //store total in value and string for later use
      value = total.toString();
      string = total.toString();
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
                            <OpButton op= '*' onClick = {this.onOpClick}/>
                            <OpButton op= '-' onClick = {this.onOpClick}/>
                            <OpButton op= '+' onClick = {this.onOpClick}/>
                            <EvalButton onClick = {this.onEvalClick}/>
                        </div>
                    </div>
                  </div>
                </div>
          )
      }
})

module.exports = Calculator;
