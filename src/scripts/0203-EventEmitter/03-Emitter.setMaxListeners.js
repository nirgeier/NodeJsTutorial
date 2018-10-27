/**
 * Here we will see some more functions from the emitter
 **/

// Load our pre defined module
var EventEmitter = require('events').EventEmitter;


// Create the emitter instance
var emitter = new EventEmitter();

// Set the max number ofr events to listen to
emitter.setMaxListeners(3);

// Add few event listeners
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
emitter.on('customEvent', function() {});
