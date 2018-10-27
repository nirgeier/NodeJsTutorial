# 0203 - module.exports

- To expose variables to the "public" we use the `module.exports`

### exports options:
```js
  // Set private variable
  var message = "Hello World";

  // Expose the message as property
  module.exports.message = message;

  // -----  Or ------
  // Export as an Object
  module.exports = {
    getMessage: () => message
  }

```




[Previous Chapter](/Chapters/01-Basics) | [Previous page](/Chapters/02-NodeFundamentals/0202-Module.md) | [Next Page](/Chapters/02-NodeFundamentals/0204-EventEmitter.md) | [Next Chapter](/Chapters/03-CoreModules)

&copy; 2018 CodeWizardAcademy, Inc.

