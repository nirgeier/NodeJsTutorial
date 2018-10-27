# 0205 - Promises

### What is a promises?
The core idea behind promises is that a promise represents the **result** of an **asynchronous operation**. 

A promise is in one of three different states:

State         | Description
--------------|------------
**pending**   | The initial state of a promise.
**resolve**   | The state of a promise representing a successful operation.
**rejected**  | The state of a promise representing a failed operation.

Once a promise is fulfilled or rejected, it is **immutable** (i.e. it can never change again).

Consider the following code:
```js
    // read the file and parse it to JSON
    function readJSON(filename, callback){
        // NodeJs fs
        fs.readFile(filename, 'utf8', function (err, res){
            // check to see if there was an error while trying to read the file
            if (err) {
                return callback(err);
            }
            // Parse the result as JSON
            try {
                res = JSON.parse(res);
            } catch (ex) {
                return callback(ex);
            }
            // Execute teh callback with the reply
            callback(null, res);
        });
    }
```

- Callbacks can generate a Spaghetti code
```js

    loadUser(function( reply1 ){
        if ( reply1.success ){
            loadUserDetails( function( reply2 ){
                if( reply2.success ){
                    loadUserProfile( function( reply3 ){
                        if( reply3.success ){

                        }else{
                            ...
                        }
                    }); // asyncCall3
                } else{
                    ...
                }
            }); // asyncCall2
        }else{
             ...
        }
    }); // asyncCall1
```
- Using promisses we can simplify the code:

```js
loadUser()
.then(loadUserDetails)
.then(loadUserProfile);

// This is an async file reading method
function loadUser(filename, enc){
    // Classic promisess 
    return new Promise(function (resolve, reject){
        fs.readFile(filename, enc, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}

// This method will load the user details from the DB
function loadUserDetails(userId){
    // Classic promisess 
    return new Promise(function (resolve, reject){
        db.loadUser(userId, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}
```


