/**
 * This code will demo how to read data from file
 */

// Load the fs module
var fs = require('fs');

var myData = {

    "firstName": "Nir",
    "LastName:": "Geier",
    "timesatmp": new Date()
};

// Use the fs API to write to file
fs.writeFile(`data-${Date.now()}.json`, // Name of the file
    JSON.stringify(myData), // the data we wish to write to the file

    // callback to get the returned data
    function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
