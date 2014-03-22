var request = require('request');

exports.index = function (req, res, next) {	
    request('https://api.forecast.io/forecast/8b336c7b4e4835b8b394e73eaf663e13/37.8267,-122.423', function(error, data, body) {
    	console.log(arguments);
    	res.json(JSON.parse(body));
    });
}