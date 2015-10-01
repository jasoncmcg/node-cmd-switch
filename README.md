# node-cmd-input
Process command line input switches for a node script

# How to Install

This is meant to be a library utilized in your project. 
So, run this from your project folder's root.

```
npm install node-cmd-input
```

# How to Setup

Require the library at the top of your main script.

```
var cmdl = require("node-cmd-switch");
```

# How to Use

This will recognize two different kind of commandline switches.
You will need to specify what you have.
Create the object like this.

```
//name, description, tag, hasValue
cmdl.addToList("server","Name of  the server to use","-s",true);
```

Now, the script will check for this on the commandline.

```
node.exe scriptName.js -s ServerName
```

Or, maybe you just want to use a simple switch like this.

```
//name, description, tag, hasValue
cmdl.addToList("recursive","Run the process recursively","-r",false);
```

And now, the script will check for this.

```
node.exe scriptName.js -r
```

# Full sample script

Note that the `result` object is the object returned from the `callback`.
The names are appended to the `result` object with all the values available.
From there, if you added a `-s` with a `serverName`, you will be able to use `result.serverName` to get all the values.
This includes the original object as `{"name":name, "description": description, "tag": tag, "hasValue": hasValue}` and 
the appended properties of `isPresent` and `valueFound`.

So, you can use an if statement to see if a property is there on `isPresent` and if the property has a value, you will find it in the `valueFound` property.
The original object properties are included for reference.

```

var cmdl = require("node-cmd-switch");

console.log(cmdl);
cmdl.addToList("server","Name of  the server to use","-s",true);
cmdl.addToList("recursive","Run the process recursively","-r",false);

cmdl.process(function(result){
	console.log(result.server.valueFound);
});

```