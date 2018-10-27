/**
 ** This code will demonstrate EventEmitter usage
 ** Here we will explicitly create EventEmitter object
 **/

// load the module for the EventEmmiter
var
    events = require('events'),

// Create default event emitter
    emmiter = new events.EventEmitter();

/**
 * Add event listener to a default customEvent
 */
emmiter.on('customEvent', function( ) {
    console.log(arguments);
});

/**
 * Fire our custom event using the eventEmmiter
 **/
emmiter.emit('customEvent', 'Param1', 'Param2');