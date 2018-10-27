var moduleA = require("./moduleA");

// This will print { message: 'Hello World' }
console.log(moduleA);

var moduleB = require("./moduleB");

// This will print 'Hello World'
console.log(`moduleB.getMessage(): ${moduleB.getMessage()}`);