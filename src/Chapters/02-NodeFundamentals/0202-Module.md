# 0201 - Module

- Node module is similar to Vanilla Js Module pattern
- Each file can contain one or more modules.
- The module contains public and private variabes
- The deafault modifier is private.
- Copy the following content to your script and lets go over it
- Try to figure out what will be printed:

```js
  // Set private member to this file
  let privateNumber = 0;

  // Print the local variable to console
  console.log(`privateNumber       : ${privateNumber}`);

  // Print the "global" variable to the console
  console.log(`global.privateNumber: ${global.privateNumber}`);

  // Print the variable using `this` to the console
  console.log(`this.privateNumber  : ${this.privateNumber}`);

  // Print the variable using `self` to the console
  console.log(`self.privateNumber  : ${self.privateNumber}`);

```


