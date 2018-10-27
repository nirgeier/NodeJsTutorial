# 0302 - readline

The `readline` module provides an interface for reading data from a [Readable][]
stream (such as [`process.stdin`]) one line at a time. It can be accessed using:

```js
const readline = require('readline');
```

The following simple example illustrates the basic use of the `readline` module.

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```

Once this code is invoked, the Node.js application will not terminate until the
`readline.Interface` is closed because the interface waits for data to be
received on the `input` stream.

## Examples

### rl.question(query, callback)

- `query` {string} A statement or query to write to `output`, prepended to the prompt.
- `callback` {Function} A callback function that is invoked with the user's input in response to the `query`.

- The `rl.question()` method displays the `query` by writing it to the `output`, waits for user input to be provided on `input`, then invokes the `callback` function passing the provided input as the first argument.
- When called, `rl.question()` will resume the `input` stream if it has been paused.
- If the `readline.Interface` was created with `output` set to `null` or
`undefined` the `query` is not written.

---

Examples:

```js
rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});
```

## Example: Read File Stream Line-by-Line

A common use case for `readline` is to consume input from a filesystem
[Readable][] stream one line at a time:

```js
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});
```


