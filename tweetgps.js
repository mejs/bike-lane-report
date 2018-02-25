var SerialPort = require('serialport');
var port = new SerialPort.SerialPort('/dev/serial0', { 
  baudrate: 9600,
  parser: SerialPort.parsers.readline('\r\n')
});
 
var GPS = require('gps');
var gps = new GPS;
 
gps.on('data', function(data) {
  console.log(data, gps.state);
});
 
port.on('data', function(data) {
  gps.update(data);
});
