var p = require("node-in-parallel");

var bigList = [];
var returnList = [];

exports.addToList = function(name, description, tag, hasValue) {

	bigList.push({"name":name, "description": description, "tag": tag, "hasValue": hasValue})	
}

exports.process = function () {
	

	p(bigList, function(listItem) {
		// check for defined values
		
		var tagIndex = process.argv.indexOf(listItem.tag);
		if (tagIndex != -1) {
			listItem.isPresent = true;
			
			if (listItem.hasValue === true) {
				listItem.valueFound = process.argv[tagIndex + 1];
			}
			returnList.push(listItem);
		}
		
	}, function () {
		//whole process complete
		console.log('Completed Entire loop');
		//console.log(returnList);
		return returnList;
	})
}
