/**
 * Usually we will not use EventEmitter
 * as a standalone instance
 *
 * We will usually "extend" and add the EventEmitter abilities
 * to our module
 **/

var

    // Since the EventEmitter is exported in the events module we
    // can load it directly
    EventEmitter = require('events').EventEmitter,

    // Load the util module
    util = require('util');


// Create our oun module
var OurModule = function () {

    // Local name variable
    this.name = '';

};

// Add the EventEmitter capabilities to our module
util.inherits(OurModule, EventEmitter);

/**
 * Add the setName to set the instance name
 * @param name
 */
OurModule.prototype.setName = function (name) {
    this.name = name;
};

/**
 * Add getName method to return the name
 * @returns {string|*}
 */
OurModule.prototype.getName = function () {
    return this.name;
};

// Export public method(s)
module.exports = OurModule;