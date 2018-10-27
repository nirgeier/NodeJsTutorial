/**
 * This file will demonstrate the write stream
 **/
var fs = require("fs"),
    readLine = require('readline');

// Create the stdin / stdout
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


//
// Ask the user for the next line which will be written to file
//
var writeStream = fs.createWriteStream("lines.txt", "UTF-8");

// Ask the user for input
rl.question("Type the next line in the file:",
    function(data) {

        // Write the first line
        writeStream.write(data);

        // Prompt for more input and this time append it to the file
        rl.setPrompt("Next line: ");
        rl.prompt();

        // Wait for input line
        rl.on('line', function(nextLine) {

            // Append data to the file
            fs.appendFile("lines.txt", "\n" + nextLine);

            // Close the stream
            rl.close();
        });


    });
