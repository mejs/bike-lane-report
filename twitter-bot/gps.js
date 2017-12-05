// var file = '/dev/cu.usbserial';
// var file = '/dev/ttyUSB0';
//var file = '/dev/tty.usbserial';
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
  if(data){
  var lat1 = gps.state.lat;
  var lon1 = gps.state.lon;
  var location = `${lat1},${lon1}`;

  console.log("\033[2J\033[;H" + 
  "You are at (" + lat1 + ", " + lon1 + "),\n");
 }
 else console.log("error!");
 var fs = require('fs');
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
//setTimeout(function(){
//process.exit()

//}, 10000);

console.log ("help");
