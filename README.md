# node-cmd-input
Process command line input switches for a node script

# Present Status

Non-functional

This project is now in development and should not be utilized yet.

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
cmdl.addToList("Server","Name of  the server to use","-s",true);
```

Now, the script will check for this on the commandline.

```
node.exe scriptName.js -s ServerName
```

Or, maybe you just want to use a simple switch like this.

```
//name, description, tag, hasValue
cmdl.addToList("Recursive","Run the process recursively","-r",false);
```

And now, the script will check for this.

```
node.exe scriptName.js -r
```

# Full sample script

```
var cmdl = require("node-cmd-switch");

cmdl.addToList("Server","Name of  the server to use","-s",true);
cmdl.addToList("Recursive","Run the process recursively","-r",false);
cmdl.process(function(result) {
	if (result.Recursive === true) {
		// run recursive process
		// property name comes from the name designated in the addToList call
	}
});

// TODO: Add how to run on the result