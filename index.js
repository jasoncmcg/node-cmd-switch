var p = ("node-in-parallel");

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

var addToList = function(name, description, tag, hasValue) {

	bigList.add({"name":name, "description": description, "tag": tag, "hasValue": hasValue})
	
}

exports.process = function () {
	
	var doneWithDefinedItems = function () {}
	
	var forEachArgument = function () {
		
	}
	
	var forEachDefinedItem = function () {
		p(process.arv, forEachArgument, doneWithDefinedItems)
	}
	
	p(bigList, forEachDefinedItem(bigList), doneWithDefinedItems)
}