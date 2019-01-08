// 
// This file will contain functions for reading user input
// 

// Dependencies
const readline = require('readline');
const colors = require('colors');

// Setup the readline
const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Read the required input and execute the callback when done
 */
function readLines(data) {

  // Register for the close event to calculate the result
  line.on('close', data.callback);

  // Read the required inputs
  line.question(`What is your first number: `.green, (answer1) => {
    data.firstNumber = answer1;
    line.question(`Your operator [${Object.keys(data.operators)}]:   `.green, (answer2) => {
      data.operator = answer2;
      line.question(`Your second number:        `.green, (answer3) => {
        data.secondNumber = answer3;
        line.close();
      });
    });
  });
}

module.exports = {
  readLines: readLines
}