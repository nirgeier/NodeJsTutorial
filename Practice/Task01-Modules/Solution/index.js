// Dependencies
const input = require('./input');

// The allowed operators
var OPERATORS = {
  "+": require("./CalculatorAdd"),
  "-": require("./CalculatorSubstract"),
  "*": require("./CalculatorMultiply"),
  "/": require("./CalculatorDivide"),
}

// The data which we will need to use
var data = {
  // The first number
  firstNumber: 0,
  //The second number
  secondNumber: 0,
  // The allowed operators
  operators: OPERATORS,
  // The operator index from the enum
  operator: '',
  // The callback to execute when input is done
  callback: calculate
};


// The "main"
function readLines() {
  // read the input,
  // calculate = callback to execute when closing the input
  input.readLines(data);
}

function calculate() {
  let results = OPERATORS[data.operator](data.firstNumber, data.secondNumber);
  console.log('------------------------------'.yellow);
  console.log(`${data.firstNumber} ${data.operator} ${data.secondNumber} = ${results}`);
}
readLines();