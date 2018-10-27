/**
 * Here we will see some more functions from the emitter
 **/

// Load our pre defined module
var EventEmitter = require('events').EventEmitter;


// Create the emitter instance
var emitter = new EventEmitter();


// Add few event listeners
emitter.once('customEvent', function() {
    console.log('---- Once captured ---- ');
});

emitter.on('customEvent', function() {
    console.log('---- Custom event #1 ---- ');
});

emitter.on('customEvent', function() {
    console.log('---- Custom event #2 ---- ');
});

emitter.on('customEvent', function() {
    console.log('---- Custom event #3 ---- ');
});

// Fire the custom event
console.log('\n\n');
emitter.emit('customEvent');
console.log('\n\n');
emitter.emit('customEvent');
console.log('\n\n');
emitter.emit('customEvent');

