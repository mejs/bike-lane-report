var fs = require('fs');
const file = '/dev/serial0';
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


gps.on('data', function() {
	var lat = gps.state.lat;
	var lon = gps.state.lon;
	var location = `${gps.state.lat},${gps.state.lon}`
	console.log("\033[2J\033[;H" +
  "You are at (" + lat + ", " + lon + "),\n");
fs.writeFile("./geolocation.txt", location, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

  });

  parser.on('data', function(data) {
    gps.update(data);
  });
setTimeout(function(){
process.exit()
}, 2000);

