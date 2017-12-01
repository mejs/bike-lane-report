//link generator

var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var curl = require('curlrequest');
var fs = require('fs');
//var geolocation = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/geo', 'utf8');



//var location = `http://www.google.com/maps/place/${file}`;
photo = fs.readFileSync('/home/vlado/github/bike-lane-report/camera/tweet.jpg', { encoding: 'base64' });
geo = curl.request({ url: 'ipinfo.io/loc'}, function (err,file) {
        if (err){
        console.log('ERROR');
        console.log(err);
        }
        else{
                console.log('Suceess');
                console.log(file);}


var location = `http://www.google.com/maps/place/${file}`;

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
});

