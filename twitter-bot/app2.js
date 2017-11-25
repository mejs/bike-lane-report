
// app.js
var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var fs = require('fs');

photo = fs.readFileSync('/home/vlado/github/bike-lane-report/camera/tweet.jpg', { encoding: 'base64' });	

T.post('media/upload', { media_data: photo }, function (err, data, response) {
  if (err){
      console.log('ERROR');
      console.log(err);
    }
 else{
      console.log('Uploaded an image!');

	T.post('statuses/update', {
        media_ids: new Array(data.media_id_string)
      },
        function(err, data, response) {
          if (err){
            console.log('Error!');
            console.log(err);
          }
          else{
            console.log('Posted an image!');
          }
         }
       );
      }
});
