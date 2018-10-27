# 0204 - EventEmitter

`EventEmitter` is one of the NodeJs fundamentals. 
EventEmitter is a part of the NodeJs Events class and is capable of creating and broadcasting events.

`EventEmitter` provides diffrent ways for listening and fireing events.

## `EventEmitter` Methods

Method | Description
-------|------------
**emitter.on(eventName,listener)** | Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.
**emitter.addListener(eventName,&nbsp;listener)** | Alias for emitter.on(eventName, listener).
**emitter.eventNames()** | Returns an array listing the events for which the emitter has registered listeners. The values in the array will be strings or Symbols.
**emitter.emit(eventName[, ...args])** | Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each. <br/><br/> Returns true if the event had listeners, false otherwise.
**emitter.once(eventName,&nbsp;listener)** | Adds a **one-time listener** function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.
**emitter.removeListener(eventName,&nbsp;listener)** | Removes a listener from the listener array 
**emitter.off(eventName, listener)** | Alias for emitter.removeListener().
**emitter.removeAllListeners([eventName])**| Removes all listeners, or those of the specified event. 
**emitter.setMaxListeners(n)** | By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default that helps finding memory leaks. Obviously, not all events should be limited to just 10 listeners. The `emitter.setMaxListeners()` method allows the limit to be modified for this specific EventEmitter instance. **The value can be set to `Infinity (or 0)` to indicate an unlimited number of listeners.**
**emitter.listeners(eventName)**| Returns a copy of the array of listeners for the event named eventName.



`addListener`, `on`, `removeListener`, `setMaxListeners` & `removeAllListeners` Returns a reference to the `EventEmitter`, so those calls can be chained.

---
### Example
```js
  var 
      // load the module for the EventEmmiter
      events = require('events'),

      // Create default event emitter
      emmiter = new events.EventEmitter();

  /**
   * Add event listener to a default customEvent
   */
  emmiter.on('customEvent', function( ) {
      console.log(arguments);
  });

  /**
   * Fire our custom event using the eventEmmiter
   **/
  emmiter.emit('customEvent', 'Param1', 'Param2');
```




[Previous Chapter](/Chapters/01-Basics) | [Previous page](/Chapters/02-NodeFundamentals/0203-module.exports.md) | [Next Page](/Chapters/02-NodeFundamentals/0205-Promises.md) | [Next Chapter](/Chapters/03-CoreModules)

&copy; 2018 CodeWizardAcademy, Inc.

