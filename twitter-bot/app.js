//link generator

var twitter = require('twitter');
var config = require('./config.js');
var T = new twitter(config);
var curl = require('curlrequest');
var fs = require('fs');
photo = fs.readFileSync('./camera/tweet.jpg', { encoding: 'base64' });

var file = '/dev/serial0';

const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
  delimiter: '\r\n'
});

const port = new SerialPort(file, {
  baudRate: 9600
});

port.pipe(parser);


var GPS = require('gps');
var gps = new GPS;

gps.on('data', function(data) {

  var lat1 = gps.state.lat;
  var lon1 = gps.state.lon;


  console.log("You are at " + lat1 + ", " + lon1 + "");

var location = `http://www.google.com/maps/place/${lat1}`;

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
parser.on('data', function(data) {
  gps.update(data);
});

