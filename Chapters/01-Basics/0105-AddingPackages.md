# 0105 - Adding packages

- Lets add colors to our output.
- In order to do so we need to install the required colors packages and then add them to our code

### Installing additional packages
- Open terminal and type the following. The command will install the required packa and will add it to the  `package.json` as dependency
```
npm i colors
```

- The `package.json` now contain the version we just installed
```js
  "dependencies": {
      "colors": "^1.3.2"
    }
```
- The package was installed into the `node_modules` folder

### Use the required packages
- Now that we have the package installed lest use it
- In order to use packages we need to `require` them in our script
- Add the code to the script file
```js
  // Load the colors package
  var colors = require('colors');

  // This will print 'Hello World' in green
  console.log('Hello World'.green); // outputs green text

  // This will print 'Hello World' in rainbows colors
  console.log('OMG Rainbows!'.rainbow); // rainbow

  // This will print in the default font color
  console.log('Hello world');

  // This will print in the default color as the backgorund color
  console.log('Hello world'.inverse);
```


[Previous page](/Chapters/01-Basics/0104-npm.md) | [Next Page](/Chapters/01-Basics/0106-nodemon.md) | [Next Chapter](/Chapters/02-NodeFundamentals)

&copy; 2018 CodeWizardAcademy, Inc.

