const fs = require('fs')

function getCouponsData(path = 'assets/coupons.json') {
	const coupons_json = fs.readFileSync(path, 'utf8');
	const coupons_object = JSON.parse(coupons_json);
	return coupons_object.coupons;
}

// write json data in a file call result.json
function writeJsonData(jsonData, path = 'assets/result.json') {
	//Check if is type json
	if (typeof jsonData === 'object') {
		throw new Error('The data is not a json object');
	}

	fs.writeFileSync(path, jsonData);
}

//Export this function to be used in other files
module.exports = {
	getCouponsData,
	writeJsonData,
};