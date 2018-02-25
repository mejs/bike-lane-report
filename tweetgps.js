var fs = require('fs');
var GPS = require('gps');
var gps = new GPS;
const file = '/dev/serial0';
const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({ delimiter: '\r\n' });
const port = new SerialPort(file, { baudRate: 9600 });
port.pipe(parser);



gps.on('data', function() {
	var location = `${gps.state.lat},${gps.state.lon}`
fs.writeFile("/tmp/geolocation", location, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

  });

  parser.on('data', function(data) {
    gps.update(data);
  });

