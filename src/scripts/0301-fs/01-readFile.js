/**
 * This code will demo how to read data from file
 */

// Load the fs module
var fs = require('fs');

// Use the fs API to read from file
fs.readFile('data.json', // Name of the file
    {encoding: 'utf-8'}, // the default is binary reading

    // callback to get the returned data
    function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });