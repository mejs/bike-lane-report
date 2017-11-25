// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var fs = require('fs');

var tweetText = fs.readFileSync('/home/vlado/github/bike-lane-report/twitter-bot/test.txt', 'utf8')
	
var tweet = {
      status: tweetText
  }

T.post('statuses/update', tweet, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});
