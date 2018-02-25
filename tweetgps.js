var fs = require('fs');
var GPS = require('gps');
var gps = new GPS;
var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var curl = require('curlrequest');
photo = fs.readFileSync('/tmp/tweet.jpg', { encoding: 'base64' });
const file = '/dev/serial0';
const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({ delimiter: '\r\n' });
const port = new SerialPort(file, { baudRate: 9600 });
port.pipe(parser);

//gps grabs location

gps.on('data', function() {
	var location = `${gps.state.lat},${gps.state.lon}`
  });

//  parser.on('data', function(data) {
//    gps.update(data);
//});


//tweets photo + location

T.post('media/upload', { media_data: photo }, function (err, data, response) {
  if (err){
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

