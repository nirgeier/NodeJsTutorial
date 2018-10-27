# 0107 - Debugging nodeJS

- Create a test file named `script.js`
- Copy this content to your script
```js

  // Generate array of 10 numbers
  var arr= Array.from(Array(10).keys());

  // Now lets add some debugging code
  arr.map(function( value , index, array  ){
    if (value === 5){
      debugger;
      console.log('Break Point');
    }
    return true;
  })

```

### How to debug the code?

1. [Using REPL](#1-using-repl)
2. [Using Chrome](#2-using-chrome)
3. [Using Visual Studio Code](#3-using-visual-studio-code)

#### 1. Using REPL 

- Run the code with the `inpect` flag
```
   node inspect script.js
```

- Now you should see something similar to:
```
  PS > node inspect .\script.js
  < Debugger listening on ws://127.0.0.1:9229/f730805f-27b8-4d46-afab-a1fe1c1ab35f
  < For help, see: https://nodejs.org/en/docs/inspector
  Break on start in file:///.../script.js:2
  1 (function (exports, require, module, __filename, __dirname) { 
    // Generate array of 10 numbers
> 2 var arr = Array.from(Array(10).keys());
  3
  4 // Now lets add some debugging code
debug>
```
- At this point you can use REPL commands
- Type help for full list
```
debug> help
```

REPL option | Desription
-------------|----------
run, restart, r      | Run the application or reconnect
kill                 | Kill a running application or disconnect
&nbsp;               | &nbsp;
cont, c              | Resume execution
next, n              | Continue to next line in current file
step, s              | Step into, potentially entering a function
out, o               | Step out, leaving the current function
backtrace, bt        | Print the current backtrace
list                 | Print the source around the current line where execution is currently paused
&nbsp;               | &nbsp;
setBreakpoint, sb    | Set a breakpoint
clearBreakpoint, cb  | Clear a breakpoint
breakpoints          | List all known breakpoints
breakOnException     | Pause execution whenever an exception is thrown
breakOnUncaught      | Pause execution whenever an exception isn't caught
breakOnNone          | Don't pause on exceptions (this is the default)
&nbsp;               | &nbsp;
watch(expr)          |  Start watching the given expression
unwatch(expr)        |  Stop watching an expression
watchers             |  Print all watched expressions and their current values
&nbsp;               | &nbsp;
exec(expr)           |  Evaluate the expression and print the value
repl                 |  Enter a debug repl that works like exec
&nbsp;               | &nbsp;
scripts              |  List application scripts that are currently loaded
scripts(true)        |  List all scripts (including node-internals)
&nbsp;               | &nbsp;
profile              |  Start CPU profiling session.
profileEnd           |  Stop current CPU profiling session.
profiles             |  Array of completed CPU profiling sessions.


#### 2. Using Chrome

- Execute the following code
```
   node --inspect-brk script.js
```
- Open chrome and use the build in inpect mechanism 
```
  chrome://inspect/

  // Inside this tab choose your application and debug it
```

#### 3. Using Visual Studio Code
- Select the desired file
- Under the Debug menu choose `Start Debugging` or <kbd>F5</kbd>
- From the debugger options choose `Node.js`



