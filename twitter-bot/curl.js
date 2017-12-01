//curl test

var config = require('./config.js');
var curl = require('curlrequest');

curl.request({ url: 'ipinfo.io/loc'}, function (err,file) {
	if (err){
	console.log('ERROR');
	console.log(err);
	}
	else{
		console.log('Suceess');
		console.log(file);}

});	
