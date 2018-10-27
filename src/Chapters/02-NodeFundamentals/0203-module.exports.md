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


