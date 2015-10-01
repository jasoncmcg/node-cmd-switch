var p = require("node-in-parallel");

var bigList = [];
var returnItem = {};

exports.addToList = function(name, description, tag, hasValue) {

	bigList.push({"name":name, "description": description, "tag": tag, "hasValue": hasValue})	
}

exports.process = function (cb) {
	
	p(bigList, function(listItem) {
	
		var tagIndex = process.argv.indexOf(listItem.tag);
		if (tagIndex != -1) {
			listItem.isPresent = true;
			
			if (listItem.hasValue === true) {
				listItem.valueFound = process.argv[tagIndex + 1];
				
				if (listItem.valueFound.charAt(0) === "-") {
					listItem.valueFound = undefined;
				}
			}
			returnItem[listItem.name] = listItem;
		}
		
	}, function () {
		cb(returnItem);
	})
}
