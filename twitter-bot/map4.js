//link generator

var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var curl = require('curlrequest');
var fs = require('fs');
//var geo = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/geo', 'ascii');


function processData (callback) {
	curl.request({ url: 'ipinfo.io/loc'}, function (err, stdout, meta) {
	if (stdout) {
   	 console.log("Error!");
//	 callback(err);
	}
//	geo = stdout;
	else
	callback(stdout);	
        var location = `http://www.google.com/maps/place/${stdout}`;
	console.log(location);
//	});
//	photo = fs.readFileSync('/home/vlado/github/bike-lane-report/camera/tweet.jpg', { encoding: 'base64' });
//	T.post('media/upload', { media_data: photo }, function (err, data, response) {
//	  if (err){
//	      console.log('ERROR');
//	      console.log(err);
//	    }
//	 else{
//	      console.log('Uploaded an image!');
//	T.post('statuses/update', {status: location, media_ids: data.media_id_string}, function(error, tweet, response) {
//	  if (!error) {
//	    console.log(tweet);
//	  }
//	else{
//	 console.log('Error!');
//	            console.log(error);
//	          }	
//		});
//	      }
	});
}
//console.log(geo);
