
// app.js
var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var fs = require('fs');

var tweetText = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/test.txt', 'utf8')
photo = fs.readFileSync('/home/vlado/github/bike-lane-report/camera/tweet.jpg', { encoding: 'base64' });	

T.post('media/upload', { media_data: photo }, function (err, data, response) {
  if (err){
      console.log('ERROR');
      console.log(err);
    }
 else{
      console.log('Uploaded an image!');

T.post('statuses/update', {status: tweetText, media_ids: data.media_id_string}, function(error, tweet, response) {
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
