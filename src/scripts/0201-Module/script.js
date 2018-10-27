/**
 * Any content within this file will be private
 * for this module.
 *
 * If we wish to set something to be public we will need
 * to "expose" it using the exports module
 **/

// Set private member to this file
var privateNumber = 0;

// Print the local variable to console
console.log(`privateNumber       : ${privateNumber}`);

// Print the "global" variable to the console
console.log(`global.privateNumber: ${global.privateNumber}`);

// Print the variable using `this` to the console
console.log(`this.privateNumber  : ${this.privateNumber}`);

// Print the variable using `self` to the console
console.log(`self.privateNumber  : ${self.privateNumber}`);
