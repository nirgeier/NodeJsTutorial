// Generate array of 10 numbers
var arr = Array.from(Array(10).keys());

// Now lets add some debugging code
arr.map(function (value, index, array) {
  if (value === 5) {
    debugger;
    console.log('Break Point');
  }
  return true;
})