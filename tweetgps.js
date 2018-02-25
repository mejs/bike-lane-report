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
	console.log(location);
  });

  parser.on('data', function(data) {
    gps.update(data);
});


