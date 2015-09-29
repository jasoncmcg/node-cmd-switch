var p = require("node-in-parallel");

var bigList = [];

var singleCheck = function (item) {
	var units = process.argv[2];
		if(units == '-f'){
			this.setUnits('Fahrenheit');
		} else {
			this.setUnits('Celsius');
		}
}


var valueItem = function (item) {
	var city;
	if(process.argv.indexOf("-c") != -1){ //does our flag exist?
		city = process.argv[process.argv.indexOf("-c") + 1]; //grab the next item
	}
}

exports.addToList = function(name, description, tag, hasValue) {

	bigList.push({"name":name, "description": description, "tag": tag, "hasValue": hasValue})
	
}

exports.process = function () {
	
	console.log(bigList);
	
	var doneWithDefinedItems = function () {}
	
	var forEachArgument = function (item) {
		console.log(item);
	}
	
	var forEachDefinedItem = function (item) {
		p(process.arv, forEachArgument, doneWithDefinedItems)
	}
	
	p(bigList, forEachDefinedItem, doneWithDefinedItems)
}