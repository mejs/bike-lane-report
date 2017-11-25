//link generator

var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var whereami = require('@rafaelrinaldi/whereami');
var fs = require('fs');
//var geo = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/geo', 'utf8');
//var longtitude = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/longtitude', 'utf8');
//var longtitude = '40.617509';
//var latitude = '-73.981311'
function geolocation = whereami(error,callback) 
	if (error){
		console.log("error");
		console.log(error);
	}
	else {
		console.log('geolocation success', data);
		callback(data.rows[0]);
	
};
		

var location = `http://www.google.com/maps/place/${geolocation}`;
//var s = `http://www.google.com/maps/place/${location}`;
photo = fs.readFileSync('/home/vlado/github/bike-lane-report/camera/tweet.jpg', { encoding: 'base64' });

T.post('media/upload', { media_data: photo }, function (err, data, response) {
  if (err){
      console.log('ERROR');
      console.log(err);
    }
 else{
      console.log('Uploaded an image!');

T.post('statuses/update', {status: location, media_ids: data.media_id_string}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
else{
 console.log('Error!');
            console.log(error);
          }

});

      }
});

console.log(geolocation);
