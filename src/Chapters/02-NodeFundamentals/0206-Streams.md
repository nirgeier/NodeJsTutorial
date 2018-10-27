# 0206 -Streams

- Streams in nodejs are powerful using streams your application will achieve small memory footprint.
- Streams are a **first-class construct** in Node.js for handling data. 

There are three main concepts to understand:

Concept      | Description
-------------|------------
**source**   | The data origin
**pipeline** | data passes through (you can filter, or modify it here),
**sink**     | data ends up.

Example:
```js
  // ------------------------------
  //  Copy file using streams
  // ------------------------------
  
  // Load the fs module
  const fs = require('fs')

  // Set a ReadStream
  const readableStream = fs.createReadStream('original.txt')
  // Set a WriteStream
  var writableStream = fs.createWriteStream('copy.txt')
  // Write the file
  readableStream.pipe(writableStream)
```

- Unzip (decompress) file using streams
```js
  const fs = require('fs')
  const zlib = require('zlib')

  fs.createReadStream('original.txt.gz')
     // Decompress a gzip stream.
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('original.txt'))
```    


